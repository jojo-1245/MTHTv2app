import v_b5030f from 'imsks';
import type { v_c4dd46, v_7d842d } from '../types';
import { v_e4a763 } from '../utils/env';

const v_8a74cb = 20000;

const v_55bd32 = (v_fed274): string => v_fed274.replace(/\/+$/, '');

const v_2ac933 = <T,>(v_d0c056): T[] => {
  const v_110a8b = new Set<T>();
  const v_8d4337 = [];
  for (const v_8c0b26 of v_d0c056) {
    if (v_110a8b.has(v_8c0b26)) continue;
    v_110a8b.add(v_8c0b26);
    v_8d4337.push(v_8c0b26);
  }
  return v_8d4337;
};

const v_cfd2a2 = (v_fed274, v_09dafd): string[] => {
  const v_694b25 = v_55bd32(v_fed274);
  const v_3c8898 = v_09dafd.replace(/^\/+/, '');
  const v_2b24c6 = `${v_694b25}/${v_3c8898}`;
  const v_2bea9d = `${v_694b25}/oth-path${v_3c8898}`;
  const v_064179 = `${v_694b25}/oth-path${v_3c8898}`;

  if (v_694b25.endsWith('/oth-path') || v_694b25.endsWith('/oth-path')) {

    return v_2ac933([v_2b24c6, v_2bea9d, v_064179]);
  }
  return v_2ac933([v_2bea9d, v_064179, v_2b24c6]);
};

async function v_a3868b<T>(
  v_fed274,
  v_09dafd,
  v_4d33b2,
  v_3f4675
): Promise<T> {
  const v_6f7c85 = v_cfd2a2(v_fed274, v_09dafd);
  let v_1c274a = null;

  for (const v_f71b56 of v_6f7c85) {
    try {
      const v_8f00b9 = await v_b5030f.post<T>(v_f71b56, v_4d33b2, {
        timeout: v_8a74cb,
        headers: v_3f4675,
      });
      return v_8f00b9.data;
    } catch (v_5e9bfe) {
      v_1c274a = v_5e9bfe;

      if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.status === 404) continue;
      throw v_5e9bfe;
    }
  }

  throw v_1c274a ?? new Error('요청 중 오류가 발생했습니다.');
}

export async function v_60f557(
  v_e7e852
): Promise<v_c4dd46> {
  return Promise.reject(new Error('getCountries not implemented'));
}

export async function v_11e39e(
  v_b9bbbd,
  v_e7e852
): Promise<v_7d842d> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) return Promise.reject(new Error('GATEWAY가 설정되지 않았습니다.'));
  try {
    const v_21cc31 = v_c9c489.CLIENT_TOKEN || v_c9c489.GATEWAY_AUTH_CODE;
    const v_3f4675 = {
      'Content-Type': 'application/json',
      ...(v_21cc31 ? { Authorization: `Bearer ${v_21cc31}` } : {}),
    };
    const v_9390e8 = await v_a3868b<v_7d842d>(
      v_fed274,
      'app7190-01',
      { country: v_b9bbbd },
      v_3f4675
    );
    return v_9390e8 ?? { status: 'success', data: [] };
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.warn('[countryApi] getRegionsByCountry 실패:', v_b9bbbd, v_5e9bfe);
    }
    return Promise.reject(v_5e9bfe);
  }
}

export type SaveMemberRegionPayload = {
  member: number; 
  country: string; 
  region: number; 
  countrycode: string; 
  mobilecode?: string; 
};

export type SaveMemberRegionResponse = {
  status: string;
  code: number;
  message: string;
  data?: Array<{ count: number }>;
};

export async function v_060564(
  v_931bf0
): Promise<SaveMemberRegionResponse> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  const v_21cc31 = v_c9c489.CLIENT_TOKEN || v_c9c489.GATEWAY_AUTH_CODE;
  if (!v_fed274) return Promise.reject(new Error('GATEWAY가 설정되지 않았습니다.'));
  const v_3f4675 = { 'Content-Type': 'application/json' };
  if (v_21cc31) v_3f4675.Authorization = `Bearer ${v_21cc31}`;
  try {
    const v_9390e8 = await v_a3868b<SaveMemberRegionResponse>(
      v_fed274,
      'app7190-02',
      v_931bf0,
      v_3f4675
    );
    if (v_9390e8?.status === 'failed' || v_9390e8?.status === 'error') {
      return Promise.reject(
        new Error((v_9390e8 as { message?: string }).message ?? '지역 저장에 실패했습니다.')
      );
    }
    return v_9390e8 ?? { status: 'success', code: 200, message: 'Success modify region', data: [{ count: 1 }] };
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.warn('[countryApi] saveMemberRegion 실패:', v_931bf0, v_5e9bfe);
    }
    return Promise.reject(v_5e9bfe);
  }
}
