import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_acfdec,
} from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_772971 } from 'jmpfvteuuztnp';

const v_b6c376 = 'medical_disclaimer_dismissed_until';

export function v_3b68d0() {
  const [v_cf55be, v_72f90e] = v_5ab095(false);
  const [v_18d4d5, v_ff1dee] = v_5ab095(false);
  const { t: v_8d41d7 } = v_772971();

  v_c4deb2(() => {
    v_0fb834();
  }, []);

  const v_0fb834 = async () => {
    try {
      const v_3b8392 = await v_e84827.getItem(v_b6c376);
      if (v_3b8392) {
        const v_604a0d = new Date(v_3b8392);
        if (v_604a0d > new Date()) {
          return; 
        }
      }
      v_72f90e(true);
    } catch {
      v_72f90e(true);
    }
  };

  const v_e1f1e1 = async () => {
    if (v_18d4d5) {
      const v_604a0d = new Date();
      v_604a0d.setMonth(v_604a0d.getMonth() + 1);
      await v_e84827.setItem(v_b6c376, v_604a0d.toISOString());
    }
    v_72f90e(false);
  };

  if (!v_cf55be) return null;

  return (
    <Modal visible animationType="fade" transparent statusBarTranslucent>
      <View style={v_d81136.overlay}>
        <SafeAreaView style={v_d81136.container}>
          <View style={v_d81136.card}>
            <View style={v_d81136.iconRow}>
              <Text style={v_d81136.icon}>⚕️</Text>
            </View>

            <Text style={v_d81136.title}>건강·피부 측정 안내</Text>

            <Text style={v_d81136.content}>
              본 앱에서 제공하는 건강 측정 및 피부 분석 결과는{' '}
              <Text style={v_d81136.bold}>일반적인 참고 정보</Text>일 뿐,
              의학적 진단이나 처방을 대체할 수 없습니다.
              {'\n\n'}
              실제 질병의 진단, 치료 및 건강 관리에 대해서는{' '}
              <Text style={v_d81136.bold}>반드시 전문의 또는 의사의 상담</Text>을
              받으시기 바랍니다.
            </Text>

            <TouchableOpacity
              style={v_d81136.checkboxRow}
              onPress={() => v_ff1dee(!v_18d4d5)}
              activeOpacity={0.7}
            >
              <View style={[v_d81136.checkbox, v_18d4d5 && v_d81136.checkboxChecked]}>
                {v_18d4d5 && <Text style={v_d81136.checkmark}>✓</Text>}
              </View>
              <Text style={v_d81136.checkboxLabel}>1개월간 보지 않기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={v_d81136.button} onPress={v_e1f1e1} activeOpacity={0.8}>
              <Text style={v_d81136.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#1E1E2E',
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  iconRow: {
    marginBottom: 12,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 18,
    fontFamily: v_843035?.bold ?? undefined,
    fontWeight: '700',
    color: v_1bfbd0.text ?? '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    fontSize: 14,
    fontFamily: v_843035?.regular ?? undefined,
    color: v_1bfbd0.secondaryText ?? '#B0B0C0',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontFamily: v_843035?.bold ?? undefined,
    fontWeight: '700',
    color: v_1bfbd0.primary ?? '#6C63FF',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: v_1bfbd0.secondaryText ?? '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: v_1bfbd0.primary ?? '#6C63FF',
    borderColor: v_1bfbd0.primary ?? '#6C63FF',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 13,
    color: v_1bfbd0.secondaryText ?? '#B0B0C0',
    fontFamily: v_843035?.regular ?? undefined,
  },
  button: {
    backgroundColor: v_1bfbd0.primary ?? '#6C63FF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: v_843035?.bold ?? undefined,
    fontWeight: '700',
  },
});
