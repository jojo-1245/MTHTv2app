import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_acfdec,
  v_326be8,
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

            <Text style={v_d81136.title}>
              {v_326be8.OS === 'ios' ? v_8d41d7('medical_disclaimer.title_ios') : v_8d41d7('medical_disclaimer.title')}
            </Text>

            <Text style={v_d81136.content}>
              {v_8d41d7('medical_disclaimer.body_1')}
              <Text style={v_d81136.bold}>{v_8d41d7('medical_disclaimer.highlight_1')}</Text>
              {v_326be8.OS === 'ios' ? v_8d41d7('medical_disclaimer.body_2_ios') : v_8d41d7('medical_disclaimer.body_2')}
              {'\n\n'}
              {v_326be8.OS === 'ios' ? v_8d41d7('medical_disclaimer.body_3_ios') : v_8d41d7('medical_disclaimer.body_3')}
              <Text style={v_d81136.bold}>
                {v_326be8.OS === 'ios' ? v_8d41d7('medical_disclaimer.highlight_2_ios') : v_8d41d7('medical_disclaimer.highlight_2')}
              </Text>
              {v_326be8.OS === 'ios' ? v_8d41d7('medical_disclaimer.body_4_ios') : v_8d41d7('medical_disclaimer.body_4')}
            </Text>

            <TouchableOpacity
              style={v_d81136.checkboxRow}
              onPress={() => v_ff1dee(!v_18d4d5)}
              activeOpacity={0.7}
            >
              <View style={[v_d81136.checkbox, v_18d4d5 && v_d81136.checkboxChecked]}>
                {v_18d4d5 && <Text style={v_d81136.checkmark}>✓</Text>}
              </View>
              <Text style={v_d81136.checkboxLabel}>{v_8d41d7('medical_disclaimer.hide_for_month')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={v_d81136.button} onPress={v_e1f1e1} activeOpacity={0.8}>
              <Text style={v_d81136.buttonText}>{v_8d41d7('medical_disclaimer.confirm')}</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
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
    color: v_1bfbd0.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    fontSize: 14,
    fontFamily: v_843035?.regular ?? undefined,
    color: v_1bfbd0.secondaryText,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontFamily: v_843035?.bold ?? undefined,
    fontWeight: '700',
    color: v_1bfbd0.bluePrimary,
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
    borderColor: v_1bfbd0.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: v_1bfbd0.bluePrimary,
    borderColor: v_1bfbd0.bluePrimary,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 13,
    color: v_1bfbd0.secondaryText,
    fontFamily: v_843035?.regular ?? undefined,
  },
  button: {
    backgroundColor: v_1bfbd0.bluePrimary,
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
