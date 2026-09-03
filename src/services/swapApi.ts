import v_b5030f from 'imsks';
import v_9a8286 from './apiClient';

export type SwapDirection = 'pol_to_bnb' | 'bnb_to_pol';

export interface SwapConfig {

  bnb_wallet_enabled?: boolean;
  swap_enabled: boolean;
  fee_percent: string;
  min_pol: string;
  max_pol: string;
  min_bnb: string;
  max_bnb: string;
}

export interface SwapQuote {
  direction: SwapDirection;
  amount_in: string;
  fee_amount: string;
  fee_asset: 'POL' | 'BNB';
  amount_out: string;
  min_amount: string;
  max_amount: string;
}

export interface SwapExecuteResult {
  success?: boolean;
  swap_id?: number;
  status?: string;
  leg1_tx_hash?: string;
  leg2_tx_hash?: string;
  amount_in?: string;
  amount_out?: string;
  error?: string;
}

export interface SwapHistoryItem {
  id: number;
  direction: SwapDirection;
  status: string;
  amount_in: string;
  amount_out: string;
  fee_amount: string;
  fee_asset: string;
  leg1_tx_hash: string | null;
  leg2_tx_hash: string | null;
  error: string | null;
  created_at: string;
  completed_at: string | null;
}

function v_93e763(v_49263d): string {
  if (v_b5030f.isAxiosError(v_49263d)) {
    const v_9390e8 = v_49263d.response?.data as { error?: { message?: string } } | undefined;
    const v_94c4e5 = v_9390e8?.error?.message?.trim();
    if (v_94c4e5) return v_94c4e5;
  }
  if (v_49263d instanceof Error) {
    if (/request failed with status code/i.test(v_49263d.message)) {
      return '요청에 실패했습니다. 잠시 후 다시 시도해 주세요.';
    }
    return v_49263d.message;
  }
  return '요청에 실패했습니다.';
}

export async function v_6c56a6(): Promise<SwapConfig> {
  const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: SwapConfig }>('/oth-path');
  return v_8f00b9.data.data;
}

export async function v_f4f402(v_1fec52, v_f63e09): Promise<SwapQuote> {
  try {
    const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: SwapQuote }>('/oth-path', {
      params: { direction: v_1fec52, amount: v_f63e09 },
    });
    return v_8f00b9.data.data;
  } catch (v_49263d) {
    throw new Error(v_93e763(v_49263d));
  }
}

export async function v_f8cba4(v_1fec52, v_f63e09): Promise<SwapExecuteResult> {
  try {
    const v_8f00b9 = await v_9a8286.post<{ success: boolean; data: SwapExecuteResult }>('/oth-path', {
      direction: v_1fec52,
      amount: v_f63e09,
    });
    return v_8f00b9.data.data;
  } catch (v_49263d) {
    const v_35a1f5 = v_49263d as {
      response?: {
        status?: number;
        data?: { error?: { message?: string; details?: SwapExecuteResult } };
      };
    };
    if (v_35a1f5.response?.status === 202 && v_35a1f5.response.data?.error?.details) {
      return {
        ...v_35a1f5.response.data.error.details,
        error: v_35a1f5.response.data.error.message,
      };
    }
    throw new Error(v_93e763(v_49263d));
  }
}

export async function v_cf9d22(v_02be30 = 20): Promise<SwapHistoryItem[]> {
  const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: { items: SwapHistoryItem[] } }>(
    '/oth-path',
    { params: { limit: v_02be30 } },
  );
  return v_8f00b9.data.data.items ?? [];
}
