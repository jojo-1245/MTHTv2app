import v_a3453e from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_acfdec,
} from 'rcmrninabrnb';
import { v_d8b303 } from '../services/keepaliveService';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_5ab0fb } from '../services/linking';

interface EmergencyNoticeModalProps {
  notice: v_d8b303 | null;
  onDismiss: () => void;
}

export function v_fba277({ notice: v_d48273, onDismiss: v_1b97a8 }: EmergencyNoticeModalProps) {
  if (!v_d48273) return null;

  const v_ec5c82 = v_d48273.blocking === true;

  const v_c33327 = () => {
    if (v_d48273.url) {
      v_5ab0fb(v_d48273.url);
    }
  };

  return (
    <Modal
      visible
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={() => {}}
    >
      <View style={v_d81136.overlay}>
        <SafeAreaView style={v_d81136.container}>
          <View style={v_d81136.card}>
            <View style={v_d81136.header}>
              <View style={v_d81136.alertIcon} />
              <Text style={v_d81136.title}>{v_d48273.title}</Text>
            </View>

            <Text style={v_d81136.content}>{v_d48273.content}</Text>

            <View style={v_d81136.buttonContainer}>
              {v_d48273.url ? (
                <TouchableOpacity
                  style={[v_d81136.button, v_d81136.linkBtn]}
                  onPress={v_c33327}
                >
                  <Text style={v_d81136.linkText}>자세히 보기</Text>
                </TouchableOpacity>
              ) : null}

              {v_ec5c82 ? null : (
                <TouchableOpacity
                  style={[v_d81136.button, v_d81136.dismissBtn]}
                  onPress={v_1b97a8}
                >
                  <Text style={v_d81136.dismissText}>확인</Text>
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
    borderWidth: 2,
    borderColor: '#EF4444',
    shadowColor: '#EF4444',
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
  alertIcon: {
    width: 8,
    height: 24,
    backgroundColor: '#EF4444',
    borderRadius: 4,
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
  linkBtn: {
    backgroundColor: '#F3F4F6',
  },
  linkText: {
    color: '#374151',
    fontSize: 15,
    fontFamily: v_843035.semibold,
  },
  dismissBtn: {
    backgroundColor: '#EF4444',
  },
  dismissText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: v_843035.bold,
  },
});
