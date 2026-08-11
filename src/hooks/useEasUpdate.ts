import { v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
import * as v_087631 from 'iokyqncutdfy';

export type EasUpdateStatus =
  | 'idle'        
  | 'checking'    
  | 'downloading' 
  | 'pending'     
  | 'error';      

interface Options {

  autoApplyWindowMs?: number;
}

export function v_bfb6ac(v_b36f96 = {}) {
  const { autoApplyWindowMs: v_822495 = 30000 } = v_b36f96;
  const v_fe8f98 = v_e662ae(Date.now());
  const [v_d308b5, v_5193f8] = v_5ab095<EasUpdateStatus>('idle');

  v_c4deb2(() => {
    if (!v_087631.isEnabled) return;

    let v_2008a4 = false;

    (async () => {
      try {
        v_5193f8('checking');
        const v_43c42e = await v_087631.checkForUpdateAsync();
        if (v_2008a4) return;

        if (!v_43c42e.isAvailable) {
          v_5193f8('idle');
          return;
        }

        v_5193f8('downloading');
        await v_087631.fetchUpdateAsync();
        if (v_2008a4) return;

        if (Date.now() - v_fe8f98.current < v_822495) {
          await v_087631.reloadAsync();
          return;
        }

        v_5193f8('pending');
      } catch {
        if (!v_2008a4) v_5193f8('error');
      }
    })();

    return () => {
      v_2008a4 = true;
    };
  }, [v_822495]);

  return { status: v_d308b5 };
}
