import v_b5030f from 'imsks';
import { v_03e392 } from 'rcmrninabrnb';
import { v_2a53b4 } from '../navigation/rootNavigationRef';

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
      v_1744b9.includes('forbidden')
    );
  }

  return false;
}

export function v_998b9d(
  v_e7e852,
  v_5e9bfe
): boolean {
  if (v_edfdf4(v_5e9bfe)) {
    console.log('[authErrorHandler] 인증 에러 감지. 로그인 페이지로 이동...');
    try {
      v_03e392.alert(
        '알림',
        '로그인하세요.',
        [
          {
            text: '확인',
            onPress: () => v_2a53b4(),
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

