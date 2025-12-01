
import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AliveResponse,
  KeepAliveServerResponse,
} from '../types';
import { getEnv } from '../utils/env';

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

