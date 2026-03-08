import v_b5030f, { v_3333d3, v_db7578, v_56050e } from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';
import { v_2a53b4 } from '../navigation/rootNavigationRef';

const v_8a74cb = 20000;

const v_9a8286 = v_b5030f.create({
  timeout: v_8a74cb,
  headers: {
    'Content-Type': 'application/json',
  },
});

v_9a8286.interceptors.request.use(
  async (config: v_56050e) => {
    const v_c9c489 = v_e4a763();
    const v_fed274 = v_c9c489.GATEWAY;

    if (v_fed274 && !v_74a79c.baseURL) {
      v_74a79c.baseURL = v_fed274;
    }

    if (!v_74a79c.headers.Authorization) {
      const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
      if (v_21cc31) {
        v_74a79c.headers.Authorization = `Bearer ${v_21cc31}`;
      }
    }

    return v_74a79c;
  },
  (v_5e9bfe) => Promise.reject(v_5e9bfe)
);

v_9a8286.interceptors.response.use(
  (response: v_db7578) => v_3393e3,
  async (error: v_3333d3) => {
    const v_d308b5 = v_5e9bfe.response?.status;
    const v_9390e8 = v_5e9bfe.response?.data as any;
    const v_a8cd21 = v_9390e8?.error?.message || '';

    const v_edfdf4 = 
      v_d308b5 === 401 || 
      v_a8cd21.toLowerCase().includes('invalid or expired access token') ||
      v_a8cd21.toLowerCase().includes('jwt expired');

    if (v_edfdf4) {
      if (__DEV__) {
        console.warn('[apiClient] 인증 오류 감지. 로그인 페이지로 이동합니다.', { status: v_d308b5, message: v_a8cd21 });
      }

      await v_e84827.multiRemove([
        v_624bd2.authToken,
        v_624bd2.refreshToken,
        v_624bd2.memberInfo,
        v_624bd2.isLoggedIn,
      ]);

      v_2a53b4();
    }

    return Promise.reject(v_5e9bfe);
  }
);

export default v_9a8286;
