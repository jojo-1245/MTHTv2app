import { v_e4a763 } from './env';

export function v_a382fa(v_a448ad): string {
  if (typeof v_a448ad !== 'string' || v_a448ad === '' || v_a448ad[0] !== '/' || v_a448ad.slice(0, 2) === '//') return '/';
  return v_a448ad;
}

export function v_dbb24a(v_c9c6be, v_a448ad = '/'): string {
  const v_694b25 = v_e4a763().SHOP_BASE ?? 'https://oth-path-4f6cfb.example.invalid';
  const v_8247a6 = v_a382fa(v_a448ad);
  return `${v_694b25}/oth-path?sso=${encodeURIComponent(v_c9c6be)}&next=${encodeURIComponent(v_8247a6)}`;
}
