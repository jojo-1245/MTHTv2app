

const v_6adfe8 = (v_1833e7) => () => {
  throw new Error(
    `[web-stub] 네이티브 전용 모듈에 접근했습니다: react-native-fs.${v_1833e7}\n` +
      `이 경로는 웹 번들에서 스텁되어 있습니다. OTA 번들 관리는 웹 E2E 로 검증할 수 없으며,` +
      ` 실기(시뮬레이터/기기)로 확인해야 합니다.`,
  );
};

const v_e23cc8 = {

  DocumentDirectoryPath: '/web-stub/documents',
  TemporaryDirectoryPath: '/web-stub/tmp',
  CachesDirectoryPath: '/web-stub/caches',
  MainBundlePath: '/web-stub/bundle',

  exists: v_6adfe8('exists'),
  unlink: v_6adfe8('unlink'),
  readFile: v_6adfe8('readFile'),
  writeFile: v_6adfe8('writeFile'),
  mkdir: v_6adfe8('mkdir'),
  downloadFile: v_6adfe8('downloadFile'),
  readDir: v_6adfe8('readDir'),
  moveFile: v_6adfe8('moveFile'),
  copyFile: v_6adfe8('copyFile'),
};

module.exports = v_e23cc8;
module.exports.default = v_e23cc8;
module.exports.__esModule = true;
