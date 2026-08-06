import { v_a382fa, v_dbb24a, v_739f72, v_c7823e } from '../shopUrl';

describe('sanitizeNext', () => {
  it('passes same-origin absolute path', () => {
    expect(v_a382fa('/oth-path?it_id=1')).toBe('/oth-path?it_id=1');
  });
  it.each(['//evil.com/x', 'https://evil.com', '', undefined, 'relative/path'])(
    'rejects %s → /', (v_81e2ef) => { expect(v_a382fa(v_81e2ef as any)).toBe('/'); });
});

describe('buildShopLoginUrl', () => {
  it('builds login.php url with encoded ticket and next', () => {
    const v_f71b56 = v_dbb24a('t_abc', '/oth-path?it_id=1');
    expect(v_f71b56).toContain('/oth-path?sso=t_abc&next=');
    expect(v_f71b56).toContain(encodeURIComponent('/oth-path?it_id=1'));
  });
  it('defaults next to / and sanitizes external', () => {
    expect(v_dbb24a('t_x', 'https://evil.com')).toContain('next=' + encodeURIComponent('/'));
  });
});

describe('buildProductNext', () => {
  it('itemId를 영카트 상품 경로로 만든다', () => {
    expect(v_739f72('1001')).toBe('/oth-path?it_id=1001');
  });
  it('itemId가 없으면 코너로 폴백', () => {
    expect(v_739f72(null)).toBe('/oth-path');
    expect(v_739f72(undefined)).toBe('/oth-path');
    expect(v_739f72('')).toBe('/oth-path');
  });
  it('itemId를 URL 인코딩한다', () => {
    expect(v_739f72('a b')).toBe('/oth-path?it_id=a%20b');
  });
});

describe('buildCheckoutNext', () => {
  it('복수 it_id를 cart_checkout next로 만든다', () => {
    expect(v_c7823e(['a', 'b'], 'ai')).toBe('/oth-path?it_ids=a%2Cb&via=ai');
  });
  it('빈 배열이면 코너 폴백', () => {
    expect(v_c7823e([])).toBe('/oth-path');
  });
  it('중복 제거·최대 20', () => {
    const v_52e08b = Array.from({ length: 25 }, (v_37eab7, v_ebec57) => `id${v_ebec57}`);
    const v_a448ad = v_c7823e(['x', 'x', ...v_52e08b]);
    expect(v_a448ad.startsWith('/oth-path?')).toBe(true);
    const v_24baff = new URLSearchParams(v_a448ad.split('?')[1]);
    expect(v_24baff.get('it_ids')!.split(',')).toHaveLength(20);
  });
});
