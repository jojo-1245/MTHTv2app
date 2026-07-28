import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
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

interface SupplementRecommendSectionProps {
  source: v_5a09f2;
  recordId: number | null;
}

export default function v_6f3f7e({
  source: v_04e790,
  recordId: v_fbf3b0,
}: SupplementRecommendSectionProps): v_a3453e.JSX.Element | null {
  const { t: v_8d41d7 } = v_772971();
  const { openShopProduct: v_99cd96, loading: v_683210 } = v_ffe36d();
  const [v_4622b9, v_fa923c] = v_5ab095<v_d74666[]>([]);

  v_c4deb2(() => {
    let v_759436 = true;
    if (v_fbf3b0 == null) {
      v_fa923c([]);
      return;
    }
    v_ec0289({ source: v_04e790, recordId: v_fbf3b0, platform: v_326be8.OS as 'ios' | 'android' })
      .then((v_cb35cb) => {
        if (!v_759436) return;

        if (v_326be8.OS === 'ios' && v_cb35cb.safeMode === false) {
          v_fa923c([]);
          return;
        }
        v_fa923c(v_cb35cb.items);
      })
      .catch(() => {
        if (v_759436) v_fa923c([]);
      });
    return () => {
      v_759436 = false;
    };
  }, [v_04e790, v_fbf3b0]);

  if (v_fbf3b0 == null || v_4622b9.length === 0) return null;

  return (
    <View style={v_d81136.section}>
      <Text style={v_d81136.title}>{v_8d41d7('supplements.section_title')}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={v_4622b9}
        keyExtractor={(v_23805a) => String(v_23805a.gunkiId)}
        renderItem={({ item: v_8c0b26 }) => (
          <View style={v_d81136.card}>
            {v_295d07(v_8c0b26.imageUrl) ? (
              <Image source={{ uri: v_295d07(v_8c0b26.imageUrl) }} style={v_d81136.image} />
            ) : (
              <View style={[v_d81136.image, v_d81136.imagePlaceholder]} />
            )}
            <Text style={v_d81136.name} numberOfLines={2}>
              {v_8c0b26.productName}
            </Text>
            <Text style={v_d81136.reason} numberOfLines={3}>
              {v_8c0b26.reason}
            </Text>
            <TouchableOpacity
              style={v_d81136.button}
              disabled={v_683210}
              onPress={() => v_99cd96(v_8c0b26.shopItemId, { confirm: true })}
            >
              <Text style={v_d81136.buttonText}>{v_8d41d7('supplements.view_in_shop')}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const v_d81136 = v_472849.create({
  section: { marginTop: 16, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 10, paddingHorizontal: 4 },
  card: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: { width: '100%', height: 120, borderRadius: 8, backgroundColor: '#f4f4f4' },
  imagePlaceholder: { alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 13, fontWeight: '600', marginTop: 8 },
  reason: { fontSize: 11, color: '#666', marginTop: 4, minHeight: 44 },
  button: { marginTop: 8, backgroundColor: '#111', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 12, fontWeight: '600' },
});
