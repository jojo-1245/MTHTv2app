import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_cb41de } from '../components';
import type { v_8ad91b } from '../navigation';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'PasswordChanged'>;

const PasswordChangedScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  return (
    <View style={v_d81136.screen}>
      <View style={v_d81136.content}>
        <Text style={v_d81136.title}>{v_8d41d7('password_changed.title')}</Text>
        <Text style={v_d81136.subtitle}>{v_8d41d7('password_changed.subtitle')}</Text>
        <PrimaryButton
          title={v_8d41d7('password_changed.btn_title')}
          onPress={() => v_c65f5d.navigate('Login')}
          fullWidth
        />
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: v_9b1a04.large,
  },
  content: {
    width: '100%',
    maxWidth: 780,
    alignItems: 'center',
    gap: v_9b1a04.large,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.extrabold,
    color: v_1bfbd0.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
  },
});

export default v_873cfb;

