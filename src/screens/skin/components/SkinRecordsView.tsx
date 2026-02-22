import v_a3453e, { v_5ab095, v_df9f57, v_c4deb2 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_122070,
  v_aa7413,
  v_09d0e5,
  v_700696,
  v_39a996,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_dd725b } from '../../../components';
import v_f595b9, { v_bf60de } from 'vpztcxjmsfanunln';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04, v_53f592 } from '../../../constants';
import { v_81fcbc, v_095212, type v_b57732 } from '../../../services';
import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_998b9d } from '../../../utils/authErrorHandler';

const { width: v_0d9f50 } = v_700696.get('window');
const v_14a295 = 4;
const v_2c6c54 = 12;
const v_c03413 = v_9b1a04.large * 2;
const v_7f37df = (v_0d9f50 - v_c03413 - v_2c6c54 * (v_14a295 - 1)) / v_14a295;

export interface SkinConditionItem {
  key: string;
  label: string;
  score: number;
}

export interface SkinRecord {
  id: string;
  date: string;
  time: string;
  overallScore: number;
  skinAge: number;
  gradeKey: string;
  items: SkinConditionItem[];
  cautionKeys: string[];
}

const v_ec5297 = [
  'age_spot', 'dark_circle_v2', 'droopy_upper_eyelid', 'droopy_lower_eyelid',
  'wrinkle', 'texture', 'acne', 'redness', 'oiliness', 'moisture', 'pore',
  'eye_bag', 'radiance', 'firmness',
];

const v_62eb5a = (v_b24339): string => {
  if (v_b24339.startsWith('hd_')) {
    const v_7ddf7c = v_b24339.substring(3);
    return v_7ddf7c === 'dark_circle' ? 'dark_circle_v2' : v_7ddf7c;
  }
  return v_b24339;
};

const v_7b207e = (v_740dd8): string => {
  if (v_740dd8 >= 95) return 'excellent';
  if (v_740dd8 >= 90) return 'great';
  if (v_740dd8 >= 85) return 'good';
  if (v_740dd8 >= 80) return 'normal';
  if (v_740dd8 >= 70) return 'caution';
  if (v_740dd8 >= 60) return 'needs_care';
  return 'intensive_care';
};

const v_820b44 = [
  {
    id: '1',
    date: '2026-01-28',
    time: '21:15',
    overallScore: 85,
    skinAge: 16,
    gradeKey: 'normal',
    items: [
      { key: 'age_spot', label: '기미/잡티', score: 76 },
      { key: 'dark_circle_v2', label: '다크써클', score: 75 },
      { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀', score: 79 },
      { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀', score: 73 },
      { key: 'wrinkle', label: '주름', score: 89 },
      { key: 'texture', label: '피부결', score: 94 },
      { key: 'acne', label: '여드름', score: 94 },
      { key: 'redness', label: '홍조', score: 97 },
      { key: 'oiliness', label: '유분', score: 91 },
      { key: 'moisture', label: '수분', score: 85 },
      { key: 'pore', label: '모공', score: 85 },
      { key: 'eye_bag', label: '눈밑지방', score: 84 },
      { key: 'radiance', label: '광채', score: 87 },
      { key: 'firmness', label: '탄력', score: 88 },
    ],
    cautionKeys: ['dark_circle_v2'],
  },
  {
    id: '2',
    date: '2026-01-25',
    time: '14:30',
    overallScore: 78,
    skinAge: 18,
    gradeKey: 'caution',
    items: [
      { key: 'age_spot', label: '기미/잡티', score: 72 },
      { key: 'dark_circle_v2', label: '다크써클', score: 68 },
      { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀', score: 82 },
      { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀', score: 75 },
      { key: 'wrinkle', label: '주름', score: 85 },
      { key: 'texture', label: '피부결', score: 90 },
      { key: 'acne', label: '여드름', score: 88 },
      { key: 'redness', label: '홍조', score: 92 },
      { key: 'oiliness', label: '유분', score: 86 },
      { key: 'moisture', label: '수분', score: 80 },
      { key: 'pore', label: '모공', score: 82 },
      { key: 'eye_bag', label: '눈밑지방', score: 79 },
      { key: 'radiance', label: '광채', score: 84 },
      { key: 'firmness', label: '탄력', score: 85 },
    ],
    cautionKeys: ['dark_circle_v2', 'moisture'],
  },
  {
    id: '3',
    date: '2026-01-20',
    time: '10:00',
    overallScore: 92,
    skinAge: 14,
    gradeKey: 'great',
    items: v_ec5297.map((v_b24339, v_ebec57) => ({
      key: v_b24339,
      label: ['기미/잡티', '다크써클', '처진 윗눈꺼풀', '처진 아랫눈꺼풀', '주름', '피부결', '여드름', '홍조', '유분', '수분', '모공', '눈밑지방', '광채', '탄력'][v_ebec57] || v_b24339,
      score: 85 + Math.floor(Math.random() * 15),
    })),
    cautionKeys: [],
  },
  {
    id: '4',
    date: '2026-01-15',
    time: '16:45',
    overallScore: 88,
    skinAge: 15,
    gradeKey: 'good',
    items: v_ec5297.map((v_b24339, v_ebec57) => ({
      key: v_b24339,
      label: ['기미/잡티', '다크써클', '처진 윗눈꺼풀', '처진 아랫눈꺼풀', '주름', '피부결', '여드름', '홍조', '유분', '수분', '모공', '눈밑지방', '광채', '탄력'][v_ebec57] || v_b24339,
      score: 82 + Math.floor(Math.random() * 18),
    })),
    cautionKeys: ['age_spot'],
  },
];

const v_16f99f = [
  {
    id: '1b',
    date: '2026-01-28',
    time: '10:30',
    overallScore: 82,
    skinAge: 17,
    gradeKey: 'normal',
    items: [
      { key: 'age_spot', label: '기미/잡티', score: 78 },
      { key: 'dark_circle_v2', label: '다크써클', score: 72 },
      { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀', score: 81 },
      { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀', score: 76 },
      { key: 'wrinkle', label: '주름', score: 86 },
      { key: 'texture', label: '피부결', score: 91 },
      { key: 'acne', label: '여드름', score: 92 },
      { key: 'redness', label: '홍조', score: 95 },
      { key: 'oiliness', label: '유분', score: 88 },
      { key: 'moisture', label: '수분', score: 82 },
      { key: 'pore', label: '모공', score: 83 },
      { key: 'eye_bag', label: '눈밑지방', score: 82 },
      { key: 'radiance', label: '광채', score: 85 },
      { key: 'firmness', label: '탄력', score: 86 },
    ],
    cautionKeys: ['dark_circle_v2'],
  },
  {
    id: '1c',
    date: '2026-01-28',
    time: '15:45',
    overallScore: 88,
    skinAge: 15,
    gradeKey: 'good',
    items: [
      { key: 'age_spot', label: '기미/잡티', score: 82 },
      { key: 'dark_circle_v2', label: '다크써클', score: 80 },
      { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀', score: 85 },
      { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀', score: 81 },
      { key: 'wrinkle', label: '주름', score: 90 },
      { key: 'texture', label: '피부결', score: 93 },
      { key: 'acne', label: '여드름', score: 95 },
      { key: 'redness', label: '홍조', score: 96 },
      { key: 'oiliness', label: '유분', score: 90 },
      { key: 'moisture', label: '수분', score: 87 },
      { key: 'pore', label: '모공', score: 88 },
      { key: 'eye_bag', label: '눈밑지방', score: 86 },
      { key: 'radiance', label: '광채', score: 89 },
      { key: 'firmness', label: '탄력', score: 90 },
    ],
    cautionKeys: [],
  },
  {
    id: '2b',
    date: '2026-01-25',
    time: '20:00',
    overallScore: 75,
    skinAge: 19,
    gradeKey: 'caution',
    items: [
      { key: 'age_spot', label: '기미/잡티', score: 70 },
      { key: 'dark_circle_v2', label: '다크써클', score: 65 },
      { key: 'droopy_upper_eyelid', label: '처진 윗눈꺼풀', score: 80 },
      { key: 'droopy_lower_eyelid', label: '처진 아랫눈꺼풀', score: 72 },
      { key: 'wrinkle', label: '주름', score: 82 },
      { key: 'texture', label: '피부결', score: 88 },
      { key: 'acne', label: '여드름', score: 85 },
      { key: 'redness', label: '홍조', score: 90 },
      { key: 'oiliness', label: '유분', score: 83 },
      { key: 'moisture', label: '수분', score: 78 },
      { key: 'pore', label: '모공', score: 80 },
      { key: 'eye_bag', label: '눈밑지방', score: 76 },
      { key: 'radiance', label: '광채', score: 81 },
      { key: 'firmness', label: '탄력', score: 83 },
    ],
    cautionKeys: ['dark_circle_v2', 'moisture', 'age_spot'],
  },
];

const v_612065 = [...v_820b44, ...v_16f99f];
const v_488860 = 5;
const v_637b1c = ['일', '월', '화', '수', '목', '금', '토'];

interface SkinRecordsViewProps {
  onCompare?: (records: [SkinRecord, SkinRecord]) => void;

  selectedAccountId?: string;

  accounts?: Array<{ id: string; isCurrent?: boolean }>;
}

export const v_852b5b = (item: v_b57732, v_8d41d7): SkinRecord => {

  let v_e521b9 = {};
  if (v_8c0b26.analysis_result) {
    if (typeof v_8c0b26.analysis_result === 'string') {
      try {
        v_e521b9 = JSON.parse(v_8c0b26.analysis_result);
      } catch (v_9e86fd) {
        console.warn('[SkinRecordsView] analysis_result 파싱 실패:', v_9e86fd);
      }
    } else {
      v_e521b9 = v_8c0b26.analysis_result;
    }
  }

  const v_4622b9 = [];
  Object.keys(v_e521b9).forEach((v_b24339) => {
    const v_43c42e = v_e521b9[v_b24339];
    if (v_43c42e && typeof v_43c42e.ui_score === 'number') {
      const v_73543d = v_62eb5a(v_b24339);
      const v_2869c1 = v_8d41d7(`skin.concerns.${v_73543d}`) || v_b24339;
      v_4622b9.push({
        key: v_b24339,
        label: v_2869c1,
        score: v_43c42e.ui_score,
      });
    }
  });

  v_4622b9.sort((v_779914, v_148ff6) => v_148ff6.score - v_779914.score);

  const v_96fff1 = v_4622b9.slice(-3).map((v_8c0b26) => v_8c0b26.key);

  const v_261f9c = v_8c0b26.grade
    ? v_8c0b26.grade.toLowerCase().replace(' ', '_')
    : v_7b207e(v_8c0b26.overall_score);

  return {
    id: String(v_8c0b26.id),
    date: v_8c0b26.record_date,
    time: v_8c0b26.record_time,
    overallScore: v_8c0b26.overall_score,
    skinAge: v_8c0b26.skin_age,
    gradeKey: v_261f9c,
    items: v_4622b9,
    cautionKeys: v_96fff1,
  };
};

export const SkinRecordsView: v_a3453e.FC<SkinRecordsViewProps> = ({
  onCompare: v_bda358,
  selectedAccountId: v_e7b2f2,
  accounts: v_c86f08,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();
  const v_c65f5d = v_ada615();
  const [v_0af1e7, v_9e8c08] = v_5ab095<'calendar' | 'list'>('list');
  const [v_0ab6f2, v_3a7c17] = v_5ab095(new Date());
  const [v_1835e1, v_f04d19] = v_5ab095<string | null>(null);
  const [v_b23082, v_725ee9] = v_5ab095(false);
  const [v_37dcee, v_10eb9c] = v_5ab095(v_488860);
  const [v_b66218, v_ab9961] = v_5ab095(0);
  const [v_088a9b, v_4eaeca] = v_5ab095(false);
  const [v_9dc715, v_df7b64] = v_5ab095<SkinConditionItem | null>(null);

  const [v_34779a, v_f1bcfc] = v_5ab095(false);
  const [v_71ebe4, v_0f550d] = v_5ab095<[SkinRecord | null, SkinRecord | null]>([null, null]);
  const [v_4dd592, v_b173ec] = v_5ab095<string | null>(null);

  const [v_678155, v_9ed182] = v_5ab095<SkinRecord[]>([]);
  const [v_cd31a8, v_deef62] = v_5ab095(false);
  const [v_95616f, v_885e0e] = v_5ab095<Error | null>(null);
  const [v_32428f, v_f775f7] = v_5ab095(0);

  const [v_a4994e, v_699388] = v_5ab095<SkinRecord | null>(null);
  const [v_e74174, v_8984bb] = v_5ab095(false);

  v_c4deb2(() => {
    const v_efc1dd = async () => {
      v_deef62(true);
      v_885e0e(null);
      try {

        const v_0c2f9b = v_c86f08?.find((v_9f1d92) => v_9f1d92.id === v_e7b2f2);
        const v_083682 = v_0c2f9b?.isCurrent === true;

        console.log('[SkinRecordsView] 피부 기록 로드 시작...', {
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
        console.log('[SkinRecordsView] API 호출 파라미터:', {
          subAccountId: v_ee2acd,
          isMyAccount: v_083682,
          willSendSubAccountId: !!v_ee2acd,
        });

        const v_1f4ef0 = await v_81fcbc(v_ee2acd);

        console.log('[SkinRecordsView] 피부 기록 로드 성공:', {
          count: v_1f4ef0.length,
          records: JSON.stringify(v_1f4ef0, null, 2),
        });

        const v_e21297 = v_1f4ef0.map((v_8c0b26) => v_852b5b(v_8c0b26, v_8d41d7));
        v_9ed182(v_e21297);
      } catch (v_5e9bfe) {
        console.error('[SkinRecordsView] 피부 기록 로드 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
        });

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

        v_885e0e(v_5e9bfe instanceof Error ? v_5e9bfe : new Error('피부 기록을 불러오는데 실패했습니다.'));
        v_9ed182([]); 
      } finally {
        v_deef62(false);
      }
    };

    v_efc1dd();
  }, [v_e7b2f2, v_c86f08, v_c65f5d, v_8d41d7, v_32428f]);

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

  const v_2af54e = (v_d5dda0) => `${v_d5dda0.getFullYear()}년 ${v_d5dda0.getMonth() + 1}월`;

  const v_16897e = (v_8dffde, v_f985e6) => {
    const [v_64877a, v_35f85c, v_d5dda0] = v_8dffde.split('-');
    const v_a7745c = parseInt(v_f985e6.split(':')[0], 10);
    const v_38e403 = v_a7745c >= 12;
    const v_65a2cd = v_a7745c % 12 || 12;
    const v_43e24b = v_f985e6.split(':')[1];
    return `${v_64877a}.${v_35f85c}.${v_d5dda0} ${v_38e403 ? '오후' : '오전'} ${v_65a2cd}:${v_43e24b}`;
  };

  const v_e5585e = (v_f985e6) => {
    const v_a7745c = parseInt(v_f985e6.split(':')[0], 10);
    const v_38e403 = v_a7745c >= 12;
    const v_65a2cd = v_a7745c % 12 || 12;
    const v_43e24b = v_f985e6.split(':')[1];
    return `${v_38e403 ? '오후' : '오전'} ${v_65a2cd}:${v_43e24b}`;
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
    const v_a715fa = async () => {
      if (!v_b23082 || !v_884a36) {
        v_699388(null);
        return;
      }

      v_8984bb(true);
      try {
        const v_fbf3b0 = parseInt(v_884a36.id, 10);
        if (isNaN(v_fbf3b0)) {
          console.warn('[SkinRecordsView] 유효하지 않은 기록 ID:', v_884a36.id);
          v_8984bb(false);
          return;
        }

        if (__DEV__) {
          console.log('[SkinRecordsView] 기록 상세 데이터 로드 시작:', { recordId: v_fbf3b0 });
        }

        const v_61f930 = await v_095212(v_fbf3b0);
        const v_3a28a5 = v_852b5b(v_61f930, v_8d41d7);

        if (__DEV__) {
          console.log('[SkinRecordsView] 기록 상세 데이터 로드 성공:', {
            recordId: v_fbf3b0,
            hasAnalysisResult: !!v_61f930.analysis_result,
            analysisResultKeys: v_61f930.analysis_result ? Object.keys(v_61f930.analysis_result) : [],
          });
        }

        v_699388(v_3a28a5);
      } catch (v_5e9bfe) {
        console.error('[SkinRecordsView] 기록 상세 데이터 로드 실패:', v_5e9bfe);

        v_699388(null);
      } finally {
        v_8984bb(false);
      }
    };

    v_a715fa();
  }, [v_b23082, v_884a36?.id, v_8d41d7]);

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
    if (v_678155.length === 1) v_66e2a0(v_678155[0]);
    else v_b173ec(v_f8e6b9);
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

  const v_8e442f = (v_8c0b26) => {
    v_df7b64(v_8c0b26);
    v_4eaeca(true);
  };

  const v_6043f5 = (v_f8e6b9) =>
    v_71ebe4.some((v_cb35cb) => v_cb35cb?.date === v_f8e6b9);

  const v_a8e397 = (v_cbbd71) =>
    v_71ebe4.some((v_cb35cb) => v_cb35cb?.id === v_cbbd71.id);

  const v_d50d17 = (v_b24339) => v_8d41d7(`skin.result.grade.${v_b24339}`);
  const v_e60572 = (v_b24339, v_0debf4) => v_8d41d7(`skin.concerns.${v_62eb5a(v_b24339)}`) || v_0debf4;

  return (
    <View style={v_d81136.container}>
      {}
      <View style={v_d81136.viewModeRow}>
        <TouchableOpacity
          style={[v_d81136.viewModeBtn, v_0af1e7 === 'list' && v_d81136.viewModeBtnActive]}
          onPress={() => v_9e8c08('list')}
        >
          <Ionicons name="list-outline" size={18} color={v_0af1e7 === 'list' ? '#fff' : v_1bfbd0.secondaryText} />
          <Text style={[v_d81136.viewModeText, v_0af1e7 === 'list' && v_d81136.viewModeTextActive]}>
            {v_8d41d7('skin_records.list')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[v_d81136.viewModeBtn, v_0af1e7 === 'calendar' && v_d81136.viewModeBtnActive]}
          onPress={() => v_9e8c08('calendar')}
        >
          <Ionicons name="calendar-outline" size={18} color={v_0af1e7 === 'calendar' ? '#fff' : v_1bfbd0.secondaryText} />
          <Text style={[v_d81136.viewModeText, v_0af1e7 === 'calendar' && v_d81136.viewModeTextActive]}>
            {v_8d41d7('skin_records.calendar')}
          </Text>
        </TouchableOpacity>
      </View>

      {}
      {v_34779a ? (
        <View style={v_d81136.compareModeBar}>
          <Text style={v_d81136.compareModeCount}>
            {v_8d41d7('skin_records.compare_selected', { count: v_a75897, total: 2 })}
          </Text>
          <View style={v_d81136.compareModeActions}>
            <TouchableOpacity style={v_d81136.compareCancelBtn} onPress={v_11e4ac}>
              <Text style={v_d81136.compareCancelText}>{v_8d41d7('skin_records.cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[v_d81136.compareConfirmBtn, !v_8c38ef && v_d81136.compareConfirmBtnDisabled]}
              onPress={v_fbead4}
              disabled={!v_8c38ef}
            >
              <Text style={[v_d81136.compareConfirmText, !v_8c38ef && v_d81136.compareConfirmTextDisabled]}>
                {v_8d41d7('skin_records.compare_btn')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <GradientButton
          title={v_8d41d7('skin_records.start_comparative_analysis')}
          leftIcon={<Ionicons name="git-compare-outline" size={20} color="#fff" />}
          rightIcon={<Ionicons name="sparkles-outline" size={16} color="#fff" />}
          colors={['#615FFF', '#AD46FF']}
          onPress={v_2daa27}
          style={v_d81136.compareBtn}
        />
      )}

      {v_cd31a8 ? (
        <View style={v_d81136.loadingContainer}>
          <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          <Text style={v_d81136.loadingText}>{v_8d41d7('skin_records.loading') || '기록을 불러오는 중...'}</Text>
        </View>
      ) : v_95616f ? (
        <View style={v_d81136.errorContainer}>
          <Ionicons name="alert-circle-outline" size={48} color={v_1bfbd0.error} />
          <Text style={v_d81136.errorText}>{v_95616f.message}</Text>
          <TouchableOpacity
            style={v_d81136.retryButton}
            onPress={() => {
              v_885e0e(null);
              v_f775f7((v_3f4e2e) => v_3f4e2e + 1);
            }}
          >
            <Text style={v_d81136.retryButtonText}>{v_8d41d7('common.retry') || '다시 시도'}</Text>
          </TouchableOpacity>
        </View>
      ) : v_678155.length === 0 ? (
        <View style={v_d81136.emptyContainer}>
          <Ionicons name="calendar-outline" size={48} color={v_1bfbd0.secondaryText} />
          <Text style={v_d81136.emptyText}>{v_8d41d7('skin_records.no_records') || '기록이 없습니다.'}</Text>
        </View>
      ) : v_0af1e7 === 'calendar' ? (
        <>
          <View style={v_d81136.calendarCard}>
            <View style={v_d81136.calendarHeader}>
              <TouchableOpacity onPress={() => v_3a7c17((v_e2a85c) => new Date(v_e2a85c.getFullYear(), v_e2a85c.getMonth() - 1))} style={v_d81136.monthNavBtn} hitSlop={12}>
                <Ionicons name="chevron-back" size={22} color={v_1bfbd0.text} />
              </TouchableOpacity>
              <Text style={v_d81136.monthNavText}>{v_2af54e(v_0ab6f2)}</Text>
              <TouchableOpacity onPress={() => v_3a7c17((v_e2a85c) => new Date(v_e2a85c.getFullYear(), v_e2a85c.getMonth() + 1))} style={v_d81136.monthNavBtn} hitSlop={12}>
                <Ionicons name="chevron-forward" size={22} color={v_1bfbd0.text} />
              </TouchableOpacity>
            </View>
            <View style={v_d81136.weekRow}>
              {v_637b1c.map((v_087ffc) => (
                <View key={v_087ffc} style={v_d81136.weekCell}>
                  <Text style={v_d81136.weekRowText}>{v_087ffc}</Text>
                </View>
              ))}
            </View>
            <View style={v_d81136.daysGrid}>
              {v_a787ee.map((v_087ffc, v_e86ad8) => {
                const v_f8e6b9 = v_087ffc != null
                  ? `${v_0ab6f2.getFullYear()}-${String(v_0ab6f2.getMonth() + 1).padStart(2, '0')}-${String(v_087ffc).padStart(2, '0')}`
                  : '';
                const v_68476a = v_f8e6b9 ? v_384480.has(v_f8e6b9) : false;
                const v_599a41 = v_34779a ? v_6043f5(v_f8e6b9) : v_1835e1 === v_f8e6b9;
                const v_6e3315 = v_4dd592 === v_f8e6b9;
                return (
                  <TouchableOpacity
                    key={v_e86ad8}
                    style={[v_d81136.dayCell, v_599a41 && v_d81136.dayCellSelected, v_6e3315 && v_d81136.dayCellPending]}
                    onPress={() => (v_34779a ? v_aa30b0(v_087ffc) : v_c9c711(v_087ffc))}
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

          {v_4dd592 && (
            <View style={v_d81136.timePickSection}>
              <Text style={v_d81136.timePickTitle}>
                {v_8d41d7('skin_records.select_time_for', { date: v_4dd592.replace(/-/g, '.') })}
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
                    <Text style={v_d81136.timePickOptionSub}>{v_94a7a9.overallScore}/100</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </>
      ) : (
        <ScrollView style={v_d81136.listScroll} contentContainerStyle={v_d81136.listContent}>
          {v_00a76c.map((v_cbbd71) => {
            const v_599a41 = v_34779a && v_a8e397(v_cbbd71);
            return (
              <TouchableOpacity
                key={v_cbbd71.id}
                style={[v_d81136.listItem, v_599a41 && v_d81136.listItemSelected]}
                onPress={() => v_5b20f5(v_cbbd71)}
              >
                <View style={v_d81136.listItemLeft}>
                  <Text style={v_d81136.listItemDate}>{v_cbbd71.date.replace(/-/g, '.')}</Text>
                  <Text style={v_d81136.listItemTime}>{v_e5585e(v_cbbd71.time)}</Text>
                </View>
                <View style={v_d81136.listItemRight}>
                  <Text style={v_d81136.listItemValue}>{v_cbbd71.overallScore}</Text>
                  <View style={[v_d81136.listItemBadge, v_d81136.listItemBadgeNormal]}>
                    <Text style={v_d81136.listItemBadgeText}>{v_d50d17(v_cbbd71.gradeKey)}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          {v_cff7c3 && (
            <TouchableOpacity style={v_d81136.loadMoreBtn} onPress={() => v_10eb9c((v_e2a85c) => Math.min(v_e2a85c + v_488860, v_678155.length))}>
              <Text style={v_d81136.loadMoreText}>{v_8d41d7('skin_records.load_more')}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}

      {}
      <Modal
        visible={v_b23082}
        animationType="slide"
        transparent
        onRequestClose={() => {
          v_725ee9(false);
          v_b173ec(null);
        }}
      >
        <Pressable
          style={v_d81136.modalOverlay}
          onPress={() => {
            v_725ee9(false);
            v_b173ec(null);
          }}
        >
          <Pressable style={v_d81136.modalContent} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            {v_e74174 ? (
              <View style={v_d81136.loadingContainer}>
                <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                <Text style={v_d81136.loadingText}>데이터를 불러오는 중...</Text>
              </View>
            ) : v_8cc501 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[v_d81136.modalScrollContent, { paddingBottom: v_033e14.bottom + v_9b1a04.medium }]}
              >
                {}
                <View style={v_d81136.detailTimestampRow}>
                  {v_b277c8 ? (
                    <TouchableOpacity
                      style={[v_d81136.summaryNavBtn, !v_a144ca && v_d81136.summaryNavBtnDisabled]}
                      onPress={v_6a56d2}
                      disabled={!v_a144ca}
                    >
                      <Ionicons name="chevron-back" size={24} color={v_a144ca ? v_1bfbd0.text : v_1bfbd0.border} />
                      <Text style={[v_d81136.summaryNavBtnText, !v_a144ca && v_d81136.summaryNavBtnTextDisabled]}>{v_8d41d7('skin_records.prev')}</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={v_d81136.summaryNavPlaceholder} />
                  )}
                  <Text style={v_d81136.detailTimestamp} numberOfLines={1}>
                    {v_16897e(v_8cc501.date, v_8cc501.time)}
                  </Text>
                  {v_b277c8 ? (
                    <TouchableOpacity
                      style={[v_d81136.summaryNavBtn, !v_4a3fe8 && v_d81136.summaryNavBtnDisabled]}
                      onPress={v_f83132}
                      disabled={!v_4a3fe8}
                    >
                      <Text style={[v_d81136.summaryNavBtnText, !v_4a3fe8 && v_d81136.summaryNavBtnTextDisabled]}>{v_8d41d7('skin_records.next')}</Text>
                      <Ionicons name="chevron-forward" size={24} color={v_4a3fe8 ? v_1bfbd0.text : v_1bfbd0.border} />
                    </TouchableOpacity>
                  ) : (
                    <View style={v_d81136.summaryNavPlaceholder} />
                  )}
                </View>

                {}
                <View style={v_d81136.summaryCard}>
                  <View style={v_d81136.summaryLeft}>
                    <Text style={v_d81136.summaryScore}>{v_8cc501.overallScore}</Text>
                    <Text style={v_d81136.summaryLabel}>{v_8d41d7('skin_records.overall_score')}</Text>
                  </View>
                  <View style={v_d81136.summaryDivider} />
                  <View style={v_d81136.summaryRight}>
                    <View style={[v_d81136.gradeBadge, { backgroundColor: '#FFFBEB' }]}>
                      <Text style={[v_d81136.gradeBadgeText, { color: '#D97706' }]}>{v_d50d17(v_8cc501.gradeKey)}</Text>
                    </View>
                    <Text style={v_d81136.skinAgeText}>{v_8d41d7('skin_records.skin_age', { age: v_8cc501.skinAge })}</Text>
                  </View>
                </View>

                {}
                <Text style={v_d81136.sectionTitle}>{v_8d41d7('skin_records.skin_condition')}</Text>
                <View style={v_d81136.itemsGrid}>
                  {v_8cc501.items.map((v_8c0b26) => {
                    const v_5e5963 = v_53f592(v_8c0b26.score);
                    const v_3b3648 = 56;
                    const v_0c21c9 = v_3b3648 / 2 - 4;
                    const v_65e020 = 2 * Math.PI * v_0c21c9;
                    const v_a63fde = v_8c0b26.score / 100;
                    return (
                      <TouchableOpacity
                        key={v_8c0b26.key}
                        style={v_d81136.gridItem}
                        onPress={() => v_8e442f(v_8c0b26)}
                        activeOpacity={0.8}
                      >
                        <View style={[v_d81136.gridItemCircle, { width: v_3b3648, height: v_3b3648 }]}>
                          <Svg width={v_3b3648} height={v_3b3648} style={{ position: 'absolute' }}>
                            <Circle
                              cx={v_3b3648 / 2}
                              cy={v_3b3648 / 2}
                              r={v_0c21c9}
                              stroke="#E5E7EB"
                              strokeWidth={4}
                              fill="none"
                            />
                            <Circle
                              cx={v_3b3648 / 2}
                              cy={v_3b3648 / 2}
                              r={v_0c21c9}
                              stroke={v_5e5963}
                              strokeWidth={4}
                              strokeLinecap="round"
                              fill="none"
                              strokeDasharray={v_65e020}
                              strokeDashoffset={v_65e020 * (1 - v_a63fde)}
                              transform={`rotate(-90 ${v_3b3648 / 2} ${v_3b3648 / 2})`}
                            />
                          </Svg>
                          <View style={v_d81136.gridItemScoreWrap}>
                            <Text style={[v_d81136.gridItemScore, { color: v_5e5963 }]}>{v_8c0b26.score}</Text>
                          </View>
                        </View>
                        <Text style={v_d81136.gridItemLabel} numberOfLines={1}>{v_e60572(v_8c0b26.key, v_8c0b26.label)}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                {}
                {v_8cc501.cautionKeys.length > 0 && (
                  <View style={v_d81136.cautionCard}>
                    <Text style={v_d81136.cautionTitle}>{v_8d41d7('skin_records.caution')}</Text>
                    <View style={v_d81136.cautionTags}>
                      {v_8cc501.cautionKeys.map((v_b24339) => {
                        const v_8c0b26 = v_8cc501.items.find((v_ebec57) => v_ebec57.key === v_b24339);
                        return (
                          <View key={v_b24339} style={v_d81136.cautionTag}>
                            <Text style={v_d81136.cautionTagText}>{v_8c0b26 ? v_e60572(v_8c0b26.key, v_8c0b26.label) : v_b24339}</Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                )}

                <TouchableOpacity
                  style={v_d81136.closeBtn}
                  onPress={() => {
                    v_725ee9(false);
                    v_b173ec(null);
                  }}
                >
                  <Text style={v_d81136.closeBtnText}>{v_8d41d7('skin_records.close')}</Text>
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </Pressable>
        </Pressable>
      </Modal>

      {}
      <Modal
        visible={v_088a9b}
        animationType="slide"
        transparent
        onRequestClose={() => v_4eaeca(false)}
      >
        <Pressable style={v_d81136.modalOverlay} onPress={() => v_4eaeca(false)}>
          <Pressable style={[v_d81136.itemDetailModal, { paddingBottom: v_033e14.bottom + v_9b1a04.large }]} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            {v_9dc715 && (
              <>
                <View style={v_d81136.itemDetailHeader}>
                  <Text style={v_d81136.itemDetailLabel}>{v_9dc715.label}</Text>
                  <TouchableOpacity onPress={() => v_4eaeca(false)} hitSlop={12}>
                    <Ionicons name="close" size={24} color={v_1bfbd0.primary} />
                  </TouchableOpacity>
                </View>
                <View style={v_d81136.itemDetailScoreRow}>
                  <Text style={[v_d81136.itemDetailScore, { color: v_53f592(v_9dc715.score) }]}>{v_9dc715.score}</Text>
                  <Text style={v_d81136.itemDetailScoreTotal}>/ 100</Text>
                </View>
                <View style={v_d81136.itemDetailProgressBg}>
                  <View
                    style={[
                      v_d81136.itemDetailProgressFill,
                      { width: `${v_9dc715.score}%`, backgroundColor: v_53f592(v_9dc715.score) },
                    ]}
                  />
                </View>
                <Text style={v_d81136.itemDetailDesc}>
                  {v_8d41d7('skin_records.item_detail_desc', { label: v_e60572(v_9dc715.key, v_9dc715.label), score: v_9dc715.score })}
                </Text>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: { flex: 1, paddingHorizontal: v_9b1a04.large, paddingTop: v_9b1a04.medium, backgroundColor: v_1bfbd0.background },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: v_9b1a04.xlarge * 2,
    paddingHorizontal: v_9b1a04.large,
  },
  errorText: {
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.large,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.error,
    textAlign: 'center',
  },
  retryButton: {
    paddingVertical: v_9b1a04.small + 4,
    paddingHorizontal: v_9b1a04.large,
    backgroundColor: v_1bfbd0.primary,
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#fff',
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
  viewModeRow: { flexDirection: 'row', gap: 8, marginBottom: v_9b1a04.medium, justifyContent: 'center' },
  viewModeBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: v_1bfbd0.border },
  viewModeBtnActive: { backgroundColor: '#000', borderColor: '#000' },
  viewModeText: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.secondaryText },
  viewModeTextActive: { color: '#fff' },
  compareModeBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: v_9b1a04.large, paddingVertical: v_9b1a04.small, paddingHorizontal: v_9b1a04.medium, backgroundColor: '#F5F5F5', borderRadius: 10 },
  compareModeCount: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  compareModeActions: { flexDirection: 'row', gap: 8 },
  compareCancelBtn: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: v_1bfbd0.border },
  compareCancelText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  compareConfirmBtn: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: v_1bfbd0.bluePrimary, borderRadius: 8 },
  compareConfirmBtnDisabled: { backgroundColor: v_1bfbd0.border },
  compareConfirmText: { fontSize: v_ef658a.small, fontFamily: v_843035.bold, color: '#fff' },
  compareConfirmTextDisabled: { color: v_1bfbd0.secondaryText },
  compareBtn: { marginBottom: v_9b1a04.large },
  timePickSection: { marginTop: v_9b1a04.medium, padding: v_9b1a04.medium, backgroundColor: '#F8FAFC', borderRadius: 12, borderWidth: 1, borderColor: v_1bfbd0.border },
  timePickTitle: { fontSize: v_ef658a.small, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: v_9b1a04.small },
  timePickOptions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  timePickOption: { paddingVertical: 10, paddingHorizontal: 14, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: v_1bfbd0.border },
  timePickOptionText: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  timePickOptionSub: { fontSize: 11, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, marginTop: 2 },
  calendarCard: { backgroundColor: '#fff', borderRadius: 12, padding: v_9b1a04.large, borderWidth: 1, borderColor: v_1bfbd0.border },
  calendarHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: v_9b1a04.medium },
  monthNavBtn: { padding: 4 },
  monthNavText: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  weekRow: { flexDirection: 'row', marginBottom: v_9b1a04.small },
  weekCell: { flex: 1, alignItems: 'center' },
  weekRowText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: v_1bfbd0.secondaryText },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayCell: { width: '14.28%', aspectRatio: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 4 },
  dayCellSelected: { backgroundColor: '#E3F2FD', borderRadius: 8 },
  dayCellPending: { borderWidth: 2, borderColor: v_1bfbd0.bluePrimary },
  dayText: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  dayTextMuted: { color: v_1bfbd0.secondaryText },
  dataDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: v_1bfbd0.bluePrimary, marginTop: 2 },
  listScroll: { flex: 1 },
  listContent: { paddingBottom: v_9b1a04.xlarge },
  listItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: v_9b1a04.medium, borderRadius: 12, marginBottom: v_9b1a04.small, borderWidth: 1, borderColor: v_1bfbd0.border },
  listItemSelected: { backgroundColor: '#E3F2FD', borderColor: v_1bfbd0.bluePrimary },
  listItemLeft: { flex: 1 },
  listItemDate: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  listItemTime: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, marginTop: 4 },
  listItemRight: { alignItems: 'flex-end' },
  listItemValue: { fontSize: 24, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  listItemBadge: { marginTop: 6, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-end' },
  listItemBadgeNormal: { backgroundColor: '#FFFBEB' },
  listItemBadgeText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: '#D97706' },
  loadMoreBtn: { alignItems: 'center', justifyContent: 'center', paddingVertical: v_9b1a04.large, marginTop: v_9b1a04.small, borderWidth: 1, borderColor: v_1bfbd0.border, borderRadius: 12, backgroundColor: '#fff' },
  loadMoreText: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.bluePrimary },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: v_9b1a04.large, maxHeight: '85%' },
  modalScrollContent: { paddingBottom: v_9b1a04.xlarge },
  detailTimestampRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: v_9b1a04.large },
  detailTimestamp: { flex: 1, fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.secondaryText, textAlign: 'center' },
  summaryNavBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingVertical: 8, paddingHorizontal: 4, minWidth: 56 },
  summaryNavBtnDisabled: { opacity: 0.4 },
  summaryNavBtnText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  summaryNavBtnTextDisabled: { color: v_1bfbd0.border },
  summaryNavPlaceholder: { width: 56 },
  summaryCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: 12, padding: v_9b1a04.large, marginBottom: v_9b1a04.large, borderWidth: 1, borderColor: v_1bfbd0.border },
  summaryLeft: { flex: 1, alignItems: 'center' },
  summaryScore: { fontSize: 32, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  summaryLabel: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, marginTop: 4 },
  summaryDivider: { width: 1, height: 40, backgroundColor: v_1bfbd0.border, marginHorizontal: v_9b1a04.medium },
  summaryRight: { flex: 1, alignItems: 'center' },
  gradeBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  gradeBadgeText: { fontSize: v_ef658a.small, fontFamily: v_843035.semibold },
  skinAgeText: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, marginTop: 8 },
  sectionTitle: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: v_9b1a04.medium },
  itemsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: v_2c6c54, marginBottom: v_9b1a04.large },
  gridItem: { width: v_7f37df, alignItems: 'center' },
  gridItemCircle: { alignItems: 'center', justifyContent: 'center', position: 'relative' },
  gridItemScoreWrap: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  gridItemScore: { fontSize: v_ef658a.small, fontFamily: v_843035.bold },
  gridItemLabel: { fontSize: 10, fontFamily: v_843035.medium, color: v_1bfbd0.text, marginTop: 4, textAlign: 'center' },
  cautionCard: { backgroundColor: '#FFFBEB', borderRadius: 12, padding: v_9b1a04.medium, marginBottom: v_9b1a04.large, borderWidth: 1, borderColor: '#FDE68A' },
  cautionTitle: { fontSize: v_ef658a.small, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: v_9b1a04.small },
  cautionTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  cautionTag: { backgroundColor: '#FEF3C7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  cautionTagText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: '#92400E' },
  closeBtn: { alignItems: 'center', paddingVertical: 14, backgroundColor: v_1bfbd0.border, borderRadius: 10 },
  closeBtnText: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  itemDetailModal: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: v_9b1a04.large },
  itemDetailHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: v_9b1a04.medium },
  itemDetailLabel: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  itemDetailScoreRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: v_9b1a04.small },
  itemDetailScore: { fontSize: 28, fontFamily: v_843035.bold },
  itemDetailScoreTotal: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, marginLeft: 4 },
  itemDetailProgressBg: { height: 12, borderRadius: 6, backgroundColor: '#F3F4F6', overflow: 'hidden', marginBottom: v_9b1a04.medium },
  itemDetailProgressFill: { height: '100%', borderRadius: 6 },
  itemDetailDesc: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, lineHeight: 22 },
});
