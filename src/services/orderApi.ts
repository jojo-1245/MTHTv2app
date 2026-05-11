

import v_b5030f from 'imsks';
import v_9a8286 from './apiClient';
import { v_e4a763 } from '../utils/env';
import { v_edfdf4 } from '../utils/authErrorHandler';

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; statusCode?: number };
};

export interface RecommendedProduct {
  id: number;
  no: number;
  category: string;
  product_name: string;

  image_url: string | null;
  daily_price: number | null;
  monthly_price: number | null;
  representative_function: string | null;
}

export interface ProductDetail extends RecommendedProduct {
  description?: string | null;
  stock?: number | null;
}

export interface OrderPayload {
  gunki_id: number;
  quantity: number;
  recipient_name: string;
  recipient_mobile: string;
  postal_code: string;
  address: string;
  address_detail: string;

  save_address?: boolean;
}

export interface OrderCreateResponse {
  order_id: number | string;
  order_no: string;
  status?: string;
  total_amount?: number;
}

export interface AddressUpdatePayload {
  postal_code: string;
  address: string;
  address_detail?: string;
}

export interface OrderItem {
  id: number | string;
  order_no: string;
  product_name: string;
  quantity: number;
  total_amount: number;
  status: string;
  created_at: string;
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

export function v_755eb9(): string {
  return v_e4a763().GATEWAY || '';
}

export function v_7ef52a(v_8a33c8): string | null {
  if (!v_8a33c8) return null;
  if (/^https?:\/\//i.test(v_8a33c8)) return v_8a33c8;
  const v_694b25 = v_755eb9().replace(/\/$/, '');
  const v_9fe22d = v_8a33c8.startsWith('/') ? v_8a33c8 : `/${v_8a33c8}`;
  return `${v_694b25}${v_9fe22d}`;
}

export async function v_36c98c(): Promise<RecommendedProduct[]> {
  try {
    const v_8f00b9 = await v_9a8286.get<ApiResponse<RecommendedProduct[] | { list: RecommendedProduct[] }>>(
      '/oth-path'
    );
    const v_479f05 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown);
    if (Array.isArray(v_479f05)) return v_479f05 as RecommendedProduct[];
    if (v_479f05 && typeof v_479f05 === 'object') {

      if (Array.isArray((v_479f05 as any).items)) return (v_479f05 as any).items as RecommendedProduct[];
      if (Array.isArray((v_479f05 as any).list)) return (v_479f05 as any).list as RecommendedProduct[];
    }
    return [];
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.warn('[orderApi] getRecommendations 실패:', (v_5e9bfe as Error)?.message);
    }

    if (v_edfdf4(v_5e9bfe)) throw v_1bbaa4(v_5e9bfe);

    return [];
  }
}

export async function v_5e3aed(v_389afb): Promise<ProductDetail> {
  try {
    const v_8f00b9 = await v_9a8286.get<ApiResponse<ProductDetail>>(`/oth-path${v_389afb}`);
    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as ProductDetail);
    if (!v_9390e8 || typeof v_9390e8 !== 'object') throw new Error('상품 정보를 불러오지 못했습니다.');
    return v_9390e8 as ProductDetail;
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_b892c9(v_931bf0): Promise<OrderCreateResponse> {
  try {
    if (__DEV__) {
      console.log('[orderApi] createOrder 요청:', { ...v_931bf0 });
    }
    const v_8f00b9 = await v_9a8286.post<ApiResponse<OrderCreateResponse>>('/oth-path', v_931bf0);
    const v_9390e8 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown as OrderCreateResponse);
    if (!v_9390e8 || typeof v_9390e8 !== 'object') throw new Error('주문 응답을 해석하지 못했습니다.');
    return v_9390e8 as OrderCreateResponse;
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_c3313b(v_931bf0): Promise<void> {
  try {
    await v_9a8286.patch<ApiResponse<unknown>>('/oth-path', v_931bf0);
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}

export async function v_9b64a9(v_2365e9 = 1, v_02be30 = 20): Promise<OrderItem[]> {
  try {
    const v_8f00b9 = await v_9a8286.get<ApiResponse<OrderItem[] | { list: OrderItem[] }>>(
      '/oth-path',
      { params: { page: v_2365e9, limit: v_02be30 } }
    );
    const v_479f05 = v_8f00b9.data?.data ?? (v_8f00b9.data as unknown);
    if (Array.isArray(v_479f05)) return v_479f05 as OrderItem[];
    if (v_479f05 && typeof v_479f05 === 'object' && Array.isArray((v_479f05 as any).list)) {
      return (v_479f05 as any).list as OrderItem[];
    }
    return [];
  } catch (v_5e9bfe) {
    throw v_1bbaa4(v_5e9bfe);
  }
}
