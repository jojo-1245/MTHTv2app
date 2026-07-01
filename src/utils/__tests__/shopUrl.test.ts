import { v_a382fa, v_dbb24a } from '../shopUrl';

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
