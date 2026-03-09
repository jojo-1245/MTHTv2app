

import v_9a8286 from './apiClient';

const v_8a74cb = 20000;

export type NotificationType = 9304 | 9305 | 9306 | 9307 | 9308;

export interface NotificationItem {
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

function v_67d14c(v_479f05): NotificationItem {
  const v_389afb = v_479f05.board ?? v_479f05.id ?? 0;
  const v_65e6e7 = v_15db9d(v_479f05.datetime ?? v_479f05.created_at);
  const v_653390 = Number(v_479f05.type);
  const v_3b27d9 = ([9304, 9305, 9306, 9307, 9308] as const).includes(v_653390 as 9304 | 9305 | 9306 | 9307 | 9308)
    ? (v_653390 as NotificationType)
    : (9304 as NotificationType);
  return {
    board: typeof v_389afb === 'number' ? v_389afb : Number(v_389afb) || 0,
    type: v_3b27d9,
    title: v_479f05.title ?? '',
    description: v_479f05.description ?? '',
    datetime: v_65e6e7,
    unread: v_479f05.unread !== false,
    requesterEmail: v_479f05.requester_email,
    requesterName: v_479f05.requester_name,
    reward_amount: v_479f05.reward_amount != null ? Number(v_479f05.reward_amount) : undefined,
  };
}

export interface GetNotificationsResponse {
  notifications: NotificationItem[];
  total?: number;
}

export async function v_880836(): Promise<GetNotificationsResponse> {
  try {
    const v_8f00b9 = await v_9a8286.get<ApiResponse<{ notifications?: RawNotification[]; total?: number }>>(
      '/oth-path',
      { timeout: v_8a74cb }
    );
    const v_9390e8 = v_8f00b9.data?.data;
    const v_ef8ab1 = v_9390e8?.notifications ?? [];
    const v_b9c00c = Array.isArray(v_ef8ab1) ? v_ef8ab1.map(v_67d14c) : [];
    if (__DEV__) {
      console.log('[notificationApi] getNotifications 요청: GET /oth-path');
      console.log('[notificationApi] getNotifications 응답:', { count: v_b9c00c.length, total: v_9390e8?.total });
    }
    return { notifications: v_b9c00c, total: v_9390e8?.total };
  } catch (v_5e9bfe) {
    const v_d308b5 = v_5e9bfe?.response?.status;
    if (__DEV__) console.warn('[notificationApi] getNotifications 실패:', v_d308b5 ?? v_5e9bfe?.message);
    if (v_d308b5 === 404 || v_d308b5 === 501) {
      return { notifications: [] };
    }
    throw v_5e9bfe;
  }
}

export async function v_9803ea(v_389afb): Promise<void> {
  try {
    await v_9a8286.patch(`/oth-path${v_389afb}/read`, {}, { timeout: v_8a74cb });
  } catch (v_5e9bfe) {
    const v_d308b5 = v_5e9bfe?.response?.status;
    if (v_d308b5 === 404 || v_d308b5 === 501) {
      if (__DEV__) console.warn('[notificationApi] markNotificationRead: API 미구현.');
      return;
    }
    throw v_5e9bfe;
  }
}
