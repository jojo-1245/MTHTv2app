

import v_b5030f from 'imsks';
import { v_e4a763 } from '../utils/env';

const v_8a74cb = 20000;

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string; code?: string };
};

export type PushPlatform = 'android' | 'ios';

export interface RegisterPushTokenParams {

  token: string;

  platform: PushPlatform;

  device_id?: string;
}

export async function v_cec605(
  v_2ca7e0,
  v_24baff,
): Promise<void> {
  const v_c9c489 = v_e4a763();
  const v_fed274 = v_c9c489.GATEWAY;
  if (!v_fed274) throw new Error('서버 주소가 설정되지 않았습니다. GATEWAY를 확인해주세요.');
  if (!v_2ca7e0) throw new Error('로그인이 필요합니다.');

  const v_f71b56 = `${v_fed274}/oth-path`;
  const v_4d33b2 = {
    token: v_24baff.token,
    platform: v_24baff.platform,
    ...(v_24baff.device_id != null && { device_id: v_24baff.device_id }),
  };

  const v_8f00b9 = await v_b5030f.post<ApiResponse<unknown>>(v_f71b56, v_4d33b2, {
    timeout: v_8a74cb,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${v_2ca7e0}`,
      ...(v_c9c489.CLIENT_TOKEN && { 'X-Client-Token': v_c9c489.CLIENT_TOKEN }),
    },
  });

  if (v_8f00b9.data?.success === false || (v_8f00b9.data as { error?: unknown })?.error) {
    const v_49263d = (v_8f00b9.data as { error?: { message?: string } })?.error;
    throw new Error(v_49263d?.message ?? '푸시 토큰 등록에 실패했습니다.');
  }
}
