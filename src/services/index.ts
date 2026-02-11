
export * from './skinAnalysis';
import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AliveResponse,
  KeepAliveServerResponse,
} from '../types';
import { STORAGE_KEYS } from '../constants';
import { getEnv } from '../utils/env';
import { Platform } from 'react-native';

let ROUTES: { main: string; login: string } | null = null;

export const setRoutes = (routes: { main: string; login: string }) => {
  ROUTES = routes;
};

const API_TIMEOUT = 20000;

const handleTimeoutError = async (navigation?: any) => {
  try {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (navigation && ROUTES) {
      if (isLoggedIn === 'true') {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.main }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.login }],
        });
      }
    }
  } catch (error) {
    console.error('타임아웃 처리 중 오류:', error);
    if (navigation && ROUTES) {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.login }],
      });
    }
  }
};

export const apiRequest = async (
  url: string,
  options: RequestInit = {},
  navigation?: any,
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      if (navigation) await handleTimeoutError(navigation);
      throw new Error('API request timeout');
    }
    throw error;
  }
};

export const gatewayRequest = async (
  endpoint: string,
  options: RequestInit = {},
  navigation?: any,
): Promise<Response> => {
  const env = getEnv();
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  const baseUrl = env.GATEWAY;
  const gatewayUrl = `${baseUrl}${oth-secret}&endpoint=${endpoint}`;
  return apiRequest(gatewayUrl, options, navigation);
};

const createAxiosInstance = (navigation?: any) => {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;

  if (!baseURL) {
    throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (oth-secret) {
    headers.Authorization = `Bearer ${oth-secret}`;
  }

  const instance = axios.create({
    baseURL,
    timeout: API_TIMEOUT,
    headers,
  });

  instance.interceptors.request.use(
    (config) => {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(`[API Response] ${response.config.url}`, response.status);
      return response;
    },
    async (error: AxiosError) => {
      if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        if (navigation) await handleTimeoutError(navigation);
      } else {
        console.error('[API Error]', error.config?.url, error.response?.status, error.response?.data);
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const getAxiosInstance = (navigation?: any) => {
  return createAxiosInstance(navigation);
};

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export type AuthMember = {
  member: number;
  email: string;
  firstname: string;
  lastname: string;
};

export type AuthPayload = {
  token: string;
  member: AuthMember;
};

export type RegisterMemberPayload = {
  email: string;
  pin: string;
  firstname: string;
  lastname: string;
  mobile: string;
  mobilecode: string;
  gender: number;
  age?: number;
  country?: string;
  countrycode?: string;
  region?: number;
  os?: number;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type MeProfile = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  mobile: string | null;
  gender: number | null;
  age_range: number | null;
  country: string;
  tier: string;
  referral_code: string;
  language: string;
  created_at: string;
};

const unwrapResponse = <T>(response: ApiResponse<T>): T => {
  if (response.success && response.data) return response.data;
  throw new Error(response.error?.message || '서버 응답을 해석할 수 없습니다.');
};

const normalizeError = (error: unknown): Error => {
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
};

const getTokenFromAuth = (auth: AuthPayload & Record<string, unknown>): string => {
  const top = auth.token ?? auth.accessToken ?? auth.access_token;
  if (typeof top === 'string') return top;
  const tokens = auth.tokens as { accessToken?: string; access_token?: string } | undefined;
  const t = tokens?.accessToken ?? tokens?.access_token;
  return typeof t === 'string' ? t : '';
};

const getMemberFromAuth = (auth: AuthPayload & Record<string, unknown>): AuthMember => {
  const m = auth.member ?? auth.user;
  if (m && typeof m === 'object' && typeof (m as any).email === 'string') {
    const u = m as any;
    return {
      member: u.member ?? u.id ?? 0,
      email: u.email,
      firstname: u.firstname ?? '',
      lastname: u.lastname ?? '',
    };
  }
  return { member: 0, email: '', firstname: '', lastname: '' };
};

export const registerMember = async (
  payload: RegisterMemberPayload,
  navigation?: any,
): Promise<AuthPayload> => {
  try {
    const axiosInstance = getAxiosInstance(navigation);
    const response = await axiosInstance.post<ApiResponse<AuthPayload>>(
      '/oth-path',
      payload,
    );
    const data = unwrapResponse(response.data) as AuthPayload & Record<string, unknown>;
    return {
      token: getTokenFromAuth(data),
      member: getMemberFromAuth(data),
    };
  } catch (error) {
    throw normalizeError(error);
  }
};

export const loginMember = async (
  payload: LoginPayload,
  navigation?: any,
): Promise<AuthPayload> => {
  try {
    const axiosInstance = getAxiosInstance(navigation);
    const response = await axiosInstance.post<ApiResponse<AuthPayload>>(
      '/oth-path',
      payload,
    );
    const data = unwrapResponse(response.data) as AuthPayload & Record<string, unknown>;
    return {
      token: getTokenFromAuth(data),
      member: getMemberFromAuth(data),
    };
  } catch (error) {
    throw normalizeError(error);
  }
};

export const getMe = async (navigation?: any): Promise<MeProfile> => {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
  const token = typeof raw === 'string' ? raw.trim() : '';
  if (!token || token === 'undefined' || token === 'null') {
    throw new Error('로그인이 필요합니다.');
  }
  const env = getEnv();
  const baseURL = env.GATEWAY;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다.');
  try {
    const response = await axios.get<ApiResponse<MeProfile>>(`${baseURL}/oth-path`, {
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return unwrapResponse(response.data);
  } catch (error) {
    throw normalizeError(error);
  }
};

export const persistAuthSession = async (auth: AuthPayload & Record<string, unknown>) => {
  const token = getTokenFromAuth(auth);
  const member = getMemberFromAuth(auth);
  if (!token) {
    console.warn('persistAuthSession: 저장할 토큰이 없습니다. token/accessToken/access_token 필드를 확인하세요.');
  }
  try {
    const pairs: [string, string][] = [
      [STORAGE_KEYS.memberInfo, JSON.stringify(member)],
      [STORAGE_KEYS.isLoggedIn, 'true'],
      [STORAGE_KEYS.savedEmail, member.email ?? ''],
    ];
    if (token) {
      pairs.unshift([STORAGE_KEYS.authToken, token]);
    }
    await AsyncStorage.multiSet(pairs);
  } catch (error) {
    console.warn('세션 저장에 실패했습니다:', error);
  }
};

export const clearAuthSession = async () => {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.authToken,
      STORAGE_KEYS.memberInfo,
      STORAGE_KEYS.isLoggedIn,
    ]);
  } catch (error) {
    console.warn('세션 삭제에 실패했습니다:', error);
  }
};

export const SignupHelpers = {
  getGenderCode: (gender: 'male' | 'female'): number => (gender === 'male' ? 2110 : 2111),
  getAgeCode: (ageRange: '10' | '20' | '30' | '40' | '50+'): number => {
    const ageMap: Record<string, number> = {
      '10': 2210, '20': 2220, '30': 2230, '40': 2240, '50+': 2250,
    };
    return ageMap[ageRange] || 2220;
  },
  getOSCode: (): number => (Platform.OS === 'android' ? 3112 : 3113),
};
