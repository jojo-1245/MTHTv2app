import v_a3453e, { v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
import { v_39a996, v_03e392, v_f2c756, v_472849, v_19b633, v_4623af, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_78ceb7, v_d4f1cc } from 'mbgbsytfgyr';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_1dce80 } from '../utils/imageProcessing';

type Props = v_432191<v_8ad91b, 'CloneCamera'>;

const CloneCameraScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const v_1a165b = v_e662ae<v_78ceb7 | null>(null);
  const [v_915a6b, v_d2702f] = v_5ab095(false);
  const [v_d1a6bb, v_1e66f0] = v_d4f1cc();

  v_c4deb2(() => {
    if (!v_d1a6bb) {
      v_1e66f0();
    }
  }, [v_d1a6bb, v_1e66f0]);

  const v_6766f3 = async () => {
    const v_3393e3 = await v_1e66f0();
    if (!v_3393e3.granted) {
      v_03e392.alert('권한 필요', '카메라 접근 권한을 허용해야 촬영할 수 있습니다.');
    }
  };

  const v_e34bc5 = () => {
    v_f2c756.openSettings().catch(() => {
      v_03e392.alert('오류', '설정을 열 수 없습니다. 수동으로 권한을 허용해주세요.');
    });
  };

  const v_ff0344 = async () => {
    try {
      if (!v_1a165b.current || v_915a6b) {
        return;
      }
      v_d2702f(true);
      const v_2a5a61 = await v_1a165b.current.takePictureAsync({
        quality: 1,
        skipProcessing: true,
      });

      if (!v_2a5a61?.uri) {
        throw new Error('사진을 촬영하지 못했습니다.');
      }

      const v_720567 = await v_1dce80(v_2a5a61.uri);
      console.log('[FaceDetection] processed result:', {
        uri: v_720567.uri,
        width: v_720567.width,
        height: v_720567.height,
        hasBase64: Boolean(v_720567.base64),
      });
    } catch (v_5e9bfe) {
      const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : '촬영을 완료하지 못했습니다.';
      v_03e392.alert('오류', v_a8cd21);
    } finally {
      v_d2702f(false);
    }
  };

  if (!v_d1a6bb) {
    return (
      <View style={v_d81136.loader}>
        <ActivityIndicator size="large" color={v_1bfbd0.text} />
      </View>
    );
  }

  if (!v_d1a6bb.granted) {
    const v_4cc2e9 = v_d1a6bb.canAskAgain;
    const v_5ea0fe = v_4cc2e9 ? '권한 요청' : '설정 열기';
    const v_740284 = v_4cc2e9 ? v_6766f3 : v_e34bc5;

    return (
      <View style={v_d81136.permissionContainer}>
        <Text style={v_d81136.permissionText}>카메라 권한이 필요합니다.</Text>
        <TouchableOpacity style={v_d81136.permissionButton} onPress={v_740284}>
          <Text style={v_d81136.permissionButtonText}>{v_5ea0fe}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={v_d81136.screen}>
      <CameraView ref={v_1a165b} style={v_472849.absoluteFill} facing="front" />

      <TouchableOpacity style={v_d81136.backButton} onPress={() => v_c65f5d.goBack()}>
        <Feather name="arrow-left" size={22} color={v_1bfbd0.text} />
      </TouchableOpacity>

      <View style={v_d81136.guidelineContainer}>
        <View style={v_d81136.guidelineVertical} />
        <View style={v_d81136.guidelineHorizontal} />
        <View style={v_d81136.guidelineOval} />
      </View>

      <View style={v_d81136.bottomSheet}>
        <TouchableOpacity
          style={[v_d81136.captureButton, v_915a6b && v_d81136.captureDisabled]}
          onPress={v_ff0344}
          activeOpacity={0.7}
          disabled={v_915a6b}
        >
          {v_915a6b ? (
            <ActivityIndicator color={v_1bfbd0.text} />
          ) : (
            <Feather name="camera" size={32} color={v_1bfbd0.text} />
          )}
        </TouchableOpacity>
        <Text style={v_d81136.helperText}>Please align the face with the guideline.</Text>
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
    paddingBottom: 40,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 52,
    left: 24,
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guidelineContainer: {
    position: 'absolute',
    top: '18%',
    left: '12%',
    right: '12%',
    bottom: '28%',
  },
  guidelineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 2,
    backgroundColor: '#F7C948',
  },
  guidelineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '45%',
    height: 2,
    backgroundColor: '#F7C948',
  },
  guidelineOval: {
    flex: 1,
    borderRadius: 300,
    borderWidth: 4,
    borderColor: '#F7C948',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: v_9b1a04.xlarge,
    paddingBottom: v_9b1a04.xlarge,
    paddingTop: v_9b1a04.large,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    gap: v_9b1a04.medium,
  },
  captureButton: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 6,
    borderColor: '#fff',
    backgroundColor: v_1bfbd0.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureDisabled: {
    opacity: 0.6,
  },
  helperText: {
    fontSize: 15,
    fontFamily: v_843035.medium,
    color: '#fff',
  },
  permissionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: v_9b1a04.large,
    gap: v_9b1a04.large,
  },
  permissionText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    textAlign: 'center',
  },
  permissionButton: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    borderRadius: 16,
    backgroundColor: v_1bfbd0.text,
  },
  permissionButtonText: {
    color: v_1bfbd0.background,
    fontSize: 15,
    fontFamily: v_843035.semibold,
  },
});

export default v_2b0ec1;


