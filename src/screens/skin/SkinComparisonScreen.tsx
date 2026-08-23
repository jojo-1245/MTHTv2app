import v_a3453e, { v_5ab095, v_df9f57, v_c4deb2 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_122070,
  v_700696,
  v_aa7413,
  v_326be8,
  v_09d0e5,
  v_39a996,
} from 'rcmrninabrnb';
import { v_889fad } from '../../components/AlertHost';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_050c3d, v_9033e9, v_19b633 as v_9b42ad } from 'vpztcxjmsfanunln';
import { v_5ade23 as v_6f705c } from 'xbfwaaanosqvazmrqoah';
import { v_729608, v_570c34, v_556baf } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04, v_53f592 } from '../../constants';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_cb37be } from './components/SkinRecordsView';
import { v_852b5b } from './components/SkinRecordsView';
import { v_3680d3, v_df51cf, type v_b918db } from '../../services';
import { v_998b9d } from '../../utils/authErrorHandler';
import { v_f5ba54 } from '../../services/skinAnalysis';
import { v_1f53bf } from '../../hooks/useSystemConfig';

const { width: v_0d9f50 } = v_700696.get('window');
const v_47dd8d = Math.min(v_0d9f50 - v_9b1a04.large * 4, 300);
const v_1901e5 = v_47dd8d / 2;
const v_08c4b9 = v_47dd8d / 2 - 55;
const v_093a50 = 28;
const v_1d3289 = '#2563EB';
const v_7d1fc2 = '#EA580C';

const v_031985 = 3;

const v_3a27d9 = [
  'age_spot', 'wrinkle', 'texture', 'acne', 'dark_circle_v2', 'redness',
  'oiliness', 'moisture', 'pore', 'eye_bag', 'radiance', 'firmness',
  'droopy_upper_eyelid', 'droopy_lower_eyelid',
];

const v_62eb5a = (v_b24339): string => {
  if (v_b24339.startsWith('hd_')) {
    const v_7ddf7c = v_b24339.substring(3);
    return v_7ddf7c === 'dark_circle' ? 'dark_circle_v2' : v_7ddf7c;
  }
  return v_b24339;
};

type Props = v_432191<v_8ad91b, 'SkinComparison'>;

const v_c1c940 = (v_8dffde) => v_8dffde.replace(/-/g, '.');

const v_22e3c0 = (v_8d41d7, v_8dffde, v_f985e6) => {
  const v_a7745c = parseInt(v_f985e6.split(':')[0], 10);
  const v_38e403 = v_a7745c >= 12;
  const v_65a2cd = v_a7745c % 12 || 12;
  const v_43e24b = v_f985e6.split(':')[1];
  const v_591485 = v_38e403 ? v_8d41d7('common.time_pm') : v_8d41d7('common.time_am');
  return `${v_591485} ${v_65a2cd}:${v_43e24b}`;
};

const v_854a88 = (record: v_cb37be, v_240716): number => {
  const v_8c0b26 = v_cbbd71.items.find(
    (v_ebec57) => v_ebec57.key === v_240716 || v_62eb5a(v_ebec57.key) === v_240716
  );
  return v_8c0b26?.score ?? 0;
};

function v_60fa3c({
  recordA: v_1a2523,
  recordB: v_fe1802,
  selectedKeys: v_122c3a,
  backgroundColor: v_f7b9fb,
}: {
  recordA: v_cb37be;
  recordB: v_cb37be;
  selectedKeys: string[];
  backgroundColor?: string;
}) {
  const { t: v_8d41d7 } = v_772971();
  const v_f4e98d = v_122c3a.length || 1;

  const v_27ed8f = v_df9f57(() => {
    return v_122c3a.map((v_b24339, v_ebec57) => {
      const v_740dd8 = v_854a88(v_1a2523, v_b24339);
      const v_cb35cb = (v_740dd8 / 100) * v_08c4b9;
      const v_4b6102 = -Math.PI / 2 + (v_ebec57 / v_f4e98d) * 2 * Math.PI;
      return {
        x: v_1901e5 + v_cb35cb * Math.cos(v_4b6102),
        y: v_1901e5 + v_cb35cb * Math.sin(v_4b6102),
      };
    });
  }, [v_1a2523, v_122c3a]);

  const v_120a68 = v_df9f57(() => {
    return v_122c3a.map((v_b24339, v_ebec57) => {
      const v_740dd8 = v_854a88(v_fe1802, v_b24339);
      const v_cb35cb = (v_740dd8 / 100) * v_08c4b9;
      const v_4b6102 = -Math.PI / 2 + (v_ebec57 / v_f4e98d) * 2 * Math.PI;
      return {
        x: v_1901e5 + v_cb35cb * Math.cos(v_4b6102),
        y: v_1901e5 + v_cb35cb * Math.sin(v_4b6102),
      };
    });
  }, [v_fe1802, v_122c3a]);

  const v_b0f3d8 = v_27ed8f.map((v_e2a85c) => `${v_e2a85c.x},${v_e2a85c.y}`).join(' ');
  const v_bbb660 = v_120a68.map((v_e2a85c) => `${v_e2a85c.x},${v_e2a85c.y}`).join(' ');

  const v_52e515 = [0.25, 0.5, 0.75, 1];
  const v_e1e10d = v_52e515.map((v_fbe91e) => {
    const v_553162 = v_122c3a.map((v_37eab7, v_ebec57) => {
      const v_cb35cb = v_08c4b9 * v_fbe91e;
      const v_4b6102 = -Math.PI / 2 + (v_ebec57 / v_f4e98d) * 2 * Math.PI;
      return { x: v_1901e5 + v_cb35cb * Math.cos(v_4b6102), y: v_1901e5 + v_cb35cb * Math.sin(v_4b6102) };
    });
    return v_553162.map((v_e2a85c) => `${v_e2a85c.x},${v_e2a85c.y}`).join(' ');
  });

  const v_e9c1c6 = v_122c3a.map((v_37eab7, v_ebec57) => {
    const v_4b6102 = -Math.PI / 2 + (v_ebec57 / v_f4e98d) * 2 * Math.PI;
    const v_83084a = v_1901e5 + v_08c4b9 * Math.cos(v_4b6102);
    const v_947a8a = v_1901e5 + v_08c4b9 * Math.sin(v_4b6102);
    return { x1: v_1901e5, y1: v_1901e5, x2: v_83084a, y2: v_947a8a };
  });

  return (
    <View style={[v_fbfcbd.wrap, v_f7b9fb && { backgroundColor: v_f7b9fb }]}>
      <Svg width={v_47dd8d} height={v_47dd8d}>
        {}
        {v_e1e10d.map((v_553162, v_ebec57) => (
          <Polygon key={v_ebec57} points={v_553162} fill="none" stroke="#E5E7EB" strokeWidth={1} />
        ))}
        {}
        {v_e9c1c6.map((v_e6293e, v_ebec57) => (
          <Line
            key={v_ebec57}
            x1={v_e6293e.x1}
            y1={v_e6293e.y1}
            x2={v_e6293e.x2}
            y2={v_e6293e.y2}
            stroke="#E5E7EB"
            strokeWidth={1}
          />
        ))}
        {}
        <Polygon
          points={v_bbb660}
          fill="rgba(234, 88, 12, 0.12)"
          stroke={v_7d1fc2}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {}
        <Polygon
          points={v_b0f3d8}
          fill="rgba(37, 99, 235, 0.2)"
          stroke={v_1d3289}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {}
        {v_122c3a.map((v_b24339, v_ebec57) => {
          const v_4b6102 = -Math.PI / 2 + (v_ebec57 / v_f4e98d) * 2 * Math.PI;
          const v_433c26 = v_08c4b9 + v_093a50;
          const v_beb3a8 = v_1901e5 + v_433c26 * Math.cos(v_4b6102);
          const v_37b111 = v_1901e5 + v_433c26 * Math.sin(v_4b6102);
          const v_2869c1 = v_8d41d7(`skin.concerns.${v_62eb5a(v_b24339)}`);
          return (
            <SvgText
              key={v_b24339}
              x={v_beb3a8}
              y={v_37b111}
              fill={v_1bfbd0.text}
              fontSize={9}
              fontFamily={v_843035.medium}
              textAnchor="middle"
            >
              {v_2869c1}
            </SvgText>
          );
        })}
      </Svg>
      <View style={v_fbfcbd.legend}>
        <View style={v_fbfcbd.legendItem}>
          <View style={[v_fbfcbd.legendDot, { backgroundColor: v_7d1fc2 }]} />
          <Text style={v_fbfcbd.legendText}>{v_c1c940(v_fe1802.date)}</Text>
        </View>
        <Ionicons name="arrow-forward" size={14} color={v_1bfbd0.secondaryText} />
        <View style={v_fbfcbd.legendItem}>
          <View style={[v_fbfcbd.legendDot, { backgroundColor: v_1d3289 }]} />
          <Text style={v_fbfcbd.legendText}>{v_c1c940(v_1a2523.date)}</Text>
        </View>
      </View>
      <Text style={v_fbfcbd.dateLabel}>
        {v_8d41d7('skin_comparison.analysis_dates', {
          dateA: `${v_1a2523.date.replace(/-/g, '.')} ${v_22e3c0(v_8d41d7, v_1a2523.date, v_1a2523.time)}`,
          dateB: `${v_fe1802.date.replace(/-/g, '.')} ${v_22e3c0(v_8d41d7, v_fe1802.date, v_fe1802.time)}`,
        })}
      </Text>
    </View>
  );
}

const v_fbfcbd = v_472849.create({
  wrap: { alignItems: 'center', marginVertical: v_9b1a04.large },
  legend: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: v_9b1a04.medium },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: v_ef658a.small, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  dateLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
});

function v_5db904({
  recordA: v_1a2523,
  recordB: v_fe1802,
  dateStrA: v_335f4f,
  dateStrB: v_8f59fa,
  timeStrA: v_57299c,
  timeStrB: v_67c50b,
  selectedKeys: v_122c3a,
  backgroundColor: v_f7b9fb,
  comparisonData: v_b34779,
}: {
  recordA: v_cb37be;
  recordB: v_cb37be;
  dateStrA: string;
  dateStrB: string;
  timeStrA?: string;
  timeStrB?: string;
  selectedKeys: string[];
  backgroundColor?: string;
  comparisonData?: v_b918db['comparison'];
}) {
  const { t: v_8d41d7 } = v_772971();
  const v_e60572 = (v_b24339, v_0debf4) =>
    v_8d41d7(`skin.concerns.${v_62eb5a(v_b24339)}`) || v_0debf4;

  const v_e66bb4 = v_122c3a;

  return (
    <View style={[v_86ef3a.wrap, v_f7b9fb && { backgroundColor: v_f7b9fb }]}>
      <View style={v_86ef3a.headerRow}>
        <Text style={[v_86ef3a.cellLabel, v_86ef3a.headerCell]}>
          {v_8d41d7('skin_comparison.item')}
        </Text>
        <View style={v_86ef3a.cellDateContainer}>
          <Text style={[v_86ef3a.cellDate, v_86ef3a.headerCell]} numberOfLines={1}>
            {v_335f4f}
          </Text>
          {v_57299c && (
            <Text style={v_86ef3a.cellTime} numberOfLines={1}>
              {v_57299c}
            </Text>
          )}
        </View>
        <View style={v_86ef3a.cellDateContainer}>
          <Text style={[v_86ef3a.cellDate, v_86ef3a.headerCell]} numberOfLines={1}>
            {v_8f59fa}
          </Text>
          {v_67c50b && (
            <Text style={v_86ef3a.cellTime} numberOfLines={1}>
              {v_67c50b}
            </Text>
          )}
        </View>
      </View>
      {v_e66bb4.map((v_b24339) => {
        const v_edcbf2 = v_854a88(v_1a2523, v_b24339);
        const v_6682ac = v_854a88(v_fe1802, v_b24339);
        const v_468f95 = v_1a2523.items.find((v_ebec57) => v_ebec57.key === v_b24339 || v_62eb5a(v_ebec57.key) === v_b24339);
        const v_2869c1 = v_468f95 ? v_e60572(v_468f95.key, v_468f95.label) : v_8d41d7(`skin.concerns.${v_62eb5a(v_b24339)}`) || v_b24339;

        const v_a41a1b = v_b34779?.analysis_changes?.[v_b24339]?.ui_score?.diff ?? (v_edcbf2 - v_6682ac);
        return (
          <View key={v_b24339} style={v_86ef3a.dataRow}>
            <Text style={v_86ef3a.cellLabel}>
              {v_2869c1}
            </Text>
            <View style={v_86ef3a.scoreCell}>
              <Text style={[v_86ef3a.cellScore, { color: v_53f592(v_edcbf2) }]}>
                {v_edcbf2 || '-'}
                {v_a41a1b !== 0 && (
                  <Text style={[v_86ef3a.diffInline, { color: v_a41a1b > 0 ? '#22C55E' : '#DC2626' }]}>
                    {' '}({v_a41a1b > 0 ? '+' : ''}{v_a41a1b})
                  </Text>
                )}
              </Text>
            </View>
            <Text style={[v_86ef3a.cellScore, { color: v_53f592(v_6682ac) }]}>
              {v_6682ac || '-'}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const v_86ef3a = v_472849.create({
  wrap: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    overflow: 'hidden',
    marginHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    backgroundColor: '#EFF6FF',
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.small + 4,
    paddingHorizontal: v_9b1a04.large,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
  },
  cellLabel: {
    flex: 1.5,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  cellDateContainer: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellDate: {
    textAlign: 'center',
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  cellTime: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
  cellScore: {
    width: 90,
    textAlign: 'center',
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
  },
  scoreCell: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diffInline: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
  },
  headerCell: {
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
});

const v_ef54d6 = (a: v_cb37be, b: v_cb37be): [v_cb37be, v_cb37be] => {
  const v_b76717 = v_779914.date.localeCompare(v_148ff6.date);
  if (v_b76717 !== 0) return v_b76717 > 0 ? [v_779914, v_148ff6] : [v_148ff6, v_779914];
  return v_779914.time.localeCompare(v_148ff6.time) > 0 ? [v_779914, v_148ff6] : [v_148ff6, v_779914];
};

function v_11cdee({ name: v_1833e7 }: { name: string }) {
  return (
    <View style={v_e186fe.wrapper}>
      <View style={v_e186fe.avatar}>
        <Ionicons name="person-outline" size={16} color="#615FFF" />
      </View>
      <Text style={v_e186fe.text} numberOfLines={1}>
        {v_1833e7}
      </Text>
    </View>
  );
}

const v_e186fe = v_472849.create({
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

export default function v_8b28f5({ route: v_c7daf6, navigation: v_c65f5d }: Props) {
  const { t: v_8d41d7 } = v_772971();
  const { userName: v_f08a5e } = v_c7daf6.params;
  const { skinAcneHidden: v_487e04 } = v_1f53bf();
  const v_f84dbf = v_df9f57(
    () => v_3a27d9.filter((v_0eb677) => !(v_487e04 && v_f5ba54(v_0eb677))),
    [v_487e04]
  );

  const [v_dcc13b, v_1a48f5] = v_5ab095<v_cb37be | null>(null);
  const [v_7f4b4c, v_4d426d] = v_5ab095<v_cb37be | null>(null);
  const [v_b34779, v_8c8090] = v_5ab095<v_b918db['comparison'] | null>(null);
  const [v_cd31a8, v_deef62] = v_5ab095(true);
  const [v_95616f, v_885e0e] = v_5ab095<Error | null>(null);

  v_c4deb2(() => {
    const v_4cdaab = async () => {
      try {
        v_deef62(true);
        v_885e0e(null);

        const v_6e9c44 = parseInt(v_c7daf6.params.recordA.id, 10);
        const v_57c916 = parseInt(v_c7daf6.params.recordB.id, 10);

        if (isNaN(v_6e9c44) || isNaN(v_57c916)) {
          throw new Error('유효하지 않은 기록 ID입니다.');
        }

        if (__DEV__) {
          console.log('[SkinComparisonScreen] 비교 API 호출:', {
            recordIds: [v_6e9c44, v_57c916],
          });
        }

        const v_3393e3 = await v_3680d3([v_6e9c44, v_57c916]);

        if (__DEV__) {
          console.log('[SkinComparisonScreen] 비교 API 응답:', {
            recordsCount: v_3393e3.skin_datas.length,
            hasComparison: !!v_3393e3.comparison,
            comparisonKeys: v_3393e3.comparison?.analysis_changes ? Object.keys(v_3393e3.comparison.analysis_changes) : [],
          });
        }

        const v_dc0b95 = v_852b5b(v_3393e3.skin_datas[0], v_8d41d7);
        const v_40a830 = v_852b5b(v_3393e3.skin_datas[1], v_8d41d7);

        v_1a48f5(v_dc0b95);
        v_4d426d(v_40a830);
        v_8c8090(v_3393e3.comparison);
      } catch (v_5e9bfe) {
        console.error('[SkinComparisonScreen] 비교 데이터 로드 실패:', v_5e9bfe);
        v_885e0e(v_5e9bfe instanceof Error ? v_5e9bfe : new Error('비교 데이터를 불러오는데 실패했습니다.'));

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

        v_889fad(
          '오류',
          v_5e9bfe instanceof Error ? v_5e9bfe.message : '비교 데이터를 불러오는데 실패했습니다.',
          [
            {
              text: '확인',
              onPress: () => v_c65f5d.goBack(),
            },
          ]
        );
      } finally {
        v_deef62(false);
      }
    };

    v_4cdaab();

  }, [v_c7daf6.params.recordA.id, v_c7daf6.params.recordB.id, v_c65f5d, v_8d41d7]);

  const [v_1a2523, v_fe1802] = v_df9f57(() => {
    const v_103ac1 = v_dcc13b || v_c7daf6.params.recordA;
    const v_3dbc0d = v_7f4b4c || v_c7daf6.params.recordB;
    return v_ef54d6(v_103ac1, v_3dbc0d);
  }, [v_dcc13b, v_7f4b4c, v_c7daf6.params.recordA, v_c7daf6.params.recordB]);

  const [v_e7ae15, v_20745f] = v_5ab095(false);
  const [v_1286d2, v_1cdb0e] = v_5ab095(false);
  const [v_43d0c0, v_74570e] = v_5ab095<string | null>(null);
  const [v_474c16, v_41fe7e] = v_5ab095(false);
  const [v_782929, v_3cc752] = v_5ab095<Set<string>>(
    () => new Set(v_f84dbf)
  );

  v_c4deb2(() => {
    v_3cc752((v_ba2215) => {
      const v_a448ad = new Set([...v_ba2215].filter((v_0eb677) => v_f84dbf.includes(v_0eb677)));
      return v_a448ad.size === v_ba2215.size ? v_ba2215 : v_a448ad;
    });
  }, [v_f84dbf]);

  const v_0ab8c5 = (v_b24339) => {
    v_3cc752((v_ba2215) => {
      const v_a448ad = new Set(v_ba2215);
      if (v_a448ad.has(v_b24339)) {
        if (v_a448ad.size <= v_031985) return v_ba2215;
        v_a448ad.delete(v_b24339);
      } else {
        v_a448ad.add(v_b24339);
      }
      return v_a448ad;
    });
  };

  const v_45e488 = () => v_3cc752(new Set(v_f84dbf));
  const v_cebe2b = () => {
    if (v_782929.size <= v_031985) return;
    v_3cc752(new Set(v_f84dbf.slice(0, v_031985)));
  };

  const v_2a9eab = v_782929.size > v_031985;

  const v_831a4c = v_df9f57(
    () => v_f84dbf.filter((v_0eb677) => v_782929.has(v_0eb677)),
    [v_f84dbf, v_782929]
  );

  const v_9f6fdd = (v_8dffde, v_f985e6) => v_22e3c0(v_8d41d7, v_8dffde, v_f985e6);

  const v_db73eb = v_b34779?.overall_score_changes?.diff ?? (v_1a2523.overallScore - v_fe1802.overallScore);

  const v_9de26b = async () => {
    v_20745f(true);
    if (v_43d0c0) {
      return; 
    }

    v_1cdb0e(true);
    try {
      const v_6e9c44 = parseInt(v_c7daf6.params.recordA.id, 10);
      const v_57c916 = parseInt(v_c7daf6.params.recordB.id, 10);

      const v_43c42e = await v_df51cf([v_6e9c44, v_57c916]);
      v_74570e(v_43c42e);
    } catch (v_5e9bfe) {
      console.error('[SkinComparisonScreen] AI 분석 실패:', v_5e9bfe);
      v_889fad('오류', 'AI 분석 결과를 불러오는데 실패했습니다.');
      v_20745f(false);
    } finally {
      v_1cdb0e(false);
    }
  };

  if (v_cd31a8) {
    return (
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <Header
          variant="healthAnalysis"
          title={v_8d41d7('skin_comparison.title')}
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />
        <View style={v_d81136.loadingContainer}>
          <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          <Text style={v_d81136.loadingText}>비교 데이터를 불러오는 중...</Text>
        </View>
      </SafeView>
    );
  }

  if (v_95616f) {
    return (
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <Header
          variant="healthAnalysis"
          title={v_8d41d7('skin_comparison.title')}
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />
        <View style={v_d81136.errorContainer}>
          <Ionicons name="alert-circle-outline" size={48} color={v_1bfbd0.error} />
          <Text style={v_d81136.errorText}>{v_95616f.message}</Text>
          <TouchableOpacity
            style={v_d81136.retryButton}
            onPress={() => v_c65f5d.goBack()}
          >
            <Text style={v_d81136.retryButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </SafeView>
    );
  }

  return (
    <SafeView style={v_d81136.screen} showBottomBackground={false}>
      <Header
        variant="healthAnalysis"
        title={v_8d41d7('skin_comparison.title')}
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
        rightAccessory={
          <TouchableOpacity
            style={v_d81136.headerItemSelectBtn}
            onPress={() => v_41fe7e(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="checkbox" size={24} color={v_1bfbd0.buttonPrimary} />
          </TouchableOpacity>
        }
      />
      <SafeScrollView
        contentContainerStyle={v_d81136.container}
        showsVerticalScrollIndicator={false}
      >
        {}
        <View style={v_d81136.sectionTitleRow}>
          <Text style={v_d81136.sectionTitle}>{v_8d41d7('skin_comparison.compare_analysis')}</Text>
          <UserNameDisplay name={v_f08a5e || v_8d41d7('health_analysis.default_user_name', '나')} />
        </View>
        <SkinRadarChart recordA={v_1a2523} recordB={v_fe1802} selectedKeys={v_831a4c} />

        {}
        <Text style={v_d81136.sectionTitle}>{v_8d41d7('skin_comparison.full_results')}</Text>
        <SkinComparisonTable
          recordA={v_1a2523}
          recordB={v_fe1802}
          dateStrA={v_c1c940(v_1a2523.date)}
          dateStrB={v_c1c940(v_fe1802.date)}
          timeStrA={v_22e3c0(v_8d41d7, v_1a2523.date, v_1a2523.time)}
          timeStrB={v_22e3c0(v_8d41d7, v_fe1802.date, v_fe1802.time)}
          selectedKeys={v_831a4c}
          backgroundColor={v_1bfbd0.white}
          comparisonData={v_b34779 ?? undefined}
        />

        {}
        <View style={v_d81136.aiSection}>
          {!v_e7ae15 ? (
            <TouchableOpacity
              testID="skin-comparison-ai-start"
              style={v_d81136.aiStartCard}
              onPress={v_9de26b}
              activeOpacity={0.9}
            >
              <ExpoLinearGradient
                colors={['#7C6BFF', '#5B4BD4', '#4A3BC4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.aiStartCardGradient}
              >
                <View style={v_d81136.aiStartCardHeader}>
                  <View style={v_d81136.aiStartCardIconWrap}>
                    <Ionicons name="sparkles" size={24} color="#fff" />
                  </View>
                  <Text style={v_d81136.aiStartCardTitle}>{v_8d41d7('skin_comparison.ai_card_title')}</Text>
                </View>
                <Text style={v_d81136.aiStartCardDesc}>{v_8d41d7('skin_comparison.ai_card_desc_line1')}</Text>
                <Text style={v_d81136.aiStartCardDesc}>{v_8d41d7('skin_comparison.ai_card_desc_line2')}</Text>
                <View style={v_d81136.aiStartBtnWrap}>
                  <Text style={v_d81136.aiStartBtnText}>{v_8d41d7('skin_comparison.ai_start_btn')}</Text>
                </View>
              </ExpoLinearGradient>
            </TouchableOpacity>
          ) : v_1286d2 ? (
            <View style={v_d81136.aiResultsContainer}>
              <View style={v_d81136.aiLoadingContainer}>
                <ActivityIndicator size="large" color="#7C6BFF" />
                <Text style={v_d81136.aiLoadingText}>AI 힌티가 생각중입니다...</Text>
              </View>
            </View>
          ) : (
            <View style={v_d81136.aiResultsContainer}>
              <View style={v_d81136.aiResultsHeader}>
                <View style={v_d81136.aiResultsHeaderIcon}>
                  <Ionicons name="analytics-outline" size={18} color="#fff" />
                </View>
                <Text style={v_d81136.aiResultsHeaderTitle}>{v_8d41d7('skin_comparison.ai_results_title')}</Text>
              </View>

              {v_43d0c0 ? (
                <View style={v_d81136.aiResultCard}>
                  <View style={v_d81136.aiResultCardHeader}>
                    <Ionicons name="document-text" size={18} color="#333" />
                    <Text style={v_d81136.aiResultCardTitle}>AI 뷰티 힌티 비교 분석 결과</Text>
                  </View>
                  <Text style={[v_d81136.aiResultCardContent, { lineHeight: 24 }]}>
                    {v_43d0c0}
                  </Text>
                </View>
              ) : (
                <View style={v_d81136.aiResultCard}>
                  <Text style={v_d81136.aiResultCardContent}>
                    분석 결과를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
                  </Text>
                </View>
              )}

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <Ionicons name="warning" size={18} color="#333" />
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('skin_comparison.ai_disclaimer_title')}</Text>
                </View>
                <Text style={v_d81136.aiResultCardContent}>{v_326be8.OS === 'ios' ? v_8d41d7('skin_comparison.ai_disclaimer_ios') : v_8d41d7('skin_comparison.ai_disclaimer')}</Text>
              </View>
            </View>
          )}
        </View>
      </SafeScrollView>

      <Modal
        visible={v_474c16}
        transparent
        animationType="fade"
        onRequestClose={() => v_41fe7e(false)}
      >
        <Pressable
          style={v_d81136.modalOverlay}
          onPress={() => v_41fe7e(false)}
        >
          <Pressable style={v_d81136.modalContent} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            <View style={v_d81136.modalHeader}>
              <Text style={v_d81136.modalTitle}>{v_8d41d7('health_records.item_select_modal_title')}</Text>
              <TouchableOpacity onPress={() => v_41fe7e(false)}>
                <Ionicons name="close" size={24} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            <View style={v_d81136.modalActions}>
              <TouchableOpacity onPress={v_45e488} style={v_d81136.modalActionBtn}>
                <Text style={v_d81136.modalActionText}>{v_8d41d7('health_records.select_all')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={v_cebe2b}
                style={[v_d81136.modalActionBtn, !v_2a9eab && v_d81136.modalActionBtnDisabled]}
                disabled={!v_2a9eab}
              >
                <Text style={[v_d81136.modalActionText, !v_2a9eab && v_d81136.modalActionTextDisabled]}>
                  {v_8d41d7('health_records.deselect_all')}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={v_d81136.modalList} showsVerticalScrollIndicator={false}>
              {v_f84dbf.map((v_b24339) => {
                const v_2869c1 = v_8d41d7(`skin.concerns.${v_62eb5a(v_b24339)}`);
                const v_05e77d = v_782929.has(v_b24339);
                const v_3873da = v_05e77d && v_782929.size <= v_031985;
                return (
                  <TouchableOpacity
                    key={v_b24339}
                    style={[v_d81136.modalItemRow, v_3873da && v_d81136.modalItemRowDisabled]}
                    onPress={() => v_0ab8c5(v_b24339)}
                    activeOpacity={0.7}
                    disabled={v_3873da}
                  >
                    <Ionicons
                      name={v_05e77d ? 'checkbox' : 'square-outline'}
                      size={22}
                      color={v_05e77d ? v_1bfbd0.buttonPrimary : v_1bfbd0.border}
                    />
                    <Text style={v_d81136.modalItemLabel}>{v_2869c1}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              style={v_d81136.modalConfirmBtn}
              onPress={() => v_41fe7e(false)}
            >
              <Text style={v_d81136.modalConfirmText}>{v_8d41d7('common.confirm')}</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeView>
  );
}

const v_d81136 = v_472849.create({
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
  screen: { flex: 1, },
  headerRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  headerItemSelectBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: v_9b1a04.small,
  },
  container: { paddingBottom: v_9b1a04.xlarge * 2, backgroundColor: v_1bfbd0.background },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: v_9b1a04.large,
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  sectionTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginHorizontal: v_9b1a04.large,
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  aiSection: {
    marginHorizontal: v_9b1a04.large,
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
  },
  aiStartCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  aiStartCardGradient: {
    padding: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.xlarge + 8,
  },
  aiStartCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: v_9b1a04.medium,
  },
  aiStartCardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiStartCardTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#fff',
  },
  aiStartCardDesc: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#fff',
    lineHeight: 22,
    marginBottom: 4,
    opacity: 0.95,
  },
  aiStartBtnWrap: {
    marginTop: v_9b1a04.large,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(124,107,255,0.5)',
  },
  aiStartBtnText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: '#5B4BD4',
  },
  aiResultsContainer: {
    backgroundColor: '#EDE9F5',
    borderRadius: 16,
    padding: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge,
  },
  aiResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: v_9b1a04.large,
  },
  aiResultsHeaderIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiResultsHeaderTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiLoadingContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiLoadingText: {
    marginTop: 12,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#7C6BFF',
  },
  aiResultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  aiResultCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: v_9b1a04.small,
  },
  aiResultCardIconSquare: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiResultCardTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiResultCardContent: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    lineHeight: 20,
  },
  aiImprovedList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  aiImprovedItem: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  aiAttentionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aiAttentionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  aiPlanList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  aiPlanBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3B72F2',
    marginTop: 6,
  },
  aiPlanItem: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    lineHeight: 20,
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: v_9b1a04.large,
  },
  modalContent: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    width: '100%',
    maxHeight: '80%',
    padding: v_9b1a04.large,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  modalTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: v_9b1a04.medium,
  },
  modalActionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.backgroundSecondary,
  },
  modalActionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.buttonPrimary,
  },
  modalActionBtnDisabled: {
    opacity: 0.5,
  },
  modalActionTextDisabled: {
    color: v_1bfbd0.secondaryText,
  },
  modalList: {
    maxHeight: 320,
    marginBottom: v_9b1a04.medium,
  },
  modalItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  modalItemLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  modalItemRowDisabled: {
    opacity: 0.7,
  },
  modalConfirmBtn: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalConfirmText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: '#fff',
  },
});
