import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_5427ed, v_cb41de, v_570c34 } from '../components';
import { v_8e2768 } from '../components';

type Props = v_432191<v_8ad91b, 'EmailVerification'>;

const EmailVerificationScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const v_e0c7e8 = v_c7daf6.params?.email || '';
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const [v_3a2ef3, v_e50001] = v_5ab095(false);

  const v_83b05b = () => {
    if (v_c99bd2.length === 6) {
      v_e50001(true);
    }
  };

  const v_03cae9 = () => {
    v_e50001(false);

    v_c65f5d.navigate('SignupPassword');
  };

  return (
    <>
      <View style={v_d81136.screen}>
        <Header
          title=""
          showBackButton
          onBackPress={() => v_c65f5d.goBack()}
          containerStyle={v_d81136.header}
        />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={v_d81136.container}>
            {}
            <Text style={v_d81136.stepText}>1/6</Text>

            {}
            <Text style={v_d81136.title}>인증번호를 입력해 주세요.</Text>

            {}
            <Text style={v_d81136.subtitle}>
              {v_e0c7e8} 이메일로 보내드린{'\n'}인증코드 6자리 코드를 입력하세요.
            </Text>

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
            <TouchableOpacity style={v_d81136.resendContainer}>
              <Text style={v_d81136.resendText}>코드 재전송</Text>
            </TouchableOpacity>

            {}
            <View style={v_d81136.buttonContainer}>
              <PrimaryButton
                title="다음"
                onPress={v_83b05b}
                disabled={v_c99bd2.length !== 6}
                style={v_c99bd2.length !== 6 && v_d81136.buttonDisabled}
              />
            </View>
          </View>
        </SafeScrollView>
      </View>

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
  header: {
    backgroundColor: 'transparent',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 32,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    alignSelf: 'center',
  },
  stepText: {
    fontSize: 18,
    fontFamily: v_843035.medium,
    color: 'rgba(94, 98, 172, 0.18)',
    textAlign: 'right',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    lineHeight: 32,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: '#9B9B9B',
    lineHeight: 24,
    letterSpacing: -0.16,
    marginBottom: 48,
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  resendText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: '#9B9B9B',
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 32,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
});

export default v_a82b55;

