import { v_e4a763 } from '../utils/env';

export type NoticePayload = {
  title: string;
  content: string;
  url?: string;

  blocking?: boolean;
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

export type KeepaliveStatus = {
  notice: NoticePayload | null;

  maintenanceMode?: boolean;
  forceUpdate?: boolean;
};

function v_8f793a(v_3b402b): boolean | undefined {
  return typeof v_3b402b === 'boolean' ? v_3b402b : undefined;
}

export async function v_e72be9(): Promise<KeepaliveStatus | null> {
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
    if (!v_7ecfd1?.success || !v_7ecfd1.data) return null;

    return {
      notice: v_7ecfd1.data.notice ?? null,
      maintenanceMode: v_8f793a(v_7ecfd1.data.maintenance_mode),
      forceUpdate: v_8f793a(v_7ecfd1.data.force_update),
    };
  } catch (v_5e9bfe) {
    if (__DEV__) console.log('[Keepalive] Error:', v_5e9bfe);
    return null;
  }
}

export async function v_2988f9(): Promise<NoticePayload | null> {
  const v_d308b5 = await v_e72be9();
  return v_d308b5?.notice ?? null;
}
