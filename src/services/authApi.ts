import axios from 'axios';
import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEnv } from '../utils/env';
import { STORAGE_KEYS } from '../constants';
import { setCachedToken, clearCachedToken } from '../utils/tokenCache';
import { clearPharmacistGuestSession } from '../utils/pharmacistGuestSession';
import { normalizeMemberForSession } from '../utils/userRole';

const API_TIMEOUT = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export interface LoginAuthPayload {
  accessToken?: string;
  access_token?: string;
  refreshToken?: string;
  refresh_token?: string;
  token?: string;
  user?: unknown;
  [key: string]: unknown;
}

export type SocialLoginResult =
  | { needsSignup: true; email: string }
  | LoginAuthPayload;

export function isSocialLoginNeedsSignup(
  r: SocialLoginResult
): r is { needsSignup: true; email: string } {
  return typeof r === 'object' && r !== null && (r as { needsSignup?: boolean }).needsSignup === true;
}

function normalizeError(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    const apiResponse = error.response?.data as ApiResponse<unknown> | undefined;
    const message =
      apiResponse?.error?.message ||
      error.response?.statusText ||
      error.message ||
      '요청 중 오류가 발생했습니다.';
    return new Error(message);
  }
  if (error instanceof Error) return error;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

export async function loginMember(params: {
  email: string;
  password: string;
}): Promise<LoginAuthPayload> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  const body = { email: params.email, password: params.password };
  if (__DEV__) {
    console.log('[authApi] login 요청:', { url: `${baseURL}/oth-path`, email: params.email });
  }
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers['X-Client-Token'] = oth-secret;
    const res = await axios.post<ApiResponse<LoginAuthPayload>>(
      `${baseURL}/oth-path`,
      body,
      { timeout: API_TIMEOUT, headers }
    );

    if (__DEV__) {
      console.log('[authApi] login 원본 응답:', {
        status: res.status,
        data: JSON.stringify(res.data, null, 2),
      });
    }

    const data = res.data?.data ?? (res.data as unknown as LoginAuthPayload);

    let payload: LoginAuthPayload = {};

    if (data && typeof data === 'object' && data !== null) {
      const dataObj = data as Record<string, unknown>;

      if (dataObj.tokens && typeof dataObj.tokens === 'object' && dataObj.tokens !== null) {
        const tokens = dataObj.tokens as Record<string, unknown>;
        const accessToken = tokens.accessToken || tokens.access_token || tokens.token;
        if (typeof accessToken === 'string') {
          payload.accessToken = accessToken;
          payload.access_token = accessToken;
          payload.token = accessToken;
        }
        const refreshToken = tokens.refreshToken || tokens.refresh_token;
        if (typeof refreshToken === 'string') {
          payload.refreshToken = refreshToken;
          payload.refresh_token = refreshToken;
        }

        payload.tokens = dataObj.tokens;
      }

      if (dataObj.member) {
        payload.user = dataObj.member;
        payload.member = dataObj.member;
      }

      if (!payload.accessToken) {
        const directToken = dataObj.accessToken ?? dataObj.access_token ?? dataObj.token;
        if (typeof directToken === 'string') {
          payload.accessToken = directToken;
          payload.access_token = directToken;
          payload.token = directToken;
        }
      }
    } else {

      payload = typeof data === 'object' && data !== null ? (data as LoginAuthPayload) : { token: data };
    }

    const authHeader = res.headers?.authorization ?? res.headers?.Authorization;
    if (typeof authHeader === 'string' && authHeader.toLowerCase().startsWith('bearer ')) {
      const tokenFromHeader = authHeader.slice(7).trim();
      if (tokenFromHeader) {
        payload.accessToken = tokenFromHeader;
        payload.access_token = tokenFromHeader;
        payload.token = tokenFromHeader;
      }
    }

    if (__DEV__) {
      const hasToken =
        !!(payload.accessToken ?? payload.access_token ?? payload.token);
      console.log('[authApi] login 파싱된 payload:', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
        hasToken,
        hasMember: !!payload.member || !!payload.user,
        tokenFromHeader: !!authHeader,
        payloadKeys: Object.keys(payload),
      });
    }

    return payload;
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.error('[authApi] login 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    throw normalizeError(error);
  }
}

export async function socialLogin(params: {
  provider: 'google' | 'apple' | 'kakao' | 'naver';
  token: string;
}): Promise<SocialLoginResult> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const path = (env.AUTH_SOCIAL_LOGIN_PATH?.trim()) || '/oth-path';
  const url = `${baseURL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  const body = { provider: params.provider, token: params.token };
  if (__DEV__) {
    console.log('[authApi] social-login 요청:', {
      url,
      provider: params.provider,
      hasClientToken: !!oth-secret,
      oth-secretPreview: oth-secret ? `${oth-secret.slice(0, 8)}...` : '(none)',
    });
  }
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers['X-Client-Token'] = oth-secret;
    const res = await axios.post<ApiResponse<LoginAuthPayload & { needsSignup?: boolean; email?: string }>>(
      url,
      body,
      { timeout: API_TIMEOUT, headers }
    );
    const raw = res.data as Record<string, unknown> | undefined;
    const data = (raw?.data != null ? raw.data : raw) as Record<string, unknown> | null | undefined;
    const needsSignupVal = data?.needsSignup ?? raw?.needsSignup;
    const emailVal = data?.email ?? raw?.email;

    const payload: LoginAuthPayload =
      typeof data === 'object' && data !== null ? (data as LoginAuthPayload) : ({ token: data } as LoginAuthPayload);
    const authHeader = res.headers?.authorization ?? res.headers?.Authorization;
    if (typeof authHeader === 'string' && authHeader.toLowerCase().startsWith('bearer ')) {
      const tokenFromHeader = authHeader.slice(7).trim();
      if (tokenFromHeader) {
        payload.accessToken = tokenFromHeader;
        payload.access_token = tokenFromHeader;
        payload.token = tokenFromHeader;
      }
    }
    const hasToken = !!getTokenFromPayload(payload);
    const hasMember = !!(payload as Record<string, unknown>).member;

    if (__DEV__) {
      console.log('[authApi] social-login 원본 응답:', {
        hasData: !!data,
        needsSignup: needsSignupVal,
        email: emailVal,
        keys: data ? Object.keys(data) : [],
        hasToken,
        hasMember,
      });
    }

    if (needsSignupVal === true && !hasToken) {
      if (__DEV__) console.log('[authApi] social-login → 회원가입 플로우 (needsSignup, 토큰 없음)', { email: emailVal });
      return { needsSignup: true, email: typeof emailVal === 'string' ? emailVal : '' };
    }
    if (!hasToken) {
      if (__DEV__) console.log('[authApi] social-login → 회원가입 플로우 (토큰 없음)');
      return { needsSignup: true, email: typeof emailVal === 'string' ? emailVal : '' };
    }
    if (__DEV__) console.log('[authApi] social-login → 로그인 처리', { hasToken, hasMember });
    return payload;
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.error('[authApi] social-login 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      const msg = (error.response?.data as { error?: { message?: string } })?.error?.message ?? '';
      if (msg.includes('Google sign-in is not configured') || msg.includes('not configured')) {
        throw new Error('이 서버에는 Google 로그인이 설정되어 있지 않습니다. 본 서버 주소를 확인하거나 관리자에게 문의하세요.');
      }
    }
    throw normalizeError(error);
  }
}

function getTokenFromPayload(payload: LoginAuthPayload): string | null {
  let raw = payload.accessToken ?? payload.access_token ?? payload.token;
  if (raw && typeof raw === 'string') return raw;
  const pl = payload as Record<string, unknown>;
  const data = pl.data;
  if (data && typeof data === 'object' && data !== null) {
    const d = data as Record<string, unknown>;
    raw = (d.accessToken ?? d.access_token ?? d.token) as string | undefined;
    if (typeof raw === 'string') return raw;
    const innerTokens = d.tokens;
    if (innerTokens && typeof innerTokens === 'object' && innerTokens !== null) {
      const t = innerTokens as Record<string, unknown>;
      raw = (t.accessToken ?? t.access_token ?? t.token ?? t.access) as string | undefined;
      if (typeof raw === 'string') return raw;
    }
  }
  const tokens = pl.tokens;
  if (tokens && typeof tokens === 'object' && tokens !== null) {
    const t = tokens as Record<string, unknown>;
    raw = (t.accessToken ?? t.access_token ?? t.token ?? t.access) as string | undefined;
    if (typeof raw === 'string') return raw;
  }
  if (typeof tokens === 'string') return tokens;
  return null;
}

export async function persistAuthSession(
  payload: LoginAuthPayload,
  keepLoggedIn: boolean = true
): Promise<void> {
  clearPharmacistGuestSession();
  if (__DEV__) {
    console.log('[authApi] persistAuthSession 시작:', {
      _ts: Date.now(),
      _time: new Date().toISOString(),
      payloadKeys: payload ? Object.keys(payload) : [],
      hasAccessToken: !!(payload.accessToken || payload.access_token || payload.token),
      hasTokens: !!(payload as Record<string, unknown>).tokens,
    });
  }

  const token = getTokenFromPayload(payload);
  if (__DEV__) {
    console.log('[authApi] getTokenFromPayload 결과:', {
      _ts: Date.now(),
      _time: new Date().toISOString(),
      tokenFound: !!token,
      tokenLength: token ? token.length : 0,
      tokenPreview: token ? `${token.substring(0, 20)}...` : null,
    });
  }

  if (token) {
    await AsyncStorage.setItem(STORAGE_KEYS.authToken, token);
    setCachedToken(token); 

    const savedToken = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
    if (__DEV__) {
      console.log('[authApi] persistAuthSession: 토큰 저장 완료', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
        saved: !!savedToken,
        savedLength: savedToken ? savedToken.length : 0,
      });
    }
  } else {
    if (__DEV__) {
      console.warn('[authApi] persistAuthSession: 응답에서 토큰을 찾지 못함', {
        keys: payload ? Object.keys(payload) : [],
        payload: JSON.stringify(payload, null, 2),
      });
    }
  }

  const refreshToken = payload.refreshToken ?? payload.refresh_token;
  if (refreshToken && typeof refreshToken === 'string') {
    await AsyncStorage.setItem(STORAGE_KEYS.refreshToken, refreshToken);
    if (__DEV__) {
      console.log('[authApi] persistAuthSession: Refresh Token 저장 완료', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
      });
    }
  } else {

    const tokens = (payload as Record<string, unknown>).tokens;
    if (tokens && typeof tokens === 'object' && tokens !== null) {
      const tokensObj = tokens as Record<string, unknown>;
      const rt = tokensObj.refreshToken ?? tokensObj.refresh_token;
      if (rt && typeof rt === 'string') {
        await AsyncStorage.setItem(STORAGE_KEYS.refreshToken, rt);
        if (__DEV__) {
          console.log('[authApi] persistAuthSession: tokens 객체에서 Refresh Token 저장 완료', {
            _ts: Date.now(),
            _time: new Date().toISOString(),
          });
        }
      }
    }
  }
  const userPayload = payload.user ?? (payload as Record<string, unknown>).member;
  if (userPayload !== undefined && userPayload !== null) {
    const toStore =
      typeof userPayload === 'string'
        ? userPayload
        : JSON.stringify(
            normalizeMemberForSession(userPayload as Record<string, unknown>)
          );
    await AsyncStorage.setItem(STORAGE_KEYS.memberInfo, toStore);
  }

  if (keepLoggedIn) {
    await AsyncStorage.setItem(STORAGE_KEYS.isLoggedIn, 'true');
    if (__DEV__) {
      console.log('[authApi] persistAuthSession: 로그인 상태 유지 저장', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
      });
    }
  } else {

    await AsyncStorage.removeItem(STORAGE_KEYS.isLoggedIn);
    if (__DEV__) {
      console.log('[authApi] persistAuthSession: 로그인 상태 유지 저장 안 함', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
      });
    }
  }

  if (__DEV__) {
    console.log('[authApi] persistAuthSession 완료', {
      _ts: Date.now(),
      _time: new Date().toISOString(),
      keepLoggedIn,
      isLoggedInSaved: keepLoggedIn,
    });
  }
}

export interface MeProfile {
  id?: number | string;
  email?: string;
  firstname?: string;
  lastname?: string;
  referral_code?: string;
  tier?: 'wm' | 'bm' | 'pm' | 'ph' | 'WM' | 'BM' | 'PM' | 'PH' | string;
  business?: number | boolean; 
  member_type?: number; 
  [key: string]: unknown;
}

export async function refreshAccessToken(): Promise<LoginAuthPayload> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  let refreshToken = await AsyncStorage.getItem(STORAGE_KEYS.refreshToken);
  if (!refreshToken) {

    const memberJson = await AsyncStorage.getItem(STORAGE_KEYS.memberInfo);
    if (memberJson) {
      try {
        const member = JSON.parse(memberJson) as Record<string, unknown>;
        const rt = member?.refreshToken ?? member?.refresh_token;
        if (typeof rt === 'string') {
          refreshToken = rt;
        }
      } catch {

      }
    }
  }

  if (!refreshToken) {
    throw new Error('Refresh Token이 없습니다. 다시 로그인해주세요.');
  }

  if (__DEV__) {
    console.log('[authApi] refreshAccessToken 요청 시작');
  }

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post<ApiResponse<LoginAuthPayload>>(
      `${baseURL}/oth-path`,
      { refreshToken },
      { timeout: API_TIMEOUT, headers }
    );

    const data = res.data?.data ?? (res.data as unknown as LoginAuthPayload);
    let payload: LoginAuthPayload = {};

    if (data && typeof data === 'object' && data !== null) {
      const dataObj = data as Record<string, unknown>;

      if (dataObj.tokens && typeof dataObj.tokens === 'object' && dataObj.tokens !== null) {
        const tokens = dataObj.tokens as Record<string, unknown>;
        const accessToken = tokens.accessToken || tokens.access_token || tokens.token;
        if (typeof accessToken === 'string') {
          payload.accessToken = accessToken;
          payload.access_token = accessToken;
          payload.token = accessToken;
        }
        const newRefreshToken = tokens.refreshToken || tokens.refresh_token;
        if (typeof newRefreshToken === 'string') {
          payload.refreshToken = newRefreshToken;
          payload.refresh_token = newRefreshToken;
        }
        payload.tokens = dataObj.tokens;
      }

      if (!payload.accessToken) {
        const directToken = dataObj.accessToken ?? dataObj.access_token ?? dataObj.token;
        if (typeof directToken === 'string') {
          payload.accessToken = directToken;
          payload.access_token = directToken;
          payload.token = directToken;
        }
      }
    }

    const authHeader = res.headers?.authorization ?? res.headers?.Authorization;
    if (typeof authHeader === 'string' && authHeader.toLowerCase().startsWith('bearer ')) {
      const tokenFromHeader = authHeader.slice(7).trim();
      if (tokenFromHeader) {
        payload.accessToken = tokenFromHeader;
        payload.access_token = tokenFromHeader;
        payload.token = tokenFromHeader;
      }
    }

    const newToken = getTokenFromPayload(payload);
    if (newToken) {
      await AsyncStorage.setItem(STORAGE_KEYS.authToken, newToken);
      setCachedToken(newToken);
    }

    const newRefreshToken = payload.refreshToken ?? payload.refresh_token;
    if (newRefreshToken && typeof newRefreshToken === 'string') {
      await AsyncStorage.setItem(STORAGE_KEYS.refreshToken, newRefreshToken);
    }

    if (__DEV__) {
      console.log('[authApi] refreshAccessToken 성공');
    }

    return payload;
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.error('[authApi] refreshAccessToken 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    throw normalizeError(error);
  }
}

export async function getMe(): Promise<MeProfile> {
  if (__DEV__) {
    console.log('[authApi] getMe: apiClient 요청 진행');
  }
  try {
    const res = await apiClient.get<ApiResponse<MeProfile>>('/oth-path');
    const data = res.data?.data ?? (res.data as unknown as MeProfile);
    if (__DEV__) {
      console.log('[authApi] getMe 응답:', { status: res.status, hasData: !!data });
    }
    if (typeof data === 'object' && data !== null) return data as MeProfile;
    return { email: String(data) };
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.error('[authApi] getMe 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    throw normalizeError(error);
  }
}

export interface MyReferralItem {
  id: number;
  email: string;
  name: string;
  tier?: string | null;
  created_at?: string | null;
}

export interface MyReferralsResponse {
  member_id: number;
  referrals: MyReferralItem[];
  total: number;
}

export async function getMyReferrals(): Promise<MyReferralsResponse> {
  try {
    const res = await apiClient.get<ApiResponse<MyReferralsResponse>>('/oth-path');
    const data = res.data?.data ?? (res.data as unknown as MyReferralsResponse);
    return data;
  } catch (error) {
    throw normalizeError(error);
  }
}

export interface ReferralSaleItem {
  order_id: string;
  buyer_member_id: number;
  buyer_name?: string | null;
  buyer_email?: string | null;
  od_receipt_price: number;
  role: 'referrer' | 'upline';
  rate_bp: number;
  commission_krw: number;
  delivered_at: string;
  period_key: string;
  settle_on: string;
  status: string;
}

export interface ReferralSalesResponse {
  sales: ReferralSaleItem[];
  page: number;
  limit: number;
  total: number;
  pending_commission_krw: number;
}

export async function getReferralSales(params?: {
  page?: number;
  limit?: number;
}): Promise<ReferralSalesResponse> {
  try {
    const res = await apiClient.get<ApiResponse<ReferralSalesResponse>>(
      '/oth-path',
      { params: { page: params?.page ?? 1, limit: params?.limit ?? 50 } }
    );
    const data = res.data?.data ?? (res.data as unknown as ReferralSalesResponse);
    return data;
  } catch (error) {
    throw normalizeError(error);
  }
}

export interface UpdateProfilePayload {
  name: string;
  mobile?: string | null;
  mobile_code?: string | null;
  country?: string | null;
  country_code?: string | null;
  region_id?: number | null;
  gender?: number | null;
  age_range?: number | null;
  password?: string;
}

export async function updateProfile(payload: UpdateProfilePayload): Promise<MeProfile> {
  const env = getEnv();

  const url = env.PROFILE_UPDATE_PATH || '/oth-path';

  const body: Record<string, unknown> = {
    name: payload.name,
  };
  if (payload.mobile !== undefined) body.mobile = payload.mobile;
  if (payload.mobile_code !== undefined) body.mobile_code = payload.mobile_code;
  if (payload.country !== undefined) body.country = payload.country;
  if (payload.country_code !== undefined) body.country_code = payload.country_code;
  if (payload.region_id !== undefined) body.region_id = payload.region_id;
  if (payload.gender !== undefined) body.gender = payload.gender;
  if (payload.age_range !== undefined) body.age_range = payload.age_range;
  if (payload.password != null && payload.password !== '') body.password = payload.password;

  if (__DEV__) {
    console.log('[authApi] updateProfile 요청:', { url, method: 'PUT', body: { ...body, password: body.password ? '***' : undefined } });
  }
  try {
    const res = await apiClient.put<ApiResponse<MeProfile>>(url, body);
    const data = res.data?.data ?? (res.data as unknown as MeProfile);
    if (__DEV__) {
      console.log('[authApi] updateProfile 응답:', { status: res.status, hasData: !!data });
    }
    if (typeof data === 'object' && data !== null) return data as MeProfile;
    return {};
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      const errData = error.response?.data as { error?: { details?: unknown; message?: string } } | undefined;
      console.error('[authApi] updateProfile 에러:', {
        status: error.response?.status,
        message: errData?.error?.message ?? error.message,
        details: errData?.error?.details,
        fullData: error.response?.data,
      });
    }
    throw normalizeError(error);
  }
}

export async function sendVerification(email: string, purpose: string = 'export_private_key'): Promise<{ success: boolean; message: string }> {
  if (__DEV__) {
    console.log('[authApi] sendVerification 요청:', { email, purpose });
  }
  try {

    const baseURL = process.env.EXPO_PUBLIC_GATEWAY || 'https://oth-path-c38c36.example.invalid';
    const storedToken = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (storedToken) headers['Authorization'] = `Bearer ${storedToken}`;
    const res = await axios.post<ApiResponse<{ success: boolean; message: string }>>(
      `${baseURL}/oth-path`,
      { email, purpose },
      { headers }
    );
    return res.data?.data ?? (res.data as unknown as { success: boolean; message: string });
  } catch (error) {
    throw normalizeError(error);
  }
}

export async function clearAuthSession(): Promise<void> {
  clearCachedToken(); 
  clearPharmacistGuestSession();
  await AsyncStorage.multiRemove([
    STORAGE_KEYS.authToken,
    STORAGE_KEYS.refreshToken,
    STORAGE_KEYS.memberInfo,
    STORAGE_KEYS.isLoggedIn,
  ]);
}
