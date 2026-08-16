

const v_6adfe8 = (v_1833e7) => () => {
  throw new Error(
    `[web-stub] 네이티브 전용 모듈에 접근했습니다: @notifee/react-native.${v_1833e7}\n` +
      `푸시 알림은 웹 E2E 로 검증할 수 없습니다. 실기(시뮬레이터/기기)로 확인해야 합니다.`,
  );
};

const v_2dc4c2 = {

  createChannel: async () => 'web-stub-channel',
  requestPermission: async () => ({ authorizationStatus: 1 }),
  getNotificationSettings: async () => ({ authorizationStatus: 1 }),
  cancelNotification: async () => {},
  onForegroundEvent: () => () => {},
  onBackgroundEvent: () => {},

  displayNotification: v_6adfe8('displayNotification'),
  registerForegroundService: v_6adfe8('registerForegroundService'),
  stopForegroundService: v_6adfe8('stopForegroundService'),
};

module.exports = v_2dc4c2;
module.exports.default = v_2dc4c2;
module.exports.__esModule = true;

module.exports.AndroidImportance = { DEFAULT: 3, HIGH: 4, LOW: 2, MIN: 1, NONE: 0 };
module.exports.AndroidVisibility = { PRIVATE: 0, PUBLIC: 1, SECRET: -1 };
module.exports.EventType = { DISMISSED: 0, PRESS: 1, ACTION_PRESS: 2, DELIVERED: 3 };
module.exports.AuthorizationStatus = { NOT_DETERMINED: -1, DENIED: 0, AUTHORIZED: 1, PROVISIONAL: 2 };
