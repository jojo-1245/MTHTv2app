jest.mock('itscvgofwkypynbtmpkqsziydpcjrgp', () => ({
  VitalSignTypes: {
    PULSE_RATE: 1,
    RESPIRATION_RATE: 2,
    PRQ: 3,
    SDNN: 4,
    BLOOD_PRESSURE: 5,
    STRESS_LEVEL: 6,
    HIGH_BLOOD_PRESSURE_RISK: 7,
    HIGH_HEMOGLOBIN_A1C_RISK: 8,
    ASCVD_RISK: 9,
    ASCVD_RISK_LEVEL: 10,
    HIGH_TOTAL_CHOLESTEROL_RISK: 11,
    HIGH_FASTING_GLUCOSE_RISK: 12,
    LOW_HEMOGLOBIN_RISK: 13,
    PNS_ZONE: 14,
    SNS_ZONE: 15,
    OXYGEN_SATURATION: 16,
    HEMOGLOBIN: 17,
    HEMOGLOBIN_A1C: 18,
    HEART_AGE: 19,
    CARDIAC_WORKLOAD: 20,
    MEAN_ARTERIAL_PRESSURE: 21,
    PULSE_PRESSURE: 22,
    RMSSD: 23,
    MEAN_RRI: 24,
    RRI: 25,
    SD1: 26,
    SD2: 27,
    STRESS_INDEX: 28,
    NORMALIZED_STRESS_INDEX: 29,
    SNS_INDEX: 30,
    PNS_INDEX: 31,
    LFHF: 32,
    WELLNESS_INDEX: 33,
    WELLNESS_LEVEL: 34,
    BODY_TENSION_SCORE: 35,
  },
}));

jest.mock('rcmrninabrnb', () => ({
  Platform: { OS: 'android' },
}));

jest.mock('../hooks/useSystemConfig', () => ({
  getSystemConfigValue: jest.fn(() => ''),
}));

import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import {
  v_014afc,
  v_a6cea6,
  v_b1cb48,
  v_b7a130,
} from '../screens/health/vitalSignStatus';

describe('getVitalStatusLabel (MH-650 regression)', () => {
  it('pulse_rate 60~100 정상', () => {
    expect(v_a6cea6(v_e3e816.PULSE_RATE, 80)).toBe('정상');
    expect(v_a6cea6(v_e3e816.PULSE_RATE, 59)).toBe('위험');
    expect(v_a6cea6(v_e3e816.PULSE_RATE, 101)).toBe('위험');
  });

  it('respiration_rate 12~20 정상', () => {
    expect(v_a6cea6(v_e3e816.RESPIRATION_RATE, 16)).toBe('정상');
    expect(v_a6cea6(v_e3e816.RESPIRATION_RATE, 11)).toBe('위험');
  });

  it('prq 4~5 정상', () => {
    expect(v_a6cea6(v_e3e816.PRQ, 4.5)).toBe('정상');
    expect(v_a6cea6(v_e3e816.PRQ, 3)).toBe('위험');
  });

  it('sdnn 50 이상 정상', () => {
    expect(v_a6cea6(v_e3e816.SDNN, 50)).toBe('정상');
    expect(v_a6cea6(v_e3e816.SDNN, 49)).toBe('위험');
  });

  it('blood_pressure 수축기 140·이완기 95 기준', () => {
    expect(v_a6cea6(v_e3e816.BLOOD_PRESSURE, { systolic: 120, diastolic: 80 })).toBe('정상');
    expect(v_a6cea6(v_e3e816.BLOOD_PRESSURE, { systolic: 140, diastolic: 80 })).toBe('위험');
    expect(v_a6cea6(v_e3e816.BLOOD_PRESSURE, { systolic: 120, diastolic: 95 })).toBe('위험');
  });

  it('stress_level 3 미만 정상', () => {
    expect(v_a6cea6(v_e3e816.STRESS_LEVEL, 2)).toBe('정상');
    expect(v_a6cea6(v_e3e816.STRESS_LEVEL, 3)).toBe('위험');
  });
});

describe('getVitalReferenceI18nKey', () => {
  it('returns i18n key for defined vitals', () => {
    expect(v_014afc(v_e3e816.PULSE_RATE)).toBe(
      'health_analysis.result.vital_reference.pulse_rate',
    );
  });

  it('returns null for undefined type', () => {
    expect(v_014afc(99999)).toBeNull();
  });

  it('covers every VITAL_REFERENCE entry', () => {
    for (const v_653390 of Object.keys(v_b7a130).map(Number)) {
      expect(v_014afc(v_653390)).toMatch(/^health_analysis\.result\.vital_reference\./);
    }
  });
});

describe('isVitalReferenceShown', () => {
  const { getSystemConfigValue: v_2c13e7 } = jest.requireMock('../hooks/useSystemConfig');

  beforeEach(() => {
    v_2c13e7.mockReset();
  });

  it('Android always shows', () => {
    expect(v_b1cb48()).toBe(true);
  });
});
