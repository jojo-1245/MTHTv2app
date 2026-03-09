import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 20000;

const v_48d821 = 'metahint_health_last_check_ts';
const v_172e22 = 'metahint_health_last_record';
const v_7a2425 = 10 * 1000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export interface HealthRecordItem {
  id: number;
  member_id?: number;
  sub_account_id?: number;
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
  metadata?: Record<string, any>; 
  created_at: string;
}

export interface HealthRecordsResponse {
  records: HealthRecordItem[];
}

export interface HealthRecordDetailResponse {
  record: HealthRecordItem;
}

export interface LatestHealthRecordResponse {
  record: HealthRecordItem;
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

export interface CompareHealthRecordsPayload {
  record_ids: number[];
}

export interface CompareHealthRecordsResponse {
  health_datas: HealthRecordItem[];
  comparison: {
    health_index_changes: {
      from: number;
      to: number;
      diff: number;
    };
    vital_signs_changes: Record<string, {
      from: number;
      to: number;
      diff: number;
    } | {
      diastolic?: { from: number; to: number; diff: number };
      systolic?: { from: number; to: number; diff: number };
    }>;
  };
}

function v_1bbaa4(v_5e9bfe): Error {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {
    const v_9390e8 = v_5e9bfe.response?.data as Record<string, unknown> | undefined;
    const v_a8cd21 =
      (v_9390e8?.error as { message?: string } | undefined)?.message ||
      (typeof v_9390e8?.message === 'string' ? v_9390e8.message : null) ||
      v_5e9bfe.response?.statusText ||
      v_5e9bfe.message ||
      '요청 중 오류가 발생했습니다.';
    if (v_5e9bfe.response?.status === 401) {
      return new Error('로그인이 필요합니다.');
    }
    if (v_5e9bfe.response?.status === 500 && __DEV__ && v_9390e8) {
      console.warn('[healthApi] 500 응답 본문:', JSON.stringify(v_9390e8, null, 2));
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

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as HealthRecordsResponse);
    const v_678155 = v_9390e8?.records ?? [];

    if (__DEV__) {
      console.log('[healthApi] getHealthRecords 응답:', {
        status: v_8f00b9.status,
        recordsCount: v_678155.length,
      });
    }

    return v_678155;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] getHealthRecords 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.status === 401) {
      throw new Error('로그인이 필요합니다.');
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

export async function v_d531ea(v_fbf3b0): Promise<HealthRecordItem> {
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
      console.warn('[healthApi] getHealthRecordById: 저장된 토큰 없음. 로그인 필요.');
    }
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path${v_fbf3b0}`;
    if (__DEV__) {
      console.log('[healthApi] getHealthRecordById 요청:', {
        url: v_f71b56,
        recordId: v_fbf3b0,
      });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<HealthRecordDetailResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[healthApi] getHealthRecordById 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_f637a4 = v_8f00b9.data?.data as HealthRecordDetailResponse | undefined;
    const v_cbbd71 = v_f637a4?.record ?? (v_8f00b9.data as unknown as HealthRecordItem);

    if (!v_cbbd71 || typeof v_cbbd71 !== 'object') {
      throw new Error('건강 기록 상세 정보 응답 형식이 올바르지 않습니다.');
    }

    if (__DEV__) {
      console.log('[healthApi] getHealthRecordById 파싱된 데이터:', {
        hasRecord: !!v_cbbd71,
        recordId: v_cbbd71.id,
        hasVitalSigns: !!v_cbbd71.vital_signs,
        vitalSignsKeys: v_cbbd71.vital_signs ? Object.keys(v_cbbd71.vital_signs) : [],
      });
    }

    return v_cbbd71;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] getHealthRecordById 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.status === 401) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_4ebe12(): Promise<HealthRecordItem | null> {
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
      console.warn('[healthApi] getLatestHealthRecord: 저장된 토큰 없음. 로그인 필요.');
    }
    return null;
  }

  const v_7a19e4 = await v_e84827.getItem(v_48d821);
  if (v_7a19e4) {
    const v_e56026 = Date.now() - parseInt(v_7a19e4, 10);
    if (v_e56026 < v_7a2425) {
      const v_e2a6a6 = await v_e84827.getItem(v_172e22);
      if (v_e2a6a6) {
        try {
          const v_cbbd71 = JSON.parse(v_e2a6a6) as HealthRecordItem;
          if (__DEV__) {
            const v_9c6fac = Math.ceil((v_7a2425 - v_e56026) / 1000);
            console.log('[healthApi] getLatestHealthRecord 쿨다운 중. 캐시 반환. 재호출 가능까지 약', v_9c6fac, '초');
          }
          return v_cbbd71;
        } catch {

        }
      }
      if (__DEV__) {
        const v_9c6fac = Math.ceil((v_7a2425 - v_e56026) / 1000);
        console.log('[healthApi] getLatestHealthRecord 쿨다운 중. 재호출 가능까지 약', v_9c6fac, '초');
      }
      return null;
    }
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[healthApi] getLatestHealthRecord 요청:', { _ts: Date.now(), _time: new Date().toISOString(), url: v_f71b56 });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<LatestHealthRecordResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    const v_f637a4 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as LatestHealthRecordResponse);
    const v_cbbd71 = v_f637a4?.record;

    if (__DEV__) {
      console.log('[healthApi] getLatestHealthRecord 응답:', {
        _ts: Date.now(),
        _time: new Date().toISOString(),
        status: v_8f00b9.status,
        hasRecord: !!v_cbbd71,
        health_index: v_cbbd71?.health_index,
      });
    }

    const v_43c42e = v_cbbd71 || null;
    await v_e84827.setItem(v_48d821, String(Date.now()));
    if (v_43c42e) {
      await v_e84827.setItem(v_172e22, JSON.stringify(v_43c42e));
    } else {
      await v_e84827.removeItem(v_172e22);
    }
    return v_43c42e;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {

      if (v_5e9bfe.response?.status === 404) {
        if (__DEV__) {
          console.log('[healthApi] getLatestHealthRecord: 기록 없음');
        }
        return null;
      }
      console.error('[healthApi] getLatestHealthRecord 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    return null;
  }
}

export async function v_a55499(v_9dd532): Promise<CompareHealthRecordsResponse> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (!Array.isArray(v_9dd532) || v_9dd532.length < 2) {
    throw new Error('비교하려면 최소 2개의 기록이 필요합니다.');
  }

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
      console.warn('[healthApi] compareHealthRecords: 저장된 토큰 없음. 로그인 필요.');
    }
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_931bf0 = {
      record_ids: v_9dd532,
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[healthApi] compareHealthRecords 요청:', {
        url: v_f71b56,
        payload: v_931bf0,
      });
    }

    const v_8f00b9 = await v_b5030f.post<ApiResponse<CompareHealthRecordsResponse>>(v_f71b56, v_931bf0, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[healthApi] compareHealthRecords 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as CompareHealthRecordsResponse);

    if (!v_9390e8 || typeof v_9390e8 !== 'object' || !Array.isArray(v_9390e8.health_datas)) {
      throw new Error('건강 기록 비교 응답 형식이 올바르지 않습니다.');
    }

    if (__DEV__) {
      console.log('[healthApi] compareHealthRecords 파싱된 데이터:', {
        recordsCount: v_9390e8.health_datas.length,
        hasComparison: !!v_9390e8.comparison,
        comparisonKeys: v_9390e8.comparison ? Object.keys(v_9390e8.comparison) : [],
      });
    }

    return v_9390e8;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] compareHealthRecords 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_b5030f.isAxiosError(v_5e9bfe) && v_5e9bfe.response?.status === 401) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_61fb31(v_52e08b): Promise<string> {
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
      } catch { }
    }
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      ...(v_21cc31 ? { Authorization: `Bearer ${v_21cc31}` } : {}),
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[healthApi] analyzeHealthComparisonAi 요청:', { url: v_f71b56, ids: v_52e08b });
    }

    const v_8f00b9 = await v_b5030f.post(v_f71b56, { ids: v_52e08b }, { timeout: 60000, headers: v_3f4675 });

    const v_9390e8 = v_8f00b9.data?.data;
    if (v_9390e8?.analysis) {
      return v_9390e8.analysis;
    }
    throw new Error('AI 분석 결과를 찾을 수 없습니다.');
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[healthApi] analyzeHealthComparisonAi 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
      });
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}
