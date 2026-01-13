
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
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {

      if (navigation) {
        await handleTimeoutError(navigation);
      }
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

export const nodeGatewayRequest = async (
  endpoint: string,
  options: RequestInit = {},
  navigation?: any,
): Promise<Response> => {
  const env = getEnv();
  const baseUrl = env.GATEWAY;
  const url = endpoint.startsWith('/') 
    ? `${baseUrl}${endpoint}` 
    : `${baseUrl}/${endpoint}`;

  return apiRequest(url, options, navigation);
};

export const sendAliveSignal = async (
  navigation?: any,
): Promise<AliveResponse> => {
  try {
    const env = getEnv();

    const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;

    const response = await nodeGatewayRequest('/keepalive', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${oth-secret}`,
      },
    }, navigation);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const serverResponse: KeepAliveServerResponse = await response.json();

    if (serverResponse.status === 'success') {
      const result: AliveResponse = {
        success: true,
      };

      if (serverResponse.data.emergency_info) {

        result.emergencyStop = {
          enabled: true,
          message: serverResponse.data.emergency_info.message,
          link: serverResponse.data.emergency_info.link,
        };
      } else {

        result.emergencyStop = {
          enabled: false,
        };
      }

      return result;
    } else {

      throw new Error(`Server error: ${serverResponse.message}`);
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'API request timeout') {

      throw error;
    }
    throw error;
  }
};

const createAxiosInstance = (navigation?: any) => {
  const env = getEnv();
  const baseURL = env.GATEWAY;

  const oth-secret = env.CLIENT_TOKEN || env.GATEWAY_AUTH_CODE;

  if (!baseURL) {
    throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  }

  if (!oth-secret) {
    throw new Error('클라이언트 토큰이 설정되지 않았습니다. CLIENT_TOKEN 또는 GATEWAY_AUTH_CODE를 확인해주세요.');
  }

  const instance = axios.create({
    baseURL,
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${oth-secret}`,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      console.error('[API Request Error]', error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(`[API Response] ${response.config.url}`, response.status);
      return response;
    },
    async (error: AxiosError) => {

      if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        console.error('[API Timeout]', error.config?.url);
        if (navigation) {
          await handleTimeoutError(navigation);
        }
      } else {

        console.error('[API Error]', {
          url: error.config?.url,
          method: error.config?.method,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          message: error.message,
        });
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
  error?: {
    message: string;
    statusCode?: number;
  };
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
  pin: string;
};

const unwrapResponse = <T>(response: ApiResponse<T>): T => {
  if (response.success && response.data) {
    return response.data;
  }
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

  if (error instanceof Error) {
    return error;
  }

  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
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
    return unwrapResponse(response.data);
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
    return unwrapResponse(response.data);
  } catch (error) {
    throw normalizeError(error);
  }
};

export const persistAuthSession = async (auth: AuthPayload) => {
  try {
    await AsyncStorage.multiSet([
      [STORAGE_KEYS.authToken, auth.token],
      [STORAGE_KEYS.memberInfo, JSON.stringify(auth.member)],
      [STORAGE_KEYS.isLoggedIn, 'true'],
      [STORAGE_KEYS.savedEmail, auth.member.email],
    ]);
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

  getGenderCode: (gender: 'male' | 'female'): number => {
    return gender === 'male' ? 2110 : 2111;
  },

  getAgeCode: (ageRange: '10' | '20' | '30' | '40' | '50+'): number => {
    const ageMap: Record<string, number> = {
      '10': 2210,
      '20': 2220,
      '30': 2230,
      '40': 2240,
      '50+': 2250,
    };
    return ageMap[ageRange] || 2220;
  },

  getOSCode: (): number => {
    return Platform.OS === 'android' ? 3112 : 3113;
  },
};