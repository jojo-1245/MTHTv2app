import axios from 'axios';
import { Platform } from 'react-native';
import { getEnv } from '../utils/env';

const API_TIMEOUT = 20000;

export type SignupPayload = {
  email: string;
  password: string;
  name: string;
  mobile?: string | null; 
  mobile_code?: string | null;
  gender?: number | null;
  age_range?: number | null;
  country?: string | null; 
  region_id?: number | null; 
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
  error?: {
    message: string;
    statusCode?: number;
    code?: string;
    details?: Array<{ field?: string; message?: string; [key: string]: unknown }>;
  };
};

function normalizeError(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    const apiResponse = error.response?.data as ApiResponse<unknown> | undefined;
    const errorData = apiResponse?.error;

    if (errorData?.code === '2002' || errorData?.message?.toLowerCase().includes('validation')) {
      const details = errorData.details;
      if (Array.isArray(details) && details.length > 0) {

        const detailMessages: string[] = [];

        for (const detail of details) {
          if (typeof detail === 'string') {

            try {
              const parsed = JSON.parse(detail);
              if (Array.isArray(parsed)) {

                for (const item of parsed) {
                  if (typeof item === 'object' && item !== null) {
                    const itemObj = item as Record<string, unknown>;
                    const path = Array.isArray(itemObj.path) ? itemObj.path.join('.') : undefined;
                    const msg = itemObj.message || path || JSON.stringify(item);
                    if (msg) detailMessages.push(String(msg));
                  }
                }
              } else if (typeof parsed === 'object' && parsed !== null) {
                const parsedObj = parsed as Record<string, unknown>;
                const path = Array.isArray(parsedObj.path) ? parsedObj.path.join('.') : undefined;
                const msg = parsedObj.message || path || JSON.stringify(parsed);
                if (msg) detailMessages.push(String(msg));
              } else {
                detailMessages.push(detail);
              }
            } catch {

              detailMessages.push(detail);
            }
          } else if (typeof detail === 'object' && detail !== null) {

            const detailObj = detail as Record<string, unknown>;

            if (typeof detailObj.message === 'string' && detailObj.message.trim().startsWith('[')) {
              try {
                const parsedMessage = JSON.parse(detailObj.message);
                if (Array.isArray(parsedMessage)) {

                  for (const item of parsedMessage) {
                    if (typeof item === 'object' && item !== null) {
                      const itemObj = item as Record<string, unknown>;
                      const path = Array.isArray(itemObj.path) ? itemObj.path.join('.') : undefined;
                      const msg = itemObj.message || path || JSON.stringify(item);
                      if (msg) detailMessages.push(String(msg));
                    }
                  }
                } else {

                  const path = Array.isArray(detailObj.path) ? detailObj.path.join('.') : undefined;
                  const msg = detailObj.message || detailObj.field || path || JSON.stringify(detail);
                  if (msg) detailMessages.push(String(msg));
                }
              } catch {

                const path = Array.isArray(detailObj.path) ? detailObj.path.join('.') : undefined;
                const msg = detailObj.message || detailObj.field || path || JSON.stringify(detail);
                if (msg) detailMessages.push(String(msg));
              }
            } else {

              const path = Array.isArray(detailObj.path) ? detailObj.path.join('.') : undefined;
              const msg = detailObj.message || detailObj.field || path || JSON.stringify(detail);
              if (msg) detailMessages.push(String(msg));
            }
          } else {
            detailMessages.push(String(detail));
          }
        }

        if (detailMessages.length > 0) {
          const combinedMessage = detailMessages.join(', ');
          return new Error(combinedMessage);
        }
      }
    }

    const message =
      errorData?.message ||
      error.response?.statusText ||
      error.message ||
      '요청 중 오류가 발생했습니다.';
    return new Error(message);
  }
  if (error instanceof Error) return error;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

export type SendVerificationPayload = {
  email: string;
  purpose?: 'signup' | 'password_reset' | 'profile_change' | 'login' | 'export_private_key';
};

export type SendVerificationResult = {
  channel: 'email' | 'sms';
  mobile?: string | null;
  expires_in?: number;
};

export async function sendVerification(
  payload: SendVerificationPayload
): Promise<SendVerificationResult> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  const body = { email: payload.email, purpose: payload.purpose ?? 'signup' };
  if (__DEV__) {
    console.log('[signupApi] send-verification 요청:', { url: `${baseURL}/oth-path`, body });
  }
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    const res = await axios.post<ApiResponse<SendVerificationResult>>(
      `${baseURL}/oth-path`,
      body,
      {
        timeout: API_TIMEOUT,
        headers,
      }
    );
    const data = res.data?.data;
    const channel = data?.channel === 'sms' ? 'sms' : 'email';
    return {
      channel,
      mobile: data?.mobile ?? null,
      expires_in: data?.expires_in,
    };
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.log('[signupApi] send-verification 에러:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }
    throw normalizeError(error);
  }
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
  if (__DEV__) {
    console.log('[signupApi] verify-email 요청:', { url: `${baseURL}/oth-path`, payload });
  }
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

export type ResetPasswordPayload = {
  email: string;
  code: string;
  new_password: string;
};

export async function resetPassword(payload: ResetPasswordPayload): Promise<void> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  if (__DEV__) {
    console.log('[signupApi] reset-password 요청:', { url: `${baseURL}/oth-path`, email: payload.email });
  }
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    await axios.post<ApiResponse<unknown>>(`${baseURL}/oth-path`, payload, {
      timeout: API_TIMEOUT,
      headers,
    });
  } catch (error) {
    if (__DEV__ && axios.isAxiosError(error)) {
      console.log('[signupApi] reset-password 에러:', {
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
    throw normalizeError(error);
  }
}

export type SendSmsVerificationPayload = {
  email: string;
  mobile: string;
  mobile_code?: string | null;
  purpose: 'signup' | 'password_reset';
};

export async function sendSmsVerification(payload: SendSmsVerificationPayload): Promise<void> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    await axios.post<ApiResponse<unknown>>(`${baseURL}/oth-path`, payload, {
      timeout: API_TIMEOUT,
      headers,
    });
  } catch (error) {
    throw normalizeError(error);
  }
}

export type VerifySmsPayload = {
  email: string;
  mobile: string;
  code: string;
  purpose: 'signup' | 'password_reset';
  device_info?: Record<string, unknown>;
};

export async function verifySms(payload: VerifySmsPayload): Promise<void> {
  const env = getEnv();
  const baseURL = env.GATEWAY;
  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;
  if (!baseURL) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (oth-secret) headers.Authorization = `Bearer ${oth-secret}`;
    await axios.post<ApiResponse<unknown>>(`${baseURL}/oth-path`, payload, {
      timeout: API_TIMEOUT,
      headers,
    });
  } catch (error) {
    throw normalizeError(error);
  }
}
