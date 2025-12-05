import v_a3453e, { v_5ab095 } from 'bapkr';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_19b633 } from 'rcmrninabrnb';
import type { v_8ad91b } from '../navigation';
import { v_d554e3 } from './components/VerificationCodeTemplate';
import { v_8e2768 } from '../components';
import { v_1bfbd0, v_843035 } from '../constants';

type Props = v_432191<v_8ad91b, 'EmailVerification'>;

const EmailVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const v_e0c7e8 = v_c7daf6.params?.email;
  const [v_3a2ef3, v_e50001] = v_5ab095(false);

  const v_83b05b = () => {
    v_e50001(true);
  };

  const v_03cae9 = () => {
    v_e50001(false);
    v_c65f5d.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <>
      <VerificationCodeTemplate
        title="Enter Verification Code"
        subtitle={null}
        onBack={() => v_c65f5d.goBack()}
        onVerify={v_83b05b}
        codeLength={6}
      />
      <AlertModal
        visible={v_3a2ef3}
        title="인증 완료"
        message="임시로 모든 코드가 인증 처리됩니다. 로그인 화면으로 이동할게요."
        onConfirm={v_03cae9}
      />
    </>
  );
};

export default v_a82b55;

