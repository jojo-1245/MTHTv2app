import v_b5030f, { v_3333d3, v_db7578, v_56050e } from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';
import { v_2a53b4 } from '../navigation/rootNavigationRef';
import { v_0b4eec, v_1cec06, v_8e9934 } from '../utils/tokenCache';

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

      let v_21cc31 = v_0b4eec();
      if (!v_21cc31) {
        v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
        if (v_21cc31) v_1cec06(v_21cc31);
      }
      if (v_21cc31) {
        v_74a79c.headers.Authorization = `Bearer ${v_21cc31}`;
      }
    }

    return v_74a79c;
  },
  (v_5e9bfe) => Promise.reject(v_5e9bfe)
);

let v_fce8ed = false;
let v_310d4a = [];

function v_ff5ed0(v_21cc31) {
  v_310d4a.forEach((v_16dbdb) => v_16dbdb(v_21cc31));
  v_310d4a = [];
}

async function v_df24f1() {
  v_8e9934(); 
  await v_e84827.multiRemove([
    v_624bd2.authToken,
    v_624bd2.refreshToken,
    v_624bd2.memberInfo,
    v_624bd2.isLoggedIn,
  ]);
  v_2a53b4();
}

v_9a8286.interceptors.response.use(
  (response: v_db7578) => v_3393e3,
  async (error: v_3333d3) => {
    const v_4e962b = v_5e9bfe.config as v_56050e & { _retry?: boolean };
    const v_d308b5 = v_5e9bfe.response?.status;
    const v_9390e8 = v_5e9bfe.response?.data as any;
    const v_a8cd21 = v_9390e8?.error?.message || '';

    const v_edfdf4 =
      v_d308b5 === 401 ||
      v_a8cd21.toLowerCase().includes('invalid or expired access token') ||
      v_a8cd21.toLowerCase().includes('jwt expired');

    if (!v_edfdf4 || v_4e962b._retry) {
      return Promise.reject(v_5e9bfe);
    }

    v_4e962b._retry = true;

    if (v_fce8ed) {

      return new Promise((v_6f7712, v_bad6f3) => {
        v_310d4a.push((v_21cc31) => {
          if (!v_21cc31) return v_bad6f3(v_5e9bfe);
          v_4e962b.headers = v_4e962b.headers ?? {};
          v_4e962b.headers.Authorization = `Bearer ${v_21cc31}`;
          v_6f7712(v_9a8286(v_4e962b));
        });
      });
    }

    v_fce8ed = true;

    try {
      const v_dfaee3 = await v_e84827.getItem(v_624bd2.refreshToken);
      if (!v_dfaee3) throw new Error('no refresh token');

      const v_c9c489 = v_e4a763();
      const v_fed274 = v_c9c489.GATEWAY;
      const v_8f00b9 = await v_b5030f.post(
        `${v_fed274}/oth-path`,
        { refreshToken: v_dfaee3 },
        { timeout: v_8a74cb, headers: { 'Content-Type': 'application/json' } }
      );

      const v_fb959a = v_8f00b9.data?.data ?? v_8f00b9.data;
      const v_ef86b6 = v_fb959a?.tokens ?? v_fb959a;
      const v_5451e8 =
        v_ef86b6?.accessToken ?? v_ef86b6?.access_token ?? v_ef86b6?.token ?? '';
      const v_ca30ed =
        v_ef86b6?.refreshToken ?? v_ef86b6?.refresh_token ?? '';

      if (!v_5451e8) throw new Error('no access token in refresh response');

      await v_e84827.setItem(v_624bd2.authToken, v_5451e8);
      v_1cec06(v_5451e8); 
      if (v_ca30ed) {
        await v_e84827.setItem(v_624bd2.refreshToken, v_ca30ed);
      }

      if (__DEV__) {
        console.log('[apiClient] 토큰 갱신 성공. 원래 요청 재시도.');
      }

      v_ff5ed0(v_5451e8);
      v_4e962b.headers = v_4e962b.headers ?? {};
      v_4e962b.headers.Authorization = `Bearer ${v_5451e8}`;
      return v_9a8286(v_4e962b);
    } catch (v_2e7962) {
      if (__DEV__) {
        console.warn('[apiClient] 토큰 갱신 실패. 로그인 화면으로 이동.', v_2e7962);
      }
      v_ff5ed0(null);
      await v_df24f1();
      return Promise.reject(v_2e7962);
    } finally {
      v_fce8ed = false;
    }
  }
);

export default v_9a8286;
