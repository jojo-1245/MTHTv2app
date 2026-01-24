import v_a3453e, { v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_aa7413,
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_cf9c33,
  v_122070,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_bf60de, v_cd1400, v_5ade23, v_79a794 } from 'vpztcxjmsfanunln';
import { v_729608, v_570c34, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_ef658a, v_9b1a04, v_d8cb4d } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_723f2d } from '../../utils';

type InfoModalType = 'wellnessIndex' | 'wellnessLevel' | null;

type SummaryStatusType = 'excellent' | 'good' | 'normal' | 'warning' | 'danger';

interface SummaryStatusInfo {
  type: SummaryStatusType;
  message: string;
  icon: keyof typeof v_25515d.glyphMap;
  color: string;
  borderColor: string;
  backgroundColor: string;
}

type Props = v_432191<v_8ad91b, 'HealthAnalysisResult'>;

type GroupStatus = '정상' | '위험';

interface GroupSectionItem {
  typeNum: number;
  label?: string;
  detailTypes?: number[];
}

interface GroupSection {
  id: string;
  title: string;
  items: GroupSectionItem[];
}

const v_50f905 = (v_3b27d9, v_8d41d7): string => {
  const v_f2dfb8 = {
    [v_e3e816.PULSE_RATE]: v_8d41d7('health_analysis.vitals.pulse_rate'),
    [v_e3e816.RESPIRATION_RATE]: v_8d41d7('health_analysis.vitals.respiration_rate'),
    [v_e3e816.OXYGEN_SATURATION]: v_8d41d7('health_analysis.vitals.oxygen_saturation'),
    [v_e3e816.BLOOD_PRESSURE]: v_8d41d7('health_analysis.vitals.blood_pressure'),
    [v_e3e816.WELLNESS_INDEX]: v_8d41d7('health_analysis.vitals.wellness_index'),
    [v_e3e816.WELLNESS_LEVEL]: v_8d41d7('health_analysis.vitals.wellness_level'),
    [v_e3e816.HEART_AGE]: v_8d41d7('health_analysis.vitals.heart_age'),
    [v_e3e816.SDNN]: v_8d41d7('health_analysis.vitals.sdnn'),
    [v_e3e816.STRESS_LEVEL]: v_8d41d7('health_analysis.vitals.stress_level'),
    [v_e3e816.RRI]: v_8d41d7('health_analysis.vitals.rri'),
    [v_e3e816.STRESS_INDEX]: v_8d41d7('health_analysis.vitals.stress_index'),
    [v_e3e816.MEAN_RRI]: v_8d41d7('health_analysis.vitals.mean_rri'),
    [v_e3e816.RMSSD]: v_8d41d7('health_analysis.vitals.rmssd'),
    [v_e3e816.SD1]: v_8d41d7('health_analysis.vitals.sd1'),
    [v_e3e816.SD2]: v_8d41d7('health_analysis.vitals.sd2'),
    [v_e3e816.PRQ]: v_8d41d7('health_analysis.vitals.prq'),
    [v_e3e816.PNS_INDEX]: v_8d41d7('health_analysis.vitals.pns_index'),
    [v_e3e816.PNS_ZONE]: v_8d41d7('health_analysis.vitals.pns_zone'),
    [v_e3e816.SNS_INDEX]: v_8d41d7('health_analysis.vitals.sns_index'),
    [v_e3e816.SNS_ZONE]: v_8d41d7('health_analysis.vitals.sns_zone'),
    [v_e3e816.LFHF]: v_8d41d7('health_analysis.vitals.lfhf'),
    [v_e3e816.HEMOGLOBIN]: v_8d41d7('health_analysis.vitals.hemoglobin'),
    [v_e3e816.HEMOGLOBIN_A1C]: v_8d41d7('health_analysis.vitals.hemoglobin_a1c'),
    [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: v_8d41d7('health_analysis.vitals.high_hemoglobin_a1c_risk'),
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: v_8d41d7('health_analysis.vitals.high_blood_pressure_risk'),
    [v_e3e816.ASCVD_RISK]: v_8d41d7('health_analysis.vitals.ascvd_risk'),
    [v_e3e816.NORMALIZED_STRESS_INDEX]: v_8d41d7('health_analysis.vitals.normalized_stress_index'),
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: v_8d41d7('health_analysis.vitals.high_total_cholesterol_risk'),
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: v_8d41d7('health_analysis.vitals.high_fasting_glucose_risk'),
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: v_8d41d7('health_analysis.vitals.low_hemoglobin_risk'),
    [v_e3e816.ASCVD_RISK_LEVEL]: v_8d41d7('health_analysis.vitals.ascvd_risk_level'),
    [v_e3e816.MEAN_ARTERIAL_PRESSURE]: v_8d41d7('health_analysis.vitals.mean_arterial_pressure'),
    [v_e3e816.CARDIAC_WORKLOAD]: v_8d41d7('health_analysis.vitals.cardiac_workload'),
    [v_e3e816.PULSE_PRESSURE]: v_8d41d7('health_analysis.vitals.pulse_pressure'),
    [v_e3e816.BODY_TENSION_SCORE]: v_8d41d7('health_analysis.vitals.body_tension_score'),
  };
  return v_f2dfb8[v_3b27d9] || `Result (${v_3b27d9})`;
};

const v_2c4b08 = (v_3b27d9, v_8d41d7): string => {
  const v_394a2e = {
    [v_e3e816.PULSE_RATE]: v_8d41d7('health_analysis.vitals.pulse_rate_desc'),
    [v_e3e816.RESPIRATION_RATE]: v_8d41d7('health_analysis.vitals.respiration_rate_desc'),
    [v_e3e816.OXYGEN_SATURATION]: v_8d41d7('health_analysis.vitals.oxygen_saturation_desc'),
    [v_e3e816.BLOOD_PRESSURE]: v_8d41d7('health_analysis.vitals.blood_pressure_desc'),
    [v_e3e816.WELLNESS_INDEX]: v_8d41d7('health_analysis.vitals.wellness_index_desc'),
    [v_e3e816.WELLNESS_LEVEL]: v_8d41d7('health_analysis.vitals.wellness_level_desc'),
    [v_e3e816.HEART_AGE]: v_8d41d7('health_analysis.vitals.heart_age_desc'),
    [v_e3e816.SDNN]: v_8d41d7('health_analysis.vitals.sdnn_desc'),
    [v_e3e816.STRESS_LEVEL]: v_8d41d7('health_analysis.vitals.stress_level_desc'),
    [v_e3e816.RRI]: v_8d41d7('health_analysis.vitals.rri_desc'),
    [v_e3e816.STRESS_INDEX]: v_8d41d7('health_analysis.vitals.stress_index_desc'),
    [v_e3e816.MEAN_RRI]: v_8d41d7('health_analysis.vitals.mean_rri_desc'),
    [v_e3e816.RMSSD]: v_8d41d7('health_analysis.vitals.rmssd_desc'),
    [v_e3e816.SD1]: v_8d41d7('health_analysis.vitals.sd1_desc'),
    [v_e3e816.SD2]: v_8d41d7('health_analysis.vitals.sd2_desc'),
    [v_e3e816.PRQ]: v_8d41d7('health_analysis.vitals.prq_desc'),
    [v_e3e816.PNS_INDEX]: v_8d41d7('health_analysis.vitals.pns_index_desc'),
    [v_e3e816.PNS_ZONE]: v_8d41d7('health_analysis.vitals.pns_zone_desc'),
    [v_e3e816.SNS_INDEX]: v_8d41d7('health_analysis.vitals.sns_index_desc'),
    [v_e3e816.SNS_ZONE]: v_8d41d7('health_analysis.vitals.sns_zone_desc'),
    [v_e3e816.LFHF]: v_8d41d7('health_analysis.vitals.lfhf_desc'),
    [v_e3e816.HEMOGLOBIN]: v_8d41d7('health_analysis.vitals.hemoglobin_desc'),
    [v_e3e816.HEMOGLOBIN_A1C]: v_8d41d7('health_analysis.vitals.hemoglobin_a1c_desc'),
    [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: v_8d41d7('health_analysis.vitals.high_hemoglobin_a1c_risk_desc'),
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: v_8d41d7('health_analysis.vitals.high_blood_pressure_risk_desc'),
    [v_e3e816.ASCVD_RISK]: v_8d41d7('health_analysis.vitals.ascvd_risk_desc'),
    [v_e3e816.NORMALIZED_STRESS_INDEX]: v_8d41d7('health_analysis.vitals.normalized_stress_index_desc'),
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: v_8d41d7('health_analysis.vitals.high_total_cholesterol_risk_desc'),
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: v_8d41d7('health_analysis.vitals.high_fasting_glucose_risk_desc'),
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: v_8d41d7('health_analysis.vitals.low_hemoglobin_risk_desc'),
    [v_e3e816.ASCVD_RISK_LEVEL]: v_8d41d7('health_analysis.vitals.ascvd_risk_level_desc'),
    [v_e3e816.MEAN_ARTERIAL_PRESSURE]: v_8d41d7('health_analysis.vitals.mean_arterial_pressure_desc'),
    [v_e3e816.CARDIAC_WORKLOAD]: v_8d41d7('health_analysis.vitals.cardiac_workload_desc'),
    [v_e3e816.PULSE_PRESSURE]: v_8d41d7('health_analysis.vitals.pulse_pressure_desc'),
    [v_e3e816.BODY_TENSION_SCORE]: v_8d41d7('health_analysis.vitals.body_tension_score_desc'),
  };
  return v_394a2e[v_3b27d9] || v_8d41d7('health_analysis.vitals.default_desc');
};

interface RiskCriteria {
  low: string;
  medium: string;
  high: string;
  unit?: string;
}

const v_d4fb29 = {
  [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: {
    systolic: {
      low: '< 129',
      medium: '129-139',
      high: '>= 140',
      unit: 'mmHg',
    },
    diastolic: {
      low: '< 90',
      medium: '90-94',
      high: '>= 95',
      unit: 'mmHg',
    },
  },
  [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: {
    low: '< 6',
    medium: '6-6.4',
    high: '>= 6.5',
    unit: '%',
  },
  [v_e3e816.LOW_HEMOGLOBIN_RISK]: {
    low: '>= 12.0',
    medium: 'N/A',
    high: '< 12.0',
    unit: 'g/dL',
  },
  [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: {
    low: '<= 100',
    medium: 'N/A',
    high: '> 100',
    unit: 'mg/dL',
  },
  [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: {
    low: '<= 200',
    medium: '201-240',
    high: '>= 240',
    unit: 'mg/dL',
  },
};

const v_2f5a10 = (v_3b27d9): RiskCriteria | { systolic: RiskCriteria; diastolic: RiskCriteria } | null => {
  return v_d4fb29[v_3b27d9] || null;
};

const v_399d2c = (v_3b402b): GroupStatus | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (isNaN(v_549ed3)) {
    return null;
  }
  return v_549ed3 >= 3 ? '위험' : '정상';
};

const v_005339 = (v_3b402b): GroupStatus | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (isNaN(v_549ed3)) {
    return null;
  }
  return v_549ed3 === 1 ? '위험' : '정상';
};

const v_2e7086 = (v_3b27d9, v_3b402b, v_8d41d7): string | null => {
  const v_f4d1c2 = [
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.ASCVD_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];

  if (v_f4d1c2.includes(v_3b27d9)) {
    const v_842d09 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (v_842d09 === 1) {
      return v_8d41d7('health_analysis.result.risk_warning');
    } else if (v_842d09 === 0) {
      return v_8d41d7('health_analysis.result.risk_normal');
    }
  }

  return null;
};

const v_6d92d1 = (v_3b27d9, v_3b402b, v_8d41d7): SummaryStatusInfo | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);

  if (isNaN(v_549ed3)) {
    return null;
  }

  switch (v_3b27d9) {
    case v_e3e816.WELLNESS_INDEX:

      if (v_549ed3 >= 80) {
        return {
          type: 'excellent',
          message: v_8d41d7('health_analysis.result.status_excellent_wellness'),
          icon: 'checkmark-circle',
          ...v_d8cb4d.excellent,
        };
      } else if (v_549ed3 >= 60) {
        return {
          type: 'good',
          message: v_8d41d7('health_analysis.result.status_good_wellness'),
          icon: 'checkmark-circle-outline',
          ...v_d8cb4d.good,
        };
      } else if (v_549ed3 >= 40) {
        return {
          type: 'normal',
          message: v_8d41d7('health_analysis.result.status_normal_wellness'),
          icon: 'information-circle-outline',
          ...v_d8cb4d.normal,
        };
      } else {
        return {
          type: 'warning',
          message: v_8d41d7('health_analysis.result.status_warning_wellness'),
          icon: 'warning-outline',
          ...v_d8cb4d.warning,
        };
      }

    case v_e3e816.WELLNESS_LEVEL:

      if (v_549ed3 >= 4) {
        return {
          type: 'excellent',
          message: v_8d41d7('health_analysis.result.status_excellent_level'),
          icon: 'checkmark-circle',
          ...v_d8cb4d.excellent,
        };
      } else if (v_549ed3 >= 3) {
        return {
          type: 'good',
          message: v_8d41d7('health_analysis.result.status_good_level'),
          icon: 'checkmark-circle-outline',
          ...v_d8cb4d.good,
        };
      } else if (v_549ed3 >= 2) {
        return {
          type: 'normal',
          message: v_8d41d7('health_analysis.result.status_normal_level'),
          icon: 'information-circle-outline',
          ...v_d8cb4d.normal,
        };
      } else {
        return {
          type: 'warning',
          message: v_8d41d7('health_analysis.result.status_warning_level'),
          icon: 'warning-outline',
          ...v_d8cb4d.warning,
        };
      }

    case v_e3e816.HEART_AGE:

      if (v_549ed3 <= 30) {
        return {
          type: 'excellent',
          message: v_8d41d7('health_analysis.result.status_excellent_heart'),
          icon: 'checkmark-circle',
          ...v_d8cb4d.excellent,
        };
      } else if (v_549ed3 <= 40) {
        return {
          type: 'good',
          message: v_8d41d7('health_analysis.result.status_good_heart'),
          icon: 'checkmark-circle-outline',
          ...v_d8cb4d.good,
        };
      } else if (v_549ed3 <= 50) {
        return {
          type: 'normal',
          message: v_8d41d7('health_analysis.result.status_normal_heart'),
          icon: 'information-circle-outline',
          ...v_d8cb4d.normal,
        };
      } else if (v_549ed3 <= 60) {
        return {
          type: 'warning',
          message: v_8d41d7('health_analysis.result.status_warning_heart'),
          icon: 'warning-outline',
          ...v_d8cb4d.warning,
        };
      } else {
        return {
          type: 'danger',
          message: v_8d41d7('health_analysis.result.status_danger_heart'),
          icon: 'alert-circle',
          ...v_d8cb4d.danger,
        };
      }

    default:
      return null;
  }
};

const v_a6fe82 = (v_3b402b, v_3b27d9, v_8d41d7): string => {
  if (v_3b402b === null || v_3b402b === undefined) {
    return 'N/A';
  }

  if (v_3b27d9 === v_e3e816.RRI && Array.isArray(v_3b402b)) {
    if (v_3b402b.length === 0) {
      return 'N/A';
    }

    const v_4b5e5d = Math.min(v_3b402b.length, 5);
    const v_6d2b48 = v_3b402b.slice(0, v_4b5e5d).map((v_a4c14c) => {
      if (typeof v_a4c14c === 'object' && v_a4c14c.interval !== undefined) {
        return `${v_a4c14c.interval.toFixed(0)}`;
      }
      return String(v_a4c14c);
    });
    const v_87069f = v_3b402b.length > v_4b5e5d ? ` ${v_8d41d7('health_analysis.result.more_items', { count: v_3b402b.length - v_4b5e5d })}` : '';
    return `${v_6d2b48.join(', ')} ms${v_87069f}`;
  }

  if (v_3b27d9 === v_e3e816.BLOOD_PRESSURE && typeof v_3b402b === 'object' && !Array.isArray(v_3b402b)) {
    if (v_3b402b.systolic !== undefined && v_3b402b.diastolic !== undefined) {
      return `${v_3b402b.systolic || 'N/A'}/${v_3b402b.diastolic || 'N/A'} mmHg`;
    }
  }

  const v_f4d1c2 = [
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.ASCVD_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];
  if (v_f4d1c2.includes(v_3b27d9)) {
    const v_842d09 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);

    if (v_842d09 === 0 || v_842d09 === 1) {
      return v_842d09 === 1 ? v_8d41d7('health_analysis.result.risk') : v_8d41d7('health_analysis.result.normal');
    }

  }

  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (!isNaN(v_549ed3)) {

    if (v_3b27d9 === v_e3e816.PULSE_RATE) {
      return `${v_549ed3.toFixed(0)} bpm`;
    } else if (v_3b27d9 === v_e3e816.RESPIRATION_RATE) {
      return `${v_549ed3.toFixed(1)} /min`;
    } else if (v_3b27d9 === v_e3e816.OXYGEN_SATURATION) {
      return `${v_549ed3.toFixed(1)}%`;
    } else if (v_3b27d9 === v_e3e816.MEAN_RRI || v_3b27d9 === v_e3e816.RMSSD || v_3b27d9 === v_e3e816.SDNN || v_3b27d9 === v_e3e816.SD1 || v_3b27d9 === v_e3e816.SD2) {
      return `${v_549ed3.toFixed(1)} ms`;
    } else if (v_3b27d9 === v_e3e816.HEMOGLOBIN) {
      return `${v_549ed3.toFixed(1)} g/dL`;
    } else if (v_3b27d9 === v_e3e816.HEMOGLOBIN_A1C) {
      return `${v_549ed3.toFixed(1)}%`;
    } else if (v_3b27d9 === v_e3e816.MEAN_ARTERIAL_PRESSURE || v_3b27d9 === v_e3e816.PULSE_PRESSURE) {
      return `${v_549ed3.toFixed(1)} mmHg`;
    } else if (v_3b27d9 === v_e3e816.HEART_AGE) {
      return `${v_549ed3.toFixed(0)} ${v_8d41d7('health_analysis.result.age_unit')}`;
    } else {
      return v_549ed3.toFixed(1);
    }
  }

  return String(v_3b402b);
};

const HealthAnalysisResultScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const { results: v_a7f568, timestamp: v_42044e } = v_c7daf6.params;

  const [v_571c37, v_e78f19] = v_5ab095<Record<number, boolean>>({});

  const [v_49e71a, v_f2b4a8] = v_5ab095<Record<number, boolean>>({});

  const [v_7bfc20, v_5da58e] = v_5ab095<Record<string, boolean>>({});
  const [v_6f0881, v_2fba89] = v_5ab095<InfoModalType>(null);
  const [v_9e9019, v_13a008] = v_5ab095<number | null>(null);
  const [v_0cc882, v_b4f3ee] = v_5ab095<number | null>(null);
  const [v_1f3747, v_75fa2e] = v_5ab095(false);
  const v_224a01 = __DEV__ ? 0 : 0;

  const v_b90e32 = require('../../../assets/images/binah 2.png');
  const v_b1d778 = require('../../../assets/images/binah 3.png');
  const v_1da036 = require('../../../assets/images/binah 4.png');
  const v_b84446 = require('../../../assets/images/binah 6.png');
  const v_96a729 = require('../../../assets/images/binah 7.png');
  const v_9dbc22 = require('../../../assets/images/binah 8.png');
  const v_1f4a5d = require('../../../assets/images/binah 9.png');
  const v_2ca635 = require('../../../assets/images/binah 12.png');
  const v_2d36fb = require('../../../assets/images/binah 14.png');
  const v_3f2f67 = require('../../../assets/images/binah17.png');

  const v_30e354 = (v_653390) => {
    v_e78f19(v_ba2215 => ({
      ...v_ba2215,
      [v_653390]: !v_ba2215[v_653390],
    }));
  };

  const v_1be31b = (v_653390) => {
    v_f2b4a8(v_ba2215 => ({
      ...v_ba2215,
      [v_653390]: !v_ba2215[v_653390],
    }));
  };

  const v_b4b49b = () => v_2fba89(null);
  const v_a6fc94 = () => v_13a008(null);
  const v_ade09d = () => v_b4f3ee(null);

  const v_d97574 = (v_130c5c) => {
    v_5da58e(v_ba2215 => ({
      ...v_ba2215,
      [v_130c5c]: !v_ba2215[v_130c5c],
    }));
  };

  const v_311b14 = (v_332b51): InfoModalType => {
    if (v_332b51 === v_e3e816.WELLNESS_INDEX) {
      return 'wellnessIndex';
    } else if (v_332b51 === v_e3e816.WELLNESS_LEVEL) {
      return 'wellnessLevel';
    }
    return null;
  };

  const v_b1b76c = [v_e3e816.WELLNESS_INDEX];

  const v_b30c6b = [];
  const v_53d27c = [];

  Object.entries(v_a7f568)
    .filter(([v_37eab7, v_9390e8]) => v_9390e8.value !== null && v_9390e8.value !== undefined)
    .forEach(([v_3b27d9, v_9390e8]) => {
      const v_653390 = Number(v_3b27d9);
      if (v_b1b76c.includes(v_653390)) {
        v_b30c6b.push([v_3b27d9, v_9390e8]);
      } else {
        v_53d27c.push([v_3b27d9, v_9390e8]);
      }
    });

  v_b30c6b.sort(([v_f80b64], [v_e3fa88]) => {
    const v_8a984b = v_b1b76c.indexOf(Number(v_f80b64));
    const v_9f575e = v_b1b76c.indexOf(Number(v_e3fa88));
    return v_8a984b - v_9f575e;
  });
  v_53d27c.sort(([v_f80b64], [v_e3fa88]) => Number(v_f80b64) - Number(v_e3fa88));

  const v_df7b8f = (v_653390) => v_a7f568?.[v_653390]?.value;
  const v_1f8651 = (v_653390) =>
    v_df7b8f(v_653390) !== undefined
      ? v_a6fe82(v_df7b8f(v_653390), v_653390, v_8d41d7)
      : null;

  const v_2586c7 = (v_3b402b): number | null => {
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (isNaN(v_549ed3)) {
      return null;
    }
    const v_75195c = v_549ed3 > 10 ? v_549ed3 / 10 : v_549ed3;
    return Math.max(0, Math.min(10, Math.round(v_75195c)));
  };

  const v_1b1755 = (v_740dd8): string => {
    if (v_740dd8 === null) {
      return '-';
    }
    if (v_740dd8 >= 7) {
      return v_8d41d7('health_analysis.result.level_high');
    }
    if (v_740dd8 >= 4) {
      return v_8d41d7('health_analysis.result.level_mid');
    }
    return v_8d41d7('health_analysis.result.level_low');
  };

  const v_473dc9 = v_df9f57(
    () => v_2586c7(v_df7b8f(v_e3e816.WELLNESS_INDEX)),
    [v_a7f568],
  );
  const v_a6d4f8 = v_df9f57(
    () => v_2586c7(v_df7b8f(v_e3e816.WELLNESS_LEVEL)),
    [v_a7f568],
  );
  const v_afc36a = v_df9f57(() => {
    if (v_6f0881 === 'wellnessIndex') {
      return v_8d41d7('health_analysis.result.wellness_score_help_text');
    }
    return '';
  }, [v_8d41d7, v_6f0881]);

  const v_1116e8 = v_df9f57(() => {
    if (!v_afc36a) {
      return [];
    }
    return v_afc36a.split('\n\n').filter(Boolean);
  }, [v_afc36a]);

  const v_a44b19 = (v_653390) => {
    const v_dd0ca3 = v_653390 === v_e3e816.WELLNESS_INDEX;
    const v_740dd8 = v_dd0ca3 ? v_473dc9 : v_a6d4f8;
    if (v_740dd8 === null) {
      return null;
    }
    const v_3a09c2 = v_1b1755(v_740dd8);
    const v_778b2d = v_9b1a04.xlarge * 7;
    const v_474580 = v_9b1a04.small;
    const v_0c21c9 = v_778b2d / 2 - v_474580;
    const v_0288f8 = v_778b2d / 2;
    const v_65e020 = 2 * Math.PI * v_0c21c9;
    const v_a63fde = v_740dd8 / 10;
    const v_80989c = v_65e020 * (1 - v_a63fde);
    const v_4b6102 = v_a63fde * 2 * Math.PI - Math.PI / 2;
    const v_e75d3b = v_0288f8 + v_0c21c9 * Math.cos(v_4b6102);
    const v_576627 = v_0288f8 + v_0c21c9 * Math.sin(v_4b6102);

    return (
      <View style={v_d81136.wellnessCard} key={v_653390}>
        <View style={v_d81136.wellnessGaugeWrapper}>
          <Svg width={v_778b2d} height={v_778b2d}>
            <Defs>
              <LinearGradient id="wellnessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#FF5A5F" />
                <Stop offset="50%" stopColor="#F6C343" />
                <Stop offset="100%" stopColor="#3CCB7B" />
              </LinearGradient>
            </Defs>
            <Circle
              cx={v_0288f8}
              cy={v_0288f8}
              r={v_0c21c9}
              stroke="#E5E7EB"
              strokeWidth={v_474580}
              fill="none"
            />
            <Circle
              cx={v_0288f8}
              cy={v_0288f8}
              r={v_0c21c9}
              stroke="url(#wellnessGradient)"
              strokeWidth={v_474580}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={v_65e020}
              strokeDashoffset={v_80989c}
              rotation="-90"
              originX={v_0288f8}
              originY={v_0288f8}
            />
            <Circle cx={v_e75d3b} cy={v_576627} r={v_9b1a04.small} fill="#F4F4F6" />
          </Svg>
          <View style={v_d81136.wellnessGaugeText}>
            <Text style={v_d81136.wellnessScoreText}>{`${v_740dd8}/10`}</Text>
            <Text style={v_d81136.wellnessScoreLabel}>{v_3a09c2}</Text>
          </View>
        </View>
        <View style={v_d81136.wellnessTitleRow}>
          <Text style={v_d81136.wellnessTitle}>
            {v_8d41d7('health_analysis.result.wellness_score_title')}
          </Text>
          <TouchableOpacity
            onPress={() => v_2fba89('wellnessIndex')}
            accessibilityRole="button"
            accessibilityLabel={`${v_8d41d7('health_analysis.result.wellness_score_title')} ${v_8d41d7('common.show')}`}
          >
            <Ionicons name="information-circle" size={18} color={v_1bfbd0.secondaryText} />
          </TouchableOpacity>
        </View>
        <Text style={v_d81136.wellnessDisclaimer}>{v_8d41d7('home.medical_disclaimer')}</Text>
      </View>
    );
  };

  const v_fec579 = (v_72b4e2) => {
    const v_468545 = v_72b4e2.split(' ');
    if (v_468545.length > 1) {
      return {
        value: v_468545[0],
        unit: v_468545.slice(1).join(' '),
      };
    }
    return {
      value: v_72b4e2,
      unit: '',
    };
  };

  const v_ec82c6 = {
    [v_e3e816.PULSE_RATE]: {
      title: v_8d41d7('health_analysis.result.info.heart_rate_title'),
      body: v_8d41d7('health_analysis.result.info.heart_rate_body'),
      image: v_b1d778,
    },
    [v_e3e816.RESPIRATION_RATE]: {
      title: v_8d41d7('health_analysis.result.info.breathing_rate_title'),
      body: v_8d41d7('health_analysis.result.info.breathing_rate_body'),
      image: v_1da036,
    },
    [v_e3e816.PRQ]: {
      title: v_8d41d7('health_analysis.result.info.prq_title'),
      body: v_8d41d7('health_analysis.result.info.prq_body'),
      image: v_3f2f67,
    },
    [v_e3e816.OXYGEN_SATURATION]: {
      title: v_8d41d7('health_analysis.result.info.oxygen_saturation_title'),
      body: v_8d41d7('health_analysis.result.info.oxygen_saturation_body'),
      image: v_b84446,
    },
    [v_e3e816.BLOOD_PRESSURE]: {
      title: v_8d41d7('health_analysis.result.info.blood_pressure_title'),
      body: v_8d41d7('health_analysis.result.info.blood_pressure_body'),
      image: v_96a729,
    },
    [v_e3e816.STRESS_LEVEL]: {
      title: v_8d41d7('health_analysis.result.info.stress_level_title'),
      body: v_8d41d7('health_analysis.result.info.stress_level_body'),
      images: [v_9dbc22, v_1f4a5d],
    },
    [v_e3e816.SDNN]: {
      title: v_8d41d7('health_analysis.result.info.hrv_sdnn_title'),
      body: v_8d41d7('health_analysis.result.info.hrv_sdnn_body'),
      image: v_2ca635,
    },
    [v_e3e816.MEAN_RRI]: {
      title: v_8d41d7('health_analysis.result.info.mean_rri_title'),
      body: v_8d41d7('health_analysis.result.info.mean_rri_body'),
      image: v_2ca635,
    },
    [v_e3e816.RMSSD]: {
      title: v_8d41d7('health_analysis.result.info.rmssd_title'),
      body: v_8d41d7('health_analysis.result.info.rmssd_body'),
      image: v_2d36fb,
    },
    [v_e3e816.SD1]: {
      title: v_8d41d7('health_analysis.result.info.sd1_title'),
      body: v_8d41d7('health_analysis.result.info.sd1_body'),
      image: v_2d36fb,
    },
    [v_e3e816.SD2]: {
      title: v_8d41d7('health_analysis.result.info.sd2_title'),
      body: v_8d41d7('health_analysis.result.info.sd2_body'),
      image: v_2d36fb,
    },
    [v_e3e816.PNS_ZONE]: {
      title: v_8d41d7('health_analysis.result.info.pns_zone_title'),
      body: v_8d41d7('health_analysis.result.info.pns_zone_body'),
    },
    [v_e3e816.PNS_INDEX]: {
      title: v_8d41d7('health_analysis.result.info.pns_index_title'),
      body: v_8d41d7('health_analysis.result.info.pns_index_body'),
    },
    [v_e3e816.SNS_INDEX]: {
      title: v_8d41d7('health_analysis.result.info.sns_index_title'),
      body: v_8d41d7('health_analysis.result.info.sns_index_body'),
    },
    [v_e3e816.SNS_ZONE]: {
      title: v_8d41d7('health_analysis.result.info.sns_zone_title'),
      body: v_8d41d7('health_analysis.result.info.sns_zone_body'),
    },
  };

  const v_4594bf = v_9e9019 !== null ? v_ec82c6[v_9e9019] : null;
  const v_6c4bcb = v_0cc882 !== null ? v_2f5a10(v_0cc882) : null;

  const v_7b3177 = new Set<number>([
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ]);

  const v_1ed29e = (v_2fd3b0) => {
    if (!v_2fd3b0) {
      return '';
    }
    if ('systolic' in v_2fd3b0) {
      return [
        `${v_8d41d7('health_analysis.result.systolic')}: ${v_8d41d7('health_analysis.result.risk_low')} ${v_2fd3b0.systolic.low} ${v_2fd3b0.systolic.unit || ''}`,
        `${v_8d41d7('health_analysis.result.systolic')}: ${v_8d41d7('health_analysis.result.risk_medium')} ${v_2fd3b0.systolic.medium} ${v_2fd3b0.systolic.unit || ''}`,
        `${v_8d41d7('health_analysis.result.systolic')}: ${v_8d41d7('health_analysis.result.risk_high')} ${v_2fd3b0.systolic.high} ${v_2fd3b0.systolic.unit || ''}`,
        `${v_8d41d7('health_analysis.result.diastolic')}: ${v_8d41d7('health_analysis.result.risk_low')} ${v_2fd3b0.diastolic.low} ${v_2fd3b0.diastolic.unit || ''}`,
        `${v_8d41d7('health_analysis.result.diastolic')}: ${v_8d41d7('health_analysis.result.risk_medium')} ${v_2fd3b0.diastolic.medium} ${v_2fd3b0.diastolic.unit || ''}`,
        `${v_8d41d7('health_analysis.result.diastolic')}: ${v_8d41d7('health_analysis.result.risk_high')} ${v_2fd3b0.diastolic.high} ${v_2fd3b0.diastolic.unit || ''}`,
      ].join('\n');
    }
    const v_a52412 = [
      `${v_8d41d7('health_analysis.result.risk_low')}: ${v_2fd3b0.low} ${v_2fd3b0.unit || ''}`,
      `${v_8d41d7('health_analysis.result.risk_medium')}: ${v_2fd3b0.medium} ${v_2fd3b0.unit || ''}`,
      `${v_8d41d7('health_analysis.result.risk_high')}: ${v_2fd3b0.high} ${v_2fd3b0.unit || ''}`,
    ];
    return v_a52412.filter((v_e6293e) => !v_e6293e.includes('N/A')).join('\n');
  };

  const v_0aaeba = (v_653390, v_3b402b): GroupStatus | null => {
    if (v_653390 === v_e3e816.STRESS_LEVEL) {
      return v_399d2c(v_3b402b);
    }
    if (v_653390 === v_e3e816.BLOOD_PRESSURE) {
      return v_005339(v_df7b8f(v_e3e816.HIGH_BLOOD_PRESSURE_RISK));
    }
    if (v_653390 === v_e3e816.HIGH_BLOOD_PRESSURE_RISK) {
      return v_005339(v_3b402b);
    }
    const v_f4d1c2 = [
      v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
      v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
      v_e3e816.ASCVD_RISK,
      v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
      v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
      v_e3e816.LOW_HEMOGLOBIN_RISK,
    ];
    if (v_f4d1c2.includes(v_653390)) {
      return v_005339(v_3b402b);
    }
    const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_549ed3)) {
      return '정상';
    }
    return null;
  };

  const v_08e501 = new Set<number>([
    v_e3e816.WELLNESS_LEVEL,
    v_e3e816.HEART_AGE,
    v_e3e816.WELLNESS_INDEX,
  ]);

  const v_f36ab0 = v_df9f57(() => {
    if (v_224a01 > 0) {
      const v_39e6fb = [
        v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
        v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
        v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
      ];
      return Array.from({ length: v_224a01 }, (v_37eab7, v_a56041) => {
        const v_653390 = v_39e6fb[v_a56041 % v_39e6fb.length];
        return {
          typeNum: v_653390,
          name: v_50f905(v_653390, v_8d41d7),
          statusType: 'risk' as const,
          valueText: v_8d41d7('health_analysis.result.risk'),
        };
      });
    }
    const v_4622b9 = [];
    const v_110a8b = new Set<number>();

    Object.entries(v_a7f568)
      .filter(([v_37eab7, v_9390e8]) => v_9390e8.value !== null && v_9390e8.value !== undefined)
      .forEach(([v_3b27d9, v_9390e8]) => {
        const v_653390 = Number(v_3b27d9);
        if (v_08e501.has(v_653390)) {
          return;
        }
        const v_d308b5 = v_0aaeba(v_653390, v_9390e8.value);
        const v_75da5e = v_6d92d1(v_653390, v_9390e8.value, v_8d41d7);
        const v_78d230 = v_75da5e?.type === 'warning';
        const v_459d99 = v_75da5e?.type === 'danger';
        const v_1bba75 = v_d308b5 === '위험' || v_78d230 || v_459d99;

        if (v_1bba75 && !v_110a8b.has(v_653390)) {
          v_110a8b.add(v_653390);
          v_4622b9.push({
            typeNum: v_653390,
            name: v_50f905(v_653390, v_8d41d7),
            statusType: v_d308b5 === '위험' || v_459d99 ? 'risk' : 'warning',
            valueText: v_a6fe82(v_9390e8.value, v_653390, v_8d41d7),
          });
        }
      });

    return v_4622b9;
  }, [v_224a01, v_a7f568, v_8d41d7, v_08e501]);
  const v_ee27d5 =
    v_f36ab0.length >= 4
      ? '45%'
      : v_f36ab0.length > 0
        ? 'auto'
        : undefined;
  const v_8e8471 =
    v_f36ab0.length >= 4 ? '90%' : undefined;

  const v_463ca2 = (v_d308b5) => {
    if (v_d308b5 === '위험') {
      return {
        text: v_d8cb4d.warning.color,
        background: v_d8cb4d.warning.backgroundColor,
      };
    }
    if (v_d308b5 === '정상') {
      return {
        text: v_d8cb4d.good.color,
        background: v_d8cb4d.good.backgroundColor,
      };
    }
    return {
      text: v_1bfbd0.secondaryText,
      background: v_1bfbd0.backgroundSecondary,
    };
  };

  const v_e4ae59 = (v_1833e7, v_d308b5) => {
    const v_1c35ff =
      v_9c213b.language && v_9c213b.language.startsWith('ko') ? v_723f2d(v_1833e7, '은', '는') : '';
    if (v_d308b5 === '정상') {
      return v_8d41d7('health_analysis.result.item_headline_normal', { name: v_1833e7, particle: v_1c35ff });
    }
    if (v_d308b5 === '위험') {
      return v_8d41d7('health_analysis.result.item_headline_risk', { name: v_1833e7, particle: v_1c35ff });
    }
    return v_8d41d7('health_analysis.result.item_headline_default', { name: v_1833e7, particle: v_1c35ff });
  };

  const v_26a76b = [
    {
      id: 'vital-signs',
      title: v_8d41d7('health_analysis.result.section_vital_signs'),
      items: [
        {
          typeNum: v_e3e816.PULSE_RATE,
        },
        {
          typeNum: v_e3e816.RESPIRATION_RATE,
        },
        {
          typeNum: v_e3e816.PRQ,
        },
      ],
    },
    {
      id: 'respiratory',
      title: v_8d41d7('health_analysis.result.section_respiratory'),
      items: [
        {
          typeNum: v_e3e816.RESPIRATION_RATE,
          label: v_8d41d7('health_analysis.result.binah_respiratory'),
          detailTypes: [v_e3e816.RESPIRATION_RATE],
        },
      ],
    },
    {
      id: 'stress',
      title: v_8d41d7('health_analysis.result.section_stress'),
      items: [
        {
          typeNum: v_e3e816.STRESS_LEVEL,
          detailTypes: [
            v_e3e816.STRESS_INDEX,
            v_e3e816.NORMALIZED_STRESS_INDEX,
            v_e3e816.BODY_TENSION_SCORE,
          ],
        },
      ],
    },
    {
      id: 'hrv',
      title: v_8d41d7('health_analysis.result.section_hrv'),
      items: [
        {
          typeNum: v_e3e816.SDNN,
          detailTypes: [
            v_e3e816.RMSSD,
            v_e3e816.SD1,
            v_e3e816.SD2,
            v_e3e816.MEAN_RRI,
            v_e3e816.RRI,
          ],
        },
      ],
    },
    {
      id: 'blood-pressure',
      title: v_8d41d7('health_analysis.result.section_blood_pressure'),
      items: [
        {
          typeNum: v_e3e816.BLOOD_PRESSURE,
          detailTypes: [
            v_e3e816.BLOOD_PRESSURE,
            v_e3e816.MEAN_ARTERIAL_PRESSURE,
            v_e3e816.PULSE_PRESSURE,
          ],
        },
      ],
    },
  ];

  const v_a685a5 = new Set<number>([
    v_e3e816.PULSE_RATE,
    v_e3e816.RESPIRATION_RATE,
    v_e3e816.PRQ,
    v_e3e816.STRESS_LEVEL,
    v_e3e816.STRESS_INDEX,
    v_e3e816.NORMALIZED_STRESS_INDEX,
    v_e3e816.BODY_TENSION_SCORE,
    v_e3e816.SDNN,
    v_e3e816.RMSSD,
    v_e3e816.SD1,
    v_e3e816.SD2,
    v_e3e816.MEAN_RRI,
    v_e3e816.RRI,
    v_e3e816.BLOOD_PRESSURE,
    v_e3e816.MEAN_ARTERIAL_PRESSURE,
    v_e3e816.PULSE_PRESSURE,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
  ]);

  const v_8c0857 = v_26a76b.filter(v_b4fa6c =>
    v_b4fa6c.items.some(v_8c0b26 => v_1f8651(v_8c0b26.typeNum)),
  );
  const v_71e822 = v_53d27c.filter(
    ([v_3b27d9]) => !v_a685a5.has(Number(v_3b27d9)) && !v_08e501.has(Number(v_3b27d9)),
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen}>
        <Header
          title={v_8d41d7('health_analysis.result_title')}
          showBackButton
          onBackPress={() => {

            v_c65f5d.replace('HealthAnalysis');
          }}
        />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
          showBottomBackground={false}
        >
          <View style={v_d81136.container}>
            <Text style={v_d81136.title}>  {v_8d41d7('health_analysis.result_title')}</Text>

            {}
            <View style={v_d81136.measurementInline}>
              <Ionicons name="calendar-outline" size={16} color={v_1bfbd0.secondaryText} />
              <Text style={v_d81136.measurementInlineText}>
                {new Date(v_42044e).toLocaleDateString('ko-KR')}
              </Text>
              <Text style={v_d81136.measurementInlineDivider}>|</Text>
              <Ionicons name="time-outline" size={16} color={v_1bfbd0.secondaryText} />
              <Text style={v_d81136.measurementInlineText}>
                {new Date(v_42044e).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
              </Text>
            </View>

            {}
            {v_b30c6b.length > 0 && (
              <>
                <Text style={v_d81136.sectionHeader}>{v_8d41d7('health_analysis.summary_indicators')}</Text>
                {v_b30c6b.map(([v_3b27d9, v_9390e8]) => {
                  const v_653390 = Number(v_3b27d9);
                  const v_828097 = v_2e7086(v_653390, v_9390e8.value, v_8d41d7);
                  const v_75da5e = v_6d92d1(v_653390, v_9390e8.value, v_8d41d7);

                  if (
                    v_653390 === v_e3e816.WELLNESS_INDEX ||
                    v_653390 === v_e3e816.WELLNESS_LEVEL
                  ) {
                    return v_a44b19(v_653390);
                  }

                  const v_2b38bd = v_75da5e
                    ? {
                      borderColor: v_75da5e.borderColor,
                      backgroundColor: v_75da5e.backgroundColor,
                    }
                    : {};

                  const v_d371b8 = v_75da5e
                    ? {
                      color: v_75da5e.color,
                    }
                    : {};

                  const v_314d3c = v_311b14(v_653390);

                  return (
                    <View
                      key={v_3b27d9}
                      style={[
                        v_d81136.resultSection,
                        v_d81136.summarySection,
                        v_2b38bd,
                      ]}
                    >
                      {}
                      <View style={v_d81136.sectionTitleRow}>
                        <Text style={v_d81136.sectionTitle}>
                          {v_50f905(v_653390, v_8d41d7)}
                        </Text>
                        {v_314d3c && (
                          <TouchableOpacity
                            onPress={() => v_30e354(v_653390)}
                            style={v_d81136.infoIconButton}
                            accessibilityRole="button"
                            accessibilityLabel={`${v_50f905(v_653390, v_8d41d7)} ${v_8d41d7('health_analysis.result.detail_info')} ${v_571c37[v_653390] ? v_8d41d7('health_analysis.result.hide') : v_8d41d7('health_analysis.result.show')}`}
                            accessibilityHint={v_8d41d7('health_analysis.result.detail_info_hint')}
                          >
                            <Ionicons
                              name={v_571c37[v_653390] ? "chevron-up-circle" : "information-circle-outline"}
                              size={22}
                              color={v_1bfbd0.secondaryText}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <Text
                        style={[
                          v_d81136.sectionValue,
                          v_d81136.summaryValue,
                          v_d371b8,
                        ]}
                      >
                        {v_a6fe82(v_9390e8.value, v_653390, v_8d41d7)}
                      </Text>
                      {}
                      {v_75da5e && (
                        <View style={v_d81136.statusContainer}>
                          <Ionicons
                            name={v_75da5e.icon}
                            size={18}
                            color={v_75da5e.color}
                            style={v_d81136.statusIcon}
                          />
                          <Text
                            style={[
                              v_d81136.statusText,
                              { color: v_75da5e.color },
                            ]}
                          >
                            {v_75da5e.message}
                          </Text>
                        </View>
                      )}
                      {}
                      {!v_75da5e && v_828097 && (
                        <Text style={v_d81136.riskText}>{v_828097}</Text>
                      )}
                      <Text style={v_d81136.descriptionText}>
                        {v_2c4b08(v_653390, v_8d41d7)}
                      </Text>
                      {}
                      {v_314d3c && v_571c37[v_653390] && (
                        <View style={v_d81136.infoExpandContainer}>
                          <View style={v_d81136.infoExpandHeader}>
                            <Text style={v_d81136.infoExpandTitle}>
                              {v_314d3c === 'wellnessIndex'
                                ? v_8d41d7('health_analysis.result.wellness_info.wellness_index_title')
                                : v_8d41d7('health_analysis.result.wellness_info.wellness_level_title')}
                            </Text>
                          </View>
                          <View style={v_d81136.infoExpandBody}>
                            {v_314d3c === 'wellnessIndex' ? (
                              <>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_definition')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_definition_text')}
                                  </Text>
                                </View>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_purpose')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_purpose_text')}
                                  </Text>
                                </View>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_display')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_index_display_text')}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_definition')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_definition_text')}
                                  </Text>
                                </View>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_role')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_role_text')}
                                  </Text>
                                </View>
                                <View style={v_d81136.infoExpandSection}>
                                  <Text style={v_d81136.infoExpandSubtitle}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_usage')}
                                  </Text>
                                  <Text style={v_d81136.infoExpandText}>
                                    {v_8d41d7('health_analysis.result.wellness_info.wellness_level_usage_text')}
                                  </Text>
                                </View>
                              </>
                            )}
                          </View>
                        </View>
                      )}
                    </View>
                  );
                })}
              </>
            )}

            {}
            {v_8c0857.length > 0 && (
              <>
                {v_8c0857.map((v_b4fa6c) => (
                  <View key={v_b4fa6c.id}>
                    <Text style={v_d81136.sectionHeader}>{v_b4fa6c.title}</Text>
                    {v_b4fa6c.items.map((v_8c0b26) => {
                      const v_72b4e2 = v_1f8651(v_8c0b26.typeNum);
                      if (!v_72b4e2) {
                        return null;
                      }
                      const v_1833e7 = v_8c0b26.label ?? v_50f905(v_8c0b26.typeNum, v_8d41d7);
                      const v_1d99bf = v_fec579(v_72b4e2);
                      const v_d308b5 = v_0aaeba(v_8c0b26.typeNum, v_df7b8f(v_8c0b26.typeNum));
                      const v_d72c04 = v_463ca2(v_d308b5);
                      const v_6856a9 = v_2c4b08(v_8c0b26.typeNum, v_8d41d7);
                      const v_4b27b8 = Boolean(v_ec82c6[v_8c0b26.typeNum]);
                      const v_d3e14c = `${v_b4fa6c.id}-${v_8c0b26.typeNum}`;
                      const v_2eb761 = (v_8c0b26.detailTypes ?? []).filter(v_653390 => v_653390 !== v_8c0b26.typeNum);
                      const v_d11c1e = v_2eb761.length > 0;
                      const v_f6df37 = v_d11c1e;
                      const v_a8394b = v_2eb761;

                      return (
                        <View key={v_d3e14c} style={v_d81136.resultCard}>
                          <View style={v_d81136.resultRow}>
                            <View style={v_d81136.resultLeft}>
                              <View style={v_d81136.resultIconRow}>
                                <View style={[v_d81136.resultIconCircle, { backgroundColor: v_d72c04.background }]}>
                                  <Ionicons
                                    name={v_d308b5 === '위험' ? 'sad-outline' : 'happy-outline'}
                                    size={20}
                                    color={v_d72c04.text}
                                  />
                                </View>
                                {v_d308b5 && (() => {

                                  const v_a78cd1 = [
                                    v_e3e816.ASCVD_RISK,
                                    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
                                    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
                                    v_e3e816.LOW_HEMOGLOBIN_RISK,
                                  ];
                                  if (v_a78cd1.includes(v_8c0b26.typeNum)) {
                                    const v_842d09 = typeof v_df7b8f(v_8c0b26.typeNum) === 'number' ? v_df7b8f(v_8c0b26.typeNum) : Number(v_df7b8f(v_8c0b26.typeNum));

                                    if (v_842d09 !== 0 && v_842d09 !== 1 && !isNaN(v_842d09)) {
                                      return null;
                                    }
                                  }
                                  return (
                                    <Text style={[v_d81136.resultStatus, { color: v_d72c04.text }]}>
                                      {v_d308b5 === '정상'
                                        ? v_8d41d7('health_analysis.result.normal')
                                        : v_8d41d7('health_analysis.result.risk')}
                                    </Text>
                                  );
                                })()}
                              </View>
                              <Text style={v_d81136.resultLabel}>{v_1833e7}</Text>
                              <View style={v_d81136.resultValueRow}>
                                <Text style={v_d81136.resultValueText}>{v_1d99bf.value}</Text>
                                {v_1d99bf.unit ? (
                                  <Text style={v_d81136.resultValueUnit}>{v_1d99bf.unit}</Text>
                                ) : null}
                              </View>
                            </View>
                            <View style={v_d81136.resultDivider} />
                            <View style={v_d81136.resultRight}>
                              <View style={v_d81136.resultRightHeader}>
                                <Text style={v_d81136.resultHeadline}>
                                  {v_e4ae59(v_1833e7, v_d308b5)}
                                </Text>
                                {v_4b27b8 && (
                                  <TouchableOpacity
                                    onPress={() => v_13a008(v_8c0b26.typeNum)}
                                    style={v_d81136.infoButton}
                                    accessibilityRole="button"
                                    accessibilityLabel={`${v_1833e7} ${v_8d41d7('health_analysis.result.detail_info')}`}
                                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                                  >
                                    <Ionicons
                                      name="information-circle-outline"
                                      size={16}
                                      color={v_1bfbd0.secondaryText}
                                    />
                                  </TouchableOpacity>
                                )}
                              </View>
                              <Text style={v_d81136.resultDescription}>{v_6856a9}</Text>
                            </View>
                          </View>
                          {v_f6df37 && (
                            <TouchableOpacity
                              style={v_d81136.resultToggle}
                              onPress={() => v_d97574(v_d3e14c)}
                              accessibilityRole="button"
                              accessibilityLabel={`${v_1833e7} 상세 결과 ${v_7bfc20[v_d3e14c] ? v_8d41d7('health_analysis.result.hide') : v_8d41d7('health_analysis.result.show')}`}
                            >
                              <Text style={v_d81136.resultToggleText}>
                                {v_7bfc20[v_d3e14c]
                                  ? v_8d41d7('health_analysis.result.hide_results')
                                  : v_8d41d7('health_analysis.result.show_all_results')}
                              </Text>
                              <Ionicons
                                name={v_7bfc20[v_d3e14c] ? 'remove-circle-outline' : 'add-circle-outline'}
                                size={18}
                                color={v_1bfbd0.secondaryText}
                              />
                            </TouchableOpacity>
                          )}

                          {v_f6df37 && v_7bfc20[v_d3e14c] && (
                            <View style={v_d81136.resultDetailList}>
                              {v_a8394b.map((v_653390) => {
                                const v_c6afb7 = v_1f8651(v_653390);
                                if (!v_c6afb7) {
                                  return null;
                                }
                                return (
                                  <View key={`${v_d3e14c}-${v_653390}`} style={v_d81136.resultDetailRow}>
                                    <Text style={v_d81136.resultDetailLabel}>
                                      {v_50f905(v_653390, v_8d41d7)}
                                    </Text>
                                    <Text style={v_d81136.resultDetailValue}>{v_c6afb7}</Text>
                                  </View>
                                );
                              })}
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                ))}
              </>
            )}

            {}
            {v_71e822.length > 0 ? (
              <>
                <Text style={v_d81136.sectionHeader}>{v_8d41d7('health_analysis.result.section_others')}</Text>
                {v_71e822.map(([v_3b27d9, v_9390e8]) => {
                  const v_653390 = Number(v_3b27d9);
                  const v_1833e7 = v_50f905(v_653390, v_8d41d7);
                  const v_72b4e2 = v_a6fe82(v_9390e8.value, v_653390, v_8d41d7);
                  const v_1d99bf = v_fec579(v_72b4e2);
                  const v_d308b5 = v_0aaeba(v_653390, v_9390e8.value);
                  const v_d72c04 = v_463ca2(v_d308b5);
                  const v_6856a9 = v_2c4b08(v_653390, v_8d41d7);
                  const v_c9f7af = v_2f5a10(v_653390);
                  const v_4b27b8 = Boolean(v_ec82c6[v_653390] || (v_c9f7af && v_7b3177.has(v_653390)));

                  return (
                    <View key={v_3b27d9} style={v_d81136.resultCard}>
                      <View style={v_d81136.resultRow}>
                        <View style={v_d81136.resultLeft}>
                          <View style={v_d81136.resultIconRow}>
                            <View style={[v_d81136.resultIconCircle, { backgroundColor: v_d72c04.background }]}>
                              <Ionicons
                                name={v_d308b5 === '위험' ? 'sad-outline' : 'happy-outline'}
                                size={20}
                                color={v_d72c04.text}
                              />
                            </View>
                            {v_d308b5 && (() => {

                              const v_a78cd1 = [
                                v_e3e816.ASCVD_RISK,
                                v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
                                v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
                                v_e3e816.LOW_HEMOGLOBIN_RISK,
                              ];
                              if (v_a78cd1.includes(v_653390)) {
                                const v_842d09 = typeof v_9390e8.value === 'number' ? v_9390e8.value : Number(v_9390e8.value);

                                if (v_842d09 !== 0 && v_842d09 !== 1 && !isNaN(v_842d09)) {
                                  return null;
                                }
                              }
                              return (
                                <Text style={[v_d81136.resultStatus, { color: v_d72c04.text }]}>
                                  {v_d308b5 === '정상'
                                    ? v_8d41d7('health_analysis.result.normal')
                                    : v_8d41d7('health_analysis.result.risk')}
                                </Text>
                              );
                            })()}
                          </View>
                          <Text style={v_d81136.resultLabel}>{v_1833e7}</Text>
                          <View style={v_d81136.resultValueRow}>
                            <Text style={v_d81136.resultValueText}>{v_1d99bf.value}</Text>
                            {v_1d99bf.unit ? (
                              <Text style={v_d81136.resultValueUnit}>{v_1d99bf.unit}</Text>
                            ) : null}
                          </View>
                        </View>
                        <View style={v_d81136.resultDivider} />
                        <View style={v_d81136.resultRight}>
                          <View style={v_d81136.resultRightHeader}>
                            <Text style={v_d81136.resultHeadline}>
                              {v_e4ae59(v_1833e7, v_d308b5)}
                            </Text>
                            {v_4b27b8 && (
                              <TouchableOpacity
                                onPress={() => {
                                  if (v_7b3177.has(v_653390)) {
                                    v_b4f3ee(v_653390);
                                  } else {
                                    v_13a008(v_653390);
                                  }
                                }}
                                style={v_d81136.infoButton}
                                accessibilityRole="button"
                                accessibilityLabel={`${v_1833e7} ${v_8d41d7('health_analysis.result.detail_info')}`}
                                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                              >
                                <Ionicons
                                  name="information-circle-outline"
                                  size={16}
                                  color={v_1bfbd0.secondaryText}
                                />
                              </TouchableOpacity>
                            )}
                          </View>
                          <Text style={v_d81136.resultDescription}>{v_6856a9}</Text>
                        </View>
                      </View>

                      {v_c9f7af && !v_7b3177.has(v_653390) && (
                        <TouchableOpacity
                          style={v_d81136.resultToggle}
                          onPress={() => v_1be31b(v_653390)}
                          accessibilityRole="button"
                          accessibilityLabel={`${v_8d41d7('health_analysis.result.risk_criteria')} ${v_49e71a[v_653390] ? v_8d41d7('health_analysis.result.hide') : v_8d41d7('health_analysis.result.show')}`}
                          accessibilityHint={v_8d41d7('health_analysis.result.risk_criteria_hint')}
                        >
                          <Text style={v_d81136.resultToggleText}>
                            {v_49e71a[v_653390]
                              ? v_8d41d7('health_analysis.result.hide_results')
                              : v_8d41d7('health_analysis.result.show_all_results')}
                          </Text>
                          <Ionicons
                            name={v_49e71a[v_653390] ? 'remove-circle-outline' : 'add-circle-outline'}
                            size={18}
                            color={v_1bfbd0.secondaryText}
                          />
                        </TouchableOpacity>
                      )}

                      {v_c9f7af && !v_7b3177.has(v_653390) && v_49e71a[v_653390] && (
                        <View style={v_d81136.resultDetailList}>
                          {v_653390 === v_e3e816.HIGH_BLOOD_PRESSURE_RISK &&
                            'systolic' in v_c9f7af ? (
                            <>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.systolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_low')} {v_c9f7af.systolic.low} {v_c9f7af.systolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.systolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.systolic.medium} {v_c9f7af.systolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.systolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_high')} {v_c9f7af.systolic.high} {v_c9f7af.systolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.diastolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_low')} {v_c9f7af.diastolic.low} {v_c9f7af.diastolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.diastolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.diastolic.medium} {v_c9f7af.diastolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.diastolic')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_high')} {v_c9f7af.diastolic.high} {v_c9f7af.diastolic.unit || ''}
                                </Text>
                              </View>
                            </>
                          ) : 'low' in v_c9f7af ? (
                            <>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.risk_low')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_c9f7af.low} {v_c9f7af.unit || ''}
                                </Text>
                              </View>
                              {v_c9f7af.medium !== 'N/A' && (
                                <View style={v_d81136.resultDetailRow}>
                                  <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.risk_medium')}</Text>
                                  <Text style={v_d81136.resultDetailValue}>
                                    {v_c9f7af.medium} {v_c9f7af.unit || ''}
                                  </Text>
                                </View>
                              )}
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.risk_high')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_c9f7af.high} {v_c9f7af.unit || ''}
                                </Text>
                              </View>
                            </>
                          ) : null}
                        </View>
                      )}
                    </View>
                  );
                })}
              </>
            ) : (
              <View style={v_d81136.resultSection}>
                <Text style={v_d81136.sectionTitle}>{v_8d41d7('health_analysis.result.no_result_title')}</Text>
                <Text style={v_d81136.sectionValue}>{v_8d41d7('health_analysis.result.no_result_message')}</Text>
              </View>
            )}

            {}
            <View style={v_d81136.infoContainer}>
              <Text style={v_d81136.infoText}>
                {v_8d41d7('health_analysis.result.disclaimer')}
              </Text>
            </View>

            {}
            <View style={v_d81136.buttonContainer}>
              <PrimaryButton
                title={v_8d41d7('health_analysis.result.finish_button')}
                onPress={() => {

                  v_c65f5d.reset({
                    index: 0,
                    routes: [{ name: 'MetaHome' }],
                  });
                }}
              />
            </View>
          </View>
        </SafeScrollView>
        <TouchableOpacity
          style={v_d81136.abnormalFooter}
          onPress={() => v_75fa2e(true)}
          accessibilityRole="button"
          accessibilityLabel={v_8d41d7('health_analysis.result.abnormal_footer_label')}
          accessibilityHint={v_8d41d7('health_analysis.result.abnormal_footer_hint')}
        >
          <View style={v_d81136.abnormalFooterIcon}>
            <Ionicons name="warning-outline" size={18} color={v_d8cb4d.warning.color} />
          </View>
          <Text style={v_d81136.abnormalFooterText}>
            {v_8d41d7('health_analysis.result.abnormal_footer_text')}
          </Text>
        </TouchableOpacity>
      </SafeView>
      <Modal
        visible={v_1f3747}
        transparent
        animationType="slide"
        onRequestClose={() => v_75fa2e(false)}
      >
        <View style={v_d81136.abnormalModalOverlay}>
          <View style={[v_d81136.abnormalSheet, { minHeight: v_ee27d5, maxHeight: v_8e8471 }]}>
            <View style={v_d81136.abnormalSheetHeader}>
              <View style={v_d81136.abnormalSheetTitleRow}>
                <Ionicons name="warning" size={18} color={v_d8cb4d.warning.color} />
                <Text style={v_d81136.abnormalSheetTitle}>
                  {v_8d41d7('health_analysis.result.abnormal_sheet_title')}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => v_75fa2e(false)}
                style={v_d81136.modalCloseButton}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('common.close')}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={20} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            {v_f36ab0.length >= 4 ? (
              <SafeScrollView
                style={v_472849.flatten([v_d81136.abnormalSheetBody, v_d81136.abnormalSheetBodyScroll])}
                contentContainerStyle={v_d81136.abnormalSheetContent}
                showsVerticalScrollIndicator={false}
                showBottomBackground={false}
              >
                {v_f36ab0.map((v_8c0b26) => (
                  <View key={`abnormal-${v_8c0b26.typeNum}`} style={v_d81136.abnormalItem}>
                    <View style={v_d81136.abnormalItemHeader}>
                      <Text style={v_d81136.abnormalItemName}>{v_8c0b26.name}</Text>
                      <View
                        style={[
                          v_d81136.abnormalBadge,
                          v_8c0b26.statusType === 'risk'
                            ? v_d81136.abnormalBadgeDanger
                            : v_d81136.abnormalBadgeWarning,
                        ]}
                      >
                        <Text style={v_d81136.abnormalBadgeText}>
                          {v_8c0b26.statusType === 'risk'
                            ? v_8d41d7('health_analysis.result.risk')
                            : v_8d41d7('health_analysis.result.warning')}
                        </Text>
                      </View>
                    </View>
                    <Text style={v_d81136.abnormalItemValue}>{v_8c0b26.valueText}</Text>
                  </View>
                ))}
              </SafeScrollView>
            ) : (
              <View style={v_d81136.abnormalSheetContent}>
                {v_f36ab0.length === 0 ? (
                  <Text style={v_d81136.abnormalEmptyText}>
                    {v_8d41d7('health_analysis.result.abnormal_empty')}
                  </Text>
                ) : (
                  v_f36ab0.map((v_8c0b26) => (
                    <View key={`abnormal-${v_8c0b26.typeNum}`} style={v_d81136.abnormalItem}>
                      <View style={v_d81136.abnormalItemHeader}>
                        <Text style={v_d81136.abnormalItemName}>{v_8c0b26.name}</Text>
                        <View
                          style={[
                            v_d81136.abnormalBadge,
                            v_8c0b26.statusType === 'risk'
                              ? v_d81136.abnormalBadgeDanger
                              : v_d81136.abnormalBadgeWarning,
                          ]}
                        >
                          <Text style={v_d81136.abnormalBadgeText}>
                            {v_8c0b26.statusType === 'risk'
                              ? v_8d41d7('health_analysis.result.risk')
                              : v_8d41d7('health_analysis.result.warning')}
                          </Text>
                        </View>
                      </View>
                      <Text style={v_d81136.abnormalItemValue}>{v_8c0b26.valueText}</Text>
                    </View>
                  ))
                )}
              </View>
            )}
          </View>
        </View>
      </Modal>
      <Modal
        visible={Boolean(v_6f0881)}
        transparent
        animationType="fade"
        onRequestClose={v_b4b49b}
      >
        <View style={v_d81136.wellnessModalOverlay}>
          <View style={v_d81136.wellnessModal}>
            <View style={v_d81136.wellnessModalHeader}>
              <Text style={v_d81136.wellnessModalTitle}>
                {v_8d41d7('health_analysis.result.wellness_score_title')}
              </Text>
              <TouchableOpacity
                onPress={v_b4b49b}
                style={v_d81136.modalCloseButton}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('common.close')}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={20} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            <Text style={v_d81136.wellnessModalSubtitle}>
              {`${v_473dc9}/10 | ${v_1b1755(v_473dc9)}`}
            </Text>
            <View style={v_d81136.wellnessScaleLabels}>
              <View style={v_d81136.wellnessRangeLabelLow}>
                <Text style={v_d81136.wellnessScaleLabel}>
                  {v_8d41d7('health_analysis.result.level_low')}
                </Text>
              </View>
              <View style={v_d81136.wellnessRangeLabelMedium}>
                <Text style={v_d81136.wellnessScaleLabel}>
                  {v_8d41d7('health_analysis.result.level_mid')}
                </Text>
              </View>
              <View style={v_d81136.wellnessRangeLabelHigh}>
                <Text style={v_d81136.wellnessScaleLabel}>
                  {v_8d41d7('health_analysis.result.level_high')}
                </Text>
              </View>
            </View>

            <View style={v_d81136.wellnessRangeGrid}>
              <View style={[v_d81136.wellnessRangeGridSegment, v_d81136.wellnessRangeGridLow]} />
              <View style={[v_d81136.wellnessRangeGridSegment, v_d81136.wellnessRangeGridMedium]} />
              <View style={[v_d81136.wellnessRangeGridSegment, v_d81136.wellnessRangeGridHigh]} />
            </View>
            <View style={v_d81136.wellnessSegmentBar}>
              {Array.from({ length: 10 }, (v_37eab7, v_a56041) => v_a56041 + 1).map((v_5832eb) => {
                const v_37fe12 = [
                  '#FF4D4F',
                  '#FF6B3D',
                  '#FF8A3D',
                  '#FFB03D',
                  '#FFD23D',
                  '#FFE66D',
                  '#C8E96B',
                  '#8DDC6A',
                  '#5FD46B',
                  '#34C759',
                ];
                const v_225448 = Math.max(1, Math.min(10, v_473dc9 || 1));
                return (
                  <View
                    key={`modal-seg-${v_5832eb}`}
                    style={[
                      v_d81136.wellnessSegment,
                      { backgroundColor: v_37fe12[v_5832eb - 1] },
                    ]}
                  >
                    {v_5832eb === v_225448 && <View style={v_d81136.wellnessIndicator} />}
                  </View>
                );
              })}
            </View>
            <View style={v_d81136.wellnessSegmentNumbers}>
              {Array.from({ length: 10 }, (v_37eab7, v_a56041) => v_a56041 + 1).map((v_5832eb) => (
                <Text key={`modal-num-${v_5832eb}`} style={v_d81136.wellnessSegmentNumber}>
                  {v_5832eb}
                </Text>
              ))}
            </View>
            <ScrollView
              style={v_d81136.wellnessModalBodyScroll}
              contentContainerStyle={v_d81136.wellnessModalBodyContent}
              showsVerticalScrollIndicator={false}
            >
              {(() => {
                const v_b23b8d = v_8d41d7('health_analysis.result.wellness_score_oxygen_prefix');
                const v_e6b61c = v_1116e8.findIndex((v_d64a40) =>
                  v_d64a40.includes(v_b23b8d),
                );
                return v_1116e8.map((v_d64a40, v_a56041) => (
                  <View key={`wellness-paragraph-${v_a56041}`} style={v_d81136.wellnessParagraphBlock}>
                    {v_a56041 === v_e6b61c ? (
                      <Image
                        source={v_b90e32}
                        style={v_d81136.wellnessExampleImage}
                        resizeMode="contain"
                      />
                    ) : null}
                    <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                  </View>
                ));
              })()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        visible={Boolean(v_9e9019)}
        transparent
        animationType="fade"
        onRequestClose={v_a6fc94}
      >
        <View style={v_d81136.wellnessModalOverlay}>
          <View style={v_d81136.wellnessModal}>
            <View style={v_d81136.wellnessModalHeader}>
              <Text style={v_d81136.wellnessModalTitle}>{v_4594bf?.title}</Text>
              <TouchableOpacity
                onPress={v_a6fc94}
                style={v_d81136.modalCloseButton}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('common.close')}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={20} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={v_d81136.wellnessModalBodyScroll}
              contentContainerStyle={v_d81136.wellnessModalBodyContent}
              showsVerticalScrollIndicator={false}
            >
              {(() => {
                if (!v_4594bf) {
                  return null;
                }
                const v_706e98 = v_4594bf.images
                  ? v_4594bf.images
                  : v_4594bf.image
                    ? [v_4594bf.image]
                    : [];
                const v_39f39e = v_4594bf.body
                  ? v_4594bf.body.split('\n\n').filter(Boolean)
                  : [];

                if (
                  v_9e9019 === v_e3e816.STRESS_LEVEL &&
                  v_706e98.length === 2
                ) {
                  return (
                    <View style={v_d81136.infoModalBodyStack}>
                      {v_39f39e.map((v_d64a40, v_a56041) => (
                        <View
                          key={`info-paragraph-${v_a56041}`}
                          style={v_d81136.infoModalParagraphBlock}
                        >
                          <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                          {}
                          {v_a56041 === 0 && v_706e98[0] ? (
                            <Image
                              source={v_706e98[0]}
                              style={v_d81136.wellnessExampleImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          {}
                          {v_a56041 === 1 && v_706e98[1] ? (
                            <Image
                              source={v_706e98[1]}
                              style={v_d81136.wellnessExampleImage}
                              resizeMode="contain"
                            />
                          ) : null}
                        </View>
                      ))}
                    </View>
                  );
                }

                const v_d8f6f6 =
                  v_706e98.length > 0 && v_706e98.length === v_39f39e.length - 1;
                if (v_d8f6f6) {
                  return (
                    <View style={v_d81136.infoModalBodyStack}>
                      {v_39f39e.map((v_d64a40, v_a56041) => (
                        <View key={`info-paragraph-${v_a56041}`} style={v_d81136.infoModalParagraphBlock}>
                          <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                          {v_706e98[v_a56041] ? (
                            <Image
                              source={v_706e98[v_a56041]}
                              style={v_d81136.wellnessExampleImage}
                              resizeMode="contain"
                            />
                          ) : null}
                        </View>
                      ))}
                    </View>
                  );
                }

                if (
                  v_9e9019 === v_e3e816.OXYGEN_SATURATION &&
                  v_706e98.length > 0
                ) {
                  const v_39416f = v_9c213b.language?.startsWith('ko');
                  const v_d6be1a = v_9c213b.language?.startsWith('en');
                  const v_d660f2 = v_9c213b.language?.startsWith('id');

                  let v_1f890f = -1;
                  if (v_39416f) {
                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('저산소혈증'),
                    );
                  } else if (v_d6be1a) {
                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('hypoxemia') || v_e2a85c.includes('Hypoxemia'),
                    );
                  } else if (v_d660f2) {
                    v_1f890f = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('hipoksemia') || v_e2a85c.includes('Hipoksemia'),
                    );
                  }

                  if (v_1f890f > 0) {
                    return (
                      <View style={v_d81136.infoModalBodyStack}>
                        {v_39f39e.map((v_d64a40, v_a56041) => (
                          <View
                            key={`info-paragraph-${v_a56041}`}
                            style={v_d81136.infoModalParagraphBlock}
                          >
                            <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                            {v_a56041 === v_1f890f - 1 && v_706e98[0] ? (
                              <Image
                                source={v_706e98[0]}
                                style={v_d81136.wellnessExampleImage}
                                resizeMode="contain"
                              />
                            ) : null}
                          </View>
                        ))}
                      </View>
                    );
                  }
                }

                if (
                  v_9e9019 === v_e3e816.BLOOD_PRESSURE &&
                  v_706e98.length > 0 &&
                  v_39f39e.length > 1
                ) {
                  return (
                    <View style={v_d81136.infoModalBodyStack}>
                      {v_39f39e.map((v_d64a40, v_a56041) => (
                        <View
                          key={`info-paragraph-${v_a56041}`}
                          style={v_d81136.infoModalParagraphBlock}
                        >
                          <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                          {v_a56041 === 0 && v_706e98[0] ? (
                            <Image
                              source={v_706e98[0]}
                              style={v_d81136.wellnessExampleImage}
                              resizeMode="contain"
                            />
                          ) : null}
                        </View>
                      ))}
                    </View>
                  );
                }

                if (
                  v_9e9019 === v_e3e816.PULSE_RATE &&
                  v_706e98.length > 0
                ) {
                  const v_39416f = v_9c213b.language?.startsWith('ko');
                  const v_d6be1a = v_9c213b.language?.startsWith('en');
                  const v_d660f2 = v_9c213b.language?.startsWith('id');

                  let v_c3488c = -1;
                  if (v_39416f) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('심장은 온몸에') || v_e2a85c.includes('심장은'),
                    );
                  } else if (v_d6be1a) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('Think of the heart') || v_e2a85c.includes('heart as a pump'),
                    );
                  } else if (v_d660f2) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('Anggap jantung sebagai') || v_e2a85c.includes('jantung sebagai pompa'),
                    );
                  }

                  if (v_c3488c > 0) {
                    return (
                      <View style={v_d81136.infoModalBodyStack}>
                        {v_39f39e.map((v_d64a40, v_a56041) => (
                          <View
                            key={`info-paragraph-${v_a56041}`}
                            style={v_d81136.infoModalParagraphBlock}
                          >
                            <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                            {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                              <Image
                                source={v_706e98[0]}
                                style={v_d81136.wellnessExampleImage}
                                resizeMode="contain"
                              />
                            ) : null}
                          </View>
                        ))}
                      </View>
                    );
                  }
                }

                if (
                  v_9e9019 === v_e3e816.RESPIRATION_RATE &&
                  v_706e98.length > 0
                ) {
                  const v_39416f = v_9c213b.language?.startsWith('ko');
                  const v_d6be1a = v_9c213b.language?.startsWith('en');
                  const v_d660f2 = v_9c213b.language?.startsWith('id');

                  let v_c3488c = -1;
                  if (v_39416f) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('숨을 들이실 때') || v_e2a85c.includes('숨을'),
                    );
                  } else if (v_d6be1a) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('When you inhale') || v_e2a85c.includes('you inhale'),
                    );
                  } else if (v_d660f2) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('Saat Anda menghirup') || v_e2a85c.includes('menghirup'),
                    );
                  }

                  if (v_c3488c > 0) {
                    return (
                      <View style={v_d81136.infoModalBodyStack}>
                        {v_39f39e.map((v_d64a40, v_a56041) => (
                          <View
                            key={`info-paragraph-${v_a56041}`}
                            style={v_d81136.infoModalParagraphBlock}
                          >
                            <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                            {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                              <Image
                                source={v_706e98[0]}
                                style={v_d81136.wellnessExampleImage}
                                resizeMode="contain"
                              />
                            ) : null}
                          </View>
                        ))}
                      </View>
                    );
                  }
                }

                if (
                  v_9e9019 === v_e3e816.PRQ &&
                  v_706e98.length > 0
                ) {
                  const v_39416f = v_9c213b.language?.startsWith('ko');
                  const v_d6be1a = v_9c213b.language?.startsWith('en');
                  const v_d660f2 = v_9c213b.language?.startsWith('id');

                  let v_c3488c = -1;
                  if (v_39416f) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('PRQ(맥박-호흡 비율)은') || v_e2a85c.includes('PRQ(맥박'),
                    );
                  } else if (v_d6be1a) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('PRQ (pulse rate-respiration rate ratio)') || v_e2a85c.includes('pulse rate-respiration rate ratio'),
                    );
                  } else if (v_d660f2) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('PRQ (rasio denyut nadi-laju pernapasan)') || v_e2a85c.includes('menunjukkan seberapa efisien jantung dan paru-paru'),
                    );
                  }

                  if (v_c3488c > 0) {
                    return (
                      <View style={v_d81136.infoModalBodyStack}>
                        {v_39f39e.map((v_d64a40, v_a56041) => (
                          <View
                            key={`info-paragraph-${v_a56041}`}
                            style={v_d81136.infoModalParagraphBlock}
                          >
                            <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                            {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                              <Image
                                source={v_706e98[0]}
                                style={v_d81136.wellnessExampleImage}
                                resizeMode="contain"
                              />
                            ) : null}
                          </View>
                        ))}
                      </View>
                    );
                  }
                }

                if (
                  v_9e9019 === v_e3e816.SDNN &&
                  v_706e98.length > 0
                ) {
                  const v_39416f = v_9c213b.language?.startsWith('ko');
                  const v_d6be1a = v_9c213b.language?.startsWith('en');
                  const v_d660f2 = v_9c213b.language?.startsWith('id');

                  let v_c3488c = -1;
                  if (v_39416f) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('개인의 심박은') || v_e2a85c.includes('심박은 일정한'),
                    );
                  } else if (v_d6be1a) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes("An individual's heartbeats") || v_e2a85c.includes("individual's heartbeats"),
                    );
                  } else if (v_d660f2) {
                    v_c3488c = v_39f39e.findIndex((v_e2a85c) =>
                      v_e2a85c.includes('Detak jantung individu') || v_e2a85c.includes('Detak jantung'),
                    );
                  }

                  if (v_c3488c > 0) {
                    return (
                      <View style={v_d81136.infoModalBodyStack}>
                        {v_39f39e.map((v_d64a40, v_a56041) => (
                          <View
                            key={`info-paragraph-${v_a56041}`}
                            style={v_d81136.infoModalParagraphBlock}
                          >
                            <Text style={v_d81136.wellnessModalBody}>{v_d64a40}</Text>
                            {v_a56041 === v_c3488c - 1 && v_706e98[0] ? (
                              <Image
                                source={v_706e98[0]}
                                style={v_d81136.wellnessExampleImage}
                                resizeMode="contain"
                              />
                            ) : null}
                          </View>
                        ))}
                      </View>
                    );
                  }
                }
                return (
                  <>
                    {v_706e98.length > 0 ? (
                      <View style={v_d81136.infoModalImageStack}>
                        {v_706e98.map((v_04e790, v_a56041) => (
                          <Image
                            key={`info-image-${v_a56041}`}
                            source={v_04e790}
                            style={v_d81136.wellnessExampleImage}
                            resizeMode="contain"
                          />
                        ))}
                      </View>
                    ) : null}
                    <Text style={v_d81136.wellnessModalBody}>{v_4594bf.body}</Text>
                  </>
                );
              })()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        visible={Boolean(v_0cc882)}
        transparent
        animationType="fade"
        onRequestClose={v_ade09d}
      >
        <View style={v_d81136.wellnessModalOverlay}>
          <View style={v_d81136.wellnessModal}>
            <View style={v_d81136.wellnessModalHeader}>
              <Text style={v_d81136.wellnessModalTitle}>
                {v_8d41d7('health_analysis.result.risk_criteria')}
              </Text>
              <TouchableOpacity
                onPress={v_ade09d}
                style={v_d81136.modalCloseButton}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('common.close')}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={20} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={v_d81136.wellnessModalBodyScroll}
              contentContainerStyle={v_d81136.wellnessModalBodyContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={v_d81136.wellnessModalBody}>
                {v_1ed29e(v_6c4bcb)}
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: v_a61db3.screen,
  content: {
    ...v_a61db3.content,
    minHeight: '100%',
  },
  container: {
    ...v_a61db3.container,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
    textAlign: 'center',
  },
  resultSection: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  measurementInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small,
  },
  measurementInlineText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    letterSpacing: -0.2,
  },
  measurementInlineDivider: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  summarySection: {
    borderWidth: 2,

  },
  summaryValue: {
    fontSize: 28, 

  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusIcon: {
    marginRight: v_9b1a04.small / 2,
    paddingTop: v_9b1a04.small,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: v_ef658a.large,
    letterSpacing: -0.16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    flex: 1,
  },
  infoIconButton: {
    padding: v_9b1a04.small / 2,
    marginLeft: v_9b1a04.small,
  },
  sectionValue: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  wellnessCard: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  wellnessGaugeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wellnessGaugeText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wellnessScoreText: {
    fontSize: v_ef658a.title,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  wellnessScoreLabel: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    marginTop: v_9b1a04.small / 2,
  },
  wellnessScaleLabels: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  wellnessScaleLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
  },
  wellnessSegmentBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  wellnessSegment: {
    flex: 1,
    height: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wellnessIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  wellnessSegmentNumbers: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: v_9b1a04.small / 2,
  },

  wellnessRangeLabelLow: {
    flex: 3,
  },
  wellnessRangeLabelMedium: {
    flex: 4,
  },
  wellnessRangeLabelHigh: {
    flex: 3,
  },
  wellnessRangeGrid: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: v_9b1a04.small / 2,
    marginBottom: v_9b1a04.small / 2,
    gap: v_9b1a04.small / 2,
  },
  wellnessRangeGridSegment: {
    height: 2,
    backgroundColor: v_1bfbd0.border,
    borderRadius: 3,
    marginVertical: 4
  },
  wellnessRangeGridLow: {
    flex: 3,
  },
  wellnessRangeGridMedium: {
    flex: 4,
  },
  wellnessRangeGridHigh: {
    flex: 3,
  },
  wellnessSegmentNumber: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  wellnessTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginTop: v_9b1a04.medium,
  },
  wellnessTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  wellnessDisclaimer: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: v_9b1a04.small,
  },
  wellnessModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: v_9b1a04.large,
  },
  wellnessModal: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 20,
    padding: v_9b1a04.large,
    width: '100%',
    maxWidth: 420,
    maxHeight: '85%',
  },
  wellnessModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.small,
  },
  modalCloseButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  abnormalFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small / 2,
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    borderRadius: 0,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    paddingTop: v_9b1a04.large,
  },
  abnormalFooterIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: v_1bfbd0.background,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: [{ translateY: -18 }],
    bottom: 0,
    zIndex: 1,
  },
  abnormalFooterText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    textAlign: 'center',
  },
  abnormalModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'flex-end',
  },
  abnormalSheet: {
    backgroundColor: v_1bfbd0.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: v_9b1a04.large,
  },
  abnormalSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.medium,
  },
  abnormalSheetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  abnormalSheetTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  abnormalSheetBody: {
    width: '100%',
    minHeight: 0,
  },
  abnormalSheetBodyScroll: {
    flex: 1,
  },
  abnormalSheetBodyAuto: {
    flexGrow: 0,
  },
  abnormalSheetContent: {
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.xlarge + 10,
  },
  abnormalEmptyText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    paddingVertical: v_9b1a04.large,
  },
  abnormalItem: {
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 12,
    padding: v_9b1a04.medium,
    backgroundColor: v_1bfbd0.background,
  },
  abnormalItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.small / 2,
  },
  abnormalItemName: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    flex: 1,
  },
  abnormalItemValue: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  abnormalBadge: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
    borderRadius: 999,
  },
  abnormalBadgeWarning: {
    backgroundColor: v_d8cb4d.warning.backgroundColor,
  },
  abnormalBadgeDanger: {
    backgroundColor: v_d8cb4d.danger.backgroundColor,
  },
  abnormalBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  wellnessModalTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  wellnessModalSubtitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  wellnessModalBody: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: v_ef658a.medium + v_9b1a04.small,
  },
  wellnessModalBodyScroll: {
    width: '100%',
    maxHeight: 420,
    marginTop: v_9b1a04.medium,
  },
  wellnessModalBodyContent: {
    gap: v_9b1a04.medium,
    paddingBottom: v_9b1a04.small,
  },
  infoModalBodyStack: {
    gap: v_9b1a04.medium,
  },
  infoModalParagraphBlock: {
    gap: v_9b1a04.medium,
  },
  infoModalImageStack: {
    gap: v_9b1a04.medium,
  },
  wellnessParagraphBlock: {
    gap: v_9b1a04.medium,
  },
  wellnessExampleImage: {
    width: '100%',
    height: 180,
  },
  groupCard: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  resultCard: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 16,
    marginBottom: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    overflow: 'hidden',
  },
  resultRow: {
    flexDirection: 'row',
    padding: v_9b1a04.medium,
    gap: v_9b1a04.medium,
  },
  resultLeft: {
    width: v_9b1a04.xlarge * 4.5,
    alignItems: 'flex-start',
    gap: v_9b1a04.small / 2,
  },
  resultIconCircle: {
    width: v_9b1a04.xlarge + v_9b1a04.small,
    height: v_9b1a04.xlarge + v_9b1a04.small,
    borderRadius: v_9b1a04.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
  },
  resultLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  resultStatus: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
  },
  resultValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: v_9b1a04.small / 2,
  },
  resultValueText: {
    fontSize: v_ef658a.input,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    letterSpacing: -1,
  },
  resultValueUnit: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small / 2,
  },
  resultDivider: {
    width: 1,
    backgroundColor: v_1bfbd0.border,
  },
  resultRight: {
    flex: 1,
    gap: v_9b1a04.small,
  },
  resultRightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  infoButton: {
    position: 'absolute',
    top: -v_9b1a04.large,
    right: -v_9b1a04.large,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  resultHeadline: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  resultDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: v_ef658a.small + v_9b1a04.small / 2,
  },
  resultToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.backgroundSecondary,
  },
  resultToggleText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  resultDetailList: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    gap: v_9b1a04.small,
  },
  resultDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultDetailLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  resultDetailValue: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  groupHeader: {
    gap: v_9b1a04.small,
  },
  groupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    flex: 1,
  },
  groupMainValue: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  groupDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
  statusBadge: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
    borderRadius: 999,
    borderWidth: 1,
  },
  statusBadgeNormal: {
    backgroundColor: v_d8cb4d.good.backgroundColor,
    borderColor: v_d8cb4d.good.borderColor,
  },
  statusBadgeWarning: {
    backgroundColor: v_d8cb4d.warning.backgroundColor,
    borderColor: v_d8cb4d.warning.borderColor,
  },
  statusBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
  },
  statusBadgeTextNormal: {
    color: v_d8cb4d.good.color,
  },
  statusBadgeTextWarning: {
    color: v_d8cb4d.warning.color,
  },
  groupToggle: {
    marginTop: v_9b1a04.medium,
    paddingTop: v_9b1a04.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupToggleText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.primary,
  },
  groupDetailList: {
    marginTop: v_9b1a04.small,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
    paddingTop: v_9b1a04.small,
    gap: v_9b1a04.small,
  },
  groupDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupDetailLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    flex: 1,
  },
  groupDetailValue: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  confidenceText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: v_9b1a04.small / 2,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: v_9b1a04.small,
    lineHeight: 18,
  },
  riskText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: '#DC3545',
    marginTop: v_9b1a04.small,
    lineHeight: 18,
  },
  statusText: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginTop: v_9b1a04.small,
    lineHeight: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF3CD',
    borderRadius: 8,
    padding: v_9b1a04.medium,
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  infoText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: '#856404',
    lineHeight: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: v_9b1a04.xlarge,
  },

  infoExpandContainer: {
    marginTop: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
  },
  infoExpandHeader: {
    marginBottom: v_9b1a04.small,
  },
  infoExpandTitle: {
    fontSize: 16,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  infoExpandBody: {
    gap: v_9b1a04.medium,
  },
  infoExpandSection: {
    marginBottom: v_9b1a04.small,
  },
  infoExpandSubtitle: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
    marginBottom: v_9b1a04.small / 2,
  },
  infoExpandText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 20,
  },

  riskCriteriaContainer: {
    marginTop: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
  },
  riskCriteriaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  riskCriteriaTitle: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  riskCriteriaRow: {
    marginBottom: v_9b1a04.small,
  },
  riskCriteriaLabel: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small / 2,
  },
  riskCriteriaValues: {
    gap: v_9b1a04.small / 2,
  },
  riskCriteriaValue: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
});

export default v_cb47c8;

