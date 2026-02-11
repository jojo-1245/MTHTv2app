import axios from 'axios';
import { Platform } from 'react-native';
import { getEnv } from '../utils/env';

const API_TIMEOUT = 20000;

export type SignupPayload = {
  email: string;
  password: string;
  name: string;
  mobile?: string;
  mobile_code?: string;
  gender?: number;
  age_range?: number;
  country?: string;
  country_code?: string;
  region_id?: number;
  os_type?: number;
  language?: string;
  referral_code?: string;
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

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

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

export type VerifyEmailPayload = {
  email: string;
  code: string;
  purpose: 'signup' | 'password_reset' | 'profile_change';
  device_info?: Record<string, unknown>;
};

export async function verifyEmail(payload: VerifyEmailPayload): Promise<void> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    await axios.post<ApiResponse<unknown>>(`${baseURL}/oth-path`, payload, {
      timeout: API_TIMEOUT,
      headers,
    });
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.log('[signupApi] verify-email 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    throw normalizeError(error);
  }
}

export async function signup(payload: SignupPayload): Promise<void> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    await axios.post<ApiResponse<unknown>>(`${baseURL}/oth-path`, payload, {
      timeout: API_TIMEOUT,
      headers,
    });
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.log('[signupApi] signup 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
        config: { url: error.config?.url, method: error.config?.method },
      });
    } else if (__DEV__ && error instanceof Error) {
      console.log('[signupApi] signup 에러 (비-Axios):', { message: error.message, error });
    }
    throw normalizeError(error);
  }
}
