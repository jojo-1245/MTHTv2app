import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_729608, v_570c34, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_ef658a, v_9b1a04, v_d8cb4d } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import { v_772971 } from 'jmpfvteuuztnp';

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

const v_50f905 = (v_3b27d9, v_8d41d7): string => {
  const v_f2dfb8 = {
    [v_e3e816.PULSE_RATE]: v_8d41d7('health_analysis.vitals.pulse_rate'),
    [v_e3e816.RESPIRATION_RATE]: v_8d41d7('health_analysis.vitals.respiration_rate'),
    [v_e3e816.OXYGEN_SATURATION]: v_8d41d7('health_analysis.vitals.oxygen_saturation'),
    [v_e3e816.BLOOD_PRESSURE]: v_8d41d7('health_analysis.vitals.blood_pressure'),
    [v_e3e816.WELLNESS_INDEX]: v_8d41d7('health_analysis.vitals.wellness_index'),
    [v_e3e816.WELLNESS_LEVEL]: v_8d41d7('health_analysis.vitals.wellness_level'),
    [v_e3e816.HEART_AGE]: v_8d41d7('health_analysis.vitals.heart_age'),
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

const v_a6fe82 = (v_3b402b, v_3b27d9): string => {
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
    const v_87069f = v_3b402b.length > v_4b5e5d ? ` 외 ${v_3b402b.length - v_4b5e5d}개` : '';
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
    return v_842d09 === 1 ? '위험' : '정상';
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
      return `${v_549ed3.toFixed(0)} 세`;
    } else {
      return v_549ed3.toFixed(1);
    }
  }

  return String(v_3b402b);
};

const HealthAnalysisResultScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { results: v_a7f568, timestamp: v_42044e } = v_c7daf6.params;

  const [v_571c37, v_e78f19] = v_5ab095<Record<number, boolean>>({});

  const [v_49e71a, v_f2b4a8] = v_5ab095<Record<number, boolean>>({});

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
    v_e3e816.WELLNESS_LEVEL,
    v_e3e816.HEART_AGE,
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
            <Text style={v_d81136.title}>{v_8d41d7('health_analysis.result_title')}</Text>

            {}
            <View style={v_d81136.resultSection}>
              <Text style={v_d81136.sectionTitle}>{v_8d41d7('health_analysis.measurement_time')}</Text>
              <Text style={v_d81136.sectionValue}>
                {new Date(v_42044e).toLocaleString('ko-KR')}
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
                        {v_a6fe82(v_9390e8.value, v_653390)}
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
                      {(() => {

                        if (v_9390e8.confidence && typeof v_9390e8.confidence === 'object' && 'level' in v_9390e8.confidence) {
                          const v_fbe91e = (v_9390e8.confidence as any).level;
                          let v_4e0432 = '';
                          let v_53569e = 0;

                          if (v_fbe91e === 0) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_unknown');
                            v_53569e = 0;
                          } else if (v_fbe91e === 1) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_low');
                            v_53569e = 33;
                          } else if (v_fbe91e === 2) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_medium');
                            v_53569e = 67;
                          } else if (v_fbe91e === 3) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_high');
                            v_53569e = 100;
                          }

                          return (
                            <Text style={v_d81136.confidenceText}>
                              {v_8d41d7('health_analysis.result.confidence')}: {v_4e0432} ({v_53569e}%)
                            </Text>
                          );
                        }

                        if (typeof v_9390e8.confidence === 'number') {
                          const v_ba2265 = (v_9390e8.confidence * 100).toFixed(1);
                          if (!isNaN(Number(v_ba2265))) {
                            return (
                              <Text style={v_d81136.confidenceText}>
                                {v_8d41d7('health_analysis.result.confidence')}: {v_ba2265}%
                              </Text>
                            );
                          }
                        }

                        return null;
                      })()}

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
            {v_53d27c.length > 0 ? (
              <>
                <Text style={v_d81136.sectionHeader}>
                  {v_8d41d7('health_analysis.regular_indicators', { count: v_53d27c.length })}
                </Text>
                {v_53d27c.map(([v_3b27d9, v_9390e8]) => {
                  const v_653390 = Number(v_3b27d9);
                  const v_828097 = v_2e7086(v_653390, v_9390e8.value, v_8d41d7);
                  const v_c9f7af = v_2f5a10(v_653390);

                  return (
                    <View key={v_3b27d9} style={v_d81136.resultSection}>
                      <Text style={v_d81136.sectionTitle}>
                        {v_50f905(v_653390, v_8d41d7)}
                      </Text>
                      <Text style={v_d81136.sectionValue}>
                        {v_a6fe82(v_9390e8.value, v_653390)}
                      </Text>
                      {v_828097 && (
                        <Text style={v_d81136.riskText}>{v_828097}</Text>
                      )}
                      <Text style={v_d81136.descriptionText}>
                        {v_2c4b08(v_653390, v_8d41d7)}
                      </Text>

                      {}
                      {v_c9f7af && (
                        <View style={v_d81136.riskCriteriaContainer}>
                          {}
                          <TouchableOpacity
                            style={v_d81136.riskCriteriaHeader}
                            onPress={() => v_1be31b(v_653390)}
                            accessibilityRole="button"
                            accessibilityLabel={`${v_8d41d7('health_analysis.result.risk_criteria')} ${v_49e71a[v_653390] ? v_8d41d7('health_analysis.result.hide') : v_8d41d7('health_analysis.result.show')}`}
                            accessibilityHint={v_8d41d7('health_analysis.result.risk_criteria_hint')}
                          >
                            <Text style={v_d81136.riskCriteriaTitle}>{v_8d41d7('health_analysis.result.risk_criteria')}</Text>
                            <Ionicons
                              name={v_49e71a[v_653390] ? "chevron-up" : "chevron-down"}
                              size={20}
                              color={v_1bfbd0.secondaryText}
                            />
                          </TouchableOpacity>

                          {}
                          {v_49e71a[v_653390] && (
                            <>
                              {v_653390 === v_e3e816.HIGH_BLOOD_PRESSURE_RISK &&
                                'systolic' in v_c9f7af ? (
                                <>
                                  <View style={v_d81136.riskCriteriaRow}>
                                    <Text style={v_d81136.riskCriteriaLabel}>{v_8d41d7('health_analysis.result.systolic')}:</Text>
                                    <View style={v_d81136.riskCriteriaValues}>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_low')} {v_c9f7af.systolic.low} {v_c9f7af.systolic.unit || ''}
                                      </Text>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.systolic.medium} {v_c9f7af.systolic.unit || ''}
                                      </Text>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_high')} {v_c9f7af.systolic.high} {v_c9f7af.systolic.unit || ''}
                                      </Text>
                                    </View>
                                  </View>
                                  <View style={v_d81136.riskCriteriaRow}>
                                    <Text style={v_d81136.riskCriteriaLabel}>{v_8d41d7('health_analysis.result.diastolic')}:</Text>
                                    <View style={v_d81136.riskCriteriaValues}>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_low')} {v_c9f7af.diastolic.low} {v_c9f7af.diastolic.unit || ''}
                                      </Text>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_medium')} {v_c9f7af.diastolic.medium} {v_c9f7af.diastolic.unit || ''}
                                      </Text>
                                      <Text style={v_d81136.riskCriteriaValue}>
                                        {v_8d41d7('health_analysis.result.risk_high')} {v_c9f7af.diastolic.high} {v_c9f7af.diastolic.unit || ''}
                                      </Text>
                                    </View>
                                  </View>
                                </>
                              ) : 'low' in v_c9f7af ? (
                                <View style={v_d81136.riskCriteriaValues}>
                                  <Text style={v_d81136.riskCriteriaValue}>
                                    {v_8d41d7('health_analysis.result.risk_low')}: {v_c9f7af.low} {v_c9f7af.unit || ''}
                                  </Text>
                                  {v_c9f7af.medium !== 'N/A' && (
                                    <Text style={v_d81136.riskCriteriaValue}>
                                      {v_8d41d7('health_analysis.result.risk_medium')}: {v_c9f7af.medium} {v_c9f7af.unit || ''}
                                    </Text>
                                  )}
                                  <Text style={v_d81136.riskCriteriaValue}>
                                    {v_8d41d7('health_analysis.result.risk_high')}: {v_c9f7af.high} {v_c9f7af.unit || ''}
                                  </Text>
                                </View>
                              ) : null}
                            </>
                          )}
                        </View>
                      )}
                      {(() => {

                        if (v_9390e8.confidence && typeof v_9390e8.confidence === 'object' && 'level' in v_9390e8.confidence) {
                          const v_fbe91e = (v_9390e8.confidence as any).level;
                          let v_4e0432 = '';
                          let v_53569e = 0;

                          if (v_fbe91e === 0) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_unknown');
                            v_53569e = 0;
                          } else if (v_fbe91e === 1) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_low');
                            v_53569e = 33;
                          } else if (v_fbe91e === 2) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_medium');
                            v_53569e = 67;
                          } else if (v_fbe91e === 3) {
                            v_4e0432 = v_8d41d7('health_analysis.result.confidence_high');
                            v_53569e = 100;
                          }

                          return (
                            <Text style={v_d81136.confidenceText}>
                              {v_8d41d7('health_analysis.result.confidence')}: {v_4e0432} ({v_53569e}%)
                            </Text>
                          );
                        }

                        if (typeof v_9390e8.confidence === 'number') {
                          const v_ba2265 = (v_9390e8.confidence * 100).toFixed(1);
                          if (!isNaN(Number(v_ba2265))) {
                            return (
                              <Text style={v_d81136.confidenceText}>
                                {v_8d41d7('health_analysis.result.confidence')}: {v_ba2265}%
                              </Text>
                            );
                          }
                        }

                        return null;
                      })()}
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
      </SafeView>
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
    marginBottom: v_9b1a04.xlarge,
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

