import { v_c4deb2, v_e662ae, v_5ab095, v_de06a3 } from 'bapkr';
import { v_6b5698, v_c3551b } from 'rcmrninabrnb';
import { v_e72be9, v_d8b303 } from '../services/keepaliveService';
import { v_78cd8f } from '../services/maintenanceSignal';

const v_a8e3e1 = 15_000;

export const v_f444d8 = 3;

export function v_bfe92f(v_d20c84 = true) {
  const [v_d48273, v_404431] = v_5ab095<v_d8b303 | null>(null);
  const [v_441eb2, v_2992df] = v_5ab095(false);
  const v_3ac63b = v_e662ae<ReturnType<typeof setInterval> | null>(null);
  const v_94a194 = v_e662ae(v_6b5698.currentState);

  const v_9468fd = v_e662ae<Promise<void> | null>(null);

  const v_d340ab = v_e662ae(false);

  const v_3ee6e7 = v_e662ae(0);

  const v_b911c1 = v_e662ae<(() => Promise<unknown>) | null>(null);

  const v_4ae0bf = v_de06a3(async () => {
    if (!v_d20c84) return;
    if (v_9468fd.current) {

      v_d340ab.current = true;
      return v_9468fd.current;
    }

    const v_ccfa2c = async () => {
      const v_43c42e = await v_e72be9();

      if (!v_43c42e) return;

      v_404431(v_43c42e.notice);

      if (typeof v_43c42e.maintenanceMode === 'boolean') {
        v_3ee6e7.current = 0;
        v_2992df(v_43c42e.maintenanceMode);
        return;
      }

      v_3ee6e7.current += 1;
      if (v_3ee6e7.current >= v_f444d8) {
        v_2992df(false);
      }
    };

    const v_d9b231 = (async () => {
      do {
        v_d340ab.current = false;
        await v_ccfa2c();
      } while (v_d340ab.current);
    })().finally(() => {
      v_9468fd.current = null;

      if (v_d340ab.current) {
        v_d340ab.current = false;
        void v_b911c1.current?.();
      }
    });

    v_9468fd.current = v_d9b231;
    return v_d9b231;
  }, [v_d20c84]);

  v_b911c1.current = v_4ae0bf;

  v_c4deb2(() => {
    if (!v_d20c84) {
      if (v_3ac63b.current) clearInterval(v_3ac63b.current);
      return;
    }

    const v_c76537 = setTimeout(v_4ae0bf, 3_000);

    v_3ac63b.current = setInterval(v_4ae0bf, v_a8e3e1);

    const v_269481 = v_6b5698.addEventListener('change', (nextAppState: v_c3551b) => {
      if (
        v_94a194.current.match(/inactive|background/) &&
        v_3b10d8 === 'active'
      ) {
        v_4ae0bf();
      }
      v_94a194.current = v_3b10d8;
    });

    const v_7a1df6 = v_78cd8f(() => {
      v_4ae0bf();
    });

    return () => {
      clearTimeout(v_c76537);
      if (v_3ac63b.current) clearInterval(v_3ac63b.current);
      v_269481.remove();
      v_7a1df6();
    };
  }, [v_d20c84, v_4ae0bf]);

  const v_2852e3 = () => v_404431(null);

  return { notice: v_d48273, dismissNotice: v_2852e3, maintenanceMode: v_441eb2, recheck: v_4ae0bf };
}
