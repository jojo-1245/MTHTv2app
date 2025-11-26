
import v_b5030f, { v_3333d3 } from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import {
  v_96ef47,
  v_2fe85a,
} from '../types';
import { v_e4a763 } from '../utils/env';

let v_ce4741 = null;

export const v_a2ecba = (v_81e34b) => {
  v_ce4741 = v_81e34b;
};

const v_8a74cb = 20000;

const v_e4d665 = async (v_c65f5d) => {
  try {
    const v_042a8b = await v_e84827.getItem('isLoggedIn');
    if (v_c65f5d && v_ce4741) {
      if (v_042a8b === 'true') {

        v_c65f5d.reset({
          index: 0,
          routes: [{ name: v_ce4741.main }],
        });
      } else {

        v_c65f5d.reset({
          index: 0,
          routes: [{ name: v_ce4741.login }],
        });
      }
    }
  } catch (v_5e9bfe) {
    console.error('타임아웃 처리 중 오류:', v_5e9bfe);
    if (v_c65f5d && v_ce4741) {

      v_c65f5d.reset({
        index: 0,
        routes: [{ name: v_ce4741.login }],
      });
    }
  }
};

export const v_d61bb8 = async (
  v_f71b56,
  v_b36f96 = {},
  v_c65f5d,
): Promise<Response> => {
  const v_4fc7c7 = new AbortController();
  const v_3894d5 = setTimeout(() => v_4fc7c7.abort(), v_8a74cb);

  try {
    const v_3393e3 = await fetch(v_f71b56, {
      ...v_b36f96,
      signal: v_4fc7c7.signal,
    });
    clearTimeout(v_3894d5);
    return v_3393e3;
  } catch (v_5e9bfe) {
    clearTimeout(v_3894d5);
    if (v_5e9bfe instanceof Error && v_5e9bfe.name === 'AbortError') {

      if (v_c65f5d) {
        await v_e4d665(v_c65f5d);
      }
      throw new Error('API request timeout');
    }
    throw v_5e9bfe;
  }
};

export const v_0a1127 = async (
  v_09dafd,
  v_b36f96 = {},
  v_c65f5d,
): Promise<Response> => {
  const v_c9c489 = v_e4a763();
  const v_36dd9e = v_c9c489.GATEWAY_AUTH_CODE;
  const v_7dac96 = `${v_c9c489.GATEWAY}${v_36dd9e}&endpoint=${v_09dafd}`;

  return v_d61bb8(v_7dac96, v_b36f96, v_c65f5d);
};

export const v_12a388 = async (
  v_09dafd,
  v_b36f96 = {},
  v_c65f5d,
): Promise<Response> => {
  const v_c9c489 = v_e4a763();
  const v_c01615 = v_c9c489.GATEWAY;
  const v_f71b56 = v_09dafd.startsWith('/') 
    ? `${v_c01615}${v_09dafd}` 
    : `${v_c01615}/${v_09dafd}`;

  return v_d61bb8(v_f71b56, v_b36f96, v_c65f5d);
};

export const v_495832 = async (
  v_c65f5d,
): Promise<v_96ef47> => {
  try {
    const v_c9c489 = v_e4a763();
    const v_36dd9e = v_c9c489.GATEWAY_AUTH_CODE;

    const v_3393e3 = await v_12a388('/keepalive', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${v_36dd9e}`,
      },
    }, v_c65f5d);

    if (!v_3393e3.ok) {
      throw new Error(`HTTP error! status: ${v_3393e3.status}`);
    }

    const serverResponse: v_2fe85a = await v_3393e3.json();

    if (v_2c2f8d.status === 'success') {
      const result: v_96ef47 = {
        success: true,
      };

      if (v_2c2f8d.data.emergency_info) {

        v_43c42e.emergencyStop = {
          enabled: true,
          message: v_2c2f8d.data.emergency_info.message,
          link: v_2c2f8d.data.emergency_info.link,
        };
      } else {

        v_43c42e.emergencyStop = {
          enabled: false,
        };
      }

      return v_43c42e;
    } else {

      throw new Error(`Server error: ${v_2c2f8d.message}`);
    }
  } catch (v_5e9bfe) {
    if (v_5e9bfe instanceof Error && v_5e9bfe.message === 'API request timeout') {

      throw v_5e9bfe;
    }
    throw v_5e9bfe;
  }
};

const v_7488d5 = (v_c65f5d) => {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  const v_36dd9e = v_c9c489.GATEWAY_AUTH_CODE;

  const v_0c3a5b = v_b5030f.create({
    baseURL: v_fed274,
    timeout: v_8a74cb,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_36dd9e}`,
    },
  });

  v_0c3a5b.interceptors.request.use(
    (v_74a79c) => {
      console.log(`[API Request] ${v_74a79c.method?.toUpperCase()} ${v_74a79c.url}`);
      return v_74a79c;
    },
    (v_5e9bfe) => {
      console.error('[API Request Error]', v_5e9bfe);
      return Promise.reject(v_5e9bfe);
    },
  );

  v_0c3a5b.interceptors.response.use(
    (v_3393e3) => {
      console.log(`[API Response] ${v_3393e3.config.url}`, v_3393e3.status);
      return v_3393e3;
    },
    async (error: v_3333d3) => {

      if (v_5e9bfe.code === 'ECONNABORTED' || v_5e9bfe.message.includes('timeout')) {
        console.error('[API Timeout]', v_5e9bfe.config?.url);
        if (v_c65f5d) {
          await v_e4d665(v_c65f5d);
        }
      } else {

        console.error('[API Error]', {
          url: v_5e9bfe.config?.url,
          method: v_5e9bfe.config?.method,
          status: v_5e9bfe.response?.status,
          statusText: v_5e9bfe.response?.statusText,
          data: v_5e9bfe.response?.data,
          message: v_5e9bfe.message,
        });
      }
      return Promise.reject(v_5e9bfe);
    },
  );

  return v_0c3a5b;
};

export const v_7fc23c = (v_c65f5d) => {
  return v_7488d5(v_c65f5d);
};

