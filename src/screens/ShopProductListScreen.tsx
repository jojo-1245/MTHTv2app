import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_cf9c33, v_9cabcb, v_4623af, v_472849 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_729608, v_570c34, v_1c1837 } from '../components';
import { v_649c8b, v_95c036, type v_e9d814 } from '../services/shopApi';
import { v_857579 } from '../hooks/useShopEntry';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';

function v_55ca78(v_81e2ef): string {
  if (typeof v_81e2ef !== 'number' || !isFinite(v_81e2ef) || v_81e2ef < 0) return '-';
  return v_81e2ef.toLocaleString('ko-KR') + '원';
}

type Props = v_432191<v_8ad91b, 'ShopProductList'>;

const ShopProductListScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { openShop: v_e184b5 } = v_857579();
  const [v_4622b9, v_fa923c] = v_5ab095<v_e9d814[]>([]);
  const [v_f4d612, v_13fd7a] = v_5ab095<number | null>(null);
  const [v_bf751c, v_8bbf9d] = v_5ab095(false);

  v_c4deb2(() => {
    let v_759436 = true;
    v_649c8b()
      .then((v_cb35cb) => { if (v_759436) { v_fa923c(v_cb35cb.items); v_13fd7a(v_cb35cb.rate); } })
      .catch(() => {  })
      .finally(() => { if (v_759436) v_8bbf9d(true); });
    return () => { v_759436 = false; };
  }, []);

  return (
    <MainLayout>
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('shop.list_title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={v_d81136.content}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          {v_bf751c && v_4622b9.length === 0 ? (
            <View style={v_d81136.empty}>
              <Text style={v_d81136.emptyText}>{v_8d41d7('shop.empty')}</Text>
            </View>
          ) : (
            <FlatList
              data={v_4622b9}
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={(v_23805a) => v_23805a.it_id}
              columnWrapperStyle={v_d81136.row}
              contentContainerStyle={v_d81136.grid}
              renderItem={({ item: v_8c0b26 }) => {
                const v_6e4734 = v_95c036(v_8c0b26.it_price, v_f4d612);
                return (
                  <TouchableOpacity style={v_d81136.card} onPress={() => v_e184b5(v_8c0b26.item_url)} activeOpacity={0.85}>
                    {v_8c0b26.image_url
                      ? <Image source={{ uri: v_8c0b26.image_url }} style={v_d81136.img} />
                      : <View style={[v_d81136.img, v_d81136.imgPlaceholder]} />}
                    <Text numberOfLines={2} style={v_d81136.name}>{v_8c0b26.it_name}</Text>
                    {v_6e4734 && !v_8c0b26.soldout ? <Text style={v_d81136.mtht}>≈ {v_6e4734} MTHT</Text> : null}
                    <Text style={v_d81136.price}>{v_8c0b26.soldout ? v_8d41d7('shop.soldout') : v_55ca78(v_8c0b26.it_price)}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: { flex: 1 },
  scrollView: { flex: 1 },
  content: { paddingVertical: v_9b1a04.medium },
  grid: { paddingHorizontal: v_9b1a04.medium },
  row: { justifyContent: 'space-between' },
  card: { width: '48%', marginBottom: v_9b1a04.large },
  img: { width: '100%', aspectRatio: 1, borderRadius: 12, backgroundColor: v_1bfbd0.lightGray },
  imgPlaceholder: { alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: v_1bfbd0.text, marginTop: v_9b1a04.small - 2 },
  mtht: { fontSize: 11, fontFamily: v_843035.semibold, color: '#615FFF', marginTop: 4 },
  price: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginTop: 2 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 80 },
  emptyText: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText },
});

export default v_f6b2e9;
