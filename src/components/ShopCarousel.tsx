import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_cf9c33, v_9cabcb, v_4623af, v_472849, v_e45a99 } from 'rcmrninabrnb';
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

export default function v_ef8a11() {
  const { t: v_8d41d7 } = v_772971();
  const { openShop: v_e184b5 } = v_ffe36d();
  const { navigate: v_9b57fc } = v_a0daa8();
  const { width: v_06db8f } = v_e45a99();
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

  if (!v_bf751c || v_4622b9.length === 0) return null; 

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
});
