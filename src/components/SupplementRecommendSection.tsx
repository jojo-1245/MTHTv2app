import v_a3453e, { v_c4deb2, v_df9f57, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_cf9c33, v_9cabcb, v_4623af, v_472849, v_326be8 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_ec0289, type v_d74666, type v_5a09f2 } from '../services/supplementApi';
import { v_ffe36d } from '../hooks/useLinkOpener';
import { v_e4a763 } from '../utils/env';

function v_295d07(v_f71b56): string | undefined {
  if (!v_f71b56) return undefined;
  if (/^https?:\/\//i.test(v_f71b56)) return v_f71b56;
  return `${v_e4a763().GATEWAY}${v_f71b56}`;
}

function v_28895b(it: v_d74666, v_a56041): string {
  if (v_23805a.shopItemId) return `${v_23805a.label ?? 'ai'}-${v_23805a.shopItemId}`;
  if (v_23805a.gunkiId) return `gunki-${v_23805a.gunkiId}`;
  return `idx-${v_a56041}`;
}

interface SupplementRecommendSectionProps {
  source: v_5a09f2;
  recordId: number | null;
}

export default function v_6f3f7e({
  source: v_04e790,
  recordId: v_fbf3b0,
}: SupplementRecommendSectionProps): v_a3453e.JSX.Element | null {
  const { t: v_8d41d7 } = v_772971();
  const { openShopCheckout: v_565824, loading: v_683210 } = v_ffe36d();
  const [v_4622b9, v_fa923c] = v_5ab095<v_d74666[]>([]);

  const [v_1c5924, v_fb4b30] = v_5ab095<Set<string>>(new Set());

  v_c4deb2(() => {
    let v_759436 = true;
    if (v_fbf3b0 == null) {
      console.log('[SupplementReco] recordId 없음 — 호출 스킵', { source: v_04e790 });
      v_fa923c([]);
      v_fb4b30(new Set());
      return;
    }
    console.log('[SupplementReco] 요청', { source: v_04e790, recordId: v_fbf3b0, platform: v_326be8.OS });
    v_ec0289({ source: v_04e790, recordId: v_fbf3b0, platform: v_326be8.OS as 'ios' | 'android' })
      .then((v_cb35cb) => {
        if (!v_759436) return;
        console.log('[SupplementReco] 응답', { count: v_cb35cb.items.length, safeMode: v_cb35cb.safeMode });

        if (v_326be8.OS === 'ios' && v_cb35cb.safeMode === false) {
          v_fa923c([]);
          v_fb4b30(new Set());
          return;
        }
        v_fa923c(v_cb35cb.items);
        v_fb4b30(new Set());
      })
      .catch((v_9e86fd) => {
        console.log('[SupplementReco] 실패', {
          message: v_9e86fd?.message,
          status: v_9e86fd?.response?.status,
          body: JSON.stringify(v_9e86fd?.response?.data)?.slice(0, 300),
        });
        if (v_759436) {
          v_fa923c([]);
          v_fb4b30(new Set());
        }
      });
    return () => {
      v_759436 = false;
    };
  }, [v_04e790, v_fbf3b0]);

  const v_5e422d = v_df9f57(() => {
    return v_4622b9.filter((v_23805a) => {
      if (!v_23805a.shopItemId) return false;
      if (v_23805a.label === 'extra') return v_1c5924.has(v_23805a.shopItemId);
      return true; 
    });
  }, [v_4622b9, v_1c5924]);

  const v_59c1f2 = v_df9f57(
    () => v_5e422d.reduce((v_dce0a8, v_23805a) => v_dce0a8 + (Number(v_23805a.price) || 0), 0),
    [v_5e422d],
  );

  const v_5cb053 = (v_18ace4) => {
    v_fb4b30((v_ba2215) => {
      const v_a448ad = new Set(v_ba2215);
      if (v_a448ad.has(v_18ace4)) v_a448ad.delete(v_18ace4);
      else v_a448ad.add(v_18ace4);
      return v_a448ad;
    });
  };

  const v_3f0264 = () => {
    const v_52e08b = v_5e422d.map((v_23805a) => v_23805a.shopItemId!).filter(Boolean);
    if (!v_52e08b.length) return;
    void v_565824(v_52e08b, { confirm: true, via: 'ai' });
  };

  if (v_fbf3b0 == null || v_4622b9.length === 0) return null;

  return (
    <View style={v_d81136.section}>
      <Text style={v_d81136.title}>{v_8d41d7('supplements.section_title')}</Text>
      <FlatList
        scrollEnabled={false}
        data={v_4622b9}
        keyExtractor={(v_23805a, v_ebec57) => v_28895b(v_23805a, v_ebec57)}
        renderItem={({ item: v_8c0b26 }) => {
          const v_a98e33 = v_8c0b26.label === 'extra';
          const v_f8bd01 = !!v_8c0b26.shopItemId;

          const v_587413 = !v_a98e33
            ? true
            : !!(v_8c0b26.shopItemId && v_1c5924.has(v_8c0b26.shopItemId));
          return (
            <TouchableOpacity
              style={[v_d81136.row, v_587413 && v_d81136.rowSelected]}
              activeOpacity={v_a98e33 && v_f8bd01 ? 0.7 : 1}
              disabled={!v_a98e33 || !v_f8bd01}
              onPress={() => v_8c0b26.shopItemId && v_5cb053(v_8c0b26.shopItemId)}
            >
              <View style={v_d81136.checkCol}>
                <View style={[v_d81136.check, v_587413 && v_d81136.checkOn]}>
                  {v_587413 ? <Text style={v_d81136.checkMark}>✓</Text> : null}
                </View>
              </View>
              {v_295d07(v_8c0b26.imageUrl) ? (
                <Image source={{ uri: v_295d07(v_8c0b26.imageUrl) }} style={v_d81136.image} />
              ) : (
                <View style={[v_d81136.image, v_d81136.imagePlaceholder]} />
              )}
              <View style={v_d81136.body}>
                <View style={v_d81136.badgeRow}>
                  <Text style={[v_d81136.badge, v_a98e33 ? v_d81136.badgeExtra : v_d81136.badgeAi]}>
                    {v_a98e33 ? v_8d41d7('supplements.label_extra') : v_8d41d7('supplements.label_ai')}
                  </Text>
                  {!v_a98e33 ? (
                    <Text style={v_d81136.includedHint}>{v_8d41d7('supplements.included')}</Text>
                  ) : null}
                </View>
                <Text style={v_d81136.name} numberOfLines={2}>
                  {v_8c0b26.productName}
                </Text>
                <Text style={v_d81136.reason} numberOfLines={3}>
                  {v_8c0b26.reason}
                </Text>
                {v_8c0b26.price != null && v_8c0b26.price > 0 ? (
                  <Text style={v_d81136.price}>
                    {Number(v_8c0b26.price).toLocaleString('ko-KR')}
                    {v_8d41d7('supplements.price_won')}
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={v_d81136.footer}>
        <View>
          <Text style={v_d81136.totalLabel}>{v_8d41d7('supplements.total_label')}</Text>
          <Text style={v_d81136.totalValue}>
            {v_59c1f2.toLocaleString('ko-KR')}
            {v_8d41d7('supplements.price_won')}
          </Text>
        </View>
        <TouchableOpacity
          style={[v_d81136.checkoutBtn, (!v_5e422d.length || v_683210) && v_d81136.checkoutBtnDisabled]}
          disabled={!v_5e422d.length || v_683210}
          onPress={v_3f0264}
        >
          <Text style={v_d81136.checkoutBtnText}>
            {v_8d41d7('supplements.checkout_cta')}
            {v_5e422d.length ? ` (${v_5e422d.length})` : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const v_d81136 = v_472849.create({
  section: { marginTop: 16, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 10, paddingHorizontal: 4 },
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
  rowSelected: { borderColor: '#111' },
  checkCol: { paddingTop: 4, marginRight: 8 },
  check: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkOn: { backgroundColor: '#111', borderColor: '#111' },
  checkMark: { color: '#fff', fontSize: 12, fontWeight: '700' },
  image: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#f4f4f4' },
  imagePlaceholder: { alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, marginLeft: 10 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4, gap: 6 },
  badge: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  badgeAi: { backgroundColor: '#E8F0FE', color: '#1A56DB' },
  badgeExtra: { backgroundColor: '#F3F4F6', color: '#374151' },
  includedHint: { fontSize: 10, color: '#888' },
  name: { fontSize: 14, fontWeight: '600' },
  reason: { fontSize: 12, color: '#666', marginTop: 4 },
  price: { fontSize: 13, fontWeight: '600', marginTop: 4, color: '#111' },
  footer: {
    marginTop: 4,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: { fontSize: 12, color: '#666' },
  totalValue: { fontSize: 18, fontWeight: '700', marginTop: 2 },
  checkoutBtn: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  checkoutBtnDisabled: { opacity: 0.4 },
  checkoutBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
});
