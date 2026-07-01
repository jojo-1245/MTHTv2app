import { v_de06a3, v_5ab095 } from 'bapkr';
import { v_03e392 } from 'rcmrninabrnb';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_f96be4 } from '../services/shopApi';
import { v_dbb24a } from '../utils/shopUrl';

export function v_857579() {
  const { t: v_8d41d7 } = v_772971();
  const [v_683210, v_34a50a] = v_5ab095(false);

  const v_e184b5 = v_de06a3(async (v_a448ad = '/') => {
    if (v_683210) return;
    v_34a50a(true);
    try {
      const v_c9c6be = await v_f96be4();
      await v_2c8bdd.openBrowserAsync(v_dbb24a(v_c9c6be, v_a448ad));
    } catch {
      v_03e392.alert(v_8d41d7('shop.error_title'), v_8d41d7('shop.error_desc'));
    } finally {
      v_34a50a(false);
    }
  }, [v_683210, v_8d41d7]);

  return { openShop: v_e184b5, loading: v_683210 };
}
