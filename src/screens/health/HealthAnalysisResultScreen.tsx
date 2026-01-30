import v_a3453e, { v_df9f57, v_5ab095, v_e662ae, v_de06a3 } from 'bapkr';
import {
  v_aa7413,
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
import v_f595b9, { v_bf60de, v_cd1400, v_5ade23, v_79a794 } from 'vpztcxjmsfanunln';
import { v_729608, v_570c34, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_ef658a, v_9b1a04, v_d8cb4d } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_723f2d } from '../../utils';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import v_98de1f from './components/VitalSignInfoModal';

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

type DisplayItem = {
  typeNum: number;
  label?: string;
  detailTypes?: number[];
};

interface ItemScrollButtonsHandle {
  setActiveItem: (typeNum: number | null) => void;
  scrollToStart: () => void;
}

interface ItemScrollButtonsProps {
  items: DisplayItem[];
  initialActiveTypeNum?: number | null;
  onItemPress: (typeNum: number) => void;
  getItemName: (typeNum: number, label?: string) => string;
}

const v_c2e8fd = v_a3453e.forwardRef<ItemScrollButtonsHandle, ItemScrollButtonsProps>(({
  items: v_4622b9,
  initialActiveTypeNum: v_c51afc = null,
  onItemPress: v_659a80,
  getItemName: v_be37d6,
}, v_6d4ed3) => {
  const [v_66d00d, v_c09e3a] = v_5ab095<number | null>(v_c51afc);
  const v_e99f51 = v_e662ae<v_122070>(null);
  const v_7ef1cd = v_e662ae(0);
  const v_1bcd7a = v_e662ae(0);
  const v_384389 = v_e662ae<{ x: number; width: number }[]>([]);
  const v_0aff94 = v_e662ae(0);
  const v_714814 = v_e662ae<number | null>(null); 
  const v_bc9001 = [0, 80, 200, 400, 700]; 

  const v_203241 = v_4622b9.length + '-' + v_4622b9.map((v_ebec57) => v_ebec57.typeNum).join(',');
  v_a3453e.useEffect(() => {
    v_384389.current = [];
  }, [v_203241]);

  v_a3453e.useEffect(() => {
    v_714814.current = v_66d00d;
  }, [v_66d00d]);

  const v_98e655 = v_de06a3((v_653390): boolean => {
    if (v_653390 == null) return false;
    if (v_7ef1cd.current <= 0) return false;
    const v_827eab = v_1bcd7a.current;
    if (v_827eab <= 0) return false;
    const v_a56041 = v_4622b9.findIndex((v_8c0b26) => v_8c0b26.typeNum === v_653390);
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
  }, [v_4622b9]);

  const v_172ddf = v_de06a3(() => {
    const v_5f5d6d = v_714814.current;
    if (v_5f5d6d != null) v_98e655(v_5f5d6d);
  }, [v_98e655]);

  const v_4c1a75 = v_de06a3((v_653390) => {
    if (v_653390 == null) return;
    v_714814.current = v_653390;
    v_0aff94.current = 0;
    const v_6a2f36 = () => {
      if (v_98e655(v_653390)) return;
      v_0aff94.current += 1;
      const v_e86ad8 = v_0aff94.current;
      if (v_e86ad8 < v_bc9001.length) {
        setTimeout(v_6a2f36, v_bc9001[v_e86ad8]);
      }
    };
    v_6a2f36();
  }, [v_98e655]);

  v_a3453e.useEffect(() => {
    if (v_66d00d == null) return;
    v_4c1a75(v_66d00d);
  }, [v_66d00d, v_4c1a75]);

  const v_96882b = v_de06a3((v_653390) => {
    if (v_653390 == null) return;
    v_714814.current = v_653390;
    requestAnimationFrame(() => {
      v_4c1a75(v_653390);
    });
  }, [v_4c1a75]);

  v_a3453e.useImperativeHandle(v_6d4ed3, () => ({
    setActiveItem: (v_653390) => {
      v_c09e3a(v_653390);
      v_96882b(v_653390);
    },
    scrollToStart: () => {
      v_e99f51.current?.scrollTo({ x: 0, animated: false });
    },
  }), [v_96882b]);

  if (v_4622b9.length === 0) return null;

  return (
    <ScrollView
      ref={v_e99f51}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 4,
      }}
      onLayout={(v_9e86fd) => {
        v_7ef1cd.current = v_9e86fd.nativeEvent.layout.width;
        v_172ddf();
      }}
      onContentSizeChange={(v_32f7b8) => {
        v_1bcd7a.current = v_32f7b8;
        v_172ddf();
      }}
    >
      {v_4622b9.map((v_8c0b26, v_a56041) => {
        const v_d044ab = v_be37d6(v_8c0b26.typeNum, v_8c0b26.label);
        const v_26dce6 = v_66d00d === v_8c0b26.typeNum;
        return (
          <View
            key={v_8c0b26.typeNum}
            onLayout={(v_9e86fd) => {
              const { x: v_62c214, width: v_8e4fb6 } = v_9e86fd.nativeEvent.layout;
              v_384389.current[v_a56041] = { x: v_62c214, width: v_8e4fb6 };
              v_172ddf();
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
              onPress={() => v_659a80(v_8c0b26.typeNum)}
              accessibilityRole="button"
              accessibilityLabel={`${v_d044ab}(으)로 이동`}
            >
              <Text style={{
                fontSize: 14,
                fontFamily: v_843035.medium,
                color: v_26dce6 ? '#0047AB' : '#666666',
              }}>{v_d044ab}</Text>
              {v_26dce6 && (
                <View style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 12,
                  right: 12,
                  height: 2,
                  backgroundColor: '#0047AB',
                  borderRadius: 1,
                }} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
});

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

  if (v_549ed3 === 0 || v_549ed3 === 1) {
    return '정상'; 
  } else if (v_549ed3 === 2 || v_549ed3 === 3) {
    return '위험'; 
  }
  return null;
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
      return v_8d41d7('health_analysis.result.risk_warning'); 
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
  const { results: v_a7f568, timestamp: v_42044e } = v_c7daf6.params;
  const v_033e14 = v_e0068c();

  const [v_571c37, v_e78f19] = v_5ab095<Record<number, boolean>>({});

  const [v_49e71a, v_f2b4a8] = v_5ab095<Record<number, boolean>>({});

  const [v_7bfc20, v_5da58e] = v_5ab095<Record<string, boolean>>({});
  const [v_6f0881, v_2fba89] = v_5ab095<InfoModalType>(null);
  const [v_9e9019, v_13a008] = v_5ab095<number | null>(null);
  const [v_d4a21d, v_ea36df] = v_5ab095<string | null>(null);
  const [v_0cc882, v_b4f3ee] = v_5ab095<number | null>(null);
  const [v_1f3747, v_75fa2e] = v_5ab095(false);
  const v_224a01 = __DEV__ ? 0 : 0;

  const [v_e60cdc, v_a9d9cc] = v_5ab095<Record<string, boolean>>({});

  const [v_69ddfb, v_09b78b] = v_5ab095<string | null>(null);

  const v_8bc599 = v_df9f57(() => [
    { id: 'vital-signs', label: v_8d41d7('health_analysis.result.category_vital_signs') },
    { id: 'stress-recovery', label: v_8d41d7('health_analysis.result.category_stress_recovery') },
    { id: 'blood-tests', label: v_8d41d7('health_analysis.result.category_blood_tests') },
    { id: 'cardiovascular', label: v_8d41d7('health_analysis.result.category_cardiovascular') },
    { id: 'respiratory', label: v_8d41d7('health_analysis.result.category_respiratory') },
    { id: 'risks', label: '미래위험도' },
  ], [v_8d41d7]);

  const v_153eb4 = v_df9f57(() => ({
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
  }), []);

  const v_bc04a2 = v_df9f57(() => [

    { typeNum: v_e3e816.BLOOD_PRESSURE },

    { typeNum: v_e3e816.PULSE_RATE },

    { typeNum: v_e3e816.RESPIRATION_RATE },

    { typeNum: v_e3e816.OXYGEN_SATURATION },

    {
      typeNum: v_e3e816.SDNN,
      label: v_8d41d7('health_analysis.result.hrv_variability'),
      detailTypes: [
        v_e3e816.RMSSD,
        v_e3e816.MEAN_RRI,
        v_e3e816.SD1,
        v_e3e816.SD2,
      ],
    },

    {
      typeNum: v_e3e816.SNS_ZONE,
      label: v_8d41d7('health_analysis.result.stress_response'),
      detailTypes: [v_e3e816.SNS_INDEX],
    },

    {
      typeNum: v_e3e816.STRESS_LEVEL,
      detailTypes: [
        v_e3e816.STRESS_INDEX,
        v_e3e816.NORMALIZED_STRESS_INDEX,
      ],
    },

    {
      typeNum: v_e3e816.PNS_ZONE,
      label: v_8d41d7('health_analysis.result.recovery_ability'),
      detailTypes: [v_e3e816.PNS_INDEX],
    },

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
  ], [v_8d41d7]);

  const v_930bc7 = v_df9f57(() => new Set([
    v_e3e816.WELLNESS_INDEX,
    v_e3e816.WELLNESS_LEVEL,

  ]), []);

  const v_7984d6 = v_df9f57(() => new Set([
    v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
    v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
    v_e3e816.LOW_HEMOGLOBIN_RISK,
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
      if (v_3b402b === undefined) return false;

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

  const v_92b0b5 = v_e662ae<Record<number, v_3094a2 | null>>({});
  const v_9aa77b = v_e662ae<v_3094a2 | null>(null);
  const v_54e08d = v_e662ae(0); 
  const v_7a44c5 = v_e662ae(0); 

  const v_364a3f = v_e662ae<Record<number, number>>({});

  const v_ab5f42 = v_e662ae<number | null>(null);

  const v_0bbee6 = v_e662ae(new v_a2349e.Value(0)).current;
  const v_15af7a = v_e662ae(0);
  const v_d0de58 = v_e662ae(0); 
  const v_905b11 = v_e662ae(0); 
  const v_1e0e1c = v_e662ae(114); 
  const [v_23f063, v_1ce906] = v_5ab095(false);
  const v_685d2a = v_e662ae<v_3094a2 | null>(null);
  const v_713327 = v_e662ae(0); 
  const v_91eb96 = v_e662ae(0); 
  const v_898946 = v_e662ae(0);

  const v_9ed853 = v_e662ae<ItemScrollButtonsHandle>(null);
  const v_63ec8f = v_e662ae<ItemScrollButtonsHandle>(null);

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

  const v_3b640a = (v_b24339) => {
    v_a9d9cc(v_ba2215 => ({
      ...v_ba2215,
      [v_b24339]: !v_ba2215[v_b24339],
    }));
  };

  const ExpandableDescription: v_a3453e.FC<{
    description: string;
    descriptionKey: string;
    numberOfLines?: number;
  }> = ({ description: v_6856a9, descriptionKey: v_ce4ff1, numberOfLines: v_25883c = 2 }) => {
    const v_cced90 = v_e60cdc[v_ce4ff1] || false;
    const [v_ca5c67, v_2c0b90] = v_5ab095(false);
    const [v_cba2d5, v_f3bf07] = v_5ab095(false);

    return (
      <View>
        {}
        {!v_cba2d5 && (
          <Text
            style={[v_d81136.descriptionText, { position: 'absolute', opacity: 0 }]}
            onTextLayout={(v_9e86fd) => {
              if (v_9e86fd.nativeEvent.lines.length > v_25883c) {
                v_2c0b90(true);
              }
              v_f3bf07(true);
            }}
          >
            {v_6856a9}
          </Text>
        )}
        <Text
          style={v_d81136.descriptionText}
          numberOfLines={v_cced90 ? undefined : v_25883c}
        >
          {v_6856a9}
        </Text>
        {v_ca5c67 && (
          <TouchableOpacity
            onPress={() => v_3b640a(v_ce4ff1)}
            style={v_d81136.expandDescriptionButton}
          >
            <Text style={v_d81136.expandDescriptionText}>
              {v_cced90 ? v_8d41d7('health_analysis.result.show_less') : v_8d41d7('health_analysis.result.show_more')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const v_3ca263 = (v_ba91d0) => {
    const v_755a94 = v_aa48a7.current[v_ba91d0];

    const v_e59e6a = v_1e0e1c.current + (v_905b11.current || 0);

    if (v_755a94 && v_e99f51.current) {
      v_755a94.measureLayout(
        v_e99f51.current as any,
        (v_62c214, v_64877a) => {

          v_e99f51.current?.scrollTo({
            y: Math.max(0, v_64877a - v_e59e6a - 20),
            animated: true
          });
        },
        () => {

          const v_4da25a = v_b1db35.current[v_ba91d0];
          if (v_4da25a !== undefined) {
            v_e99f51.current?.scrollTo({
              y: Math.max(0, v_4da25a - v_e59e6a - 20),
              animated: true
            });
          }
        }
      );
    } else {

      const v_4da25a = v_b1db35.current[v_ba91d0];
      if (v_4da25a !== undefined && v_e99f51.current) {
        v_e99f51.current.scrollTo({
          y: Math.max(0, v_4da25a - v_e59e6a - 20),
          animated: true
        });
      }
    }
  };

  const v_66288c = (v_ba91d0) => (v_d48baf) => {
    const { y: v_64877a } = v_d48baf.nativeEvent.layout;
    v_b1db35.current[v_ba91d0] = v_64877a;
  };

  const v_2c8813 = v_e662ae(false);
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

        const v_048ae4 = v_713327.current + v_898946.current;
        const v_87820f = v_048ae4 - v_1e0e1c.current;
        const v_f44c97 = 50;

        if (!v_2c8813.current && v_8ebb45 > v_87820f) {
          v_2c8813.current = true;
          v_1ce906(true);
        } else if (v_2c8813.current && v_8ebb45 < v_87820f - v_f44c97) {
          v_2c8813.current = false;
          v_1ce906(false);
        }

        if (v_fe1cb8.current) {
          clearTimeout(v_fe1cb8.current);
        }
        v_fe1cb8.current = setTimeout(() => {
          v_6ef413.current = false;

          v_8a344d(v_7a44c5.current);
        }, 500);
      },
    }
  );

  const v_8a344d = (v_8ebb45) => {

    if (v_7acdeb.length === 0) return;

    if (v_8ebb45 < 0) return;

    const v_02f376 = 150; 
    let v_22df7a = null;
    let v_c72770 = Infinity;
    let v_ea7aaf = null;
    let v_91e510 = -Infinity;

    for (const v_8c0b26 of v_7acdeb) {
      const v_04e91d = v_364a3f.current[v_8c0b26.typeNum];
      if (v_04e91d === undefined) continue;

      const v_8f8f97 = v_54e08d.current + v_04e91d;

      const v_ca1ca9 = v_8f8f97 - v_8ebb45;

      if (v_ca1ca9 > 0 && v_ca1ca9 > v_91e510) {
        v_91e510 = v_ca1ca9;
        v_ea7aaf = v_8c0b26.typeNum;
      }

      if (v_ca1ca9 >= v_02f376 - 30 && v_ca1ca9 < v_02f376 + 250) {
        const v_926d1c = Math.abs(v_ca1ca9 - v_02f376);
        if (v_926d1c < v_c72770) {
          v_c72770 = v_926d1c;
          v_22df7a = v_8c0b26.typeNum;
        }
      }
    }

    if (v_22df7a === null) {
      if (v_8ebb45 < 200 && v_7acdeb.length > 0) {

        v_22df7a = v_7acdeb[0].typeNum;
      } else if (v_ea7aaf !== null) {

        v_22df7a = v_ea7aaf;
      }
    }

    if (v_22df7a !== null && v_22df7a !== v_ab5f42.current) {
      v_ab5f42.current = v_22df7a;
      v_9ed853.current?.setActiveItem(v_22df7a);
      v_63ec8f.current?.setActiveItem(v_22df7a);
    }
  };

  const v_0ee1c1 = (v_11a5aa) => {
    v_09b78b(v_11a5aa);
    v_9ed853.current?.scrollToStart();
    v_63ec8f.current?.scrollToStart();
  };

  const v_743e81 = (v_653390) => {
    const v_04e91d = v_364a3f.current[v_653390];

    if (v_04e91d !== undefined && v_e99f51.current) {

      if (v_fe1cb8.current) {
        clearTimeout(v_fe1cb8.current);
        v_fe1cb8.current = null;
      }

      const v_8f8f97 = v_54e08d.current + v_04e91d;
      const v_02f376 = 130; 
      const v_f72d75 = v_8f8f97 - v_02f376;

      v_ab5f42.current = v_653390;
      v_9ed853.current?.setActiveItem(v_653390);
      v_63ec8f.current?.setActiveItem(v_653390);

      v_e99f51.current?.scrollTo?.({
        y: Math.max(0, v_f72d75),
        animated: true,
      });
    }
  };

  const v_1867ed = (v_653390) => {
    const v_dd0ca3 = v_653390 === v_e3e816.WELLNESS_INDEX;
    const v_740dd8 = v_dd0ca3 ? v_473dc9 : v_a6d4f8;
    if (v_740dd8 === null) {
      return null;
    }
    const v_3a09c2 = v_1b1755(v_740dd8);

    return (
      <View style={v_d81136.wellnessCardCompact} key={`${v_653390}-compact`}>
        <Text style={v_d81136.wellnessCardCompactText}>
          {`${v_740dd8}/10 ${v_3a09c2}`}
        </Text>
      </View>
    );
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
      const v_5d0a1b = v_3b402b as any;
      if (typeof v_5d0a1b === 'object' && v_5d0a1b !== null && !Array.isArray(v_5d0a1b)) {
        const v_e7392b = typeof v_5d0a1b.systolic === 'number' ? v_5d0a1b.systolic : Number(v_5d0a1b.systolic);
        const v_8cfeff = typeof v_5d0a1b.diastolic === 'number' ? v_5d0a1b.diastolic : Number(v_5d0a1b.diastolic);

        if (!isNaN(v_e7392b) && !isNaN(v_8cfeff)) {

          return (v_e7392b >= 140 || v_8cfeff >= 95) ? '위험' : '정상';
        }
      }

      return v_005339(v_df7b8f(v_e3e816.HIGH_BLOOD_PRESSURE_RISK));
    }
    if (v_653390 === v_e3e816.HIGH_BLOOD_PRESSURE_RISK) {
      return v_005339(v_3b402b);
    }

    if (v_653390 === v_e3e816.PULSE_RATE) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) {
        return (v_549ed3 >= 60 && v_549ed3 <= 100) ? '정상' : '위험';
      }
      return null;
    }

    if (v_653390 === v_e3e816.RESPIRATION_RATE) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) {
        return (v_549ed3 >= 12 && v_549ed3 <= 20) ? '정상' : '위험';
      }
      return null;
    }

    if (v_653390 === v_e3e816.PRQ) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) {
        return (v_549ed3 >= 4 && v_549ed3 <= 5) ? '정상' : '위험';
      }
      return null;
    }

    if (v_653390 === v_e3e816.SDNN) {
      const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);
      if (!isNaN(v_549ed3)) {
        return (v_549ed3 >= 50) ? '정상' : '위험';
      }
      return null;
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
  };

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

  const v_e4ae59 = (v_1833e7, v_d308b5, v_ba91d0, v_653390, v_3b402b) => {

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
      return v_8d41d7('health_analysis.result.item_headline_risk', { name: v_8a1355, particle: v_1c35ff });
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
      title: v_8d41d7('health_analysis.result.section_risk_prediction'),
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

  return (
    <>
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen}>
        <View
          onLayout={(v_d48baf) => {
            const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
            v_1e0e1c.current = v_c86e33;
          }}
        >
          <Header
            title={v_8d41d7('health_analysis.result_title')}
            showBackButton
            onBackPress={() => {

              v_c65f5d.replace('HealthAnalysis');
            }}
          />
        </View>
        {}
        <Animated.View
          style={[
            v_d81136.stickyHeader,
            { top: v_1e0e1c.current },
            !v_23f063 && { opacity: 0, pointerEvents: 'none' as const },
          ]}
          onLayout={(v_d48baf) => {
            const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
            v_905b11.current = v_c86e33;
          }}
        >
          <View style={v_d81136.stickyHeaderContent}>
            {v_b30c6b.length > 0 && v_b30c6b.map(([v_3b27d9, v_9390e8]) => {
              const v_653390 = Number(v_3b27d9);
              if (
                v_653390 === v_e3e816.WELLNESS_INDEX ||
                v_653390 === v_e3e816.WELLNESS_LEVEL
              ) {
                return (
                  <View
                    key={`${v_653390}-compact-wrapper`}
                    onLayout={(v_d48baf) => {
                      const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
                      v_d0de58.current = v_c86e33;
                      v_905b11.current = v_c86e33 + v_898946.current;
                    }}
                  >
                    {v_1867ed(v_653390)}
                  </View>
                );
              }
              return null;
            })}
            {}
            <CategoryTabScroll
              categories={v_8bc599}
              selectedCategory={v_69ddfb}
              onCategoryPress={(v_389afb) => v_0ee1c1(v_389afb)}
              tabContainerStyle={v_d81136.categoryTabContainer}
              tabContentStyle={v_d81136.categoryTabContent}
              tabButtonStyle={v_d81136.categoryTabButton}
              tabButtonActiveStyle={v_d81136.categoryTabButtonActive}
              tabTextStyle={v_d81136.categoryTabText}
              tabTextActiveStyle={v_d81136.categoryTabTextActive}
            />
            <ItemScrollButtons
              ref={v_63ec8f}
              items={v_7acdeb}
              initialActiveTypeNum={v_ab5f42.current}
              onItemPress={v_743e81}
              getItemName={(v_653390, v_2869c1) => v_2869c1 ?? v_50f905(v_653390, v_8d41d7)}
            />
          </View>
        </Animated.View>
        <SafeScrollView
          ref={v_e99f51}
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
          showBottomBackground={false}
          onScroll={v_941b26}
          scrollEventThrottle={16}
        >
          {}
          <View
            style={v_d81136.container}
            onLayout={(v_d48baf) => {
              v_713327.current = v_d48baf.nativeEvent.layout.height;
            }}
          >
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
                <View
                  onLayout={(v_d48baf) => {
                    const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
                    v_15af7a.current = v_c86e33;
                  }}
                >
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
                        <ExpandableDescription
                          description={v_2c4b08(v_653390, v_8d41d7)}
                          descriptionKey={`summary-${v_653390}`}
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
                </View>
              </>
            )}
          </View>

          {}
          <View
            ref={v_685d2a}
            style={[v_d81136.sectionNavContainer, { backgroundColor: v_1bfbd0.background }]}
            onLayout={(v_d48baf) => {
              const { height: v_c86e33 } = v_d48baf.nativeEvent.layout;
              v_898946.current = v_c86e33;
              if (v_d0de58.current > 0) {
                v_905b11.current = v_d0de58.current + v_c86e33;
              } else {
                v_905b11.current = v_15af7a.current;
              }
            }}
          >
            <CategoryTabScroll
              categories={v_8bc599}
              selectedCategory={v_69ddfb}
              onCategoryPress={(v_389afb) => v_0ee1c1(v_389afb)}
              tabContainerStyle={v_d81136.categoryTabContainer}
              tabContentStyle={v_d81136.categoryTabContent}
              tabButtonStyle={v_d81136.categoryTabButton}
              tabButtonActiveStyle={v_d81136.categoryTabButtonActive}
              tabTextStyle={v_d81136.categoryTabText}
              tabTextActiveStyle={v_d81136.categoryTabTextActive}
            />
            <ItemScrollButtons
              ref={v_9ed853}
              items={v_7acdeb}
              initialActiveTypeNum={v_ab5f42.current}
              onItemPress={v_743e81}
              getItemName={(v_653390, v_2869c1) => v_2869c1 ?? v_50f905(v_653390, v_8d41d7)}
            />
          </View>

          {}
          <View
            style={v_d81136.container}
            onLayout={(v_d48baf) => {
              v_91eb96.current = v_d48baf.nativeEvent.layout.y;
            }}
          >
            {}
            {v_7acdeb.length > 0 && (
              <View
                style={v_d81136.flatListContainer}
                ref={v_9aa77b}
                onLayout={(v_d48baf) => {
                  v_54e08d.current = v_91eb96.current + v_d48baf.nativeEvent.layout.y;
                }}
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
                    <View
                      key={v_d3e14c}
                      style={v_d81136.resultCard}
                      ref={(v_6d4ed3) => {
                        v_92b0b5.current[v_653390] = v_6d4ed3;
                      }}
                      onLayout={(v_d48baf) => {
                        const { y: v_64877a } = v_d48baf.nativeEvent.layout;
                        v_364a3f.current[v_653390] = v_64877a;
                      }}
                    >
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
                              <Text style={[v_d81136.resultStatus, { color: v_d72c04.text }]}>
                                {v_d308b5 === '정상'
                                  ? v_8d41d7('health_analysis.result.normal')
                                  : v_8d41d7('health_analysis.result.risk')}
                              </Text>
                            )}
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
                              {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_df7b8f(v_653390) === 'number' ? v_df7b8f(v_653390) as number : undefined)}
                            </Text>
                            {v_7e392e && !v_7984d6.has(v_653390) && (
                              <TouchableOpacity
                                onPress={() => {
                                  if (v_7b3177.has(v_653390)) {
                                    v_b4f3ee(v_653390);
                                  } else {
                                    v_13a008(v_653390);
                                    v_ea36df(null);
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
                          <ExpandableDescription
                            description={v_6856a9}
                            descriptionKey={v_d3e14c}
                          />
                          {}
                          {v_30687d(v_a7f568?.[v_653390]?.confidence) && (
                            <View style={v_d81136.confidenceRow}>
                              <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_a7f568?.[v_653390]?.confidence)!.color }]} />
                              <Text style={v_d81136.confidenceText}>{v_30687d(v_a7f568?.[v_653390]?.confidence)!.label}</Text>
                            </View>
                          )}
                        </View>
                      </View>

                      {}
                      {v_d11c1e && (
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

                      {}
                      {v_d11c1e && v_7bfc20[v_d3e14c] && (
                        <View style={v_d81136.resultDetailList}>
                          {v_79e11c.map((v_b47a43) => {
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
                                ? v_8d41d7('health_analysis.result.item_headline_risk', { name: v_ed2859, particle: v_1c35ff })
                                : v_8d41d7('health_analysis.result.item_headline_default', { name: v_ed2859, particle: v_1c35ff });

                            return (
                              <View key={`${v_d3e14c}-${v_b47a43}`} style={v_d81136.stressDetailCard}>
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
                                        {v_9eedea && !v_7984d6.has(v_b47a43) && (
                                          <TouchableOpacity
                                            onPress={() => {
                                              v_13a008(v_b47a43);
                                              v_ea36df(null);
                                            }}
                                            style={v_d81136.stressDetailInfoButton}
                                            accessibilityRole="button"
                                            accessibilityLabel={`${v_ed2859} ${v_8d41d7('health_analysis.result.detail_info')}`}
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
                                    </View>
                                    <ExpandableDescription
                                      description={v_11f033}
                                      descriptionKey={`detail-${v_d3e14c}-${v_b47a43}`}
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
                      )}
                    </View>
                  );
                })}
              </View>
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
                              {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8.value === 'number' ? v_9390e8.value : undefined)}
                            </Text>
                            {v_4b27b8 && !v_7984d6.has(v_653390) && (
                              <TouchableOpacity
                                onPress={() => {
                                  if (v_7b3177.has(v_653390)) {
                                    v_b4f3ee(v_653390);
                                  } else {
                                    v_13a008(v_653390);
                                    v_ea36df(null);
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
                          <ExpandableDescription
                            description={v_6856a9}
                            descriptionKey={`regular-${v_653390}`}
                          />
                          {}
                          {v_30687d(v_9390e8.confidence) && (
                            <View style={v_d81136.confidenceRow}>
                              <View style={[v_d81136.confidenceCircle, { backgroundColor: v_30687d(v_9390e8.confidence)!.color }]} />
                              <Text style={v_d81136.confidenceText}>{v_30687d(v_9390e8.confidence)!.label}</Text>
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
                              {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8?.value === 'number' ? v_9390e8.value : undefined)}
                            </Text>
                            {v_4b27b8 && !v_7984d6.has(v_653390) && (
                              <TouchableOpacity
                                onPress={() => {
                                  if (v_7b3177.has(v_653390)) {
                                    v_b4f3ee(v_653390);
                                  } else {
                                    v_13a008(v_653390);
                                    v_ea36df(null);
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
                          <ExpandableDescription
                            description={v_6856a9}
                            descriptionKey={`abnormal-${v_653390}`}
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
                                {v_e4ae59(v_1833e7, v_d308b5, undefined, v_653390, typeof v_9390e8?.value === 'number' ? v_9390e8.value : undefined)}
                              </Text>
                              {v_4b27b8 && !v_7984d6.has(v_653390) && (
                                <TouchableOpacity
                                  onPress={() => {
                                    if (v_7b3177.has(v_653390)) {
                                      v_b4f3ee(v_653390);
                                    } else {
                                      v_13a008(v_653390);
                                      v_ea36df(null);
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
                            <ExpandableDescription
                              description={v_6856a9}
                              descriptionKey={`sheet-abnormal-${v_653390}`}
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
  sectionNavContainer: {
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },

  categoryTabContainer: {
    marginBottom: v_9b1a04.small,
  },
  categoryTabContent: {
    paddingHorizontal: v_9b1a04.large,
    gap: v_9b1a04.small,
    alignItems: 'center',
  },
  categoryTabButton: {
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small,
    borderRadius: 20,
    backgroundColor: v_1bfbd0.backgroundSecondary,
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
  stickyHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: v_1bfbd0.background,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  stickyHeaderContent: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
  },
  wellnessCardCompact: {
    paddingVertical: v_9b1a04.small,
  },
  wellnessCardCompactText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    textAlign: 'center',
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
    borderColor: v_1bfbd0.background,
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
    backgroundColor: v_1bfbd0.background,
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
  descriptionText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: v_9b1a04.small,
    lineHeight: 18,
  },
  expandDescriptionButton: {
    marginTop: 4,
    paddingVertical: 2,
  },
  expandDescriptionText: {
    fontSize: 12,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
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

