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

export async function v_649c8b(): Promise<ShopProduct[]> {
  const v_8f00b9 = await v_9a8286.get<ApiResponse<{ items: ShopProduct[] }>>('/oth-path');
  const v_9390e8 = (v_8f00b9.data?.data ?? v_8f00b9.data) as { items?: ShopProduct[] } | undefined;
  return v_9390e8?.items ?? [];
}
