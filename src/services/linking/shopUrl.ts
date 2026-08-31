import { v_e4a763 } from '../../utils/env';

export function v_a382fa(v_a448ad): string {
  if (typeof v_a448ad !== 'string' || v_a448ad === '' || v_a448ad[0] !== '/' || v_a448ad.slice(0, 2) === '//') return '/';
  return v_a448ad;
}

export function v_dbb24a(v_c9c6be, v_a448ad = '/'): string {
  const v_694b25 = v_e4a763().SHOP_BASE ?? 'https://oth-path-4f6cfb.example.invalid';
  const v_8247a6 = v_a382fa(v_a448ad);
  return `${v_694b25}/oth-path?sso=${encodeURIComponent(v_c9c6be)}&next=${encodeURIComponent(v_8247a6)}`;
}

export function v_739f72(v_6e55b1): string {
  if (!v_6e55b1) return '/oth-path';
  return `/oth-path?it_id=${encodeURIComponent(v_6e55b1)}`;
}

export function v_bdc222(v_6e55b1): string | null {
  const v_389afb = String(v_6e55b1 ?? '').trim();
  if (!v_389afb) return null;
  const v_694b25 = v_e4a763().SHOP_BASE ?? 'https://oth-path-4f6cfb.example.invalid';
  return `${v_694b25}/oth-path?it_id=${encodeURIComponent(v_389afb)}`;
}

export type ShopCheckoutOrigin = {
  aiIds?: string[];
  genIds?: string[];
};

export type ShopCheckoutLegacy = {
  itemIds: string[];
  via?: 'ai' | '';
};

export function v_c7823e(
  v_f17108,
  v_6c5ae2 = 'ai',
): string {
  let v_603f7b = [];
  let v_3376c2 = [];

  if (Array.isArray(v_f17108)) {
    const v_52e08b = [...new Set(v_f17108.map((v_62c214) => String(v_62c214 || '').trim()).filter(Boolean))].slice(0, 20);
    if (!v_52e08b.length) return '/oth-path';
    if (v_6c5ae2 === 'ai') v_603f7b = v_52e08b;
    else v_3376c2 = v_52e08b;
  } else if ('itemIds' in v_f17108) {
    const v_52e08b = [...new Set(v_f17108.itemIds.map((v_62c214) => String(v_62c214 || '').trim()).filter(Boolean))].slice(0, 20);
    if (!v_52e08b.length) return '/oth-path';
    if ((v_f17108.via ?? 'ai') === 'ai') v_603f7b = v_52e08b;
    else v_3376c2 = v_52e08b;
  } else {
    v_603f7b = [...new Set((v_f17108.aiIds ?? []).map((v_62c214) => String(v_62c214 || '').trim()).filter(Boolean))].slice(0, 20);
    v_3376c2 = [...new Set((v_f17108.genIds ?? []).map((v_62c214) => String(v_62c214 || '').trim()).filter(Boolean))].slice(0, 20);
  }

  if (!v_603f7b.length && !v_3376c2.length) return '/oth-path';

  const v_ab6401 = new URLSearchParams();
  if (v_603f7b.length) v_ab6401.set('ai_ids', v_603f7b.join(','));
  if (v_3376c2.length) v_ab6401.set('gen_ids', v_3376c2.join(','));
  return `/oth-path?${v_ab6401.toString()}`;
}
