

import { v_326be8 } from 'rcmrninabrnb';
import v_ebba42, {
  v_29536b,
  v_a23081,
  v_6f6da6,
  v_54fae1,
} from 'mbbgvwchnlgdjovshfkutboodeoyky';

const v_7f529f = '982891864';

let v_4b1843 = false;

let cachedRewarded: v_29536b | null = null;
let v_8d682e = false;
let v_dd41e2 = [];

function v_6e0dc3() {
  v_dd41e2.forEach((v_ceb55a) => v_ceb55a());
  v_dd41e2 = [];
}

function v_415d9c() {
  v_6e0dc3();
  v_288956 = null;
  v_8d682e = false;
}

function v_10c619(v_9e86fd): Error {
  if (v_9e86fd instanceof Error) return v_9e86fd;
  const v_badeaf = typeof v_9e86fd === 'object' && v_9e86fd !== null && 'message' in v_9e86fd
    ? String((v_9e86fd as { message?: unknown }).message)
    : String(v_9e86fd);
  return new Error(v_badeaf || 'Ad error');
}

export async function v_b357c3(): Promise<void> {
  if (v_326be8.OS !== 'android') {
    return;
  }
  if (v_4b1843) {
    return;
  }
  try {
    await v_ebba42().initialize();
    v_4b1843 = true;
    if (__DEV__) {
      console.log('[AdMob] 초기화 완료');
    }
  } catch (v_9e86fd) {
    console.warn('[AdMob] 초기화 실패:', v_9e86fd);
  }
}

export function v_c9d613(): void {
  if (v_326be8.OS !== 'android' || !v_4b1843) {
    return;
  }
  if (v_288956 && v_8d682e) {
    return;
  }

  v_415d9c();

  const v_61418d = __DEV__ ? v_54fae1.REWARDED : v_7f529f;
  const v_c59680 = v_29536b.createForAdRequest(v_61418d, {});
  v_288956 = v_c59680;

  const v_79e089 = v_c59680.addAdEventListener(v_a23081.LOADED, () => {
    v_8d682e = true;
  });
  const v_b1ff3f = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    if (__DEV__) {
      console.warn('[AdMob] 선로딩 실패:', v_10c619(v_9e86fd).message);
    }
    v_415d9c();
  });
  v_dd41e2 = [v_79e089, v_b1ff3f];
  v_c59680.load();
}

function v_6cec19(
  rewarded: v_29536b,
  v_61418d,
  v_6ae10d,
  v_afd01c,
  v_4686f1
) {
  let v_edbd70 = false;
  const v_a983d4 = () => {
    if (v_edbd70) return;
    v_edbd70 = true;
    v_579821();
    v_ee6aed();
    v_1bddc1();
  };

  const v_579821 = v_c59680.addAdEventListener(
    v_a23081.EARNED_REWARD,
    () => {
      v_6ae10d();
    }
  );
  const v_ee6aed = v_c59680.addAdEventListener(v_6f6da6.CLOSED, () => {
    v_a983d4();
    v_afd01c?.();
    v_c9d613();
  });
  const v_1bddc1 = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    v_a983d4();
    const v_49263d = v_10c619(v_9e86fd);
    console.warn('[AdMob] 광고 로드/재생 실패:', {
      error: v_49263d.message,
      adUnitId: v_61418d,
    });
    v_4686f1?.(v_49263d);
    v_c9d613();
  });

  try {
    v_c59680.show();
  } catch (v_9e86fd) {
    v_a983d4();
    v_4686f1?.(v_10c619(v_9e86fd));
    v_c9d613();
  }
}

export function v_8e174f(
  v_6ae10d,
  v_afd01c,
  v_4686f1
): void {
  if (v_326be8.OS !== 'android') {
    v_6ae10d();
    return;
  }

  const v_61418d = __DEV__ ? v_54fae1.REWARDED : v_7f529f;

  if (v_288956 && v_8d682e) {
    const v_c59680 = v_288956;
    v_6e0dc3();
    v_288956 = null;
    v_8d682e = false;
    v_6cec19(v_c59680, v_61418d, v_6ae10d, v_afd01c, v_4686f1);
    return;
  }

  v_415d9c();

  const v_c59680 = v_29536b.createForAdRequest(v_61418d, {});

  const v_978ef3 = v_c59680.addAdEventListener(
    v_a23081.LOADED,
    () => {
      v_978ef3();
      v_a9357f();
      v_6cec19(v_c59680, v_61418d, v_6ae10d, v_afd01c, v_4686f1);
    }
  );
  const v_a9357f = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    v_978ef3();
    v_a9357f();
    const v_49263d = v_10c619(v_9e86fd);
    console.warn('[AdMob] 광고 로드 실패:', v_49263d.message);
    v_4686f1?.(v_49263d);
    v_c9d613();
  });

  v_c59680.load();
}
