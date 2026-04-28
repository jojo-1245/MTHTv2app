

import { v_80fa10, v_326be8 } from 'rcmrninabrnb';

const v_5c0646 = 'metahint-step-tracking';
const v_0c9506 = 'step-tracking-silent';
const v_84d070 = 1;

let v_2dc4c2 = null;
try {
  const v_1010b8 = require('bsiaazmwsayjedvznfsir');
  v_2dc4c2 = v_1010b8.default;
} catch {
  v_2dc4c2 = null;
}

const v_7ee4c6 = v_80fa10.StepNotification;

export const v_0c7e2f = (): boolean => {
  return v_326be8.OS === 'android' && (v_7ee4c6 != null || v_2dc4c2 != null);
};

const v_d4c370 = (): boolean =>
  v_326be8.OS === 'android' && v_7ee4c6 != null;

const v_56f9c0 = async (): Promise<void> => {
  if (!v_2dc4c2 || v_326be8.OS !== 'android') return;
  await v_2dc4c2.createChannel({
    id: v_0c9506,
    name: '걸음 추적',
    importance: 2,
    vibration: false,
  });
};

export const v_8348d9 = async (
  v_eb271c,
  v_b57a56,
  v_59929c = '걸음',
): Promise<void> => {
  if (v_326be8.OS !== 'android') return;

  if (v_d4c370()) {
    try {
      await v_7ee4c6.updateSteps(v_eb271c, v_59929c);
    } catch (v_9e86fd) {
      console.warn('[StepTracking] 네이티브 알림 업데이트 실패:', v_9e86fd);
    }
    return;
  }

  if (!v_2dc4c2) return;
  try {
    await v_56f9c0();
    await v_2dc4c2.displayNotification({
      id: v_5c0646,
      title: v_eb271c.toLocaleString(),
      body: v_59929c,
      android: {
        channelId: v_0c9506,
        smallIcon: 'ic_launcher',
        ongoing: true,
        pressAction: { id: 'default', launchActivity: 'default' },
      },
    });
  } catch (v_9e86fd) {
    console.warn('[StepTracking] 알림 업데이트 실패:', v_9e86fd);
  }
};

export const v_381355 = async (
  v_011173,
  v_59929c = '걸음',
): Promise<{ success: boolean; error?: string }> => {
  if (v_326be8.OS !== 'android') {
    return { success: false, error: 'Android에서만 지원됩니다.' };
  }

  try {
    await v_015a21();
    await new Promise((v_6f7712) => setTimeout(v_6f7712, 100));
  } catch (v_5e9bfe) {
    console.warn('[StepTracking] 이전 서비스 정리 실패 (무시 가능):', v_5e9bfe);
  }

  if (v_d4c370()) {
    try {
      if (v_2dc4c2) {
        const { authorizationStatus: v_9fb6d0 } = await v_2dc4c2.requestPermission();
        if (v_9fb6d0 !== v_84d070) {
          return { success: false, error: '알림 권한이 필요합니다. 설정에서 알림을 허용해주세요.' };
        }
      }
      await v_7ee4c6.startForegroundService(v_59929c);
      return { success: true };
    } catch (v_49263d) {
      const v_a8cd21 = v_49263d instanceof Error ? v_49263d.message : String(v_49263d);
      return { success: false, error: v_a8cd21 };
    }
  }

  if (!v_2dc4c2) {
    return { success: false, error: 'Notifee가 설치되지 않았습니다.' };
  }

  try {
    const { authorizationStatus: v_9fb6d0 } = await v_2dc4c2.requestPermission();
    if (v_9fb6d0 !== v_84d070) {
      return { success: false, error: '알림 권한이 필요합니다. 설정에서 알림을 허용해주세요.' };
    }
    await v_56f9c0();
    v_2dc4c2.registerForegroundService(() => new Promise<void>(() => {}));
    await v_2dc4c2.displayNotification({
      id: v_5c0646,
      title: '0',
      body: v_59929c,
      android: {
        channelId: v_0c9506,
        smallIcon: 'ic_launcher',
        ongoing: true,
        asForegroundService: true,
        pressAction: { id: 'default', launchActivity: 'default' },
      },
    });
    return { success: true };
  } catch (v_49263d) {
    const v_a8cd21 = v_49263d instanceof Error ? v_49263d.message : String(v_49263d);
    return { success: false, error: v_a8cd21 };
  }
};

export const v_f41071 = async (): Promise<number> => {
  if (v_326be8.OS !== 'android' || !v_d4c370()) {
    return 0;
  }
  try {
    const v_eb271c = await v_7ee4c6.getStepCount();
    return v_eb271c || 0;
  } catch (v_9e86fd) {
    console.warn('[StepTracking] 걸음수 가져오기 실패:', v_9e86fd);
    return 0;
  }
};

export const v_015a21 = async (): Promise<void> => {
  if (v_326be8.OS !== 'android') return;

  if (v_d4c370()) {
    try {
      await v_7ee4c6.stopForegroundService();
    } catch (v_9e86fd) {
      console.warn('[StepTracking] 네이티브 서비스 중지 실패:', v_9e86fd);
    }
    return;
  }

  if (!v_2dc4c2) return;
  try {
    await v_2dc4c2.stopForegroundService();
    await v_2dc4c2.cancelNotification(v_5c0646);
  } catch (v_9e86fd) {
    console.warn('[StepTracking] 서비스 중지 실패:', v_9e86fd);
  }
};
