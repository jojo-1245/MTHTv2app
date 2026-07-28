import v_a3453e, { v_de06a3, v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_cf9c33,
  v_9cabcb,
  v_4623af,
  v_472849,
  v_e45a99,
  v_39a996,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_649c8b, v_95c036, type v_e9d814 } from '../services/shopApi';
import { v_ffe36d } from '../hooks/useLinkOpener';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';

const v_ff4e8b = 20;
const v_66f2f8 = 16;

function v_55ca78(v_81e2ef): string {
  if (typeof v_81e2ef !== 'number' || !isFinite(v_81e2ef) || v_81e2ef < 0) return '-';
  return v_81e2ef.toLocaleString('ko-KR') + '원';
}

type LoadState = 'loading' | 'ready' | 'error';

export default function v_ef8a11() {
  const { t: v_8d41d7 } = v_772971();
  const { openShop: v_e184b5 } = v_ffe36d();
  const { navigate: v_9b57fc } = v_a0daa8();
  const { width: v_06db8f } = v_e45a99();
  const [v_4622b9, v_fa923c] = v_5ab095<v_e9d814[]>([]);
  const [v_f4d612, v_13fd7a] = v_5ab095<number | null>(null);
  const [v_b6e533, v_1fa668] = v_5ab095<LoadState>('loading');
  const [v_612e9f, v_575aad] = v_5ab095(false);
  const v_62d405 = v_e662ae(true);
  const v_9468fd = v_e662ae(false);
  const v_8507a8 = v_e662ae(0);

  const v_f6f5de = v_de06a3(async (v_c2b179 = false) => {
    if (v_9468fd.current) return;
    v_9468fd.current = true;
    const v_ca800d = ++v_8507a8.current;
    if (v_c2b179) v_575aad(true);
    else v_1fa668('loading');

    if (__DEV__) {
      console.log('[ShopCarousel] load 시작', { isManualRefresh: v_c2b179, requestId: v_ca800d });
    }

    try {
      const v_cb35cb = await v_649c8b();
      if (!v_62d405.current || v_ca800d !== v_8507a8.current) return;
      v_fa923c(v_cb35cb.items);
      v_13fd7a(v_cb35cb.rate);
      const v_a448ad = v_cb35cb.items.length > 0 ? 'ready' : 'error';
      v_1fa668(v_a448ad);
      if (__DEV__) {
        console.log('[ShopCarousel] load 완료', { requestId: v_ca800d, count: v_cb35cb.items.length, next: v_a448ad });
      }
    } catch (v_9e86fd) {
      if (!v_62d405.current || v_ca800d !== v_8507a8.current) return;
      v_fa923c([]);
      v_13fd7a(null);
      v_1fa668('error');
      if (__DEV__) {
        console.warn('[ShopCarousel] load 실패', { requestId: v_ca800d, error: v_9e86fd });
      }
    } finally {
      if (v_ca800d === v_8507a8.current) {
        v_9468fd.current = false;
        if (v_62d405.current) v_575aad(false);
      }
    }
  }, []);

  v_c4deb2(() => {
    v_62d405.current = true;
    v_f6f5de(false);
    return () => {
      v_62d405.current = false;
      v_9468fd.current = false;
      v_8507a8.current += 1; 
    };
  }, [v_f6f5de]);

  if (v_b6e533 === 'loading') {
    return (
      <View style={v_d81136.section}>
        <Text style={[v_d81136.title, v_d81136.sectionTitleSpacing]}>{v_8d41d7('shop.carousel_title')}</Text>
        <View style={v_d81136.placeholderBox}>
          <ActivityIndicator size="small" color="#615FFF" />
        </View>
      </View>
    );
  }

  if (v_b6e533 === 'error') {
    return (
      <View style={v_d81136.section}>
        <Text style={[v_d81136.title, v_d81136.sectionTitleSpacing]}>{v_8d41d7('shop.carousel_title')}</Text>
        <View style={v_d81136.errorBox}>
          <Text style={v_d81136.errorTitle}>{v_8d41d7('shop.error_title')}</Text>
          <Text style={v_d81136.errorDesc}>{v_8d41d7('shop.error_desc')}</Text>
          <TouchableOpacity
            style={[v_d81136.refreshBtn, v_612e9f && v_d81136.refreshBtnDisabled]}
            onPress={() => v_f6f5de(true)}
            disabled={v_612e9f}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel={v_8d41d7('shop.refresh')}
          >
            {v_612e9f ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={v_d81136.refreshBtnText}>{v_8d41d7('shop.refresh')}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const v_597fae = (v_06db8f - v_ff4e8b * 2 - v_66f2f8) / 1.5;

  return (
    <View style={v_d81136.section}>
      <View style={v_d81136.header}>
        <Text style={v_d81136.title}>{v_8d41d7('shop.carousel_title')}</Text>
        <TouchableOpacity onPress={() => v_9b57fc('ShopProductList')}>
          <Text style={v_d81136.viewAll}>{v_8d41d7('shop.view_all')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={v_4622b9}
        keyExtractor={(v_23805a) => v_23805a.it_id}
        contentContainerStyle={v_d81136.list}
        decelerationRate="fast"
        snapToInterval={v_597fae + v_66f2f8}
        snapToAlignment="start"
        renderItem={({ item: v_8c0b26 }) => {
          const v_6e4734 = v_95c036(v_8c0b26.it_price, v_f4d612);
          return (
            <TouchableOpacity
              style={[v_d81136.card, { width: v_597fae, marginRight: v_66f2f8 }]}
              onPress={() => v_e184b5(v_8c0b26.item_url)}
              activeOpacity={0.85}
            >
              <View style={v_d81136.imageBox}>
                {v_8c0b26.image_url
                  ? <Image source={{ uri: v_8c0b26.image_url }} style={v_d81136.image} resizeMode="contain" />
                  : <View style={[v_d81136.image, v_d81136.imagePlaceholder]} />}
              </View>
              <View style={v_d81136.info}>
                <Text numberOfLines={2} style={v_d81136.name}>{v_8c0b26.it_name}</Text>
                {v_6e4734 && !v_8c0b26.soldout ? <Text style={v_d81136.mtht}>≈ {v_6e4734} MTHT</Text> : null}
                <Text style={v_d81136.price}>{v_8c0b26.soldout ? v_8d41d7('shop.soldout') : v_55ca78(v_8c0b26.it_price)}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const v_d81136 = v_472849.create({
  section: { paddingHorizontal: v_ff4e8b, marginBottom: v_9b1a04.xlarge },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: v_9b1a04.medium },
  title: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  sectionTitleSpacing: { marginBottom: v_9b1a04.medium },
  viewAll: { fontSize: 14, fontFamily: v_843035.semibold, color: '#3B82F6' },
  list: { paddingRight: v_ff4e8b },
  card: { borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' },
  imageBox: { borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 16, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', minHeight: 120 },
  image: { width: '100%', height: 100, alignSelf: 'center' },
  imagePlaceholder: { width: '100%', height: 100, backgroundColor: v_1bfbd0.lightGray, borderRadius: 8 },
  info: { padding: v_9b1a04.medium, paddingTop: 12 },
  name: { fontSize: 14, fontFamily: v_843035.bold, color: '#000000', marginBottom: 8, height: 40, lineHeight: 20 },
  mtht: { fontSize: 11, fontFamily: v_843035.semibold, color: '#615FFF', marginBottom: 2 },
  price: { fontSize: 15, fontFamily: v_843035.bold, color: '#000000', letterSpacing: -0.5 },
  placeholderBox: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorBox: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.medium,
    alignItems: 'center',
    gap: 8,
  },
  errorTitle: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: v_1bfbd0.text, textAlign: 'center' },
  errorDesc: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, textAlign: 'center', marginBottom: 4 },
  refreshBtn: {
    marginTop: 4,
    backgroundColor: '#615FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  refreshBtnDisabled: { opacity: 0.7 },
  refreshBtnText: { fontSize: 14, fontFamily: v_843035.semibold, color: '#FFFFFF' },
});
