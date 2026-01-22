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
import { v_729608, v_e2ca42, v_cb41de } from '../components';
import type { v_8ad91b } from '../navigation';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'ResetPassword'>;

const ResetPasswordScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');

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
            onPress={() => v_c65f5d.navigate('PasswordChanged')}
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
    backgroundColor: v_1bfbd0.background,
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

