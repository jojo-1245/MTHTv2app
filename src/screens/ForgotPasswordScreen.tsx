import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_729608, v_cb41de, v_e775af } from '../components';
import type { v_8ad91b } from '../navigation';

type Props = v_432191<v_8ad91b, 'ForgotPassword'>;

const ForgotPasswordScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_e0c7e8, v_fedf34] = v_5ab095('');

  return (
    <View style={v_d81136.screen}>
      <Header
        title="Forgot password?"
        subtitle=""
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />
      <ScrollView
        contentContainerStyle={v_d81136.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.form}>
          <TextField
            label="Email address"
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={v_e0c7e8}
            onChangeText={v_fedf34}
          />
          <PrimaryButton
            title="Send code"
            onPress={() => v_c65f5d.navigate('PasswordVerification')}
          />

          <View style={v_d81136.footerRow}>
            <Text style={v_d81136.footerText}>Remember password? </Text>
            <TouchableOpacity onPress={() => v_c65f5d.navigate('Login')}>
              <Text style={v_d81136.footerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
    paddingBottom: 40,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 32,
  },
  form: {
    width: '100%',
    maxWidth: 780,
    gap: v_9b1a04.large,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  footerLink: {
    fontSize: 13,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
});

export default v_040c8f;

