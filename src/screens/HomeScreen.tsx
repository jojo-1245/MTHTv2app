import v_a3453e from 'bapkr';
import {
  v_cf9c33,
  v_472849,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_b5df25 } from 'ernurodqvmtspux';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_dd725b, v_570c34, v_556baf, v_8714fe } from '../components';
import { v_d91974 } from '../utils/tabletLayout';

type Props = v_432191<v_8ad91b, 'Home'>;

const v_186735 = require('../../assets/images/symbol.png');
const v_16cea9 = require('../../assets/images/logo.png');

const HomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const { t: v_8d41d7 } = v_772971();
  const v_6c4b91 = v_d91974();
  const v_76eb7f = v_6c4b91.isTablet;

  const v_ec4736 = () => {
    v_9b57fc('Login');
  };

  const v_c5a058 = () => {
    v_9b57fc('Signup');
  };

  const v_762fca = v_76eb7f
    ? v_6c4b91.isLandscape
      ? 480
      : 420
    : undefined;

  return (
    <SafeView
      style={v_d81136.container}
      backgroundColor={v_1bfbd0.white}
      bottomBackgroundColor="#000000"
    >
      <StatusBar style="dark" />

      {v_76eb7f ? (
        <View style={v_d81136.tabletMain}>
          <View style={[v_d81136.tabletInner, v_762fca != null && { maxWidth: v_762fca }]}>
            <View style={v_d81136.logoContainerTablet}>
              <Image source={v_186735} style={v_d81136.symbolTablet} resizeMode="contain" />
              <Image source={v_16cea9} style={v_d81136.logoTablet} resizeMode="contain" />
            </View>

            <View style={v_d81136.buttonContainerTablet}>
              <GradientButton
                title={v_8d41d7('common.login')}
                onPress={v_ec4736}
                fullWidth
                style={v_d81136.loginButton}
              />
              <SecondaryButton
                title={v_8d41d7('common.signup')}
                onPress={v_c5a058}
                fullWidth
                style={v_d81136.loginButton}
              />
            </View>
          </View>
        </View>
      ) : (
        <>
          <View style={v_d81136.logoContainerMobile}>
            <Image source={v_186735} style={v_d81136.symbol} resizeMode="contain" />
            <Image source={v_16cea9} style={v_d81136.logo} resizeMode="contain" />
          </View>

          <SafeScrollView
            contentContainerStyle={v_d81136.scrollContent}
            showsVerticalScrollIndicator
            showBottomBackground={false}
            disableBottomPadding
          >
            <View style={v_d81136.adContainer}>
              <View style={v_d81136.adPlaceholder} />
            </View>
          </SafeScrollView>

          <View style={v_d81136.buttonContainerMobile}>
            <GradientButton
              title={v_8d41d7('common.login')}
              onPress={v_ec4736}
              fullWidth
              style={v_d81136.loginButton}
            />
            <SecondaryButton
              title={v_8d41d7('common.signup')}
              onPress={v_c5a058}
              fullWidth
              style={v_d81136.loginButton}
            />
          </View>
        </>
      )}
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
  },
  tabletMain: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.xlarge,
  },
  tabletInner: {
    width: '100%',
    alignItems: 'center',
    gap: 48,
  },
  logoContainerTablet: {
    alignItems: 'center',
    gap: 16,
  },
  symbolTablet: {
    width: 140,
    height: 140,
  },
  logoTablet: {
    width: 200,
    height: 50,
  },
  buttonContainerTablet: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  logoContainerMobile: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  symbol: {
    width: 120,
    height: 120,
  },
  logo: {
    width: 160,
    height: 40,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adContainer: {
    marginBottom: v_9b1a04.xlarge,
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#cccccc',
  },
  adPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  buttonContainerMobile: {
    width: '100%',
    marginTop: 'auto',
    gap: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.xlarge,
  },
  loginButton: {
    marginBottom: 0,
  },
});

export default v_c316d8;
