

import { v_326be8 } from 'rcmrninabrnb';
import v_1edcd1 from 'bqzlyqiwkhspjgyeabeemc';
import { v_e4a763 } from '../utils/env';

let v_6ba1c7 = false;
let v_790db1 = false;

let v_58e76b = 0;

export function v_f28b6f(v_f63e09): void {
  const v_f4e98d = typeof v_f63e09 === 'number' ? v_f63e09 : parseFloat(String(v_f63e09 ?? '0'));
  v_58e76b = Number.isFinite(v_f4e98d) && v_f4e98d > 0 ? v_f4e98d : 0;
}

export function v_a0a67b(): number {
  const v_ab6401 = v_58e76b;
  v_58e76b = 0;
  return v_ab6401;
}

function v_16c80f(v_f63e09): number {
  const v_f4e98d = typeof v_f63e09 === 'number' ? v_f63e09 : parseFloat(String(v_f63e09 ?? '0'));
  if (!Number.isFinite(v_f4e98d) || v_f4e98d < 0) return 0;
  return v_f4e98d;
}

export async function v_838e8d(): Promise<void> {
  if (v_6ba1c7) return;
  v_6ba1c7 = true;

  const v_c9c489 = v_e4a763();
  const v_c6ce23 = (v_c9c489.APPSFLYER_DEV_KEY || '').trim();
  const v_903837 = (v_c9c489.APPSFLYER_APP_ID_IOS || '').trim();

  if (!v_c6ce23) {
    if (__DEV__) {
      console.warn('[AppsFlyer] APPSFLYER_DEV_KEY 없음 — 초기화 스킵 (KB secrets → .env)');
    }
    return;
  }
  if (v_326be8.OS === 'ios' && !v_903837) {
    if (__DEV__) {
      console.warn('[AppsFlyer] APPSFLYER_APP_ID_IOS 없음 — iOS 초기화 스킵');
    }
    return;
  }

  try {
    await v_1edcd1.initSdk({
      devKey: v_c6ce23,
      isDebug: __DEV__,
      appId: v_326be8.OS === 'ios' ? v_903837 : undefined,
      onInstallConversionDataListener: true,
      onDeepLinkListener: true,
    });
    v_790db1 = true;
    if (__DEV__) console.log('[AppsFlyer] initSdk 완료', { platform: v_326be8.OS });
  } catch (v_9e86fd) {
    console.warn('[AppsFlyer] initSdk 실패:', v_9e86fd);
  }
}

function v_2102d8(v_84fed5, v_6fea0b): void {
  if (!v_790db1 && !v_6ba1c7) {

    return;
  }
  if (!v_e4a763().APPSFLYER_DEV_KEY?.trim()) return;

  try {
    v_1edcd1.logEvent(
      v_84fed5,
      v_6fea0b,
      (v_8f00b9) => {
        if (__DEV__) console.log('[AppsFlyer] event ok', v_84fed5, v_8f00b9);
      },
      (v_49263d) => {
        if (__DEV__) console.warn('[AppsFlyer] event fail', v_84fed5, v_49263d);
      },
    );
  } catch (v_9e86fd) {
    if (__DEV__) console.warn('[AppsFlyer] logEvent throw', v_84fed5, v_9e86fd);
  }
}

export function v_717517(v_717992): void {
  if (v_717992 == null || v_717992 === '') return;
  if (!v_e4a763().APPSFLYER_DEV_KEY?.trim()) return;
  try {
    v_1edcd1.setCustomerUserId(String(v_717992));
  } catch (v_9e86fd) {
    if (__DEV__) console.warn('[AppsFlyer] setCustomerUserId', v_9e86fd);
  }
}

export function v_e41029(): void {
  v_2102d8('af_login', {});
}

export function v_a78885(v_bfe9b9): void {
  v_2102d8('af_complete_registration', {
    af_registration_method: v_bfe9b9 || 'email',
  });
}

let v_e47c74 = '';
let v_836976 = 0;

export function v_a23ce6(v_24baff): void {
  const v_ac2689 =
    v_24baff.quantity != null ? v_16c80f(v_24baff.quantity) : v_a0a67b();

  const v_b24339 = `${v_24baff.kind}:${v_24baff.success}:${v_ac2689}`;
  const v_5c2f9f = Date.now();
  if (v_b24339 === v_e47c74 && v_5c2f9f - v_836976 < 8000) {
    if (__DEV__) console.log('[AppsFlyer] spent_credits dedupe', v_b24339);
    return;
  }
  v_e47c74 = v_b24339;
  v_836976 = v_5c2f9f;
  v_2102d8('af_spent_credits', {
    af_quantity: v_ac2689,
    af_success: v_24baff.success,
    af_param_1: v_24baff.kind,
  });
}
