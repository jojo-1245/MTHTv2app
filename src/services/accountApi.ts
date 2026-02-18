import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';
import { v_edfdf4 } from '../utils/authErrorHandler';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export interface SubAccountItem {
  id: string;
  name: string;
  isCurrent?: boolean;
  email?: string; 
  linked_member_id?: number | null; 
}

export interface SubAccountListResponse {
  accounts?: SubAccountItem[];
  subAccounts?: SubAccountItem[];
  [key: string]: unknown;
}

function v_1bbaa4(v_5e9bfe): Error {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {
    const v_8a7529 = v_5e9bfe.response?.data as ApiResponse<unknown> | undefined;
    const v_a8cd21 =
      v_8a7529?.error?.message ||
      v_5e9bfe.response?.statusText ||
      v_5e9bfe.message ||
      '요청 중 오류가 발생했습니다.';
    return new Error(v_a8cd21);
  }
  if (v_5e9bfe instanceof Error) return v_5e9bfe;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

export async function v_766523(): Promise<SubAccountItem[]> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  if (__DEV__) {
    console.log('[accountApi] getSubAccountList: 토큰 읽기 시작...');
  }

  let v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (__DEV__) {
    console.log('[accountApi] AsyncStorage에서 authToken 읽기:', {
      found: !!v_21cc31,
      length: v_21cc31 ? v_21cc31.length : 0,
      preview: v_21cc31 ? `${v_21cc31.substring(0, 20)}...` : null,
    });
  }

  if (!v_21cc31) {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (__DEV__) {
      console.log('[accountApi] memberInfo에서 토큰 찾기 시도:', {
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
            console.log('[accountApi] memberInfo에서 토큰 찾음:', {
              length: v_21cc31.length,
              preview: `${v_21cc31.substring(0, 20)}...`,
            });
          }
        }
      } catch (v_5e9bfe) {
        if (__DEV__) {
          console.error('[accountApi] memberInfo 파싱 에러:', v_5e9bfe);
        }
      }
    }
  }

  if (!v_21cc31) {

    if (__DEV__) {
      const v_e66bb4 = await v_e84827.getAllKeys();
      console.warn('[accountApi] getSubAccountList: 저장된 토큰 없음. 로그인 필요.', {
        allStorageKeys: v_e66bb4,
        hasAuthTokenKey: v_e66bb4.includes(v_624bd2.authToken),
        hasMemberInfoKey: v_e66bb4.includes(v_624bd2.memberInfo),
        hasIsLoggedInKey: v_e66bb4.includes(v_624bd2.isLoggedIn),
      });
    }
    throw new Error('로그인이 필요합니다.');
  }

  if (__DEV__) {
    console.log('[accountApi] 토큰 확인 완료, API 요청 진행');
  }

  if (__DEV__) {
    console.log('[accountApi] getSubAccountList 요청:', { url: `${v_fed274}/oth-path` });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.get<ApiResponse<SubAccountListResponse>>(
      `${v_fed274}/oth-path`,
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    if (__DEV__) {
      console.log('[accountApi] getSubAccountList 원본 응답:', {
        status: v_8f00b9.status,
        statusText: v_8f00b9.statusText,
        headers: v_8f00b9.headers,
        data: JSON.stringify(v_8f00b9.data, null, 2),
      });
    }

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as SubAccountListResponse);

    if (__DEV__) {
      console.log('[accountApi] getSubAccountList 파싱된 data:', {
        data: JSON.stringify(v_9390e8, null, 2),
        dataType: typeof v_9390e8,
        isArray: Array.isArray(v_9390e8),
        hasAccounts: v_9390e8 && typeof v_9390e8 === 'object' && 'accounts' in v_9390e8,
        hasSubAccounts: v_9390e8 && typeof v_9390e8 === 'object' && 'subAccounts' in v_9390e8,
      });
    }

    let v_c86f08 = [];
    if (v_9390e8 && typeof v_9390e8 === 'object') {
      let v_73e485 = [];
      if (Array.isArray(v_9390e8.accounts)) {
        v_73e485 = v_9390e8.accounts;
        if (__DEV__) {
          console.log('[accountApi] data.accounts 배열 사용:', v_73e485);
        }
      } else if (Array.isArray(v_9390e8.subAccounts)) {
        v_73e485 = v_9390e8.subAccounts;
        if (__DEV__) {
          console.log('[accountApi] data.subAccounts 배열 사용:', v_73e485);
        }
      } else if (Array.isArray(v_9390e8)) {
        v_73e485 = v_9390e8;
        if (__DEV__) {
          console.log('[accountApi] data가 직접 배열:', v_73e485);
        }
      } else {
        if (__DEV__) {
          console.warn('[accountApi] 배열을 찾을 수 없음. data keys:', Object.keys(v_9390e8));
        }
      }

      v_c86f08 = v_73e485.map((v_9f1d92) => ({
        ...v_9f1d92,
        id: String(v_9f1d92.id || v_9f1d92.sub_account_id || ''),
      }));
    }

    if (__DEV__) {
      console.log('[accountApi] getSubAccountList 최종 결과:', {
        status: v_8f00b9.status,
        accountCount: v_c86f08.length,
        accounts: JSON.stringify(v_c86f08, null, 2),
      });
    }

    return v_c86f08;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] getSubAccountList 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export interface MemberSearchResult {
  name: string;
  email: string;
}

export interface MemberSearchResponse {
  list: MemberSearchResult[];
  total: number;
}

export async function v_ed063b(v_24baff): Promise<MemberSearchResult[]> {
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
  if (!v_21cc31) throw new Error('로그인이 필요합니다.');

  const v_2b5932 = new URLSearchParams();
  if (v_24baff.name) v_2b5932.append('name', v_24baff.name);
  if (v_24baff.email) v_2b5932.append('email', v_24baff.email);
  if (v_24baff.mobile) v_2b5932.append('mobile', v_24baff.mobile);

  if (__DEV__) {
    console.log('[accountApi] searchMember 요청:', {
      url: `${v_fed274}/oth-path?${v_2b5932.toString()}`,
      params: v_24baff,
    });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.get<ApiResponse<MemberSearchResponse>>(
      `${v_fed274}/oth-path?${v_2b5932.toString()}`,
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as MemberSearchResponse);
    const v_ef8ab1 = v_9390e8?.list ?? [];

    if (__DEV__) {
      console.log('[accountApi] searchMember 응답:', {
        status: v_8f00b9.status,
        total: v_9390e8?.total ?? 0,
        listCount: v_ef8ab1.length,
      });
    }

    return v_ef8ab1;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] searchMember 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export interface AddSubAccountPayload {
  name: string;
  relationship?: string;
  pin_code?: string;
  age?: number;
  email?: string;
  otp?: string;
}

export async function v_38a48e(
  v_e0c7e8,
  v_8e7cda,
  v_d39e78 = 'family',
  v_ee2acd
): Promise<SubAccountItem> {
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
  if (!v_21cc31) throw new Error('로그인이 필요합니다.');

  const v_931bf0 = {
    email: v_e0c7e8,
    otp: v_8e7cda,
    relationship: v_d39e78,
  };

  if (v_ee2acd !== undefined && v_ee2acd !== null) {
    v_931bf0.sub_account_id = v_ee2acd;
  }

  if (__DEV__) {
    console.log('[accountApi] linkFamilyAccount 요청:', {
      url: `${v_fed274}/oth-path`,
      payload: { ...v_931bf0, otp: '***' },
    });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.post<ApiResponse<SubAccountItem>>(
      `${v_fed274}/oth-path`,
      v_931bf0,
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as SubAccountItem);

    if (__DEV__) {
      console.log('[accountApi] linkFamilyAccount 응답:', {
        status: v_8f00b9.status,
        data: v_8f00b9.data,
        hasData: !!v_9390e8,
      });
    }

    return v_9390e8;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] linkFamilyAccount 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_01afb4(v_931bf0): Promise<SubAccountItem> {
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
  if (!v_21cc31) throw new Error('로그인이 필요합니다.');

  if (__DEV__) {
    console.log('[accountApi] addSubAccount 요청:', {
      url: `${v_fed274}/oth-path`,
      payload: { ...v_931bf0, otp: v_931bf0.otp ? '***' : undefined },
    });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.post<ApiResponse<SubAccountItem>>(
      `${v_fed274}/oth-path`,
      v_931bf0,
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as SubAccountItem);

    if (__DEV__) {
      console.log('[accountApi] addSubAccount 응답:', {
        status: v_8f00b9.status,
        hasData: !!v_9390e8,
      });
    }

    return v_9390e8;
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] addSubAccount 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_6a59bc(v_389afb): Promise<void> {
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
  if (!v_21cc31) throw new Error('로그인이 필요합니다.');

  if (__DEV__) {
    console.log('[accountApi] deleteSubAccount 요청:', {
      url: `${v_fed274}/oth-path${v_389afb}`,
      id: v_389afb,
    });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.delete<ApiResponse<void>>(
      `${v_fed274}/oth-path${v_389afb}`,
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    if (__DEV__) {
      console.log('[accountApi] deleteSubAccount 응답:', {
        status: v_8f00b9.status,
        success: v_8f00b9.data?.success,
      });
    }
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] deleteSubAccount 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_9112f4(v_e0c7e8): Promise<void> {
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
  if (!v_21cc31) throw new Error('로그인이 필요합니다.');

  if (__DEV__) {
    console.log('[accountApi] requestFamilyOtp 요청:', {
      url: `${v_fed274}/oth-path`,
      email: v_e0c7e8,
    });
  }

  try {
    const v_3f4675 = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_21cc31}`,
    };

    const v_8f00b9 = await v_b5030f.post<ApiResponse<{ success: boolean }>>(
      `${v_fed274}/oth-path`,
      { email: v_e0c7e8 },
      {
        timeout: v_8a74cb,
        headers: v_3f4675,
      }
    );

    if (__DEV__) {
      console.log('[accountApi] requestFamilyOtp 응답:', {
        status: v_8f00b9.status,
        data: v_8f00b9.data,
      });
    }
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.error('[accountApi] requestFamilyOtp 에러:', {
        status: v_5e9bfe.response?.status,
        data: v_5e9bfe.response?.data,
        message: v_5e9bfe.message,
      });
    }

    if (v_edfdf4(v_5e9bfe)) {
      throw new Error('로그인이 필요합니다.');
    }

    throw v_1bbaa4(v_5e9bfe);
  }
}

