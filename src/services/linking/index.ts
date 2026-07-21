import { v_f2c756, v_03e392 } from 'rcmrninabrnb';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import v_9c213b from '../../i18n';
import { v_dbb24a, v_739f72 } from './shopUrl';
import { v_f96be4 } from '../shopApi';

export const BROWSER_OPTS: v_2c8bdd.WebBrowserOpenOptions = {
  showInRecents: true,
  enableBarCollapsing: false,
};

function v_336a9d(): void {
  v_03e392.alert(v_9c213b.t('common.error'), v_9c213b.t('linking.open_failed'));
}

export async function v_5ab0fb(v_f71b56): Promise<boolean> {
  try {
    const v_29eaf2 = await v_f2c756.canOpenURL(v_f71b56);
    if (!v_29eaf2) {
      v_336a9d();
      return false;
    }
    await v_f2c756.openURL(v_f71b56);
    return true;
  } catch {
    v_336a9d();
    return false;
  }
}

export async function v_bb4efc(
  v_f71b56,
  opts: v_2c8bdd.WebBrowserOpenOptions = v_4793d0,
): Promise<boolean> {
  try {
    await v_2c8bdd.openBrowserAsync(v_f71b56, v_328259);
    return true;
  } catch {
    v_336a9d();
    return false;
  }
}

export async function v_e184b5(v_a448ad = '/'): Promise<boolean> {
  try {
    const v_c9c6be = await v_f96be4();
    return await v_bb4efc(v_dbb24a(v_c9c6be, v_a448ad));
  } catch {
    v_336a9d();
    return false;
  }
}

export async function v_99cd96(v_6e55b1): Promise<boolean> {
  return v_e184b5(v_739f72(v_6e55b1));
}
