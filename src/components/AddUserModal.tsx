import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_aa7413,
  v_09d0e5,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import v_5427ed from './OtpInput';
import v_cb41de from './PrimaryButton';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';

const v_28d629 = 6;

export interface AddUserModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (otp: string) => void;
  myOtp?: string;
}

export const AddUserModal: v_a3453e.FC<AddUserModalProps> = ({
  visible: v_cf55be,
  onClose: v_0890f8,
  onAdd: v_b0e537,
  myOtp: v_0f5b66 = '288392',
}) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_af419b, v_9c3167] = v_5ab095('');

  const v_ea9990 = () => {
    if (v_af419b.length === v_28d629) {
      v_b0e537(v_af419b);
      v_9c3167('');
      v_0890f8();
    }
  };

  const v_7f2e65 = () => {
    v_9c3167('');
    v_0890f8();
  };

  const v_accb7a = v_af419b.length === v_28d629;

  return (
    <Modal
      visible={v_cf55be}
      transparent
      animationType="fade"
      onRequestClose={v_7f2e65}
    >
      <Pressable style={v_d81136.overlay} onPress={v_7f2e65}>
        <Pressable style={v_d81136.modal} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
          <View style={v_d81136.header}>
            <Text style={v_d81136.title}>{v_8d41d7('add_user_modal.title')}</Text>
            <TouchableOpacity
              style={v_d81136.closeBtn}
              onPress={v_7f2e65}
              hitSlop={12}
            >
              <Feather name="x" size={24} color={v_1bfbd0.text} />
            </TouchableOpacity>
          </View>

          <Text style={v_d81136.instruction}>{v_8d41d7('add_user_modal.instruction')}</Text>

          <View style={v_d81136.otpWrap}>
            <OtpInput
              length={v_28d629}
              value={v_af419b}
              onChange={v_9c3167}
              editable={true}
            />
          </View>

          <PrimaryButton
            title={v_8d41d7('add_user_modal.add_btn')}
            onPress={v_ea9990}
            disabled={!v_accb7a}
            style={[v_d81136.addBtn, !v_accb7a && v_d81136.addBtnDisabled]}
            textStyle={[v_d81136.addBtnText, !v_accb7a && v_d81136.addBtnTextDisabled]}
          />

          <View style={v_d81136.myOtpSection}>
            <Text style={v_d81136.myOtpLabel}>{v_8d41d7('add_user_modal.my_otp_label')}</Text>
            <Text style={v_d81136.myOtpValue}>{v_0f5b66}</Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modal: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  closeBtn: {
    padding: 4,
  },
  instruction: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: 20,
    lineHeight: 22,
  },
  otpWrap: {
    marginBottom: 24,
  },
  addBtn: {
    marginBottom: 24,
  },
  addBtnDisabled: {
    backgroundColor: '#9CA3AF',
    borderColor: '#9CA3AF',
  },
  addBtnText: {
    color: '#FFFFFF',
  },
  addBtnTextDisabled: {
    color: '#FFFFFF',
  },
  myOtpSection: {
    alignItems: 'center',
  },
  myOtpLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: 8,
  },
  myOtpValue: {
    fontSize: 28,
    fontFamily: v_843035.bold,
    color: '#4F39F6',
    letterSpacing: 4,
  },
});
