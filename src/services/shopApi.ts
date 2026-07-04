import v_9a8286 from './apiClient';

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
  return (Math.round((v_6bbb57 / v_f4d612) * 100) / 100).toString();
}
