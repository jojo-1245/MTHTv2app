import v_b5030f from 'imsks';
import v_9a8286 from './apiClient';
import { v_bcce6e } from '../utils/tokenCache';
import { v_e4a763 } from '../utils/env';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; code?: string; statusCode?: number };
  message?: string;
};

export interface AttendanceCheckData {
  message?: string;
  streak_day: number;
  reward_amount: string;
  check_date: string;
  timezone: string;

  streak_days?: number;
  is_bonus?: boolean;
}

export interface AttendanceRewardResponse {
  success: boolean;
  data: AttendanceCheckData;
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
    timezone: string;
  };
  timestamp?: string;
}

export interface AttendanceMonthStatusResponse {
  success: boolean;
  data: Record<string, unknown>;
  timestamp?: string;
}

export interface RewardHistoryItem {
  id: number;
  member_id: number;
  type: 'attendance' | 'health_analysis' | 'skin_analysis' | 'steps' | 'shop_purchase' | string;
  amount: string;
  token_id: number;
  reference_id: number | null;
  description: string;
  transfer_status: RewardTransferStatus | string;
  batch_id: number | null;
  tx_hash: string | null;
  retry_count: number;
  last_error: string | null;
  created_at: string; 

  order_id?: string;
  krw_amount?: number;
}

export type RewardTransferStatus = 'pending' | 'queued' | 'completed' | 'failed';

export interface GetRewardsHistoryParams {
  limit?: number;
  offset?: number;
  transfer_status?: RewardTransferStatus;
}

export interface RewardsHistoryResult {
  logs: RewardHistoryItem[];
  hasMore: boolean;
  total: number;
}

export interface RewardHistoryResponse {
  success: boolean;
  data: {
    logs: RewardHistoryItem[];
    has_more?: boolean;
    total?: number;
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
    if (v_5e9bfe.response?.status === 409) {
      return new v_d0556f(v_a8cd21);
    }
    return new Error(v_a8cd21);
  }
  if (v_5e9bfe instanceof Error) return v_5e9bfe;
  return new Error('요청 중 알 수 없는 오류가 발생했습니다.');
}

function v_30778f(v_9390e8): AttendanceCheckData & {
  streak_days: number;
  is_bonus: boolean;
} {
  const v_2eb0a0 = v_9390e8.streak_day ?? v_9390e8.streak_days ?? 0;
  return {
    ...v_9390e8,
    streak_day: v_2eb0a0,
    streak_days: v_2eb0a0,
    is_bonus: v_9390e8.is_bonus ?? false,
  };
}

export async function v_b008ca(v_e7e852): Promise<
  AttendanceCheckData & { streak_days: number; is_bonus: boolean }
> {
  try {
    const v_3393e3 = await v_9a8286.post<AttendanceRewardResponse>(
      '/oth-path',
      {}
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_30778f(v_3393e3.data.data);
    }

    throw new Error('출석 체크에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_e8dda3(
  v_e7e852
): Promise<AttendanceStatusDetailResponse['data']> {
  try {
    const v_3393e3 = await v_9a8286.get<AttendanceStatusDetailResponse>(
      '/oth-path'
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('출석 상태 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_3012f2(v_033a94): Promise<Record<string, unknown>> {
  try {
    const v_3393e3 = await v_9a8286.get<AttendanceMonthStatusResponse>(
      '/oth-path',
      { params: v_033a94 ? { month: v_033a94 } : undefined }
    );

    if (v_3393e3.data.success && v_3393e3.data.data) {
      return v_3393e3.data.data;
    }

    throw new Error('출석 월별 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export const v_cbf5f1 = v_3012f2;

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

  const v_21cc31 = await v_bcce6e();
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

  const v_21cc31 = await v_bcce6e();
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
  v_24baff = {},
): Promise<RewardsHistoryResult> {
  const { limit: v_02be30 = 100, offset: v_3bbadf = 0, transfer_status: v_d250fb } = v_24baff;
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');

  const v_21cc31 = await v_bcce6e();
  if (!v_21cc31) {
    throw new Error('로그인이 필요합니다.');
  }

  const v_7c5791 = { limit: v_02be30, offset: v_3bbadf };
  if (v_d250fb) {
    v_7c5791.transfer_status = v_d250fb;
  }

  try {
    const v_3393e3 = await v_b5030f.get<RewardHistoryResponse>(
      `${v_fed274}/oth-path`,
      {
        timeout: v_8a74cb,
        params: v_7c5791,
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
        logsCount: v_3393e3.data.data?.logs?.length ?? 0,
        hasMore: v_3393e3.data.data?.has_more,
        total: v_3393e3.data.data?.total,
        transfer_status: v_d250fb ?? '(none)',
      });
    }

    if (v_3393e3.data.success && v_3393e3.data.data) {
      const v_056206 = v_3393e3.data.data.logs ?? [];
      const v_6bbe19 = v_3393e3.data.data.has_more ?? false;
      const v_c83285 = v_3393e3.data.data.total ?? v_056206.length;
      return { logs: v_056206, hasMore: v_6bbe19, total: v_c83285 };
    }

    throw new Error('보상 이력 조회에 실패했습니다.');
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.error('[rewardsApi] getRewardsHistory 에러:', v_5e9bfe);
    }
    throw v_1bbaa4(v_5e9bfe);
  }
}

export interface MonthlyStepStatus {
  year: number;
  month: number;
  days_achieved: number;
  days_total: number;
  bonus_amount: string;
  is_completed: boolean;
  bonus_paid: string | null;
}

export async function v_8c7f62(): Promise<MonthlyStepStatus> {
  const v_21cc31 = await v_bcce6e();
  const v_fed274 = v_e4a763().API_URL;
  const v_3393e3 = await v_b5030f.get<ApiResponse<MonthlyStepStatus>>(
    `${v_fed274}/oth-path`,
    {
      headers: { Authorization: `Bearer ${v_21cc31}` },
      timeout: v_8a74cb,
    }
  );
  const v_9390e8 = v_3393e3.data?.data;
  if (!v_9390e8) throw new Error('Failed to get monthly step status');
  return v_9390e8;
}

export interface RewardConfig {
  step_reward_per1k: number | null;
  step_goal_reward: number | null;
  step_goal: number;
  step_milestone_interval: number;
}

export async function v_7c14c7(): Promise<RewardConfig> {
  const v_21cc31 = await v_bcce6e();
  const v_fed274 = v_e4a763().API_URL;
  const v_3393e3 = await v_b5030f.get<ApiResponse<RewardConfig>>(
    `${v_fed274}/oth-path`,
    {
      headers: { Authorization: `Bearer ${v_21cc31}` },
      timeout: v_8a74cb,
    }
  );
  const v_9390e8 = v_3393e3.data?.data;
  if (!v_9390e8) throw new Error('Failed to get reward config');
  return v_9390e8;
}
