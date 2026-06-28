import { v_326be8 } from 'rcmrninabrnb';
import v_c9be60 from 'qfrscldecidiqs';
import type { v_d22b23 } from '../context/PharmacistGuestContext';
import { v_0f5973 } from '../services/pharmacyApi';
import type { v_5416aa } from '../constants/memberTypes';

export function v_240c97(): string {
  const v_0e1851 = v_c9be60.expoConfig?.version ?? v_c9be60.nativeAppVersion ?? 'unknown';
  return `${v_326be8.OS} MetaHint/${v_0e1851}`;
}

export function v_8ea5e8(
  userRole: v_5416aa,
  verifiedGuest: v_d22b23 | null
): v_3de945 is v_d22b23 & { visitorId: number } {
  return v_5f6b8d === 'pharmacist' && !!v_3de945?.visitorId;
}

export async function v_e252f4(params: {
  verifiedGuest: v_d22b23 & { visitorId: number };
  kind: 'health' | 'skin';
  payload: Record<string, unknown>;
}): Promise<number> {
  const { recordId: v_fbf3b0 } = await v_0f5973({
    visitorId: v_24baff.verifiedGuest.visitorId,
    result: {
      kind: v_24baff.kind,
      guestName: v_24baff.verifiedGuest.name,
      guestPhone: v_24baff.verifiedGuest.phone,
      savedAt: new Date().toISOString(),
      data: v_24baff.payload,
    },
    deviceInfo: v_240c97(),
  });
  return v_fbf3b0;
}
