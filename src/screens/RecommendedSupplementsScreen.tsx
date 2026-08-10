import v_a3453e, { v_de06a3, v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_cf9c33,
  v_9cabcb,
  v_4623af,
  v_472849,
  v_326be8,
  v_39a996,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_729608, v_570c34, v_1c1837 } from '../components';
import { v_4a4fc7, type v_d74666 } from '../services/supplementApi';
import { v_ffe36d } from '../hooks/useLinkOpener';
import { v_e4a763 } from '../utils/env';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';
import { v_9f896c } from '../utils/shopProductKind';

type Props = v_432191<v_8ad91b, 'RecommendedSupplements'>;

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

const RecommendedSupplementsScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { openShopCheckout: v_565824, openItemExplan: v_9dcb16, loading: v_683210 } = v_ffe36d();
  const [v_4622b9, v_fa923c] = v_5ab095<v_d74666[]>([]);
  const [v_11b55b, v_9d4998] = v_5ab095(false);
  const [v_7b301e, v_62e455] = v_5ab095(true);
  const [v_1c5924, v_fb4b30] = v_5ab095<Set<string>>(new Set());

  v_cf763b(
    v_de06a3(() => {
      let v_759436 = true;
      v_62e455(true);
      v_4a4fc7()
        .then((v_cb35cb) => {
          if (!v_759436) return;
          if (v_326be8.OS === 'ios' && v_cb35cb.safeMode === false) {
            v_fa923c([]);
            v_9d4998(false);
            v_fb4b30(new Set());
            return;
          }
          v_fa923c(v_cb35cb.items);
          v_9d4998(v_cb35cb.safeMode);
          v_fb4b30(new Set());
        })
        .catch((v_9e86fd) => {
          console.log('[RecommendedSupplements] 로드 실패', v_9e86fd?.message);
          if (v_759436) {
            v_fa923c([]);
            v_fb4b30(new Set());
          }
        })
        .finally(() => {
          if (v_759436) v_62e455(false);
        });
      return () => {
        v_759436 = false;
      };
    }, []),
  );

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

  return (
    <MainLayout>
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('supplements.page_title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView
          style={v_d81136.scroll}
          contentContainerStyle={v_d81136.content}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          {v_7b301e ? (
            <View style={v_d81136.center}>
              <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
            </View>
          ) : v_4622b9.length === 0 ? (
            <View style={v_d81136.center}>
              <Text style={v_d81136.empty}>{v_8d41d7('supplements.page_empty')}</Text>
            </View>
          ) : (
            <>
              <Text style={v_d81136.hint}>{v_8d41d7('supplements.month_supply_hint')}</Text>
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
                    <View style={[v_d81136.row, v_587413 && v_d81136.rowSelected]}>
                      <TouchableOpacity
                        style={v_d81136.checkCol}
                        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                        activeOpacity={v_a98e33 && v_f8bd01 ? 0.7 : 1}
                        disabled={!v_a98e33 || !v_f8bd01}
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: v_587413, disabled: !v_a98e33 || !v_f8bd01 }}
                        onPress={() => v_8c0b26.shopItemId && v_5cb053(v_8c0b26.shopItemId)}
                      >
                        <View style={[v_d81136.check, v_587413 && v_d81136.checkOn]}>
                          {v_587413 ? <Text style={v_d81136.checkMark}>✓</Text> : null}
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={v_d81136.detailArea}
                        activeOpacity={v_f8bd01 ? 0.7 : 1}
                        disabled={!v_f8bd01}
                        onPress={() => v_f8bd01 && void v_9dcb16(v_8c0b26.shopItemId)}
                      >
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
                            {v_9f896c({ shopItemId: v_8c0b26.shopItemId }) ? (
                              <Text style={v_d81136.monthBadge}>{v_8d41d7('supplements.month_supply')}</Text>
                            ) : null}
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
                              {v_9f896c({ shopItemId: v_8c0b26.shopItemId }) ? (
                                <Text style={v_d81136.monthInline}> · {v_8d41d7('supplements.month_supply')}</Text>
                              ) : null}
                            </Text>
                          ) : null}
                          {v_f8bd01 ? (
                            <Text style={v_d81136.detailHint}>{v_8d41d7('supplements.detail_hint')}</Text>
                          ) : null}
                        </View>
                      </TouchableOpacity>
                    </View>
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
                  style={[
                    v_d81136.checkoutBtn,
                    (!v_5e422d.length || v_683210) && v_d81136.checkoutBtnDisabled,
                  ]}
                  disabled={!v_5e422d.length || v_683210}
                  onPress={v_3f0264}
                >
                  <Text style={v_d81136.checkoutBtnText}>
                    {v_8d41d7('supplements.checkout_cta')}
                    {v_5e422d.length ? ` (${v_5e422d.length})` : ''}
                  </Text>
                </TouchableOpacity>
              </View>
              {v_11b55b ? (
                <Text style={v_d81136.safeNote}>{v_8d41d7('supplements.safe_mode_note')}</Text>
              ) : null}
            </>
          )}
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: { flex: 1, backgroundColor: v_1bfbd0.background },
  scroll: { flex: 1 },
  content: { padding: v_9b1a04.medium, paddingBottom: 96 },
  center: { paddingVertical: 48, alignItems: 'center' },
  empty: { fontSize: v_ef658a.medium, color: v_1bfbd0.secondaryText, textAlign: 'center' },
  hint: {
    fontSize: 12,
    color: v_1bfbd0.secondaryText,
    marginBottom: 12,
    fontFamily: v_843035.regular,
  },
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
  detailArea: { flex: 1, flexDirection: 'row', alignItems: 'flex-start' },
  detailHint: { fontSize: 11, color: '#1A56DB', marginTop: 6 },
  image: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#f4f4f4' },
  imagePlaceholder: { alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, marginLeft: 10 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4, flexWrap: 'wrap', gap: 6 },
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
  monthBadge: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#FEF3C7',
    color: '#92400E',
  },
  includedHint: { fontSize: 10, color: '#888' },
  name: { fontSize: 14, fontWeight: '600' },
  reason: { fontSize: 12, color: '#666', marginTop: 4 },
  price: { fontSize: 13, fontWeight: '600', marginTop: 4, color: '#111' },
  monthInline: { fontSize: 12, fontWeight: '500', color: '#92400E' },
  footer: {
    marginTop: 4,
    marginBottom: 16,
    paddingTop: 12,
    paddingBottom: 8,
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
  safeNote: { marginTop: 12, fontSize: 11, color: '#888', textAlign: 'center' },
});

export default v_5109e7;
