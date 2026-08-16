

const v_6adfe8 = (v_1833e7) => () => {
  throw new Error(
    `[web-stub] 네이티브 전용 모듈에 접근했습니다: fzljtili.${v_1833e7}\n` +
      `생체신호 측정(카메라·얼굴인식)은 웹 E2E 로 검증할 수 없습니다. 실기로 확인해야 합니다.`,
  );
};

const v_07e7ce = (v_2869c1) =>
  new Proxy(
    {},
    {
      get: (v_d53ff0, v_e2a85c) => {
        if (v_e2a85c === '__esModule') return true;
        if (v_e2a85c === 'then') return undefined;
        if (typeof v_e2a85c === 'symbol') return undefined;
        return `${v_2869c1}.${String(v_e2a85c)}`;
      },
    },
  );

module.exports = {
  __esModule: true,
  VitalSignTypes: v_07e7ce('VitalSignType'),
  SessionState: v_07e7ce('SessionState'),
  ImageValidity: v_07e7ce('ImageValidity'),
  AlertType: v_07e7ce('AlertType'),

  MonitorSession: v_6adfe8('MonitorSession'),
  createMonitorSession: v_6adfe8('createMonitorSession'),
  initialize: v_6adfe8('initialize'),
  Camera: v_6adfe8('Camera'),
};
