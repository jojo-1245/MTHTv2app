import { v_3333d3 } from 'imsks';
import v_9a8286 from './apiClient';

export type PharmacyVisitRecordMeta = {
  id: number;
  created_at?: string;
  createdAt?: string;
  device_info?: string | null;
  deviceInfo?: string | null;
};

export type PharmacyVerifyResult = {
  visitorId: number;
  isNew: boolean;
  records: PharmacyVisitRecordMeta[];
};

export type PharmacyVisitorRecord = {
  id: number;
  createdAt: string;
  deviceInfo: string | null;
  result: Record<string, unknown> | null;
};

function v_9f9d96(v_5e9bfe, v_0debf4): string {
  if (v_5e9bfe instanceof v_3333d3) {
    const v_4d33b2 = v_5e9bfe.response?.data as { error?: { message?: string }; message?: string } | undefined;
    return v_4d33b2?.error?.message ?? v_4d33b2?.message ?? v_0debf4;
  }
  if (v_5e9bfe instanceof Error && v_5e9bfe.message) return v_5e9bfe.message;
  return v_0debf4;
}

function v_b37be4<T>(v_8f00b9): T {
  const v_931bf0 = v_8f00b9.data?.data;
  if (v_931bf0 == null) {
    throw new Error('서버 응답 형식이 올바르지 않습니다.');
  }
  return v_931bf0;
}

export type PharmacyVisitorSummary = {
  id: number;
  name: string;
  phone: string;
  createdAt: string;
  lastVisitAt: string | null;
  recordCount: number;
};

export async function v_66896f(): Promise<PharmacyVisitorSummary[]> {
  try {
    const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: { visitors: PharmacyVisitorSummary[] } }>(
      '/oth-path'
    );
    const v_9390e8 = v_b37be4(v_8f00b9);
    return v_9390e8.visitors ?? [];
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '방문 고객 목록을 불러오지 못했습니다.'));
  }
}

export async function v_119173(v_24baff): Promise<{ expiresIn: number; dev?: boolean }> {
  const v_1833e7 = v_24baff.name.trim();
  const v_d74a81 = v_24baff.phone.replace(/\D/g, '');
  try {
    const v_8f00b9 = await v_9a8286.post<{ success: boolean; data: { expires_in: number; dev?: boolean } }>(
      '/oth-path',
      { name: v_1833e7, phone: v_d74a81 }
    );
    const v_9390e8 = v_b37be4(v_8f00b9);
    return { expiresIn: v_9390e8.expires_in ?? 180, dev: v_9390e8.dev };
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '인증번호 전송에 실패했습니다.'));
  }
}

export async function v_bfe5e4(v_24baff): Promise<PharmacyVerifyResult> {
  const v_1833e7 = v_24baff.name.trim();
  const v_d74a81 = v_24baff.phone.replace(/\D/g, '');
  const v_c99bd2 = v_24baff.code.trim();
  try {
    const v_8f00b9 = await v_9a8286.post<{
      success: boolean;
      data: { visitorId: number; isNew: boolean; records: PharmacyVisitRecordMeta[] };
    }>('/oth-path', { name: v_1833e7, phone: v_d74a81, code: v_c99bd2 });
    const v_9390e8 = v_b37be4(v_8f00b9);
    return {
      visitorId: v_9390e8.visitorId,
      isNew: v_9390e8.isNew,
      records: v_9390e8.records ?? [],
    };
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '인증에 실패했습니다.'));
  }
}

export async function v_0f5973(v_24baff): Promise<{ recordId: number }> {
  try {
    const v_8f00b9 = await v_9a8286.post<{ success: boolean; data: { recordId: number } }>(
      '/oth-path',
      {
        visitorId: v_24baff.visitorId,
        result: v_24baff.result,
        ...(v_24baff.deviceInfo ? { deviceInfo: v_24baff.deviceInfo } : {}),
      }
    );
    const v_9390e8 = v_b37be4(v_8f00b9);
    return { recordId: v_9390e8.recordId };
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '검진 결과 저장에 실패했습니다.'));
  }
}

export async function v_71f4f5(v_610eb5): Promise<PharmacyVisitorRecord[]> {
  try {
    const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: { records: PharmacyVisitorRecord[] } }>(
      `/oth-path${v_610eb5}/records`
    );
    const v_9390e8 = v_b37be4(v_8f00b9);
    return v_9390e8.records ?? [];
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '검진 이력 조회에 실패했습니다.'));
  }
}

export async function v_f6fac8(v_fbf3b0): Promise<void> {
  try {
    await v_9a8286.delete(`/oth-path${v_fbf3b0}`);
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '검진 이력 삭제에 실패했습니다.'));
  }
}

export async function v_9c95f6(v_610eb5): Promise<void> {
  try {
    await v_9a8286.delete(`/oth-path${v_610eb5}/records`);
  } catch (v_5e9bfe) {
    throw new Error(v_9f9d96(v_5e9bfe, '검진 이력 삭제에 실패했습니다.'));
  }
}
