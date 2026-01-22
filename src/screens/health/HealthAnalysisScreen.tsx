import v_a3453e, { v_5ab095, v_c4deb2, v_e662ae, v_de06a3 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_39a996,
  v_03e392,
  v_4623af,
  v_326be8,
  v_67e68d,
  v_e99fe0,
  v_9328cf,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_d4f1cc } from 'mbgbsytfgyr';
import { v_729608, v_570c34, v_556baf, v_cb41de } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04 } from '../../constants';
import { v_573fcf } from '../../utils/env';

import {
  v_d55d6e,
  v_6edea3,
  v_54a8eb,
  v_eb2401,
  v_89d8fd,
  v_34ffee,
  v_96a72c,
  v_e5daac,
  v_f02c2f,
  v_b94b88,
  v_0ed1d2,
  v_9698ab,
  v_7d83c3,
  v_2be213,
  v_e3e816,
} from 'itscvgofwkypynbtmpkqsziydpcjrgp';
import type { v_ef2cf2, v_90dba6 } from 'itscvgofwkypynbtmpkqsziydpcjrgp';

const v_fa53c9 = (): string => {
  try {

    return v_573fcf('FZLJTILI_LICENSE_KEY');
  } catch (v_5e9bfe) {

    const v_651d83 =
      process.env.EXPO_PUBLIC_FZLJTILI_LICENSE_KEY ||
      process.env.FZLJTILI_LICENSE_KEY ||
      '';
    if (!v_651d83) {
      console.warn('경고: FZLJTILI_LICENSE_KEY가 설정되지 않았습니다.');
    }
    return v_651d83;
  }
};

const v_8ea06a = 60; 

type Props = v_432191<v_8ad91b, 'HealthAnalysis'>;

type AnalysisStep = 'intro' | 'measurement';

type SdkAlertInfo = {
  shouldReset: boolean;
};

const v_d58507 = {

  4: { shouldReset: true },
  8: { shouldReset: true },
  14: { shouldReset: true },
  17: { shouldReset: true },
  19: { shouldReset: true },
  20: { shouldReset: true },
  21: { shouldReset: true },

  1001: { shouldReset: true },
  1002: { shouldReset: true },
  1005: { shouldReset: true },
  1501: { shouldReset: false },

  2002: { shouldReset: true },
  2003: { shouldReset: true },
  2004: { shouldReset: true },
  2007: { shouldReset: true },
  2010: { shouldReset: true },
  2016: { shouldReset: true },
  2017: { shouldReset: true },
  2018: { shouldReset: true },
  2024: { shouldReset: true },
  2025: { shouldReset: true },
  2032: { shouldReset: true },
  2034: { shouldReset: true },
  2035: { shouldReset: true },
  2036: { shouldReset: true },

  6004: { shouldReset: false },
  6005: { shouldReset: false },

  7002: { shouldReset: true },
  7004: { shouldReset: true },
  7005: { shouldReset: true },
  7006: { shouldReset: true },
  7007: { shouldReset: true },
  7008: { shouldReset: true },
  7009: { shouldReset: true },
  7010: { shouldReset: true },
  7011: { shouldReset: true },
  7012: { shouldReset: true },

  3505: { shouldReset: false },
  3506: { shouldReset: false },

  4505: { shouldReset: false },
  4506: { shouldReset: false },

  8003: { shouldReset: true },
  8004: { shouldReset: true },
  8005: { shouldReset: true },
  8006: { shouldReset: true },
  8007: { shouldReset: true },
  8008: { shouldReset: true },
  8501: { shouldReset: false },

  9001: { shouldReset: true },
  9500: { shouldReset: false },
};

const v_a79016 = (v_3b27d9): string => {
  const v_f2dfb8 = {
    [v_e3e816.PULSE_RATE]: 'PULSE_RATE',
    [v_e3e816.RESPIRATION_RATE]: 'RESPIRATION_RATE',
    [v_e3e816.OXYGEN_SATURATION]: 'OXYGEN_SATURATION',
    [v_e3e816.SDNN]: 'SDNN',
    [v_e3e816.STRESS_LEVEL]: 'STRESS_LEVEL',
    [v_e3e816.RRI]: 'RRI',
    [v_e3e816.BLOOD_PRESSURE]: 'BLOOD_PRESSURE',
    [v_e3e816.STRESS_INDEX]: 'STRESS_INDEX',
    [v_e3e816.MEAN_RRI]: 'MEAN_RRI',
    [v_e3e816.RMSSD]: 'RMSSD',
    [v_e3e816.SD1]: 'SD1',
    [v_e3e816.SD2]: 'SD2',
    [v_e3e816.PRQ]: 'PRQ',
    [v_e3e816.PNS_INDEX]: 'PNS_INDEX',
    [v_e3e816.PNS_ZONE]: 'PNS_ZONE',
    [v_e3e816.SNS_INDEX]: 'SNS_INDEX',
    [v_e3e816.SNS_ZONE]: 'SNS_ZONE',
    [v_e3e816.WELLNESS_INDEX]: 'WELLNESS_INDEX',
    [v_e3e816.WELLNESS_LEVEL]: 'WELLNESS_LEVEL',
    [v_e3e816.LFHF]: 'LFHF',
    [v_e3e816.HEMOGLOBIN]: 'HEMOGLOBIN',
    [v_e3e816.HEMOGLOBIN_A1C]: 'HEMOGLOBIN_A1C',
    [v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK]: 'HIGH_HEMOGLOBIN_A1C_RISK',
    [v_e3e816.HIGH_BLOOD_PRESSURE_RISK]: 'HIGH_BLOOD_PRESSURE_RISK',
    [v_e3e816.ASCVD_RISK]: 'ASCVD_RISK',
    [v_e3e816.NORMALIZED_STRESS_INDEX]: 'NORMALIZED_STRESS_INDEX',
    [v_e3e816.HEART_AGE]: 'HEART_AGE',
    [v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK]: 'HIGH_TOTAL_CHOLESTEROL_RISK',
    [v_e3e816.HIGH_FASTING_GLUCOSE_RISK]: 'HIGH_FASTING_GLUCOSE_RISK',
    [v_e3e816.LOW_HEMOGLOBIN_RISK]: 'LOW_HEMOGLOBIN_RISK',
    [v_e3e816.ASCVD_RISK_LEVEL]: 'ASCVD_RISK_LEVEL',
    [v_e3e816.MEAN_ARTERIAL_PRESSURE]: 'MEAN_ARTERIAL_PRESSURE',
    [v_e3e816.CARDIAC_WORKLOAD]: 'CARDIAC_WORKLOAD',
    [v_e3e816.PULSE_PRESSURE]: 'PULSE_PRESSURE',
    [v_e3e816.BODY_TENSION_SCORE]: 'BODY_TENSION_SCORE',
  };
  return v_f2dfb8[v_3b27d9] || `UNKNOWN(${v_3b27d9})`;
};

const HealthAnalysisScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();

  const [v_91943c, v_639227] = v_5ab095<AnalysisStep>('intro');

  const v_bc50c7 = v_34ffee();
  const v_288ac3 = v_96a72c();
  const v_5e9bfe = v_e5daac();
  const v_d0a515 = v_f02c2f();
  const v_f91e0a = v_b94b88();
  const v_9a1841 = v_0ed1d2();
  const v_f6dcea = v_9698ab();
  const v_14a7eb = v_7d83c3();

  v_c4deb2(() => {
    console.log('세션 상태:', v_bc50c7);
  }, [v_bc50c7]);

  const [v_d1a6bb, v_1e66f0] = v_d4f1cc();

  const v_a3ff5a = v_e662ae<v_6edea3 | undefined>(undefined);

  const [v_109b56, v_49296b] = v_5ab095(false);
  const [v_ee736b, v_054130] = v_5ab095<string | undefined>();
  const v_eb342d = v_e662ae<NodeJS.Timeout | undefined>(undefined);
  const [v_c1ef35, v_b0aeaf] = v_5ab095(false);
  const v_ce2e95 = v_e662ae(false);
  const [v_e6c45c, v_7fa926] = v_5ab095<number>(0);
  const [v_b3c379, v_f36dd5] = v_5ab095<string | undefined>();
  const [v_12abe8, v_8a8952] = v_5ab095<string | undefined>();
  const [v_cc7953, v_847de1] = v_5ab095({ x: 0, y: 0, width: 0, height: 0 });

  const v_b1faa7 = v_e662ae<boolean>(false);

  const v_4c31ba = v_e662ae<boolean>(false);

  const v_b9ada4 = v_e662ae<boolean>(false);

  const v_3be953 = v_e662ae<boolean>(false);

  const v_b98ddb = v_e662ae<boolean>(false);

  const v_0e2ade = v_e662ae<Set<number>>(new Set());

  const v_919f8c = v_e662ae<v_eb2401 | null>(null);

  const v_318478 = v_e662ae<boolean>(false);

  const v_1cbea0 = v_e662ae<boolean>(false);

  const v_c1affb = v_e662ae<number>(0);

  const v_977633 = v_e662ae<number>(0);

  const v_1dd18f = v_e662ae<boolean>(false);

  const v_ec0597 = v_de06a3(async (): Promise<boolean> => {
    if (!v_d1a6bb) {
      const v_43c42e = await v_1e66f0();
      return v_43c42e.granted;
    }
    if (!v_d1a6bb.granted) {
      const v_43c42e = await v_1e66f0();
      return v_43c42e.granted;
    }
    return true;
  }, [v_d1a6bb, v_1e66f0]);

  const v_98caa0 = v_de06a3(async () => {
    if (v_a3ff5a.current) {
      console.log('세션 종료 시작...');
      try {
        await v_a3ff5a.current.terminate();
        console.log('세션 종료 완료');
      } catch (v_49263d) {
        console.warn('세션 종료 중 오류:', v_49263d);
      }
      v_a3ff5a.current = undefined;
    }
  }, []);

  const v_98b3fa = v_de06a3(async () => {
    console.log('세션 초기화 후 intro로 이동');
    if (v_a3ff5a.current) {
      try {
        await v_a3ff5a.current.stop();
        console.log('세션 중지 완료');
      } catch (v_9e86fd) {
        console.warn('세션 중지 실패:', v_9e86fd);
      }
      await v_98caa0();
      v_a3ff5a.current = undefined;
    }

    v_ce2e95.current = false;
    v_3be953.current = false;
    v_b1faa7.current = false;
    v_b98ddb.current = false;
    v_0e2ade.current.clear();
    v_1cbea0.current = false;
    v_c1affb.current = 0;

    v_977633.current = Date.now() + 5000;
    v_1dd18f.current = false;
    v_318478.current = false;
    v_b9ada4.current = false;
    v_49296b(false);
    v_b0aeaf(false);
    v_8a8952(undefined);
    v_f36dd5(undefined);
    v_7fa926(0);
    v_639227('intro');
  }, [v_98caa0]);

  const v_141cf8 = v_de06a3(
    (v_c99bd2): boolean => {
      if (!v_c99bd2) {
        return false;
      }
      const v_34d5e3 = v_d58507[v_c99bd2];
      if (!v_34d5e3) {
        return false;
      }
      const v_6845e8 = `health_analysis.sdk_alerts.${v_c99bd2}`;
      const v_8667e1 = `${v_6845e8}.title`;
      const v_ba9d82 = `${v_6845e8}.reason`;
      const v_31cc5f = `${v_6845e8}.solution`;
      const v_9f1622 = v_8d41d7(v_8667e1);
      const v_58ca36 = v_8d41d7(v_ba9d82);
      const v_6f0517 = v_8d41d7(v_31cc5f);
      if (v_9f1622 === v_8667e1 || v_58ca36 === v_ba9d82 || v_6f0517 === v_31cc5f) {
        return false;
      }
      if (v_0e2ade.current.has(v_c99bd2)) {
        return true;
      }
      v_0e2ade.current.add(v_c99bd2);

      const v_a8cd21 = `${v_58ca36}\n\n${v_8d41d7('health_analysis.sdk_alerts.solution_prefix')}\n${v_6f0517}\n\n(코드: ${v_c99bd2})`;
      v_03e392.alert(v_9f1622, v_a8cd21, [
        {
          text: v_8d41d7('common.confirm'),
          onPress: async () => {
            v_0e2ade.current.delete(v_c99bd2);
            if (v_34d5e3.shouldReset) {
              await v_98b3fa();
            }
          },
        },
      ]);
      return true;
    },
    [v_98b3fa, v_8d41d7],
  );

  const v_bb3644 = v_de06a3(async () => {

    if (v_3be953.current) {
      console.log('세션 생성 에러 발생 후 재시도 방지');
      return;
    }

    if (v_109b56) {
      console.log('세션 생성 건너뜀: 이미 초기화 중');
      return;
    }

    if (v_ce2e95.current) {
      console.log('세션 생성 건너뜀: 이미 시도됨');
      return;
    }

    if (v_a3ff5a.current) {
      console.log('세션 생성 건너뜀: 이미 세션 존재');
      return;
    }

    const v_32cb14 = await v_ec0597();
    if (!v_32cb14) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('health_analysis.errors.camera_permission_required'));
      return;
    }

    if (!v_c1ef35) {
      console.log('CameraPreviewView 마운트 대기 중...');
      return;
    }

    v_ce2e95.current = true;
    v_49296b(true);

    try {
      console.log('세션 생성 시작...');

      const v_651d83 = v_fa53c9();
      if (!v_651d83) {
        throw new Error(v_8d41d7('health_analysis.errors.license_key_not_set'));
      }

      console.log('라이센스 키 확인:', v_651d83 ? `${v_651d83.substring(0, 10)}...` : '없음');

      console.log('카메라 초기화 대기 중... (1.5초)');
      await new Promise(v_6f7712 => setTimeout(v_6f7712, 1500));

      v_a3ff5a.current = await v_d55d6e.faceSession(
        {
          licenseKey: v_651d83,
        },
        {

        }
      );
      console.log('세션 생성 완료, 세션 객체:', !!v_a3ff5a.current);

      if (!v_a3ff5a.current) {
        throw new Error(v_8d41d7('health_analysis.errors.session_not_created'));
      }

      v_49296b(false);
    } catch (v_9e86fd) {
      const v_748547 = v_9e86fd as v_89d8fd;
      console.error('세션 생성 오류 상세:', {
        error: v_9e86fd,
        code: v_748547?.code,
        domain: v_748547?.domain,
        message: v_748547?.message,
      });

      if (v_748547?.code === 7009) {
        console.log('7009 에러 발생 - 재시도 허용');
        v_ce2e95.current = false;
        v_a3ff5a.current = undefined;
        v_49296b(false);

        v_03e392.alert(
          v_8d41d7('health_analysis.errors.session_creation_failed'),
          v_8d41d7('health_analysis.errors.sdk_init_error'),
          [
            {
              text: v_8d41d7('common.cancel'),
              style: 'cancel',
              onPress: () => {
                v_3be953.current = true;
                v_639227('intro');
              },
            },
            {
              text: v_8d41d7('home.try_again'),
              onPress: async () => {

                console.log('세션 재생성 대기 중... (2초)');
                await new Promise(v_6f7712 => setTimeout(v_6f7712, 2000));
                v_bb3644();
              },
            },
          ]
        );
      } else if (v_141cf8(v_748547?.code)) {
        v_3be953.current = true;
        v_a3ff5a.current = undefined;
        v_49296b(false);
        return;
      } else {

        v_3be953.current = true;
        v_a3ff5a.current = undefined;
        v_49296b(false);

        const v_7a5fef = v_748547?.code || '알 수 없음';
        v_03e392.alert(
          v_8d41d7('health_analysis.errors.session_creation_failed'),
          v_8d41d7('health_analysis.errors.session_failed_code', { code: v_7a5fef }),
          [
            {
              text: v_8d41d7('common.confirm'),
              onPress: () => {
                v_639227('intro');
              },
            },
          ]
        );
      }
    }
  }, [v_ec0597, v_c1ef35, v_109b56, v_141cf8]);

  const v_ac8071 = v_de06a3(async () => {
    try {
      if (v_bc50c7 === v_eb2401.READY) {

        if (!v_a3ff5a.current) {
          v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('health_analysis.errors.session_not_ready'));
          return;
        }
        console.log('측정 시작 요청, 세션 상태:', v_bc50c7);

        v_1dd18f.current = false;

        await v_a3ff5a.current?.start(v_8ea06a);
      } else if (
        v_bc50c7 === v_eb2401.STARTING ||
        v_bc50c7 === v_eb2401.PROCESSING
      ) {

        await v_a3ff5a.current?.stop();
      }
    } catch (v_9e86fd) {
      const v_748547 = v_9e86fd as v_89d8fd;
      const v_7a5fef = v_748547?.code;
      console.error('측정 시작/중지 오류 상세:', {
        error: v_9e86fd,
        code: v_7a5fef,
        domain: v_748547?.domain,
        message: (v_748547 as any)?.message,
        sessionState: v_bc50c7,
        hasSession: !!v_a3ff5a.current,
      });

      if (v_7a5fef && v_141cf8(v_7a5fef)) {
        return;
      }

      if (v_7a5fef && v_7a5fef >= 3000 && v_7a5fef < 4000) {
        console.log('[얼굴 인식 에러] 무시 - 측정 계속 진행', { code: v_7a5fef });
        return;
      }

      let v_1744b9 = '';
      let v_b5cd35 = v_8d41d7('health_analysis.errors.measurement_error');

      switch (v_7a5fef) {
        case 2042:
          v_b5cd35 = v_8d41d7('health_analysis.errors.session_error');
          v_1744b9 = v_8d41d7('health_analysis.errors.error_2042');
          break;
        default:
          v_1744b9 = v_8d41d7('health_analysis.errors.error_default', { code: v_7a5fef || '알 수 없음' });
      }

      v_03e392.alert(v_b5cd35, v_1744b9, [
        {
          text: v_8d41d7('common.confirm'),
          onPress: () => {

            if (v_a3ff5a.current) {
              console.log('에러 발생으로 인한 세션 정리');
              v_98caa0();
            }
            v_ce2e95.current = false;
            v_49296b(false);
          },
        },
      ]);
    }
  }, [v_bc50c7, v_98caa0, v_8d41d7, v_141cf8]);

  const v_b1eca7 = v_e662ae(false);
  v_c4deb2(() => {
    if (!v_288ac3) {
      v_b1eca7.current = false;
      return;
    }

    const v_77ef6e = v_288ac3?.code;

    if (v_b1eca7.current) {
      return;
    }

    console.log('[경고 발생]', { code: v_77ef6e, warning: v_288ac3 });

    if (v_77ef6e === 3500 || (v_77ef6e && v_77ef6e >= 3000 && v_77ef6e < 4000)) {
      console.log('[얼굴 인식 경고] 무시 - 측정 계속 진행');
      v_b1eca7.current = true;

      return;
    }

    v_b1eca7.current = false;
  }, [v_288ac3, v_bc50c7, v_a3ff5a]);

  v_c4deb2(() => {
    if (v_5e9bfe) {
      const v_7a5fef = v_5e9bfe?.code;
      const v_5c2f9f = Date.now();
      if (v_7a5fef === 3003) {
        if (!v_4c31ba.current) {
          return;
        }
        if (v_b9ada4.current) {
          return;
        }
        if (!v_a3ff5a.current || v_91943c !== 'measurement') {
          return;
        }
        if (v_1dd18f.current) {
          return;
        }
        if (v_977633.current && v_5c2f9f < v_977633.current) {
          return;
        }
        if (v_b98ddb.current) {
          return;
        }
      }
      if (v_7a5fef && v_7a5fef !== 3003 && v_141cf8(v_7a5fef)) {
        return;
      }

      console.error('SDK 에러 발생:', {
        code: v_7a5fef,
        domain: (v_5e9bfe as any)?.domain,
        message: (v_5e9bfe as any)?.message,
        error: v_5e9bfe,
      });

      if (v_7a5fef === 3003) {
        if (!v_a3ff5a.current || v_91943c !== 'measurement') {
          console.log('[3003 에러] 세션 없음/intro 상태 - 무시');
          return;
        }
        if (v_1dd18f.current) {
          console.log('[3003 에러] 측정 완료 후 - 무시');
          return;
        }
        if (v_977633.current && v_5c2f9f < v_977633.current) {
          console.log('[3003 에러] 재생성 직후 - 무시', { until: v_977633.current });
          return;
        }
        if (v_b98ddb.current) {
          console.log('[3003 에러] 이미 팝업 표시됨 - 무시');
          return;
        }

        v_b98ddb.current = true;
        v_03e392.alert(v_8d41d7('health_analysis.errors.measurement_error'), v_8d41d7('health_analysis.errors.error_3003'), [
          {
            text: v_8d41d7('common.confirm'),
            onPress: async () => {
              console.log('[3003 에러 처리] 확인 클릭 - 세션 초기화');
              await v_98b3fa();
            },
          },
        ]);
        return;
      }

      if (v_7a5fef && v_7a5fef >= 3000 && v_7a5fef < 4000) {
        console.log('[얼굴 인식 에러] 무시 - 측정 계속 진행', { code: v_7a5fef, measurementCompleted: v_1dd18f.current });
        return;
      }

      let v_1744b9 = '';
      let v_b5cd35 = v_8d41d7('health_analysis.errors.measurement_error');

      switch (v_7a5fef) {
        case 2042:
          v_b5cd35 = v_8d41d7('health_analysis.errors.session_error');
          v_1744b9 = v_8d41d7('health_analysis.errors.error_2042_detail');
          break;
        case 7009:
          v_b5cd35 = v_8d41d7('health_analysis.errors.session_creation_failed');
          v_1744b9 = v_8d41d7('health_analysis.errors.error_7009');
          break;
        default:
          v_1744b9 = v_8d41d7('health_analysis.errors.error_unknown', { code: v_7a5fef || '알 수 없음' });
      }

      v_03e392.alert(v_b5cd35, v_1744b9, [
        {
          text: v_8d41d7('common.confirm'),
          onPress: () => {

            if (v_a3ff5a.current) {
              v_98caa0();
            }
            v_ce2e95.current = false;
            v_49296b(false);
          },
        },
      ]);
    }
  }, [v_5e9bfe, v_98caa0, v_bc50c7, v_8d41d7, v_91943c, v_a3ff5a, v_bb3644, v_98b3fa, v_141cf8]);

  v_c4deb2(() => {
    if (v_f91e0a) {
      console.log('라이센스 정보:', {
        activationId: v_f91e0a.activationInfo?.activationId,
        offlineMeasurements: v_f91e0a.offlineMeasurements
          ? `${v_f91e0a.offlineMeasurements.totalMeasurements}/${v_f91e0a.offlineMeasurements.remainingMeasurements}`
          : 'N/A',
      });
    }
  }, [v_f91e0a]);

  v_c4deb2(() => {
    if (v_9a1841) {

      const v_41d2ba = [
        v_e3e816.PULSE_RATE,
        v_e3e816.RESPIRATION_RATE,
        v_e3e816.OXYGEN_SATURATION,
        v_e3e816.SDNN,
        v_e3e816.STRESS_LEVEL,
        v_e3e816.RRI,
        v_e3e816.BLOOD_PRESSURE,
        v_e3e816.STRESS_INDEX,
        v_e3e816.MEAN_RRI,
        v_e3e816.RMSSD,
        v_e3e816.SD1,
        v_e3e816.SD2,
        v_e3e816.PRQ,
        v_e3e816.PNS_INDEX,
        v_e3e816.PNS_ZONE,
        v_e3e816.SNS_INDEX,
        v_e3e816.SNS_ZONE,
        v_e3e816.WELLNESS_INDEX,
        v_e3e816.WELLNESS_LEVEL,
        v_e3e816.LFHF,
        v_e3e816.HEMOGLOBIN,
        v_e3e816.HEMOGLOBIN_A1C,
        v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
        v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
        v_e3e816.ASCVD_RISK,
        v_e3e816.NORMALIZED_STRESS_INDEX,
        v_e3e816.HEART_AGE,
        v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
        v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
        v_e3e816.LOW_HEMOGLOBIN_RISK,
        v_e3e816.ASCVD_RISK_LEVEL,
        v_e3e816.MEAN_ARTERIAL_PRESSURE,
        v_e3e816.CARDIAC_WORKLOAD,
        v_e3e816.PULSE_PRESSURE,
        v_e3e816.BODY_TENSION_SCORE,
      ];

      const v_c5a97a = [];
      const v_7a5c3a = [];
      const v_a89a2e = [];
      const v_8fb8a5 = [];
      const v_837eed = [];
      const v_f763ed = [];

      v_41d2ba.forEach((v_3b27d9) => {
        if (v_9a1841.licenseEnabled.isEnabled(v_3b27d9)) {
          v_c5a97a.push(v_3b27d9);
        } else {
          v_8fb8a5.push(v_3b27d9);
        }
        if (v_9a1841.deviceEnabled.isEnabled(v_3b27d9)) {
          v_7a5c3a.push(v_3b27d9);
        } else {
          v_837eed.push(v_3b27d9);
        }
        if (v_9a1841.measurementModeEnabled.isEnabled(v_3b27d9)) {
          v_a89a2e.push(v_3b27d9);
        } else {
          v_f763ed.push(v_3b27d9);
        }
      });

      console.log('=== 활성화된 VitalSigns 정보 ===');
      console.log(`라이센스에서 활성화된 항목: ${v_c5a97a.length}개`);
      v_c5a97a.forEach(v_3b27d9 => console.log(`  ✅ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`라이센스에서 비활성화된 항목: ${v_8fb8a5.length}개`);
      v_8fb8a5.forEach(v_3b27d9 => console.log(`  ❌ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`디바이스에서 활성화된 항목: ${v_7a5c3a.length}개`);
      v_7a5c3a.forEach(v_3b27d9 => console.log(`  ✅ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`디바이스에서 비활성화된 항목: ${v_837eed.length}개`);
      v_837eed.forEach(v_3b27d9 => console.log(`  ❌ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`측정 모드에서 활성화된 항목: ${v_a89a2e.length}개`);
      v_a89a2e.forEach(v_3b27d9 => console.log(`  ✅ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`측정 모드에서 비활성화된 항목: ${v_f763ed.length}개`);
      v_f763ed.forEach(v_3b27d9 => console.log(`  ❌ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log('================================');
    }
  }, [v_9a1841]);

  v_c4deb2(() => {
    if (v_f6dcea && v_f6dcea.type === v_e3e816.PULSE_RATE) {
      v_f36dd5(v_f6dcea.value);
    }
  }, [v_f6dcea]);

  v_c4deb2(() => {
    if (v_bc50c7 === v_eb2401.STARTING) {
      v_f36dd5(undefined);
    }
  }, [v_bc50c7]);

  v_c4deb2(() => {
    if (v_bc50c7 !== v_eb2401.PROCESSING) {
      v_8a8952(undefined);

      if (v_bc50c7 === v_eb2401.READY) {
        if (v_b1faa7.current) {
          console.log('[READY 상태 복귀] faceDetectionFailed 플래그 리셋');
          v_b1faa7.current = false;
        }
        if (v_b1eca7.current) {
          console.log('[READY 상태 복귀] warningProcessed 플래그 리셋');
          v_b1eca7.current = false;
        }
      }
      return;
    }

    if (!v_14a7eb || v_14a7eb.imageValidity === v_2be213.VALID) {
      v_8a8952(undefined);
      return;
    }

    let v_bbcfff = '';
    switch (v_14a7eb.imageValidity) {
      case v_2be213.INVALID_DEVICE_ORIENTATION:
        v_bbcfff = v_8d41d7('health_analysis.image_validity.device_orientation');
        break;
      case v_2be213.INVALID_ROI:
        v_bbcfff = v_8d41d7('health_analysis.image_validity.face_not_detected');
        break;
      case v_2be213.TILTED_HEAD:
        v_bbcfff = v_8d41d7('health_analysis.image_validity.tilted_head');
        break;
      case v_2be213.FACE_TOO_FAR:
        v_bbcfff = v_8d41d7('health_analysis.image_validity.face_too_far');
        break;
      case v_2be213.UNEVEN_LIGHT:
        v_bbcfff = v_8d41d7('health_analysis.image_validity.uneven_light');
        break;
    }
    v_8a8952(v_bbcfff);

  }, [v_14a7eb, v_bc50c7, v_8d41d7]);

  v_c4deb2(() => {
    let v_cb36b1;

    if (v_bc50c7 === v_eb2401.PROCESSING) {
      v_7fa926(v_8ea06a);
      v_cb36b1 = setInterval(() => {
        v_7fa926(v_ba2215 => {
          if (v_ba2215 <= 1) {
            clearInterval(v_cb36b1);
            return 0;
          }
          return v_ba2215 - 1;
        });
      }, 1000);
    } else {
      v_7fa926(0);
    }

    return () => {
      if (v_cb36b1) {
        clearInterval(v_cb36b1);
      }
    };
  }, [v_bc50c7]);

  v_c4deb2(() => {
    if (!v_d0a515) {
      return;
    }

    v_1dd18f.current = true;
    v_b9ada4.current = true;
    console.log('[측정 완료] finalResults 생성 - 3003 에러 무시 플래그 설정');

    if (v_b1faa7.current) {
      console.log('[결과 화면 이동 방지] 얼굴 감지 실패로 인한 측정 중지 - finalResults 무시');

      v_b1faa7.current = false;
      v_1dd18f.current = false; 
      return;
    }

    if (v_d0a515) {

      const v_9f8792 = {};

      const v_41d2ba = [
        v_e3e816.PULSE_RATE,
        v_e3e816.RESPIRATION_RATE,
        v_e3e816.OXYGEN_SATURATION,
        v_e3e816.SDNN,
        v_e3e816.STRESS_LEVEL,
        v_e3e816.RRI,
        v_e3e816.BLOOD_PRESSURE,
        v_e3e816.STRESS_INDEX,
        v_e3e816.MEAN_RRI,
        v_e3e816.RMSSD,
        v_e3e816.SD1,
        v_e3e816.SD2,
        v_e3e816.PRQ,
        v_e3e816.PNS_INDEX,
        v_e3e816.PNS_ZONE,
        v_e3e816.SNS_INDEX,
        v_e3e816.SNS_ZONE,
        v_e3e816.WELLNESS_INDEX,
        v_e3e816.WELLNESS_LEVEL,
        v_e3e816.LFHF,
        v_e3e816.HEMOGLOBIN,
        v_e3e816.HEMOGLOBIN_A1C,
        v_e3e816.HIGH_HEMOGLOBIN_A1C_RISK,
        v_e3e816.HIGH_BLOOD_PRESSURE_RISK,
        v_e3e816.ASCVD_RISK,
        v_e3e816.NORMALIZED_STRESS_INDEX,
        v_e3e816.HEART_AGE,
        v_e3e816.HIGH_TOTAL_CHOLESTEROL_RISK,
        v_e3e816.HIGH_FASTING_GLUCOSE_RISK,
        v_e3e816.LOW_HEMOGLOBIN_RISK,
        v_e3e816.ASCVD_RISK_LEVEL,
        v_e3e816.MEAN_ARTERIAL_PRESSURE,
        v_e3e816.CARDIAC_WORKLOAD,
        v_e3e816.PULSE_PRESSURE,
        v_e3e816.BODY_TENSION_SCORE,
      ];

      const v_ad9b8f = [];
      const v_6ab976 = [];

      v_41d2ba.forEach((v_3b27d9) => {
        const v_43c42e = v_d0a515.getResult(v_3b27d9);
        if (v_43c42e) {

          const v_cabbe9 = (v_43c42e as any).confidence;
          v_9f8792[v_3b27d9] = {
            value: v_43c42e.value,
            confidence: v_cabbe9 ? (typeof v_cabbe9 === 'object' ? v_cabbe9 : { level: v_cabbe9 }) : undefined,
          };
          v_ad9b8f.push(v_3b27d9);
        } else {
          v_6ab976.push(v_3b27d9);
        }
      });

      console.log('=== 측정 완료 - 결과 요약 ===');
      console.log(`측정된 항목: ${v_ad9b8f.length}개`);
      v_ad9b8f.forEach(v_3b27d9 => console.log(`  ✅ ${v_a79016(v_3b27d9)} (${v_3b27d9})`));
      console.log(`측정되지 않은 항목: ${v_6ab976.length}개`);
      v_6ab976.forEach(v_3b27d9 => {
        console.log(`  ❌ ${v_a79016(v_3b27d9)} (${v_3b27d9})`);

        if (v_9a1841) {
          const v_c5a97a = v_9a1841.licenseEnabled.isEnabled(v_3b27d9);
          const v_7a5c3a = v_9a1841.deviceEnabled.isEnabled(v_3b27d9);
          const v_a89a2e = v_9a1841.measurementModeEnabled.isEnabled(v_3b27d9);
          console.log(`      - 라이센스: ${v_c5a97a ? '✅' : '❌'}, 디바이스: ${v_7a5c3a ? '✅' : '❌'}, 측정모드: ${v_a89a2e ? '✅' : '❌'}`);
        }
      });
      console.log('전체 결과:', v_9f8792);
      console.log('============================');

      (async () => {
        try {
          if (v_a3ff5a.current) {
            try {
              await v_a3ff5a.current.stop();
              console.log('[결과 화면 이동] 세션 중지 완료');
            } catch (v_9e86fd) {
              console.warn('[결과 화면 이동] 세션 중지 실패:', v_9e86fd);
            }
            await v_98caa0();
            console.log('[결과 화면 이동] 세션 종료 완료');
          }
        } catch (v_9e86fd) {
          console.error('[결과 화면 이동] 세션 정리 중 오류:', v_9e86fd);
        }

        v_b98ddb.current = false;
        v_977633.current = 0;
        v_1dd18f.current = true; 
        console.log('[결과 화면 이동] 3003 에러 관련 플래그 리셋 및 세션 종료 완료');
      })();

      v_c65f5d.navigate('HealthAnalysisResult', {
        results: v_9f8792,
        timestamp: new Date().toISOString(),
      });
    }
  }, [v_d0a515, v_c65f5d]);

  v_c4deb2(() => {
    const v_7b6d17 = {
      [v_eb2401.INITIALIZING]: 'INITIALIZING',
      [v_eb2401.READY]: 'READY',
      [v_eb2401.STARTING]: 'STARTING',
      [v_eb2401.PROCESSING]: 'PROCESSING',
      [v_eb2401.STOPPING]: 'STOPPING',
      [v_eb2401.TERMINATING]: 'TERMINATING',
      [v_eb2401.TERMINATED]: 'TERMINATED',
    };
    const v_07b251 = v_7b6d17[v_bc50c7 as v_eb2401] || `UNKNOWN(${v_bc50c7})`;
    console.log('세션 상태:', v_07b251, `(${v_bc50c7})`, '세션 존재:', !!v_a3ff5a.current);

    if (v_a3ff5a.current && v_bc50c7 === v_eb2401.READY) {
      console.log('✅ 세션이 READY 상태입니다. 카메라가 활성화되었습니다.');

      if (v_c1affb.current > 0) {
        console.log('[3003 에러 처리] 세션 재생성 성공 - 재시도 횟수 리셋');
        v_c1affb.current = 0;
      }

      if (v_919f8c.current === v_eb2401.TERMINATED ||
        v_919f8c.current === v_eb2401.INITIALIZING ||
        v_919f8c.current === null) {
        v_977633.current = Date.now() + 5000; 
        console.log('[3003 에러 처리] 세션 재생성 완료 - 5초 동안 3003 에러 무시');
      }
    } else if (v_a3ff5a.current && v_bc50c7 === v_eb2401.PROCESSING) {

      if (v_b98ddb.current) {
        console.log('[3003 에러 처리] 측정 시작 성공 - 팝업 플래그 리셋');
        v_b98ddb.current = false;
      }
      if (v_c1affb.current > 0) {
        console.log('[3003 에러 처리] 측정 시작 성공 - 재시도 횟수 리셋');
        v_c1affb.current = 0;
      }
    } else if (v_a3ff5a.current && v_bc50c7 === v_eb2401.TERMINATING) {
      console.warn('⚠️ 세션이 TERMINATING 상태입니다. 세션이 종료되고 있습니다.');
    } else if (v_a3ff5a.current && v_bc50c7 === v_eb2401.TERMINATED) {
      console.warn('⚠️ 세션이 TERMINATED 상태입니다. 세션이 종료되었습니다.');
      v_a3ff5a.current = undefined;
      v_ce2e95.current = false;
      v_318478.current = false;
    } else if (v_a3ff5a.current && v_bc50c7 !== v_eb2401.READY) {
      console.log('⏳ 세션이 READY 상태로 전환 대기 중... (현재 상태:', v_07b251, ')');
    }

    v_919f8c.current = v_bc50c7 ?? null;
  }, [v_bc50c7, v_a3ff5a, v_91943c, v_8d41d7]);

  const v_0bafd1 = v_de06a3(() => {
    console.log('카메라 컨테이너 마운트됨');
    v_b0aeaf(true);
  }, []);

  v_cf763b(
    v_de06a3(() => {
      console.log('화면 포커스됨');
      v_4c31ba.current = true;

      return () => {
        console.log('화면 언포커스됨, 세션 종료');
        v_4c31ba.current = false;

        if (v_a3ff5a.current) {
          v_98caa0();
          v_a3ff5a.current = undefined;
        }

        v_ce2e95.current = false;
        v_3be953.current = false;
        v_b1faa7.current = false;
        v_b0aeaf(false);
        v_49296b(false);
      };
    }, [v_98caa0])
  );

  v_c4deb2(() => {

    if (v_91943c !== 'measurement') {
      return;
    }

    if (v_3be953.current) {
      console.log('세션 생성 에러 발생 후 재시도 방지');
      return;
    }

    if (!v_c1ef35) {
      return;
    }

    if (!v_d1a6bb?.granted) {
      return;
    }

    if (v_a3ff5a.current || v_109b56 || v_ce2e95.current) {
      return;
    }

    console.log('카메라 마운트 완료, 세션 생성 예약');

    const v_cb36b1 = setTimeout(() => {

      if (
        v_91943c === 'measurement' &&
        v_c1ef35 &&
        v_d1a6bb?.granted &&
        !v_a3ff5a.current &&
        !v_109b56 &&
        !v_ce2e95.current &&
        !v_3be953.current
      ) {
        v_bb3644();
      }
    }, 800);
    return () => clearTimeout(v_cb36b1);
  }, [v_91943c, v_c1ef35, v_d1a6bb?.granted, v_109b56, v_bb3644]);

  const v_7a93a3 = (): string => {
    switch (v_bc50c7) {
      case v_eb2401.READY:
        return v_8d41d7('health_analysis.measurement.state_ready');
      case v_eb2401.STARTING:
        return v_8d41d7('health_analysis.measurement.state_starting');
      case v_eb2401.PROCESSING:
        return v_8d41d7('health_analysis.measurement.state_processing', { seconds: v_e6c45c });
      default:
        return v_8d41d7('health_analysis.measurement.state_default');
    }
  };

  const v_1f2c01 = v_de06a3((v_d48baf) => {
    const { width: v_8e4fb6, height: v_c86e33, x: v_62c214, y: v_64877a } = v_d48baf.nativeEvent.layout;
    v_847de1({ x: v_62c214, y: v_64877a, width: v_8e4fb6, height: v_c86e33 });
  }, []);

  const v_56ef46 = v_de06a3(async () => {
    console.log('측정 화면에서 intro로 돌아가기');
    await v_98b3fa();
  }, [v_98b3fa]);

  if (!v_d1a6bb?.granted && !v_109b56) {
    return (
      <>
        <StatusBar style="dark" />
        <SafeView style={v_d81136.screen}>
          <Header
            title={v_8d41d7('health_analysis.intro.screen_title')}
            showBackButton
            onBackPress={() => v_c65f5d.goBack()}
          />
          <SafeScrollView
            contentContainerStyle={v_d81136.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={v_d81136.container}>
              <Text style={v_d81136.title}>{v_8d41d7('health_analysis.intro.screen_title')}</Text>
              <Text style={v_d81136.subtitle}>
                {v_8d41d7('health_analysis.errors.camera_permission_required')}
              </Text>
              <View style={v_d81136.buttonContainer}>
                <PrimaryButton
                  title={v_8d41d7('health_analysis.intro.camera_permission_button')}
                  onPress={v_1e66f0}
                />
              </View>
            </View>
          </SafeScrollView>
        </SafeView>
      </>
    );
  }

  const v_2704c1 = () => (
    <>
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen}>
        <Header
          title={v_8d41d7('health_analysis.intro.screen_title')}
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />
        <SafeScrollView
          contentContainerStyle={v_d81136.introContent}
          showsVerticalScrollIndicator={false}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          <View style={v_d81136.introContainer}>

            <Text style={v_d81136.introTitle}>{v_8d41d7('health_analysis.intro.intro_title')}</Text>

            <Text style={v_d81136.introDescription}>
              {v_8d41d7('health_analysis.intro.intro_description')}
            </Text>

            <View style={v_d81136.introGuidelines}>
              <Text style={v_d81136.guidelinesTitle}>{v_8d41d7('health_analysis.intro.guidelines_title')}</Text>

              <View style={v_d81136.guidelineItem}>
                <Ionicons name="checkmark-circle" size={20} color={v_1bfbd0.bluePrimary} />
                <Text style={v_d81136.guidelineText}>{v_8d41d7('health_analysis.intro.guideline_1')}</Text>
              </View>

              <View style={v_d81136.guidelineItem}>
                <Ionicons name="checkmark-circle" size={20} color={v_1bfbd0.bluePrimary} />
                <Text style={v_d81136.guidelineText}>{v_8d41d7('health_analysis.intro.guideline_2')}</Text>
              </View>

              <View style={v_d81136.guidelineItem}>
                <Ionicons name="checkmark-circle" size={20} color={v_1bfbd0.bluePrimary} />
                <Text style={v_d81136.guidelineText}>{v_8d41d7('health_analysis.intro.guideline_3')}</Text>
              </View>

              <View style={v_d81136.guidelineItem}>
                <Ionicons name="checkmark-circle" size={20} color={v_1bfbd0.bluePrimary} />
                <Text style={v_d81136.guidelineText}>{v_8d41d7('health_analysis.intro.guideline_4')}</Text>
              </View>
            </View>

            <View style={v_d81136.introButtonContainer}>
              <PrimaryButton
                title={v_8d41d7('health_analysis.intro.start_button')}
                onPress={async () => {

                  const v_b6d66b = await v_ec0597();
                  if (v_b6d66b) {
                    console.log('측정하기 버튼 클릭 - 상태 초기화');

                    if (v_a3ff5a.current) {
                      console.log('기존 세션 종료 중...');
                      await v_98caa0();
                      v_a3ff5a.current = undefined;

                      console.log('SDK 정리 대기 중... (2초)');
                      await new Promise(v_6f7712 => setTimeout(v_6f7712, 2000));
                    }

                    v_ce2e95.current = false;
                    v_3be953.current = false; 
                    v_49296b(false);
                    v_b1faa7.current = false;
                    v_8a8952(undefined);
                    v_f36dd5(undefined);
                    v_7fa926(0);
                    v_b0aeaf(false);

                    v_639227('measurement');
                  } else {
                    v_03e392.alert(
                      v_8d41d7('health_analysis.intro.camera_permission_title'),
                      v_8d41d7('health_analysis.intro.camera_permission_message'),
                      [{ text: v_8d41d7('common.confirm') }]
                    );
                  }
                }}
                fullWidth
              />

              {

}
            </View>
          </View>
        </SafeScrollView>
      </SafeView>
    </>
  );

  const v_629820 = () => (
    <>
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen}>
        <Header
          title={v_8d41d7('health_analysis.measurement.screen_title')}
          showBackButton
          onBackPress={() => {

            v_56ef46();
          }}
        />
        {}
        <View style={v_d81136.cameraContainer} onLayout={v_0bafd1}>
          <View style={v_d81136.cameraPreviewWrapper} onLayout={v_1f2c01}>
            <CameraPreviewView style={v_d81136.cameraPreview} />
            {}
            {v_14a7eb?.roi && v_bc50c7 === v_eb2401.PROCESSING && (
              <FaceDetectionBox previewSize={v_cc7953} roi={v_14a7eb.roi} imageWidth={v_14a7eb.imageWidth} imageHeight={v_14a7eb.imageHeight} />
            )}
          </View>
          <View style={v_d81136.cameraOverlay}>
            {}
            <View style={v_d81136.cameraHeader}>
              <TouchableOpacity
                style={v_d81136.closeButton}
                onPress={() => {

                  v_56ef46();
                }}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('health_analysis.measurement.back_button')}
              >
                <Ionicons name="close" size={28} color={v_1bfbd0.background} />
              </TouchableOpacity>
            </View>

            {}
            <View style={v_d81136.infoContainerOverlay}>
              {v_12abe8 && (
                <View style={v_d81136.imageValidityContainer}>
                  <Text style={v_d81136.imageValidityTitle}>{v_8d41d7('health_analysis.measurement.face_detection_title')}</Text>
                  <Text style={v_d81136.imageValidityText}>{v_12abe8}</Text>
                </View>
              )}
              {v_b3c379 && !v_12abe8 && (
                <View style={v_d81136.pulseRateContainer}>
                  <Text style={v_d81136.pulseRateText}>{v_8d41d7('health_analysis.measurement.pulse_rate', { value: v_b3c379 })}</Text>
                </View>
              )}
            </View>

            {}
            <View style={v_d81136.bottomContainer}>
              {}
              <View style={v_d81136.statusContainer}>
                {v_109b56 ? (
                  <ActivityIndicator size="large" color={v_1bfbd0.text} />
                ) : null}
                <Text style={v_d81136.statusText}>{v_7a93a3()}</Text>
              </View>

              {

}
              {}
              <View style={v_d81136.buttonContainer}>
                <PrimaryButton
                  title={
                    v_bc50c7 === v_eb2401.READY
                      ? v_8d41d7('health_analysis.measurement.button_start')
                      : v_bc50c7 === v_eb2401.STARTING ||
                        v_bc50c7 === v_eb2401.PROCESSING
                        ? v_8d41d7('health_analysis.measurement.button_stop')
                        : v_8d41d7('health_analysis.measurement.button_waiting')
                  }
                  onPress={v_ac8071}
                  disabled={
                    v_109b56 ||
                    (v_bc50c7 !== v_eb2401.READY &&
                      v_bc50c7 !== v_eb2401.STARTING &&
                      v_bc50c7 !== v_eb2401.PROCESSING)
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </SafeView>
    </>
  );

  if (v_91943c === 'intro') {
    return v_2704c1();
  }

  return v_629820();
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

  introContent: {
    ...v_a61db3.content,
    minHeight: '100%',
  },
  introContainer: {
    ...v_a61db3.container,
    paddingTop: v_9b1a04.xlarge,
  },
  introIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: v_1bfbd0.bluePrimary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: v_9b1a04.xlarge,
  },
  introTitle: {
    fontSize: 28,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    textAlign: 'center',
    marginBottom: v_9b1a04.medium,
  },
  introDescription: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: v_9b1a04.xlarge,
  },
  introGuidelines: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.xlarge,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
  },
  guidelinesTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  guidelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.medium,
  },
  guidelineText: {
    flex: 1,
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginLeft: v_9b1a04.small,
    lineHeight: 20,
  },
  introButtonContainer: {
    marginTop: v_9b1a04.large,
  },
  devTestLink: {
    marginTop: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small,
    alignItems: 'center',
  },
  devTestLinkText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.large,
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000',
  },
  cameraPreviewWrapper: {

    aspectRatio: 0.75,
    width: '100%',
    position: 'relative',
  },
  cameraPreview: {
    flex: 1,
    width: '100%',
  },
  cameraOverlay: {
    ...v_472849.absoluteFillObject,
    justifyContent: 'space-between',
  },
  cameraHeader: {
    paddingTop: v_326be8.OS === 'ios' ? 50 : 20,
    paddingHorizontal: v_9b1a04.large,
    alignItems: 'flex-end',
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    paddingTop: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge,
    paddingHorizontal: v_9b1a04.large,
    alignItems: 'center',
    backgroundColor: v_1bfbd0.background,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, 
    zIndex: 10, 
  },

  infoContainerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200, 
    zIndex: 15, 
    pointerEvents: 'box-none', 
  },
  infoContainer: {
    marginBottom: v_9b1a04.medium,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageValidityContainer: {
    backgroundColor: 'rgba(61, 55, 52, 0.9)',
    padding: v_9b1a04.small,
    borderRadius: 8,
    minWidth: 160,
    alignItems: 'center',
  },
  imageValidityTitle: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.background,
    marginBottom: v_9b1a04.small / 2,
  },
  imageValidityText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.background,
    textAlign: 'center',
  },
  pulseRateContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    minWidth: 120, 
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, 
  },
  pulseRateText: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.background,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.large,
    minHeight: 60,
  },
  statusText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    textAlign: 'center',
    backgroundColor: v_1bfbd0.background,
    paddingHorizontal: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.medium,
    borderRadius: 12,

  },
  guidanceContainer: {
    marginBottom: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.large,
  },
  guidanceText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    zIndex: 10, 
  },
  warningMessage: {
    marginTop: v_9b1a04.medium,
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.background,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 193, 7, 0.8)',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    borderRadius: 8,
  },
});

const FaceDetectionBox: v_a3453e.FC<{
  previewSize: { width: number; height: number; x: number; y: number };
  roi: { left: number; top: number; width: number; height: number };
  imageWidth: number;
  imageHeight: number;
}> = ({ previewSize: v_cc7953, roi: v_2efdd6, imageWidth: v_4d3105, imageHeight: v_92f621 }) => {
  const v_0863ae = v_67e68d.get();

  const v_6b63d1 = v_cc7953.width / (v_4d3105 / v_0863ae);
  const v_a0c822 = v_cc7953.height / (v_92f621 / v_0863ae);
  const v_dbaa7f = (v_2efdd6.left * v_6b63d1) / v_0863ae;
  const v_fbc0a4 = (v_2efdd6.top * v_a0c822) / v_0863ae;
  const v_8e4fb6 = (v_2efdd6.width * v_6b63d1) / v_0863ae;
  const v_c86e33 = (v_2efdd6.height * v_a0c822) / v_0863ae;

  return (
    <View
      style={{
        position: 'absolute',
        left: v_dbaa7f,
        top: v_fbc0a4,
        width: v_8e4fb6,
        height: v_c86e33,
        borderColor: '#0653F4',
        borderWidth: 4,
        borderRadius: 8,
      }}
    />
  );
};

export default v_daf220;

