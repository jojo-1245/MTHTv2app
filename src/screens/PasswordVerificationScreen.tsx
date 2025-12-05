import v_a3453e from 'bapkr';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_19b633 } from 'rcmrninabrnb';
import type { v_8ad91b } from '../navigation';
import { v_d554e3 } from './components/VerificationCodeTemplate';
import { v_1bfbd0, v_843035 } from '../constants';

type Props = v_432191<v_8ad91b, 'PasswordVerification'>;

const PasswordVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  return (
    <VerificationCodeTemplate
      title="Enter Verification Code"
      subtitle=""
      onBack={() => v_c65f5d.goBack()}
      onVerify={() => v_c65f5d.navigate('ResetPassword')}
      codeLength={6}
    />
  );
};

export default v_0d311d;

