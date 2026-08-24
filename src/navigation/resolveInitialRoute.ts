import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_624bd2 } from '../constants';
import { v_4d6220 } from './postLoginNavigation';

export type BootstrapRoute = 'Home' | 'Login' | 'MetaHome' | 'PharmacistHome';

function v_563acb(v_21cc31): boolean {
  try {
    const v_931bf0 = JSON.parse(atob(v_21cc31.split('.')[1]));
    return Date.now() >= v_931bf0.exp * 1000;
  } catch {
    return true;
  }
}

export async function v_6c5337(): Promise<BootstrapRoute> {
  try {
    const v_042a8b = await v_e84827.getItem(v_624bd2.isLoggedIn);
    const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
    const v_dfaee3 = await v_e84827.getItem(v_624bd2.refreshToken);

    const v_cfcfaf =
      v_042a8b === 'true' &&
      !!v_21cc31 &&
      !v_563acb(v_21cc31);

    const v_bfc315 =
      v_042a8b === 'true' &&
      !!v_21cc31 &&
      v_563acb(v_21cc31) &&
      !!v_dfaee3 &&
      !v_563acb(v_dfaee3);

    if (v_cfcfaf || v_bfc315) {
      const v_a3614c = await v_4d6220();
      console.log('[Bootstrap] 로그인 상태 유지됨.', v_a3614c, '으로 시작');
      return v_a3614c;
    }

    if (v_042a8b === 'true') {
      await v_e84827.multiRemove([
        v_624bd2.authToken,
        v_624bd2.refreshToken,
        v_624bd2.memberInfo,
        v_624bd2.isLoggedIn,
      ]);
      console.log('[Bootstrap] 토큰 만료. 세션 정리 후 Login으로 시작');
      return 'Login';
    }

    console.log('[Bootstrap] 로그인 상태 없음. Home으로 시작');
    return 'Home';
  } catch (v_5e9bfe) {
    console.error('[Bootstrap] 시작 화면 확인 실패:', v_5e9bfe);
    return 'Home';
  }
}

export function v_c31d18(v_1833e7): v_1833e7 is BootstrapRoute {
  return v_1833e7 === 'Home' || v_1833e7 === 'Login' || v_1833e7 === 'MetaHome' || v_1833e7 === 'PharmacistHome';
}
