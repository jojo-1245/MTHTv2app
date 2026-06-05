import v_a3453e from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_326be8,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';
import { v_4aad62 } from '../utils/consentStore';
import type { v_8c7694 } from '../utils/consentStore';

export type { v_8c7694 };

export interface DataConsentModalProps {
  visible: boolean;
  kind: v_8c7694;
  onAgree: () => void;
  onCancel: () => void;
}

const FALLBACKS: Record<v_8c7694, {
  title: string;
  data: string;
  recipient: string;
  purpose: string;
  agree: string;
  cancel: string;
}> = {
  health: {
    title: 'Health Data Consent',
    data: 'Facial video stream (processed on-device by FzljtiliSignal/Binah SDK; video is not stored or transmitted)',
    recipient: 'FzljtiliSignal (Binah) SDK — on-device processing only',
    purpose: 'Vital sign estimation for general wellness',
    agree: 'Agree',
    cancel: 'Decline',
  },
  skin: {
    title: 'Skin Analysis Consent',
    data: 'Facial photo',
    recipient: 'YouCam / PerfectCorp (overseas server)',
    purpose: 'Skin condition analysis',
    agree: 'Agree',
    cancel: 'Decline',
  },
  chat: {
    title: 'AI Consultation Consent',
    data: 'Conversation text + health/skin measurement summary (includes biometric data)',
    recipient: 'MetaHint AI server',
    purpose: 'Personalized consultation response',
    agree: 'Agree',
    cancel: 'Decline',
  },
};

const DataConsentModal: v_a3453e.FC<DataConsentModalProps> = ({
  visible: v_cf55be,
  kind: v_94302c,
  onAgree: v_5cccfe,
  onCancel: v_c7001c,
}) => {
  const { t: v_8d41d7 } = v_772971();

  const v_9eebad = v_2d084a[v_94302c];
  const v_9f1622 = v_8d41d7(`consent.${v_94302c}.title`, v_9eebad.title);
  const v_9390e8 = v_8d41d7(`consent.${v_94302c}.data`, v_9eebad.data);
  const v_892c1f = v_8d41d7(`consent.${v_94302c}.recipient`, v_9eebad.recipient);
  const v_fa63e0 = v_8d41d7(`consent.${v_94302c}.purpose`, v_9eebad.purpose);
  const v_78050c = v_8d41d7(`consent.${v_94302c}.agree`, v_9eebad.agree);
  const v_ec78e0 = v_8d41d7(`consent.${v_94302c}.cancel`, v_9eebad.cancel);

  const v_f04f9c = async () => {
    await v_4aad62(v_94302c, true);
    v_5cccfe();
  };

  return (
    <Modal
      visible={v_cf55be}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={v_c7001c}
    >
      <View style={v_d81136.overlay}>
        <View style={v_d81136.card}>
          <Text style={v_d81136.title}>{v_9f1622}</Text>

          <View style={v_d81136.section}>
            <Text style={v_d81136.label}>{v_8d41d7('consent.label_data', 'Data')}</Text>
            <Text style={v_d81136.body}>{v_9390e8}</Text>
          </View>

          <View style={v_d81136.section}>
            <Text style={v_d81136.label}>{v_8d41d7('consent.label_recipient', 'Recipient')}</Text>
            <Text style={v_d81136.body}>{v_892c1f}</Text>
          </View>

          <View style={v_d81136.section}>
            <Text style={v_d81136.label}>{v_8d41d7('consent.label_purpose', 'Purpose')}</Text>
            <Text style={v_d81136.body}>{v_fa63e0}</Text>
          </View>

          <View style={v_d81136.buttonRow}>
            <TouchableOpacity
              style={[v_d81136.btn, v_d81136.cancelBtn]}
              onPress={v_c7001c}
              accessibilityRole="button"
            >
              <Text style={v_d81136.cancelBtnText}>{v_ec78e0}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[v_d81136.btn, v_d81136.agreeBtn]}
              onPress={v_f04f9c}
              accessibilityRole="button"
            >
              <Text style={v_d81136.agreeBtnText}>{v_78050c}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default v_e209a2;

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.medium,
  },
  card: {
    width: '100%',
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: 24,
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  title: {
    fontFamily: v_843035.bold,
    fontSize: v_ef658a.xlarge,
    color: v_1bfbd0.text,
    marginBottom: 20,
  },
  section: {
    marginBottom: 14,
  },
  label: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  body: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.text,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  btn: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: v_1bfbd0.backgroundSecondary,
  },
  agreeBtn: {
    backgroundColor: v_1bfbd0.primary,
  },
  cancelBtnText: {
    fontFamily: v_843035.medium,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.secondaryText,
  },
  agreeBtnText: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.white,
  },
});
