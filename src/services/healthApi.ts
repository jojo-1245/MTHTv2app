import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export interface HealthRecordItem {
  id: number;
  record_date: string; 
  record_time: string; 
  health_index: number;
  health_level: string; 
  vital_signs?: Record<string, {
    value: any;
    status?: string; 
    confidence?: {
      level?: number;
    };
  }>; 
  created_at: string;
}

export interface HealthRecordsResponse {
  records: HealthRecordItem[];
}

export interface SaveHealthRecordPayload {
  member_id?: number; 
  sub_account_id?: number; 
  record_date?: string; 
  record_time?: string; 
  health_index: number; 
  health_level: string; 
  vital_signs: Record<string, {
    value: number | { systolic: number; diastolic: number } | any[];
    status?: string;
    confidence?: {
      level?: number;
    };
  }>; 
  metadata?: Record<string, any>; 
}

function v_1bbaa4(v_5e9bfe): Error {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {
    const v_8a7529 = v_5e9bfe.response?.data as ApiResponse<unknown> | undefined;
    const v_a8cd21 =
      v_8a7529?.error?.message ||
      v_5e9bfe.response?.statusText ||
      v_5e9bfe.message ||
      '요청 중 오류가 발생했습니다.';
    if (v_5e9bfe.response?.status === 401) {
      return new Error('로그인이 필요합니다.');
    }
    return new Error(v_a8cd21);
  }
  if (v_5e9bfe instanceof Error) return v_5e9bfe;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

export async function v_777b12(v_ee2acd): Promise<HealthRecordItem[]> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  let v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') v_21cc31 = v_8d41d7;
      } catch {

      }
    }
  }
  if (!v_21cc31) {
    if (__DEV__) {
      console.warn('[healthApi] getHealthRecords: 저장된 토큰 없음. 로그인 필요.');
    }
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_24baff = {};
    if (v_ee2acd) {

      const v_ff72dd = typeof v_ee2acd === 'string' 
        ? (v_ee2acd.startsWith('sub-') ? Number(v_ee2acd.replace('sub-', '')) : Number(v_ee2acd))
        : v_ee2acd;

      if (!isNaN(v_ff72dd) && v_ff72dd > 0) {
        v_24baff.sub_account_id = v_ff72dd;
      }
    }

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[healthApi] getHealthRecords 요청:', {
        url: v_f71b56,
        params: v_24baff,
        hasSubAccountId: !!v_ee2acd,
      });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<HealthRecordsResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
      params: v_24baff,
    });

    if (__DEV__) {

      const v_3d33f5 = v_8f00b9.config?.url || v_f71b56;
      const v_9962a3 = v_8f00b9.config?.params || v_24baff;
      console.log('[healthApi] getHealthRecords 실제 요청 URL:', {
        fullUrl: v_3d33f5,
        baseURL: v_8f00b9.config?.baseURL,
        path: v_8f00b9.config?.url,
        params: v_9962a3,
        hasSubAccountId: !!v_ee2acd,
        isMyAccount: !v_ee2acd,
      });
      console.log('[healthApi] getHealthRecords 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as HealthRecordsResponse);
    if (__DEV__) {
      console.log('[healthApi] getHealthRecords 파싱된 데이터:', JSON.stringify(v_9390e8, null, 2));
    }

    if (v_9390e8 && typeof v_9390e8 === 'object' && 'records' in v_9390e8) {
      const v_678155 = Array.isArray(v_9390e8.records) ? v_9390e8.records : [];
      if (__DEV__) {
        console.log('[healthApi] getHealthRecords 최종 records:', {
          count: v_678155.length,
          records: JSON.stringify(v_678155, null, 2),
        });
      }
      return v_678155;
    }

    if (__DEV__) {
      console.warn('[healthApi] getHealthRecords: records가 없습니다.');
    }
    return [];
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] getHealthRecords 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
        stack: v_5e9bfe.stack,
      });
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_207199(v_931bf0): Promise<HealthRecordItem> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  let v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') v_21cc31 = v_8d41d7;
      } catch {

      }
    }
  }
  if (!v_21cc31) {
    if (__DEV__) {
      console.warn('[healthApi] saveHealthRecord: 저장된 토큰 없음. 로그인 필요.');
    }
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[healthApi] saveHealthRecord 요청:', {
        url: v_f71b56,
        payload: {
          ...v_931bf0,
          vital_signs: v_931bf0.vital_signs ? '[...]' : undefined,
        },
      });
    }

    const v_8f00b9 = await v_b5030f.post<ApiResponse<HealthRecordItem>>(v_f71b56, v_931bf0, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[healthApi] saveHealthRecord 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as HealthRecordItem);
    if (__DEV__) {
      console.log('[healthApi] saveHealthRecord 파싱된 데이터:', {
        hasData: !!v_9390e8,
        data: JSON.stringify(v_9390e8, null, 2),
      });
    }

    if (!v_9390e8 || typeof v_9390e8 !== 'object') {
      throw new Error('건강 기록 저장 응답 형식이 올바르지 않습니다.');
    }

    if (__DEV__) {
      console.log('[healthApi] saveHealthRecord 저장 성공:', {
        id: (v_9390e8 as HealthRecordItem).id,
        record_date: (v_9390e8 as HealthRecordItem).record_date,
        record_time: (v_9390e8 as HealthRecordItem).record_time,
        health_index: (v_9390e8 as HealthRecordItem).health_index,
        health_level: (v_9390e8 as HealthRecordItem).health_level,
      });
    }

    return v_9390e8 as HealthRecordItem;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] saveHealthRecord 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

