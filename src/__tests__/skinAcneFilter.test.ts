import { v_f5ba54, v_e12bcd, v_199a39 } from '../services/skinAnalysis';

describe('skin acne filter', () => {
  it('isAcneAction: acne/hd_acne만 true', () => {
    expect(v_f5ba54('acne')).toBe(true);
    expect(v_f5ba54('hd_acne')).toBe(true);
    expect(v_f5ba54('pore')).toBe(false);
  });
  it('filterAcneFromAnalysisResult: hidden=true면 acne 키 제거', () => {
    const v_8decf8 = { acne: { ui_score: 87 }, pore: { ui_score: 90 } };
    expect(Object.keys(v_e12bcd(v_8decf8, true))).toEqual(['pore']);
    expect(Object.keys(v_e12bcd(v_8decf8, false))).toEqual(['acne', 'pore']);
  });
  it('filterAcneKeys: hidden=true면 acne 계열 제거', () => {
    expect(v_199a39(['acne', 'hd_acne', 'pore'], true)).toEqual(['pore']);
    expect(v_199a39(['acne', 'pore'], false)).toEqual(['acne', 'pore']);
  });
});
