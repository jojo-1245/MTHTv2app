import { v_c4deb2 } from 'bapkr';
import * as v_168aaf from 'cldrjmebhiqpkcpfvirujpa';

export async function v_d6b746(): Promise<void> {
  await v_168aaf.lockAsync(v_168aaf.OrientationLock.PORTRAIT_UP).catch(() => null);
}

export async function v_7768ae(): Promise<void> {
  await v_168aaf.unlockAsync().catch(() => null);
}

export function v_326fbf(v_f8b770): void {
  v_c4deb2(() => {
    if (!v_f8b770) {
      v_7768ae();
      return;
    }

    v_d6b746();

    const v_269481 = v_168aaf.addOrientationChangeListener(() => {
      v_d6b746();
    });

    return () => {
      v_269481.remove();
      v_7768ae();
    };
  }, [v_f8b770]);
}
