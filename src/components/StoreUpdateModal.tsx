import v_a3453e from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_acfdec,
} from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface StoreUpdateModalProps {
  visible: boolean;
  title: string;
  content: string;
  isForce?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function v_26d101({
  visible: v_cf55be,
  title: v_9f1622,
  content: v_b43b74,
  isForce: v_e98228 = false,
  onConfirm: v_e2be2d,
  onCancel: v_c7001c,
}: StoreUpdateModalProps) {
  if (!v_cf55be) return null;

  return (
    <Modal visible={v_cf55be} animationType="fade" transparent statusBarTranslucent>
      <View style={v_d81136.overlay}>
        <SafeAreaView style={v_d81136.container}>
          <View style={v_d81136.card}>
            <View style={v_d81136.header}>
              <View style={[v_d81136.statusIcon, v_e98228 ? v_d81136.forceIcon : v_d81136.optionalIcon]} />
              <Text style={v_d81136.title}>{v_9f1622}</Text>
            </View>

            <Text style={v_d81136.content}>{v_b43b74}</Text>

            <View style={v_d81136.buttonContainer}>
              <TouchableOpacity 
                style={[v_d81136.button, v_d81136.confirmBtn]} 
                onPress={v_e2be2d}
              >
                <Text style={v_d81136.confirmText}>지금 업데이트</Text>
              </TouchableOpacity>

              {!v_e98228 && v_c7001c && (
                <TouchableOpacity 
                  style={[v_d81136.button, v_d81136.cancelBtn]} 
                  onPress={v_c7001c}
                >
                  <Text style={v_d81136.cancelText}>나중에</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: v_9b1a04.large,
  },
  container: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  statusIcon: {
    width: 8,
    height: 24,
    borderRadius: 4,
  },
  forceIcon: {
    backgroundColor: '#EF4444', 
  },
  optionalIcon: {
    backgroundColor: '#3B82F6', 
  },
  title: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: '#111827',
    flex: 1,
  },
  content: {
    fontSize: 15,
    fontFamily: v_843035.regular,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 28,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtn: {
    backgroundColor: v_1bfbd0.primary || '#000000',
  },
  confirmText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: v_843035.bold,
  },
  cancelBtn: {
    backgroundColor: '#F3F4F6',
  },
  cancelText: {
    color: '#374151',
    fontSize: 15,
    fontFamily: v_843035.semibold,
  },
});
