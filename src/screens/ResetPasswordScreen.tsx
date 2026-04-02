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
import { v_729608, v_e2ca42, v_cb41de } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_7e714c } from '../services/signupApi';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'ResetPassword'>;

const ResetPasswordScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { email: v_e0c7e8, code: v_c99bd2 } = v_c7daf6.params;
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_683210, v_34a50a] = v_5ab095(false);

  const v_51e7d1 = async () => {
    if (v_adc076.length < 8) {
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('signup.password_too_short') || '비밀번호는 8자 이상이어야 합니다.');
      return;
    }
    if (!/[a-zA-Z]/.test(v_adc076) || !/[0-9]/.test(v_adc076)) {
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('signup.password_requirements') || '비밀번호는 영문과 숫자를 포함해야 합니다.');
      return;
    }
    if (v_adc076 !== v_0b3ebe) {
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('reset_password.mismatch') || '비밀번호가 일치하지 않습니다.');
      return;
    }

    v_34a50a(true);
    try {
      await v_7e714c({ email: v_e0c7e8, code: v_c99bd2, new_password: v_adc076 });
      v_c65f5d.navigate('PasswordChanged');
    } catch (v_5e9bfe) {
      v_03e392.alert(
        v_8d41d7('common.error'),
        v_5e9bfe?.message || '비밀번호 변경에 실패했습니다. 다시 시도해주세요.'
      );
    } finally {
      v_34a50a(false);
    }
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title={v_8d41d7('reset_password.title')}
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
          <PasswordField
            label={v_8d41d7('reset_password.new_pwd_label')}
            placeholder={v_8d41d7('reset_password.new_pwd_placeholder')}
            value={v_adc076}
            onChangeText={v_52b279}
          />
          <PasswordField
            label={v_8d41d7('reset_password.confirm_pwd_label')}
            placeholder={v_8d41d7('reset_password.confirm_pwd_placeholder')}
            value={v_0b3ebe}
            onChangeText={v_241a35}
          />
          <PrimaryButton
            title={v_8d41d7('reset_password.btn_title')}
            onPress={v_51e7d1}
            disabled={v_683210}
          />
          <View style={v_d81136.footerRow}>
            <Text style={v_d81136.footerText}>{v_8d41d7('reset_password.footer_text')}</Text>
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
    backgroundColor: v_1bfbd0.white,
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

export default v_db1cc4;
