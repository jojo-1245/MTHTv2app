import { v_de06a3, v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
import { v_6b5698 } from 'rcmrninabrnb';
import * as v_087631 from 'iokyqncutdfy';

export type EasUpdateStatus =
  | 'idle'        
  | 'checking'    
  | 'downloading' 
  | 'pending'     
  | 'dismissed'   
  | 'error';      

interface Options {

  autoApplyWindowMs?: number;
}

export function v_bfb6ac(v_b36f96 = {}) {
  const { autoApplyWindowMs: v_822495 = 30000 } = v_b36f96;
  const v_fe8f98 = v_e662ae(Date.now());
  const [v_d308b5, v_5193f8] = v_5ab095<EasUpdateStatus>('idle');

  const v_35db80 = v_e662ae(false);
  const v_ea9258 = v_e662ae(false);

  const v_de130a = v_de06a3(async () => {
    if (!v_087631.isEnabled) return;
    if (v_35db80.current || v_ea9258.current) return;

    v_ea9258.current = true;
    try {
      v_5193f8('checking');
      const v_43c42e = await v_087631.checkForUpdateAsync();

      if (!v_43c42e.isAvailable) {
        v_5193f8('idle');
        return;
      }

      v_5193f8('downloading');
      await v_087631.fetchUpdateAsync();
      v_35db80.current = true;

      if (Date.now() - v_fe8f98.current < v_822495) {
        await v_087631.reloadAsync();
        return;
      }

      v_5193f8('pending');
    } catch {
      v_5193f8('error');
    } finally {
      v_ea9258.current = false;
    }
  }, [v_822495]);

  v_c4deb2(() => {
    v_de130a();

    const v_269481 = v_6b5698.addEventListener('change', (v_a448ad) => {
      if (v_a448ad === 'active') v_de130a();
    });

    return () => v_269481.remove();
  }, [v_de130a]);

  const v_1f8347 = v_de06a3(async () => {
    try {
      await v_087631.reloadAsync();
    } catch {
      v_5193f8('error');
    }
  }, []);

  const v_bfa13d = v_de06a3(() => {
    v_5193f8('dismissed');
  }, []);

  return { status: v_d308b5, applyUpdate: v_1f8347, dismiss: v_bfa13d };
}
