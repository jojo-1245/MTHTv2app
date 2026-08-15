import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_4623af, v_472849, v_326be8 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_ec0289, v_4a4fc7, type v_5a09f2 } from '../services/supplementApi';
import { v_a0daa8 } from '../navigation';

interface Props {
  source: v_5a09f2;
  recordId: number | null;

  skipUpsert?: boolean;
}

export default function v_16c240({
  source: v_04e790,
  recordId: v_fbf3b0,
  skipUpsert: v_5bfc02 = false,
}: Props): v_a3453e.JSX.Element | null {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const [v_5e68d5, v_72f635] = v_5ab095(false);

  v_c4deb2(() => {
    if (v_fbf3b0 == null) return;
    let v_759436 = true;

    if (v_5bfc02) {
      v_72f635(false);
      v_4a4fc7()
        .then((v_a13bfb) => {
          if (!v_759436) return;
          const v_a63110 =
            v_a13bfb.recordId != null && Number(v_a13bfb.recordId) === Number(v_fbf3b0);
          v_72f635(v_a63110);
        })
        .catch((v_9e86fd) => {
          if (!v_759436) return;
          console.log('[SupplementRecoCta] 스냅샷 조회 실패', {
            message: v_9e86fd?.message,
            status: v_9e86fd?.response?.status,
          });
          v_72f635(false);
        });
      return () => {
        v_759436 = false;
      };
    }

    v_ec0289({ source: v_04e790, recordId: v_fbf3b0, platform: v_326be8.OS as 'ios' | 'android' })
      .then((v_cb35cb) => {
        if (!v_759436) return;
        console.log('[SupplementRecoCta] 스냅샷 upsert', {
          source: v_04e790,
          recordId: v_fbf3b0,
          count: v_cb35cb.items.length,
        });
      })
      .catch((v_9e86fd) => {
        console.log('[SupplementRecoCta] upsert 실패', {
          message: v_9e86fd?.message,
          status: v_9e86fd?.response?.status,
        });
      });
    return () => {
      v_759436 = false;
    };
  }, [v_04e790, v_fbf3b0, v_5bfc02]);

  if (v_fbf3b0 == null) return null;
  if (v_5bfc02 && !v_5e68d5) return null;

  return (
    <View style={v_d81136.wrap}>
      <TouchableOpacity
        style={v_d81136.btn}
        activeOpacity={0.85}
        onPress={() => v_9b57fc('RecommendedSupplements' as any)}
        accessibilityRole="button"
        accessibilityLabel={v_8d41d7('supplements.page_cta')}
        testID="supplement-reco-cta"
      >
        <Ionicons name="nutrition-outline" size={22} color="#fff" />
        <View style={v_d81136.textCol}>
          <Text style={v_d81136.title}>{v_8d41d7('supplements.page_cta')}</Text>
          <Text style={v_d81136.sub}>{v_8d41d7('supplements.page_cta_sub')}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const v_d81136 = v_472849.create({
  wrap: { marginTop: 16, marginBottom: 8 },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  textCol: { flex: 1 },
  title: { color: '#fff', fontSize: 15, fontWeight: '700' },
  sub: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 },
});
