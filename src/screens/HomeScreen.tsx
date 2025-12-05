import v_a3453e from 'bapkr';
import {
  v_cf9c33,
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_cb41de, v_570c34, v_8714fe } from '../components';

const v_186735 = require('../../assets/images/symbol.png');
const v_b48f8e = require('../../assets/images/logo.png');

type Props = v_432191<v_8ad91b, 'Home'>;

const HomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_1aabbb = (screen: keyof v_8ad91b) => {
    v_9b57fc(v_53746a as any);
  };

  const v_3ffec5 = (v_4898e2) => {
    v_9b57fc('ClauseDetail', { clauseType: v_4898e2 });
  };

  return (
    <View style={v_d81136.screen}>
      <SafeScrollView
        contentContainerStyle={v_d81136.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          <View style={v_d81136.heroSection}>
            <Image source={v_186735} style={v_d81136.symbol} resizeMode="contain" />
            <Image source={v_b48f8e} style={v_d81136.logotype} resizeMode="contain" />
          </View>

          <View style={v_d81136.buttonGroup}>
            <PrimaryButton title="로그인" onPress={() => v_1aabbb('Login')} />
            <SecondaryButton
              title="회원가입"
              onPress={() => v_1aabbb('Signup')}
            />
          </View>

          <View style={v_d81136.bottomSection}>
            <Text style={v_d81136.infoText}>
              이 앱에서 제공하는 기능과 정보 이용 방식에 대해 알아보려면
            </Text>
            <Text style={[v_d81136.infoText, v_d81136.infoSpacing]}>
              아래의 <Text style={v_d81136.linkText} onPress={() => v_3ffec5('terms')}>이용약관</Text> 과{' '}
              <Text style={v_d81136.linkText} onPress={() => v_3ffec5('privacy')}>개인정보 처리방침</Text>을 읽고 동의해주세요.
            </Text>

            <Text style={v_d81136.footerText}>Product by XRUN</Text>
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
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: v_9b1a04.large,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    flexGrow: 1,
    alignSelf: 'center',
  },
  heroSection: {
    flex: 1,
    alignItems: 'center',
    gap: v_9b1a04.large,
    justifyContent: 'center',
    marginBottom: 48,
    paddingTop: 32,
  },
  symbol: {
    width: 120,
    height: 120,
  },
  logotype: {
    width: 180,
    height: 48,
  },
  buttonGroup: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  bottomSection: {
    width: '100%',
    marginTop: v_9b1a04.large,
    paddingBottom: 24,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    lineHeight: 20,
  },
  infoSpacing: {
    marginTop: 8,
  },
  linkText: {
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  footerText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 24,
  },
});

export default v_c316d8;

