import {
  v_007d01,
  v_660903,
} from '../screens/checkup-nhis/checkupReferenceRanges';

describe('evaluateCheckupValue', () => {
  it('returns null for text-only or missing bounds', () => {
    expect(v_007d01({ textOnly: true }, '양성')).toBeNull();
    expect(v_007d01({}, 100)).toBeNull();
  });

  it('flags high at max boundary (fasting glucose 100)', () => {
    expect(v_007d01({ max: 99 }, 99)).toBe('normal');
    expect(v_007d01({ max: 99 }, 100)).toBe('high');
  });

  it('flags low below min (BMI)', () => {
    expect(v_007d01({ min: 18.5, max: 22.9 }, 18.4)).toBe('low');
    expect(v_007d01({ min: 18.5, max: 22.9 }, 20)).toBe('normal');
    expect(v_007d01({ min: 18.5, max: 22.9 }, 23)).toBe('high');
  });

  it('returns null for non-numeric input', () => {
    expect(v_007d01({ max: 99 }, null)).toBeNull();
    expect(v_007d01({ max: 99 }, '')).toBeNull();
    expect(v_007d01({ max: 99 }, 'abc')).toBeNull();
  });
});

describe('formatCheckupMetricValue', () => {
  it('formats numbers and strings', () => {
    expect(v_660903(112)).toBe('112');
    expect(v_660903(24.04)).toBe('24.0');
    expect(v_660903('음성')).toBe('음성');
    expect(v_660903(null)).toBeNull();
  });
});
