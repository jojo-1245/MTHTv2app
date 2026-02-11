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
    if (__DEV__) {
      console.log('[authApi] login 응답:', { status: res.status, hasData: !!data });
    }
    return typeof data === 'object' && data !== null ? data : { token: data };
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

export async function persistAuthSession(payload: LoginAuthPayload): Promise<void> {
  const token =
    payload.accessToken ??
    payload.access_token ??
    payload.token;
  if (token && typeof token === 'string') {
    await AsyncStorage.setItem(STORAGE_KEYS.authToken, token);
  }
  if (payload.user !== undefined && payload.user !== null) {
    await AsyncStorage.setItem(
      STORAGE_KEYS.memberInfo,
      typeof payload.user === 'string' ? payload.user : JSON.stringify(payload.user)
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
  const token = await AsyncStorage.getItem(STORAGE_KEYS.authToken);
  if (!token) throw new Error('로그인이 필요합니다.');
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

export async function clearAuthSession(): Promise<void> {
  await AsyncStorage.multiRemove([
    STORAGE_KEYS.authToken,
    STORAGE_KEYS.memberInfo,
    STORAGE_KEYS.isLoggedIn,
  ]);
}
