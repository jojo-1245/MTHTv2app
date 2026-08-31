

import type { v_84adce } from '../../services/codefApi';

export type CheckupEvalResult = 'high' | 'low' | 'normal' | null;

export type CheckupReferenceSection =
  | 'anthropometry'
  | 'blood_pressure'
  | 'glucose'
  | 'lipid'
  | 'blood'
  | 'liver'
  | 'kidney'
  | 'urine';

export type CheckupReferenceItem = {
  key: keyof v_84adce;
  labelKey: string;
  unitKey: string;
  section: CheckupReferenceSection;
  order: number;

  referenceKey: string;
  min?: number;
  max?: number;

  textOnly?: boolean;
};

export const v_2ba8df = [
  { key: 'height', labelKey: 'height', unitKey: 'cm', section: 'anthropometry', order: 1, referenceKey: 'height' },
  { key: 'weight', labelKey: 'weight', unitKey: 'kg', section: 'anthropometry', order: 2, referenceKey: 'weight' },
  { key: 'bmi', labelKey: 'bmi', unitKey: 'kg_m2', section: 'anthropometry', order: 3, referenceKey: 'bmi', min: 18.5, max: 22.9 },
  { key: 'waist', labelKey: 'waist', unitKey: 'cm', section: 'anthropometry', order: 4, referenceKey: 'waist', max: 90 },
  { key: 'systolic_bp', labelKey: 'systolic_bp', unitKey: 'mmhg', section: 'blood_pressure', order: 1, referenceKey: 'systolic_bp', max: 119 },
  { key: 'diastolic_bp', labelKey: 'diastolic_bp', unitKey: 'mmhg', section: 'blood_pressure', order: 2, referenceKey: 'diastolic_bp', max: 79 },
  { key: 'fasting_glucose', labelKey: 'fasting_glucose', unitKey: 'mg_dl', section: 'glucose', order: 1, referenceKey: 'fasting_glucose', max: 99 },
  { key: 'total_cholesterol', labelKey: 'total_cholesterol', unitKey: 'mg_dl', section: 'lipid', order: 1, referenceKey: 'total_cholesterol', max: 199 },
  { key: 'hdl', labelKey: 'hdl', unitKey: 'mg_dl', section: 'lipid', order: 2, referenceKey: 'hdl', min: 40 },
  { key: 'ldl', labelKey: 'ldl', unitKey: 'mg_dl', section: 'lipid', order: 3, referenceKey: 'ldl', max: 129 },
  { key: 'triglyceride', labelKey: 'triglyceride', unitKey: 'mg_dl', section: 'lipid', order: 4, referenceKey: 'triglyceride', max: 149 },
  { key: 'hemoglobin', labelKey: 'hemoglobin', unitKey: 'g_dl', section: 'blood', order: 1, referenceKey: 'hemoglobin', min: 12, max: 16.5 },
  { key: 'ast', labelKey: 'ast', unitKey: 'iu_l', section: 'liver', order: 1, referenceKey: 'ast', max: 39 },
  { key: 'alt', labelKey: 'alt', unitKey: 'iu_l', section: 'liver', order: 2, referenceKey: 'alt', max: 39 },
  { key: 'gtp', labelKey: 'gtp', unitKey: 'iu_l', section: 'liver', order: 3, referenceKey: 'gtp', max: 62 },
  { key: 'creatinine', labelKey: 'creatinine', unitKey: 'mg_dl', section: 'kidney', order: 1, referenceKey: 'creatinine', max: 1.2 },
  { key: 'gfr', labelKey: 'gfr', unitKey: 'ml_min', section: 'kidney', order: 2, referenceKey: 'gfr', min: 60 },
  { key: 'urine_protein', labelKey: 'urine_protein', unitKey: 'none', section: 'urine', order: 1, referenceKey: 'urine_protein', textOnly: true },
];

export const v_ba4fc0 = [
  'anthropometry',
  'blood_pressure',
  'glucose',
  'lipid',
  'blood',
  'liver',
  'kidney',
  'urine',
];

export function v_007d01(
  v_8c0b26,
  v_3b402b,
): CheckupEvalResult {
  if (v_8c0b26.textOnly) return null;
  const v_0ad8c5 = typeof v_3b402b === 'number' ? v_3b402b : typeof v_3b402b === 'string' && v_3b402b.trim() !== ''
    ? Number(v_3b402b)
    : NaN;
  if (!Number.isFinite(v_0ad8c5)) return null;

  if (v_8c0b26.min != null && v_0ad8c5 < v_8c0b26.min) return 'low';
  if (v_8c0b26.max != null && v_0ad8c5 > v_8c0b26.max) return 'high';
  if (v_8c0b26.min != null || v_8c0b26.max != null) return 'normal';
  return null;
}

export function v_660903(v_3b402b): string | null {
  if (v_3b402b == null || v_3b402b === '') return null;
  if (typeof v_3b402b === 'number' && Number.isFinite(v_3b402b)) {
    return Number.isInteger(v_3b402b) ? String(v_3b402b) : v_3b402b.toFixed(1);
  }
  const v_fd5f43 = String(v_3b402b).trim();
  return v_fd5f43.length > 0 ? v_fd5f43 : null;
}

export function v_4189ea(row: v_84adce, key: keyof v_84adce): unknown {
  return v_3ac7e7[v_b24339];
}
