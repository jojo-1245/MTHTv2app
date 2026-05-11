import v_a3453e from 'bapkr';
import {
  v_39a996,
  v_03e392,
  v_aa7413,
  v_326be8,
  v_472849,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_2694e4, v_294b10 } from 'ahewcyoxtiosvtfuluxp';
import { v_b2c639 } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_729608 } from '../../components';
import { v_1bfbd0 } from '../../constants';

export interface PostcodeResult {
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  buildingName?: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (data: PostcodeResult) => void;
}

const v_76fac1 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <style>
    html, body, #wrap { margin: 0; padding: 0; height: 100%; width: 100%; }
    body { background: #fff; -webkit-text-size-adjust: 100%; }
  </style>
</head>
<body>
  <div id="wrap"></div>
  <script>
    function send(payload) {
      if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
      }
    }
    window.addEventListener('error', function(e) {
      send({ type: 'error', message: (e && e.message) || 'script error' });
    });
  </script>
  <script
    src="//t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    onerror="send({type:'cdn_failed', message:'postcode CDN load failed'})"
  ></script>
  <script>
    try {
      if (typeof daum === 'undefined' || !daum.Postcode) {
        send({ type: 'cdn_failed', message: 'daum.Postcode unavailable' });
      } else {
      new daum.Postcode({
        oncomplete: function(data) {
          send({
            type: 'select',
            zonecode: data.zonecode || '',
            roadAddress: data.roadAddress || '',
            jibunAddress: data.jibunAddress || '',
            buildingName: data.buildingName || ''
          });
        },
        onclose: function(state) {
          if (state === 'FORCE_CLOSE') {
            send({ type: 'close' });
          }
        },
        width: '100%',
        height: '100%'
      }).embed(document.getElementById('wrap'));
      }
    } catch (e) {
      send({ type: 'error', message: (e && e.message) || 'postcode init failed' });
    }
  </script>
</body>
</html>
`;

const KakaoPostcodeWebView: v_a3453e.FC<Props> = ({ visible: v_cf55be, onClose: v_0890f8, onSelect: v_3ac615 }) => {

  const v_7e7822 = v_a3453e.useRef(false);

  const v_a0166c = v_a3453e.useCallback(
    (v_58ca36) => {
      if (v_7e7822.current) return;
      v_7e7822.current = true;
      if (__DEV__) {
        console.error('[KakaoPostcodeWebView] 로드 실패:', v_58ca36);
      }
      v_03e392.alert(
        '주소 검색 오류',
        '주소 검색을 불러올 수 없습니다. 네트워크 상태를 확인하거나 주소를 직접 입력해 주세요.',
        [{ text: '확인', onPress: v_0890f8 }],
        { cancelable: false }
      );
    },
    [v_0890f8]
  );

  v_a3453e.useEffect(() => {
    if (v_cf55be) {
      v_7e7822.current = false;
    }
  }, [v_cf55be]);

  const v_99b1ed = (event: v_294b10) => {
    const v_479f05 = v_d48baf?.nativeEvent?.data;
    if (!v_479f05) return;
    try {
      const v_badeaf = JSON.parse(v_479f05) as
        | ({ type: 'select' } & PostcodeResult)
        | { type: 'close' }
        | { type: 'error'; message?: string }
        | { type: 'cdn_failed'; message?: string };
      if (v_badeaf.type === 'select') {
        v_3ac615({
          zonecode: v_badeaf.zonecode,
          roadAddress: v_badeaf.roadAddress,
          jibunAddress: v_badeaf.jibunAddress,
          buildingName: v_badeaf.buildingName,
        });
        return;
      }
      if (v_badeaf.type === 'close') {
        v_0890f8();
        return;
      }
      if (v_badeaf.type === 'cdn_failed') {
        v_a0166c(v_badeaf.message || 'cdn_failed');
        return;
      }
      if (v_badeaf.type === 'error') {
        v_a0166c(v_badeaf.message || 'script error');
        return;
      }
    } catch (v_9e86fd) {
      if (__DEV__) console.warn('[KakaoPostcodeWebView] message parse 실패:', v_9e86fd, v_479f05);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={v_cf55be}
      onRequestClose={v_0890f8}
      statusBarTranslucent
    >
      <SafeAreaProvider>
        <View style={v_d81136.container}>
          <Header title="주소 검색" showBackButton onBackPress={v_0890f8} />
          <WebView
          originWhitelist={['*']}
          source={{ html: v_76fac1, baseUrl: 'https://postcode.local' }}
          onMessage={v_99b1ed}
          onError={(v_6f3a9d) => {
            const { nativeEvent: v_76b943 } = v_6f3a9d;
            v_a0166c(`onError: ${v_76b943?.description || 'unknown'}`);
          }}
          onHttpError={(v_6f3a9d) => {
            const { nativeEvent: v_76b943 } = v_6f3a9d;
            if (__DEV__) {
              console.warn(
                '[KakaoPostcodeWebView] onHttpError',
                v_76b943?.statusCode,
                v_76b943?.url
              );
            }

          }}
          javaScriptEnabled
          domStorageEnabled
          mixedContentMode={v_326be8.OS === 'android' ? 'compatibility' : undefined}
          scalesPageToFit={v_326be8.OS === 'ios' ? false : undefined}
          startInLoadingState
          renderLoading={() => (
            <View style={v_d81136.loadingWrap}>
              <ActivityIndicator size="large" color={v_1bfbd0.primary} />
            </View>
          )}
        />
        </View>
      </SafeAreaProvider>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  loadingWrap: {
    ...v_472849.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default v_8da413;
