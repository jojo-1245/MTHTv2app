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

export function v_c7823e(v_735da1, v_acc1e5 = 'ai'): string {
  const v_52e08b = [...new Set(v_735da1.map((v_62c214) => String(v_62c214 || '').trim()).filter(Boolean))].slice(0, 20);
  if (!v_52e08b.length) return '/oth-path';
  const v_ab6401 = new URLSearchParams();
  v_ab6401.set('it_ids', v_52e08b.join(','));
  if (v_acc1e5) v_ab6401.set('via', v_acc1e5);
  return `/oth-path?${v_ab6401.toString()}`;
}
