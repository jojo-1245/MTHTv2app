import v_a3453e, { v_de06a3, v_c4deb2, v_5ab095 } from 'bapkr';
import {
  v_03e392,
  v_cf9c33,
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import * as v_d05ab5 from 'khtmgrssvfqqjmzoc';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_729608, v_cb41de } from '../components';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_1dce80 } from '../utils/imageProcessing';
import { v_692d9d } from '../services/upload';

type Props = v_432191<v_8ad91b, 'CloneUpload'>;

const CloneUploadScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const [v_c8c313, v_63cc9c] = v_5ab095<string | undefined>(
    v_c7daf6.params?.facePreview,
  );
  const [v_50f4c1, v_62e494] = v_5ab095(false);

  v_c4deb2(() => {
    if (v_c7daf6.params?.facePreview) {
      v_63cc9c(v_c7daf6.params.facePreview);
    }
  }, [v_c7daf6.params?.facePreview]);

  const v_b5bce1 = () => {
    v_c65f5d.navigate('CloneCamera');
  };

  const v_2eca4d = v_de06a3(async () => {
    try {
      const v_43c42e = await v_d05ab5.launchImageLibraryAsync({
        mediaTypes: v_d05ab5.MediaTypeOptions.Images,
        quality: 1,
      });

      if (v_43c42e.canceled || !v_43c42e.assets?.length) {
        return;
      }

      v_62e494(true);
      const v_b76cd8 = v_43c42e.assets[0];
      const v_720567 = await v_1dce80(v_b76cd8.uri);
      await v_692d9d(v_720567.formData);
      v_63cc9c(v_720567.base64 ? `data:image/jpeg;base64,${v_720567.base64}` : v_720567.uri);
      v_03e392.alert('업로드 완료', '얼굴 이미지가 성공적으로 업로드되었습니다.');
    } catch (v_5e9bfe) {
      const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : '이미지를 처리하지 못했습니다.';
      v_03e392.alert('오류', v_a8cd21);
    } finally {
      v_62e494(false);
    }
  }, []);

  return (
    <View style={v_d81136.screen}>
      <Header
        title="Upload Image"
        subtitle='"Help us get to know the person you wish to meet."'
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />

      <ScrollView
        contentContainerStyle={v_d81136.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.card}>
          <Text style={v_d81136.cardLabel}>Front-facing Photo</Text>
          <View style={v_d81136.photoPlaceholder}>
            {v_c8c313 ? (
              <Image source={{ uri: v_c8c313 }} style={v_d81136.photo} />
            ) : (
              <Feather name="user" size={64} color={v_1bfbd0.border} />
            )}
          </View>
        </View>

        <View style={v_d81136.guideline}>
          <Text style={v_d81136.guidelineTitle}>Photo Upload Guidelines</Text>
          <Text style={v_d81136.guidelineBody}>
            Please upload a clear photo showing the deceased’s face for accurate modeling
          </Text>
        </View>

        <View style={v_d81136.buttonRow}>
          <TouchableOpacity
            style={v_d81136.actionButton}
            activeOpacity={0.85}
            onPress={v_b5bce1}
          >
            <Feather name="camera" size={24} color={v_1bfbd0.text} />
            <Text style={v_d81136.actionText}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={v_d81136.actionButton}
            activeOpacity={0.85}
            onPress={v_2eca4d}
            disabled={v_50f4c1}
          >
            <Feather name="image" size={24} color={v_1bfbd0.text} />
            <Text style={v_d81136.actionText}>
              {v_50f4c1 ? 'Uploading...' : 'Upload a Photo'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={v_d81136.tipBox}>
          <Text style={v_d81136.tipLabel}>[Tip]</Text>
          <Text style={v_d81136.tipText}>
            Upload frontal and profile photos that match the guidelines!
          </Text>
        </View>

        <PrimaryButton title="Next" onPress={() => v_c65f5d.navigate('CloneCamera')} />
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
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.xlarge,
    gap: v_9b1a04.large,
  },
  card: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 24,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: '#f4f4f6',
    gap: v_9b1a04.medium,
  },
  cardLabel: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.mutedText,
  },
  photoPlaceholder: {
    height: 220,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: '#f8f9fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  guideline: {
    gap: 8,
  },
  guidelineTitle: {
    fontSize: 15,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  guidelineBody: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: v_9b1a04.medium,
  },
  actionButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#f9fafc',
    borderWidth: 1,
    borderColor: '#eef0f4',
    paddingVertical: v_9b1a04.medium,
    alignItems: 'center',
    justifyContent: 'center',
    gap: v_9b1a04.small,
  },
  actionText: {
    fontSize: 15,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  tipBox: {
    borderRadius: 16,
    backgroundColor: '#f5f7fb',
    padding: v_9b1a04.medium,
    gap: 4,
  },
  tipLabel: {
    fontSize: 13,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  tipText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});

export default v_af04e5;


