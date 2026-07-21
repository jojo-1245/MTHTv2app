import { v_a382fa, v_dbb24a, v_739f72 } from '../shopUrl';

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
