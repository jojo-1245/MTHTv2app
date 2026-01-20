import v_a3453e from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_729608, v_570c34, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04 } from '../../constants';
import { v_e3e816 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';

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

const v_50f905 = (v_3b27d9): string => {
  const v_f2dfb8 = {
    [v_e3e816.PULSE_RATE]: '맥박',
    [v_e3e816.RESPIRATION_RATE]: '호흡수',
    [v_e3e816.OXYGEN_SATURATION]: '산소 포화도',
    [v_e3e816.SDNN]: 'SDNN',
    [v_e3e816.STRESS_LEVEL]: '스트레스 수준',
    [v_e3e816.RRI]: 'RRI',
    [v_e3e816.BLOOD_PRESSURE]: '혈압',
    [v_e3e816.STRESS_INDEX]: '스트레스 지수',
    [v_e3e816.MEAN_RRI]: '평균 RRI',
    [v_e3e816.RMSSD]: 'RMSSD',
    [v_e3e816.SD1]: 'SD1',
    [v_e3e816.SD2]: 'SD2',
    [v_e3e816.PRQ]: 'PRQ',
    [v_e3e816.PNS_INDEX]: 'PNS 지수',
    [v_e3e816.PNS_ZONE]: 'PNS 구역',
    [v_e3e816.SNS_INDEX]: 'SNS 지수',
    [v_e3e816.SNS_ZONE]: 'SNS 구역',
    [v_e3e816.WELLNESS_INDEX]: '웰니스 지수',
    [v_e3e816.WELLNESS_LEVEL]: '웰니스 수준',
    [v_e3e816.LFHF]: 'LF/HF',
    [v_e3e816.HEMOGLOBIN]: '헤모글로빈',
    [v_e3e816.HEMOGLOBIN_A1C]: '헤모글로빈 A1C',
    [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: '높은 헤모글로빈 A1C 위험',
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: '고혈압 위험',
    [v_e3e816.ASCVD_RISK]: 'ASCVD 위험',
    [v_e3e816.NORMALIZED_STRESS_INDEX]: '정규화된 스트레스 지수',
    [v_e3e816.HEART_AGE]: '심장 나이',
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: '높은 총 콜레스테롤 위험',
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: '높은 공복 혈당 위험',
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: '낮은 헤모글로빈 위험',
    [v_e3e816.ASCVD_RISK_LEVEL]: 'ASCVD 위험 수준',
    [v_e3e816.MEAN_ARTERIAL_PRESSURE]: '평균 동맥압',
    [v_e3e816.CARDIAC_WORKLOAD]: '심장 작업량',
    [v_e3e816.PULSE_PRESSURE]: '맥압',
    [v_e3e816.BODY_TENSION_SCORE]: '신체 긴장 점수',
  };
  return v_f2dfb8[v_3b27d9] || `알 수 없음 (${v_3b27d9})`;
};

const v_2c4b08 = (v_3b27d9): string => {
  const v_394a2e = {
    [v_e3e816.PULSE_RATE]: '심박수로, 1분당 심장이 뛰는 횟수입니다. 정상 범위는 보통 60-100 bpm입니다.',
    [v_e3e816.RESPIRATION_RATE]: '1분당 호흡 횟수입니다. 정상 범위는 보통 12-20회/분입니다.',
    [v_e3e816.OXYGEN_SATURATION]: '혈중 산소 포화도로, 정상 범위는 95-100%입니다.',
    [v_e3e816.SDNN]: '심박 변이도의 표준편차로, 자율신경계 기능을 평가합니다.',
    [v_e3e816.STRESS_LEVEL]: '스트레스 수준을 나타내는 지표입니다.',
    [v_e3e816.RRI]: 'R-R 간격 배열로, 심장 박동 간의 시간 간격을 나타냅니다.',
    [v_e3e816.BLOOD_PRESSURE]: '수축기/이완기 혈압입니다. 정상 범위는 보통 120/80 mmHg 미만입니다.',
    [v_e3e816.STRESS_INDEX]: '스트레스 지수로, 스트레스 정도를 수치화한 값입니다.',
    [v_e3e816.MEAN_RRI]: '평균 R-R 간격으로, 심박 변이도를 평가하는 지표입니다.',
    [v_e3e816.RMSSD]: '연속된 R-R 간격의 제곱 평균 제곱근 차이로, 단기 심박 변이도를 평가합니다.',
    [v_e3e816.SD1]: 'Poincaré plot의 단기 변이도를 나타내는 지표입니다.',
    [v_e3e816.SD2]: 'Poincaré plot의 장기 변이도를 나타내는 지표입니다.',
    [v_e3e816.PRQ]: '심박 변이도 기반의 지표입니다.',
    [v_e3e816.PNS_INDEX]: '부교감신경계 지수로, 이완 상태를 나타냅니다.',
    [v_e3e816.PNS_ZONE]: '부교감신경계 구역으로, 이완 상태를 분류합니다.',
    [v_e3e816.SNS_INDEX]: '교감신경계 지수로, 스트레스 반응을 나타냅니다.',
    [v_e3e816.SNS_ZONE]: '교감신경계 구역으로, 스트레스 상태를 분류합니다.',
    [v_e3e816.WELLNESS_INDEX]: '전반적인 웰니스 상태를 나타내는 종합 지수입니다.',
    [v_e3e816.WELLNESS_LEVEL]: '웰니스 수준을 분류한 값입니다.',
    [v_e3e816.LFHF]: '저주파/고주파 비율로, 자율신경계 균형을 나타냅니다.',
    [v_e3e816.HEMOGLOBIN]: '혈중 헤모글로빈 농도입니다. 정상 범위는 남성 13-17 g/dL, 여성 12-16 g/dL입니다.',
    [v_e3e816.HEMOGLOBIN_A1C]: '당화 헤모글로빈으로, 최근 2-3개월간의 평균 혈당을 나타냅니다. 정상 범위는 4-5.6%입니다.',
    [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: '높은 당화 헤모글로빈 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: '고혈압 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.ASCVD_RISK]: '동맥경화성 심혈관 질환 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.NORMALIZED_STRESS_INDEX]: '정규화된 스트레스 지수로, 표준화된 스트레스 수준을 나타냅니다.',
    [v_e3e816.HEART_AGE]: '심장 나이로, 심혈관 건강 상태를 나이로 표현한 값입니다.',
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: '높은 총 콜레스테롤 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: '높은 공복 혈당 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: '낮은 헤모글로빈(빈혈) 위험 여부입니다. 1은 위험, 0은 정상입니다.',
    [v_e3e816.ASCVD_RISK_LEVEL]: '동맥경화성 심혈관 질환 위험 수준을 분류한 값입니다.',
    [v_e3e816.MEAN_ARTERIAL_PRESSURE]: '평균 동맥압으로, 심장이 혈액을 펌핑하는 평균 압력입니다.',
    [v_e3e816.CARDIAC_WORKLOAD]: '심장 작업량으로, 심장이 수행하는 일의 양을 나타냅니다.',
    [v_e3e816.PULSE_PRESSURE]: '맥압으로, 수축기 혈압과 이완기 혈압의 차이입니다.',
    [v_e3e816.BODY_TENSION_SCORE]: '신체 긴장 점수로, 신체의 긴장 상태를 나타냅니다.',
  };
  return v_394a2e[v_3b27d9] || '측정된 생체 신호 값입니다.';
};

const v_2e7086 = (v_3b27d9, v_3b402b): string | null => {
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
      return '⚠️ 위험: 전문의 상담을 권장합니다.';
    } else if (v_842d09 === 0) {
      return '✅ 정상: 현재 위험 수준이 낮습니다.';
    }
  }

  return null;
};

const v_6d92d1 = (v_3b27d9, v_3b402b): SummaryStatusInfo | null => {
  const v_549ed3 = typeof v_3b402b === 'number' ? v_3b402b : Number(v_3b402b);

  if (isNaN(v_549ed3)) {
    return null;
  }

  switch (v_3b27d9) {
    case v_e3e816.WELLNESS_INDEX:

      if (v_549ed3 >= 80) {
        return {
          type: 'excellent',
          message: '우수: 건강 상태가 매우 좋습니다.',
          icon: 'checkmark-circle',
          color: '#10B981', 
          borderColor: '#10B981',
          backgroundColor: '#edfff6', 
        };
      } else if (v_549ed3 >= 60) {
        return {
          type: 'good',
          message: '양호: 건강 상태가 양호합니다.',
          icon: 'checkmark-circle-outline',
          color: '#3B72F2', 
          borderColor: '#3B72F2',
          backgroundColor: '#edf4ff', 
        };
      } else if (v_549ed3 >= 40) {
        return {
          type: 'normal',
          message: '보통: 건강 관리를 권장합니다.',
          icon: 'information-circle-outline',
          color: '#F59E0B', 
          borderColor: '#F59E0B',
          backgroundColor: '#fffbeb', 
        };
      } else {
        return {
          type: 'warning',
          message: '주의: 건강 상태 개선이 필요합니다. 전문의 상담을 권장합니다.',
          icon: 'warning-outline',
          color: '#EF4444', 
          borderColor: '#EF4444',
          backgroundColor: '#fdf1f1', 
        };
      }

    case v_e3e816.WELLNESS_LEVEL:

      if (v_549ed3 >= 4) {
        return {
          type: 'excellent',
          message: '우수: 건강 수준이 높습니다.',
          icon: 'checkmark-circle',
          color: '#10B981',
          borderColor: '#10B981',
          backgroundColor: '#D1FAE5',
        };
      } else if (v_549ed3 >= 3) {
        return {
          type: 'good',
          message: '양호: 건강 수준이 양호합니다.',
          icon: 'checkmark-circle-outline',
          color: '#3B72F2',
          borderColor: '#3B72F2',
          backgroundColor: '#E6F0FF',
        };
      } else if (v_549ed3 >= 2) {
        return {
          type: 'normal',
          message: '보통: 건강 관리를 권장합니다.',
          icon: 'information-circle-outline',
          color: '#F59E0B',
          borderColor: '#F59E0B',
          backgroundColor: '#FEF3C7',
        };
      } else {
        return {
          type: 'warning',
          message: '주의: 건강 수준 개선이 필요합니다. 전문의 상담을 권장합니다.',
          icon: 'warning-outline',
          color: '#EF4444',
          borderColor: '#EF4444',
          backgroundColor: '#FEE2E2',
        };
      }

    case v_e3e816.HEART_AGE:

      if (v_549ed3 <= 30) {
        return {
          type: 'excellent',
          message: '우수: 심장 건강이 매우 좋습니다.',
          icon: 'checkmark-circle',
          color: '#10B981',
          borderColor: '#10B981',
          backgroundColor: '#D1FAE5',
        };
      } else if (v_549ed3 <= 40) {
        return {
          type: 'good',
          message: '양호: 심장 건강이 양호합니다.',
          icon: 'checkmark-circle-outline',
          color: '#3B72F2',
          borderColor: '#3B72F2',
          backgroundColor: '#E6F0FF',
        };
      } else if (v_549ed3 <= 50) {
        return {
          type: 'normal',
          message: '보통: 심장 건강 관리를 권장합니다.',
          icon: 'information-circle-outline',
          color: '#F59E0B',
          borderColor: '#F59E0B',
          backgroundColor: '#FEF3C7',
        };
      } else if (v_549ed3 <= 60) {
        return {
          type: 'warning',
          message: '주의: 심장 건강 개선이 필요합니다.',
          icon: 'warning-outline',
          color: '#EF4444',
          borderColor: '#EF4444',
          backgroundColor: '#FEE2E2',
        };
      } else {
        return {
          type: 'danger',
          message: '경고: 심장 건강이 우려됩니다. 전문의 상담을 강력히 권장합니다.',
          icon: 'alert-circle',
          color: '#DC2626', 
          borderColor: '#DC2626',
          backgroundColor: '#FEE2E2',
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
  const { results: v_a7f568, timestamp: v_42044e } = v_c7daf6.params;

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
          title="측정 결과"
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
            <Text style={v_d81136.title}>건강분석 결과</Text>

            {}
            <View style={v_d81136.resultSection}>
              <Text style={v_d81136.sectionTitle}>측정 시간</Text>
              <Text style={v_d81136.sectionValue}>
                {new Date(v_42044e).toLocaleString('ko-KR')}
              </Text>
            </View>

            {}
            {v_b30c6b.length > 0 && (
              <>
                <Text style={v_d81136.sectionHeader}>종합 지표</Text>
                {v_b30c6b.map(([v_3b27d9, v_9390e8]) => {
                  const v_653390 = Number(v_3b27d9);
                  const v_828097 = v_2e7086(v_653390, v_9390e8.value);
                  const v_75da5e = v_6d92d1(v_653390, v_9390e8.value);

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

                  return (
                    <View
                      key={v_3b27d9}
                      style={[
                        v_d81136.resultSection,
                        v_d81136.summarySection,
                        v_2b38bd,
                      ]}
                    >
                      <Text style={v_d81136.sectionTitle}>
                        {v_50f905(v_653390)}
                      </Text>
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
                        {v_2c4b08(v_653390)}
                      </Text>
                      {(() => {

                        if (v_9390e8.confidence && typeof v_9390e8.confidence === 'object' && 'level' in v_9390e8.confidence) {
                          const v_fbe91e = (v_9390e8.confidence as any).level;
                          let v_4e0432 = '';
                          let v_53569e = 0;

                          if (v_fbe91e === 0) {
                            v_4e0432 = '알 수 없음';
                            v_53569e = 0;
                          } else if (v_fbe91e === 1) {
                            v_4e0432 = '낮음';
                            v_53569e = 33;
                          } else if (v_fbe91e === 2) {
                            v_4e0432 = '중간';
                            v_53569e = 67;
                          } else if (v_fbe91e === 3) {
                            v_4e0432 = '높음';
                            v_53569e = 100;
                          }

                          return (
                            <Text style={v_d81136.confidenceText}>
                              신뢰도: {v_4e0432} ({v_53569e}%)
                            </Text>
                          );
                        }

                        if (typeof v_9390e8.confidence === 'number') {
                          const v_ba2265 = (v_9390e8.confidence * 100).toFixed(1);
                          if (!isNaN(Number(v_ba2265))) {
                            return (
                              <Text style={v_d81136.confidenceText}>
                                신뢰도: {v_ba2265}%
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
            )}

            {}
            {v_53d27c.length > 0 ? (
              <>
                <Text style={v_d81136.sectionHeader}>
                  상세 측정 항목 ({v_53d27c.length}개)
                </Text>
                {v_53d27c.map(([v_3b27d9, v_9390e8]) => {
                  const v_653390 = Number(v_3b27d9);
                  const v_828097 = v_2e7086(v_653390, v_9390e8.value);

                  return (
                    <View key={v_3b27d9} style={v_d81136.resultSection}>
                      <Text style={v_d81136.sectionTitle}>
                        {v_50f905(v_653390)}
                      </Text>
                      <Text style={v_d81136.sectionValue}>
                        {v_a6fe82(v_9390e8.value, v_653390)}
                      </Text>
                      {v_828097 && (
                        <Text style={v_d81136.riskText}>{v_828097}</Text>
                      )}
                      <Text style={v_d81136.descriptionText}>
                        {v_2c4b08(v_653390)}
                      </Text>
                      {(() => {

                        if (v_9390e8.confidence && typeof v_9390e8.confidence === 'object' && 'level' in v_9390e8.confidence) {
                          const v_fbe91e = (v_9390e8.confidence as any).level;
                          let v_4e0432 = '';
                          let v_53569e = 0;

                          if (v_fbe91e === 0) {
                            v_4e0432 = '알 수 없음';
                            v_53569e = 0;
                          } else if (v_fbe91e === 1) {
                            v_4e0432 = '낮음';
                            v_53569e = 33;
                          } else if (v_fbe91e === 2) {
                            v_4e0432 = '중간';
                            v_53569e = 67;
                          } else if (v_fbe91e === 3) {
                            v_4e0432 = '높음';
                            v_53569e = 100;
                          }

                          return (
                            <Text style={v_d81136.confidenceText}>
                              신뢰도: {v_4e0432} ({v_53569e}%)
                            </Text>
                          );
                        }

                        if (typeof v_9390e8.confidence === 'number') {
                          const v_ba2265 = (v_9390e8.confidence * 100).toFixed(1);
                          if (!isNaN(Number(v_ba2265))) {
                            return (
                              <Text style={v_d81136.confidenceText}>
                                신뢰도: {v_ba2265}%
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
                <Text style={v_d81136.sectionTitle}>측정 결과 없음</Text>
                <Text style={v_d81136.sectionValue}>측정 데이터가 없습니다.</Text>
              </View>
            )}

            {}
            <View style={v_d81136.infoContainer}>
              <Text style={v_d81136.infoText}>
                측정 결과는 참고용입니다.{'\n'}
                정확한 진단은 전문의와 상담하시기 바랍니다.
              </Text>
            </View>

            {}
            <View style={v_d81136.buttonContainer}>
              <PrimaryButton
                title="측정종료"
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
    alignItems: 'center',
    marginTop: v_9b1a04.small,
  },
  statusIcon: {
    marginRight: v_9b1a04.small / 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small,
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
});

export default v_cb47c8;

