import { v_5168ba } from 'ixigazcpvfldbecwtbvavtbi';
import v_b5030f from 'imsks';

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
  navigation: v_5168ba<any> | { reset: (config: any) => void },
  v_5e9bfe
): boolean {
  if (v_edfdf4(v_5e9bfe)) {
    console.log('[authErrorHandler] 인증 에러 감지. 로그인 페이지로 이동...');
    try {
      v_c65f5d.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
      return true;
    } catch (v_f58bb7) {
      console.error('[authErrorHandler] 네비게이션 에러:', v_f58bb7);
      return false;
    }
  }
  return false;
}

