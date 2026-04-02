import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_03e392,
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
import { v_c1a440 } from '../services/signupApi';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'ForgotPassword'>;

const ForgotPasswordScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_683210, v_34a50a] = v_5ab095(false);

  const v_2de427 = async () => {
    const v_2f361a = v_e0c7e8.trim().toLowerCase();
    if (!v_2f361a || !/\S+@\S+\.\S+/.test(v_2f361a)) {
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('login.invalid_email') || '올바른 이메일을 입력해주세요.');
      return;
    }

    v_34a50a(true);
    try {
      await v_c1a440({ email: v_2f361a, purpose: 'password_reset' });
      v_c65f5d.navigate('PasswordVerification', { email: v_2f361a });
    } catch (v_5e9bfe) {
      v_03e392.alert(
        v_8d41d7('common.error'),
        v_5e9bfe?.message || '인증코드 발송에 실패했습니다. 다시 시도해주세요.'
      );
    } finally {
      v_34a50a(false);
    }
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title={v_8d41d7('login.forgot_password')}
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
            label={v_8d41d7('login.email_label')}
            placeholder={v_8d41d7('login.email_placeholder')}
            keyboardType="email-address"
            autoCapitalize="none"
            value={v_e0c7e8}
            onChangeText={v_fedf34}
          />
          <PrimaryButton
            title={v_8d41d7('forgot_password.send_code')}
            onPress={v_2de427}
            disabled={v_683210}
          />

          <View style={v_d81136.footerRow}>
            <Text style={v_d81136.footerText}>{v_8d41d7('forgot_password.remember_pwd')}</Text>
            <TouchableOpacity onPress={() => v_c65f5d.navigate('Login')}>
              <Text style={v_d81136.footerLink}>{v_8d41d7('common.login')}</Text>
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
