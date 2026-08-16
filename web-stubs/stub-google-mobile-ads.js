

const v_6adfe8 = (v_1833e7) => () => {
  throw new Error(
    `[web-stub] 네이티브 전용 모듈에 접근했습니다: google-mobile-ads.${v_1833e7}\n` +
      `광고는 웹 E2E 로 검증할 수 없습니다. 실기(시뮬레이터/기기)로 확인해야 합니다.`,
  );
};

const v_ebba42 = () => ({
  initialize: async () => [],
  setRequestConfiguration: async () => {},
});

module.exports = v_ebba42;
module.exports.default = v_ebba42;
module.exports.__esModule = true;
module.exports.MaxAdContentRating = { G: 'G', PG: 'PG', T: 'T', MA: 'MA' };
module.exports.TestIds = { REWARDED: 'web-stub-rewarded', BANNER: 'web-stub-banner', INTERSTITIAL: 'web-stub-interstitial' };
module.exports.AdEventType = { LOADED: 'loaded', ERROR: 'error', CLOSED: 'closed', OPENED: 'opened' };
module.exports.RewardedAdEventType = { LOADED: 'rewarded_loaded', EARNED_REWARD: 'rewarded_earned_reward' };
module.exports.BannerAdSize = { BANNER: 'BANNER', FULL_BANNER: 'FULL_BANNER', LARGE_BANNER: 'LARGE_BANNER' };
module.exports.BannerAd = () => null;
module.exports.RewardedAd = { createForAdRequest: v_6adfe8('RewardedAd.createForAdRequest') };
module.exports.InterstitialAd = { createForAdRequest: v_6adfe8('InterstitialAd.createForAdRequest') };
