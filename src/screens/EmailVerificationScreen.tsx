import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import {
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

type Props = v_432191<v_8ad91b, 'EmailVerification'>;

const EmailVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const v_e0c7e8 = v_c7daf6.params?.email || 'oth-staff@example.invalid';
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const [v_3a2ef3, v_e50001] = v_5ab095(false);
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

  const v_cf9840 = () => {
    v_6a8302(300);
    v_537cbb('');
  };

  const v_83b05b = () => {
    if (v_c99bd2.length === 6) {
      v_e50001(true);
    }
  };

  const v_03cae9 = () => {
    v_e50001(false);

    v_c65f5d.navigate('Login');
  };

  const v_93136a = v_c99bd2.length === 6;

  return (
    <>
      <SafeView style={v_d81136.screen}>
        <Header
          title="인증코드를 입력하세요"
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
        />

        <SafeScrollView
          contentContainerStyle={v_d81136.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={v_d81136.content}>
            {}
            <View style={v_d81136.descriptionContainer}>
              <Text style={v_d81136.descriptionText}>
                <Text style={v_d81136.emailText}>{v_e0c7e8}</Text> 이메일로
              </Text>
              <Text style={v_d81136.descriptionText}>
                보내드린 6자리 코드를 입력하세요.
              </Text>
            </View>

            {}
            <View style={v_d81136.otpContainer}>
              <OtpInput
                value={v_c99bd2}
                length={6}
                onChange={v_537cbb}
                editable={true}
              />
            </View>

            {}
            <View style={v_d81136.resendContainer}>
              <TouchableOpacity onPress={v_cf9840} disabled={v_cb36b1 > 0}>
                <Text style={[v_d81136.resendText, v_cb36b1 <= 0 && v_d81136.resendTextActive]}>
                  코드 재전송
                </Text>
              </TouchableOpacity>
              <Text style={v_d81136.timerText}>{v_f85cd6(v_cb36b1)}</Text>
            </View>

            {}
            <View style={v_d81136.buttonContainer}>
              <PrimaryButton
                title="Verify"
                onPress={v_83b05b}
                disabled={!v_93136a}
                style={!v_93136a && v_d81136.buttonDisabled}
              />
            </View>
          </View>
        </SafeScrollView>
      </SafeView>

      <AlertModal
        visible={v_3a2ef3}
        title="인증 완료"
        message="이메일 인증이 완료되었습니다."
        onConfirm={v_03cae9}
      />
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
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
    marginBottom: v_9b1a04.xlarge,
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
  buttonContainer: {
    marginBottom: v_9b1a04.xlarge,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default v_a82b55;
