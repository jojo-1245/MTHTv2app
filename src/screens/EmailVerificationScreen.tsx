import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import {
  v_39a996,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_5427ed, v_cb41de, v_570c34, v_556baf } from '../components';
import { v_8e2768 } from '../components';
import { v_c1a440, v_796ff7, v_f947a7, v_38ae19 } from '../services/signupApi';
import { v_a78885 } from '../services/appsFlyer';
import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'EmailVerification'>;

const v_4fb1a1 = ['signup', 'password_reset', 'profile_change'] as const;
type PurposeType = (typeof v_4fb1a1)[number];
type Channel = 'email' | 'sms';

const EmailVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const v_24baff = v_c7daf6.params ?? {};
  const v_e0c7e8 = typeof v_24baff.email === 'string' && v_24baff.email ? v_24baff.email : '';
  const v_fa63e0 = v_4fb1a1.includes(v_24baff.purpose as PurposeType)
    ? (v_24baff.purpose as PurposeType)
    : 'signup';
  const v_6c4ab9 = v_24baff.redirectTo;
  const v_49ea09 = typeof v_24baff.mobile === 'string' ? v_24baff.mobile : '';
  const v_6c3a47 = v_24baff.mobile_code ?? null;
  const [v_8e9fad, v_746e8d] = v_5ab095<Channel>(v_24baff.channel === 'sms' ? 'sms' : 'email');
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const [v_3a2ef3, v_e50001] = v_5ab095(false);
  const [v_f136c1, v_b5337f] = v_5ab095<{ title: string; message: string } | null>(null);
  const [v_d1dd8f, v_ff0c7a] = v_5ab095(false);
  const [v_07589d, v_9fbff7] = v_5ab095(false);
  const [v_cb36b1, v_6a8302] = v_5ab095(300);

  v_c4deb2(() => {
    if (v_cb36b1 <= 0) return;
    const v_ad1d65 = setInterval(() => {
      v_6a8302((v_ba2215) => v_ba2215 - 1);
    }, 1000);
    return () => clearInterval(v_ad1d65);
  }, [v_cb36b1]);

  const v_f85cd6 = (v_ec1a55): string => {
    const v_550090 = Math.floor(v_ec1a55 / 60);
    const v_c3e86f = v_ec1a55 % 60;
    return `${v_550090.toString().padStart(2, '0')}:${v_c3e86f.toString().padStart(2, '0')}`;
  };

  const v_f9af4d = (v_49263d) => {
    let v_a8cd21 =
      v_49263d instanceof Error ? v_49263d.message : v_8d41d7('email_verification.error_verify');
    if (!v_a8cd21 || v_a8cd21 === 'email_verification.error_verify') {
      v_a8cd21 = v_8d41d7('email_verification.error_resend', '인증번호 재전송에 실패했습니다.');
    }
    v_b5337f({
      title: v_8d41d7('email_verification.error_title') || '인증 실패',
      message: v_a8cd21,
    });
  };

  const v_cf9840 = async () => {
    if (v_cb36b1 > 0 || v_07589d || !v_e0c7e8) return;
    v_9fbff7(true);
    try {
      if (v_8e9fad === 'sms') {
        if (!v_49ea09) throw new Error(v_8d41d7('signup.error_empty_phone'));
        await v_796ff7({
          email: v_e0c7e8,
          mobile: v_49ea09,
          mobile_code: v_6c3a47,
          purpose: v_fa63e0 === 'password_reset' ? 'password_reset' : 'signup',
        });
      } else {
        await v_c1a440({
          email: v_e0c7e8,
          purpose: v_fa63e0 === 'profile_change' ? 'profile_change' : v_fa63e0,
        });
      }
      v_6a8302(300);
      v_537cbb('');
    } catch (v_49263d) {
      v_f9af4d(v_49263d);
    } finally {
      v_9fbff7(false);
    }
  };

  const v_6aa070 = async () => {
    if (v_fa63e0 !== 'signup' || v_8e9fad === 'sms' || v_07589d) return;
    if (!v_49ea09) {
      v_b5337f({
        title: v_8d41d7('email_verification.error_title') || '인증 실패',
        message: v_8d41d7('signup.error_empty_phone'),
      });
      return;
    }
    v_9fbff7(true);
    try {
      await v_796ff7({
        email: v_e0c7e8,
        mobile: v_49ea09,
        mobile_code: v_6c3a47,
        purpose: 'signup',
      });
      v_746e8d('sms');
      v_6a8302(300);
      v_537cbb('');
    } catch (v_49263d) {
      v_f9af4d(v_49263d);
    } finally {
      v_9fbff7(false);
    }
  };

  const v_83b05b = async () => {
    if (v_c99bd2.length !== 6 || !v_e0c7e8) return;
    const v_849cde = v_c99bd2.replace(/\D/g, '').slice(0, 6);
    if (v_849cde.length !== 6) return;
    v_ff0c7a(true);
    v_b5337f(null);
    try {
      if (v_8e9fad === 'sms') {
        if (!v_49ea09) throw new Error(v_8d41d7('signup.error_empty_phone'));
        await v_38ae19({
          email: v_e0c7e8,
          mobile: v_49ea09,
          code: v_849cde,
          purpose: v_fa63e0 === 'password_reset' ? 'password_reset' : 'signup',
        });
      } else {
        await v_f947a7({
          email: v_e0c7e8,
          code: v_849cde,
          purpose: v_fa63e0,
        });
      }

      if (v_fa63e0 === 'signup') {
        v_a78885(v_8e9fad === 'sms' ? 'sms' : 'email');
      }
      v_e50001(true);
    } catch (v_49263d) {
      let v_a8cd21 = '인증에 실패했습니다. 코드를 확인하거나 재전송 후 다시 시도해주세요.';
      try {
        v_a8cd21 =
          v_49263d instanceof Error ? v_49263d.message : v_8d41d7('email_verification.error_verify');
        if (!v_a8cd21 || v_a8cd21 === 'email_verification.error_verify') {
          v_a8cd21 = '인증에 실패했습니다. 코드를 확인하거나 재전송 후 다시 시도해주세요.';
        }
        if (v_a8cd21.toLowerCase().includes('unexpected error')) {
          v_a8cd21 = v_8d41d7('email_verification.error_verify') || v_a8cd21;
        }
      } catch (v_37eab7) {

      }
      const v_9f1622 = v_8d41d7('email_verification.error_title') || '인증 실패';
      v_b5337f({ title: v_9f1622, message: v_a8cd21 });
    } finally {
      v_ff0c7a(false);
    }
  };

  const v_03cae9 = () => {
    v_e50001(false);
    if (v_6c4ab9) {
      v_c65f5d.navigate(v_6c4ab9 as any);
    } else {
      v_c65f5d.navigate('Login');
    }
  };

  const v_93136a = v_c99bd2.length === 6;
  const v_15a612 = v_93136a && !!v_e0c7e8 && !v_d1dd8f;
  const v_45e519 = v_fa63e0 === 'signup' && v_8e9fad === 'email' && !!v_49ea09;

  return (
    <>
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <Header
          title={
            v_8e9fad === 'sms'
              ? v_8d41d7('email_verification.title_sms', 'SMS 인증')
              : v_8d41d7('email_verification.title')
          }
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />

        <SafeScrollView
          contentContainerStyle={v_d81136.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={v_d81136.content}>
            <View style={v_d81136.descriptionContainer}>
              <Text style={v_d81136.descriptionText}>
                {v_8e9fad === 'sms'
                  ? v_8d41d7('email_verification.description_sms_prefix', '등록하신 휴대폰 ')
                  : v_8d41d7('email_verification.description_prefix')}
                <Text style={v_d81136.emailText}>
                  {v_8e9fad === 'sms' ? v_49ea09 || '—' : v_e0c7e8 || '—'}
                </Text>
                {v_8e9fad === 'sms'
                  ? v_8d41d7('email_verification.description_sms_suffix', ' 으로 인증번호를 보냈습니다.')
                  : v_8d41d7('email_verification.description_suffix')}
              </Text>
              {v_fa63e0 === 'signup' && (
                <Text style={v_d81136.hintText}>
                  {v_8d41d7(
                    'email_verification.email_confirm_hint',
                    '이메일은 계정 식별에 사용됩니다. 오타가 없는지 다시 확인해 주세요.'
                  )}
                </Text>
              )}
            </View>

            <View style={v_d81136.otpContainer}>
              <OtpInput
                testID="email-verification-code"
                value={v_c99bd2}
                length={6}
                onChange={v_537cbb}
                editable={true}
              />
            </View>

            <View style={v_d81136.resendContainer}>
              <TouchableOpacity
                testID="email-verification-resend"
                onPress={v_cf9840}
                disabled={v_cb36b1 > 0 || v_07589d}
              >
                <Text style={[v_d81136.resendText, v_cb36b1 <= 0 && v_d81136.resendTextActive]}>
                  {v_8d41d7('email_verification.resend')}
                </Text>
              </TouchableOpacity>
              <Text style={v_d81136.timerText} testID="email-verification-timer">
                {v_f85cd6(v_cb36b1)}
              </Text>
            </View>

            {v_45e519 && (
              <TouchableOpacity
                testID="email-verification-sms-failover"
                onPress={v_6aa070}
                disabled={v_07589d}
                style={v_d81136.smsFailover}
              >
                <Text style={v_d81136.smsFailoverText}>
                  {v_8d41d7('email_verification.sms_failover', 'SMS로 인증받기')}
                </Text>
              </TouchableOpacity>
            )}

            <View style={v_d81136.buttonContainer}>
              <PrimaryButton
                testID="email-verification-submit"
                title={
                  v_d1dd8f
                    ? v_8d41d7('email_verification.verifying') || '확인 중...'
                    : v_8d41d7('email_verification.verify_btn')
                }
                onPress={v_83b05b}
                disabled={!v_15a612}
              />
              {(v_d1dd8f || v_07589d) && (
                <ActivityIndicator
                  size="small"
                  color={v_1bfbd0.primary}
                  style={v_d81136.loadingIndicator}
                />
              )}
            </View>
          </View>
        </SafeScrollView>
      </SafeView>

      <AlertModal
        visible={v_3a2ef3}
        title={v_8d41d7('email_verification.success_title')}
        message={v_8d41d7('email_verification.success_message')}
        onConfirm={v_03cae9}
      />
      {v_f136c1 && (
        <AlertModal
          visible
          title={v_f136c1.title}
          message={v_f136c1.message}
          onConfirm={() => v_b5337f(null)}
        />
      )}
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.xlarge * 2,
  },
  descriptionContainer: {
    marginBottom: v_9b1a04.xlarge,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 24,
  },
  hintText: {
    marginTop: v_9b1a04.small,
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: '#9B9B9B',
    lineHeight: 20,
  },
  emailText: {
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: v_9b1a04.xlarge,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: v_9b1a04.large,
    gap: v_9b1a04.small,
  },
  resendText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: '#9B9B9B',
  },
  resendTextActive: {
    color: v_1bfbd0.buttonPrimary,
  },
  timerText: {
    fontSize: 16,
    fontFamily: v_843035.bold,
    color: '#3B82F6',
  },
  smsFailover: {
    alignItems: 'center',
    marginBottom: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.small,
  },
  smsFailoverText: {
    fontSize: 15,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.buttonPrimary,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginBottom: v_9b1a04.xlarge,
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small,
    alignSelf: 'center',
  },
});

export default v_a82b55;
