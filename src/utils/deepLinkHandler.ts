

import { v_e4a763 } from './env';

export type DeepLinkResult =
  | { type: 'referral'; code: string }
  | { type: 'shop_payment'; orderId: string; krw?: string; mtht?: string }
  | { type: 'unknown' };

function v_11d1ec(v_f71b56): Record<string, string> {
  const v_24baff = {};
  const v_413367 = v_f71b56.indexOf('?');
  if (v_413367 === -1) return v_24baff;

  const v_26ebce = v_f71b56.slice(v_413367 + 1);
  v_26ebce.split('&').forEach((v_192af3) => {
    const [v_b24339, v_3b402b] = v_192af3.split('=');
    if (v_b24339) {
      v_24baff[decodeURIComponent(v_b24339)] = v_3b402b ? decodeURIComponent(v_3b402b) : '';
    }
  });
  return v_24baff;
}

export function v_6f0675(v_f71b56): DeepLinkResult {
  if (!v_f71b56) return { type: 'unknown' };

  if (v_f71b56.startsWith('metahintai://referral')) {
    const v_24baff = v_11d1ec(v_f71b56);
    const v_c99bd2 = v_24baff['code'] ?? '';
    return { type: 'referral', code: v_c99bd2 };
  }

  if (v_f71b56.startsWith('metahintai://oth-path-payment')) {
    const v_24baff = v_11d1ec(v_f71b56);
    const v_9d3240 = v_24baff['order_id'] ?? '';
    if (!v_9d3240) return { type: 'unknown' };
    return {
      type: 'shop_payment',
      orderId: v_9d3240,
      krw: v_24baff['krw'] || undefined,
      mtht: v_24baff['mtht'] || undefined,
    };
  }

  return { type: 'unknown' };
}

export function v_8ba358(v_c99bd2): string {
  const v_a9653b = v_e4a763().GATEWAY;
  return `${v_a9653b}/pages/refer?reff=${encodeURIComponent(v_c99bd2)}`;
}

export function v_d844c3(v_c99bd2): string {
  return v_8ba358(v_c99bd2);
}

export function v_1a0a68(v_9d3240, v_72648c, v_6e4734): string {
  const v_ab6401 = new URLSearchParams({ order_id: v_9d3240 });
  if (v_72648c) v_ab6401.set('krw', v_72648c);
  if (v_6e4734) v_ab6401.set('mtht', v_6e4734);
  return `metahintai://oth-path-payment?${v_ab6401.toString()}`;
}
