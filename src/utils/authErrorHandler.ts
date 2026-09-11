import v_b5030f from 'imsks';
import { v_2d4718, v_326be8 } from 'rcmrninabrnb';
import { v_2a53b4 } from '../navigation/rootNavigationRef';
import { v_4b3c9f } from '../services/authApi';
import { v_889fad } from '../components/AlertHost';
import { v_f42779 } from '../services/clientLog';

export type AuthErrorMatchReason =
  | 'http_401'
  | 'http_403'
  | 'msg_login_required'
  | 'msg_unauthorized'
  | 'msg_authentication'
  | 'msg_forbidden'
  | null;

export function v_d8eb34(v_5e9bfe): AuthErrorMatchReason {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {
    const v_d308b5 = v_5e9bfe.response?.status;
    if (v_d308b5 === 401) return 'http_401';
    if (v_d308b5 === 403) return 'http_403';

    return null;
  }

  if (v_5e9bfe instanceof Error) {
    const v_1744b9 = v_5e9bfe.message.toLowerCase();
    if (v_1744b9.includes('로그인이 필요')) return 'msg_login_required';
    if (v_1744b9.includes('unauthorized')) return 'msg_unauthorized';
    if (v_1744b9.includes('authentication')) return 'msg_authentication';
    if (v_1744b9.includes('forbidden')) return 'msg_forbidden';
  }

  return null;
}

export function v_edfdf4(v_5e9bfe): boolean {
  return v_d8eb34(v_5e9bfe) != null;
}

export function v_998b9d(
  v_e7e852,
  v_5e9bfe
): boolean {
  const v_58ca36 = v_d8eb34(v_5e9bfe);
  if (v_58ca36) {
    const v_d308b5 = v_b5030f.isAxiosError(v_5e9bfe) ? v_5e9bfe.response?.status : undefined;
    const v_badeaf = v_5e9bfe instanceof Error ? v_5e9bfe.message.slice(0, 200) : undefined;
    const v_931bf0 = {
      reason: v_58ca36,
      http_status: v_d308b5,
      error_message: v_badeaf,
      platform: v_326be8.OS,
    };
    if (__DEV__) {
      console.warn('[authErrorHandler] 인증 에러 감지 → 로그아웃', v_931bf0);
    }
    v_f42779('auth_error_logout', v_931bf0, {
      level: 'warn',
      message: `auth_error:${v_58ca36}`,
    });

    v_4b3c9f().catch(() => {});
    try {
      const v_a8cd21 =
        v_b5030f.isAxiosError(v_5e9bfe) &&
        String((v_5e9bfe.response?.data as { message?: string })?.message ?? '').includes('signature verification')
          ? '토큰이 만료되었거나 환경이 바뀌었습니다. 다시 로그인해 주세요.'
          : '로그인이 필요합니다.';
      v_889fad(
        '알림',
        v_a8cd21,
        [
          {
            text: '확인',
            onPress: () => {
              v_2d4718.runAfterInteractions(() => {
                setTimeout(v_2a53b4, 150);
              });
            },
          },
        ],
        { cancelable: false }
      );
      return true;
    } catch (v_f58bb7) {
      console.error('[authErrorHandler] 네비게이션 에러:', v_f58bb7);
      return false;
    }
  }
  return false;
}
