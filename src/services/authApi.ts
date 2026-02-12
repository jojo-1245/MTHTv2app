import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEnv } from '../utils/env';
import { STORAGE_KEYS } from '../constants';

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
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    const res = await axios.post<ApiResponse<LoginAuthPayload>>(
      `${baseURL}/oth-path`,
      body,
      { timeout: API_TIMEOUT, headers }
    );
    const data = res.data?.data ?? (res.data as unknown as LoginAuthPayload);
    const payload: LoginAuthPayload =
      typeof data === 'object' && data !== null ? data : { token: data };
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
      console.log('[authApi] login 응답:', {
        status: res.status,
        hasData: !!data,
        hasToken,
        tokenFromHeader: !!authHeader,
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
  provider: 'google';
  token: string;
}): Promise<LoginAuthPayload> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  const body = { provider: params.provider, token: params.token };
  if (__DEV__) {
    console.log('[authApi] social-login 요청:', { url: `${baseURL}/oth-path`, provider: params.provider });
  }
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    const res = await axios.post<ApiResponse<LoginAuthPayload>>(
      `${baseURL}/oth-path`,
      body,
      { timeout: API_TIMEOUT, headers }
    );
    const data = res.data?.data ?? (res.data as unknown as LoginAuthPayload);
    const payload: LoginAuthPayload =
      typeof data === 'object' && data !== null ? data : { token: data };
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
      console.log('[authApi] social-login 응답:', { status: res.status, hasData: !!data, hasToken });
    }
    return payload;
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.error('[authApi] social-login 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
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

export async function persistAuthSession(payload: LoginAuthPayload): Promise<void> {
  const token = getTokenFromPayload(payload);
  if (token) {
    await AsyncStorage.setItem(STORAGE_KEYS.authToken, token);
    if (__DEV__) {
      console.log('[authApi] persistAuthSession: 토큰 저장 완료');
    }
  } else {
    if (__DEV__) {
      console.warn('[authApi] persistAuthSession: 응답에서 토큰을 찾지 못함', {
        keys: payload ? Object.keys(payload) : [],
      });
    }
  }
  const userPayload = payload.user ?? (payload as Record<string, unknown>).member;
  if (userPayload !== undefined && userPayload !== null) {
    await AsyncStorage.setItem(
      STORAGE_KEYS.memberInfo,
      typeof userPayload === 'string' ? userPayload : JSON.stringify(userPayload)
    );
  }
  await AsyncStorage.setItem(STORAGE_KEYS.isLoggedIn, 'true');
}

export interface MeProfile {
  email?: string;
  firstname?: string;
  lastname?: string;
  referral_code?: string;
  tier?: 'silver' | 'gold' | string;
  [key: string]: unknown;
}

export async function getMe(): Promise<MeProfile> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  let token = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
  if (!token) {
    const memberJson = await AsyncStorage.getItem(STORAGE_KEYS.memberInfo);
    if (memberJson) {
      try {
        const member = JSON.parse(memberJson) as Record<string, unknown>;
        const t = member?.accessToken ?? member?.access_token ?? member?.token;
        if (typeof t === 'string') token = t;
      } catch {

      }
    }
  }
  if (!token) {
    if (__DEV__) {
      console.warn('[authApi] getMe: 저장된 토큰 없음. 로그인 응답 형식 확인 필요.');
    }
    throw new Error('로그인이 필요합니다.');
  }
  if (__DEV__) {
    console.log('[authApi] getMe 요청:', { url: `${baseURL}/oth-path` });
  }
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const res = await axios.get<ApiResponse<MeProfile>>(`${baseURL}/oth-path`, {
      timeout: API_TIMEOUT,
      headers,
    });
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
  const baseURL = env.GATEWAY;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  let token = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
  if (!token) {
    const memberJson = await AsyncStorage.getItem(STORAGE_KEYS.memberInfo);
    if (memberJson) {
      try {
        const member = JSON.parse(memberJson) as Record<string, unknown>;
        const t = member?.accessToken ?? member?.access_token ?? member?.token;
        if (typeof t === 'string') token = t;
      } catch {

      }
    }
  }
  if (!token) throw new Error('로그인이 필요합니다.');

  const profilePath = env.PROFILE_UPDATE_PATH ?? '/oth-path';
  const url = `${baseURL}${profilePath.startsWith('/') ? profilePath : `/${profilePath}`}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
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
    const res = await axios.put<ApiResponse<MeProfile>>(url, body, {
      timeout: API_TIMEOUT,
      headers,
    });
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

export async function clearAuthSession(): Promise<void> {
  await AsyncStorage.multiRemove([
    STORAGE_KEYS.authToken,
    STORAGE_KEYS.memberInfo,
    STORAGE_KEYS.isLoggedIn,
  ]);
}
