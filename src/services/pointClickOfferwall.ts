

import { v_326be8, v_80fa10 } from 'rcmrninabrnb';

const v_1f9bb4 = 5;
const v_4f8d3a = 64;

export function v_222d64(v_fba864): string {
  const v_7eac46 =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const v_fbb6da = new TextEncoder().encode(v_fba864);
  let v_43c42e = '';
  for (let v_ebec57 = 0; v_ebec57 < v_fbb6da.length; v_ebec57 += 3) {
    const v_cd6092 = v_fbb6da[v_ebec57];
    const v_64103e = v_fbb6da[v_ebec57 + 1];
    const v_26cac4 = v_fbb6da[v_ebec57 + 2];
    v_43c42e += v_7eac46[v_cd6092! >> 2];
    v_43c42e += v_7eac46[((v_cd6092! & 3) << 4) | (v_64103e ?? 0) >> 4];
    v_43c42e += v_64103e !== undefined ? v_7eac46[((v_64103e & 15) << 2) | (v_26cac4 ?? 0) >> 6] : '=';
    v_43c42e += v_26cac4 !== undefined ? v_7eac46[v_26cac4 & 63] : '=';
  }
  return v_43c42e;
}

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
    console.error('[PointClick] Native module not available — PointClickOfferwallModule이 로드되지 않았습니다. 네이티브 빌드 확인 필요.');
    return;
  }
  const v_d8855b = v_222d64(v_021a29);
  const v_11cc17 = v_d8855b.substring(0, v_4f8d3a);
  if (__DEV__) {
    console.log('[PointClick] showOfferwall', {
      placementUid: v_b922bf,
      pickerUidEncoded: v_11cc17,
      title: v_9f1622,
      buttonTemplateIdx: v_16e209,
    });
  }
  v_7ebb84.showOfferwall(
    v_b922bf,
    v_11cc17,
    v_9f1622,
    v_16e209
  );
}
