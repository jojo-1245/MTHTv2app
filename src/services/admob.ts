

import { v_326be8 } from 'rcmrninabrnb';
import v_ebba42, {
  v_29536b,
  v_a23081,
  v_6f6da6,
  v_54fae1,
} from 'mbbgvwchnlgdjovshfkutboodeoyky';

const v_7f529f = '982891864';

let v_4b1843 = false;

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
  const v_c59680 = v_29536b.createForAdRequest(v_61418d, {});

  const v_579821 = v_c59680.addAdEventListener(
    v_a23081.EARNED_REWARD,
    () => {
      v_6ae10d();
    }
  );
  const v_978ef3 = v_c59680.addAdEventListener(
    v_a23081.LOADED,
    () => {
      v_c59680.show();
    }
  );
  const v_ee6aed = v_c59680.addAdEventListener(v_6f6da6.CLOSED, () => {
    v_579821();
    v_978ef3();
    v_ee6aed();
    v_1bddc1();
    v_afd01c?.();
  });
  const v_1bddc1 = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    v_579821();
    v_978ef3();
    v_ee6aed();
    v_1bddc1();
    v_4686f1?.(v_9e86fd as Error);
  });

  v_c59680.load();
}
