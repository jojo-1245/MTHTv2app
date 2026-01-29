import v_a3453e, { v_df9f57, v_5ab095, v_e662ae, v_de06a3 } from 'bapkr';
import {
  v_aa7413,
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_122070,
  v_700696,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_bf60de, v_cd1400, v_5ade23, v_79a794, v_9aafc7, v_003e74 } from 'vpztcxjmsfanunln';
import { v_729608, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_843035, v_9b1a04 } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';

const v_858289 = {
  primary: '#0047AB', 
  secondary: '#00FA9A', 
  danger: '#EF4444', 
  warning: '#F97316', 
  accent: '#FFD700', 
  background: '#F3F4F6', 
  white: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  cardBg: '#FFFFFF',
  cardBorder: '#E5E7EB',
  gradientStart: '#0047AB',
  gradientEnd: '#1E3A8A',
};

const { width: v_0d9f50 } = v_700696.get('window');

type Props = v_432191<v_8ad91b, 'HealthAnalysisResult'>;

type AnalysisTab = 'summary' | 'autonomic' | 'cardiovascular' | 'risk';

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
    return `${v_6d2b48.join(', ')} ms`;
  }

  if (v_3b27d9 === v_e3e816.BLOOD_PRESSURE && typeof v_3b402b === 'object' && !Array.isArray(v_3b402b)) {
    if (v_3b402b.systolic !== undefined && v_3b402b.diastolic !== undefined) {
      return `${v_3b402b.systolic || 'N/A'}/${v_3b402b.diastolic || 'N/A'}`;
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
    if (!isNaN(v_842d09)) {
      if (v_842d09 === 0 || v_842d09 === 1) {
        return v_8d41d7('health_analysis.result.normal');
      } else if (v_842d09 === 2 || v_842d09 === 3) {
        return v_8d41d7('health_analysis.result.risk');
      }
    }
  }

  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (!isNaN(v_549ed3)) {
    if (v_3b27d9 === v_e3e816.PULSE_RATE) {
      return `${v_549ed3.toFixed(0)}`;
    } else if (v_3b27d9 === v_e3e816.RESPIRATION_RATE) {
      return `${v_549ed3.toFixed(1)}`;
    } else if (v_3b27d9 === v_e3e816.OXYGEN_SATURATION) {
      return `${v_549ed3.toFixed(1)}`;
    } else if (v_3b27d9 === v_e3e816.MEAN_RRI || v_3b27d9 === v_e3e816.RMSSD || v_3b27d9 === v_e3e816.SDNN || v_3b27d9 === v_e3e816.SD1 || v_3b27d9 === v_e3e816.SD2) {
      return `${v_549ed3.toFixed(1)}`;
    } else if (v_3b27d9 === v_e3e816.HEMOGLOBIN) {
      return `${v_549ed3.toFixed(1)}`;
    } else if (v_3b27d9 === v_e3e816.HEMOGLOBIN_A1C) {
      return `${v_549ed3.toFixed(1)}`;
    } else if (v_3b27d9 === v_e3e816.MEAN_ARTERIAL_PRESSURE || v_3b27d9 === v_e3e816.PULSE_PRESSURE) {
      return `${v_549ed3.toFixed(0)}`;
    } else if (v_3b27d9 === v_e3e816.HEART_AGE) {
      return `${v_549ed3.toFixed(0)}`;
    } else if (v_3b27d9 === v_e3e816.WELLNESS_INDEX) {
      return `${Math.round(v_549ed3)}`;
    } else if (v_3b27d9 === v_e3e816.STRESS_INDEX) {
      return `${Math.round(v_549ed3)}`;
    } else {
      return v_549ed3.toFixed(1);
    }
  }

  return String(v_3b402b);
};

const v_56c7df = (v_3b27d9): string => {
  switch (v_3b27d9) {
    case v_e3e816.PULSE_RATE:
      return 'bpm';
    case v_e3e816.RESPIRATION_RATE:
      return '/min';
    case v_e3e816.OXYGEN_SATURATION:
      return '%';
    case v_e3e816.BLOOD_PRESSURE:
      return 'mmHg';
    case v_e3e816.HEMOGLOBIN:
      return 'g/dL';
    case v_e3e816.HEMOGLOBIN_A1C:
      return '%';
    case v_e3e816.MEAN_RRI:
    case v_e3e816.RMSSD:
    case v_e3e816.SDNN:
    case v_e3e816.SD1:
    case v_e3e816.SD2:
      return 'ms';
    case v_e3e816.MEAN_ARTERIAL_PRESSURE:
    case v_e3e816.PULSE_PRESSURE:
      return 'mmHg';
    case v_e3e816.HEART_AGE:
      return '세';
    default:
      return '';
  }
};

const v_0aab8b = (v_3b402b, v_8d41d7): string => {
  if (v_3b402b <= 1) return v_8d41d7('health_analysis.result.stress_very_low') || '매우 낮음';
  if (v_3b402b <= 2) return v_8d41d7('health_analysis.result.stress_low') || '낮음';
  if (v_3b402b <= 3) return v_8d41d7('health_analysis.result.stress_normal') || '보통';
  if (v_3b402b <= 4) return v_8d41d7('health_analysis.result.stress_high') || '높음';
  return v_8d41d7('health_analysis.result.stress_very_high') || '매우 높음';
};

const v_c379d4 = (v_3b402b, v_8d41d7): { text: string; color: string } => {
  switch (v_3b402b) {
    case 1:
      return { text: v_8d41d7('health_analysis.result.risk_level_low') || 'Low', color: v_858289.secondary };
    case 2:
      return { text: v_8d41d7('health_analysis.result.risk_level_moderate') || 'Moderate', color: v_858289.warning };
    case 3:
      return { text: v_8d41d7('health_analysis.result.risk_level_high') || 'High', color: v_858289.danger };
    default:
      return { text: v_8d41d7('health_analysis.result.risk_level_unknown') || 'Unknown', color: v_858289.textMuted };
  }
};

const v_bfae75 = (v_3b27d9): boolean => {
  return [
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.ASCVD_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
    v_e3e816.ASCVD_RISK_LEVEL,
  ].includes(v_3b27d9);
};

const v_efae4d = (v_3b27d9, v_3b402b): boolean => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
  if (isNaN(v_549ed3)) return false;

  if (v_bfae75(v_3b27d9)) {

    return v_549ed3 >= 2;
  }

  if (v_3b27d9 === v_e3e816.STRESS_INDEX) {
    return v_549ed3 >= 50; 
  }

  if (v_3b27d9 === v_e3e816.STRESS_LEVEL) {
    return v_549ed3 >= 3; 
  }

  return false;
};

const CircularProgress: v_a3453e.FC<{
  score: number;
  maxScore: number;
  size: number;
  strokeWidth: number;
}> = ({ score: v_740dd8, maxScore: v_29757a, size: v_05b441, strokeWidth: v_474580 }) => {
  const v_0c21c9 = (v_05b441 - v_474580) / 2;
  const v_0288f8 = v_05b441 / 2;
  const v_65e020 = 2 * Math.PI * v_0c21c9;
  const v_a63fde = Math.min(v_740dd8 / v_29757a, 1);
  const v_80989c = v_65e020 * (1 - v_a63fde);

  const v_98200d = () => {
    const v_0aabe4 = (v_740dd8 / v_29757a) * 100;
    if (v_0aabe4 >= 80) return v_858289.secondary;
    if (v_0aabe4 >= 60) return '#84CC16';
    if (v_0aabe4 >= 40) return v_858289.warning;
    return v_858289.danger;
  };

  return (
    <View style={{ width: v_05b441, height: v_05b441, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={v_05b441} height={v_05b441}>
        <Defs>
          <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={v_98200d()} stopOpacity="1" />
            <Stop offset="100%" stopColor={v_98200d()} stopOpacity="0.7" />
          </LinearGradient>
        </Defs>
        {}
        <Circle
          cx={v_0288f8}
          cy={v_0288f8}
          r={v_0c21c9}
          stroke="#E5E7EB"
          strokeWidth={v_474580}
          fill="none"
        />
        {}
        <Circle
          cx={v_0288f8}
          cy={v_0288f8}
          r={v_0c21c9}
          stroke="url(#progressGradient)"
          strokeWidth={v_474580}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={v_65e020}
          strokeDashoffset={v_80989c}
          rotation="-90"
          originX={v_0288f8}
          originY={v_0288f8}
        />
      </Svg>
      <View style={[v_472849.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={v_d81136.heroScoreValue}>{v_740dd8}</Text>
        <Text style={v_d81136.heroScoreLabel}>점</Text>
      </View>
    </View>
  );
};

const HealthAnalysisResultScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const { results: v_a7f568, timestamp: v_42044e } = v_c7daf6.params;
  const v_033e14 = v_e0068c();
  const v_e99f51 = v_e662ae<v_122070>(null);

  const [v_ac1d22, v_02dd63] = v_5ab095<AnalysisTab>('summary');

  const [v_9e9019, v_13a008] = v_5ab095<number | null>(null);

  const [v_9e41c2, v_546c88] = v_5ab095(false);

  const v_df7b8f = v_de06a3((v_653390) => v_a7f568?.[v_653390]?.value, [v_a7f568]);
  const v_daea48 = v_de06a3((v_653390) => v_a7f568?.[v_653390]?.value !== undefined, [v_a7f568]);

  const v_14b228 = v_df9f57(() => {
    const v_8dffde = new Date(v_42044e);
    return `${v_8dffde.getFullYear()}.${String(v_8dffde.getMonth() + 1).padStart(2, '0')}.${String(v_8dffde.getDate()).padStart(2, '0')}`;
  }, [v_42044e]);

  const v_02129a = v_df9f57(() => {
    const v_3b402b = v_df7b8f(v_e3e816.WELLNESS_INDEX);
    if (v_3b402b !== undefined) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) {

        return v_549ed3 > 10 ? Math.round(v_549ed3) : Math.round(v_549ed3 * 10);
      }
    }
    return 0;
  }, [v_df7b8f]);

  const v_172810 = v_df9f57(() => {
    const v_3b402b = v_df7b8f(v_e3e816.HEART_AGE);
    if (v_3b402b !== undefined) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) return Math.round(v_549ed3);
    }
    return null;
  }, [v_df7b8f]);

  const v_3b8890 = v_df9f57(() => {
    const v_05c9ff = [];

    if (v_daea48(v_e3e816.BLOOD_PRESSURE)) {
      const v_d90901 = v_df7b8f(v_e3e816.BLOOD_PRESSURE);
      if (v_d90901 && typeof v_d90901 === 'object') {
        const v_e7392b = (v_d90901 as any).systolic;
        const v_8cfeff = (v_d90901 as any).diastolic;
        const v_f91fb8 = v_e7392b >= 140 || v_8cfeff >= 90;
        v_05c9ff.push({
          label: v_8d41d7('health_analysis.vitals.blood_pressure'),
          value: `${v_e7392b || 'N/A'}/${v_8cfeff || 'N/A'}`,
          unit: 'mmHg',
          icon: 'heart-outline' as const,
          status: v_f91fb8 ? 'danger' : 'good',
        });
      }
    }

    if (v_daea48(v_e3e816.STRESS_LEVEL)) {
      const v_590eda = v_df7b8f(v_e3e816.STRESS_LEVEL);
      const v_549ed3 = typeof v_590eda === 'number' ? v_590eda : Number(v_590eda);
      const v_f91fb8 = v_549ed3 >= 3;
      v_05c9ff.push({
        label: v_8d41d7('health_analysis.vitals.stress_level'),
        value: v_0aab8b(v_549ed3, v_8d41d7),
        unit: '',
        icon: 'flash-outline' as const,
        status: v_f91fb8 ? 'danger' : 'good',
      });
    }

    if (v_daea48(v_e3e816.OXYGEN_SATURATION)) {
      const v_8a0537 = v_df7b8f(v_e3e816.OXYGEN_SATURATION);
      const v_549ed3 = typeof v_8a0537 === 'number' ? v_8a0537 : Number(v_8a0537);
      const v_515627 = v_549ed3 < 95;
      v_05c9ff.push({
        label: v_8d41d7('health_analysis.vitals.oxygen_saturation'),
        value: v_549ed3.toFixed(1),
        unit: '%',
        icon: 'water-outline' as const,
        status: v_515627 ? 'danger' : 'good',
      });
    }

    return v_05c9ff;
  }, [v_daea48, v_df7b8f, v_8d41d7]);

  const v_aade17 = v_df9f57(() => {
    const v_7aa271 = [];

    const v_f4d1c2 = [
      v_e3e816.ASCVD_RISK_LEVEL,
      v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
      v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
      v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
      v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
      v_e3e816.LOW_HEMOGLOBIN_RISK,
    ];

    v_f4d1c2.forEach(v_3b27d9 => {
      if (v_daea48(v_3b27d9)) {
        const v_3b402b = v_df7b8f(v_3b27d9);
        const v_1bba75 = v_efae4d(v_3b27d9, v_3b402b);
        v_7aa271.push({
          type: v_3b27d9,
          label: v_50f905(v_3b27d9, v_8d41d7),
          value: v_3b402b,
          isRisk: v_1bba75,
        });
      }
    });

    return v_7aa271;
  }, [v_daea48, v_df7b8f, v_8d41d7]);

  const v_3c7713 = v_df9f57(() => {
    const v_ecfc0f = [];

    if (v_daea48(v_e3e816.STRESS_INDEX)) {
      const v_c9bcf1 = v_df7b8f(v_e3e816.STRESS_INDEX);
      const v_549ed3 = typeof v_c9bcf1 === 'number' ? v_c9bcf1 : Number(v_c9bcf1);
      if (v_549ed3 >= 50) {
        v_ecfc0f.push(v_8d41d7('health_analysis.result.ai_stress_high') || '스트레스 지수가 높습니다. 테아닌 섭취와 충분한 휴식을 권장합니다.');
      }
    }

    if (v_daea48(v_e3e816.SDNN)) {
      const v_f711b6 = v_df7b8f(v_e3e816.SDNN);
      const v_549ed3 = typeof v_f711b6 === 'number' ? v_f711b6 : Number(v_f711b6);
      if (v_549ed3 < 50) {
        v_ecfc0f.push(v_8d41d7('health_analysis.result.ai_sdnn_low') || '회복 탄력성이 낮습니다. 면역력 관리가 필요합니다.');
      }
    }

    const v_d442cf = v_aade17.find(v_cb35cb => v_cb35cb.type === v_e3e816.ASCVD_RISK_LEVEL);
    if (v_d442cf && v_d442cf.isRisk) {
      v_ecfc0f.push(v_8d41d7('health_analysis.result.ai_ascvd_warning') || '심혈관 위험도가 감지되었습니다. 혈행 개선을 권장합니다.');
    }

    const v_8d17e0 = v_aade17.find(v_cb35cb => v_cb35cb.type === v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK);
    if (v_8d17e0 && v_8d17e0.isRisk) {
      v_ecfc0f.push(v_8d41d7('health_analysis.result.ai_hba1c_warning') || '당화혈색소 수치가 높습니다. 식단 관리가 필요합니다.');
    }

    if (v_ecfc0f.length === 0) {
      v_ecfc0f.push(v_8d41d7('health_analysis.result.ai_normal') || '전반적으로 양호한 상태입니다. 건강한 생활습관을 유지하세요.');
    }

    return v_ecfc0f.join(' ');
  }, [v_daea48, v_df7b8f, v_aade17, v_8d41d7]);

  const v_2bfb95 = (v_11083e) => {
    switch (v_11083e) {
      case 'summary':
        return [
          v_e3e816.WELLNESS_INDEX,
          v_e3e816.WELLNESS_LEVEL,
          v_e3e816.HEART_AGE,
          v_e3e816.PULSE_RATE,
          v_e3e816.RESPIRATION_RATE,
          v_e3e816.OXYGEN_SATURATION,
          v_e3e816.BLOOD_PRESSURE,
        ];
      case 'autonomic':
        return [
          v_e3e816.STRESS_LEVEL,
          v_e3e816.STRESS_INDEX,
          v_e3e816.NORMALIZED_STRESS_INDEX,
          v_e3e816.PNS_INDEX,
          v_e3e816.PNS_ZONE,
          v_e3e816.SNS_INDEX,
          v_e3e816.SNS_ZONE,
          v_e3e816.LFHF,
          v_e3e816.BODY_TENSION_SCORE,
        ];
      case 'cardiovascular':
        return [
          v_e3e816.SDNN,
          v_e3e816.RMSSD,
          v_e3e816.MEAN_RRI,
          v_e3e816.SD1,
          v_e3e816.SD2,
          v_e3e816.PRQ,
          v_e3e816.MEAN_ARTERIAL_PRESSURE,
          v_e3e816.PULSE_PRESSURE,
          v_e3e816.CARDIAC_WORKLOAD,
          v_e3e816.HEMOGLOBIN,
          v_e3e816.HEMOGLOBIN_A1C,
        ];
      case 'risk':
        return [
          v_e3e816.ASCVD_RISK,
          v_e3e816.ASCVD_RISK_LEVEL,
          v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
          v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
          v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
          v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
          v_e3e816.LOW_HEMOGLOBIN_RISK,
        ];
      default:
        return [];
    }
  };

  const v_716e90 = () => {
    const v_c6c04c = [
      { id: 'summary', label: v_8d41d7('health_analysis.result.tab_summary') || '종합' },
      { id: 'autonomic', label: v_8d41d7('health_analysis.result.tab_autonomic') || '자율신경' },
      { id: 'cardiovascular', label: v_8d41d7('health_analysis.result.tab_cardiovascular') || '심혈관' },
      { id: 'risk', label: v_8d41d7('health_analysis.result.tab_risk') || '미래위험도' },
    ];

    return (
      <View style={v_d81136.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={v_d81136.tabScrollContent}>
          {v_c6c04c.map((v_11083e) => (
            <TouchableOpacity
              key={v_11083e.id}
              style={[v_d81136.tab, v_ac1d22 === v_11083e.id && v_d81136.tabActive]}
              onPress={() => v_02dd63(v_11083e.id)}
            >
              <Text style={[v_d81136.tabText, v_ac1d22 === v_11083e.id && v_d81136.tabTextActive]}>
                {v_11083e.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const v_52281a = (v_3b27d9) => {
    if (!v_daea48(v_3b27d9)) return null;

    const v_3b402b = v_df7b8f(v_3b27d9);
    const v_72b4e2 = v_a6fe82(v_3b402b, v_3b27d9, v_8d41d7);
    const v_80cae9 = v_56c7df(v_3b27d9);
    const v_1833e7 = v_50f905(v_3b27d9, v_8d41d7);
    const v_1bba75 = v_efae4d(v_3b27d9, v_3b402b);
    const v_cabbe9 = v_a7f568?.[v_3b27d9]?.confidence;

    if (v_3b27d9 === v_e3e816.ASCVD_RISK_LEVEL) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      const { text: v_9b6134, color: v_3c2a3a } = v_c379d4(v_549ed3, v_8d41d7);
      return (
        <TouchableOpacity
          key={v_3b27d9}
          style={[v_d81136.dataCard, v_1bba75 && v_d81136.dataCardDanger]}
          onPress={() => v_13a008(v_3b27d9)}
        >
          <View style={v_d81136.dataCardHeader}>
            <Text style={v_d81136.dataCardLabel}>{v_1833e7}</Text>
            <Ionicons name="information-circle-outline" size={18} color={v_858289.textMuted} />
          </View>
          <View style={v_d81136.dataCardContent}>
            <Text style={[v_d81136.dataCardValue, { color: v_3c2a3a }]}>{v_9b6134}</Text>
            {v_1bba75 && (
              <View style={v_d81136.riskBadge}>
                <Ionicons name="warning" size={14} color={v_858289.white} />
                <Text style={v_d81136.riskBadgeText}>{v_8d41d7('health_analysis.result.attention') || '주의'}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={v_3b27d9}
        style={[v_d81136.dataCard, v_1bba75 && v_d81136.dataCardDanger]}
        onPress={() => v_13a008(v_3b27d9)}
      >
        <View style={v_d81136.dataCardHeader}>
          <Text style={v_d81136.dataCardLabel}>{v_1833e7}</Text>
          <Ionicons name="information-circle-outline" size={18} color={v_858289.textMuted} />
        </View>
        <View style={v_d81136.dataCardContent}>
          <View style={v_d81136.dataCardValueRow}>
            <Text style={[v_d81136.dataCardValue, v_1bba75 && v_d81136.dataCardValueDanger]}>
              {v_72b4e2}
            </Text>
            {v_80cae9 ? <Text style={v_d81136.dataCardUnit}>{v_80cae9}</Text> : null}
          </View>
          {v_1bba75 && (
            <View style={v_d81136.riskBadge}>
              <Ionicons name="warning" size={14} color={v_858289.white} />
              <Text style={v_d81136.riskBadgeText}>{v_8d41d7('health_analysis.result.risk') || '위험'}</Text>
            </View>
          )}
          {v_cabbe9 && !v_1bba75 && (
            <View style={v_d81136.confidenceBadge}>
              <Text style={v_d81136.confidenceText}>
                {v_cabbe9.level === 3 ? v_8d41d7('health_analysis.result.confidence_high') :
                  v_cabbe9.level === 2 ? v_8d41d7('health_analysis.result.confidence_medium') :
                    v_8d41d7('health_analysis.result.confidence_low')}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const v_baa19f = () => {
    const v_517b93 = v_2bfb95(v_ac1d22);
    const v_53f76a = v_517b93.filter(v_3b27d9 => v_daea48(v_3b27d9));

    if (v_53f76a.length === 0) {
      return (
        <View style={v_d81136.emptyContainer}>
          <Ionicons name="document-text-outline" size={48} color={v_858289.textMuted} />
          <Text style={v_d81136.emptyText}>{v_8d41d7('health_analysis.result.no_data') || '해당 데이터가 없습니다.'}</Text>
        </View>
      );
    }

    return (
      <View style={v_d81136.dataGrid}>
        {v_53f76a.map(v_3b27d9 => v_52281a(v_3b27d9))}
      </View>
    );
  };

  const v_80b207 = () => (
    <View style={v_d81136.productCard}>
      <View style={v_d81136.productImagePlaceholder}>
        <Ionicons name="medical" size={40} color={v_858289.primary} />
      </View>
      <View style={v_d81136.productInfo}>
        <View style={v_d81136.productHeader}>
          <Text style={v_d81136.productName}>{v_8d41d7('health_analysis.result.product_name') || '메타 릴렉스 테아닌 200'}</Text>
          <View style={v_d81136.recommendBadge}>
            <Text style={v_d81136.recommendBadgeText}>{v_8d41d7('health_analysis.result.recommended') || '맞춤추천'}</Text>
          </View>
        </View>
        <Text style={v_d81136.productDescription}>{v_8d41d7('health_analysis.result.product_desc') || '스트레스 지수 완화 도움'}</Text>
        <View style={v_d81136.priceContainer}>
          <Text style={v_d81136.originalPrice}>45,000{v_8d41d7('health_analysis.result.currency') || '원'}</Text>
          <Text style={v_d81136.discountPrice}>38,000{v_8d41d7('health_analysis.result.currency') || '원'}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen}>
        <Header
          title={`${v_14b228} ${v_8d41d7('health_analysis.result.report_title') || '분석 리포트'}`}
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />

        <ScrollView
          ref={v_e99f51}
          style={v_d81136.scrollView}
          contentContainerStyle={[v_d81136.scrollContent, { paddingBottom: v_033e14.bottom + 100 }]}
          showsVerticalScrollIndicator={false}
        >
          {}
          <View style={v_d81136.heroSection}>
            <CircularProgress
              score={v_02129a}
              maxScore={100}
              size={200}
              strokeWidth={16}
            />

            {}
            {v_172810 !== null && (
              <View style={v_d81136.heartAgeContainer}>
                <Text style={v_d81136.heartAgeLabel}>{v_8d41d7('health_analysis.vitals.heart_age')}</Text>
                <Text style={v_d81136.heartAgeText}>
                  {v_8d41d7('health_analysis.result.heart_age_desc', { age: v_172810 }) || `심장 나이 ${v_172810}세`}
                </Text>
              </View>
            )}
          </View>

          {}
          <View style={v_d81136.keyIndicatorsContainer}>
            {v_3b8890.map((v_4503e7, v_a56041) => (
              <View key={v_a56041} style={v_d81136.keyIndicatorItem}>
                <View style={[
                  v_d81136.keyIndicatorIconContainer,
                  { backgroundColor: v_4503e7.status === 'danger' ? '#FEE2E2' : '#D1FAE5' }
                ]}>
                  <Ionicons
                    name={v_4503e7.icon}
                    size={20}
                    color={v_4503e7.status === 'danger' ? v_858289.danger : v_858289.secondary}
                  />
                </View>
                <Text style={v_d81136.keyIndicatorLabel}>{v_4503e7.label}</Text>
                <Text style={[
                  v_d81136.keyIndicatorValue,
                  { color: v_4503e7.status === 'danger' ? v_858289.danger : v_858289.text }
                ]}>
                  {v_4503e7.value}
                </Text>
                {v_4503e7.unit ? <Text style={v_d81136.keyIndicatorUnit}>{v_4503e7.unit}</Text> : null}
              </View>
            ))}
          </View>

          {}
          {v_716e90()}

          {}
          <View style={v_d81136.contentSection}>
            <Text style={v_d81136.sectionTitle}>
              {v_8d41d7('health_analysis.result.detailed_analysis') || '정밀 분석 상세'}
              <Text style={v_d81136.sectionBadge}> SDK Data</Text>
            </Text>

            {}
            {v_aade17.some(v_cb35cb => v_cb35cb.isRisk) && (
              <View style={v_d81136.warningBanner}>
                <Ionicons name="alert-circle" size={24} color={v_858289.danger} />
                <View style={v_d81136.warningBannerContent}>
                  <Text style={v_d81136.warningBannerTitle}>
                    {v_8d41d7('health_analysis.result.risk_detected') || '위험 지표 감지'}
                  </Text>
                  <Text style={v_d81136.warningBannerText}>
                    {v_8d41d7('health_analysis.result.risk_detected_desc') || '일부 지표에서 주의가 필요합니다. 상세 내용을 확인하세요.'}
                  </Text>
                </View>
              </View>
            )}

            {v_baa19f()}
          </View>

          {}
          <View style={v_d81136.aiSection}>
            <View style={v_d81136.aiHeader}>
              <View style={v_d81136.aiIconContainer}>
                <Text style={v_d81136.aiIcon}>💊</Text>
              </View>
              <View>
                <Text style={v_d81136.aiTitle}>{v_8d41d7('health_analysis.result.ai_prescription') || 'AI 맞춤 처방전'}</Text>
                <Text style={v_d81136.aiSubtitle}>Dr.Metahint AI Algorithm</Text>
              </View>
            </View>

            {}
            <View style={v_d81136.aiCommentBox}>
              <Text style={v_d81136.aiCommentText}>{v_3c7713}</Text>
            </View>

            {}
            {v_80b207()}

            {}
            <TouchableOpacity style={v_d81136.purchaseButton}>
              <View style={v_d81136.purchaseButtonContent}>
                <View style={v_d81136.coinIconContainer}>
                  <Ionicons name="cart" size={16} color={v_858289.text} />
                </View>
                <Text style={v_d81136.purchaseButtonText}>
                  3,500 MHIT{v_8d41d7('health_analysis.result.purchase_with_coin') || '로 구매'} (15% {v_8d41d7('health_analysis.result.extra_discount') || '추가할인'})
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {}
          <View style={v_d81136.footer}>
            <Text style={v_d81136.footerText}>
              {v_8d41d7('health_analysis.result.trust_message') || '본 분석은 Binah.ai 및 YouCam API의 ISO 인증 기술을 기반으로 합니다.'}
            </Text>
            <Text style={v_d81136.disclaimer}>
              {v_8d41d7('health_analysis.result.disclaimer') || '측정 결과는 참고용입니다. 정확한 진단은 전문의와 상담하시기 바랍니다.'}
            </Text>
          </View>
        </ScrollView>

        {}
        <View style={[v_d81136.bottomButtonContainer, { paddingBottom: v_033e14.bottom + 16 }]}>
          <PrimaryButton
            title={v_8d41d7('health_analysis.result.finish_button') || '측정 완료'}
            onPress={() => v_c65f5d.goBack()}
            fullWidth
          />
        </View>
      </SafeView>

      {}
      <Modal
        visible={v_9e9019 !== null}
        transparent
        animationType="fade"
        onRequestClose={() => v_13a008(null)}
      >
        <TouchableOpacity
          style={v_d81136.modalOverlay}
          activeOpacity={1}
          onPress={() => v_13a008(null)}
        >
          <View style={v_d81136.infoModal}>
            <View style={v_d81136.infoModalHeader}>
              <Text style={v_d81136.infoModalTitle}>
                {v_9e9019 !== null ? v_50f905(v_9e9019, v_8d41d7) : ''}
              </Text>
              <TouchableOpacity onPress={() => v_13a008(null)}>
                <Ionicons name="close" size={24} color={v_858289.text} />
              </TouchableOpacity>
            </View>
            <ScrollView style={v_d81136.infoModalContent}>
              <Text style={v_d81136.infoModalText}>
                {v_9e9019 !== null ? v_2c4b08(v_9e9019, v_8d41d7) : ''}
              </Text>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_858289.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },

  heroSection: {
    backgroundColor: v_858289.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  heroScoreValue: {
    fontSize: 48,
    fontFamily: v_843035.bold,
    color: v_858289.text,
  },
  heroScoreLabel: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
    marginTop: -4,
  },
  heartAgeContainer: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  heartAgeLabel: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
    marginBottom: 4,
  },
  heartAgeText: {
    fontSize: 16,
    fontFamily: v_843035.bold,
    color: v_858289.primary,
  },

  keyIndicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 8,
  },
  keyIndicatorItem: {
    flex: 1,
    backgroundColor: v_858289.white,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  keyIndicatorIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  keyIndicatorLabel: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    marginBottom: 4,
    textAlign: 'center',
  },
  keyIndicatorValue: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_858289.text,
  },
  keyIndicatorUnit: {
    fontSize: 10,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
  },

  tabContainer: {
    marginTop: 20,
    marginBottom: 16,
  },
  tabScrollContent: {
    paddingHorizontal: 0,
    gap: 8,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: v_858289.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: v_858289.cardBorder,
  },
  tabActive: {
    backgroundColor: v_858289.primary,
    borderColor: v_858289.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_858289.textSecondary,
  },
  tabTextActive: {
    color: v_858289.white,
  },

  contentSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_858289.text,
    marginBottom: 16,
  },
  sectionBadge: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },

  warningBanner: {
    flexDirection: 'row',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  warningBannerContent: {
    flex: 1,
    marginLeft: 12,
  },
  warningBannerTitle: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_858289.danger,
    marginBottom: 4,
  },
  warningBannerText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#DC2626',
    lineHeight: 18,
  },

  dataGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  dataCard: {
    width: (v_0d9f50 - 32 - 12) / 2,
    backgroundColor: v_858289.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  dataCardDanger: {
    borderWidth: 1,
    borderColor: v_858289.danger,
    backgroundColor: '#FEF2F2',
  },
  dataCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dataCardLabel: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
    flex: 1,
  },
  dataCardContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dataCardValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  dataCardValue: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: v_858289.text,
  },
  dataCardValueDanger: {
    color: v_858289.danger,
  },
  dataCardUnit: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    marginLeft: 4,
  },
  riskBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: v_858289.danger,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  riskBadgeText: {
    fontSize: 10,
    fontFamily: v_843035.bold,
    color: v_858289.white,
  },
  confidenceBadge: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  confidenceText: {
    fontSize: 10,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    marginTop: 12,
  },

  aiSection: {
    backgroundColor: v_858289.primary,
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  aiIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  aiIcon: {
    fontSize: 20,
  },
  aiTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_858289.white,
  },
  aiSubtitle: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  aiCommentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  aiCommentText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_858289.white,
    lineHeight: 22,
  },

  productCard: {
    backgroundColor: v_858289.white,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  productImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    flex: 1,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_858289.text,
    flex: 1,
  },
  recommendBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  recommendBadgeText: {
    fontSize: 10,
    fontFamily: v_843035.bold,
    color: v_858289.danger,
  },
  productDescription: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 16,
    fontFamily: v_843035.bold,
    color: v_858289.primary,
  },

  purchaseButton: {
    backgroundColor: v_858289.accent,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  purchaseButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  coinIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButtonText: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_858289.text,
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    textAlign: 'center',
    marginBottom: 8,
  },
  disclaimer: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_858289.textMuted,
    textAlign: 'center',
  },

  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: v_858289.white,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: v_858289.cardBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  infoModal: {
    backgroundColor: v_858289.white,
    borderRadius: 16,
    width: '100%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  infoModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: v_858289.cardBorder,
  },
  infoModalTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_858289.text,
    flex: 1,
  },
  infoModalContent: {
    padding: 16,
  },
  infoModalText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_858289.textSecondary,
    lineHeight: 22,
  },
});

export default v_cb47c8;
