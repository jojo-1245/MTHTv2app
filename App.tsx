import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_19b633, v_79c4f2, v_326be8 } from 'rcmrninabrnb';
import * as v_7c6176 from 'cnykflwqacloajvnqn';
import { v_c06f2c } from 'kjiqsgell';
import { v_b2c639, v_a39049 } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_4eac84 } from 'tdbilgxptaometuphydosyywsglhnlfgkfkzstthk';
import { v_4fb2ad } from './src/navigation/AppNavigator';
import { v_843035 } from './src/constants';
import { v_a2474a, v_e4a763 } from './src/utils/env';
import { v_4b64f4, v_3ce7c2, v_89739b } from './src/context';
import './src/i18n';

const v_20ccc6 = {
  'Pretendard-Regular': require('./assets/fonts/Pretendard-Regular.otf'),
  'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.otf'),
  'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.otf'),
  'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.otf'),
  'Pretendard-ExtraBold': require('./assets/fonts/Pretendard-ExtraBold.otf'),
};

let v_e0cae9 = false;
type TextLikeComponent = typeof v_19b633 & {
  defaultProps?: {
    style?: v_19b633['props']['style'];
  };
};

const v_83baa4 = () => {
  if (v_e0cae9) {
    return;
  }

  ([v_19b633, v_79c4f2] as TextLikeComponent[]).forEach((v_b0de9c) => {
    if (!v_b0de9c.defaultProps) {
      v_b0de9c.defaultProps = {};
    }

    v_b0de9c.defaultProps.style = [
      {
        fontFamily: 'Pretendard-Regular',
        fontSize: 16,
      },
      v_b0de9c.defaultProps.style,
    ];
  });

  v_e0cae9 = true;
};

export default function v_6540c3() {
  const [v_43f571, v_d39d7d] = v_c06f2c(v_20ccc6);
  const [v_4c1272, v_bf8912] = v_5ab095(false);

  v_c4deb2(() => {
    v_7c6176.preventAutoHideAsync().catch(() => null);
  }, []);

  v_c4deb2(() => {
    v_a2474a()
      .then(() => v_bf8912(true))
      .catch((v_5e9bfe) => {
        console.error('[ENV] 환경 변수 로드 실패:', v_5e9bfe);
        v_bf8912(true);
      });
  }, []);

  v_c4deb2(() => {
    if (!v_4c1272) return;
    try {
      const v_c9c489 = v_e4a763();
      if (v_c9c489.GOOGLE_IOS_CLIENT_ID || v_c9c489.GOOGLE_ANDROID_CLIENT_ID || v_c9c489.GOOGLE_WEB_CLIENT_ID) {
        v_4eac84.configure({
          iosClientId: v_c9c489.GOOGLE_IOS_CLIENT_ID,
          webClientId: v_c9c489.GOOGLE_WEB_CLIENT_ID ?? v_c9c489.GOOGLE_ANDROID_CLIENT_ID,
        });
      }
    } catch {

    }
  }, [v_4c1272]);

  v_c4deb2(() => {
    if (v_43f571) {
      v_83baa4();
      console.log('[FONTS] 폰트 로드 완료: Pretendard');
    }

    if (v_d39d7d) {
      console.error('[FONTS] 폰트 로드 오류:', v_d39d7d);
    }

    if (v_43f571 || v_d39d7d) {
      v_7c6176.hideAsync().catch(() => null);
    }
  }, [v_43f571, v_d39d7d]);

  if ((!v_43f571 && !v_d39d7d) || !v_4c1272) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={v_326be8.OS === 'android' ? v_a39049 : undefined}
    >
      <StatusBar style="dark" />
      <AppProvider>
        <WalletProvider>
          <StepTrackingProvider>
            <AppNavigator />
          </StepTrackingProvider>
        </WalletProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}

