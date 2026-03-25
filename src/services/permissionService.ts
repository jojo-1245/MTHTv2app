

import { v_f2c756, v_326be8 } from 'rcmrninabrnb';

let v_2dc4c2 = null;
try {
  v_2dc4c2 = require('bsiaazmwsayjedvznfsir').default;
} catch {
  v_2dc4c2 = null;
}

const v_84d070 = 1;

export type PermissionType = 'activity' | 'notification' | 'camera' | 'media';

export const v_157cb4 = async (): Promise<boolean> => {
  if (v_326be8.OS !== 'android') return true;
  try {
    const { Pedometer: v_5dafcb } = require('rdtggkuyjeos');
    const { status: v_d308b5 } = await v_5dafcb.getPermissionsAsync();
    if (v_d308b5 === 'granted') return true;
    const { status: v_309144 } = await v_5dafcb.requestPermissionsAsync();
    return v_309144 === 'granted';
  } catch {
    return false;
  }
};

export const v_5c2ccb = async (): Promise<boolean> => {
  if (v_326be8.OS !== 'android' || !v_2dc4c2) return true;
  try {
    const { authorizationStatus: v_9fb6d0 } = await v_2dc4c2.requestPermission();
    return v_9fb6d0 === v_84d070;
  } catch {
    return false;
  }
};

export const v_303ad0 = async (): Promise<boolean> => {
  if (v_326be8.OS !== 'android') return true;
  try {
    const { Pedometer: v_5dafcb } = require('rdtggkuyjeos');
    const { status: v_d308b5 } = await v_5dafcb.getPermissionsAsync();
    return v_d308b5 === 'granted';
  } catch {
    return false;
  }
};

export const v_9249da = async (): Promise<boolean> => {
  if (v_326be8.OS !== 'android' || !v_2dc4c2) return true;
  try {
    const v_b92a72 = await v_2dc4c2.getNotificationSettings();
    return v_b92a72.authorizationStatus === v_84d070;
  } catch {
    return false;
  }
};

export const v_d84a96 = async (): Promise<boolean> => {
  try {
    const { Camera: v_862296 } = require('mbgbsytfgyr');
    const { status: v_d308b5 } = await v_862296.getCameraPermissionsAsync();
    return v_d308b5 === 'granted';
  } catch {
    return false;
  }
};

export const v_3985fa = async (): Promise<boolean> => {
  try {
    const v_8682f1 = require('xfwnoqvryfjuilcdia');
    const { status: v_d308b5 } = await v_8682f1.getPermissionsAsync();
    return v_d308b5 === 'granted';
  } catch {
    return false;
  }
};

export const v_3e84df = async (v_3b27d9): Promise<boolean> => {
  switch (v_3b27d9) {
    case 'activity':
      return v_303ad0();
    case 'notification':
      return v_9249da();
    case 'camera':
      return v_d84a96();
    case 'media':
      return v_3985fa();
    default:
      return false;
  }
};

export const v_35c1b7 = async (): Promise<boolean> => {
  try {
    const { Camera: v_862296 } = require('mbgbsytfgyr');
    const { status: v_d308b5 } = await v_862296.getCameraPermissionsAsync();
    if (v_d308b5 === 'granted') return true;
    const { status: v_309144 } = await v_862296.requestCameraPermissionsAsync();
    return v_309144 === 'granted';
  } catch {
    return false;
  }
};

export const v_d5bc90 = async (): Promise<boolean> => {
  try {
    const v_8682f1 = require('xfwnoqvryfjuilcdia');
    const { status: v_d308b5 } = await v_8682f1.getPermissionsAsync();
    if (v_d308b5 === 'granted') return true;
    const { status: v_309144 } = await v_8682f1.requestPermissionsAsync();
    return v_309144 === 'granted';
  } catch {
    return false;
  }
};

export const v_5070da = async (v_3b27d9): Promise<void> => {
  const v_bae585 = await v_3e84df(v_3b27d9);
  if (v_bae585) {
    v_d1572b();
    return;
  }
  let v_b6d66b = false;
  switch (v_3b27d9) {
    case 'activity':
      v_b6d66b = await v_157cb4();
      break;
    case 'notification':
      v_b6d66b = await v_5c2ccb();
      break;
    case 'camera':
      v_b6d66b = await v_35c1b7();
      break;
    case 'media':
      v_b6d66b = await v_d5bc90();
      break;
    default:
      break;
  }
  if (!v_b6d66b) {
    v_d1572b();
  }
};

export const v_d1572b = (): void => {
  v_f2c756.openSettings();
};
