import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_cf9c33, v_9cabcb, v_4623af, v_472849 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_649c8b, type v_e9d814 } from '../services/shopApi';
import { v_857579 } from '../hooks/useShopEntry';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';

function v_55ca78(v_81e2ef): string {
  if (typeof v_81e2ef !== 'number' || !isFinite(v_81e2ef)) return '-';
  return v_81e2ef.toLocaleString('ko-KR') + '원';
}

export default function v_ef8a11() {
  const { t: v_8d41d7 } = v_772971();
  const { openShop: v_e184b5 } = v_857579();
  const { navigate: v_9b57fc } = v_a0daa8();
  const [v_4622b9, v_fa923c] = v_5ab095<v_e9d814[]>([]);
  const [v_bf751c, v_8bbf9d] = v_5ab095(false);

  v_c4deb2(() => {
    let v_759436 = true;
    v_649c8b()
      .then((v_cb35cb) => { if (v_759436) v_fa923c(v_cb35cb); })
      .catch(() => {  })
      .finally(() => { if (v_759436) v_8bbf9d(true); });
    return () => { v_759436 = false; };
  }, []);

  if (v_bf751c && v_4622b9.length === 0) return null; 
  if (!v_bf751c) return null; 

  return (
    <View style={v_d81136.wrap}>
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
        renderItem={({ item: v_8c0b26 }) => (
          <TouchableOpacity style={v_d81136.card} onPress={() => v_e184b5(v_8c0b26.item_url)} activeOpacity={0.85}>
            {v_8c0b26.image_url
              ? <Image source={{ uri: v_8c0b26.image_url }} style={v_d81136.img} />
              : <View style={[v_d81136.img, v_d81136.imgPlaceholder]} />}
            <Text numberOfLines={2} style={v_d81136.name}>{v_8c0b26.it_name}</Text>
            <Text style={v_d81136.price}>{v_8c0b26.soldout ? v_8d41d7('shop.soldout') : v_55ca78(v_8c0b26.it_price)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const v_d81136 = v_472849.create({
  wrap: { marginVertical: v_9b1a04.medium },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.small,
  },
  title: { fontSize: v_ef658a.xlarge, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  viewAll: { fontSize: v_ef658a.medium, color: v_1bfbd0.secondaryText },
  list: { paddingHorizontal: v_9b1a04.xmedium },
  card: { width: 140, marginHorizontal: 4 },
  img: { width: 140, height: 140, borderRadius: 12, backgroundColor: v_1bfbd0.lightGray },
  imgPlaceholder: { alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: v_1bfbd0.text, marginTop: v_9b1a04.small - 2 },
  price: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginTop: 2 },
});
