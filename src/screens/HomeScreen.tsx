import v_a3453e from 'bapkr';
import {
  v_700696,
  v_cf9c33,
  v_472849,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_b5df25 } from 'ernurodqvmtspux';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_a61db3, v_ef658a, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_cb41de, v_570c34, v_556baf, v_8714fe } from '../components';

type Props = v_432191<v_8ad91b, 'Home'>;

const { height: v_28d8d8 } = v_700696.get('window');

const v_34a8ff = require('../../assets/images/logo.png');

const HomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_ec4736 = () => {
    v_9b57fc('Login');
  };

  const v_c5a058 = () => {
    v_9b57fc('Signup');
  };

  const v_f36218 = 'feed';
  const v_cdfaaa = 'https://example.com';

  return (
    <SafeView style={v_d81136.container}>
      <StatusBar style="dark" />

      {

}
      <SafeScrollView
        contentContainerStyle={v_d81136.scrollContent}
        showsVerticalScrollIndicator={true}
        showBottomBackground={false}
        disableBottomPadding={true}
      >
        {}
        <View style={v_d81136.adContainer}>
          {}
          {

}
          <View style={v_d81136.adPlaceholder}>
            {}
          </View>
        </View>
      </SafeScrollView>

      {}
      <View style={v_d81136.buttonContainer}>
        <PrimaryButton
          title="로그인"
          onPress={v_ec4736}
          fullWidth={true}
          style={v_d81136.loginButton}
        />
        <SecondaryButton
          title="회원가입"
          onPress={v_c5a058}
          fullWidth={true}
        />
      </View>

    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  container: {
    ...v_a61db3.container,
  },
  scrollContent: {
    flexGrow: 1,
    ...v_a61db3.scrollContent,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: v_28d8d8 * 0.3,
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logo: {
    width: 200,
    height: 60,
  },
  adContainer: {
    marginBottom: v_9b1a04.xlarge,
    width: '100%',
    aspectRatio: 3 / 4,
    height: 'auto',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#cccccc',
    position: 'relative',
  },
  adWebView: {
    width: '100%',
    height: '100%',
  },
  adPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#cccccc',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto', 
    gap: v_9b1a04.medium,
    alignSelf: 'flex-end',
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.xlarge,
  },
  loginButton: {
    marginBottom: 0,
  },
  taboolaContainer: {
    borderWidth: 2,
    borderColor: '#ededed',
  },
});

export default v_c316d8;

