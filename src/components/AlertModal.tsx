import v_a3453e from 'bapkr';
import {
  v_aa7413,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface AlertModalProps {
  visible: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  onConfirm?: () => void;
}

export const AlertModal: v_a3453e.FC<AlertModalProps> = ({
  visible: v_cf55be,
  title: v_9f1622,
  message: v_a8cd21,
  confirmLabel: v_449dca,
  onConfirm: v_e2be2d,
}) => {
  const { t: v_8d41d7 } = v_772971();
  return (
    <Modal
      visible={v_cf55be}
      transparent
      animationType="fade"
      onRequestClose={v_e2be2d}
    >
      <View style={v_d81136.overlay}>
        <View style={v_d81136.container}>
          <Text style={v_d81136.title}>{v_9f1622 || v_8d41d7('alert.default_title')}</Text>
          <Text style={v_d81136.message}>{v_a8cd21}</Text>
          <TouchableOpacity style={v_d81136.button} onPress={v_e2be2d}>
            <Text style={v_d81136.buttonText}>{v_449dca || v_8d41d7('alert.confirm')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: v_9b1a04.large,
  },
  container: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: v_1bfbd0.background,
    borderRadius: 16,
    padding: v_9b1a04.large,
  },
  title: {
    fontSize: 18,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  message: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.large,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: v_1bfbd0.buttonPrimary,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    borderRadius: 999,
  },
  buttonText: {
    color: v_1bfbd0.background,
    fontFamily: v_843035.medium,
    fontSize: 14,
  },
});

export default v_8e2768;

