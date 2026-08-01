import v_9a8286 from './apiClient';
import { v_e184b5 } from './linking';

type ApiResponse<T> = { success?: boolean; data?: T; error?: { message?: string } };

export interface ShopProduct {
  it_id: string;
  it_name: string;
  it_price: number;
  soldout: boolean;
  image_url: string | null;
  item_url: string;
}

export async function v_f96be4(): Promise<string> {
  const v_8f00b9 = await v_9a8286.post<ApiResponse<{ ticket: string; expires_in: number }>>('/oth-path', {});
  const v_9390e8 = (v_8f00b9.data?.data ?? v_8f00b9.data) as { ticket?: string } | undefined;
  if (!v_9390e8?.ticket) throw new Error('SSO_TICKET_EMPTY');
  return v_9390e8.ticket;
}

export interface ShopProductsResult {
  items: ShopProduct[];
  rate: number | null; 
}

export async function v_649c8b(): Promise<ShopProductsResult> {
  const v_8f00b9 = await v_9a8286.get<ApiResponse<{ items: ShopProduct[]; rate_krw_per_mtht: number | null }>>('/oth-path');
  const v_9390e8 = (v_8f00b9.data?.data ?? v_8f00b9.data) as { items?: ShopProduct[]; rate_krw_per_mtht?: number | null } | undefined;
  return { items: v_9390e8?.items ?? [], rate: v_9390e8?.rate_krw_per_mtht ?? null };
}

export function v_95c036(v_6bbb57, v_f4d612): string | null {
  if (!v_f4d612 || v_f4d612 <= 0 || typeof v_6bbb57 !== 'number' || !isFinite(v_6bbb57) || v_6bbb57 < 0) return null;
  const v_f52086 = Math.round((v_6bbb57 / v_f4d612) * 1000) / 1000;
  return Number(v_f52086.toFixed(3)).toString();
}

export type ShopPaymentDecision = 'approve' | 'decline';

export interface ShopPaymentConfirmResult {
  order_id: string;
  status: string;
  tx_hash?: string;
}

export interface MyShopPaymentStatus {
  order_id: string;
  status: string;
  krw_amount?: number;
  mtht_amount?: string;
  rate?: number;
  tx_hash?: string | null;
}

export async function v_6a6196(v_9d3240): Promise<MyShopPaymentStatus | null> {
  try {
    const v_8f00b9 = await v_9a8286.get<ApiResponse<MyShopPaymentStatus>>('/oth-path', {
      params: { order_id: v_9d3240 },
    });
    const v_9390e8 = (v_8f00b9.data?.data ?? v_8f00b9.data) as MyShopPaymentStatus | undefined;
    return v_9390e8?.order_id ? v_9390e8 : null;
  } catch (v_9e86fd) {
    const v_35a1f5 = v_9e86fd as { response?: { status?: number; data?: ApiResponse<unknown> } };
    if (__DEV__) {
      console.warn('[shopApi] my-status failed:', v_9d3240, v_35a1f5.response?.status, v_35a1f5.response?.data);
    }
    return null;
  }
}

export function v_c4536c(v_a8cd21): string {
  const v_35f85c = v_a8cd21.toLowerCase();
  if (v_35f85c.includes('insufficient')) return 'shop.payment.error_insufficient';
  if (v_35f85c.includes('rpc balance') || v_35f85c.includes('balance temporarily unavailable') || v_35f85c.includes('balance unavailable') || v_35f85c.includes('unexpected error')) {
    return 'shop.payment.error_rpc';
  }
  if (v_35f85c.includes('not your payment')) return 'shop.payment.error_account_mismatch';
  if (v_35f85c.includes('cannot confirm in status declined') || v_35f85c.includes('already declined')) {
    return 'shop.payment.error_declined_status';
  }
  if (v_35f85c.includes('cannot confirm in status') || v_35f85c.includes('already processed') || v_35f85c.includes('order not found')) {
    return 'shop.payment.error_stale_order';
  }
  if (v_35f85c.includes('confirmation window expired') || v_35f85c.includes('quote expired')) {
    return 'shop.payment.error_expired';
  }
  if (v_35f85c.includes('timeout') || v_35f85c.includes('network error') || v_35f85c.includes('econnaborted')) {
    return 'shop.payment.error_timeout';
  }
  if (v_35f85c.includes('merchant wallet not configured')) return 'shop.payment.error_failed_retry';
  if (v_35f85c.includes('payment failed') || v_35f85c.includes('tap approve again')) return 'shop.payment.error_failed_retry';
  if (v_35f85c.includes('cannot confirm in status failed')) return 'shop.payment.error_failed_retry';
  if (v_35f85c.includes('transfer failed') || v_35f85c.includes('charge failed') || v_35f85c.includes('charge threw') || v_35f85c.includes('no primary wallet')) {
    return 'shop.payment.error_failed_retry';
  }
  if (v_35f85c.includes('already in progress')) return 'shop.payment.error_timeout';
  return 'shop.payment.error_generic';
}

export function v_40afef(v_9d3240): string {
  const v_694b25 = (process.env.EXPO_PUBLIC_SHOP_BASE || 'https://oth-path-4f6cfb.example.invalid').replace(/\/$/, '');
  return `${v_694b25}/oth-path?od_id=${encodeURIComponent(v_9d3240)}`;
}

export async function v_b0c711(v_9d3240): Promise<void> {
  const v_a448ad = `/oth-path?od_id=${encodeURIComponent(v_9d3240)}`;
  await v_e184b5(v_a448ad);
}

export async function v_c61ec1(v_9d3240): Promise<void> {
  const v_a448ad = `/oth-path?od_id=${encodeURIComponent(v_9d3240)}`;
  await v_e184b5(v_a448ad);
}

export async function v_ad3415(): Promise<void> {
  await v_e184b5('/oth-path');
}

export async function v_a1b0e7(
  v_9d3240,
  v_403b73,
): Promise<ShopPaymentConfirmResult> {
  try {
    const v_8f00b9 = await v_9a8286.post<ApiResponse<ShopPaymentConfirmResult>>(
      '/oth-path',
      { order_id: v_9d3240, decision: v_403b73 },
      { timeout: 90000 },
    );
    const v_9390e8 = (v_8f00b9.data?.data ?? v_8f00b9.data) as ShopPaymentConfirmResult | undefined;
    if (!v_9390e8?.order_id) {
      throw new Error(v_8f00b9.data?.error?.message ?? 'SHOP_PAYMENT_CONFIRM_FAILED');
    }
    return v_9390e8;
  } catch (v_9e86fd) {
    const v_35a1f5 = v_9e86fd as { response?: { data?: ApiResponse<unknown> }; code?: string; message?: string };
    const v_badeaf = v_35a1f5.response?.data?.error?.message;
    if (__DEV__) {
      console.warn('[shopApi] confirm failed:', v_9d3240, v_403b73, v_35a1f5.response?.status, v_badeaf ?? v_35a1f5.message);
    }
    if (v_badeaf) throw new Error(v_badeaf);
    if (v_35a1f5.code === 'ECONNABORTED' || (v_35a1f5.message ?? '').toLowerCase().includes('timeout')) {
      throw new Error('request timeout');
    }
    throw v_9e86fd;
  }
}
