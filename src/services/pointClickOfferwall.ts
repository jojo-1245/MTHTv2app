

import { v_326be8, v_80fa10 } from 'rcmrninabrnb';

const v_1f9bb4 = 5;

export function v_0e72e5(
  v_b922bf,
  v_021a29,
  v_9f1622,
  v_16e209 = v_1f9bb4
): void {
  if (v_326be8.OS !== 'android') {
    return;
  }
  const v_7ebb84 = v_80fa10.PointClickOfferwallModule;
  if (!v_7ebb84?.showOfferwall) {
    if (__DEV__) {
      console.warn('[PointClick] Native module not available');
    }
    return;
  }
  const v_11cc17 = v_021a29.substring(0, 64);
  if (__DEV__) {
    console.log('[PointClick] showOfferwall', { placementUid: v_b922bf, pickerUid: v_11cc17, title: v_9f1622, buttonTemplateIdx: v_16e209 });
  }
  v_7ebb84.showOfferwall(
    v_b922bf,
    v_11cc17,
    v_9f1622,
    v_16e209
  );
}
