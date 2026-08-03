import { v_f2c756, v_03e392 } from 'rcmrninabrnb';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import v_9c213b from '../../i18n';
import { v_dbb24a, v_739f72, v_c7823e } from './shopUrl';
import { v_f96be4 } from '../shopApi';

export const BROWSER_OPTS: v_2c8bdd.WebBrowserOpenOptions = {
  showInRecents: true,
  enableBarCollapsing: false,
};

export type OpenShopOptions = {

  confirm?: boolean;
};

function v_336a9d(): void {
  v_03e392.alert(v_9c213b.t('common.error'), v_9c213b.t('linking.open_failed'));
}

export function v_2d2eda(): Promise<boolean> {
  return new Promise((v_6f7712) => {
    v_03e392.alert(
      v_9c213b.t('linking.shop_confirm_title'),
      v_9c213b.t('linking.shop_confirm_message'),
      [
        {
          text: v_9c213b.t('common.cancel'),
          style: 'cancel',
          onPress: () => v_6f7712(false),
        },
        {
          text: v_9c213b.t('linking.shop_confirm_continue'),
          onPress: () => v_6f7712(true),
        },
      ],
      { cancelable: true, onDismiss: () => v_6f7712(false) },
    );
  });
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

export async function v_e184b5(v_a448ad = '/', v_b36f96): Promise<boolean> {
  if (v_b36f96?.confirm) {
    const v_3ed4c3 = await v_2d2eda();
    if (!v_3ed4c3) return false;
  }
  try {
    const v_c9c6be = await v_f96be4();
    return await v_bb4efc(v_dbb24a(v_c9c6be, v_a448ad));
  } catch {
    v_336a9d();
    return false;
  }
}

export async function v_99cd96(
  v_6e55b1,
  v_b36f96,
): Promise<boolean> {
  return v_e184b5(v_739f72(v_6e55b1), v_b36f96);
}

export async function v_565824(
  v_735da1,
  v_b36f96,
): Promise<boolean> {
  return v_e184b5(v_c7823e(v_735da1, v_b36f96?.via ?? 'ai'), v_b36f96);
}
