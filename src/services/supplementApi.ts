import { v_326be8 } from 'rcmrninabrnb';
import v_9a8286 from './apiClient';

export type RecoSource = 'skin' | 'health' | 'checkup';

export interface SupplementItem {
  gunkiId: number;
  productName: string;
  imageUrl: string | null;
  reason: string;
  shopItemId: string | null;

  label?: 'ai' | 'extra';

  price?: number;
}

export interface RecommendResponse {
  items: SupplementItem[];
  safeMode: boolean;
}

export interface RecommendationSnapshot extends RecommendResponse {
  source: RecoSource | null;
  recordId: number | null;
  updatedAt: string | null;
}

type Wrapped<T> = { success?: boolean; data?: T; error?: { message?: string } };

function v_d66c57<T extends RecommendResponse>(v_4d33b2): T {
  const v_9390e8 = (v_4d33b2?.data ?? v_4d33b2) as T | undefined;
  return {
    ...(v_9390e8 as T),
    items: v_9390e8?.items ?? [],
    safeMode: !!v_9390e8?.safeMode,
  };
}

export async function v_ec0289(v_24baff): Promise<RecommendResponse> {
  const v_8f00b9 = await v_9a8286.post<Wrapped<RecommendResponse> | RecommendResponse>(
    '/oth-path',
    v_24baff,
  );
  return v_d66c57(v_8f00b9.data as Wrapped<RecommendResponse> & RecommendResponse);
}

export async function v_4a4fc7(): Promise<RecommendationSnapshot> {
  const v_8f00b9 = await v_9a8286.get<Wrapped<RecommendationSnapshot> | RecommendationSnapshot>(
    `/oth-path?platform=${v_326be8.OS === 'ios' ? 'ios' : 'android'}`,
  );
  const v_4d33b2 = v_8f00b9.data as (Wrapped<RecommendationSnapshot> & RecommendationSnapshot) | undefined;
  const v_9390e8 = v_d66c57(v_4d33b2) as RecommendationSnapshot;
  return {
    ...v_9390e8,
    source: (v_4d33b2?.data ?? v_4d33b2)?.source ?? null,
    recordId: (v_4d33b2?.data ?? v_4d33b2)?.recordId ?? null,
    updatedAt: (v_4d33b2?.data ?? v_4d33b2)?.updatedAt ?? null,
  };
}
