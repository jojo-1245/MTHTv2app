import v_a3453e from 'bapkr';
import { v_3094a2, v_19b633, v_472849, v_aa7413, v_39a996 } from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface UpdateOverlayProps {
  visible: boolean;
  progress: number;
  message?: string;
}

export const UpdateOverlay: v_a3453e.FC<UpdateOverlayProps> = ({ visible: v_cf55be, progress: v_a63fde, message: v_a8cd21 }) => {
  return (
    <Modal visible={v_cf55be} transparent animationType="fade">
      <View style={v_d81136.overlay}>
        <View style={v_d81136.card}>
          <ActivityIndicator size="large" color={v_1bfbd0.primary} style={v_d81136.spinner} />
          <Text style={v_d81136.title}>앱 업데이트 중</Text>
          <Text style={v_d81136.message}>{v_a8cd21 || '최신 버전을 다운로드하고 있습니다.\n잠시만 기다려주세요.'}</Text>
          
          <View style={v_d81136.progressContainer}>
            <View style={[v_d81136.progressBar, { width: `${v_a63fde}%` }]} />
          </View>
          <Text style={v_d81136.progressText}>{v_a63fde}%</Text>
        </View>
      </View>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: v_9b1a04.large,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
  },
  spinner: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: v_1bfbd0.primary,
  },
  progressText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.primary,
  },
});
