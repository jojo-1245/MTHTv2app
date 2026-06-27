import v_a3453e, { v_5ab095, v_df9f57, v_c4deb2 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_122070,
  v_aa7413,
  v_09d0e5,
  v_39a996,
  v_03e392,
  v_326be8,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import v_f10f2a from 'zqqvxke';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_dd725b, v_47f7b9 } from '../../../components';
import { v_d91974, v_af2c88 } from '../../../utils/tabletLayout';
import v_f595b9, { v_bf60de } from 'vpztcxjmsfanunln';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../../../constants';
import { v_777b12, v_d531ea, v_a44133, type v_218d40 } from '../../../services';
import { v_998b9d } from '../../../utils/authErrorHandler';
import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_d28324, v_7374eb, v_9da885 } from '../vitalSignStatus';
import { v_bb8240 } from '../../../hooks/useSystemConfig';

export interface MeasurementItem {
  key: string;
  labelKey: string;
  value: string | number;
  status: 'normal' | 'risk';
  unit?: string;
  descKey?: string; 
}

export interface HealthRecord {
  id: string;
  date: string; 
  time: string; 
  healthIndex: number; 
  items: MeasurementItem[];
}

const v_ee03c5 = (v_11ea7b = {}): MeasurementItem[] => {
  const v_694b25 = [

    { key: 'blood_pressure', labelKey: 'blood_pressure', value: '120/80', status: 'normal', unit: 'mmHg', descKey: 'blood_pressure_desc' },

    { key: 'pulse_rate', labelKey: 'pulse_rate', value: 72, status: 'normal', unit: 'bpm', descKey: 'pulse_rate_desc' },

    { key: 'respiration_rate', labelKey: 'respiration_rate', value: 16, status: 'normal', unit: '회/분', descKey: 'respiration_rate_desc' },

    { key: 'oxygen_saturation', labelKey: 'oxygen_saturation', value: 98, status: 'normal', unit: '%', descKey: 'oxygen_saturation_desc' },

    { key: 'sdnn', labelKey: 'sdnn_friendly', value: 68, status: 'normal', unit: 'ms', descKey: 'sdnn_desc' },
    { key: 'rmssd', labelKey: 'rmssd_friendly', value: 32.5, status: 'normal', unit: 'ms', descKey: 'rmssd_desc' },
    { key: 'mean_rri', labelKey: 'mean_rri_friendly', value: 850, status: 'normal', unit: 'ms', descKey: 'mean_rri_desc' },
    { key: 'sd1', labelKey: 'sd1_friendly', value: 23.1, status: 'normal', unit: 'ms', descKey: 'sd1_desc' },
    { key: 'sd2', labelKey: 'sd2_friendly', value: 58.4, status: 'normal', unit: 'ms', descKey: 'sd2_desc' },

    { key: 'sns_zone', labelKey: 'sns_zone_friendly', value: '낮음', status: 'normal', descKey: 'sns_zone_desc' },
    { key: 'sns_index', labelKey: 'sns_index_friendly', value: 25, status: 'normal', descKey: 'sns_index_desc' },

    { key: 'stress_level', labelKey: 'stress_level', value: '낮음', status: 'normal', descKey: 'stress_level_desc' },
    { key: 'stress_index', labelKey: 'stress_index', value: 706, status: 'normal', descKey: 'stress_index_desc' },
    { key: 'normalized_stress_index', labelKey: 'normalized_stress_index', value: 17, status: 'normal', descKey: 'normalized_stress_index_desc' },

    { key: 'pns_zone', labelKey: 'pns_zone_friendly', value: 85, status: 'normal', descKey: 'pns_zone_desc' },
    { key: 'pns_index', labelKey: 'pns_index_friendly', value: 84, status: 'normal', descKey: 'pns_index_desc' },

    { key: 'prq', labelKey: 'prq', value: 78, status: 'normal', descKey: 'prq_desc' },

    { key: 'hemoglobin', labelKey: 'hemoglobin', value: 14.5, status: 'normal', unit: 'g/dL', descKey: 'hemoglobin_desc' },

    { key: 'hemoglobin_a1c', labelKey: 'hemoglobin_a1c', value: 5.4, status: 'normal', unit: '%', descKey: 'hemoglobin_a1c_desc' },

    { key: 'high_hemoglobin_a1c_risk', labelKey: 'high_hemoglobin_a1c_risk', value: '낮음', status: 'normal', descKey: 'high_hemoglobin_a1c_risk_desc' },
    { key: 'high_blood_pressure_risk', labelKey: 'high_blood_pressure_risk', value: '낮음', status: 'normal', descKey: 'high_blood_pressure_risk_desc' },
    { key: 'ascvd_risk', labelKey: 'ascvd_risk', value: '낮음', status: 'normal', descKey: 'ascvd_risk_desc' },
    { key: 'high_fasting_glucose_risk', labelKey: 'high_fasting_glucose_risk', value: '낮음', status: 'normal', descKey: 'high_fasting_glucose_risk_desc' },
    { key: 'high_total_cholesterol_risk', labelKey: 'high_total_cholesterol_risk', value: '낮음', status: 'normal', descKey: 'high_total_cholesterol_risk_desc' },
    { key: 'low_hemoglobin_risk', labelKey: 'low_hemoglobin_risk', value: '낮음', status: 'normal', descKey: 'low_hemoglobin_risk_desc' },

    { key: 'heart_age', labelKey: 'heart_age', value: 35, status: 'normal', unit: '세', descKey: 'heart_age_desc' },

    { key: 'cardiac_workload', labelKey: 'cardiac_workload', value: 8640, status: 'normal', descKey: 'cardiac_workload_desc' },
    { key: 'pulse_pressure', labelKey: 'pulse_pressure', value: 40, status: 'normal', unit: 'mmHg', descKey: 'pulse_pressure_desc' },
    { key: 'mean_arterial_pressure', labelKey: 'mean_arterial_pressure', value: 93, status: 'normal', unit: 'mmHg', descKey: 'mean_arterial_pressure_desc' },
  ].filter(v_8c0b26 => !v_9da885(v_8c0b26.key));

  if (Object.keys(v_11ea7b).length === 0) return v_694b25;
  return v_694b25.map((v_8c0b26) => {
    const v_b6c474 = v_11ea7b[v_8c0b26.key];
    return v_b6c474 ? { ...v_8c0b26, ...v_b6c474 } : v_8c0b26;
  });
};

export const v_bcb8af = [
  { sectionKey: 'section_vital_signs', itemKeys: ['blood_pressure', 'pulse_rate', 'respiration_rate', 'oxygen_saturation'] },
  { sectionKey: 'section_hrv', itemKeys: ['sdnn', 'rmssd', 'mean_rri', 'sd1', 'sd2'] },
  { sectionKey: 'section_stress_response', itemKeys: ['sns_zone', 'sns_index'] },
  { sectionKey: 'section_stress', itemKeys: ['stress_level', 'stress_index', 'normalized_stress_index'] },
  { sectionKey: 'section_recovery', itemKeys: ['pns_zone', 'pns_index'] },
  { sectionKey: 'section_cardiovascular', itemKeys: ['prq', 'cardiac_workload', 'pulse_pressure', 'mean_arterial_pressure'] },
  { sectionKey: 'section_blood_tests', itemKeys: ['hemoglobin', 'hemoglobin_a1c'] },
  { sectionKey: 'section_risk_prediction', itemKeys: ['high_hemoglobin_a1c_risk', 'high_blood_pressure_risk', 'ascvd_risk', 'high_fasting_glucose_risk', 'high_total_cholesterol_risk', 'low_hemoglobin_risk', 'heart_age'] },
];

export const v_ac1ebb = (): { sectionKey: string; itemKeys: string[] }[] =>
  v_bcb8af
    .map(v_b4fa6c => ({ ...v_b4fa6c, itemKeys: v_b4fa6c.itemKeys.filter(v_b24339 => !v_9da885(v_b24339)) }))
    .filter(v_b4fa6c => v_b4fa6c.itemKeys.length > 0);

const v_70af8f = [
  {
    id: '1',
    date: '2026-01-15',
    time: '14:30',
    healthIndex: 8,
    items: v_ee03c5({
      blood_pressure: { value: '120/80' },
      pulse_rate: { value: 72 },
      respiration_rate: { value: 16 },
      oxygen_saturation: { value: 98 },
      sdnn: { value: 68 },
      sns_zone: { value: '낮음', status: 'risk' },
      stress_level: { value: '낮음', status: 'risk' },
      pns_zone: { value: 85 },
      prq: { value: 78 },
      hemoglobin: { value: 14.5 },
      hemoglobin_a1c: { value: 5.4 },
      heart_age: { value: 35 },
      pulse_pressure: { value: 40 },
      mean_arterial_pressure: { value: 93 },
    }),
  },
  {
    id: '2',
    date: '2026-01-20',
    time: '09:15',
    healthIndex: 9,
    items: v_ee03c5({
      blood_pressure: { value: '118/76' },
      pulse_rate: { value: 65 },
      respiration_rate: { value: 14 },
      oxygen_saturation: { value: 99 },
      sdnn: { value: 71 },
      rmssd: { value: 35.2 },
      mean_rri: { value: 920 },
      sd1: { value: 24.9 },
      sd2: { value: 62.1 },
      sns_zone: { value: '낮음', status: 'normal' },
      sns_index: { value: 22 },
      stress_level: { value: '낮음', status: 'normal' },
      stress_index: { value: 650 },
      normalized_stress_index: { value: 15 },
      pns_zone: { value: 88 },
      pns_index: { value: 88 },
      prq: { value: 82 },
      hemoglobin: { value: 14.2 },
      hemoglobin_a1c: { value: 5.3 },
      heart_age: { value: 33 },
      pulse_pressure: { value: 42 },
      mean_arterial_pressure: { value: 90 },
      cardiac_workload: { value: 7800 },
    }),
  },
  {
    id: '3',
    date: '2026-01-25',
    time: '16:45',
    healthIndex: 5, 
    items: v_ee03c5({
      blood_pressure: { value: '125/82' },
      pulse_rate: { value: 78 },
      respiration_rate: { value: 18 },
      oxygen_saturation: { value: 97 },
      sdnn: { value: 62 },
      rmssd: { value: 28.5 },
      mean_rri: { value: 770 },
      sd1: { value: 20.2 },
      sd2: { value: 52.3 },
      sns_zone: { value: '보통', status: 'normal' },
      sns_index: { value: 35 },
      stress_level: { value: '보통', status: 'normal' },
      stress_index: { value: 780 },
      normalized_stress_index: { value: 19 },
      pns_zone: { value: 80 },
      pns_index: { value: 78 },
      prq: { value: 75 },
      hemoglobin: { value: 14.0 },
      hemoglobin_a1c: { value: 5.5 },
      heart_age: { value: 37 },
      pulse_pressure: { value: 43 },
      mean_arterial_pressure: { value: 96 },
      cardiac_workload: { value: 9360 },
    }),
  },
  {
    id: '4',
    date: '2026-01-28',
    time: '11:20',
    healthIndex: 8,
    items: v_ee03c5({
      blood_pressure: { value: '122/80' },
      pulse_rate: { value: 69 },
      respiration_rate: { value: 16 },
      oxygen_saturation: { value: 98 },
      sdnn: { value: 70 },
      rmssd: { value: 31.2 },
      mean_rri: { value: 870 },
      sd1: { value: 22.1 },
      sd2: { value: 56.8 },
      sns_zone: { value: '낮음', status: 'normal' },
      sns_index: { value: 28 },
      stress_level: { value: '낮음', status: 'normal' },
      stress_index: { value: 690 },
      normalized_stress_index: { value: 16 },
      pns_zone: { value: 86 },
      pns_index: { value: 85 },
      prq: { value: 79 },
      hemoglobin: { value: 14.3 },
      hemoglobin_a1c: { value: 5.4 },
      heart_age: { value: 34 },
      pulse_pressure: { value: 42 },
      mean_arterial_pressure: { value: 94 },
      cardiac_workload: { value: 8280 },
    }),
  },
  {
    id: '5',
    date: '2026-01-31',
    time: '15:45',
    healthIndex: 9,
    items: v_ee03c5({
      blood_pressure: { value: '120/80' },
      pulse_rate: { value: 69 },
      respiration_rate: { value: 18 },
      oxygen_saturation: { value: 98 },
      sdnn: { value: 71 },
      rmssd: { value: 33.8 },
      mean_rri: { value: 865 },
      sd1: { value: 23.9 },
      sd2: { value: 59.2 },
      sns_zone: { value: '낮음', status: 'risk' },
      sns_index: { value: 26 },
      stress_level: { value: '낮음', status: 'risk' },
      stress_index: { value: 710 },
      normalized_stress_index: { value: 17 },
      pns_zone: { value: 85 },
      pns_index: { value: 83 },
      prq: { value: 78 },
      hemoglobin: { value: 14.5 },
      hemoglobin_a1c: { value: 5.4 },
      heart_age: { value: 35 },
      pulse_pressure: { value: 40 },
      mean_arterial_pressure: { value: 93 },
      cardiac_workload: { value: 8280 },
    }),
  },
];

const v_3fd22d = [
  { ...v_70af8f[0], id: '6', date: '2025-12-10', time: '10:00', healthIndex: 7 }, 
  { ...v_70af8f[1], id: '7', date: '2025-12-15', time: '14:20', healthIndex: 8 }, 
  { ...v_70af8f[2], id: '8', date: '2025-12-20', time: '09:30', healthIndex: 3 }, 
];

const v_16f99f = [
  { ...v_70af8f[0], id: '1b', date: '2026-01-15', time: '20:00', healthIndex: 4 }, 
  { ...v_70af8f[4], id: '5b', date: '2026-01-31', time: '18:30', healthIndex: 8 }, 
];

const v_7199ce = [...v_70af8f, ...v_3fd22d, ...v_16f99f];
const v_488860 = 5;

const v_173689 = ['weekday_sun', 'weekday_mon', 'weekday_tue', 'weekday_wed', 'weekday_thu', 'weekday_fri', 'weekday_sat'] as const;

const v_0ecf1d = new Set<string>([
  'ascvd_risk_level',
  'high_hemoglobin_a1c_risk',
  'high_blood_pressure_risk',
  'high_total_cholesterol_risk',
  'high_fasting_glucose_risk',
  'low_hemoglobin_risk',
]);

const v_ad7730 = (v_823608, v_3b402b): string | number => {
  if (v_3b402b === null || v_3b402b === undefined) return '';

  if (v_823608 === 'blood_pressure') {
    if (typeof v_3b402b === 'object' && !Array.isArray(v_3b402b) && v_3b402b !== null) {
      const v_25a9c7 = v_3b402b as { systolic?: unknown; diastolic?: unknown };
      if (v_25a9c7.systolic !== undefined && v_25a9c7.diastolic !== undefined) {
        return `${v_25a9c7.systolic || 'N/A'}/${v_25a9c7.diastolic || 'N/A'}`;
      }
    }
    return typeof v_3b402b === 'string' ? v_3b402b : String(v_3b402b);
  }

  if (v_0ecf1d.has(v_823608)) {
    const v_f4e98d = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_f4e98d)) {
      if (v_f4e98d === 0) return v_f10f2a.t('health_analysis.result.risk_level_unknown');
      if (v_f4e98d === 1) return v_f10f2a.t('health_analysis.result.risk_level_low');
      if (v_f4e98d === 2) return v_f10f2a.t('health_analysis.result.risk_level_moderate');
      if (v_f4e98d === 3) return v_f10f2a.t('health_analysis.result.risk_level_high');
    }
  }
  if (typeof v_3b402b === 'number') {

    if (v_823608 === 'pulse_rate' || v_823608 === 'heart_age') {
      return String(Math.round(v_3b402b));
    }

    if (v_823608 === 'ascvd_risk') {
      return `${v_3b402b.toFixed(1)}%`;
    }

    return Number(v_3b402b.toFixed(1));
  }

  const v_f4e98d = Number(v_3b402b);
  if (!isNaN(v_f4e98d)) {
    if (v_823608 === 'pulse_rate' || v_823608 === 'heart_age') return String(Math.round(v_f4e98d));
    return Number(v_f4e98d.toFixed(1));
  }
  return typeof v_3b402b === 'string' ? v_3b402b : String(v_3b402b);
};

export const v_38756f = (item: v_218d40): HealthRecord => {

  const v_b9fc6f = {};

  if (v_8c0b26.vital_signs) {
    Object.entries(v_8c0b26.vital_signs).forEach(([v_823608, v_9390e8]) => {
      if (!v_9390e8 || !v_823608) return;

      if (!v_7374eb(v_823608, v_9390e8.value)) return;

      const v_72b4e2 = v_ad7730(v_823608, v_9390e8.value);

      const v_d308b5 = v_d28324(v_9390e8.status) ? 'risk' : 'normal';

      v_b9fc6f[v_823608] = {
        value: v_72b4e2,
        status: v_d308b5 as 'normal' | 'risk',
      };
    });
  }

  const v_841117 = v_ee03c5(v_b9fc6f);
  const v_4622b9 = Object.keys(v_b9fc6f).length > 0
    ? v_841117.filter((v_ebec57) => v_b9fc6f[v_ebec57.key] != null)
    : v_841117;

  return {
    id: String(v_8c0b26.id),
    date: v_8c0b26.record_date,
    time: v_8c0b26.record_time,
    healthIndex: v_8c0b26.health_index,
    items: v_4622b9,
  };
};

interface HealthRecordsViewProps {
  onStartComparativeAnalysis?: () => void;
  onCompare?: (records: [HealthRecord, HealthRecord]) => void;

  selectedAccountId?: string;

  accounts?: Array<{ id: string; isCurrent?: boolean }>;
}

export const HealthRecordsView: v_a3453e.FC<HealthRecordsViewProps> = ({
  onStartComparativeAnalysis: v_edd5a4,
  onCompare: v_bda358,
  selectedAccountId: v_e7b2f2,
  accounts: v_c86f08,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();
  const v_6c4b91 = v_d91974();
  const v_76eb7f = v_6c4b91.isTablet;
  const v_3fa560 = v_df9f57(
    () => Math.round(v_6c4b91.height * 0.82),
    [v_6c4b91.height]
  );
  const v_e05613 = v_76eb7f ? v_af2c88(80, 96) : 80;
  const v_c0b708 = v_df9f57(
    () => ({
      listDate: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
      listTime: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      listValue: v_76eb7f ? v_6c4b91.typo.title : 24,
      listBadge: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      detailTimestamp: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
      navBtn: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      healthIndexValue: v_76eb7f ? v_6c4b91.typo.subtitle : v_ef658a.large,
      healthIndexLabel: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      healthIndexStatus: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      measurementItemsTitle: v_76eb7f ? v_6c4b91.typo.subtitle : v_ef658a.medium,
      measurementSectionTitle: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.small,
      measurementItemLabel: v_76eb7f ? v_6c4b91.typo.label : v_ef658a.small,
      measurementItemValue: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
      measurementItemUnit: v_76eb7f ? Math.max(12, v_6c4b91.typo.label - 1) : 10,
      measurementItemDesc: v_76eb7f ? v_6c4b91.typo.label : 11,
      statusBadge: v_76eb7f ? v_6c4b91.typo.label : 11,
      closeBtn: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
      deleteBtn: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
      loadMore: v_76eb7f ? v_6c4b91.typo.body : v_ef658a.medium,
    }),
    [v_76eb7f, v_6c4b91.typo]
  );
  const v_c65f5d = v_ada615();
  const [v_0af1e7, v_9e8c08] = v_5ab095<'calendar' | 'list'>('list');
  const [v_0ab6f2, v_3a7c17] = v_5ab095(new Date());
  const [v_1835e1, v_f04d19] = v_5ab095<string | null>(null);
  const [v_b23082, v_725ee9] = v_5ab095(false);
  const [v_16e1dd, v_3e1334] = v_5ab095<string | null>(null);
  const [v_37dcee, v_10eb9c] = v_5ab095(v_488860);
  const [v_b66218, v_ab9961] = v_5ab095(0);
  const [v_a4994e, v_699388] = v_5ab095<HealthRecord | null>(null);
  const [v_e74174, v_8984bb] = v_5ab095(false);

  const [v_34779a, v_f1bcfc] = v_5ab095(false);
  const [v_71ebe4, v_0f550d] = v_5ab095<[HealthRecord | null, HealthRecord | null]>([null, null]);

  const [v_4dd592, v_b173ec] = v_5ab095<string | null>(null);

  const [v_678155, v_9ed182] = v_5ab095<HealthRecord[]>([]);
  const [v_cd31a8, v_deef62] = v_5ab095(false);
  const [v_95616f, v_885e0e] = v_5ab095<Error | null>(null);

  const [v_59bc21, v_00b5ba] = v_5ab095(false);

  v_c4deb2(() => {
    const v_efc1dd = async () => {
      v_deef62(true);
      v_885e0e(null);
      try {

        await v_bb8240().catch(() => {});

        const v_0c2f9b = v_c86f08?.find((v_9f1d92) => v_9f1d92.id === v_e7b2f2);
        const v_083682 = v_0c2f9b?.isCurrent === true;

        console.log('[HealthRecordsView] 건강 기록 로드 시작...', {
          selectedAccountId: v_e7b2f2,
          selectedAccount: v_0c2f9b ? JSON.stringify(v_0c2f9b, null, 2) : null,
          isMyAccount: v_083682,
          accountsCount: v_c86f08?.length || 0,
        });

        const v_ee2acd = v_083682
          ? undefined
          : v_e7b2f2 && v_e7b2f2.startsWith('sub-')
            ? v_e7b2f2.replace('sub-', '')
            : v_e7b2f2;
        console.log('[HealthRecordsView] API 호출 파라미터:', {
          subAccountId: v_ee2acd,
          isMyAccount: v_083682,
          willSendSubAccountId: !!v_ee2acd,
        });

        const v_1f4ef0 = await v_777b12(v_ee2acd);

        console.log('[HealthRecordsView] 건강 기록 로드 성공:', {
          count: v_1f4ef0.length,
          records: JSON.stringify(v_1f4ef0, null, 2),
        });

        const v_e21297 = v_1f4ef0.map(v_38756f);
        v_9ed182(v_e21297);
      } catch (v_5e9bfe) {
        console.error('[HealthRecordsView] 건강 기록 로드 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
        });

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

        v_885e0e(v_5e9bfe instanceof Error ? v_5e9bfe : new Error('건강 기록을 불러오는데 실패했습니다.'));
        v_9ed182([]); 
      } finally {
        v_deef62(false);
      }
    };

    v_efc1dd();
  }, [v_e7b2f2, v_c86f08, v_c65f5d]);

  const v_f7f9e2 = v_df9f57(() => {
    const v_8dcb51 = {};
    v_678155.forEach((v_cb35cb) => {
      if (!v_8dcb51[v_cb35cb.date]) v_8dcb51[v_cb35cb.date] = [];
      v_8dcb51[v_cb35cb.date].push(v_cb35cb);
    });
    Object.keys(v_8dcb51).forEach((v_d5dda0) => {
      v_8dcb51[v_d5dda0].sort((v_779914, v_148ff6) => v_779914.time.localeCompare(v_148ff6.time));
    });
    return v_8dcb51;
  }, [v_678155]);

  const v_384480 = v_df9f57(() => new Set(v_678155.map((v_cb35cb) => v_cb35cb.date)), [v_678155]);

  const v_00a76c = v_df9f57(
    () => v_678155.slice(0, v_37dcee),
    [v_678155, v_37dcee]
  );

  const v_cff7c3 = v_37dcee < v_678155.length;

  const v_f660ef = () => {
    v_10eb9c((v_ba2215) => Math.min(v_ba2215 + v_488860, v_678155.length));
  };

  const v_a787ee = v_df9f57(() => {
    const v_0eaaff = v_0ab6f2.getFullYear();
    const v_033a94 = v_0ab6f2.getMonth();
    const v_c9129b = new Date(v_0eaaff, v_033a94, 1);
    const v_4cb924 = new Date(v_0eaaff, v_033a94 + 1, 0);
    const v_4d988e = v_c9129b.getDay();
    const v_43142a = v_4cb924.getDate();

    const v_6a53fd = [];
    for (let v_ebec57 = 0; v_ebec57 < v_4d988e; v_ebec57++) v_6a53fd.push(null);
    for (let v_d5dda0 = 1; v_d5dda0 <= v_43142a; v_d5dda0++) v_6a53fd.push(v_d5dda0);

    return v_6a53fd;
  }, [v_0ab6f2]);

  const v_87e34a = () => {
    v_3a7c17((v_ba2215) => new Date(v_ba2215.getFullYear(), v_ba2215.getMonth() - 1));
  };

  const v_7cd6fe = () => {
    v_3a7c17((v_ba2215) => new Date(v_ba2215.getFullYear(), v_ba2215.getMonth() + 1));
  };

  const v_2af54e = (v_d5dda0) => {
    return v_8d41d7('common.year_month', { year: v_d5dda0.getFullYear(), month: v_d5dda0.getMonth() + 1 });
  };

  const v_c9c711 = (v_087ffc) => {
    if (!v_087ffc) return;
    const v_f8e6b9 = `${v_0ab6f2.getFullYear()}-${String(v_0ab6f2.getMonth() + 1).padStart(2, '0')}-${String(v_087ffc).padStart(2, '0')}`;
    if (!v_384480.has(v_f8e6b9)) return;

    const v_678155 = v_f7f9e2[v_f8e6b9] || [];
    if (v_678155.length === 1) {

      v_f04d19(v_f8e6b9);
      v_ab9961(0);
      v_725ee9(true);
    } else if (v_678155.length > 1) {

      v_b173ec(v_f8e6b9);
    }
  };

  const v_c3c410 = v_1835e1 ? (v_f7f9e2[v_1835e1] || []) : [];

  const v_884a36 = v_c3c410[v_b66218] ?? v_c3c410[0] ?? null;
  const v_8cc501 = v_a4994e ?? v_884a36;
  const v_b277c8 = v_c3c410.length > 1;
  const v_a144ca = v_b66218 > 0;
  const v_4a3fe8 = v_b66218 < v_c3c410.length - 1;

  const v_6a56d2 = () => {
    if (v_a144ca) v_ab9961((v_ebec57) => v_ebec57 - 1);
  };

  const v_f83132 = () => {
    if (v_4a3fe8) v_ab9961((v_ebec57) => v_ebec57 + 1);
  };

  v_c4deb2(() => {
    if (v_8cc501) v_3e1334(null);
  }, [v_8cc501?.id]);

  v_c4deb2(() => {
    const v_a715fa = async () => {
      if (!v_b23082 || !v_884a36) {
        v_699388(null);
        return;
      }

      v_8984bb(true);
      try {
        const v_fbf3b0 = parseInt(v_884a36.id, 10);
        if (isNaN(v_fbf3b0)) {
          console.warn('[HealthRecordsView] 유효하지 않은 기록 ID:', v_884a36.id);
          v_8984bb(false);
          return;
        }

        if (__DEV__) {
          console.log('[HealthRecordsView] 기록 상세 데이터 로드 시작:', { recordId: v_fbf3b0 });
        }

        const v_61f930 = await v_d531ea(v_fbf3b0);
        const v_3a28a5 = v_38756f(v_61f930);

        if (__DEV__) {
          console.log('[HealthRecordsView] 기록 상세 데이터 로드 성공:', {
            recordId: v_fbf3b0,
            hasVitalSigns: !!v_61f930.vital_signs,
            vitalSignsKeys: v_61f930.vital_signs ? Object.keys(v_61f930.vital_signs) : [],
          });
        }

        v_699388(v_3a28a5);
      } catch (v_5e9bfe) {
        console.error('[HealthRecordsView] 기록 상세 데이터 로드 실패:', v_5e9bfe);

        v_699388(null);
      } finally {
        v_8984bb(false);
      }
    };

    v_a715fa();
  }, [v_b23082, v_884a36?.id]);

  const v_16897e = (v_8dffde, v_f985e6) => {
    const [v_64877a, v_35f85c, v_d5dda0] = v_8dffde.split('-');
    const v_38e403 = parseInt(v_f985e6.split(':')[0], 10) >= 12;
    const v_a7745c = parseInt(v_f985e6.split(':')[0], 10) % 12 || 12;
    const v_43e24b = v_f985e6.split(':')[1];
    const v_591485 = v_38e403 ? v_8d41d7('common.time_pm') : v_8d41d7('common.time_am');
    return `${v_64877a}.${v_35f85c}.${v_d5dda0} ${v_591485} ${v_a7745c}:${v_43e24b}`;
  };

  const v_e5585e = (v_f985e6) => {
    const v_38e403 = parseInt(v_f985e6.split(':')[0], 10) >= 12;
    const v_a7745c = parseInt(v_f985e6.split(':')[0], 10) % 12 || 12;
    const v_43e24b = v_f985e6.split(':')[1];
    const v_591485 = v_38e403 ? v_8d41d7('common.time_pm') : v_8d41d7('common.time_am');
    return `${v_591485} ${v_a7745c}:${v_43e24b}`;
  };

  const v_54e295 = (v_a56041): 'high' | 'normal' | 'low' => {
    if (v_a56041 >= 7) return 'high';
    if (v_a56041 >= 4) return 'normal';
    return 'low';
  };

  const v_a75897 = v_71ebe4.filter(Boolean).length;
  const v_8c38ef = v_a75897 === 2;

  const v_2daa27 = () => {
    v_f1bcfc(true);
    v_0f550d([null, null]);
    v_b173ec(null);
  };

  const v_11e4ac = () => {
    v_f1bcfc(false);
    v_0f550d([null, null]);
    v_b173ec(null);
  };

  const v_66e2a0 = (v_cbbd71) => {
    v_0f550d((v_ba2215) => {
      if (v_ba2215[0] === null) return [v_cbbd71, v_ba2215[1]];
      if (v_ba2215[1] === null && v_ba2215[0].id !== v_cbbd71.id) return [v_ba2215[0], v_cbbd71];
      return v_ba2215;
    });
    v_b173ec(null);
  };

  const v_aa30b0 = (v_087ffc) => {
    if (!v_087ffc || !v_34779a) return;
    const v_f8e6b9 = `${v_0ab6f2.getFullYear()}-${String(v_0ab6f2.getMonth() + 1).padStart(2, '0')}-${String(v_087ffc).padStart(2, '0')}`;
    if (!v_384480.has(v_f8e6b9)) return;

    const v_678155 = v_f7f9e2[v_f8e6b9] || [];
    if (v_678155.length === 1) {
      v_66e2a0(v_678155[0]);
    } else {
      v_b173ec(v_f8e6b9);
    }
  };

  const v_5b20f5 = (v_cbbd71) => {
    if (v_34779a) {
      v_66e2a0(v_cbbd71);
    } else {
      const v_3e15d3 = v_f7f9e2[v_cbbd71.date] || [];
      const v_e86ad8 = v_3e15d3.findIndex((v_cb35cb) => v_cb35cb.id === v_cbbd71.id);
      v_f04d19(v_cbbd71.date);
      v_ab9961(v_e86ad8 >= 0 ? v_e86ad8 : 0);
      v_725ee9(true);
    }
  };

  const v_fbead4 = () => {
    if (v_71ebe4[0] && v_71ebe4[1] && v_bda358) {
      v_bda358([v_71ebe4[0], v_71ebe4[1]]);
      v_11e4ac();
    }
  };

  const v_6043f5 = (v_f8e6b9) => {
    return v_71ebe4.some((v_cb35cb) => v_cb35cb?.date === v_f8e6b9);
  };

  const v_a8e397 = (v_cbbd71) => {
    return v_71ebe4.some((v_cb35cb) => v_cb35cb?.id === v_cbbd71.id);
  };

  const v_a8b630 = (v_cbbd71) => {
    v_03e392.alert(
      v_8d41d7('health_records.delete_confirm_title', '기록 삭제'),
      v_8d41d7('health_records.delete_confirm_message', '이 측정 기록을 삭제하시겠습니까? 삭제된 기록은 복구할 수 없습니다.'),
      [
        {
          text: v_8d41d7('health_records.cancel', '취소'),
          style: 'cancel',
        },
        {
          text: v_8d41d7('health_records.delete', '삭제'),
          style: 'destructive',
          onPress: async () => {
            const v_fbf3b0 = parseInt(v_cbbd71.id, 10);
            if (isNaN(v_fbf3b0)) return;
            v_00b5ba(true);
            try {
              await v_a44133(v_fbf3b0);

              v_9ed182((v_ba2215) => v_ba2215.filter((v_cb35cb) => v_cb35cb.id !== v_cbbd71.id));
              v_725ee9(false);
              v_3e1334(null);
              v_b173ec(null);
            } catch (v_5e9bfe) {
              v_03e392.alert(
                v_8d41d7('health_records.delete_error_title', '삭제 실패'),
                v_8d41d7('health_records.delete_error_message', '기록 삭제에 실패했습니다. 잠시 후 다시 시도해 주세요.'),
              );
            } finally {
              v_00b5ba(false);
            }
          },
        },
      ],
    );
  };

  return (
    <>
    <CenteredContentShell backgroundColor={v_1bfbd0.background}>
      {}
      <View style={v_d81136.viewModeRow}>
        <TouchableOpacity
          style={[v_d81136.viewModeBtn, v_0af1e7 === 'list' && v_d81136.viewModeBtnActive]}
          onPress={() => v_9e8c08('list')}
        >
          <Ionicons
            name="list-outline"
            size={18}
            color={v_0af1e7 === 'list' ? '#fff' : v_1bfbd0.secondaryText}
          />
          <Text style={[v_d81136.viewModeText, v_0af1e7 === 'list' && v_d81136.viewModeTextActive]}>
            {v_8d41d7('health_records.list')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[v_d81136.viewModeBtn, v_0af1e7 === 'calendar' && v_d81136.viewModeBtnActive]}
          onPress={() => v_9e8c08('calendar')}
        >
          <Ionicons
            name="calendar-outline"
            size={18}
            color={v_0af1e7 === 'calendar' ? '#fff' : v_1bfbd0.secondaryText}
          />
          <Text style={[v_d81136.viewModeText, v_0af1e7 === 'calendar' && v_d81136.viewModeTextActive]}>
            {v_8d41d7('health_records.calendar')}
          </Text>
        </TouchableOpacity>
      </View>

      {}
      {v_34779a ? (
        <View style={v_d81136.compareModeBar}>
          <Text style={v_d81136.compareModeCount}>
            {v_8d41d7('health_records.compare_selected', { count: v_a75897, total: 2 })}
          </Text>
          <View style={v_d81136.compareModeActions}>
            <TouchableOpacity style={v_d81136.compareCancelBtn} onPress={v_11e4ac}>
              <Text style={v_d81136.compareCancelText}>{v_8d41d7('health_records.cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[v_d81136.compareConfirmBtn, !v_8c38ef && v_d81136.compareConfirmBtnDisabled]}
              onPress={v_fbead4}
              disabled={!v_8c38ef}
            >
              <Text style={[v_d81136.compareConfirmText, !v_8c38ef && v_d81136.compareConfirmTextDisabled]}>
                {v_8d41d7('health_records.compare_btn')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <GradientButton
          title={v_8d41d7('health_records.start_comparative_analysis')}
          leftIcon={<Ionicons name="git-compare-outline" size={20} color="#fff" />}
          rightIcon={<Ionicons name="sparkles-outline" size={16} color="#fff" />}
          colors={['#615FFF', '#AD46FF']}
          onPress={v_2daa27}
          style={v_d81136.compareBtn}
        />
      )}

      {v_0af1e7 === 'calendar' ? (
        <>
          {}
          <View style={v_d81136.calendarCard}>
            <View style={v_d81136.calendarHeader}>
              <TouchableOpacity onPress={v_87e34a} style={v_d81136.monthNavBtn} hitSlop={12}>
                <Ionicons name="chevron-back" size={22} color={v_1bfbd0.text} />
              </TouchableOpacity>
              <Text style={v_d81136.monthNavText}>{v_2af54e(v_0ab6f2)}</Text>
              <TouchableOpacity onPress={v_7cd6fe} style={v_d81136.monthNavBtn} hitSlop={12}>
                <Ionicons name="chevron-forward" size={22} color={v_1bfbd0.text} />
              </TouchableOpacity>
            </View>

            <View style={v_d81136.weekRow}>
              {v_173689.map((v_b24339) => (
                <View key={v_b24339} style={v_d81136.weekCell}>
                  <Text style={v_d81136.weekRowText}>{v_8d41d7(`common.${v_b24339}`)}</Text>
                </View>
              ))}
            </View>

            <View style={v_d81136.daysGrid}>
              {v_a787ee.map((v_087ffc, v_e86ad8) => {
                const v_f8e6b9 =
                  v_087ffc != null
                    ? `${v_0ab6f2.getFullYear()}-${String(v_0ab6f2.getMonth() + 1).padStart(2, '0')}-${String(v_087ffc).padStart(2, '0')}`
                    : '';
                const v_68476a = v_f8e6b9 ? v_384480.has(v_f8e6b9) : false;
                const v_599a41 = v_34779a ? v_6043f5(v_f8e6b9) : v_1835e1 === v_f8e6b9;
                const v_6e3315 = v_4dd592 === v_f8e6b9;

                return (
                  <TouchableOpacity
                    key={v_e86ad8}
                    style={[
                      v_d81136.dayCell,
                      v_599a41 && v_d81136.dayCellSelected,
                      v_6e3315 && v_d81136.dayCellPending,
                    ]}
                    onPress={() =>
                      v_34779a ? v_aa30b0(v_087ffc) : v_c9c711(v_087ffc)
                    }
                    disabled={!v_087ffc}
                  >
                    {v_087ffc != null ? (
                      <>
                        <Text style={[v_d81136.dayText, !v_68476a && v_d81136.dayTextMuted]}>{v_087ffc}</Text>
                        {v_68476a && <View style={v_d81136.dataDot} />}
                      </>
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {}
          {v_4dd592 && (
            <View style={v_d81136.timePickSection}>
              <Text style={v_d81136.timePickTitle}>
                {v_8d41d7('health_records.select_time_for', {
                  date: v_4dd592.replace(/-/g, '.'),
                })}
              </Text>
              <View style={v_d81136.timePickOptions}>
                {(v_f7f9e2[v_4dd592] || []).map((v_94a7a9) => (
                  <TouchableOpacity
                    key={v_94a7a9.id}
                    style={v_d81136.timePickOption}
                    onPress={() => {
                      if (v_34779a) {
                        v_66e2a0(v_94a7a9);
                      } else {

                        const v_678155 = v_f7f9e2[v_4dd592] || [];
                        const v_e86ad8 = v_678155.findIndex((v_cb35cb) => v_cb35cb.id === v_94a7a9.id);
                        v_f04d19(v_4dd592);
                        v_ab9961(v_e86ad8 >= 0 ? v_e86ad8 : 0);
                        v_b173ec(null);
                        v_725ee9(true);
                      }
                    }}
                  >
                    <Text style={v_d81136.timePickOptionText}>{v_e5585e(v_94a7a9.time)}</Text>
                    <Text style={v_d81136.timePickOptionSub}>{v_94a7a9.healthIndex}/10</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </>
      ) : (

        <ScrollView style={v_d81136.listScroll} contentContainerStyle={v_d81136.listContent}>
          {v_cd31a8 ? (
            <View style={v_d81136.loadingContainer}>
              <ActivityIndicator size="large" color={v_1bfbd0.primary} />
              <Text style={v_d81136.loadingText}>{v_8d41d7('common.loading', '로딩 중...')}</Text>
            </View>
          ) : v_95616f ? (
            <View style={v_d81136.errorContainer}>
              <Ionicons name="alert-circle-outline" size={48} color={v_1bfbd0.error} />
              <Text style={v_d81136.errorText}>{v_95616f.message}</Text>
              <TouchableOpacity
                style={v_d81136.retryButton}
                onPress={() => {
                  const v_ee2acd = v_e7b2f2 && v_e7b2f2 !== 'me' ? v_e7b2f2 : undefined;
                  v_deef62(true);
                  v_885e0e(null);
                  v_777b12(v_ee2acd)
                    .then((v_1f4ef0) => {
                      const v_e21297 = v_1f4ef0.map(v_38756f);
                      v_9ed182(v_e21297);
                      v_885e0e(null);
                    })
                    .catch((v_5e9bfe) => {
                      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
                        return;
                      }
                      v_885e0e(v_5e9bfe instanceof Error ? v_5e9bfe : new Error('건강 기록을 불러오는데 실패했습니다.'));
                    })
                    .finally(() => {
                      v_deef62(false);
                    });
                }}
              >
                <Text style={v_d81136.retryButtonText}>{v_8d41d7('common.retry', '다시 시도')}</Text>
              </TouchableOpacity>
            </View>
          ) : v_00a76c.length === 0 ? (
            <View style={v_d81136.emptyContainer}>
              <Ionicons name="calendar-outline" size={48} color={v_1bfbd0.secondaryText} />
              <Text style={v_d81136.emptyText}>{v_8d41d7('health_records.no_records', '기록이 없습니다.')}</Text>
            </View>
          ) : (
            v_00a76c.map((v_cbbd71) => {
              const v_d308b5 = v_54e295(v_cbbd71.healthIndex);
              const v_599a41 = v_34779a && v_a8e397(v_cbbd71);
              return (
                <TouchableOpacity
                  key={v_cbbd71.id}
                  style={[v_d81136.listItem, v_599a41 && v_d81136.listItemSelected]}
                  onPress={() => v_5b20f5(v_cbbd71)}
                >
                  <View style={v_d81136.listItemLeft}>
                    <Text style={[v_d81136.listItemDate, { fontSize: v_c0b708.listDate }]}>{v_cbbd71.date.replace(/-/g, '.')}</Text>
                    <Text style={[v_d81136.listItemTime, { fontSize: v_c0b708.listTime }]}>{v_e5585e(v_cbbd71.time)}</Text>
                  </View>
                  <View style={v_d81136.listItemRight}>
                    <Text style={[v_d81136.listItemValue, { fontSize: v_c0b708.listValue }]}>{v_cbbd71.healthIndex}</Text>
                    <View
                      style={[
                        v_d81136.listItemBadge,
                        v_d308b5 === 'high' && v_d81136.listItemBadgeHigh,
                        v_d308b5 === 'normal' && v_d81136.listItemBadgeNormal,
                        v_d308b5 === 'low' && v_d81136.listItemBadgeLow,
                      ]}
                    >
                      <Text
                        style={[
                          v_d81136.listItemBadgeText,
                          { fontSize: v_c0b708.listBadge },
                          v_d308b5 === 'high' && v_d81136.listItemBadgeTextLight,
                        ]}
                      >
                        {v_8d41d7(`health_records.list_status_${v_d308b5}`)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
          {!v_cd31a8 && !v_95616f && v_678155.length > v_488860 && v_cff7c3 && (
            <TouchableOpacity style={v_d81136.loadMoreBtn} onPress={v_f660ef}>
              <Text style={[v_d81136.loadMoreText, { fontSize: v_c0b708.loadMore }]}>{v_8d41d7('health_records.load_more')}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}

    </CenteredContentShell>

      {}
      <Modal
        visible={v_b23082}
        animationType={v_76eb7f ? 'fade' : 'slide'}
        transparent
        onRequestClose={() => {
          v_725ee9(false);
          v_3e1334(null);
          v_b173ec(null);
        }}
      >
        <View style={[v_d81136.modalOverlay, v_76eb7f && v_d81136.modalOverlayTablet]}>
          <Pressable
            style={v_76eb7f ? v_d81136.modalOverlayDim : v_d81136.modalOverlayDimMobile}
            onPress={() => {
              v_725ee9(false);
              v_3e1334(null);
              v_b173ec(null);
            }}
          />
          <View
            style={[
              v_d81136.modalContent,
              v_76eb7f ? v_d81136.modalContentTablet : v_d81136.modalContentMobile,
              v_76eb7f
                ? { maxWidth: v_6c4b91.contentColumnWidth, maxHeight: v_3fa560, alignSelf: 'center' }
                : { paddingBottom: v_9b1a04.large + v_033e14.bottom },
            ]}
          >
            {v_e74174 ? (
              <View style={v_d81136.modalLoadingContainer}>
                <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                <Text style={v_d81136.loadingText}>데이터를 불러오는 중...</Text>
              </View>
            ) : v_8cc501 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={v_d81136.modalScrollContent}
              >
                {}
                <View style={v_d81136.detailTimestampRow}>
                  {v_b277c8 ? (
                    <TouchableOpacity
                      style={[v_d81136.navRecordBtn, !v_a144ca && v_d81136.navRecordBtnDisabled]}
                      onPress={v_6a56d2}
                      disabled={!v_a144ca}
                    >
                      <Ionicons name="chevron-back" size={24} color={v_a144ca ? v_1bfbd0.text : v_1bfbd0.border} />
                      <Text style={[v_d81136.navRecordText, { fontSize: v_c0b708.navBtn }, !v_a144ca && v_d81136.navRecordTextDisabled]}>
                        {v_8d41d7('health_records.prev')}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={v_d81136.navRecordBtnPlaceholder} />
                  )}
                  <Text style={[v_d81136.detailTimestamp, { fontSize: v_c0b708.detailTimestamp }]} numberOfLines={1}>
                    {v_16897e(v_8cc501.date, v_8cc501.time)}
                  </Text>
                  {v_b277c8 ? (
                    <TouchableOpacity
                      style={[v_d81136.navRecordBtn, !v_4a3fe8 && v_d81136.navRecordBtnDisabled]}
                      onPress={v_f83132}
                      disabled={!v_4a3fe8}
                    >
                      <Text style={[v_d81136.navRecordText, { fontSize: v_c0b708.navBtn }, !v_4a3fe8 && v_d81136.navRecordTextDisabled]}>
                        {v_8d41d7('health_records.next')}
                      </Text>
                      <Ionicons name="chevron-forward" size={24} color={v_4a3fe8 ? v_1bfbd0.text : v_1bfbd0.border} />
                    </TouchableOpacity>
                  ) : (
                    <View style={v_d81136.navRecordBtnPlaceholder} />
                  )}
                </View>

                {}
                <View style={v_d81136.healthIndexSection}>
                  <View style={v_d81136.healthIndexRow}>
                    <View style={v_d81136.healthIndexCenter}>
                      <View style={[v_d81136.healthIndexCircle, { width: v_e05613, height: v_e05613 }]}>
                        <HealthIndexRing value={v_8cc501.healthIndex} max={10} size={v_e05613} />
                        <Text style={[v_d81136.healthIndexValue, { fontSize: v_c0b708.healthIndexValue }]}>{v_8cc501.healthIndex}/10</Text>
                      </View>
                      <Text style={[v_d81136.healthIndexLabel, { fontSize: v_c0b708.healthIndexLabel }]}>{v_326be8.OS === 'ios' ? v_8d41d7('health_records.health_index_ios') : v_8d41d7('health_records.health_index')}</Text>
                      <Text style={[v_d81136.healthIndexStatus, { fontSize: v_c0b708.healthIndexStatus }]}>
                        {v_8d41d7(`health_records.list_status_${v_54e295(v_8cc501.healthIndex)}`)}
                      </Text>
                    </View>
                  </View>
                </View>

                {}
                <Text style={[v_d81136.measurementItemsTitle, { fontSize: v_c0b708.measurementItemsTitle }]}>{v_326be8.OS === 'ios' ? v_8d41d7('health_records.measurement_items_ios') : v_8d41d7('health_records.measurement_items')}</Text>
                {v_ac1ebb().map((v_b4fa6c) => {
                  const v_2afa46 = v_8cc501.items.filter((v_8c0b26) =>
                    v_b4fa6c.itemKeys.includes(v_8c0b26.key),
                  );
                  if (v_2afa46.length === 0) return null;

                  return (
                    <View key={v_b4fa6c.sectionKey} style={v_d81136.measurementSection}>
                      <Text style={[v_d81136.measurementSectionTitle, { fontSize: v_c0b708.measurementSectionTitle }]}>
                        {}
                        {v_326be8.OS === 'ios'
                          ? v_8d41d7(`health_records.${v_b4fa6c.sectionKey}_ios`, v_8d41d7(`health_records.${v_b4fa6c.sectionKey}`))
                          : v_8d41d7(`health_records.${v_b4fa6c.sectionKey}`)}
                      </Text>
                      <View style={v_d81136.measurementItemsGrid}>
                        {v_2afa46.map((v_8c0b26) => {
                          const v_16e592 = v_8c0b26.descKey ? `health_analysis.vitals.${v_8c0b26.descKey}` : null;
                          const v_6856a9 = v_16e592 ? v_8d41d7(v_16e592) : '';
                          const v_e0061e = v_16e1dd === v_8c0b26.key;

                          return (
                            <View key={v_8c0b26.key} style={v_d81136.measurementItemCard}>
                              <View style={v_d81136.measurementItemHeader}>
                                <Text style={[v_d81136.measurementItemLabel, { fontSize: v_c0b708.measurementItemLabel }]}>
                                  {v_8d41d7(`health_analysis.vitals.${v_8c0b26.labelKey}`)}
                                </Text>
                                {v_16e592 && (
                                  <TouchableOpacity
                                    hitSlop={8}
                                    onPress={() => v_3e1334(v_e0061e ? null : v_8c0b26.key)}
                                  >
                                    <Ionicons
                                      name="information-circle-outline"
                                      size={16}
                                      color={v_e0061e ? v_1bfbd0.bluePrimary : v_1bfbd0.iconMuted}
                                    />
                                  </TouchableOpacity>
                                )}
                              </View>
                              <View style={v_d81136.measurementValueRow}>
                                <View style={v_d81136.measurementValueLeft}>
                                  <Text style={[v_d81136.measurementItemValue, { fontSize: v_c0b708.measurementItemValue }]}>{v_8c0b26.value}</Text>
                                  {v_8c0b26.unit && (
                                    <Text style={[v_d81136.measurementItemUnit, { fontSize: v_c0b708.measurementItemUnit }]}>{v_8c0b26.unit}</Text>
                                  )}
                                </View>
                                <View
                                  style={[
                                    v_d81136.statusBadge,
                                    v_8c0b26.status === 'risk' ? v_d81136.statusBadgeRisk : v_d81136.statusBadgeNormal,
                                  ]}
                                >
                                  <Text
                                    style={[
                                      v_d81136.statusBadgeText,
                                      { fontSize: v_c0b708.statusBadge },
                                      v_8c0b26.status === 'risk' ? v_d81136.statusBadgeTextRisk : v_d81136.statusBadgeTextNormal,
                                    ]}
                                  >
                                    {v_8c0b26.status === 'risk' ? (v_326be8.OS === 'ios' ? v_8d41d7('health_records.status_risk_ios') : v_8d41d7('health_records.status_risk')) : v_8d41d7('health_records.status_normal')}
                                  </Text>
                                </View>
                              </View>
                              {v_e0061e && v_6856a9 ? (
                                <Text style={[v_d81136.measurementItemDesc, { fontSize: v_c0b708.measurementItemDesc }]}>{v_6856a9}</Text>
                              ) : null}
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  );
                })}

                {}
                {v_8cc501 && (
                  <TouchableOpacity
                    style={v_d81136.deleteRecordBtn}
                    onPress={() => v_a8b630(v_8cc501)}
                    disabled={v_59bc21}
                    accessibilityRole="button"
                    accessibilityLabel={v_8d41d7('health_records.delete_confirm_title', '기록 삭제')}
                  >
                    {v_59bc21 ? (
                      <ActivityIndicator size="small" color="#E53935" />
                    ) : (
                      <>
                        <Ionicons name="trash-outline" size={16} color="#E53935" />
                        <Text style={[v_d81136.deleteRecordBtnText, { fontSize: v_c0b708.deleteBtn }]}>
                          {v_8d41d7('health_records.delete_record', '기록 삭제')}
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={v_d81136.closeBtn}
                  onPress={() => {
                    v_725ee9(false);
                    v_3e1334(null);
                    v_b173ec(null);
                  }}
                >
                  <Text style={[v_d81136.closeBtnText, { fontSize: v_c0b708.closeBtn }]}>{v_8d41d7('health_records.close')}</Text>
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </View>
      </Modal>
    </>
  );
};

function v_3ec516({ value: v_3b402b, max: v_d2c6bf, size: v_05b441 = 80 }: { value: number; max: number; size?: number }) {
  const v_474580 = 8;
  const v_0c21c9 = (v_05b441 - v_474580) / 2;
  const v_0288f8 = v_05b441 / 2;
  const v_65e020 = 2 * Math.PI * v_0c21c9;

  const v_812146 = (v_fd5f43): number => {
    if (v_fd5f43 <= 3) return (v_fd5f43 / 3) * 0.33;
    if (v_fd5f43 <= 6) return 0.33 + ((v_fd5f43 - 4) / 3) * 0.33;
    return 0.66 + ((v_fd5f43 - 7) / 3) * 0.34;
  };
  const v_09e739 = v_812146(v_3b402b);
  const v_4b6102 = -Math.PI / 2 + v_09e739 * 2 * Math.PI;
  const v_e75d3b = v_0288f8 + v_0c21c9 * Math.cos(v_4b6102);
  const v_576627 = v_0288f8 + v_0c21c9 * Math.sin(v_4b6102);
  const v_5bc297 = v_3b402b <= 3 ? '#DC2626' : v_3b402b <= 6 ? '#FBBF24' : '#22C55E';

  return (
    <Svg width={v_05b441} height={v_05b441} style={{ position: 'absolute' }}>
      {[
        { color: '#DC2626', start: 0, len: 0.33 },
        { color: '#FBBF24', start: 0.33, len: 0.33 },
        { color: '#22C55E', start: 0.66, len: 0.34 },
      ].map(({ color: v_3c2a3a, start: v_965edf, len: v_fe889f }) => (
        <Circle
          key={v_3c2a3a}
          cx={v_0288f8}
          cy={v_0288f8}
          r={v_0c21c9}
          stroke={v_3c2a3a}
          strokeWidth={v_474580}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${v_65e020 * v_fe889f} ${v_65e020 * (1 - v_fe889f)}`}
          strokeDashoffset={-v_65e020 * v_965edf}
          transform={`rotate(-90 ${v_0288f8} ${v_0288f8})`}
        />
      ))}
      <Circle cx={v_e75d3b} cy={v_576627} r={4} fill={v_5bc297} stroke="#FFFFFF" strokeWidth={2} />
    </Svg>
  );
}

const v_d81136 = v_472849.create({
  viewModeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    justifyContent: 'center',
  },
  viewModeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  viewModeBtnActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  viewModeText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  viewModeTextActive: {
    color: '#fff',
  },
  compareModeBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  compareModeCount: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  compareModeActions: {
    flexDirection: 'row',
    gap: 8,
  },
  compareCancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  compareCancelText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  compareConfirmBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: v_1bfbd0.bluePrimary,
    borderRadius: 8,
  },
  compareConfirmBtnDisabled: {
    backgroundColor: v_1bfbd0.border,
  },
  compareConfirmText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: '#fff',
  },
  compareConfirmTextDisabled: {
    color: v_1bfbd0.secondaryText,
  },
  timePickSection: {
    marginTop: v_9b1a04.medium,
    padding: v_9b1a04.medium,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  timePickTitle: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  timePickOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timePickOption: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  timePickOptionText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  timePickOptionSub: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
  listItemSelected: {
    backgroundColor: '#E3F2FD',
    borderColor: v_1bfbd0.bluePrimary,
  },
  compareBtn: {
    marginBottom: v_9b1a04.large,
  },
  calendarCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.medium,
  },
  monthNavBtn: {
    padding: 4,
  },
  monthNavText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: v_9b1a04.small,
  },
  weekCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekRowText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  dayCellSelected: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  dayCellPending: {
    borderWidth: 2,
    borderColor: v_1bfbd0.bluePrimary,
  },
  dayText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  dayTextMuted: {
    color: v_1bfbd0.secondaryText,
  },
  dataDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: v_1bfbd0.bluePrimary,
    marginTop: 2,
  },
  listScroll: {
    flex: 1,
  },
  listContent: {
    paddingBottom: v_9b1a04.xlarge,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: v_9b1a04.medium,
    borderRadius: 12,
    marginBottom: v_9b1a04.small,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  listItemLeft: {
    flex: 1,
  },
  listItemDate: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  listItemTime: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
  listItemRight: {
    alignItems: 'flex-end',
  },
  listItemValue: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  listItemBadge: {
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  listItemBadgeHigh: {
    backgroundColor: '#22C55E',
  },
  listItemBadgeNormal: {
    backgroundColor: '#FEF3C7',
  },
  listItemBadgeLow: {
    backgroundColor: '#FEE2E2',
  },
  listItemBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  listItemBadgeTextLight: {
    color: '#fff',
  },
  loadMoreBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.large,
    marginTop: v_9b1a04.small,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  loadMoreText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.bluePrimary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlayTablet: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
  },
  modalOverlayDim: {
    ...v_472849.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalOverlayDimMobile: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalLoadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: v_9b1a04.xlarge,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    padding: v_9b1a04.large,
  },
  modalContentMobile: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '85%',
  },
  modalContentTablet: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalScrollContent: {
    flexGrow: 0,
    paddingBottom: v_9b1a04.xlarge,
  },
  detailTimestampRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.large,
  },
  detailTimestamp: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
  },
  healthIndexSection: {
    marginBottom: v_9b1a04.xlarge,
  },
  healthIndexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  healthIndexCenter: {
    alignItems: 'center',
  },
  navRecordBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 70,
  },
  navRecordBtnDisabled: {
    opacity: 0.4,
  },
  navRecordBtnPlaceholder: {
    width: 70,
  },
  navRecordText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    marginHorizontal: 4,
  },
  navRecordTextDisabled: {
    color: v_1bfbd0.border,
  },
  healthIndexCircle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.small,
  },
  healthIndexValue: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    position: 'absolute',
  },
  healthIndexLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  healthIndexStatus: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#4CAF50',
    marginTop: 2,
  },
  measurementItemsTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  measurementSection: {
    marginBottom: v_9b1a04.large,
  },
  measurementSectionTitle: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small,
    paddingLeft: 2,
  },
  measurementItemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: v_9b1a04.small,
  },
  measurementItemCard: {
    width: '48%',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  measurementItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  measurementItemLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  measurementValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  measurementValueLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  measurementItemValue: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  measurementItemUnit: {
    fontSize: 10,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  measurementItemDesc: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 16,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  statusBadgeNormal: {
    backgroundColor: '#E8F5E9',
  },
  statusBadgeRisk: {
    backgroundColor: '#FFEBEE',
  },
  statusBadgeText: {
    fontSize: 11,
    fontFamily: v_843035.medium,
  },
  statusBadgeTextNormal: {
    color: '#4CAF50',
  },
  statusBadgeTextRisk: {
    color: '#E53935',
  },
  closeBtn: {
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: v_1bfbd0.border,
    borderRadius: 10,
  },
  closeBtnText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },

  deleteRecordBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    marginBottom: v_9b1a04.small,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    backgroundColor: '#FFF5F5',
  },
  deleteRecordBtnText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#E53935',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.xlarge * 2,
  },
  loadingText: {
    marginTop: v_9b1a04.medium,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.xlarge * 2,
    paddingHorizontal: v_9b1a04.large,
  },
  errorText: {
    marginTop: v_9b1a04.medium,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.error,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    backgroundColor: v_1bfbd0.primary,
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.white,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.xlarge * 2,
  },
  emptyText: {
    marginTop: v_9b1a04.medium,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
});
