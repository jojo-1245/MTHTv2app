

const v_6adfe8 = (v_1833e7) => () => {
  throw new Error(
    `[web-stub] 네이티브 전용 모듈에 접근했습니다: GoogleSignin.${v_1833e7}\n` +
      `소셜 로그인은 웹 E2E 로 검증하지 않습니다. 테스트는 이메일 로그인 또는 토큰 주입으로 진입합니다.`,
  );
};

const v_4eac84 = {
  configure: () => {}, 
  getCurrentUser: async () => null, 
  hasPlayServices: async () => false,
  signIn: v_6adfe8('signIn'),
  signInSilently: v_6adfe8('signInSilently'),
  signOut: v_6adfe8('signOut'),
  revokeAccess: v_6adfe8('revokeAccess'),
};

module.exports = { GoogleSignin: v_4eac84, __esModule: true };
module.exports.default = { GoogleSignin: v_4eac84 };
module.exports.statusCodes = { SIGN_IN_CANCELLED: '-5', IN_PROGRESS: '-6', PLAY_SERVICES_NOT_AVAILABLE: '-7' };
module.exports.GoogleSigninButton = () => null;
