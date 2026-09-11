import v_a3453e from 'bapkr';
import { v_19b633 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import type { v_8ad91b } from '../navigation';
import { v_889fad } from '../components/AlertHost';
import { v_d554e3 } from './components/VerificationCodeTemplate';
import { v_1bfbd0, v_843035 } from '../constants';
import { v_c1a440 } from '../services/signupApi';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'PasswordVerification'>;

const PasswordVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { email: v_e0c7e8, channel: v_8e9fad = 'email', mobile: v_49ea09 } = v_c7daf6.params;
  const v_e34c8e = v_8e9fad === 'sms';

  const v_83b05b = (v_c99bd2) => {
    v_c65f5d.navigate('ResetPassword', { email: v_e0c7e8, code: v_c99bd2 });
  };

  const v_cf9840 = async () => {
    try {
      await v_c1a440({ email: v_e0c7e8, purpose: 'password_reset' });
    } catch (v_5e9bfe) {
      v_889fad(
        v_8d41d7('common.error'),
        v_5e9bfe?.message || '인증코드 재발송에 실패했습니다.'
      );
    }
  };

  const v_2819de = v_e34c8e ? v_49ea09 || '—' : v_e0c7e8;

  return (
    <VerificationCodeTemplate
      title={
        v_e34c8e
          ? v_8d41d7('email_verification.title_sms', 'SMS 인증')
          : v_8d41d7('email_verification.title')
      }
      subtitle={
        <Text style={{ fontSize: 14, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText }}>
          {v_e34c8e
            ? v_8d41d7('forgot_password.sent_sms_prefix')
            : v_8d41d7('forgot_password.sent_email_prefix')}
          <Text style={{ fontFamily: v_843035.semibold, color: v_1bfbd0.text }}>{v_2819de}</Text>
          {v_e34c8e
            ? v_8d41d7('forgot_password.sent_sms_suffix')
            : v_8d41d7('forgot_password.sent_email_suffix')}
        </Text>
      }
      onBack={() => v_c65f5d.goBack()}
      onVerify={v_83b05b}
      onResend={v_cf9840}
      codeLength={6}
    />
  );
};

export default v_0d311d;
