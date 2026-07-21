import v_9a8286 from './apiClient';

export type RecoSource = 'skin' | 'health' | 'checkup';

export interface SupplementItem {
  gunkiId: number;
  productName: string;
  imageUrl: string | null;
  reason: string;
  shopItemId: string | null;
}

export interface RecommendResponse {
  items: SupplementItem[];
  safeMode: boolean;
}

type Wrapped = { success?: boolean; data?: RecommendResponse; error?: { message?: string } };

export async function v_ec0289(v_24baff): Promise<RecommendResponse> {
  const v_8f00b9 = await v_9a8286.post<Wrapped | RecommendResponse>('/oth-path', v_24baff);
  const v_4d33b2 = v_8f00b9.data as (Wrapped & RecommendResponse) | undefined;
  const v_9390e8 = (v_4d33b2?.data ?? v_4d33b2) as RecommendResponse | undefined;
  return { items: v_9390e8?.items ?? [], safeMode: !!v_9390e8?.safeMode };
}
