import { v_c4deb2, v_e662ae, v_5ab095, v_de06a3 } from 'bapkr';
import { v_6b5698, v_c3551b } from 'rcmrninabrnb';
import { v_2988f9, v_d8b303 } from '../services/keepaliveService';

const v_a8e3e1 = 15_000;

export function v_bfe92f(v_d20c84 = true) {
  const [v_d48273, v_404431] = v_5ab095<v_d8b303 | null>(null);
  const v_3ac63b = v_e662ae<ReturnType<typeof setInterval> | null>(null);
  const v_94a194 = v_e662ae(v_6b5698.currentState);

  const v_4ae0bf = v_de06a3(async () => {
    if (!v_d20c84) return;
    const v_43c42e = await v_2988f9();
    v_404431(v_43c42e);
  }, [v_d20c84]);

  v_c4deb2(() => {
    if (!v_d20c84) {
      if (v_3ac63b.current) clearInterval(v_3ac63b.current);
      return;
    }

    v_4ae0bf();

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

    return () => {
      if (v_3ac63b.current) clearInterval(v_3ac63b.current);
      v_269481.remove();
    };
  }, [v_d20c84, v_4ae0bf]);

  const v_2852e3 = () => v_404431(null);

  return { notice: v_d48273, dismissNotice: v_2852e3 };
}
