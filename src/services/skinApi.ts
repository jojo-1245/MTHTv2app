import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_bcce6e } from '../utils/tokenCache';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; code?: string; statusCode?: number };
  message?: string;
  record_id?: number;
};

export interface SaveSkinRecordPayload {
  member_id?: number; 
  sub_account_id?: number; 
  record_date?: string; 
  record_time?: string; 
  overall_score: number; 
  skin_age: number; 
  grade: string; 
  analysis_result: Record<string, {
    ui_score: number;
    raw_score?: number;
    mask_url?: string;
  }>; 
  metadata?: Record<string, any>; 
}

export interface SaveSkinRecordResponse {
  success: boolean;
  message?: string;
  record_id?: number;
}

export interface SkinRecordItem {
  id: number;
  record_date: string; 
  record_time: string; 
  overall_score: number;
  skin_age: number;
  grade?: string;
  analysis_result?: Record<string, {
    ui_score: number;
    raw_score?: number;
    mask_url?: string;
  }> | string; 
  image_url?: string | null;
  caution_items?: string[];
  metadata?: Record<string, any>;
  member_id?: number;
  sub_account_id?: number | null;
  created_at?: string;
}

export interface SkinRecordsResponse {
  records: SkinRecordItem[];
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

export async function v_79be38(v_931bf0): Promise<SaveSkinRecordResponse> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (__DEV__) {
    console.log('[skinApi] saveSkinRecord: 토큰 읽기 시작...');
  }

  let v_21cc31 = await v_bcce6e();
  if (__DEV__) {
    console.log('[skinApi] AsyncStorage에서 authToken 읽기:', {
      found: !!v_21cc31,
      length: v_21cc31 ? v_21cc31.length : 0,
      preview: v_21cc31 ? `${v_21cc31.substring(0, 20)}...` : null,
    });
  }

  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (__DEV__) {
      console.log('[skinApi] memberInfo에서 토큰 찾기 시도:', {
        hasMemberInfo: !!v_0e3b5e,
      });
    }
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') {
          v_21cc31 = v_8d41d7;
          if (__DEV__) {
            console.log('[skinApi] memberInfo에서 토큰 찾음:', {
              length: v_21cc31.length,
              preview: `${v_21cc31.substring(0, 20)}...`,
            });
          }
        }
      } catch (v_5e9bfe) {
        if (__DEV__) {
          console.error('[skinApi] memberInfo 파싱 에러:', v_5e9bfe);
        }
      }
    }
  }

  if (!v_21cc31) {
    if (__DEV__) {
      const v_e66bb4 = await v_e84827.getAllKeys();
      console.warn('[skinApi] saveSkinRecord: 저장된 토큰 없음. 로그인 응답 형식 확인 필요.', {
        allStorageKeys: v_e66bb4,
        hasAuthTokenKey: v_e66bb4.includes(v_624bd2.authToken),
        hasMemberInfoKey: v_e66bb4.includes(v_624bd2.memberInfo),
        hasIsLoggedInKey: v_e66bb4.includes(v_624bd2.isLoggedIn),
      });
    }
    throw new Error('로그인이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[skinApi] 토큰 확인 완료, API 요청 진행');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[skinApi] saveSkinRecord 요청:', {
        url: v_f71b56,
        payload: {
          ...v_931bf0,
          analysis_result: v_931bf0.analysis_result ? '[MASKED]' : undefined,
        },
      });
    }

    const v_8f00b9 = await v_b5030f.post<ApiResponse<SaveSkinRecordResponse>>(v_f71b56, v_931bf0, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[skinApi] saveSkinRecord 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_f637a4 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as SaveSkinRecordResponse);

    if (!v_f637a4 || typeof v_f637a4 !== 'object') {
      throw new Error('피부 분석 결과 저장 응답 형식이 올바르지 않습니다.');
    }

    return v_f637a4;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[skinApi] saveSkinRecord 에러:', {
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

export async function v_81fcbc(v_ee2acd): Promise<SkinRecordItem[]> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (__DEV__) {
    console.log('[skinApi] getSkinRecords: 토큰 읽기 시작...');
  }

  let v_21cc31 = await v_bcce6e();
  if (__DEV__) {
    console.log('[skinApi] AsyncStorage에서 authToken 읽기:', {
      found: !!v_21cc31,
      length: v_21cc31 ? v_21cc31.length : 0,
      preview: v_21cc31 ? `${v_21cc31.substring(0, 20)}...` : null,
    });
  }

  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (__DEV__) {
      console.log('[skinApi] memberInfo에서 토큰 찾기 시도:', {
        hasMemberInfo: !!v_0e3b5e,
      });
    }
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') {
          v_21cc31 = v_8d41d7;
          if (__DEV__) {
            console.log('[skinApi] memberInfo에서 토큰 찾음:', {
              length: v_21cc31.length,
              preview: `${v_21cc31.substring(0, 20)}...`,
            });
          }
        }
      } catch (v_5e9bfe) {
        if (__DEV__) {
          console.error('[skinApi] memberInfo 파싱 에러:', v_5e9bfe);
        }
      }
    }
  }

  if (!v_21cc31) {
    if (__DEV__) {
      const v_e66bb4 = await v_e84827.getAllKeys();
      console.warn('[skinApi] getSkinRecords: 저장된 토큰 없음. 로그인 응답 형식 확인 필요.', {
        allStorageKeys: v_e66bb4,
        hasAuthTokenKey: v_e66bb4.includes(v_624bd2.authToken),
        hasMemberInfoKey: v_e66bb4.includes(v_624bd2.memberInfo),
        hasIsLoggedInKey: v_e66bb4.includes(v_624bd2.isLoggedIn),
      });
    }
    throw new Error('로그인이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[skinApi] 토큰 확인 완료, API 요청 진행');
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
      console.log('[skinApi] getSkinRecords 요청:', {
        url: v_f71b56,
        params: v_24baff,
        hasSubAccountId: !!v_ee2acd,
      });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<SkinRecordsResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
      params: v_24baff,
    });

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as SkinRecordsResponse);
    const v_678155 = v_9390e8?.records ?? [];

    if (__DEV__) {
      console.log('[skinApi] getSkinRecords 응답:', {
        status: v_8f00b9.status,
        recordsCount: v_678155.length,
      });
    }

    return v_678155;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[skinApi] getSkinRecords 에러:', {
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

export interface SkinRecordDetailResponse {
  record: SkinRecordItem;
}

export interface LatestSkinRecordResponse {
  record: SkinRecordItem;
}

export async function v_095212(v_fbf3b0): Promise<SkinRecordItem> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (__DEV__) {
    console.log('[skinApi] getSkinRecordById: 토큰 읽기 시작...');
  }

  let v_21cc31 = await v_bcce6e();
  if (__DEV__) {
    console.log('[skinApi] AsyncStorage에서 authToken 읽기:', {
      found: !!v_21cc31,
      length: v_21cc31 ? v_21cc31.length : 0,
      preview: v_21cc31 ? `${v_21cc31.substring(0, 20)}...` : null,
    });
  }

  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (__DEV__) {
      console.log('[skinApi] memberInfo에서 토큰 찾기 시도:', {
        hasMemberInfo: !!v_0e3b5e,
      });
    }
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') {
          v_21cc31 = v_8d41d7;
          if (__DEV__) {
            console.log('[skinApi] memberInfo에서 토큰 찾음:', {
              length: v_21cc31.length,
              preview: `${v_21cc31.substring(0, 20)}...`,
            });
          }
        }
      } catch (v_5e9bfe) {
        if (__DEV__) {
          console.error('[skinApi] memberInfo 파싱 에러:', v_5e9bfe);
        }
      }
    }
  }

  if (!v_21cc31) {
    if (__DEV__) {
      const v_e66bb4 = await v_e84827.getAllKeys();
      console.warn('[skinApi] getSkinRecordById: 저장된 토큰 없음. 로그인 응답 형식 확인 필요.', {
        allStorageKeys: v_e66bb4,
        hasAuthTokenKey: v_e66bb4.includes(v_624bd2.authToken),
        hasMemberInfoKey: v_e66bb4.includes(v_624bd2.memberInfo),
        hasIsLoggedInKey: v_e66bb4.includes(v_624bd2.isLoggedIn),
      });
    }
    throw new Error('로그인이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[skinApi] 토큰 확인 완료, API 요청 진행');
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path${v_fbf3b0}`;
    if (__DEV__) {
      console.log('[skinApi] getSkinRecordById 요청:', {
        url: v_f71b56,
        recordId: v_fbf3b0,
      });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<SkinRecordDetailResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[skinApi] getSkinRecordById 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_f637a4 = v_8f00b9.data?.data as SkinRecordDetailResponse | undefined;
    const v_cbbd71 = v_f637a4?.record ?? (v_8f00b9.data as unknown as SkinRecordItem);

    if (!v_cbbd71 || typeof v_cbbd71 !== 'object') {
      throw new Error('피부 기록 상세 정보 응답 형식이 올바르지 않습니다.');
    }

    if (__DEV__) {
      console.log('[skinApi] getSkinRecordById 파싱된 데이터:', {
        hasRecord: !!v_cbbd71,
        recordId: v_cbbd71.id,
        hasAnalysisResult: !!v_cbbd71.analysis_result,
        analysisResultKeys: v_cbbd71.analysis_result ? Object.keys(v_cbbd71.analysis_result) : [],
      });
    }

    return v_cbbd71;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[skinApi] getSkinRecordById 에러:', {
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

export interface CompareSkinRecordsPayload {
  record_ids: number[];
}

export interface CompareSkinRecordsResponse {
  skin_datas: SkinRecordItem[];
  comparison: {
    overall_score_changes?: {
      from: number;
      to: number;
      diff: number;
    };
    skin_age_changes?: {
      from: number;
      to: number;
      diff: number;
    };
    analysis_changes?: Record<string, {
      ui_score?: {
        from: number;
        to: number;
        diff: number;
      };
      raw_score?: {
        from: number;
        to: number;
        diff: number;
      };
    }>;
  };
}

export async function v_52c734(): Promise<SkinRecordItem | null> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  let v_21cc31 = await v_bcce6e();
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
      console.warn('[skinApi] getLatestSkinRecord: 저장된 토큰 없음. 로그인 필요.');
    }
    return null;
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_f71b56 = `${v_fed274}/oth-path`;
    if (__DEV__) {
      console.log('[skinApi] getLatestSkinRecord 요청:', { url: v_f71b56 });
    }

    const v_8f00b9 = await v_b5030f.get<ApiResponse<LatestSkinRecordResponse>>(v_f71b56, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    let v_479f05 = v_8f00b9.data?.data ?? v_8f00b9.data;
    if (typeof v_479f05 === 'string') {
      try {
        v_479f05 = JSON.parse(v_479f05) as LatestSkinRecordResponse | SkinRecordItem;
      } catch {
        v_479f05 = null;
      }
    }
    const v_cbbd71 = (() => {
      if (!v_479f05 || typeof v_479f05 !== 'object') return null;
      let v_cb35cb = (v_479f05 as LatestSkinRecordResponse).record;
      if (typeof v_cb35cb === 'string') {
        try {
          v_cb35cb = JSON.parse(v_cb35cb) as SkinRecordItem;
        } catch {
          return null;
        }
      }
      if (v_cb35cb && typeof v_cb35cb === 'object' && (v_cb35cb.overall_score !== undefined || (v_cb35cb as SkinRecordItem).record_date !== undefined)) {
        return v_cb35cb as SkinRecordItem;
      }
      if (typeof (v_479f05 as SkinRecordItem).overall_score !== 'undefined' || typeof (v_479f05 as SkinRecordItem).record_date !== 'undefined') {
        return v_479f05 as SkinRecordItem;
      }
      return null;
    })();

    if (__DEV__) {
      console.log('[skinApi] getLatestSkinRecord 응답:', {
        status: v_8f00b9.status,
        hasRecord: !!v_cbbd71,
        overall_score: v_cbbd71?.overall_score,
        rawKeys: v_479f05 && typeof v_479f05 === 'object' ? Object.keys(v_479f05) : [],
      });
    }

    return v_cbbd71 || null;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {

      if (v_5e9bfe.response?.status === 404) {
        if (__DEV__) {
          console.log('[skinApi] getLatestSkinRecord: 기록 없음');
        }
        return null;
      }
      console.error('[skinApi] getLatestSkinRecord 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    return null;
  }
}

export async function v_3680d3(v_9dd532): Promise<CompareSkinRecordsResponse> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (!Array.isArray(v_9dd532) || v_9dd532.length < 2) {
    throw new Error('비교하려면 최소 2개의 기록이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[skinApi] compareSkinRecords: 토큰 읽기 시작...');
  }

  let v_21cc31 = await v_bcce6e();
  if (__DEV__) {
    console.log('[skinApi] AsyncStorage에서 authToken 읽기:', {
      found: !!v_21cc31,
      length: v_21cc31 ? v_21cc31.length : 0,
      preview: v_21cc31 ? `${v_21cc31.substring(0, 20)}...` : null,
    });
  }

  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (__DEV__) {
      console.log('[skinApi] memberInfo에서 토큰 찾기 시도:', {
        hasMemberInfo: !!v_0e3b5e,
      });
    }
    if (v_0e3b5e) {
      try {
        const v_660822 = JSON.parse(v_0e3b5e) as Record<string, unknown>;
        const v_8d41d7 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token;
        if (typeof v_8d41d7 === 'string') {
          v_21cc31 = v_8d41d7;
          if (__DEV__) {
            console.log('[skinApi] memberInfo에서 토큰 찾음:', {
              length: v_21cc31.length,
              preview: `${v_21cc31.substring(0, 20)}...`,
            });
          }
        }
      } catch (v_5e9bfe) {
        if (__DEV__) {
          console.error('[skinApi] memberInfo 파싱 에러:', v_5e9bfe);
        }
      }
    }
  }

  if (!v_21cc31) {
    if (__DEV__) {
      const v_e66bb4 = await v_e84827.getAllKeys();
      console.warn('[skinApi] compareSkinRecords: 저장된 토큰 없음. 로그인 응답 형식 확인 필요.', {
        allStorageKeys: v_e66bb4,
        hasAuthTokenKey: v_e66bb4.includes(v_624bd2.authToken),
        hasMemberInfoKey: v_e66bb4.includes(v_624bd2.memberInfo),
        hasIsLoggedInKey: v_e66bb4.includes(v_624bd2.isLoggedIn),
      });
    }
    throw new Error('로그인이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[skinApi] 토큰 확인 완료, API 요청 진행');
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
      console.log('[skinApi] compareSkinRecords 요청:', {
        url: v_f71b56,
        payload: v_931bf0,
      });
    }

    const v_8f00b9 = await v_b5030f.post<ApiResponse<CompareSkinRecordsResponse>>(v_f71b56, v_931bf0, {
      timeout: v_8a74cb,
      headers: v_3f4675,
    });

    if (__DEV__) {
      console.log('[skinApi] compareSkinRecords 원본 응답:', {
        status: v_8f00b9.status,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as CompareSkinRecordsResponse);

    if (!v_9390e8 || typeof v_9390e8 !== 'object' || !Array.isArray(v_9390e8.skin_datas)) {
      throw new Error('피부 기록 비교 응답 형식이 올바르지 않습니다.');
    }

    if (__DEV__) {
      console.log('[skinApi] compareSkinRecords 파싱된 데이터:', {
        recordsCount: v_9390e8.skin_datas.length,
        hasComparison: !!v_9390e8.comparison,
        comparisonKeys: v_9390e8.comparison?.analysis_changes ? Object.keys(v_9390e8.comparison.analysis_changes) : [],
      });
    }

    return v_9390e8;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[skinApi] compareSkinRecords 에러:', {
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

export async function v_df51cf(v_52e08b): Promise<string> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  let v_21cc31 = await v_bcce6e();
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
      console.log('[skinApi] analyzeSkinComparisonAi 요청:', { url: v_f71b56, ids: v_52e08b });
    }

    const v_8f00b9 = await v_b5030f.post(v_f71b56, { ids: v_52e08b }, { timeout: 60000, headers: v_3f4675 });

    const v_9390e8 = v_8f00b9.data?.data;
    if (v_9390e8?.analysis) {
      return v_9390e8.analysis;
    }
    throw new Error('AI 분석 결과를 찾을 수 없습니다.');
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[skinApi] analyzeSkinComparisonAi 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
      });
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}
