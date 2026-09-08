import v_a3453e, { v_df9f57, v_5ab095, v_e662ae, v_de06a3 } from 'bapkr';
import {
  v_39a996,
  v_aa7413,
  v_bd64bf,
  v_da479e,
  v_326be8,
  v_09d0e5,
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_cf9c33,
  v_122070,
  v_a2349e,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_bf60de } from 'vpztcxjmsfanunln';
import { v_729608, v_570c34, v_556baf, v_cb41de, v_1c1837, v_d3705d, v_47f7b9 } from '../../components';
import v_16c240 from '../../components/SupplementRecommendCta';
import { v_dff48a } from '../../utils/aiTextFormat';
import { v_0d0e7d, type v_9a970c } from '../../utils/analysisResultTabletStyles';
import { v_2cc9f8 } from '../../utils/tabletLayout';
import { v_047250 } from './components';
import type { v_5d13be } from './components/HealthRecordsView';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_ef658a, v_9b1a04, v_d8cb4d, v_53f592 } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_723f2d } from '../../utils';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_5ade23 as v_6f705c } from 'xbfwaaanosqvazmrqoah';
import { v_1a7837, v_7ebf51 } from 'wjvlskvsbzsrojdbjsl';
import { v_a0daa8 } from '../../navigation';
import v_98de1f from './components/VitalSignInfoModal';
import { v_207199, v_8c9ccd, v_5112eb } from '../../services';
import { v_a6cea6, v_4e7146, v_7374eb, v_9da885, v_9d6425, v_014afc, v_b1cb48, type v_71beaa } from './vitalSignStatus';
import { v_1f53bf } from '../../hooks/useSystemConfig';
import { v_5a0119 } from '../../hooks/useUserRole';
import { v_4b2942 } from '../../context/PharmacistGuestContext';
import { v_e252f4, v_8ea5e8 } from '../../utils/pharmacyVisitorSave';

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

function v_11cdee({ name: v_1833e7 }: { name: string }) {
  return (
    <View style={v_da5121.wrapper}>
      <View style={v_da5121.avatar}>
        <Ionicons name="person-outline" size={16} color="#615FFF" />
      </View>
      <Text style={v_da5121.text} numberOfLines={1}>
        {v_1833e7}
      </Text>
    </View>
  );
}

type ValueParts = { value: string; unit: string };

function v_b73387({
  valueParts: v_1d99bf,
  tx: v_2f6fcc,
  isTablet: v_76eb7f,
  unitFontSize: v_79d7b4,
}: {
  valueParts: ValueParts;
  tx: (base: object, key: v_9a970c) => object;
  isTablet: boolean;
  unitFontSize?: number;
}) {
  return (
    <View style={[v_d81136.resultValueRow, v_76eb7f && v_d81136.resultValueRowTablet]}>
      <Text
        style={v_2f6fcc(v_d81136.resultValueText, 'resultValueText')}
        numberOfLines={v_76eb7f ? 1 : undefined}
        adjustsFontSizeToFit={v_76eb7f}
        minimumFontScale={v_76eb7f ? 0.85 : 1}
      >
        {v_1d99bf.value}
      </Text>
      {v_1d99bf.unit ? (
        <Text
          style={[
            v_2f6fcc(v_d81136.resultValueUnit, 'resultValueUnit'),
            v_76eb7f && {
              fontSize: v_79d7b4 ?? 14,
              marginBottom: 0,
              alignSelf: 'flex-start',
            },
          ]}
        >
          {v_1d99bf.unit}
        </Text>
      ) : null}
    </View>
  );
}

function v_523901({
  typeNum: v_653390,
  t: v_8d41d7,
}: {
  typeNum: number;
  t: (key: string) => string;
}) {
  if (!v_b1cb48() || v_9da885(v_653390)) return null;
  const v_3c1d34 = v_014afc(v_653390);
  if (!v_3c1d34) return null;
  return <Text style={v_d81136.vitalReferenceText}>{v_8d41d7(v_3c1d34)}</Text>;
}

const v_da5121 = v_472849.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(97, 95, 255, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    maxWidth: 120,
  },
});

type DisplayItem = {
  typeNum: number;
  label?: string;
  detailTypes?: number[];
};

type CategoryTab = { id: string; label: string };
function v_a3e57a({
  categories: v_8bc599,
  selectedCategory: v_69ddfb,
  onCategoryPress: v_654c04,
  tabContainerStyle: v_f7b28c,
  tabContentStyle: v_7b0220,
  tabButtonStyle: v_d5c4a8,
  tabButtonActiveStyle: v_b1f81c,
  tabTextStyle: v_293d85,
  tabTextActiveStyle: v_5348d7,
}: {
  categories: CategoryTab[];
  selectedCategory: string | null;
  onCategoryPress: (categoryId: string | null) => void;
  tabContainerStyle?: object;
  tabContentStyle?: object;
  tabButtonStyle?: object;
  tabButtonActiveStyle?: object;
  tabTextStyle?: object;
  tabTextActiveStyle?: object;
}) {
  const v_e99f51 = v_e662ae<v_122070>(null);
  const v_7ef1cd = v_e662ae(0);
  const v_1bcd7a = v_e662ae(0);
  const v_384389 = v_e662ae<{ x: number; width: number }[]>([]);
  const v_b930a3 = v_e662ae<string | null>(null);
  const v_1ede77 = v_e662ae(0);
  const v_166c39 = [0, 80, 200, 400];

  const v_203241 = v_8bc599.length + '-' + v_8bc599.map((v_3f4e2e) => v_3f4e2e.id).join(',');
  v_a3453e.useEffect(() => {
    v_384389.current = [];
  }, [v_203241]);

  v_a3453e.useEffect(() => {
    v_b930a3.current = v_69ddfb;
  }, [v_69ddfb]);

  const v_518d06 = v_de06a3((v_11a5aa): boolean => {
    if (v_11a5aa == null || v_7ef1cd.current <= 0) return false;
    const v_827eab = v_1bcd7a.current;
    if (v_827eab <= 0) return false;
    const v_a56041 = v_8bc599.findIndex((v_3f4e2e) => v_3f4e2e.id === v_11a5aa);
    if (v_a56041 < 0) return false;
    const v_6c4b91 = v_384389.current[v_a56041];
    if (!v_6c4b91) return false;
    const v_7e0b72 = v_7ef1cd.current;
    if (v_827eab <= v_7e0b72) return true;
    const v_4a1b87 = v_6c4b91.x + v_6c4b91.width / 2;
    let v_3a3e1f = v_4a1b87 - v_7e0b72 / 2;
    v_3a3e1f = Math.max(0, Math.min(v_3a3e1f, v_827eab - v_7e0b72));
    v_e99f51.current?.scrollTo({ x: v_3a3e1f, animated: true });
    return true;
  }, [v_8bc599]);

  const v_172ddf = v_de06a3(() => {
    const v_5f5d6d = v_b930a3.current;
    if (v_5f5d6d != null) v_518d06(v_5f5d6d);
  }, [v_518d06]);

  const v_b6a3a0 = v_de06a3((v_11a5aa) => {
    if (v_11a5aa == null) return;
    v_b930a3.current = v_11a5aa;
    v_1ede77.current = 0;
    const v_6a2f36 = () => {
      if (v_518d06(v_11a5aa)) return;
      v_1ede77.current += 1;
      const v_e86ad8 = v_1ede77.current;
      if (v_e86ad8 < v_166c39.length) {
        setTimeout(v_6a2f36, v_166c39[v_e86ad8]);
      }
    };
    v_6a2f36();
  }, [v_518d06]);

  v_a3453e.useEffect(() => {
    if (v_69ddfb != null) v_b6a3a0(v_69ddfb);
  }, [v_69ddfb, v_b6a3a0]);

  if (v_8bc599.length === 0) return null;

  return (
    <View style={v_f7b28c}>
      <ScrollView
        ref={v_e99f51}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={v_7b0220}
        onLayout={(v_9e86fd) => {
          v_7ef1cd.current = v_9e86fd.nativeEvent.layout.width;
          v_172ddf();
        }}
        onContentSizeChange={(v_32f7b8) => {
          v_1bcd7a.current = v_32f7b8;
          v_172ddf();
        }}
      >
        {v_8bc599.map((v_8b9cd4, v_a56041) => {
          const v_599a41 = v_69ddfb === v_8b9cd4.id;
          return (
            <View
              key={v_8b9cd4.id}
              onLayout={(v_9e86fd) => {
                const { x: v_62c214, width: v_8e4fb6 } = v_9e86fd.nativeEvent.layout;
                v_384389.current[v_a56041] = { x: v_62c214, width: v_8e4fb6 };
                v_172ddf();
              }}
            >
              <TouchableOpacity
                style={[v_d5c4a8, v_599a41 && v_b1f81c]}
                onPress={() => v_654c04(v_599a41 ? null : v_8b9cd4.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: v_599a41 }}
              >
                <Text style={[v_293d85, v_599a41 && v_5348d7]}>
                  {v_8b9cd4.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

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
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.vitals.high_blood_pressure_risk_desc_ios') : v_8d41d7('health_analysis.vitals.high_blood_pressure_risk_desc'),
    [v_e3e816.ASCVD_RISK]: v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.vitals.ascvd_risk_desc_ios') : v_8d41d7('health_analysis.vitals.ascvd_risk_desc'),
    [v_e3e816.NORMALIZED_STRESS_INDEX]: v_8d41d7('health_analysis.vitals.normalized_stress_index_desc'),
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: v_8d41d7('health_analysis.vitals.high_total_cholesterol_risk_desc'),
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: v_8d41d7('health_analysis.vitals.high_fasting_glucose_risk_desc'),
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: v_8d41d7('health_analysis.vitals.low_hemoglobin_risk_desc'),
    [v_e3e816.ASCVD_RISK_LEVEL]: v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.vitals.ascvd_risk_level_desc_ios') : v_8d41d7('health_analysis.vitals.ascvd_risk_level_desc'),
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

const v_2e7086 = (v_3b27d9, v_3b402b, v_8d41d7): string | null => {
  const v_ed9d34 = [
    v_e3e816.ASCVD_RISK_LEVEL,
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];

  if (v_ed9d34.includes(v_3b27d9)) {
    const v_842d09 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);

    if (v_842d09 === 0 || v_842d09 === 1) {
      return v_8d41d7('health_analysis.result.risk_normal');
    } else if (v_842d09 === 2) {
      return v_8d41d7('health_analysis.result.risk_caution'); 
    } else if (v_842d09 === 3) {
      return v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.risk_warning_ios') : v_8d41d7('health_analysis.result.risk_warning'); 
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

  if (v_3b27d9 === v_e3e816.ASCVD_RISK) {
    const v_842d09 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_842d09)) {
      return `${v_842d09.toFixed(1)}%`;
    }
  }

  const v_ed9d34 = [
    v_e3e816.ASCVD_RISK_LEVEL,
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];
  if (v_ed9d34.includes(v_3b27d9)) {
    const v_842d09 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
    if (!isNaN(v_842d09)) {
      if (v_842d09 === 0) {
        return v_8d41d7('health_analysis.result.risk_level_unknown');
      } else if (v_842d09 === 1) {
        return v_8d41d7('health_analysis.result.risk_level_low');
      } else if (v_842d09 === 2) {
        return v_8d41d7('health_analysis.result.risk_level_moderate');
      } else if (v_842d09 === 3) {
        return v_8d41d7('health_analysis.result.risk_level_high');
      }
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
  const { navigate: v_9b57fc } = v_a0daa8();
  const { results: v_a7f568, timestamp: v_42044e, userName: v_f08a5e, accounts: v_f074c5, selectedAccountId: v_565544, userInfo: v_bb789b, savedBeforeNavigate: v_04b545, recordId: v_ebdbf7, fromHistory: v_4c18b6 } = v_c7daf6.params;
  const [v_ac1d22, v_02dd63] = v_5ab095<'measure' | 'records'>('measure');
  const v_033e14 = v_e0068c();
  const v_6c4b91 = v_2cc9f8();
  const { merge: v_2f6fcc, isTablet: v_76eb7f, typo: v_52101f } = v_0d0e7d();

  const v_39c3a4 = v_df9f57(
    () => Math.min(v_6c4b91.width, v_6c4b91.contentColumnWidth),
    [v_6c4b91.width, v_6c4b91.contentColumnWidth]
  );

  v_1f53bf();
  const v_5f6b8d = v_5a0119();
  const v_160272 = v_5f6b8d === 'pharmacist';
  const { verifiedGuest: v_3de945 } = v_4b2942();

  const v_48f046 = v_f074c5 || [
    { id: '1', name: v_f08a5e || v_8d41d7('health_analysis.default_user_name', '나'), isCurrent: true },
  ];
  const [v_c86f08, v_d690d0] = v_5ab095(v_48f046);
  const [v_e7b2f2, v_1f1e88] = v_5ab095(v_565544 || '1');

  const v_a64f0f = v_df9f57(() => {
    if (v_160272 && v_3de945?.name?.trim()) {
      return v_3de945.name.trim();
    }
    if (v_f08a5e?.trim()) {
      return v_f08a5e.trim();
    }
    const v_587413 = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2);
    if (v_587413?.name?.trim()) {
      return v_587413.name.trim();
    }
    const v_275ccd = v_c86f08.find((v_779914) => v_779914.isCurrent);
    if (v_275ccd?.name?.trim()) {
      return v_275ccd.name.trim();
    }
    return v_8d41d7('health_analysis.default_user_name', '나');
  }, [v_160272, v_3de945?.name, v_f08a5e, v_c86f08, v_e7b2f2, v_8d41d7]);

  const v_5bc46a = (v_2453ad) => {
    v_d690d0((v_ba2215) => v_ba2215.filter((v_779914) => v_779914.id !== v_2453ad));
    v_1f1e88((v_ba2215) => (v_ba2215 === v_2453ad ? '1' : v_ba2215));
  };

  const v_42b67a = (v_2453ad) => {
    v_c65f5d.navigate('AddSubAccount');
  };

  const [v_571c37, v_e78f19] = v_5ab095<Record<number, boolean>>({});

  const [v_49e71a, v_f2b4a8] = v_5ab095<Record<number, boolean>>({});

  const [v_7bfc20, v_5da58e] = v_5ab095<Record<string, boolean>>({});

  const [v_e70158, v_19e3c6] = v_5ab095<{
    detailKey: string;
    typeNum: number;
    name: string;
    validDetailTypes: number[];
  } | null>(null);
  const [v_6f0881, v_2fba89] = v_5ab095<InfoModalType>(null);
  const [v_9e9019, v_13a008] = v_5ab095<number | null>(null);
  const [v_d4a21d, v_ea36df] = v_5ab095<string | null>(null);
  const [v_0cc882, v_b4f3ee] = v_5ab095<number | null>(null);
  const [v_1f3747, v_75fa2e] = v_5ab095(false);
  const v_224a01 = __DEV__ ? 0 : 0;

  const [v_1f3df1, v_017104] = v_5ab095<{
    name: string;
    description: string;
  } | null>(null);

  const [v_69ddfb, v_09b78b] = v_5ab095<string | null>(null);

  const [v_7018dd, v_35a1d0] = v_5ab095(0);

  const [v_e399bf, v_b11b33] = v_5ab095<string | null>(null);
  const [v_85cf60, v_952b9d] = v_5ab095(false);
  const v_f4f730 = v_e662ae<number | null>(null);
  const [v_4ae380, v_43dcda] = v_5ab095<number | null>(null);

  const v_61a127 = v_e662ae<v_122070>(null);

  v_a3453e.useEffect(() => {
    v_35a1d0(0);

    v_61a127.current?.scrollTo({ x: 0, animated: true });
  }, [v_69ddfb]);

  v_a3453e.useEffect(() => {
    console.log('[AI 분석 effect]', {
      ollamaAnalysis: !!v_e399bf,
      isOllamaLoading: v_85cf60,
      savedRecordId: v_4ae380,
      savedRecordIdRef: v_f4f730.current,
    });
    if (v_e399bf || v_85cf60) return;
    const v_fbf3b0 = v_f4f730.current;
    if (!v_fbf3b0) {
      console.warn('[AI 분석] recordId 없음 - AI 호출 스킵. savedRecordId state:', v_4ae380);
      return;
    }
    console.log('[AI 분석] Ollama 호출 시작, recordId:', v_fbf3b0);
    v_952b9d(true);
    v_5112eb(v_fbf3b0)
      .then((v_43c42e) => v_b11b33(v_43c42e))
      .catch((v_9e86fd) => console.warn('[건강분석] AI 분석 실패:', v_9e86fd))
      .finally(() => v_952b9d(false));

  }, [v_4ae380]);

  const v_8bc599 = v_df9f57(() => [
    { id: 'vital-signs', label: v_8d41d7('health_analysis.result.category_vital_signs') },
    { id: 'stress-recovery', label: v_8d41d7('health_analysis.result.category_stress_recovery') },
    { id: 'blood-tests', label: v_8d41d7('health_analysis.result.category_blood_tests') },
    { id: 'cardiovascular', label: v_8d41d7('health_analysis.result.category_cardiovascular') },
    { id: 'respiratory', label: v_8d41d7('health_analysis.result.category_respiratory') },
    { id: 'risks', label: '미래위험도' },
  ], [v_8d41d7]);

  const v_153eb4 = v_df9f57(() => {
    const v_8dcb51 = {
      'vital-signs': [
        v_e3e816.BLOOD_PRESSURE,
        v_e3e816.PULSE_RATE,
        v_e3e816.RESPIRATION_RATE,
        v_e3e816.OXYGEN_SATURATION,
        v_e3e816.CARDIAC_WORKLOAD,
        v_e3e816.PULSE_PRESSURE,
        v_e3e816.MEAN_ARTERIAL_PRESSURE,
      ],
      'risks': [
        v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
        v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
        v_e3e816.ASCVD_RISK,
        v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
        v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
        v_e3e816.LOW_HEMOGLOBIN_RISK,
        v_e3e816.HEART_AGE,
      ],
      'blood-tests': [
        v_e3e816.HEMOGLOBIN,
        v_e3e816.HEMOGLOBIN_A1C,
      ],
      'cardiovascular': [
        v_e3e816.BLOOD_PRESSURE,
        v_e3e816.PULSE_RATE,
        v_e3e816.OXYGEN_SATURATION,
        v_e3e816.SDNN,
        v_e3e816.PRQ,
        v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
        v_e3e816.ASCVD_RISK,
        v_e3e816.HEART_AGE,
        v_e3e816.CARDIAC_WORKLOAD,
        v_e3e816.PULSE_PRESSURE,
        v_e3e816.MEAN_ARTERIAL_PRESSURE,
      ],
      'respiratory': [
        v_e3e816.RESPIRATION_RATE,
        v_e3e816.PRQ,
      ],
      'stress-recovery': [
        v_e3e816.SDNN,
        v_e3e816.SNS_ZONE,
        v_e3e816.STRESS_LEVEL,
        v_e3e816.PNS_ZONE,
      ],
    };

    const v_a634cb = {};
    Object.entries(v_8dcb51).forEach(([v_b24339, v_db0487]) => {
      v_a634cb[v_b24339] = v_db0487.filter(v_3b27d9 => !v_9da885(v_3b27d9));
    });
    return v_a634cb;
  }, []);

  const v_bc04a2 = v_df9f57(() => {
    const v_4622b9 = [

      { typeNum: v_e3e816.BLOOD_PRESSURE },

      { typeNum: v_e3e816.PULSE_RATE },

      { typeNum: v_e3e816.RESPIRATION_RATE },

      { typeNum: v_e3e816.OXYGEN_SATURATION },

      { typeNum: v_e3e816.SDNN, label: v_8d41d7('health_analysis.result.hrv_variability') },
      { typeNum: v_e3e816.RMSSD },
      { typeNum: v_e3e816.MEAN_RRI },
      { typeNum: v_e3e816.SD1 },
      { typeNum: v_e3e816.SD2 },

      { typeNum: v_e3e816.SNS_ZONE, label: v_8d41d7('health_analysis.result.stress_response') },
      { typeNum: v_e3e816.SNS_INDEX },

      { typeNum: v_e3e816.STRESS_LEVEL },
      { typeNum: v_e3e816.STRESS_INDEX },
      { typeNum: v_e3e816.NORMALIZED_STRESS_INDEX },

      { typeNum: v_e3e816.PNS_ZONE, label: v_8d41d7('health_analysis.result.recovery_ability') },
      { typeNum: v_e3e816.PNS_INDEX },

      { typeNum: v_e3e816.PRQ },

      { typeNum: v_e3e816.HEMOGLOBIN },

      { typeNum: v_e3e816.HEMOGLOBIN_A1C },

      { typeNum: v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK },

      { typeNum: v_e3e816.HIGH_BLOOD_PRESSURE_RISK },

      { typeNum: v_e3e816.ASCVD_RISK },

      { typeNum: v_e3e816.HIGH_FASTING_GLUCOSE_RISK },

      { typeNum: v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK },

      { typeNum: v_e3e816.LOW_HEMOGLOBIN_RISK },

      { typeNum: v_e3e816.HEART_AGE },

      { typeNum: v_e3e816.CARDIAC_WORKLOAD },

      { typeNum: v_e3e816.PULSE_PRESSURE },

      { typeNum: v_e3e816.MEAN_ARTERIAL_PRESSURE },
    ];

    return v_4622b9.filter(v_8c0b26 => !v_9da885(v_8c0b26.typeNum));
  }, [v_8d41d7]);

  const v_930bc7 = v_df9f57(() => new Set([
    v_e3e816.WELLNESS_INDEX,
    v_e3e816.WELLNESS_LEVEL,

  ]), []);

  const v_ed9d34 = [
    v_e3e816.ASCVD_RISK_LEVEL,
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ];

  const v_7acdeb = v_df9f57(() => {
    let v_4622b9 = v_bc04a2;

    if (v_69ddfb) {
      const v_c40786 = v_153eb4[v_69ddfb as keyof typeof v_153eb4] || [];
      v_4622b9 = v_4622b9.filter(v_8c0b26 => v_c40786.includes(v_8c0b26.typeNum));
    }

    return v_4622b9.filter(v_8c0b26 => {
      if (v_930bc7.has(v_8c0b26.typeNum)) return false;
      const v_3b402b = v_a7f568?.[v_8c0b26.typeNum]?.value;
      if (v_3b402b === undefined || v_3b402b === null) return false;

      if (Array.isArray(v_3b402b)) return false;

      if (typeof v_3b402b === 'number' && v_3b402b === -1) return false;
      if (typeof v_3b402b === 'string' && Number(v_3b402b) === -1) return false;

      if (v_ed9d34.includes(v_8c0b26.typeNum)) {
        const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
        if (v_549ed3 === 0) return false;
      }
      return true;
    });
  }, [v_bc04a2, v_69ddfb, v_153eb4, v_930bc7, v_a7f568, v_ed9d34]);

  const v_e99f51 = v_e662ae<v_122070>(null);
  const v_aa48a7 = v_e662ae<Record<string, v_3094a2 | null>>({
    'vital-signs': null,
    'respiratory': null,
    'stress': null,
    'recovery': null,
    'stress-response': null,
  });
  const v_b1db35 = v_e662ae<Record<string, number>>({});

  const v_7a44c5 = v_e662ae(0); 

  const v_364a3f = v_e662ae<Record<number, number>>({});

  const v_0bbee6 = v_e662ae(new v_a2349e.Value(0)).current;
  const v_1e0e1c = v_e662ae(114); 
  const v_685d2a = v_e662ae<v_3094a2 | null>(null);
  const v_91eb96 = v_e662ae(0); 

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
  const v_a6fc94 = () => {
    v_13a008(null);
    v_ea36df(null);
  };
  const v_ade09d = () => v_b4f3ee(null);

  const v_d97574 = (v_130c5c) => {
    v_5da58e(v_ba2215 => ({
      ...v_ba2215,
      [v_130c5c]: !v_ba2215[v_130c5c],
    }));
  };

  const ExpandableDescription: v_a3453e.FC<{
    description: string;
    descriptionKey: string;
    typeNum?: number;
    hasInfo?: boolean;
    name?: string;
    numberOfLines?: number;
  }> = ({ description: v_6856a9, descriptionKey: v_ce4ff1, typeNum: v_653390, hasInfo: v_4b27b8, name: v_1833e7, numberOfLines: v_25883c = 2 }) => {
    const v_f47928 = () => {
      if (v_4b27b8 && v_653390 != null) {
        v_13a008(v_653390);
        v_ea36df(null);
      } else if (v_1833e7 != null) {
        v_017104({ name: v_1833e7, description: v_6856a9 });
      }
    };

    const v_26aea3 = v_4b27b8 && v_653390 != null
      ? true
      : v_6856a9.length > 60;

    return (
      <View>
        <Text
          style={v_d81136.descriptionText}
          numberOfLines={v_25883c}
          ellipsizeMode="tail"
        >
          {v_6856a9}
        </Text>
        {v_26aea3 && (
          <TouchableOpacity
            onPress={v_f47928}
            style={v_d81136.expandDescriptionButton}
            activeOpacity={0.7}
          >
            <Text style={v_d81136.expandDescriptionText}>
              {v_8d41d7('health_analysis.result.show_detail')}
            </Text>
            <Ionicons name="chevron-forward" size={14} color={v_1bfbd0.primary} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const v_3ca263 = (v_ba91d0) => {
    const v_755a94 = v_aa48a7.current[v_ba91d0];
    const v_64205a = v_1e0e1c.current;

    if (v_755a94 && v_e99f51.current) {
      v_755a94.measureLayout(
        v_e99f51.current as any,
        (v_62c214, v_64877a) => {
          v_e99f51.current?.scrollTo({
            y: Math.max(0, v_64877a - v_64205a - 20),
            animated: true
          });
        },
        () => {
          const v_4da25a = v_b1db35.current[v_ba91d0];
          if (v_4da25a !== undefined) {
            v_e99f51.current?.scrollTo({
              y: Math.max(0, v_4da25a - v_64205a - 20),
              animated: true
            });
          }
        }
      );
    } else {
      const v_4da25a = v_b1db35.current[v_ba91d0];
      if (v_4da25a !== undefined && v_e99f51.current) {
        v_e99f51.current.scrollTo({
          y: Math.max(0, v_4da25a - v_64205a - 20),
          animated: true
        });
      }
    }
  };

  const v_66288c = (v_ba91d0) => (v_d48baf) => {
    const { y: v_64877a } = v_d48baf.nativeEvent.layout;
    v_b1db35.current[v_ba91d0] = v_64877a;
  };

  const v_6eac53 = v_e662ae<ReturnType<typeof setTimeout> | null>(null);
  const v_6ef413 = v_e662ae(false);
  const v_fe1cb8 = v_e662ae<ReturnType<typeof setTimeout> | null>(null);

  const v_941b26 = v_a2349e.event(
    [{ nativeEvent: { contentOffset: { y: v_0bbee6 } } }],
    {
      useNativeDriver: false,
      listener: (v_d48baf) => {
        const v_8ebb45 = v_d48baf.nativeEvent.contentOffset.y;
        v_7a44c5.current = v_8ebb45;
        v_6ef413.current = true;

        if (v_fe1cb8.current) {
          clearTimeout(v_fe1cb8.current);
        }
        v_fe1cb8.current = setTimeout(() => {
          v_6ef413.current = false;
        }, 500);
      },
    }
  );

  const v_0ee1c1 = (v_11a5aa) => {
    v_09b78b(v_11a5aa);
  };

  const v_311b14 = (v_332b51): InfoModalType => {
    if (v_332b51 === v_e3e816.WELLNESS_INDEX) {
      return 'wellnessIndex';
    } else if (v_332b51 === v_e3e816.WELLNESS_LEVEL) {
      return 'wellnessLevel';
    }
    return null;
  };

  const v_b1b76c = [
    v_e3e816.WELLNESS_INDEX,

  ];

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

  const v_1f8651 = (v_653390) => {
    const v_3b402b = v_df7b8f(v_653390);
    if (v_3b402b === undefined) {
      return null;
    }

    if (v_ed9d34.includes(v_653390)) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (v_549ed3 === 0) {
        return null; 
      }
    }

    return v_a6fe82(v_3b402b, v_653390, v_8d41d7);
  };

  const v_30687d = (v_cabbe9): { label: string; color: string; percentValue?: number } | null => {

    if (!v_cabbe9 || v_cabbe9 === undefined) {
      return null;
    }

    let v_205f1f = null;
    if (typeof v_cabbe9 === 'object' && v_cabbe9 !== null && v_cabbe9.level !== undefined) {
      v_205f1f = typeof v_cabbe9.level === 'number' ? v_cabbe9.level : Number(v_cabbe9.level);
    } else if (typeof v_cabbe9 === 'number') {

      v_205f1f = v_cabbe9;
    } else {

      const v_8decf8 = Number(v_cabbe9);
      if (isNaN(v_8decf8)) {
        return null;
      }
      v_205f1f = v_8decf8;
    }

    if (v_205f1f === null || isNaN(v_205f1f)) {
      return null;
    }

    if (v_205f1f === 3) {

      return { label: v_8d41d7('health_analysis.result.confidence_high'), color: '#4CAF50', percentValue: undefined }; 
    } else if (v_205f1f === 2) {

      return { label: v_8d41d7('health_analysis.result.confidence_medium'), color: '#FFC107', percentValue: undefined }; 
    } else if (v_205f1f === 1) {

      return { label: v_8d41d7('health_analysis.result.confidence_low'), color: '#FF9800', percentValue: undefined }; 
    } else {

      return null;
    }
  };

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

  const v_02a5a0 = v_e662ae<boolean>(false);
  const v_f013b2 = v_e662ae<string | null>(null);

  v_a3453e.useEffect(() => {
    const v_329ab2 = async () => {
      if (!v_a7f568 || Object.keys(v_a7f568).length === 0) {
        return;
      }
      if (v_04b545) {
        v_02a5a0.current = true;
        v_f013b2.current = v_42044e;

        if (v_ebdbf7) {
          v_f4f730.current = v_ebdbf7;
          v_43dcda(v_ebdbf7);
          console.log('[AI 분석] savedBeforeNavigate - routeRecordId 설정:', v_ebdbf7);
        } else {
          console.warn('[AI 분석] savedBeforeNavigate=true 이지만 routeRecordId 없음 → AI 분석 불가');
        }
        return;
      }

      if (v_02a5a0.current && v_f013b2.current === v_42044e) {
        if (__DEV__) {
          console.log('[HealthAnalysisResultScreen] 이미 저장된 측정 결과 - 중복 저장 방지:', {
            timestamp: v_42044e,
            savedTimestamp: v_f013b2.current,
          });
        }
        return;
      }

      try {

        const v_80d73f = new Date(v_42044e);

        const v_0eaaff = v_80d73f.getFullYear();
        const v_033a94 = String(v_80d73f.getMonth() + 1).padStart(2, '0');
        const v_087ffc = String(v_80d73f.getDate()).padStart(2, '0');
        const v_067e65 = `${v_0eaaff}-${v_033a94}-${v_087ffc}`;

        const v_12ebc1 = String(v_80d73f.getHours()).padStart(2, '0');
        const v_ef3543 = String(v_80d73f.getMinutes()).padStart(2, '0');
        const v_dcf6a6 = `${v_12ebc1}:${v_ef3543}`;

        const v_1689c5 = v_2586c7(v_df7b8f(v_e3e816.WELLNESS_INDEX));
        const v_e93dff = v_1689c5 !== null ? v_1689c5 : 0;

        const v_477184 = (v_a56041): string => {
          if (v_a56041 >= 7) return 'good';
          if (v_a56041 >= 4) return 'normal';
          return 'bad';
        };
        const v_30ddf9 = v_477184(v_e93dff);

        const v_0946e7 = {};

        const v_13d5ab = (v_653390): string => {
          const v_f2dfb8 = {
            [v_e3e816.PULSE_RATE]: 'pulse_rate',
            [v_e3e816.RESPIRATION_RATE]: 'respiration_rate',
            [v_e3e816.OXYGEN_SATURATION]: 'oxygen_saturation',
            [v_e3e816.BLOOD_PRESSURE]: 'blood_pressure',
            [v_e3e816.SDNN]: 'sdnn',
            [v_e3e816.RMSSD]: 'rmssd',
            [v_e3e816.MEAN_RRI]: 'mean_rri',
            [v_e3e816.SD1]: 'sd1',
            [v_e3e816.SD2]: 'sd2',
            [v_e3e816.SNS_ZONE]: 'sns_zone',
            [v_e3e816.SNS_INDEX]: 'sns_index',
            [v_e3e816.STRESS_LEVEL]: 'stress_level',
            [v_e3e816.STRESS_INDEX]: 'stress_index',
            [v_e3e816.NORMALIZED_STRESS_INDEX]: 'normalized_stress_index',
            [v_e3e816.PNS_ZONE]: 'pns_zone',
            [v_e3e816.PNS_INDEX]: 'pns_index',
            [v_e3e816.PRQ]: 'prq',
            [v_e3e816.HEMOGLOBIN]: 'hemoglobin',
            [v_e3e816.HEMOGLOBIN_A1C]: 'hemoglobin_a1c',
            [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: 'high_hemoglobin_a1c_risk',
            [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: 'high_blood_pressure_risk',
            [v_e3e816.ASCVD_RISK]: 'ascvd_risk',
            [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: 'high_fasting_glucose_risk',
            [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: 'high_total_cholesterol_risk',
            [v_e3e816.LOW_HEMOGLOBIN_RISK]: 'low_hemoglobin_risk',
            [v_e3e816.HEART_AGE]: 'heart_age',
            [v_e3e816.CARDIAC_WORKLOAD]: 'cardiac_workload',
            [v_e3e816.PULSE_PRESSURE]: 'pulse_pressure',
            [v_e3e816.MEAN_ARTERIAL_PRESSURE]: 'mean_arterial_pressure',
            [v_e3e816.LFHF]: 'lfhf',
            [v_e3e816.ASCVD_RISK_LEVEL]: 'ascvd_risk_level',
            [v_e3e816.BODY_TENSION_SCORE]: 'body_tension_score',
            [v_e3e816.WELLNESS_INDEX]: 'wellness_index',
            [v_e3e816.WELLNESS_LEVEL]: 'wellness_level',
          };

          if (!v_f2dfb8[v_653390]) {

            return `unknown_${v_653390}`;
          }
          return v_f2dfb8[v_653390];
        };

        Object.entries(v_a7f568).forEach(([v_3b27d9, v_9390e8]) => {
          const v_653390 = Number(v_3b27d9);
          const v_3b402b = (v_9390e8 as any).value;

          if (v_3b402b !== null && v_3b402b !== undefined) {

            const v_823608 = v_13d5ab(v_653390);

            if (!v_7374eb(v_823608, v_3b402b)) {
              return;
            }

            const v_d308b5 = v_4e7146(v_653390, v_3b402b, (v_9390e8 as any).status, (v_f4e98d) => v_a7f568?.[v_f4e98d]?.value);

            v_0946e7[v_823608] = {
              value: v_3b402b,
              ...(v_d308b5 && { status: v_d308b5 }),
              ...((v_9390e8 as any).confidence && { confidence: (v_9390e8 as any).confidence }),
            };
          }
        });

        const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2);
        const v_083682 = v_0c2f9b?.isCurrent === true;

        const v_f6ed03 = v_e7b2f2 && v_e7b2f2.startsWith('sub-')
          ? v_e7b2f2.replace('sub-', '')
          : v_e7b2f2;
        const v_ee2acd = v_083682 ? undefined : (v_f6ed03 && v_f6ed03 !== '1' && v_f6ed03 !== 'me' ? Number(v_f6ed03) : undefined);

        const v_60e8e0 = {
          record_date: v_067e65, 
          record_time: v_dcf6a6, 
          health_index: v_e93dff,
          health_level: v_30ddf9,
          vital_signs: v_0946e7,
          ...(v_ee2acd && { sub_account_id: v_ee2acd }),
          metadata: {
            device: 'FzljtiliSignal SDK',
            timestamp: v_42044e,

            ...(v_bb789b && {
              user_info: {
                ...(v_bb789b.age && { age: v_bb789b.age }),
                ...(v_bb789b.gender && { gender: v_bb789b.gender }),
                ...(v_bb789b.weight && { weight: v_bb789b.weight }),
                ...(v_bb789b.height && { height: v_bb789b.height }),
                ...(v_bb789b.smokingStatus && { smoking_status: v_bb789b.smokingStatus }),
                ...(v_bb789b.bloodPressureStatus && { blood_pressure_status: v_bb789b.bloodPressureStatus }),
              },
            }),
          },
        };

        if (__DEV__) {
          console.log('[HealthAnalysisResultScreen] 건강 측정 저장 시작:', {
            recordDate: v_067e65,
            recordTime: v_dcf6a6,
            healthIndex: v_e93dff,
            healthLevel: v_30ddf9,
            subAccountId: v_ee2acd,
            isMyAccount: v_083682,
            vitalSignsCount: Object.keys(v_0946e7).length,
            payload: {
              ...v_60e8e0,
              vital_signs: '[...]', 
            },
          });
          console.log('[HealthAnalysisResultScreen] vital_signs 전체 데이터:', JSON.stringify(v_0946e7, null, 2));
        }

        let v_0bce57 = null;
        if (v_8ea5e8(v_5f6b8d, v_3de945)) {
          v_0bce57 = await v_e252f4({
            verifiedGuest: v_3de945,
            kind: 'health',
            payload: v_60e8e0 as Record<string, unknown>,
          });
        } else {
          const v_23eae7 = await v_207199(v_60e8e0);
          v_0bce57 = v_23eae7.id ?? (v_23eae7 as any).record_id ?? null;
        }

        v_f4f730.current = v_0bce57;
        v_43dcda(v_0bce57);

        if (!v_8ea5e8(v_5f6b8d, v_3de945)) {
          try {
            if (v_0bce57) {
              await v_8c9ccd('health_analysis', v_0bce57);
            }
          } catch (v_892e09) {
            console.warn('[HealthAnalysisResultScreen] 검진 비용 차감 실패:', v_892e09);
          }
        }

        v_02a5a0.current = true;
        v_f013b2.current = v_42044e;

        if (__DEV__) {
          console.log('[HealthAnalysisResultScreen] 건강 측정 저장 성공 - recordId:', v_0bce57);
        }
      } catch (v_5e9bfe) {
        console.error('[HealthAnalysisResultScreen] 건강 측정 저장 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
          stack: v_5e9bfe instanceof Error ? v_5e9bfe.stack : undefined,
        });

      }
    };

    v_329ab2();

  }, [v_42044e]); 

  const v_afc36a = v_df9f57(() => {
    if (v_6f0881 === 'wellnessIndex') {
      return v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.wellness_score_help_text_ios') : v_8d41d7('health_analysis.result.wellness_score_help_text');
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

    const v_812146 = (v_fd5f43): number => {
      if (v_fd5f43 <= 3) return (v_fd5f43 / 3) * 0.33;
      if (v_fd5f43 <= 6) return 0.33 + ((v_fd5f43 - 4) / 3) * 0.33;
      return 0.66 + ((v_fd5f43 - 7) / 3) * 0.34;
    };
    const v_09e739 = v_812146(v_740dd8);
    const v_4b6102 = -Math.PI / 2 + v_09e739 * 2 * Math.PI;
    const v_e75d3b = v_0288f8 + v_0c21c9 * Math.cos(v_4b6102);
    const v_576627 = v_0288f8 + v_0c21c9 * Math.sin(v_4b6102);
    const v_5bc297 = v_740dd8 <= 3 ? '#DC2626' : v_740dd8 <= 6 ? '#FBBF24' : '#22C55E';

    return (
      <View style={v_d81136.wellnessCard} key={v_653390}>
        <View style={v_d81136.wellnessGaugeWrapper}>
          <Svg width={v_778b2d} height={v_778b2d}>
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
          <View style={v_d81136.wellnessGaugeText}>
            <Text style={v_2f6fcc(v_d81136.wellnessScoreText, 'wellnessScoreText')}>{`${v_740dd8}/10`}</Text>
            <Text style={v_2f6fcc(v_d81136.wellnessScoreLabel, 'wellnessScoreLabel')}>{v_3a09c2}</Text>
          </View>
        </View>
        <View style={v_d81136.wellnessTitleRow}>
          <Text style={v_2f6fcc(v_d81136.wellnessTitle, 'wellnessTitle')}>
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

  const v_0aaeba = (v_653390, v_3b402b): v_71beaa | null =>
    v_a6cea6(v_653390, v_3b402b, v_df7b8f);

  const v_463ca2 = (status: v_71beaa | null) => {
    if (v_d308b5 === '위험') {
      return {
        text: v_d8cb4d.warning.color,
        background: v_d8cb4d.warning.backgroundColor,
        border: v_d8cb4d.warning.borderColor,
      };
    }
    if (v_d308b5 === '정상') {
      return {
        text: v_d8cb4d.good.color,
        background: v_d8cb4d.good.backgroundColor,
        border: v_d8cb4d.good.borderColor,
      };
    }
    return {
      text: v_1bfbd0.secondaryText,
      background: v_1bfbd0.backgroundSecondary,
      border: v_1bfbd0.border,
    };
  };

  const v_08e501 = v_df9f57(() => {
    const v_bb8024 = new Set<number>([
      v_e3e816.WELLNESS_LEVEL,
      v_e3e816.HEART_AGE,
      v_e3e816.WELLNESS_INDEX,
    ]);

    const v_f0dd16 = Object.values(v_e3e816).filter(
      (v_81e2ef): v_81e2ef is number => typeof v_81e2ef === 'number',
    );
    for (const v_653390 of v_f0dd16) {
      if (v_9da885(v_653390)) {
        v_bb8024.add(v_653390);
      }
    }

    return v_bb8024;
  }, []);

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

  const v_f1235f = v_df9f57(() => {
    const v_f5338f = [];
    const v_b4203b = [];
    const v_fd4243 = new Set<string>();

    const v_e9e885 = (v_653390, v_3b402b) => {
      if (v_3b402b === undefined || v_3b402b === null) return;
      if (v_08e501.has(v_653390)) return;
      const v_1833e7 = v_50f905(v_653390, v_8d41d7);
      const v_870d58 = v_a6fe82(v_3b402b, v_653390, v_8d41d7);
      const v_d308b5 = v_0aaeba(v_653390, v_3b402b);
      if (v_d308b5 === '위험') {
        v_f5338f.push({ typeNum: v_653390, name: v_1833e7, valueText: v_870d58 });

        if ([v_e3e816.BLOOD_PRESSURE, v_e3e816.HIGH_BLOOD_PRESSURE_RISK, v_e3e816.PULSE_PRESSURE, v_e3e816.MEAN_ARTERIAL_PRESSURE].includes(v_653390)) {
          v_fd4243.add('ai_advice_blood_pressure');
        }
        if ([v_e3e816.STRESS_LEVEL, v_e3e816.SNS_ZONE, v_e3e816.PNS_ZONE].includes(v_653390)) {
          v_fd4243.add('ai_advice_stress');
        }
        if ([v_e3e816.PULSE_RATE, v_e3e816.SDNN, v_e3e816.PRQ, v_e3e816.CARDIAC_WORKLOAD].includes(v_653390)) {
          v_fd4243.add('ai_advice_cardiovascular');
        }
        if ([v_e3e816.OXYGEN_SATURATION, v_e3e816.RESPIRATION_RATE].includes(v_653390)) {
          v_fd4243.add('ai_advice_respiratory');
        }
        if ([v_e3e816.HEMOGLOBIN, v_e3e816.HEMOGLOBIN_A1C, v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK, v_e3e816.LOW_HEMOGLOBIN_RISK, v_e3e816.HIGH_FASTING_GLUCOSE_RISK, v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK].includes(v_653390)) {
          v_fd4243.add('ai_advice_blood');
        }
        if ([v_e3e816.ASCVD_RISK, v_e3e816.HEART_AGE].includes(v_653390)) {
          v_fd4243.add('ai_advice_heart');
        }
      } else if (v_d308b5 === '정상') {
        v_b4203b.push({ typeNum: v_653390, name: v_1833e7, valueText: v_870d58 });
      }
    };

    Object.entries(v_a7f568 || {}).forEach(([v_3b27d9, v_9390e8]) => {
      if (v_9390e8?.value === null || v_9390e8?.value === undefined) return;
      v_e9e885(Number(v_3b27d9), v_9390e8.value);
    });

    const v_44d6b6 = v_f5338f.length > 0;
    const v_32da70 = v_b4203b.slice(0, 5).map((v_ebec57) => v_ebec57.name).join(', ');
    const v_a83ac8 = v_44d6b6
      ? (v_326be8.OS === 'ios' ? 'ai_health_summary_with_risks_ios' : 'ai_health_summary_with_risks')
      : v_32da70 ? 'ai_health_summary_all_normal' : 'ai_health_summary_text';
    const v_4723c3 = Array.from(v_fd4243).length > 0
      ? Array.from(v_fd4243).map((v_0eb677) => {
          if (v_326be8.OS === 'ios') {
            const v_165aee = `health_analysis.result.${v_0eb677}_ios`;

            if (v_9c213b.exists(v_165aee)) {
              return v_8d41d7(v_165aee);
            }
          }
          return v_8d41d7(`health_analysis.result.${v_0eb677}`);
        })
      : [v_8d41d7('health_analysis.result.ai_improvement_1'), v_8d41d7('health_analysis.result.ai_improvement_2'), v_8d41d7('health_analysis.result.ai_improvement_3')];

    return {
      riskItems: v_f5338f,
      normalItems: v_b4203b,
      hasRisks: v_44d6b6,
      summaryKey: v_a83ac8,
      summaryParams: v_44d6b6 ? { riskCount: v_f5338f.length, riskNames: v_f5338f.map((v_ebec57) => v_ebec57.name).join(', ') } : { normalNames: v_b4203b.slice(0, 5).map((v_ebec57) => v_ebec57.name).join(', ') },
      improvementPoints: v_4723c3,
    };
  }, [v_a7f568, v_8d41d7, v_08e501]);

  const v_2e670e = v_df9f57(() => {

    const v_4c8b36 = {
      [v_e3e816.SDNN]: 'health_analysis.vitals.sdnn_friendly',
      [v_e3e816.RMSSD]: 'health_analysis.vitals.rmssd_friendly',
      [v_e3e816.MEAN_RRI]: 'health_analysis.vitals.mean_rri_friendly',
      [v_e3e816.SD1]: 'health_analysis.vitals.sd1_friendly',
      [v_e3e816.SD2]: 'health_analysis.vitals.sd2_friendly',
      [v_e3e816.SNS_ZONE]: 'health_analysis.vitals.sns_zone_friendly',
      [v_e3e816.SNS_INDEX]: 'health_analysis.vitals.sns_index_friendly',
      [v_e3e816.PNS_ZONE]: 'health_analysis.vitals.pns_zone_friendly',
      [v_e3e816.PNS_INDEX]: 'health_analysis.vitals.pns_index_friendly',
    };
    const v_421c89 = (v_653390): string => {
      const v_12f017 = v_4c8b36[v_653390];
      if (v_12f017) return v_8d41d7(v_12f017);
      return v_50f905(v_653390, v_8d41d7);
    };

    type Section = { key: string; titleKey: string; types: number[] };
    const v_946c09 = [
      {
        key: 'section_vital_signs',
        titleKey: 'health_records.section_vital_signs',
        types: [
          v_e3e816.BLOOD_PRESSURE,
          v_e3e816.PULSE_RATE,
          v_e3e816.RESPIRATION_RATE,
          v_e3e816.OXYGEN_SATURATION,
        ],
      },
      {
        key: 'section_hrv',
        titleKey: 'health_records.section_hrv',
        types: [
          v_e3e816.SDNN,
          v_e3e816.RMSSD,
          v_e3e816.MEAN_RRI,
          v_e3e816.SD1,
          v_e3e816.SD2,
        ],
      },
      {
        key: 'section_stress_response',
        titleKey: 'health_records.section_stress_response',
        types: [v_e3e816.SNS_ZONE, v_e3e816.SNS_INDEX],
      },
      {
        key: 'section_stress',
        titleKey: 'health_records.section_stress',
        types: [
          v_e3e816.STRESS_LEVEL,
          v_e3e816.STRESS_INDEX,
          v_e3e816.NORMALIZED_STRESS_INDEX,
        ],
      },
      {
        key: 'section_recovery',
        titleKey: 'health_records.section_recovery',
        types: [v_e3e816.PNS_ZONE, v_e3e816.PNS_INDEX],
      },
      {
        key: 'section_cardiovascular',
        titleKey: 'health_records.section_cardiovascular',
        types: [
          v_e3e816.PRQ,
          v_e3e816.CARDIAC_WORKLOAD,
          v_e3e816.PULSE_PRESSURE,
          v_e3e816.MEAN_ARTERIAL_PRESSURE,
        ],
      },
      {
        key: 'section_blood_tests',
        titleKey: 'health_records.section_blood_tests',
        types: [v_e3e816.HEMOGLOBIN, v_e3e816.HEMOGLOBIN_A1C],
      },
      {
        key: 'section_risk_prediction',
        titleKey: 'health_records.section_risk_prediction',
        types: [
          v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
          v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
          v_e3e816.ASCVD_RISK,
          v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
          v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
          v_e3e816.LOW_HEMOGLOBIN_RISK,
          v_e3e816.HEART_AGE,
        ],
      },
    ];

    const v_110a8b = new Set<number>();
    const v_8d4337 = [];

    for (const v_b4fa6c of v_946c09) {
      const items: typeof v_8d4337[0]['items'] = [];
      for (const v_653390 of v_b4fa6c.types) {
        if (v_110a8b.has(v_653390) || v_930bc7.has(v_653390)) continue;
        const v_3b402b = v_a7f568?.[v_653390]?.value;
        if (v_3b402b === undefined || v_3b402b === null) continue;

        if (Array.isArray(v_3b402b)) continue;
        if (typeof v_3b402b === 'number' && v_3b402b === -1) continue;
        if (typeof v_3b402b === 'string' && Number(v_3b402b) === -1) continue;
        if (v_ed9d34.includes(v_653390)) {
          const v_cb2c3a = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
          if (v_cb2c3a === 0) continue;
        }
        v_110a8b.add(v_653390);
        const v_d308b5 = v_0aaeba(v_653390, v_3b402b);
        v_4622b9.push({
          typeNum: v_653390,
          name: v_421c89(v_653390),
          valueText: v_a6fe82(v_3b402b, v_653390, v_8d41d7),
          status: v_d308b5,
        });
      }
      if (v_4622b9.length > 0) {
        v_8d4337.push({
          categoryId: v_b4fa6c.key,
          categoryLabel: v_326be8.OS === 'ios'
            ? v_8d41d7(`${v_b4fa6c.titleKey}_ios`, v_8d41d7(v_b4fa6c.titleKey))
            : v_8d41d7(v_b4fa6c.titleKey),
          items: v_4622b9,
        });
      }
    }
    return v_8d4337;

  }, [v_a7f568, v_930bc7, v_ed9d34, v_8d41d7]);

  const v_a61ee3 = 184;
  const v_5675fb = 60;
  const v_8bf60f = 24; 

  const v_ee27d5 =
    v_f36ab0.length > 0
      ? v_f36ab0.length >= 4
        ? v_5675fb + (v_a61ee3 * 3) + v_8bf60f * 2
        : v_5675fb + (v_a61ee3 * v_f36ab0.length) + v_8bf60f * 2
      : undefined;
  const v_8e8471 =
    v_f36ab0.length >= 4
      ? v_5675fb + (v_a61ee3 * 3) + v_8bf60f * 2
      : undefined;

  const v_6b9e80 = (v_653390, v_344c85): string => {
    const v_bdafd8 = {
      [v_e3e816.SDNN]: v_8d41d7('health_analysis.vitals.sdnn_friendly'),
      [v_e3e816.RMSSD]: v_8d41d7('health_analysis.vitals.rmssd_friendly'),
      [v_e3e816.MEAN_RRI]: v_8d41d7('health_analysis.vitals.mean_rri_friendly'),
      [v_e3e816.SD1]: v_8d41d7('health_analysis.vitals.sd1_friendly'),
      [v_e3e816.SD2]: v_8d41d7('health_analysis.vitals.sd2_friendly'),
      [v_e3e816.PRQ]: v_8d41d7('health_analysis.vitals.prq_friendly'),
      [v_e3e816.PNS_INDEX]: v_8d41d7('health_analysis.vitals.pns_index_friendly'),
      [v_e3e816.PNS_ZONE]: v_8d41d7('health_analysis.vitals.pns_zone_friendly'),
      [v_e3e816.SNS_INDEX]: v_8d41d7('health_analysis.vitals.sns_index_friendly'),
      [v_e3e816.SNS_ZONE]: v_8d41d7('health_analysis.vitals.sns_zone_friendly'),
      [v_e3e816.LFHF]: v_8d41d7('health_analysis.vitals.lfhf_friendly'),
    };
    return v_bdafd8[v_653390] || v_344c85;
  };

  const v_0aab8b = (v_3b402b): string => {
    if (v_3b402b === 0) return v_8d41d7('health_analysis.result.stress_level_low');
    if (v_3b402b === 1) return v_8d41d7('health_analysis.result.stress_level_normal');
    if (v_3b402b === 2) return v_8d41d7('health_analysis.result.stress_level_mild');
    if (v_3b402b >= 3 && v_3b402b <= 4) return v_8d41d7('health_analysis.result.stress_level_high');
    if (v_3b402b >= 5) return v_8d41d7('health_analysis.result.stress_level_very_high');
    return v_8d41d7('health_analysis.result.normal');
  };

  const v_96052f = (v_3b402b): string => {
    const v_b66476 = Math.round(v_3b402b);
    if (v_b66476 === 0) return v_8d41d7('health_analysis.result.zone_level_unknown');
    if (v_b66476 === 1) return v_8d41d7('health_analysis.result.zone_level_low');
    if (v_b66476 === 2) return v_8d41d7('health_analysis.result.zone_level_medium');
    if (v_b66476 >= 3) return v_8d41d7('health_analysis.result.zone_level_high');
    return v_8d41d7('health_analysis.result.normal');
  };

  const v_e4ae59 = (v_1833e7, status: v_71beaa | null, v_ba91d0, v_653390, v_3b402b) => {

    if (v_ba91d0 === 'respiratory') {
      if (v_d308b5 === '정상') {
        return v_8d41d7('health_analysis.result.respiratory_headline_normal');
      }
      if (v_d308b5 === '위험') {
        return v_8d41d7('health_analysis.result.respiratory_headline_abnormal');
      }
    }

    const v_8a1355 = v_653390 !== undefined ? v_6b9e80(v_653390, v_1833e7) : v_1833e7;
    const v_1c35ff =
      v_9c213b.language && v_9c213b.language.startsWith('ko') ? v_723f2d(v_8a1355, '은', '는') : '';

    if (v_653390 === v_e3e816.STRESS_LEVEL && v_3b402b !== undefined) {
      const v_4e0432 = v_0aab8b(v_3b402b);
      return v_8d41d7('health_analysis.result.item_headline_with_level', { name: v_8a1355, particle: v_1c35ff, level: v_4e0432 });
    }

    if ((v_653390 === v_e3e816.PNS_ZONE || v_653390 === v_e3e816.SNS_ZONE) && v_3b402b !== undefined) {
      const v_4e0432 = v_96052f(v_3b402b);
      return v_8d41d7('health_analysis.result.item_headline_with_level', { name: v_8a1355, particle: v_1c35ff, level: v_4e0432 });
    }

    if (v_d308b5 === '정상') {
      return v_8d41d7('health_analysis.result.item_headline_normal', { name: v_8a1355, particle: v_1c35ff });
    }
    if (v_d308b5 === '위험') {
      return v_326be8.OS === 'ios'
        ? v_8d41d7('health_analysis.result.item_headline_risk_ios', { name: v_8a1355, particle: v_1c35ff })
        : v_8d41d7('health_analysis.result.item_headline_risk', { name: v_8a1355, particle: v_1c35ff });
    }
    return v_8d41d7('health_analysis.result.item_headline_default', { name: v_8a1355, particle: v_1c35ff });
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
          typeNum: v_e3e816.OXYGEN_SATURATION,
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

    {
      id: 'recovery',
      title: v_8d41d7('health_analysis.result.section_recovery'),
      items: [
        {
          typeNum: v_e3e816.PNS_ZONE,
          label: v_8d41d7('health_analysis.result.recovery_ability'),
          detailTypes: [
            v_e3e816.PNS_INDEX,
          ],
        },
      ],
    },

    {
      id: 'stress-response',
      title: v_8d41d7('health_analysis.result.section_stress_response'),
      items: [
        {
          typeNum: v_e3e816.SNS_ZONE,
          label: v_8d41d7('health_analysis.result.stress_response'),
          detailTypes: [
            v_e3e816.SNS_INDEX,
          ],
        },
      ],
    },

    {
      id: 'autonomic',
      title: v_8d41d7('health_analysis.result.section_autonomic'),
      items: [
        { typeNum: v_e3e816.LFHF },
      ],
    },

    {
      id: 'cardiovascular',
      title: v_8d41d7('health_analysis.result.section_cardiovascular'),
      items: [

        {
          typeNum: v_e3e816.SDNN,
          detailTypes: [
            v_e3e816.RMSSD,
            v_e3e816.MEAN_RRI,
            v_e3e816.SD1,
            v_e3e816.SD2,
          ],
        },

        {
          typeNum: v_e3e816.MEAN_ARTERIAL_PRESSURE,
          detailTypes: [
            v_e3e816.PULSE_PRESSURE,
            v_e3e816.CARDIAC_WORKLOAD,
          ],
        },

        {
          typeNum: v_e3e816.HEMOGLOBIN,
          detailTypes: [
            v_e3e816.HEMOGLOBIN_A1C,
          ],
        },
      ],
    },

    {
      id: 'risk-prediction',
      title: v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.section_risk_prediction_ios') : v_8d41d7('health_analysis.result.section_risk_prediction'),
      items: [
        { typeNum: v_e3e816.ASCVD_RISK },
        { typeNum: v_e3e816.ASCVD_RISK_LEVEL },
        { typeNum: v_e3e816.HIGH_BLOOD_PRESSURE_RISK },
        { typeNum: v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK },
        { typeNum: v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK },
        { typeNum: v_e3e816.HIGH_FASTING_GLUCOSE_RISK },
        { typeNum: v_e3e816.LOW_HEMOGLOBIN_RISK },
      ],
    },
  ];

  const v_a685a5 = new Set<number>([
    v_e3e816.PULSE_RATE,
    v_e3e816.RESPIRATION_RATE,
    v_e3e816.OXYGEN_SATURATION,
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

    v_e3e816.PNS_INDEX,
    v_e3e816.PNS_ZONE,
    v_e3e816.SNS_INDEX,
    v_e3e816.SNS_ZONE,
    v_e3e816.LFHF,

    v_e3e816.CARDIAC_WORKLOAD,
    v_e3e816.HEMOGLOBIN,
    v_e3e816.HEMOGLOBIN_A1C,

    v_e3e816.ASCVD_RISK,
    v_e3e816.ASCVD_RISK_LEVEL,
    v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
  ]);

  const v_8c0857 = v_26a76b.filter(v_b4fa6c =>
    v_b4fa6c.items.some(v_8c0b26 => v_1f8651(v_8c0b26.typeNum)),
  );
  const v_71e822 = v_53d27c.filter(
    ([v_3b27d9]) => !v_a685a5.has(Number(v_3b27d9)) && !v_08e501.has(Number(v_3b27d9)),
  );

  if (v_9d6425()) {
    return (
      <MainLayout activeKey="analysis">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1a1a2e', textAlign: 'center', marginBottom: 12 }}>
            {v_8d41d7('analysis.health_unavailable_title')}
          </Text>
          <Text style={{ fontSize: 14, color: '#6b7280', textAlign: 'center', lineHeight: 20 }}>
            {v_8d41d7('analysis.health_unavailable_desc')}
          </Text>
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout activeKey="analysis">
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <View
          onLayout={(v_d48baf) => {
            const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
            v_1e0e1c.current = v_c86e33;
          }}
        >
          <Header
            variant="healthAnalysis"
            title={
              v_4c18b6
                ? v_8d41d7('health_records.detail_title', v_8d41d7('health_analysis.result_title'))
                : v_8d41d7('health_analysis.result_title')
            }
            showBackButton
            centerContentMaxWidth={v_76eb7f ? undefined : v_6c4b91.contentColumnWidth}
            centerContentPadding={v_76eb7f ? undefined : v_6c4b91.horizontalPadding}
            titleStyle={v_76eb7f ? { fontSize: v_52101f.subtitle } : undefined}
            onBackPress={() => {
              if (v_4c18b6) {
                v_c65f5d.goBack();
                return;
              }
              v_c65f5d.replace('HealthAnalysis');
            }}
            rightAccessory={
              <TouchableOpacity
                style={v_d81136.skinIconBtn}
                onPress={() => v_9b57fc('SkinAnalysis')}
                hitSlop={8}
              >
                <Droplet size={22} color={v_1bfbd0.primary} />
              </TouchableOpacity>
            }
          />
        </View>
        {}
        {!v_4c18b6 && (
        <View style={v_d81136.tabBar}>
          <View
            style={[
              v_d81136.tabBarInner,
              v_76eb7f
                ? { paddingHorizontal: v_9b1a04.large, width: '100%' }
                : {
                    maxWidth: v_6c4b91.contentColumnWidth,
                    paddingHorizontal: v_6c4b91.horizontalPadding,
                  },
            ]}
          >
            <View style={v_d81136.tabRow}>
              <TouchableOpacity
                style={[v_d81136.tab, v_ac1d22 === 'measure' && v_d81136.tabActive]}
                onPress={() => v_02dd63('measure')}
              >
                <Text style={[v_2f6fcc(v_d81136.tabText, 'tabText'), v_ac1d22 === 'measure' && v_d81136.tabTextActive]}>
                  {v_8d41d7('health_tabs.measure')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[v_d81136.tab, v_ac1d22 === 'records' && v_d81136.tabActive]}
                onPress={() => v_02dd63('records')}
              >
                <Text style={[v_2f6fcc(v_d81136.tabText, 'tabText'), v_ac1d22 === 'records' && v_d81136.tabTextActive]}>
                  {v_8d41d7('health_tabs.records')}
                </Text>
              </TouchableOpacity>
            </View>
            {v_ac1d22 === 'records' ? (
              <AccountSelector
                accounts={v_c86f08}
                selectedAccountId={v_e7b2f2}
                onSelectAccount={v_1f1e88}
                onAddSubAccount={() => v_c65f5d.navigate('AddSubAccount')}
                onDeleteAccount={v_5bc46a}
                onLinkEmail={v_42b67a}
              />
            ) : (
              <UserNameDisplay name={v_a64f0f} />
            )}
          </View>
        </View>
        )}
        {!v_4c18b6 && v_ac1d22 === 'records' ? (
          <SafeScrollView
            contentContainerStyle={v_d81136.recordsContent}
            showsVerticalScrollIndicator={false}
            showBottomBackground={false}
          >
            <HealthRecordsView
              selectedAccountId={v_e7b2f2}
              accounts={v_c86f08}
              pharmacistMode={v_160272}
              onCompare={(records: [v_5d13be, v_5d13be]) => {
                v_c65f5d.navigate('HealthComparison', {
                  recordA: v_678155[0],
                  recordB: v_678155[1],
                  userName: v_a64f0f,
                });
              }}
            />
          </SafeScrollView>
        ) : (
          <>
            <SafeScrollView
              ref={v_e99f51}
              contentContainerStyle={v_d81136.content}
              showsVerticalScrollIndicator={false}
              showBottomBackground={false}
              onScroll={v_941b26}
              scrollEventThrottle={16}
            >
              {}
              <CenteredContentShell backgroundColor={v_1bfbd0.background} contentColumnWidth={v_6c4b91.contentColumnWidth}>
                {}
                <View style={v_d81136.resultHeaderStatus}>
                  <View style={v_d81136.resultHeaderStatusRow}>
                    <View style={v_d81136.resultHeaderCheckCircle}>
                      <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                    </View>
                    <Text style={v_2f6fcc(v_d81136.resultHeaderStatusText, 'resultHeaderStatusText')}>{v_8d41d7('health_analysis.measurement_complete')}</Text>
                  </View>
                  <Text style={v_2f6fcc(v_d81136.resultHeaderDateText, 'resultHeaderDateText')}>
                    {v_8d41d7('health_analysis.measurement_date')}: {(() => {
                      const v_d5dda0 = new Date(v_42044e);
                      const v_f8e6b9 = `${v_d5dda0.getFullYear()}.${String(v_d5dda0.getMonth() + 1).padStart(2, '0')}.${String(v_d5dda0.getDate()).padStart(2, '0')}`;
                      const v_df8a54 = v_d5dda0.toLocaleTimeString('ko-KR', { hour: 'numeric', minute: '2-digit', hour12: true });
                      return `${v_f8e6b9} ${v_df8a54}`;
                    })()}
                  </Text>
                </View>

                {}
                {v_b30c6b.length > 0 && (
                  <>
                    <View>
                      <Text style={v_2f6fcc(v_d81136.sectionHeader, 'sectionHeader')}>{v_8d41d7('health_analysis.summary_indicators')}</Text>
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
                              <Text style={v_2f6fcc(v_d81136.sectionTitle, 'sectionTitle')}>
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
                                v_2f6fcc(v_d81136.sectionValue, 'sectionValue'),
                                v_2f6fcc(v_d81136.summaryValue, 'summaryValue'),
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
                            <ExpandableDescription
                              description={v_2c4b08(v_653390, v_8d41d7)}
                              descriptionKey={`summary-${v_653390}`}
                              typeNum={v_653390}
                              hasInfo={Boolean(v_ec82c6[v_653390])}
                              name={v_50f905(v_653390, v_8d41d7)}
                            />
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
                                          {v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.wellness_info.wellness_index_purpose_text_ios') : v_8d41d7('health_analysis.result.wellness_info.wellness_index_purpose_text')}
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
                                          {v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.wellness_info.wellness_level_usage_text_ios') : v_8d41d7('health_analysis.result.wellness_info.wellness_level_usage_text')}
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
                    </View>
                  </>
                )}

                {}
                {(() => {
                  const v_8a9e15 = [
                    { type: v_e3e816.BLOOD_PRESSURE, icon: 'heart-outline' as const, iconColor: '#86EFAC' },
                    { type: v_e3e816.STRESS_LEVEL, icon: 'pulse-outline' as const, iconColor: '#FCA5A5' },
                    { type: v_e3e816.HEART_AGE, icon: 'heart' as const, iconColor: '#93C5FD' },
                  ];
                  const v_4552ca = v_8a9e15
                    .map(({ type: v_3b27d9, icon: v_9ddfab, iconColor: v_ef160b }) => {
                      const v_3b402b = v_a7f568?.[v_3b27d9]?.value;
                      if (v_3b402b === undefined) return null;
                      let v_b2926d;
                      if (v_3b27d9 === v_e3e816.BLOOD_PRESSURE && typeof v_3b402b === 'object' && !Array.isArray(v_3b402b)) {
                        v_b2926d = `${(v_3b402b as any).systolic ?? 'N/A'}/${(v_3b402b as any).diastolic ?? 'N/A'}`;
                      } else if (v_3b27d9 === v_e3e816.STRESS_LEVEL) {
                        const v_cb2c3a = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
                        v_b2926d = !isNaN(v_cb2c3a) ? v_0aab8b(Math.round(v_cb2c3a)) : 'N/A';
                      } else if (v_3b27d9 === v_e3e816.HEART_AGE) {
                        const v_cb2c3a = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
                        v_b2926d = !isNaN(v_cb2c3a) ? `${Math.round(v_cb2c3a)}세` : 'N/A';
                      } else {
                        v_b2926d = v_a6fe82(v_3b402b, v_3b27d9, v_8d41d7);
                      }
                      const v_d308b5 = v_0aaeba(v_3b27d9, v_3b402b);
                      const v_d72c04 = v_463ca2(v_d308b5);
                      return { type: v_3b27d9, icon: v_9ddfab, iconColor: v_ef160b, label: v_50f905(v_3b27d9, v_8d41d7), displayValue: v_b2926d, status: v_d308b5, statusColors: v_d72c04, valueColor: v_d308b5 === '위험' ? '#EF4444' : v_1bfbd0.text };
                    })
                    .filter(Boolean);
                  if (v_4552ca.length === 0) return null;
                  return (
                    <View style={v_d81136.metricCardsRow}>
                      {v_4552ca.map((v_5eae50) => (
                        <View key={v_5eae50!.type} style={v_d81136.metricCard}>
                          <View style={[v_d81136.metricCardIcon, { backgroundColor: `${v_5eae50!.iconColor}40` }]}>
                            <Ionicons name={v_5eae50!.icon} size={24} color={v_5eae50!.iconColor} />
                          </View>
                          <View style={v_d81136.metricCardLabelContainer}>
                            <Text style={v_2f6fcc(v_d81136.metricCardLabel, 'metricCardLabel')}>
                              {v_5eae50!.label}
                              {v_5eae50!.type === v_e3e816.BLOOD_PRESSURE && v_5eae50!.status && ` (${v_5eae50!.status})`}
                            </Text>
                          </View>
                          <Text style={[v_2f6fcc(v_d81136.metricCardValue, 'metricCardValue'), { color: v_5eae50!.valueColor }]}>{v_5eae50!.displayValue}</Text>
                        </View>
                      ))}
                    </View>
                  );
                })()}

              {}
              <View
                ref={v_685d2a}
                style={[v_d81136.sectionNavContainer, { backgroundColor: 'transparent' }]}
              >
                <CategoryTabScroll
                  categories={v_8bc599}
                  selectedCategory={v_69ddfb}
                  onCategoryPress={(v_389afb) => v_0ee1c1(v_389afb)}
                  tabContainerStyle={v_d81136.categoryTabContainer}
                  tabContentStyle={v_d81136.categoryTabContent}
                  tabButtonStyle={v_d81136.categoryTabButton}
                  tabButtonActiveStyle={v_d81136.categoryTabButtonActive}
                  tabTextStyle={v_2f6fcc(v_d81136.categoryTabText, 'categoryTabText')}
                  tabTextActiveStyle={v_d81136.categoryTabTextActive}
                />
              </View>

              {}
              <View
                style={v_d81136.listSection}
                onLayout={(v_d48baf) => {
                  v_91eb96.current = v_d48baf.nativeEvent.layout.y;
                }}
              >
                {}
                {v_7acdeb.length > 0 && (
                  <View style={[v_d81136.swiperContainer, { marginHorizontal: -v_6c4b91.horizontalPadding }]}>
                    <ScrollView
                      ref={v_61a127}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      snapToInterval={v_39c3a4}
                      snapToAlignment="start"
                      decelerationRate="fast"
                      contentContainerStyle={v_d81136.swiperContent}
                      onScroll={(e: v_bd64bf<v_da479e>) => {
                        const v_cbddfc = v_9e86fd.nativeEvent.contentOffset.x;
                        const v_2365e9 = Math.round(v_cbddfc / v_39c3a4);
                        v_35a1d0(Math.min(v_2365e9, v_7acdeb.length - 1));
                      }}
                      scrollEventThrottle={16}
                    >
                      {v_7acdeb.map((v_8c0b26) => {
                        const { typeNum: v_653390, label: v_fdf2c2, detailTypes: v_2eb761 } = v_8c0b26;
                        const v_72b4e2 = v_1f8651(v_653390);
                        if (!v_72b4e2) {
                          return null;
                        }

                        const v_1833e7 = v_fdf2c2 ?? v_50f905(v_653390, v_8d41d7);
                        const v_1d99bf = v_fec579(v_72b4e2);
                        const v_d308b5 = v_0aaeba(v_653390, v_df7b8f(v_653390));
                        const v_d72c04 = v_463ca2(v_d308b5);
                        const v_6856a9 = v_2c4b08(v_653390, v_8d41d7);
                        const v_4b27b8 = Boolean(v_ec82c6[v_653390]);
                        const v_d3e14c = `flat-${v_653390}`;
                        const v_c9f7af = v_2f5a10(v_653390);
                        const v_7e392e = v_4b27b8 || (v_c9f7af && v_7b3177.has(v_653390));

                        const v_79e11c = (v_2eb761 ?? []).filter(v_a48992 =>
                          v_a48992 !== v_653390 && v_a7f568?.[v_a48992]?.value !== undefined
                        );
                        const v_d11c1e = v_79e11c.length > 0;

                        return (
                          <View key={v_d3e14c} style={[v_d81136.swiperPage, { width: v_39c3a4 }]}>
                            <View style={v_d81136.resultCard}>
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
                                    {v_d308b5 && (
                                      <Text style={[v_2f6fcc(v_d81136.resultStatus, 'resultStatus'), { color: v_d72c04.text }]}>
                                        {v_d308b5 === '정상'
                                          ? v_8d41d7('health_analysis.result.normal')
                                          : v_8d41d7('health_analysis.result.risk')}
                                      </Text>
                                    )}
                                  </View>
                                  <Text style={v_2f6fcc(v_d81136.resultLabel, 'resultLabel')}>{v_1833e7}</Text>
                                  <ResultMeasureValue
                                    valueParts={v_1d99bf}
                                    tx={v_2f6fcc}
                                    isTablet={v_76eb7f}
                                    unitFontSize={v_52101f.label}
                                  />
                                  <VitalReferenceLine typeNum={v_653390} t={v_8d41d7} />
                                </View>
                                <View style={v_d81136.resultDivider} />
                                <View style={v_d81136.resultRight}>
                                  <View style={v_d81136.resultRightHeader}>
                                    <Text style={v_2f6fcc(v_d81136.resultHeadline, 'resultHeadline')}>
                                      {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_df7b8f(v_653390) === 'number' ? v_df7b8f(v_653390) as number : undefined)}
                                    </Text>
                                  </View>
                                  <ExpandableDescription
                                    description={v_6856a9}
                                    descriptionKey={v_d3e14c}
                                    typeNum={v_653390}
                                    hasInfo={v_4b27b8}
                                    name={v_1833e7}
                                  />
                                </View>
                              </View>
                            </View>
                            {}
                            <View style={v_d81136.resultCardFooter}>
                              <View style={v_d81136.resultCardFooterLeft}>
                                {v_d11c1e && (
                                  <TouchableOpacity
                                    style={v_d81136.resultToggleFooter}
                                    onPress={() => v_19e3c6({ detailKey: v_d3e14c, typeNum: v_653390, name: v_1833e7, validDetailTypes: v_79e11c })}
                                    accessibilityRole="button"
                                    accessibilityLabel={`${v_1833e7} ${v_8d41d7('health_analysis.result.show_all_results')}`}
                                  >
                                    <Text style={v_d81136.resultToggleText}>
                                      {v_8d41d7('health_analysis.result.show_all_results')}
                                    </Text>
                                    <Ionicons
                                      name="add-circle-outline"
                                      size={18}
                                      color={v_1bfbd0.secondaryText}
                                    />
                                  </TouchableOpacity>
                                )}
                              </View>
                              {v_30687d(v_a7f568?.[v_653390]?.confidence) && (
                                <View style={v_d81136.confidenceRowFooter}>
                                  <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_a7f568?.[v_653390]?.confidence)!.color }]} />
                                  <Text style={v_d81136.confidenceText}>{v_30687d(v_a7f568?.[v_653390]?.confidence)!.label}</Text>
                                </View>
                              )}
                            </View>
                          </View>
                        );
                      })}
                    </ScrollView>
                    <View style={v_d81136.swiperPagination}>
                      <Text style={v_2f6fcc(v_d81136.swiperPaginationText, 'swiperPaginationText')}>
                        {v_7018dd + 1} / {v_7acdeb.length}
                      </Text>
                    </View>
                  </View>
                )}

                {}
                {v_2e670e.length > 0 && (
                  <View style={v_d81136.aiCategorizedSummaryCard}>
                    <Text style={v_2f6fcc(v_d81136.aiCategorizedSummaryTitle, 'aiCategorizedSummaryTitle')}>{v_8d41d7('health_analysis.result.ai_measurement_summary')}</Text>
                    {v_2e670e.map((v_b4fa6c) => (
                      <View key={v_b4fa6c.categoryId} style={v_d81136.aiCategorizedSection}>
                        <View style={v_d81136.aiCategorizedSectionHeader}>
                          <View style={v_d81136.aiCategorizedSectionBar} />
                          <Text style={v_2f6fcc(v_d81136.aiCategorizedSectionTitle, 'aiCategorizedSectionTitle')}>{v_b4fa6c.categoryLabel}</Text>
                        </View>
                        <View style={v_d81136.aiCategorizedItemList}>
                          {v_b4fa6c.items.map((v_8c0b26) => (
                            <View key={v_8c0b26.typeNum} style={v_d81136.aiCategorizedItem}>
                              <Text style={v_2f6fcc(v_d81136.aiCategorizedItemName, 'aiCategorizedItemName')}>{v_8c0b26.name}</Text>
                              <View style={v_d81136.aiCategorizedItemRight}>
                                <Text style={v_2f6fcc(v_d81136.aiCategorizedItemValue, 'aiCategorizedItemValue')}>{v_8c0b26.valueText}</Text>
                                {v_8c0b26.status && (
                                  <View style={[v_d81136.aiCategorizedBadge, v_8c0b26.status === '위험' ? v_d81136.aiCategorizedBadgeCaution : v_d81136.aiCategorizedBadgeNormal]}>
                                    <Text style={[v_d81136.aiCategorizedBadgeText, v_8c0b26.status === '위험' ? v_d81136.aiCategorizedBadgeTextCaution : v_d81136.aiCategorizedBadgeTextNormal]}>
                                      {v_8c0b26.status === '위험' ? v_8d41d7('health_analysis.result.risk') : v_8d41d7('health_analysis.result.normal')}
                                    </Text>
                                  </View>
                                )}
                              </View>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                )}

                {}
                {}
                {v_e70158 && (
                  <Modal
                    visible={Boolean(v_e70158)}
                    transparent
                    animationType="slide"
                    onRequestClose={() => v_19e3c6(null)}
                  >
                    <View style={v_d81136.allResultsModalOverlay}>
                      <Pressable
                        style={v_d81136.allResultsModalOverlayDim}
                        onPress={() => v_19e3c6(null)}
                      />
                      <View style={v_d81136.allResultsModalSheetWrap}>
                        <View
                          style={[
                            v_d81136.allResultsModalContent,
                            {
                              maxWidth: v_6c4b91.contentColumnWidth,
                              paddingBottom: v_9b1a04.xlarge + v_033e14.bottom,
                            },
                          ]}
                        >
                        <View style={v_d81136.allResultsModalHandle} />
                        <Text style={v_d81136.allResultsModalTitle}>
                          {v_e70158.name} - {v_8d41d7('health_analysis.result.show_all_results')}
                        </Text>
                        <ScrollView
                          style={v_d81136.allResultsModalScroll}
                          showsVerticalScrollIndicator={false}
                        >
                          <View style={v_d81136.resultDetailList}>
                            {v_e70158.validDetailTypes.map((v_b47a43) => {
                              const v_c6afb7 = v_1f8651(v_b47a43);
                              if (!v_c6afb7) {
                                return null;
                              }
                              const v_ed2859 = v_50f905(v_b47a43, v_8d41d7);
                              const v_06dd00 = v_0aaeba(v_b47a43, v_df7b8f(v_b47a43));
                              const v_9719bb = v_463ca2(v_06dd00);
                              const v_11f033 = v_2c4b08(v_b47a43, v_8d41d7);
                              const v_a7277f = v_fec579(v_c6afb7);
                              const v_9eedea = Boolean(v_ec82c6[v_b47a43]);
                              const v_61619d = v_30687d(v_a7f568?.[v_b47a43]?.confidence);
                              const v_1c35ff = v_9c213b.language && v_9c213b.language.startsWith('ko') ? v_723f2d(v_ed2859, '은', '는') : '';
                              const v_f1fd13 = v_06dd00 === '정상'
                                ? v_8d41d7('health_analysis.result.item_headline_normal', { name: v_ed2859, particle: v_1c35ff })
                                : v_06dd00 === '위험'
                                  ? (v_326be8.OS === 'ios'
                                    ? v_8d41d7('health_analysis.result.item_headline_risk_ios', { name: v_ed2859, particle: v_1c35ff })
                                    : v_8d41d7('health_analysis.result.item_headline_risk', { name: v_ed2859, particle: v_1c35ff }))
                                  : v_8d41d7('health_analysis.result.item_headline_default', { name: v_ed2859, particle: v_1c35ff });

                              return (
                                <View key={`${v_e70158.detailKey}-${v_b47a43}`} style={v_d81136.stressDetailCard}>
                                  <View style={v_d81136.stressDetailRow}>
                                    <View style={v_d81136.stressDetailLeft}>
                                      <Text style={v_d81136.stressDetailTitle}>{v_ed2859}</Text>
                                      <View style={v_d81136.stressDetailValueRow}>
                                        <Text style={v_d81136.stressDetailValue}>{v_a7277f.value}</Text>
                                        {v_a7277f.unit ? (
                                          <Text style={v_d81136.stressDetailUnit}>{v_a7277f.unit}</Text>
                                        ) : null}
                                      </View>
                                    </View>
                                    <View style={v_d81136.stressDetailDivider} />
                                    <View style={v_d81136.stressDetailRight}>
                                      <View style={v_d81136.stressDetailRightHeader}>
                                        <Text style={v_d81136.stressDetailHeadline}>{v_f1fd13}</Text>
                                        <View style={v_d81136.stressDetailIconRow}>
                                          <View style={[v_d81136.stressDetailIconCircle, { backgroundColor: v_9719bb.background }]}>
                                            <Ionicons
                                              name={v_06dd00 === '위험' ? 'sad-outline' : 'happy-outline'}
                                              size={16}
                                              color={v_9719bb.text}
                                            />
                                          </View>
                                        </View>
                                      </View>
                                      <ExpandableDescription
                                        description={v_11f033}
                                        descriptionKey={`detail-${v_e70158.detailKey}-${v_b47a43}`}
                                        typeNum={v_b47a43}
                                        hasInfo={v_9eedea}
                                        name={v_ed2859}
                                      />
                                      {}
                                      {v_61619d && (
                                        <View style={v_d81136.confidenceRow}>
                                          <View style={[v_d81136.confidenceCircle, { backgroundColor: v_61619d.color }]} />
                                          <Text style={v_d81136.confidenceText}>{v_61619d.label}</Text>
                                        </View>
                                      )}
                                    </View>
                                  </View>
                                </View>
                              );
                            })}
                          </View>
                        </ScrollView>
                      </View>
                      </View>
                    </View>
                  </Modal>
                )}

                {}
                {v_71e822.length > 0 && (
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
                        <View key={v_3b27d9}>
                          <View style={v_d81136.resultCard}>
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
                                      <Text style={[v_2f6fcc(v_d81136.resultStatus, 'resultStatus'), { color: v_d72c04.text }]}>
                                        {v_d308b5 === '정상'
                                          ? v_8d41d7('health_analysis.result.normal')
                                          : v_8d41d7('health_analysis.result.risk')}
                                      </Text>
                                    );
                                  })()}
                                </View>
                            <Text style={v_2f6fcc(v_d81136.resultLabel, 'resultLabel')}>{v_1833e7}</Text>
                            <ResultMeasureValue
                              valueParts={v_1d99bf}
                              tx={v_2f6fcc}
                              isTablet={v_76eb7f}
                              unitFontSize={v_52101f.label}
                            />
                            <VitalReferenceLine typeNum={v_653390} t={v_8d41d7} />
                              </View>
                              <View style={v_d81136.resultDivider} />
                              <View style={v_d81136.resultRight}>
                                <View style={v_d81136.resultRightHeader}>
                                  <Text style={v_2f6fcc(v_d81136.resultHeadline, 'resultHeadline')}>
                                    {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8.value === 'number' ? v_9390e8.value : undefined)}
                                  </Text>
                                </View>
                                <ExpandableDescription
                                  description={v_6856a9}
                                  descriptionKey={`regular-${v_653390}`}
                                  typeNum={v_653390}
                                  hasInfo={Boolean(v_ec82c6[v_653390])}
                                  name={v_1833e7}
                                />
                              </View>
                            </View>
                          </View>
                          {}
                          <View style={v_d81136.resultCardFooter}>
                            <View style={v_d81136.resultCardFooterLeft}>
                              {v_c9f7af && !v_7b3177.has(v_653390) && (
                                <TouchableOpacity
                                  style={v_d81136.resultToggleFooter}
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
                            </View>
                            {v_30687d(v_9390e8.confidence) && (
                              <View style={v_d81136.confidenceRowFooter}>
                                <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_9390e8.confidence)!.color }]} />
                                <Text style={v_d81136.confidenceText}>{v_30687d(v_9390e8.confidence)!.label}</Text>
                              </View>
                            )}
                          </View>
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
                )}

                {

}
                {(
                  <>
                    <View style={v_d81136.aiAnalysisCard}>
                      <View style={v_d81136.aiAnalysisCardHeader}>
                        <View style={v_d81136.aiAnalysisCardIcon}>
                          <Ionicons name="document-text-outline" size={22} color="#FFFFFF" />
                        </View>
                        <Text style={v_2f6fcc(v_d81136.aiAnalysisCardTitle, 'aiAnalysisCardTitle')}>{v_8d41d7('health_analysis.result.ai_comprehensive_title')}</Text>
                      </View>
                      {}
                      <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
                        <Text style={{ fontSize: 11, color: '#9CA3AF' }}>
                          측정 Record ID:{' '}
                          <Text style={{ color: v_4ae380 ? '#6B7280' : '#EF4444', fontWeight: '600' }}>
                            {v_4ae380 != null ? `#${v_4ae380}` : '없음'}
                          </Text>
                        </Text>
                      </View>
                      {}
                      {v_85cf60 ? (
                        <View style={[v_d81136.aiAnalysisSubCard, { alignItems: 'center', paddingVertical: 32 }]}>
                          <ActivityIndicator size="large" color="#AD46FF" />
                          <Text style={[v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText'), { textAlign: 'center', marginTop: 12 }]}>AI 힌티가 분석 중입니다...</Text>
                        </View>
                      ) : v_e399bf ? (
                        <View style={v_d81136.aiAnalysisSubCard}>
                          <View style={v_d81136.aiAnalysisSectionHeader}>
                            <View style={[v_d81136.aiAnalysisSubCardIcon, { backgroundColor: '#EDE9FE' }]}>
                              <Ionicons name="sparkles" size={18} color="#AD46FF" />
                            </View>
                            <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionTitle, 'aiAnalysisSectionTitle')}>AI 힌티 종합 분석</Text>
                          </View>
                          <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText')}>{v_dff48a(v_e399bf)}</Text>
                        </View>
                      ) : (
                      <>
                      {}
                      <View style={v_d81136.aiAnalysisSubCard}>
                        <View style={v_d81136.aiAnalysisSectionHeader}>
                          <View style={[v_d81136.aiAnalysisSubCardIcon, { backgroundColor: '#E8F5E9' }]}>
                            <Ionicons name="stats-chart-outline" size={18} color="#22C55E" />
                          </View>
                          <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionTitle, 'aiAnalysisSectionTitle')}>{v_8d41d7('health_analysis.result.ai_health_summary')}</Text>
                        </View>
                        <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText')}>
                          {v_8d41d7(`health_analysis.result.${v_f1235f.summaryKey}`, v_f1235f.summaryParams)}
                        </Text>
                      </View>
                      {v_f1235f.riskItems.length > 0 && (
                        <View style={v_d81136.aiAnalysisSubCard}>
                          <View style={v_d81136.aiAnalysisSectionHeader}>
                            <View style={[v_d81136.aiAnalysisSubCardIcon, { backgroundColor: '#FEE2E2' }]}>
                              <Ionicons name="alert-circle-outline" size={18} color="#EF4444" />
                            </View>
                            <Text style={[v_2f6fcc(v_d81136.aiAnalysisSectionTitle, 'aiAnalysisSectionTitle'), { color: '#EF4444' }]}>{v_8d41d7('health_analysis.result.ai_risk_section_title')}</Text>
                          </View>
                          <View style={v_d81136.aiRiskItemList}>
                            {v_f1235f.riskItems.map((v_8c0b26, v_e86ad8) => (
                              <View key={v_e86ad8} style={v_d81136.aiRiskItem}>
                                <View style={v_d81136.aiRiskItemDot} />
                                <Text style={v_d81136.aiRiskItemName}>{v_8c0b26.name}</Text>
                                <Text style={v_d81136.aiRiskItemValue}>{v_8c0b26.valueText}</Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      )}
                      {}
                      <View style={v_d81136.aiAnalysisSubCard}>
                        <View style={v_d81136.aiAnalysisSectionHeader}>
                          <View style={[v_d81136.aiAnalysisSubCardIcon, { backgroundColor: '#FEF3C7' }]}>
                            <Ionicons name="bulb-outline" size={18} color="#F59E0B" />
                          </View>
                          <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionTitle, 'aiAnalysisSectionTitle')}>{v_8d41d7('health_analysis.result.ai_improvement_points')}</Text>
                        </View>
                        {v_f1235f.improvementPoints.map((v_49cb67, v_e86ad8) => (
                          <Text key={v_e86ad8} style={v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText')}>• {v_49cb67}</Text>
                        ))}
                      </View>
                      {}
                      <View style={v_d81136.aiAnalysisSubCard}>
                        <View style={v_d81136.aiAnalysisSectionHeader}>
                          <View style={[v_d81136.aiAnalysisSubCardIcon, { backgroundColor: '#F3F4F6' }]}>
                            <Ionicons name="warning-outline" size={18} color="#374151" />
                          </View>
                          <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionTitle, 'aiAnalysisSectionTitle')}>{v_8d41d7('health_analysis.result.ai_precautions')}</Text>
                        </View>
                        <Text style={v_2f6fcc(v_d81136.aiAnalysisSectionText, 'aiAnalysisSectionText')}>{v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.ai_precautions_text_ios') : v_8d41d7('health_analysis.result.ai_precautions_text')}</Text>
                      </View>
                      <TouchableOpacity style={v_d81136.aiCheckupButton} activeOpacity={0.8}>
                        <ExpoLinearGradient
                          colors={['#AD46FF', '#6B4CBF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={v_d81136.aiCheckupButtonGradient}
                        >
                          <Ionicons name="medkit-outline" size={20} color="#FFFFFF" />
                          <Text style={v_d81136.aiCheckupButtonText}>{v_8d41d7('health_analysis.result.ai_checkup_btn')}</Text>
                        </ExpoLinearGradient>
                      </TouchableOpacity>
                      </>
                      )}
                    </View>
                  </>
                )}

                {}
                <SupplementRecommendCta
                  source="health"
                  recordId={v_4ae380 ?? null}
                  skipUpsert={!!v_4c18b6}
                />

                {
}
                <View style={v_d81136.medicalDisclaimerCard}>
                    <View style={v_d81136.medicalDisclaimerHeader}>
                        <Ionicons name="information-circle-outline" size={18} color="#6B7280" />
                        <Text style={v_d81136.medicalDisclaimerTitle}>{v_8d41d7('medical_disclaimer.title')}</Text>
                    </View>
                    {}
                    <Text style={v_d81136.medicalDisclaimerText}>
                        {v_8d41d7('health.non_medical_disclaimer', 'The measured vital signs are not intended for medical use, including self-diagnosis or consultation with a doctor, and are only designed for general fitness and wellness purposes.')}
                    </Text>
                </View>

                {}
                <View style={v_d81136.infoContainer}>
                  <Text style={v_d81136.infoText}>
                    {v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.disclaimer_ios') : v_8d41d7('health_analysis.result.disclaimer')}
                  </Text>
                </View>

                {}
                <View style={v_d81136.buttonContainer}>
                  <PrimaryButton
                    title={
                      v_4c18b6
                        ? v_8d41d7('health_records.close', '닫기')
                        : v_8d41d7('health_analysis.result.finish_button')
                    }
                    onPress={() => {
                      if (v_4c18b6) {
                        v_c65f5d.goBack();
                        return;
                      }

                      v_c65f5d.navigate('HealthAnalysis', {
                        initialTab: 'measure',
                        resetToIntro: true, 
                      });
                    }}
                  />
                </View>
              </View>
              </CenteredContentShell>
            </SafeScrollView>
            <TouchableOpacity
              style={v_d81136.abnormalFooter}
              onPress={() => v_75fa2e(true)}
              accessibilityRole="button"
              accessibilityLabel={v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.abnormal_footer_label_ios') : v_8d41d7('health_analysis.result.abnormal_footer_label')}
              accessibilityHint={v_8d41d7('health_analysis.result.abnormal_footer_hint')}
            >
              <View style={v_d81136.abnormalFooterIcon}>
                <Ionicons name="warning-outline" size={18} color={v_d8cb4d.warning.color} />
              </View>
              <Text style={v_d81136.abnormalFooterText}>
                {v_326be8.OS === 'ios' ? v_8d41d7('health_analysis.result.abnormal_footer_text_ios') : v_8d41d7('health_analysis.result.abnormal_footer_text')}
              </Text>
            </TouchableOpacity>
          </>
        )}
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
                showsVerticalScrollIndicator={true}
                showBottomBackground={false}
              >
                {v_f36ab0.map((v_8c0b26) => {
                  const v_653390 = v_8c0b26.typeNum;
                  const v_1833e7 = v_8c0b26.name;
                  const v_9390e8 = v_a7f568[v_653390];
                  const v_72b4e2 = v_a6fe82(v_9390e8?.value, v_653390, v_8d41d7);
                  const v_1d99bf = v_fec579(v_72b4e2);
                  const v_d308b5 = v_0aaeba(v_653390, v_9390e8?.value);
                  const v_d72c04 = v_463ca2(v_d308b5);
                  const v_6856a9 = v_2c4b08(v_653390, v_8d41d7);
                  const v_c9f7af = v_2f5a10(v_653390);
                  const v_4b27b8 = Boolean(v_ec82c6[v_653390] || (v_c9f7af && v_7b3177.has(v_653390)));

                  return (
                    <View key={`abnormal-${v_653390}`}>
                      <View style={v_d81136.resultCard}>
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
                                  const v_842d09 = typeof v_9390e8?.value === 'number' ? v_9390e8.value : Number(v_9390e8?.value);

                                  if (v_842d09 !== 0 && v_842d09 !== 1 && !isNaN(v_842d09)) {
                                    return null;
                                  }
                                }
                                return (
                                  <Text style={[v_2f6fcc(v_d81136.resultStatus, 'resultStatus'), { color: v_d72c04.text }]}>
                                    {v_d308b5 === '정상'
                                      ? v_8d41d7('health_analysis.result.normal')
                                      : v_8d41d7('health_analysis.result.risk')}
                                  </Text>
                                );
                              })()}
                            </View>
                            <Text style={v_2f6fcc(v_d81136.resultLabel, 'resultLabel')}>{v_1833e7}</Text>
                            <ResultMeasureValue
                              valueParts={v_1d99bf}
                              tx={v_2f6fcc}
                              isTablet={v_76eb7f}
                              unitFontSize={v_52101f.label}
                            />
                          </View>
                          <View style={v_d81136.resultDivider} />
                          <View style={v_d81136.resultRight}>
                            <View style={v_d81136.resultRightHeader}>
                              <Text style={v_2f6fcc(v_d81136.resultHeadline, 'resultHeadline')}>
                                {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8?.value === 'number' ? v_9390e8.value : undefined)}
                              </Text>
                            </View>
                            <ExpandableDescription
                              description={v_6856a9}
                              descriptionKey={`abnormal-${v_653390}`}
                              typeNum={v_653390}
                              hasInfo={Boolean(v_ec82c6[v_653390])}
                              name={v_1833e7}
                            />
                          </View>
                        </View>
                      </View>
                      {}
                      <View style={v_d81136.resultCardFooter}>
                        <View style={v_d81136.resultCardFooterLeft}>
                          {v_c9f7af && !v_7b3177.has(v_653390) && (
                            <TouchableOpacity
                              style={v_d81136.resultToggleFooter}
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
                        </View>
                        {v_30687d(v_9390e8?.confidence) && (
                          <View style={v_d81136.confidenceRowFooter}>
                            <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_9390e8?.confidence)!.color }]} />
                            <Text style={v_d81136.confidenceText}>{v_30687d(v_9390e8?.confidence)!.label}</Text>
                          </View>
                        )}
                      </View>
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
                                <Text style={v_d81136.resultDetailLabel}></Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.systolic.medium} {v_c9f7af.systolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}></Text>
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
                                <Text style={v_d81136.resultDetailLabel}></Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.diastolic.medium} {v_c9f7af.diastolic.unit || ''}
                                </Text>
                              </View>
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}></Text>
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
                              <View style={v_d81136.resultDetailRow}>
                                <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.risk_medium')}</Text>
                                <Text style={v_d81136.resultDetailValue}>
                                  {v_c9f7af.medium} {v_c9f7af.unit || ''}
                                </Text>
                              </View>
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
              </SafeScrollView>
            ) : (
              <View style={v_d81136.abnormalSheetContent}>
                {v_f36ab0.length === 0 ? (
                  <Text style={v_d81136.abnormalEmptyText}>
                    {v_8d41d7('health_analysis.result.abnormal_empty')}
                  </Text>
                ) : (
                  v_f36ab0.map((v_8c0b26) => {
                    const v_653390 = v_8c0b26.typeNum;
                    const v_1833e7 = v_8c0b26.name;
                    const v_9390e8 = v_a7f568[v_653390];
                    const v_72b4e2 = v_a6fe82(v_9390e8?.value, v_653390, v_8d41d7);
                    const v_1d99bf = v_fec579(v_72b4e2);
                    const v_d308b5 = v_0aaeba(v_653390, v_9390e8?.value);
                    const v_d72c04 = v_463ca2(v_d308b5);
                    const v_6856a9 = v_2c4b08(v_653390, v_8d41d7);
                    const v_c9f7af = v_2f5a10(v_653390);
                    const v_4b27b8 = Boolean(v_ec82c6[v_653390] || (v_c9f7af && v_7b3177.has(v_653390)));

                    return (
                      <View key={`abnormal-${v_653390}`} style={v_d81136.resultCard}>
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
                                  const v_842d09 = typeof v_9390e8?.value === 'number' ? v_9390e8.value : Number(v_9390e8?.value);

                                  if (v_842d09 !== 0 && v_842d09 !== 1 && !isNaN(v_842d09)) {
                                    return null;
                                  }
                                }
                                return (
                                  <Text style={[v_2f6fcc(v_d81136.resultStatus, 'resultStatus'), { color: v_d72c04.text }]}>
                                    {v_d308b5 === '정상'
                                      ? v_8d41d7('health_analysis.result.normal')
                                      : v_8d41d7('health_analysis.result.risk')}
                                  </Text>
                                );
                              })()}
                            </View>
                            <Text style={v_2f6fcc(v_d81136.resultLabel, 'resultLabel')}>{v_1833e7}</Text>
                            <ResultMeasureValue
                              valueParts={v_1d99bf}
                              tx={v_2f6fcc}
                              isTablet={v_76eb7f}
                              unitFontSize={v_52101f.label}
                            />
                          </View>
                          <View style={v_d81136.resultDivider} />
                          <View style={v_d81136.resultRight}>
                            <View style={v_d81136.resultRightHeader}>
                              <Text style={v_2f6fcc(v_d81136.resultHeadline, 'resultHeadline')}>
                                {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8?.value === 'number' ? v_9390e8.value : undefined)}
                              </Text>
                            </View>
                            <ExpandableDescription
                              description={v_6856a9}
                              descriptionKey={`sheet-abnormal-${v_653390}`}
                              typeNum={v_653390}
                              hasInfo={Boolean(v_ec82c6[v_653390])}
                              name={v_1833e7}
                            />
                            {}
                            {v_30687d(v_9390e8?.confidence) && (
                              <View style={v_d81136.confidenceRow}>
                                <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_9390e8?.confidence)!.color }]} />
                                <Text style={v_d81136.confidenceText}>{v_30687d(v_9390e8?.confidence)!.label}</Text>
                              </View>
                            )}
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
                                  <Text style={v_d81136.resultDetailLabel}></Text>
                                  <Text style={v_d81136.resultDetailValue}>
                                    {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.systolic.medium} {v_c9f7af.systolic.unit || ''}
                                  </Text>
                                </View>
                                <View style={v_d81136.resultDetailRow}>
                                  <Text style={v_d81136.resultDetailLabel}></Text>
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
                                  <Text style={v_d81136.resultDetailLabel}></Text>
                                  <Text style={v_d81136.resultDetailValue}>
                                    {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.diastolic.medium} {v_c9f7af.diastolic.unit || ''}
                                  </Text>
                                </View>
                                <View style={v_d81136.resultDetailRow}>
                                  <Text style={v_d81136.resultDetailLabel}></Text>
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
                                <View style={v_d81136.resultDetailRow}>
                                  <Text style={v_d81136.resultDetailLabel}>{v_8d41d7('health_analysis.result.risk_medium')}</Text>
                                  <Text style={v_d81136.resultDetailValue}>
                                    {v_c9f7af.medium} {v_c9f7af.unit || ''}
                                  </Text>
                                </View>
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
                  })
                )}
              </View>
            )}
          </View>
        </View>
      </Modal>
      <Modal
        visible={Boolean(v_6f0881)}
        transparent
        animationType="none"
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
      <VitalSignInfoModal
        visible={Boolean(v_9e9019)}
        infoModalType={v_9e9019}
        infoModalSectionId={v_d4a21d}
        results={v_a7f568}
        onClose={v_a6fc94}
        infoContentMap={v_ec82c6}
        getStatusLabelForType={v_0aaeba}
        getStatusColor={v_463ca2}
        formatValue={v_a6fe82}
        getVitalSignName={v_50f905}
      />
      <Modal
        visible={Boolean(v_1f3df1)}
        transparent
        animationType="none"
        onRequestClose={() => v_017104(null)}
      >
        <Pressable
          style={v_d81136.wellnessModalOverlay}
          onPress={() => v_017104(null)}
        >
          <Pressable
            style={v_d81136.wellnessModal}
            onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}
          >
            <View style={v_d81136.wellnessModalHeader}>
              <Text style={v_d81136.wellnessModalTitle}>
                {v_1f3df1?.name}
              </Text>
              <TouchableOpacity
                onPress={() => v_017104(null)}
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
                {v_1f3df1?.description}
              </Text>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
      <Modal
        visible={Boolean(v_0cc882)}
        transparent
        animationType="none"
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
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: v_a61db3.screen,
  skinIconBtn: {
    padding: 8,
  },
  tabBar: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: '#ffffff',
  },
  tabBarInner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: v_9b1a04.medium,
  },
  tabRow: {
    flexDirection: 'row',
    gap: 24,
  },
  tab: {
    paddingVertical: 8,
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: v_1bfbd0.buttonPrimary,
  },
  tabText: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  tabTextActive: {
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  recordsContent: {
    flexGrow: 1,
    paddingBottom: v_9b1a04.xlarge,
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flexGrow: 1,
    minHeight: '100%',
    paddingTop: 32,
    paddingHorizontal: 0,
    backgroundColor: v_1bfbd0.background,
  },
  listSection: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
    textAlign: 'center',
  },
  resultSection: {
    backgroundColor: v_1bfbd0.backgroundSecondary,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  resultHeaderStatus: {
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  resultHeaderStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  resultHeaderCheckCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: v_1bfbd0.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultHeaderStatusText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.buttonPrimary,
  },
  resultHeaderDateText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  metricCardsRow: {
    flexDirection: 'row',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  metricCard: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
    borderRadius: 12,
    padding: v_9b1a04.medium,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  metricCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  metricCardLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small / 2,
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  metricCardLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  metricCardValue: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
  },
  metricCardStatusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
  metricCardStatusText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
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
  sectionNavContainer: {
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
    marginHorizontal: -v_9b1a04.large,
    backgroundColor: 'transparent !important',
  },

  categoryTabContainer: {
    marginBottom: v_9b1a04.small,
  },
  categoryTabContent: {
    paddingHorizontal: 16,
    gap: v_9b1a04.small,
    alignItems: 'center',
  },
  categoryTabButton: {
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small,
    borderRadius: 20,
    backgroundColor: v_1bfbd0.white,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  categoryTabButtonActive: {
    backgroundColor: '#0047AB',
    borderColor: '#0047AB',
  },
  categoryTabText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  categoryTabTextActive: {
    color: '#FFFFFF',
    fontFamily: v_843035.semibold,
  },
  clearCategoryButton: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: v_9b1a04.small,
  },
  clearCategoryText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textDecorationLine: 'underline',
  },

  swiperContainer: {
    marginTop: v_9b1a04.medium,
    minHeight: 200,
  },
  swiperContent: {},
  swiperPage: {
    paddingHorizontal: 16,
  },
  swiperPagination: {
    alignItems: 'center',
  },
  swiperPaginationText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },

  aiAnalysisStartCard: {
    marginTop: v_9b1a04.large,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  aiAnalysisStartGradient: {
    padding: v_9b1a04.large,
  },
  aiAnalysisStartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  aiAnalysisStartIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAnalysisStartTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  aiAnalysisStartDesc: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#FFFFFF',
    lineHeight: 22,
    marginBottom: v_9b1a04.xlarge,
    opacity: 0.95,
  },
  aiAnalysisStartButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: v_9b1a04.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAnalysisStartButtonText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: '#4A3B8C',
  },
  aiCategorizedSummaryCard: {
    marginTop: v_9b1a04.large,
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  aiCategorizedSummaryTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  aiCategorizedSection: {
    marginBottom: v_9b1a04.medium,
  },
  aiCategorizedSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  aiCategorizedSectionBar: {
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: v_1bfbd0.buttonPrimary,
    marginRight: v_9b1a04.small,
  },
  aiCategorizedSectionTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  aiCategorizedItemList: {
    gap: v_9b1a04.small,
  },
  aiCategorizedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: v_9b1a04.small / 2,
  },
  aiCategorizedItemName: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    flex: 1,
  },
  aiCategorizedItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  aiCategorizedItemValue: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  aiCategorizedBadge: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: 2,
    borderRadius: 6,
    minWidth: 44,
    alignItems: 'center',
  },
  aiCategorizedBadgeNormal: {
    backgroundColor: '#DCFCE7',
  },
  aiCategorizedBadgeCaution: {
    backgroundColor: '#FEF3C7',
  },
  aiCategorizedBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
  },
  aiCategorizedBadgeTextNormal: {
    color: '#16A34A',
  },
  aiCategorizedBadgeTextCaution: {
    color: '#D97706',
  },
  aiAnalysisCard: {
    marginTop: v_9b1a04.large,
    backgroundColor: '#F5F3F8',
    borderRadius: 16,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  aiAnalysisCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  aiAnalysisCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: v_1bfbd0.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAnalysisSubCard: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 12,
    padding: v_9b1a04.medium,
    marginBottom: v_9b1a04.medium,
  },
  aiAnalysisSubCardIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAnalysisCardTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiAnalysisSection: {
    marginBottom: v_9b1a04.medium,
  },
  aiAnalysisSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.small,
  },
  aiAnalysisSectionTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  aiAnalysisSectionText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 22,
  },
  aiRiskItemList: {
    gap: v_9b1a04.small,
  },
  aiRiskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  aiRiskItemDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
  },
  aiRiskItemName: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  aiRiskItemValue: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#EF4444',
  },
  aiCheckupButton: {
    marginTop: v_9b1a04.medium,
    borderRadius: 12,
    overflow: 'hidden',
  },
  aiCheckupButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small,
    paddingVertical: v_9b1a04.medium,
  },
  aiCheckupButtonText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  aiProductsCard: {
    marginTop: v_9b1a04.large,
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  aiProductsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.medium,
  },
  aiProductsTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiProductsBadge: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.primary,
  },
  aiProductList: {
    gap: v_9b1a04.small,
  },
  aiProductItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.medium,
    padding: v_9b1a04.medium,
    backgroundColor: v_1bfbd0.backgroundSecondary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  aiProductIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  aiProductContent: {
    flex: 1,
  },
  aiProductTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginBottom: 2,
  },
  aiProductDesc: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small / 2,
  },
  aiProductPoints: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  aiProductPointsNumber: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  aiProductPointsCurrency: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  aiMoreButton: {
    marginTop: v_9b1a04.medium,
    paddingVertical: v_9b1a04.medium,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 12,
  },
  aiMoreButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },

  flatListContainer: {
    paddingTop: v_9b1a04.small,
  },

  itemScrollContent: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    gap: v_9b1a04.medium,
  },
  itemScrollButton: {
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
  },
  itemScrollButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  itemScrollButtonTextActive: {
    color: '#0047AB',
    fontFamily: v_843035.semibold,
  },
  itemScrollButtonUnderline: {
    height: 2,
    backgroundColor: '#0047AB',
    marginTop: 4,
    borderRadius: 1,
  },

  sectionNavContent: {
    paddingHorizontal: v_9b1a04.large,
    gap: v_9b1a04.small,
  },
  sectionNavButton: {
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small,
    borderRadius: 20,
    backgroundColor: v_1bfbd0.backgroundSecondary,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    marginRight: v_9b1a04.small,
  },
  sectionNavButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  wellnessCard: {
    backgroundColor: v_1bfbd0.white,
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
    backgroundColor: v_1bfbd0.white,
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
    backgroundColor: v_1bfbd0.white,
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
    backgroundColor: v_1bfbd0.white,
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
    backgroundColor: v_1bfbd0.white,
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
  modalStatusSection: {
    alignItems: 'center',
    paddingBottom: v_9b1a04.large,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
    marginBottom: v_9b1a04.large,
  },
  modalStatusIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.medium,
  },
  modalStatusTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    textAlign: 'center',
    marginBottom: v_9b1a04.large,
  },
  graphBarContainer: {
    width: '100%',
    paddingHorizontal: v_9b1a04.medium,
  },
  graphBar: {
    height: 40,
    position: 'relative',
    marginBottom: v_9b1a04.small,
  },
  graphBarBackground: {
    position: 'absolute',
    top: 18,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  graphBarSegment: {
    position: 'absolute',
    top: 18,
    height: 4,
    borderRadius: 2,
  },
  graphBarNormalRange: {
    position: 'absolute',
    top: 18,
    height: 4,
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
  graphBarIndicator: {
    position: 'absolute',
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: v_1bfbd0.primary,
    borderWidth: 2,
    borderColor: v_1bfbd0.white,
    transform: [{ translateX: -10 }],
  },
  graphBarLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  graphBarLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  stressLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: v_9b1a04.small,
    marginTop: v_9b1a04.medium,
  },
  stressLevelItem: {
    alignItems: 'center',
    flex: 1,
  },
  stressLevelIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.small / 2,
  },
  stressLevelLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
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
    backgroundColor: v_1bfbd0.white,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  resultCard: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    marginBottom: v_9b1a04.small,
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
    maxWidth: '44%',
    flexShrink: 1,
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
  resultValueRowTablet: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
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
    flexShrink: 1,
    minWidth: 0,
    gap: v_9b1a04.small,
  },
  resultRightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: v_9b1a04.small,
    marginBottom: 0,
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
    lineHeight: v_ef658a.medium * 1.4,
    height: v_ef658a.medium * 1.4 * 2,
    overflow: 'hidden',
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
  resultToggleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
    alignSelf: 'flex-start',
    marginTop: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
  },
  resultCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.medium,
    paddingTop: v_9b1a04.small / 2,
    paddingBottom: v_9b1a04.small,
  },
  resultCardFooterLeft: {
    flex: 1,
  },
  vitalReferenceText: {
    marginTop: v_9b1a04.small / 2,
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
    alignSelf: 'stretch',
    flexShrink: 1,
  },
  resultToggleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
    paddingVertical: v_9b1a04.small / 2,
  },
  confidenceRowFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
  },
  allResultsModalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  allResultsModalOverlayDim: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  allResultsModalSheetWrap: {
    width: '100%',
    alignItems: 'center',
  },
  allResultsModalContent: {
    width: '100%',
    backgroundColor: v_1bfbd0.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge + 24,
    maxHeight: '80%',
  },
  allResultsModalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: v_1bfbd0.border,
    alignSelf: 'center',
    marginBottom: v_9b1a04.medium,
  },
  allResultsModalTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  allResultsModalScroll: {
    maxHeight: 400,
  },
  resultDetailList: {
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

  stressDetailCard: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 10,
    padding: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
  },
  stressDetailRow: {
    flexDirection: 'row',
    gap: v_9b1a04.medium,
  },
  stressDetailLeft: {
    width: v_9b1a04.xlarge * 4.5,
    gap: v_9b1a04.small,
  },
  stressDetailTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  stressDetailValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: v_9b1a04.small / 2,
  },
  stressDetailValue: {
    fontSize: v_ef658a.input,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    letterSpacing: -1,
  },
  stressDetailUnit: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small / 2,
  },
  confidenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
    marginTop: v_9b1a04.small,
  },
  confidenceCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  confidenceText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  stressDetailDivider: {
    width: 1,
    backgroundColor: v_1bfbd0.border,
  },
  stressDetailRight: {
    flex: 1,
    gap: v_9b1a04.small,
  },
  stressDetailRightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  stressDetailHeadline: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  stressDetailIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  stressDetailIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stressDetailDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
  stressDetailInfoButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
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
  descriptionContainer: {
    marginTop: 0,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 0,
    lineHeight: 18,
  },
  expandDescriptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small / 2,
    marginTop: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
    paddingHorizontal: v_9b1a04.small,
    backgroundColor: v_1bfbd0.backgroundSecondary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    alignSelf: 'flex-start',
  },
  expandDescriptionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
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
  medicalDisclaimerCard: {
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    padding: v_9b1a04.medium,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 12,
  },
  medicalDisclaimerHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: 8,
  },
  medicalDisclaimerTitle: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: '#DC2626',
    marginLeft: 6,
  },
  medicalDisclaimerText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 20,
  },
  medicalDisclaimerHighlight: {
    fontFamily: v_843035.semibold,
    color: '#DC2626',
  },
});

export default v_cb47c8;

