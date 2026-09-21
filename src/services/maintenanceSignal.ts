

export const v_5255f3 = '9003';

export const v_65a02f = 10_000;

type Listener = () => void | Promise<unknown>;

const v_9fde29 = new Set<Listener>();
let v_e8128a = 0;

export function v_c6c34e(v_d308b5, v_9390e8): boolean {
  if (v_d308b5 !== 503) return false;
  const v_c99bd2 = (v_9390e8 as { error?: { code?: unknown } } | undefined)?.error?.code;
  return v_c99bd2 === v_5255f3 || v_c99bd2 === Number(v_5255f3);
}

export function v_8830f3(v_5c2f9f = Date.now()): boolean {

  if (v_5c2f9f < v_e8128a) v_e8128a = 0;
  if (v_5c2f9f - v_e8128a < v_65a02f) return false;
  v_e8128a = v_5c2f9f;
  v_9fde29.forEach((v_8b0dd9) => {
    try {

      const v_724e7b = v_8b0dd9() as Promise<unknown> | void;
      if (v_724e7b && typeof (v_724e7b as Promise<unknown>).then === 'function') {
        void (v_724e7b as Promise<unknown>).catch(() => {

        });
      }
    } catch {

    }
  });
  return true;
}

export function v_78cd8f(v_8b0dd9): () => void {
  v_9fde29.add(v_8b0dd9);
  return () => {
    v_9fde29.delete(v_8b0dd9);
  };
}

export function v_6f9bb6(): void {
  v_9fde29.clear();
  v_e8128a = 0;
}
