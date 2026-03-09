import v_b5030f from 'imsks';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_624bd2 } from '../constants';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; code?: string; statusCode?: number };
  message?: string;
};

export interface AttendanceRewardResponse {
  success: boolean;
  data: {
    streak_days: number;
    reward_amount: string;
    is_bonus: boolean;
  };
}

export interface AttendanceStatusResponse {
  success: boolean;
  data: {
    checked_today: boolean;
    streak_days: number;
    checked_dates: string[]; 
  };
}

export interface AttendanceStatusDetailResponse {
  success: boolean;
  data: {
    recent_status: Array<{
      date: string; 
      attended: boolean;
      streak_day: number;
    }>;
    current_streak: number;
    is_consecutive: boolean;
    week_attended: number;
    week_total: number;
    week_progress: string; 
    week_start: string; 
    week_end: string; 
  };
  timestamp?: string;
}

export interface RewardHistoryItem {
  id: number;
  member_id: number;
  type: 'attendance' | 'health_analysis' | 'skin_analysis' | 'steps' | string;
  amount: string;
  token_id: number;
  reference_id: number | null;
  description: string;
  transfer_status: 'pending' | 'completed' | 'failed' | string;
  batch_id: number | null;
  tx_hash: string | null;
  retry_count: number;
  last_error: string | null;
  created_at: string; 
}

export interface RewardHistoryResponse {
  success: boolean;
  data: {
    logs: RewardHistoryItem[];
  };
  timestamp?: string;
}

export class v_d0556f extends Error {
  constructor(v_a8cd21 = '이미 출석 체크했습니다.') {
    super(v_a8cd21);
    this.name = 'AlreadyCheckedInError';
  }
}

function v_1bbaa4(v_5e9bfe): Error {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {
    const v_8a7529 = v_5e9bfe.response?.data as ApiResponse<unknown> | undefined;
    const v_a8cd21 =
      v_8a7529?.error?.message ||
      v_5e9bfe.response?.statusText ||
      v_5e9bfe.message ||
      '요청 중 오류가 발생했습니다.';

    if (
      v_a8cd21.toLowerCase().includes('already checked') ||
      v_a8cd21.toLowerCase().includes('already checked in today') ||
      v_a8cd21.toLowerCase().includes('이미 출석')
    ) {
      return new v_d0556f(v_a8cd21);
    }

    if (v_5e9bfe.response?.status === 401) {
      return new Error('로그인이 필요합니다.');
    }
    return new Error(v_a8cd21);
  }
  if (v_5e9bfe instanceof Error) return v_5e9bfe;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

export async function v_b008ca(v_c65f5d): Promise<AttendanceRewardResponse['data']> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3393e3 = await v_b5030f.post<AttendanceRewardResponse>(
      `${v_fed274}/oth-path`,
      {},
      {
        timeout: v_8a74cb,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('출석 체크에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_cbf5f1(v_c65f5d): Promise<AttendanceStatusResponse['data']> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3393e3 = await v_b5030f.get<AttendanceStatusResponse>(
      `${v_fed274}/oth-path`,
      {
        timeout: v_8a74cb,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('출석 상태 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_e8dda3(v_c65f5d): Promise<AttendanceStatusDetailResponse['data']> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3393e3 = await v_b5030f.get<AttendanceStatusDetailResponse>(
      `${v_fed274}/oth-path`,
      {
        timeout: v_8a74cb,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('출석 상태 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export interface StepsSyncStateResponse {
  success: boolean;
  data: {
    state_idx: number[];
  };
  timestamp?: string;
}

export interface SyncStepsResponse {
  success: boolean;
  data: {
    message: string;
    total_steps: number;
    goal_steps?: number;
    steps_count?: number;
    new_rewards_count: number;
    total_reward_paid: number;
    rewards_received?: Array<{ reward_index: number; steps: number }>;
    state_idx: number[];
    policy_note: string;
  };
  timestamp?: string;
}

export async function v_6c47a7(v_067e65): Promise<number[]> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  const v_cd6a57 = { record_date: v_067e65 };
  if (__DEV__) {
    console.log('[rewardsApi] getStepsSyncState 요청:', JSON.stringify(v_cd6a57), { _ts: Date.now(), _time: new Date().toISOString() });
  }

  try {
    const v_3393e3 = await v_b5030f.post<StepsSyncStateResponse>(
      `${v_fed274}/oth-path`,
      v_cd6a57,
      {
        timeout: v_8a74cb,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (__DEV__) {
      console.log('[rewardsApi] getStepsSyncState 응답:', JSON.stringify(v_3393e3.data), { _ts: Date.now(), _time: new Date().toISOString() });
    }

    if (v_3393e3.data.success && v_3393e3.data.data?.state_idx) {
      return v_3393e3.data.data.state_idx;
    }
    return [];
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.log('[rewardsApi] getStepsSyncState 에러 응답:', v_5e9bfe.response?.status, JSON.stringify(v_5e9bfe.response?.data));
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_2ca7ff(
  v_067e65,
  v_be48b1,
  v_8b50b1,
  v_c65f5d,
  v_e86ad8
): Promise<SyncStepsResponse['data']> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  const v_4d33b2 =
    v_e86ad8 !== undefined
      ? {
          record_date: v_067e65,
          idx: v_e86ad8,
          weight: 1,
          total_steps: v_be48b1,
          goal_steps: v_8b50b1,
        }
      : {
          record_date: v_067e65,
          total_steps: v_be48b1,
          goal_steps: v_8b50b1,
        };

  if (__DEV__) {
    console.log('[rewardsApi] syncSteps 요청 (보상 받기):', JSON.stringify(v_4d33b2));
  }

  try {
    const v_3393e3 = await v_b5030f.post<SyncStepsResponse>(
      `${v_fed274}/oth-path`,
      v_4d33b2,
      {
        timeout: v_8a74cb,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (__DEV__) {
      console.log('[rewardsApi] syncSteps 응답:', JSON.stringify(v_3393e3.data));
    }

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('걸음수 동기화에 실패했습니다.');
  } catch (v_5e9bfe) {
    if (__DEV__ && v_b5030f.isAxiosError(v_5e9bfe)) {
      console.log('[rewardsApi] syncSteps 에러 응답:', v_5e9bfe.response?.status, JSON.stringify(v_5e9bfe.response?.data));
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_7740c3(
  v_02be30 = 20,
  v_3bbadf = 0,
  v_c65f5d
): Promise<RewardHistoryItem[]> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const v_3393e3 = await v_b5030f.get<RewardHistoryResponse>(
      `${v_fed274}/oth-path`,
      {
        timeout: v_8a74cb,
        params: {
          limit: v_02be30,
          offset: v_3bbadf,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${v_21cc31}`,
        },
      }
    );

    if (__DEV__) {
      console.log('[rewardsApi] getRewardsHistory 응답:', {
        success: v_3393e3.data.success,
        hasData: !!v_3393e3.data.data,
        logsCount: v_3393e3.data.data?.logs?.length || 0,
      });
    }

    if (v_3393e3.data.success && v_3393e3.data.data?.logs) {
      return v_3393e3.data.data.logs;
    }

    throw new Error('보상 이력 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.error('[rewardsApi] getRewardsHistory 에러:', v_5e9bfe);
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

