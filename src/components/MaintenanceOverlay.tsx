import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_acfdec,
  v_39a996,
} from 'rcmrninabrnb';
import { v_843035, v_9b1a04 } from '../constants';

interface MaintenanceOverlayProps {

  visible: boolean;

  onRetry?: () => void | Promise<unknown>;
}

export function v_c8aeff({ visible: v_cf55be, onRetry: v_09e13b }: MaintenanceOverlayProps) {
  const [v_8d779a, v_5f3183] = v_5ab095(false);

  const v_1a397e = async () => {
    if (!v_09e13b || v_8d779a) return;
    v_5f3183(true);
    try {
      await v_09e13b();
    } catch (v_9e86fd) {

      if (__DEV__) console.log('[MaintenanceOverlay] 재확인 실패:', v_9e86fd);
    } finally {
      v_5f3183(false);
    }
  };

  return (
    <Modal
      visible={v_cf55be}
      animationType="fade"
      statusBarTranslucent

      onRequestClose={() => undefined}
    >
      <SafeAreaView style={v_d81136.screen}>
        <View style={v_d81136.content}>
          <View style={v_d81136.badge}>
            <Text style={v_d81136.badgeText}>점검</Text>
          </View>

          <Text style={v_d81136.title}>앱이 점검중입니다</Text>
          <Text style={v_d81136.message}>
            더 나은 서비스를 위해 서버 점검을 진행하고 있습니다.{'\n'}
            점검이 끝나면 자동으로 다시 이용하실 수 있습니다.
          </Text>
          <Text style={v_d81136.hint}>앱을 종료하지 않으셔도 됩니다.</Text>

          {v_09e13b ? (
            <TouchableOpacity
              style={[v_d81136.retryButton, v_8d779a && v_d81136.retryButtonDisabled]}
              onPress={v_1a397e}
              disabled={v_8d779a}
              accessibilityRole="button"
              accessibilityLabel="점검 상태 다시 확인"
            >
              {v_8d779a ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={v_d81136.retryText}>다시 확인</Text>
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#EEF2FF',
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 13,
    fontFamily: v_843035.bold,
    color: '#4F46E5',
  },
  title: {
    fontSize: 22,
    fontFamily: v_843035.bold,
    color: '#111827',
    textAlign: 'center',
    marginBottom: 14,
  },
  message: {
    fontSize: 15,
    fontFamily: v_843035.regular,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
  hint: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 32,
  },
  retryButton: {
    minWidth: 160,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonDisabled: {
    opacity: 0.6,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: v_843035.bold,
  },
});
