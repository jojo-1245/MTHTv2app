import { v_e4a763 } from '../utils/env';

export type NoticePayload = {
  title: string;
  content: string;
  url?: string;
};

export interface KeepaliveResponse {
  success: boolean;
  data: {
    status: string;
    maintenance_mode: boolean;
    force_update: boolean;
    notice: NoticePayload | null;
    timestamp: string;
  };
}

export async function v_2988f9(): Promise<NoticePayload | null> {
  try {
    const v_c9c489 = v_e4a763();
    const v_a9653b = v_c9c489.GATEWAY || '';
    const v_cc9198 = v_a9653b.endsWith('/') ? v_a9653b.slice(0, -1) : v_a9653b;
    const v_f68bbb = v_c9c489.CLIENT_TOKEN || v_c9c489.GATEWAY_AUTH_CODE;

    if (!v_cc9198) return null;

    const v_f71b56 = `${v_cc9198}/oth-path`;

    const v_8f00b9 = await fetch(v_f71b56, {
      headers: { 
        'X-Client-Token': v_f68bbb,
        'Accept': 'application/json',
      },
    });

    if (!v_8f00b9.ok) return null;

    const v_7ecfd1 = await v_8f00b9.json();
    return v_7ecfd1?.success ? v_7ecfd1.data?.notice : null;
  } catch (v_5e9bfe) {
    if (__DEV__) console.log('[Keepalive] Error:', v_5e9bfe);
    return null;
  }
}
