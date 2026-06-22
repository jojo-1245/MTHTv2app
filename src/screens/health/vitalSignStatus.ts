import { v_326be8 } from 'rcmrninabrnb';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_2c13e7 } from '../../hooks/useSystemConfig';

export type GroupStatus = '정상' | '위험';

export function v_9d6425(): boolean {

  if (v_326be8.OS !== 'ios') return false;
  const v_479f05 = v_2c13e7('ios_hide_sensitive_vitals');
  const v_97045a = v_479f05 === 'false' || v_479f05 === '0' || v_479f05 === false;
  return !v_97045a;
}

export function v_9da885(v_653390): boolean {

  if (!v_9d6425()) return false;

  const v_40f40b = [

    v_e3e816.BLOOD_PRESSURE,
    v_e3e816.OXYGEN_SATURATION,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,

    v_e3e816.ASCVD_RISK,
    v_e3e816.ASCVD_RISK_LEVEL,
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,

    v_e3e816.HEMOGLOBIN,
    v_e3e816.HEMOGLOBIN_A1C,
    v_e3e816.HEART_AGE,
    v_e3e816.CARDIAC_WORKLOAD,
    v_e3e816.MEAN_ARTERIAL_PRESSURE,
    v_e3e816.PULSE_PRESSURE,

    v_e3e816.PULSE_RATE,
    v_e3e816.RESPIRATION_RATE,
    v_e3e816.SDNN,
    v_e3e816.RMSSD,
    v_e3e816.MEAN_RRI,
    v_e3e816.RRI,
    v_e3e816.SD1,
    v_e3e816.SD2,
    v_e3e816.PRQ,
    v_e3e816.STRESS_LEVEL,
    v_e3e816.STRESS_INDEX,
    v_e3e816.NORMALIZED_STRESS_INDEX,
    v_e3e816.SNS_INDEX,
    v_e3e816.SNS_ZONE,
    v_e3e816.PNS_INDEX,
    v_e3e816.PNS_ZONE,
    v_e3e816.LFHF,
    v_e3e816.WELLNESS_INDEX,
    v_e3e816.WELLNESS_LEVEL,
    v_e3e816.BODY_TENSION_SCORE,
  ];

  if (typeof v_653390 === 'number' && v_40f40b.includes(v_653390)) {
    return true;
  }

  if (typeof v_653390 === 'string') {
    const v_9cad89 = [
      'blood_pressure',
      'oxygen_saturation',
      'high_blood_pressure_risk',

      'ascvd_risk',
      'ascvd_risk_level',
      'high_hemoglobin_a1c_risk',
      'high_fasting_glucose_risk',
      'high_total_cholesterol_risk',
      'low_hemoglobin_risk',

      'hemoglobin',
      'hemoglobin_a1c',
      'heart_age',
      'cardiac_workload',
      'mean_arterial_pressure',
      'pulse_pressure',

      'pulse_rate',
      'respiration_rate',
      'sdnn',
      'rmssd',
      'mean_rri',
      'rri',
      'sd1',
      'sd2',
      'prq',
      'stress_level',
      'stress_index',
      'normalized_stress_index',
      'sns_index',
      'sns_zone',
      'pns_index',
      'pns_zone',
      'lfhf',
      'wellness_index',
      'wellness_level',
      'health_index',
      'body_tension_score',
    ];
    if (v_9cad89.includes(v_653390.toLowerCase())) {
      return true;
    }
  }

  return false;
}

export const v_399d2c = (v_3b402b): GroupStatus | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (isNaN(v_549ed3)) {
    return null;
  }
  return v_549ed3 >= 3 ? '위험' : '정상';
};

export const v_005339 = (v_3b402b): GroupStatus | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (isNaN(v_549ed3)) {
    return null;
  }
  if (v_549ed3 === 0 || v_549ed3 === 1) {
    return '정상';
  } else if (v_549ed3 === 2 || v_549ed3 === 3) {
    return '위험';
  }
  return null;
};

export function v_a6cea6(
  v_653390,
  v_3b402b,
  getRelatedValue?: (v_653390) => unknown,
): GroupStatus | null {
  if (v_653390 === v_e3e816.STRESS_LEVEL) {
    return v_399d2c(v_3b402b);
  }
  if (v_653390 === v_e3e816.BLOOD_PRESSURE) {
    const v_5d0a1b = v_3b402b as any;
    if (typeof v_5d0a1b === 'object' && v_5d0a1b !== null && !Array.isArray(v_5d0a1b)) {
      const v_e7392b = typeof v_5d0a1b.systolic === 'number' ? v_5d0a1b.systolic : Number(v_5d0a1b.systolic);
      const v_8cfeff = typeof v_5d0a1b.diastolic === 'number' ? v_5d0a1b.diastolic : Number(v_5d0a1b.diastolic);

      if (!isNaN(v_e7392b) && !isNaN(v_8cfeff)) {
        return v_e7392b >= 140 || v_8cfeff >= 95 ? '위험' : '정상';
      }
    }
    return v_005339(v_afd724?.(v_e3e816.HIGH_BLOOD_PRESSURE_RISK));
  }
  if (v_653390 === v_e3e816.HIGH_BLOOD_PRESSURE_RISK) {
    return v_005339(v_3b402b);
  }
  if (v_653390 === v_e3e816.PULSE_RATE) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      return v_549ed3 >= 60 && v_549ed3 <= 100 ? '정상' : '위험';
    }
    return null;
  }
  if (v_653390 === v_e3e816.RESPIRATION_RATE) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      return v_549ed3 >= 12 && v_549ed3 <= 20 ? '정상' : '위험';
    }
    return null;
  }
  if (v_653390 === v_e3e816.PRQ) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      return v_549ed3 >= 4 && v_549ed3 <= 5 ? '정상' : '위험';
    }
    return null;
  }
  if (v_653390 === v_e3e816.SDNN) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      return v_549ed3 >= 50 ? '정상' : '위험';
    }
    return null;
  }
  const v_f4d1c2 = [
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.ASCVD_RISK,
    v_e3e816.ASCVD_RISK_LEVEL, 
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];
  if (v_f4d1c2.includes(v_653390)) {
    return v_005339(v_3b402b);
  }
  if (v_653390 === v_e3e816.PNS_ZONE) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      const v_b66476 = Math.round(v_549ed3);
      if (v_b66476 === 0) return null;
      if (v_b66476 === 1) return '위험';
      return '정상';
    }
    return null;
  }
  if (v_653390 === v_e3e816.SNS_ZONE) {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      const v_b66476 = Math.round(v_549ed3);
      if (v_b66476 === 0) return null;
      if (v_b66476 === 3) return '위험';
      return '정상';
    }
    return null;
  }
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (!isNaN(v_549ed3)) {
    return '정상';
  }
  return null;
}

export function v_4e7146(
  v_653390,
  v_3b402b,
  v_a4a6ad,
  getRelatedValue?: (v_653390) => unknown,
): 'risk' | 'normal' | undefined {
  const v_2869c1 = v_a6cea6(v_653390, v_3b402b, v_afd724);
  if (v_2869c1 === '위험') return 'risk';
  if (v_2869c1 === '정상') return 'normal';

  if (v_a4a6ad === '위험' || v_a4a6ad === 'risk') return 'risk';
  if (v_a4a6ad === '정상' || v_a4a6ad === 'normal') return 'normal';
  if (typeof v_a4a6ad === 'string') {
    const v_728123 = v_a4a6ad.toLowerCase();
    if (v_728123 === 'risk' || v_728123 === 'high') return 'risk';
    if (v_728123 === 'normal' || v_728123 === 'low') return 'normal';
  }
  return undefined;
}

export function v_d28324(v_479f05): boolean {
  if (v_479f05 === true || v_479f05 === 1) return true;
  if (v_479f05 === false || v_479f05 === 0) return false;
  if (typeof v_479f05 === 'string') {
    const v_728123 = v_479f05.trim().toLowerCase();
    return v_728123 === 'risk' || v_728123 === '위험' || v_728123 === 'high' || v_728123 === 'abnormal';
  }
  return false;
}

export function v_7374eb(v_823608, v_3b402b): boolean {

  if (v_9da885(v_823608)) return false;

  if (v_823608.startsWith('unknown_')) return false;

  if (v_3b402b === null || v_3b402b === undefined) return false;

  if (Array.isArray(v_3b402b)) return false;

  if (typeof v_3b402b === 'object') return true;

  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (!isNaN(v_549ed3) && v_549ed3 === -1) return false;
  return true;
}
