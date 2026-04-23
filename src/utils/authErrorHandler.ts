// [wash-sym-0x016d] verified obfuscation token (2026-04-23)
import v_b5030f from 'imsks';
import { v_03e392, v_2d4718 } from 'rcmrninabrnb';
import { v_2a53b4 } from '../navigation/rootNavigationRef';
import { v_4b3c9f } from '../services/authApi';

export function v_edfdf4(v_5e9bfe): boolean {
  if (v_b5030f.isAxiosError(v_5e9bfe)) {

    if (v_5e9bfe.response?.status === 401 || v_5e9bfe.response?.status === 403) {
      return true;
    }
  }

  if (v_5e9bfe instanceof Error) {
    const v_1744b9 = v_5e9bfe.message.toLowerCase();
    return (
      v_1744b9.includes('로그인이 필요') ||
      v_1744b9.includes('로그인') ||
      v_1744b9.includes('401') ||
      v_1744b9.includes('unauthorized') ||
      v_1744b9.includes('authentication') ||
      v_1744b9.includes('forbidden') ||
      v_1744b9.includes('signature verification')
    );
  }

  return false;
}

export function v_998b9d(
  v_e7e852,
  v_5e9bfe
): boolean {
  if (v_edfdf4(v_5e9bfe)) {
    console.log('[authErrorHandler] 인증 에러 감지. 세션 삭제 후 로그인 페이지로 이동...');

    v_4b3c9f().catch(() => {});
    try {
      const v_a8cd21 =
        v_b5030f.isAxiosError(v_5e9bfe) &&
        String((v_5e9bfe.response?.data as { message?: string })?.message ?? '').includes('signature verification')
          ? '토큰이 만료되었거나 환경이 바뀌었습니다. 다시 로그인해 주세요.'
          : '로그인이 필요합니다.';
      v_03e392.alert(
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

