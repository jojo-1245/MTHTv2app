import v_a3453e from 'bapkr';
import {
  v_cf9c33,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_556baf } from '../components';

type Props = v_432191<v_8ad91b, 'Home'>;

const HomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  return (
    <SafeView style={v_d81136.screen} backgroundColor="#F8F8F8">
      <View style={v_d81136.container}>
        {}
        <View style={v_d81136.adContainer}>
          <Text style={v_d81136.adText}>전면 광고</Text>
        </View>

        {}
        <View style={v_d81136.buttonGroup}>
          <TouchableOpacity
            style={v_d81136.loginButton}
            onPress={() => v_9b57fc('Login')}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="로그인"
          >
            <Text style={v_d81136.loginButtonText}>로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={v_d81136.signupButton}
            onPress={() => v_9b57fc('SignupTerms')}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="회원가입"
          >
            <Text style={v_d81136.signupButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 102,
    alignItems: 'center',
  },
  adContainer: {
    width: 327,
    height: 393,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  adText: {
    fontSize: 30,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  buttonGroup: {
    width: 327,
    gap: 15,
  },
  loginButton: {
    height: 56,
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.background,
    lineHeight: 24,
  },
  signupButton: {
    height: 56,
    backgroundColor: v_1bfbd0.background,
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.buttonPrimary,
    lineHeight: 24,
  },
});

export default v_c316d8;

