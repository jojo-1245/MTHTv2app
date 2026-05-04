

import { v_326be8 } from "rcmrninabrnb";
import v_ebba42, {
  v_29536b,
  v_a23081,
  v_6f6da6,
  v_54fae1,
} from "mbbgvwchnlgdjovshfkutboodeoyky";

const v_7f529f = "982891864";

let v_4b1843 = false;

let readyRewarded: v_29536b | null = null;
let v_5495c4 = false;

function v_2e00e4(): string {
  return __DEV__ ? v_54fae1.REWARDED : v_7f529f;
}

function v_002b9d(): v_29536b {
  return v_29536b.createForAdRequest(v_2e00e4(), {});
}

export function v_c9d613(): void {
  if (v_326be8.OS !== "android" || !v_4b1843) {
    return;
  }
  if (v_282148 != null || v_5495c4) {
    return;
  }
  v_d8e0a3();
}

function v_d8e0a3(): void {
  v_5495c4 = true;
  const v_c59680 = v_002b9d();

  let v_978ef3;
  let v_9e718a;

  const v_a4c62d = () => {
    v_978ef3?.();
    v_9e718a?.();
    v_978ef3 = undefined;
    v_9e718a = undefined;
  };

  v_978ef3 = v_c59680.addAdEventListener(v_a23081.LOADED, () => {
    v_a4c62d();
    v_282148 = v_c59680;
    v_5495c4 = false;
  });

  v_9e718a = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    v_a4c62d();
    v_5495c4 = false;
    console.warn("[AdMob] 선로딩 실패:", {
      error: (v_9e86fd as any)?.message ?? String(v_9e86fd),
      code: (v_9e86fd as any)?.code,
      adUnitId: v_2e00e4(),
    });
  });

  v_c59680.load();
}

export async function v_b357c3(): Promise<void> {
  if (v_326be8.OS !== "android") {
    return;
  }
  if (v_4b1843) {
    return;
  }
  try {
    await v_ebba42().initialize();
    v_4b1843 = true;
    if (__DEV__) {
      console.log("[AdMob] 초기화 완료");
    }
    v_c9d613();
  } catch (v_9e86fd) {
    console.warn("[AdMob] 초기화 실패:", v_9e86fd);
  }
}

export function v_8e174f(
  v_6ae10d,
  v_afd01c,
  v_4686f1,
): void {
  if (v_326be8.OS !== "android") {
    v_6ae10d();
    return;
  }

  const v_f7f38f = v_282148 != null;
  const v_c59680 = v_f7f38f ? v_282148! : v_002b9d();
  if (v_f7f38f) {
    v_282148 = null;
  }

  const v_579821 = v_c59680.addAdEventListener(
    v_a23081.EARNED_REWARD,
    () => {
      v_6ae10d();
    },
  );
  const v_978ef3 = !v_f7f38f
    ? v_c59680.addAdEventListener(v_a23081.LOADED, () => {
        v_c59680.show();
      })
    : undefined;
  const v_ee6aed = v_c59680.addAdEventListener(v_6f6da6.CLOSED, () => {
    v_579821();
    v_978ef3?.();
    v_ee6aed();
    v_1bddc1();
    v_afd01c?.();
    v_c9d613();
  });
  const v_1bddc1 = v_c59680.addAdEventListener(v_6f6da6.ERROR, (v_9e86fd) => {
    v_579821();
    v_978ef3?.();
    v_ee6aed();
    v_1bddc1();
    console.warn("[AdMob] 광고 로드/재생 실패:", {
      error: (v_9e86fd as any)?.message ?? String(v_9e86fd),
      code: (v_9e86fd as any)?.code,
      adUnitId: v_2e00e4(),
    });
    v_4686f1?.(v_9e86fd as unknown as Error);
    v_c9d613();
  });

  if (v_f7f38f) {
    v_c59680.show();
  } else {
    v_c59680.load();
  }
}
