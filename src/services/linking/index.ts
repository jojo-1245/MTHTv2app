import { v_f2c756, v_326be8 } from 'rcmrninabrnb';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import v_9c213b from '../../i18n';
import { v_889fad } from '../../components/AlertHost';
import {
  v_dbb24a,
  v_739f72,
  v_c7823e,
  v_bdc222,
  type v_196d09,
} from './shopUrl';
import { v_f96be4 } from '../shopApi';
import { v_f42779 } from '../clientLog';

export const BROWSER_OPTS: v_2c8bdd.WebBrowserOpenOptions = {
  showInRecents: true,
  enableBarCollapsing: false,
};

export type OpenShopOptions = {

  confirm?: boolean;
};

function v_336a9d(): void {
  v_889fad(v_9c213b.t('common.error'), v_9c213b.t('linking.open_failed'));
}

function v_c538c0(
  v_bd1444,
  v_5e9bfe,
  v_f91f33,
): void {
  const v_35a1f5 = v_5e9bfe as {
    message?: string;
    name?: string;
    response?: { status?: number; data?: { error?: { message?: string }; message?: string } };
  };
  const v_d308b5 = v_35a1f5?.response?.status;
  const v_94c4e5 =
    v_35a1f5?.response?.data?.error?.message ?? v_35a1f5?.response?.data?.message;
  const v_931bf0 = {
    platform: v_326be8.OS,
    os_version: String(v_326be8.Version),
    error_name: v_35a1f5?.name,
    error_message: v_35a1f5?.message ? String(v_35a1f5.message).slice(0, 200) : undefined,
    http_status: v_d308b5,
    server_message: v_94c4e5 ? String(v_94c4e5).slice(0, 200) : undefined,
    ...v_f91f33,
  };
  if (__DEV__) {
    console.warn('[linking]', v_bd1444, v_931bf0);
  }
  v_f42779(v_bd1444, v_931bf0, { level: 'error', message: v_bd1444 });
}

async function v_824454(): Promise<void> {
  try {
    await v_2c8bdd.dismissBrowser();
  } catch {

  }
  try {
    await v_2c8bdd.coolDownAsync();
  } catch {

  }
}

export function v_2d2eda(): Promise<boolean> {
  return new Promise((v_6f7712) => {
    v_889fad(
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
      v_c538c0('linking_external_cannot_open', new Error('canOpenURL=false'), {
        url_host: v_4ba786(v_f71b56),
      });
      v_336a9d();
      return false;
    }
    await v_f2c756.openURL(v_f71b56);
    return true;
  } catch (v_5e9bfe) {
    v_c538c0('linking_external_open_failed', v_5e9bfe, { url_host: v_4ba786(v_f71b56) });
    v_336a9d();
    return false;
  }
}

function v_4ba786(v_f71b56): string | undefined {
  try {
    return new URL(v_f71b56).host;
  } catch {
    return undefined;
  }
}

export async function v_bb4efc(
  v_f71b56,
  opts: v_2c8bdd.WebBrowserOpenOptions = v_4793d0,
): Promise<boolean> {

  await v_824454();
  try {
    await v_2c8bdd.openBrowserAsync(v_f71b56, v_328259);
    await v_824454();
    return true;
  } catch (v_5e9bfe) {
    v_c538c0('linking_inapp_open_failed', v_5e9bfe, { url_host: v_4ba786(v_f71b56) });
    await v_824454();
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
  } catch (v_5e9bfe) {
    v_c538c0('linking_open_shop_failed', v_5e9bfe, {
      next_path: typeof v_a448ad === 'string' ? v_a448ad.split('?')[0].slice(0, 80) : undefined,
    });
    await v_824454();
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

export async function v_9dcb16(v_6e55b1): Promise<boolean> {
  const v_f71b56 = v_bdc222(v_6e55b1);
  if (!v_f71b56) return false;
  return v_bb4efc(v_f71b56, {
    showInRecents: false,
    enableBarCollapsing: false,
    presentationStyle: v_2c8bdd.WebBrowserPresentationStyle.PAGE_SHEET,
    dismissButtonStyle: 'close',
  });
}

export async function v_565824(
  origin: v_196d09 | string[],
  v_b36f96,
): Promise<boolean> {
  const v_a448ad = Array.isArray(v_f17108)
    ? v_c7823e(v_f17108, 'ai')
    : v_c7823e(v_f17108);
  return v_e184b5(v_a448ad, v_b36f96);
}
