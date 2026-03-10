

import { v_c4deb2, v_de06a3 } from 'bapkr';
import { v_6b5698, v_326be8 } from 'rcmrninabrnb';
import v_02a5ed from 'svehvzqlbgtssigttkidbnoplikykbnc';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_624bd2 } from '../constants';
import { v_cec605 } from '../services/pushApi';

const v_86ffc4 = 'metahint/pushTokenLastRegistered';
const v_3b32f8 = 6 * 60 * 60 * 1000; 

async function v_8d45bc(): Promise<string | null> {
  try {

    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (v_0e3b5e) {
      const v_660822 = JSON.parse(v_0e3b5e);
      const v_21cc31 = v_660822?.accessToken ?? v_660822?.access_token ?? v_660822?.token ?? null;
      if (v_21cc31) {
        console.log('[PushToken] accessToken 출처: memberInfo JSON');
        return v_21cc31;
      }
    }

    const v_2a0d51 = await v_e84827.getItem(v_624bd2.authToken);
    if (v_2a0d51) {
      console.log('[PushToken] accessToken 출처: authToken 직접 키');
      return v_2a0d51;
    }
    console.log('[PushToken] memberInfo:', v_0e3b5e ? '있음(토큰필드없음)' : '없음', '/ authToken:', v_2a0d51 ? '있음' : '없음');
    return null;
  } catch (v_9e86fd) {
    console.warn('[PushToken] getAccessToken 오류:', v_9e86fd);
    return null;
  }
}

async function v_839346(): Promise<boolean> {
  try {
    const v_fd0a01 = await v_e84827.getItem(v_86ffc4);
    if (!v_fd0a01) return false;
    return Date.now() - parseInt(v_fd0a01, 10) < v_3b32f8;
  } catch {
    return false;
  }
}

async function v_0fc822(v_731d3f = false): Promise<void> {
  console.log('[PushToken] ▶ doRegisterToken 시작 (force=' + v_731d3f + ')');
  try {
    const v_2ca7e0 = await v_8d45bc();
    if (!v_2ca7e0) {
      console.log('[PushToken] ✗ accessToken 없음 — 로그인 상태 아님, 종료');
      return;
    }
    console.log('[PushToken] ✓ accessToken 확인됨');

    if (!v_731d3f) {
      const v_3c48ad = await v_839346();
      if (v_3c48ad) {
        console.log('[PushToken] ⏭ 6시간 이내 등록 이력 있음 — 스킵');
        return;
      }
    }

    console.log('[PushToken] 알림 권한 요청 중...');
    const v_4dec7e = await v_02a5ed().requestPermission();
    console.log('[PushToken] 권한 상태:', v_4dec7e);
    const v_d20c84 =
      v_4dec7e === v_02a5ed.AuthorizationStatus.AUTHORIZED ||
      v_4dec7e === v_02a5ed.AuthorizationStatus.PROVISIONAL;
    if (!v_d20c84) {
      console.log('[PushToken] ✗ 알림 권한 거부됨 (status=' + v_4dec7e + '), 종료');
      return;
    }
    console.log('[PushToken] ✓ 알림 권한 허용됨');

    console.log('[PushToken] FCM 토큰 발급 중...');
    const v_21cc31 = await v_02a5ed().getToken();
    if (!v_21cc31) {
      console.log('[PushToken] ✗ FCM 토큰 발급 실패 (null), 종료');
      return;
    }
    console.log('[PushToken] ✓ FCM 토큰 발급됨:', v_21cc31.slice(0, 20) + '...');

    console.log('[PushToken] 서버에 토큰 등록 중... platform=' + v_326be8.OS);
    await v_cec605(v_2ca7e0, {
      token: v_21cc31,
      platform: v_326be8.OS as 'android' | 'ios',
    });
    await v_e84827.setItem(v_86ffc4, String(Date.now()));
    console.log('[PushToken] ✅ 서버 등록 완료');
  } catch (v_9e86fd) {
    console.warn('[PushToken] ❌ 토큰 등록 실패:', v_9e86fd);
  }
}

export function v_5ad1fd() {
  const v_64c2eb = v_de06a3((v_731d3f = false) => {
    v_0fc822(v_731d3f).catch(() => null);
  }, []);

  v_c4deb2(() => {
    console.log('[PushToken] 훅 마운트 — 초기 토큰 등록 시도');

    v_0fc822().catch(() => null);

    const v_269481 = v_6b5698.addEventListener('change', (v_b6e533) => {
      console.log('[PushToken] AppState 변경:', v_b6e533);
      if (v_b6e533 === 'active') {
        console.log('[PushToken] 포그라운드 복귀 — 토큰 갱신 시도');
        v_0fc822().catch(() => null);
      }
    });

    const v_54114c = v_02a5ed().onTokenRefresh(async (v_4094c3) => {
      console.log('[PushToken] onTokenRefresh — 새 토큰 감지:', v_4094c3.slice(0, 20) + '...');
      try {
        const v_2ca7e0 = await v_8d45bc();
        if (!v_2ca7e0) {
          console.log('[PushToken] onTokenRefresh — accessToken 없음, 스킵');
          return;
        }
        await v_cec605(v_2ca7e0, {
          token: v_4094c3,
          platform: v_326be8.OS as 'android' | 'ios',
        });
        await v_e84827.setItem(v_86ffc4, String(Date.now()));
        console.log('[PushToken] ✅ onTokenRefresh 서버 등록 완료');
      } catch (v_9e86fd) {
        console.warn('[PushToken] ❌ onTokenRefresh 등록 실패:', v_9e86fd);
      }
    });

    return () => {
      v_269481.remove();
      v_54114c();
    };
  }, []);

  return { registerToken: v_64c2eb };
}
