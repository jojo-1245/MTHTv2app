import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_cf9c33, v_39a996, v_472849, v_326be8 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_8b95d1, type v_d74666 } from '../services/supplementApi';
import { v_e4a763 } from '../utils/env';
import { v_9f896c } from '../utils/shopProductKind';

function v_295d07(v_f71b56): string | undefined {
  if (!v_f71b56) return undefined;
  if (/^https?:\/\//i.test(v_f71b56)) return v_f71b56;
  return `${v_e4a763().GATEWAY}${v_f71b56}`;
}

export function v_0b3fa9(v_e521b9): Record<string, { ui_score: number }> | null {
  const v_9ef443 = (v_e521b9 as { result?: { results?: { output?: unknown } } } | null)
    ?.result?.results?.output;
  if (!Array.isArray(v_9ef443)) return null;
  const v_8dcb51 = {};
  for (const v_8c0b26 of v_9ef443) {
    if (!v_8c0b26 || typeof v_8c0b26 !== 'object') continue;
    const v_3ac7e7 = v_8c0b26 as { type?: string; ui_score?: number };
    if (!v_3ac7e7.type || v_3ac7e7.type === 'all' || v_3ac7e7.type === 'resize_image' || v_3ac7e7.type === 'skin_age') continue;
    if (typeof v_3ac7e7.ui_score !== 'number') continue;
    v_8dcb51[v_3ac7e7.type] = { ui_score: v_3ac7e7.ui_score };
  }
  return Object.keys(v_8dcb51).length > 0 ? v_8dcb51 : null;
}

function v_28895b(it: v_d74666, v_a56041): string {
  if (v_23805a.shopItemId) return `${v_23805a.label ?? 'ai'}-${v_23805a.shopItemId}`;
  if (v_23805a.gunkiId) return `gunki-${v_23805a.gunkiId}`;
  return `idx-${v_a56041}`;
}

interface Props {
  source: 'health' | 'skin';

  vitalSigns?: Record<string, unknown> | null;

  analysisResult?: Record<string, unknown> | null;
  sex?: 'male' | 'female' | null;
}

export default function v_a5a634({
  source: v_04e790,
  vitalSigns: v_0946e7,
  analysisResult: v_e521b9,
  sex: v_d1d54c,
}: Props): v_a3453e.JSX.Element | null {
  const { t: v_8d41d7 } = v_772971();
  const v_dea7c3 = v_04e790 === 'health' ? v_0946e7 : v_e521b9;
  const v_89240d = v_dea7c3 ? JSON.stringify(v_dea7c3) : '';
  const [v_4622b9, v_fa923c] = v_5ab095<v_d74666[]>([]);
  const [v_ab4803, v_ae4844] = v_5ab095<'idle' | 'loading' | 'ready' | 'error'>('idle');

  v_c4deb2(() => {
    if (!v_89240d) {
      v_fa923c([]);
      v_ae4844('idle');
      return;
    }
    let v_759436 = true;
    v_ae4844('loading');
    v_8b95d1({
      source: v_04e790,
      platform: v_326be8.OS === 'ios' ? 'ios' : 'android',
      vitalSigns: v_04e790 === 'health' ? (v_0946e7 ?? undefined) : undefined,
      analysisResult: v_04e790 === 'skin' ? (v_e521b9 ?? undefined) : undefined,
      sex: v_d1d54c ?? null,
    })
      .then((v_cb35cb) => {
        if (!v_759436) return;
        if (v_326be8.OS === 'ios' && v_cb35cb.safeMode === false) {
          v_fa923c([]);
          v_ae4844('ready');
          return;
        }
        v_fa923c(v_cb35cb.items);
        v_ae4844('ready');
      })
      .catch((v_9e86fd) => {
        const v_49263d = v_9e86fd as { message?: string; response?: { status?: number; data?: unknown } };
        console.warn('[PharmacistSupplementList] 추천 목록 실패', {
          message: v_49263d?.message,
          status: v_49263d?.response?.status,
          data: v_49263d?.response?.data,
        });
        if (!v_759436) return;
        v_fa923c([]);
        v_ae4844('error');
      });
    return () => {
      v_759436 = false;
    };

  }, [v_04e790, v_89240d, v_d1d54c]);

  if (!v_89240d) return null;

  return (
    <View style={v_d81136.section} testID="pharmacist-supplement-list">
      <Text style={v_d81136.title}>{v_8d41d7('supplements.page_title')}</Text>
      {v_ab4803 === 'loading' ? (
        <View style={v_d81136.statusBox}>
          <ActivityIndicator color="#111" />
          <Text style={v_d81136.statusText}>{v_8d41d7('supplements.list_loading')}</Text>
        </View>
      ) : null}
      {v_ab4803 === 'error' ? (
        <Text style={v_d81136.statusText}>{v_8d41d7('supplements.list_failed')}</Text>
      ) : null}
      {v_ab4803 === 'ready' && v_4622b9.length === 0 ? (
        <Text style={v_d81136.statusText}>{v_8d41d7('supplements.list_empty')}</Text>
      ) : null}
      {v_4622b9.map((v_8c0b26, v_a56041) => {
        const v_a98e33 = v_8c0b26.label === 'extra';
        return (
          <View key={v_28895b(v_8c0b26, v_a56041)} style={v_d81136.row}>
            {v_295d07(v_8c0b26.imageUrl) ? (
              <Image source={{ uri: v_295d07(v_8c0b26.imageUrl) }} style={v_d81136.image} />
            ) : (
              <View style={[v_d81136.image, v_d81136.imagePlaceholder]} />
            )}
            <View style={v_d81136.body}>
              <Text style={[v_d81136.badge, v_a98e33 ? v_d81136.badgeExtra : v_d81136.badgeAi]}>
                {v_a98e33 ? v_8d41d7('supplements.label_extra') : v_8d41d7('supplements.label_ai')}
              </Text>
              <Text style={v_d81136.name} numberOfLines={2}>{v_8c0b26.productName}</Text>
              <Text style={v_d81136.reason} numberOfLines={3}>{v_8c0b26.reason}</Text>
              {v_8c0b26.price != null && v_8c0b26.price > 0 ? (
                <Text style={v_d81136.price}>
                  {Number(v_8c0b26.price).toLocaleString('ko-KR')}
                  {v_8d41d7('supplements.price_won')}
                  {v_9f896c({ shopItemId: v_8c0b26.shopItemId }) ? (
                    <Text style={v_d81136.monthInline}> · {v_8d41d7('supplements.month_supply')}</Text>
                  ) : null}
                </Text>
              ) : null}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const v_d81136 = v_472849.create({
  section: { marginTop: 16, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 10, paddingHorizontal: 4 },
  statusBox: { alignItems: 'center', paddingVertical: 16, gap: 8 },
  statusText: { fontSize: 13, color: '#6B7280', paddingHorizontal: 4, paddingVertical: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#f4f4f4' },
  imagePlaceholder: { alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, marginLeft: 10 },
  badge: {
    alignSelf: 'flex-start',
    overflow: 'hidden',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  badgeAi: { backgroundColor: '#111', color: '#fff' },
  badgeExtra: { backgroundColor: '#F3F4F6', color: '#374151' },
  name: { fontSize: 14, fontWeight: '700', color: '#111' },
  reason: { fontSize: 12, color: '#4B5563', marginTop: 4 },
  price: { fontSize: 13, fontWeight: '700', color: '#111', marginTop: 6 },
  monthInline: { fontSize: 12, fontWeight: '500', color: '#6B7280' },
});
