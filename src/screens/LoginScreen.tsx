import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_cf9c33,
  v_e767d1,
  v_326be8,
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_729608, v_e2ca42, v_cb41de, v_e775af } from '../components';
import type { v_8ad91b } from '../navigation';

const v_186735 = require('../../assets/images/symbol.png');
const v_b48f8e = require('../../assets/images/logo.png');

type Props = v_432191<v_8ad91b, 'Login'>;

const LoginScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_adc076, v_52b279] = v_5ab095('');

  return (
    <KeyboardAvoidingView
      style={v_d81136.flex}
      behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={v_326be8.OS === 'ios' ? 0 : 24}
    >
      <View style={v_d81136.screen}>
        <Header
          showBackButton
          title=""
          onBackPress={() => v_c65f5d.goBack()}
          containerStyle={v_d81136.flatHeader}
        />
        <ScrollView
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={v_d81136.inner}>
            <View style={v_d81136.logoSection}>
              <Image source={v_186735} style={v_d81136.symbol} resizeMode="contain" />
              <Image source={v_b48f8e} style={v_d81136.logo} resizeMode="contain" />
            </View>

            <View style={v_d81136.form}>
              <TextField
                label="Email address"
                placeholder="Your email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={v_e0c7e8}
                onChangeText={v_fedf34}
              />
              <PasswordField
                label="Password"
                placeholder="Password"
                value={v_adc076}
                onChangeText={v_52b279}
              />
              <TouchableOpacity
                style={v_d81136.linkButton}
                onPress={() => v_c65f5d.navigate('ForgotPassword')}
              >
                <Text style={v_d81136.linkText}>Forgot password?</Text>
              </TouchableOpacity>
              <PrimaryButton title="로그인" onPress={() => v_c65f5d.navigate('ListHome')} />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const v_d81136 = v_472849.create({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  flatHeader: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: v_9b1a04.medium,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 48,
  },
  inner: {
    width: '100%',
    maxWidth: 780,
    alignItems: 'center',
  },
  logoSection: {
    alignItems: 'center',
    gap: v_9b1a04.large,
    marginBottom: 48,
  },
  symbol: {
    width: 120,
    height: 120,
  },
  logo: {
    width: 160,
    height: 40,
  },
  form: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  linkButton: {
    alignSelf: 'flex-end',
  },
  linkText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
});

export default v_f4f851;

