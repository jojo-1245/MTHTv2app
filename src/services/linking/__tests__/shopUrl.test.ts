import {
  v_a382fa,
  v_dbb24a,
  v_739f72,
  v_c7823e,
  v_bdc222,
} from '../shopUrl';

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
  it('MH-651: ai_ids·gen_ids 분리', () => {
    expect(v_c7823e({ aiIds: ['a', 'b'], genIds: ['c'] })).toBe(
      '/oth-path?ai_ids=a%2Cb&gen_ids=c',
    );
  });
  it('legacy 배열+via=ai', () => {
    expect(v_c7823e(['a', 'b'], 'ai')).toBe('/oth-path?ai_ids=a%2Cb');
  });
  it('빈 배열이면 코너 폴백', () => {
    expect(v_c7823e([])).toBe('/oth-path');
  });
  it('중복 제거·최대 20', () => {
    const v_52e08b = Array.from({ length: 25 }, (v_37eab7, v_ebec57) => `id${v_ebec57}`);
    const v_a448ad = v_c7823e(['x', 'x', ...v_52e08b]);
    expect(v_a448ad.startsWith('/oth-path?')).toBe(true);
    const v_24baff = new URLSearchParams(v_a448ad.split('?')[1]);
    expect(v_24baff.get('ai_ids')!.split(',')).toHaveLength(20);
  });
});

describe('buildItemExplanUrl (T-265)', () => {
  it('제품소개 전용 절대 URL을 만든다', () => {
    const v_f71b56 = v_bdc222('2026062420')!;
    expect(v_f71b56.startsWith('https://')).toBe(true);
    expect(v_f71b56).toContain('/oth-path?it_id=2026062420');
  });
  it('it_id를 URL 인코딩한다', () => {
    expect(v_bdc222('a b&c')).toContain('it_id=a%20b%26c');
  });
  it('itemId가 없으면 null (팝업 열지 않음)', () => {
    expect(v_bdc222(null)).toBeNull();
    expect(v_bdc222(undefined)).toBeNull();
    expect(v_bdc222('   ')).toBeNull();
  });
});
