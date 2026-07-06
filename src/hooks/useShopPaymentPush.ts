

import { v_c4deb2 } from 'bapkr';
import { v_6b5698 } from 'rcmrninabrnb';
import { v_650cfa, v_7d9e77 } from 'ixigazcpvfldbecwtbvavtbi';
import v_02a5ed, { v_d97667 } from 'svehvzqlbgtssigttkidbnoplikykbnc';
import { v_60875a } from '../navigation/rootNavigationRef';
import { v_6f0675 } from '../utils/deepLinkHandler';
import { v_13fdf1, v_450510 } from '../utils/shopPaymentNavGate';

export type ShopPaymentNavParams = {
  orderId: string;
  krwAmount?: string;
  mthtAmount?: string;
};

function v_d91fe8(v_9390e8): ShopPaymentNavParams | null {
  const v_9d3240 = v_9390e8?.order_id ?? v_9390e8?.orderId;
  if (!v_9d3240) return null;
  return {
    orderId: String(v_9d3240),
    krwAmount: v_9390e8?.krw_amount ?? v_9390e8?.krw,
    mthtAmount: v_9390e8?.mtht_amount ?? v_9390e8?.mtht,
  };
}

export function v_9bf7de(v_24baff) {
  const v_931bf0 = {
    orderId: v_24baff.orderId,
    krwAmount: v_24baff.krwAmount,
    mthtAmount: v_24baff.mthtAmount,
  };

  const v_75e117 = (v_45fe0c = 50) => {
    if (v_60875a.isReady()) {
      const v_275ccd = v_60875a.getCurrentRoute();
      if (v_275ccd?.name === 'ShopPaymentConfirm' && v_275ccd.params?.orderId === v_931bf0.orderId) {
        console.log('[ShopPayment] already on screen:', v_931bf0.orderId);
        return;
      }
      if (v_275ccd?.name === 'ShopPaymentConfirm') {
        v_60875a.dispatch(v_7d9e77.replace('ShopPaymentConfirm', v_931bf0));
      } else {
        v_60875a.dispatch(
          v_650cfa.navigate({
            name: 'ShopPaymentConfirm',
            params: v_931bf0,
          }),
        );
      }
      console.log('[ShopPayment] navigated →', v_931bf0.orderId);
    } else if (v_45fe0c > 0) {
      setTimeout(() => v_75e117(v_45fe0c - 1), 150);
    } else {
      console.error('[ShopPayment] navigation timeout:', v_931bf0.orderId);
    }
  };

  const v_d9b231 = () => setTimeout(() => v_75e117(), 100);

  if (v_6b5698.currentState === 'active') {
    v_d9b231();
  } else {
    const v_1ae212 = v_6b5698.addEventListener('change', (v_b6e533) => {
      if (v_b6e533 === 'active') {
        v_1ae212.remove();
        v_d9b231();
      }
    });
    setTimeout(() => {
      v_1ae212.remove();
      v_d9b231();
    }, 3000);
  }
}

function v_9d2822(msg: v_d97667.RemoteMessage | null) {
  const v_9390e8 = v_badeaf?.data as Record<string, string | undefined> | undefined;
  if (v_9390e8?.type !== 'shop_payment_confirm') return;
  const v_24baff = v_d91fe8(v_9390e8);
  if (!v_24baff) return;
  if (!v_450510(v_24baff.orderId)) {
    console.log('[ShopPayment] push ignored (deeplink order differs):', v_24baff.orderId);
    return;
  }
  console.log('[ShopPayment] push → navigate:', v_24baff.orderId);
  v_9bf7de(v_24baff);
}

export function v_4482f8(v_f71b56) {
  const v_8decf8 = v_6f0675(v_f71b56);
  if (v_8decf8.type !== 'shop_payment') return false;
  console.log('[ShopPayment] deeplink → navigate:', v_8decf8.orderId);
  v_13fdf1(v_8decf8.orderId);
  v_9bf7de({
    orderId: v_8decf8.orderId,
    krwAmount: v_8decf8.krw,
    mthtAmount: v_8decf8.mtht,
  });
  return true;
}

export function v_5bfacf() {
  v_c4deb2(() => {
    let v_f0765f = null;
    let v_59a96b = null;

    try {
      v_f0765f = v_02a5ed().onMessage((v_badeaf) => {
        v_9d2822(v_badeaf);
      });
      v_59a96b = v_02a5ed().onNotificationOpenedApp((v_badeaf) => {
        v_9d2822(v_badeaf);
      });
      v_02a5ed()
        .getInitialNotification()
        .then((v_badeaf) => {
          setTimeout(() => v_9d2822(v_badeaf), 1200);
        })
        .catch(() => null);
    } catch (v_9e86fd) {
      console.warn('[ShopPayment] FCM listener setup failed:', v_9e86fd);
    }

    return () => {
      v_f0765f?.();
      v_59a96b?.();
    };
  }, []);
}
