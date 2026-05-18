

import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import v_9a8286 from './apiClient';

const v_8a74cb = 20000;
const v_c4e245 = 'metahint_read_notification_ids';

export type NotificationType = 9304 | 9305 | 9306 | 9307 | 9308;

export interface NotificationItem {

  id: number;
  board: number;
  type: NotificationType;
  title: string;
  description: string;
  datetime: string;
  unread?: boolean;
  requesterEmail?: string;
  requesterName?: string;
  reward_amount?: number;
}

type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  error?: { message: string };
};

interface RawNotification {
  id?: number;
  board?: number;
  type: number;
  title?: string;
  description?: string;
  datetime?: string;
  created_at?: string;
  unread?: boolean;
  is_read?: boolean;
  read?: boolean;
  requester_email?: string;
  requester_name?: string;
  reward_amount?: number;
}

function v_15db9d(v_fd5f43): string {
  if (!v_fd5f43 || typeof v_fd5f43 !== 'string') return new Date().toISOString();
  const v_8d41d7 = v_fd5f43.trim();
  if (!v_8d41d7) return new Date().toISOString();
  if (v_8d41d7.endsWith('Z') || /[+-]\d{2}:?\d{2}$/.test(v_8d41d7)) return v_8d41d7;
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(v_8d41d7)) return v_8d41d7 + 'Z';
  const v_af6a4f = v_8d41d7.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?)/);
  if (v_af6a4f) return v_af6a4f[1] + 'T' + v_af6a4f[2] + 'Z';
  const v_f4e98d = Number(v_8d41d7);
  if (!Number.isNaN(v_f4e98d)) return new Date(v_f4e98d > 1e12 ? v_f4e98d : v_f4e98d * 1000).toISOString();
  return v_8d41d7;
}

function v_3b22d2(v_479f05): number {
  const v_389afb = v_479f05.id ?? v_479f05.board ?? 0;
  return typeof v_389afb === 'number' ? v_389afb : Number(v_389afb) || 0;
}

function v_695297(v_479f05): boolean {
  if (typeof v_479f05.unread === 'boolean') return v_479f05.unread;
  if (typeof v_479f05.is_read === 'boolean') return !v_479f05.is_read;
  if (typeof v_479f05.read === 'boolean') return !v_479f05.read;
  return false;
}

export async function v_1c259d(): Promise<Set<number>> {
  try {
    const v_479f05 = await v_e84827.getItem(v_c4e245);
    if (!v_479f05) return new Set();
    const v_8decf8 = JSON.parse(v_479f05) as unknown;
    if (!Array.isArray(v_8decf8)) return new Set();
    return new Set(v_8decf8.map((v_81e2ef) => Number(v_81e2ef)).filter((v_f4e98d) => v_f4e98d > 0));
  } catch {
    return new Set();
  }
}

async function v_351a8b(v_389afb): Promise<void> {
  if (!v_389afb) return;
  const v_52e08b = await v_1c259d();
  v_52e08b.add(v_389afb);
  await v_e84827.setItem(v_c4e245, JSON.stringify([...v_52e08b]));
}

function v_67d14c(v_479f05, v_598166): NotificationItem {
  const v_5a90e9 = v_3b22d2(v_479f05);
  const v_10046b = typeof v_479f05.board === 'number' ? v_479f05.board : Number(v_479f05.board) || v_5a90e9;
  const v_65e6e7 = v_15db9d(v_479f05.datetime ?? v_479f05.created_at);
  const v_653390 = Number(v_479f05.type);
  const v_3b27d9 = ([9304, 9305, 9306, 9307, 9308] as const).includes(v_653390 as NotificationType)
    ? (v_653390 as NotificationType)
    : (9304 as NotificationType);
  const v_c2b699 = v_695297(v_479f05);
  const v_a78249 = v_c2b699 && !v_598166.has(v_5a90e9);
  return {
    id: v_5a90e9,
    board: v_10046b,
    type: v_3b27d9,
    title: v_479f05.title ?? '',
    description: v_479f05.description ?? '',
    datetime: v_65e6e7,
    unread: v_a78249,
    requesterEmail: v_479f05.requester_email,
    requesterName: v_479f05.requester_name,
    reward_amount: v_479f05.reward_amount != null ? Number(v_479f05.reward_amount) : undefined,
  };
}

export interface GetNotificationsResponse {
  notifications: NotificationItem[];
  total?: number;
}

async function v_66dbd7(): Promise<RawNotification[]> {
  const v_d8a9e2 = ['/oth-path', '/oth-path'] as const;
  let v_1c274a;
  for (const v_9fe22d of v_d8a9e2) {
    try {
      const v_8f00b9 = await v_9a8286.get<ApiResponse<{ notifications?: RawNotification[]; total?: number }>>(
        v_9fe22d,
        { timeout: v_8a74cb },
      );
      const v_ef8ab1 = v_8f00b9.data?.data?.notifications ?? [];
      if (__DEV__) {
        console.log(`[notificationApi] getNotifications OK: ${v_9fe22d}`, {
          count: v_ef8ab1.length,
          total: v_8f00b9.data?.data?.total,
        });
      }
      return Array.isArray(v_ef8ab1) ? v_ef8ab1 : [];
    } catch (v_5e9bfe) {
      v_1c274a = v_5e9bfe;
      const v_d308b5 = v_5e9bfe?.response?.status;
      if (v_d308b5 === 404 || v_d308b5 === 501) continue;
      throw v_5e9bfe;
    }
  }
  if (v_1c274a) throw v_1c274a;
  return [];
}

export async function v_880836(): Promise<GetNotificationsResponse> {
  try {
    const [v_ef8ab1, v_598166] = await Promise.all([
      v_66dbd7(),
      v_1c259d(),
    ]);
    const v_b9c00c = v_ef8ab1.map((v_479f05) => v_67d14c(v_479f05, v_598166));
    return { notifications: v_b9c00c, total: v_b9c00c.length };
  } catch (v_5e9bfe) {
    const v_d308b5 = v_5e9bfe?.response?.status;
    if (__DEV__) console.warn('[notificationApi] getNotifications 실패:', v_d308b5 ?? v_5e9bfe?.message);
    if (v_d308b5 === 404 || v_d308b5 === 501) {
      return { notifications: [] };
    }
    throw v_5e9bfe;
  }
}

async function v_e7c211(v_389afb): Promise<boolean> {
  const v_d8a9e2 = [
    `/oth-path${v_389afb}/read`,
    `/oth-path${v_389afb}/read`,
  ] as const;
  for (const v_9fe22d of v_d8a9e2) {
    try {
      await v_9a8286.patch(v_9fe22d, {}, { timeout: v_8a74cb });
      if (__DEV__) console.log('[notificationApi] markNotificationRead OK:', v_9fe22d);
      return true;
    } catch (v_5e9bfe) {
      const v_d308b5 = v_5e9bfe?.response?.status;
      if (v_d308b5 === 404 || v_d308b5 === 501) continue;
      throw v_5e9bfe;
    }
  }
  if (__DEV__) console.warn('[notificationApi] markNotificationRead: 서버 read API 없음, 로컬만 저장');
  return false;
}

export async function v_9803ea(v_389afb): Promise<void> {
  if (!v_389afb) return;
  await v_351a8b(v_389afb);
  try {
    await v_e7c211(v_389afb);
  } catch (v_5e9bfe) {
    const v_d308b5 = v_5e9bfe?.response?.status;
    if (v_d308b5 === 404 || v_d308b5 === 501) return;
    if (__DEV__) console.warn('[notificationApi] markNotificationRead 서버 실패 (로컬 읽음 유지):', v_5e9bfe?.message);
  }
}
