import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_cb41de, v_570c34, v_e775af } from '../components';

type Props = v_432191<v_8ad91b, 'SignupReferral'>;

const SignupReferralScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_9bf12c, v_fb6bbb] = v_5ab095('');
  const [v_a71df8, v_b876f0] = v_5ab095(false);
  const [v_41ff46, v_2d6b5b] = v_5ab095(false);

  const v_1d0f03 = (v_3b402b) => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_a64837 = (v_3b402b) => {
    v_fb6bbb(v_3b402b);
    if (v_3b402b.length > 0) {
      const v_d065ee = v_1d0f03(v_3b402b);
      v_b876f0(v_d065ee);
      v_2d6b5b(true);
    } else {
      v_2d6b5b(false);
    }
  };

  const v_fc0cf5 = v_9bf12c.length === 0 || v_a71df8;

  const v_420661 = () => {

    v_c65f5d.navigate('SignupSuccess');
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title=""
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
        containerStyle={v_d81136.header}
      />
      <SafeScrollView
        contentContainerStyle={v_d81136.content}
        autoAdjustKeyboardPadding={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          {}
          <Text style={v_d81136.stepText}>6/6</Text>

          {}
          <Text style={v_d81136.title}>
            추천인 코드를{'\n'}입력해주세요.
          </Text>

          {}
          <Text style={v_d81136.subtitle}>
            초대해준 사람의 이메일주소를 입력해주세요.
          </Text>

          {}
          <View style={v_d81136.inputContainer}>
            <TextField
              placeholder="이메일을 입력해주세요"
              value={v_9bf12c}
              onChangeText={v_a64837}
              keyboardType="email-address"
              autoCapitalize="none"
              style={v_d81136.input}
              inputWrapperStyle={v_d81136.inputWrapper}
            />
            {v_41ff46 && (
              <Text
                style={[
                  v_d81136.validationText,
                  v_a71df8 ? v_d81136.validationSuccess : v_d81136.validationError,
                ]}
              >
                {v_a71df8 ? '사용가능한 이메일 입니다.' : '올바른 이메일 형식이 아닙니다.'}
              </Text>
            )}
          </View>

          {}
          <View style={v_d81136.buttonContainer}>
            <PrimaryButton
              title="다음"
              onPress={v_420661}
              disabled={!v_fc0cf5}
              style={!v_fc0cf5 && v_d81136.buttonDisabled}
            />
          </View>
        </View>
      </SafeScrollView>
    </View>
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
  inputContainer: {
    marginBottom: 32,
  },
  inputWrapper: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  input: {
    fontSize: 20,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    lineHeight: 36,
    letterSpacing: -0.2,
  },
  validationText: {
    fontSize: 11,
    fontFamily: v_843035.medium,
    lineHeight: 16,
    letterSpacing: -0.11,
    marginTop: 8,
  },
  validationSuccess: {
    color: '#007AFF',
  },
  validationError: {
    color: v_1bfbd0.error,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 32,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
});

export default v_124daa;

