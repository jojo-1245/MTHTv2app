const v_8ed9ae = {
  metahint: {
    androidPackage: 'ai.metahint.appw',
    iosBundleId: 'ai.metahint.appw',
  },
  metahin: {
    androidPackage: 'ai.metahin.appw',
    iosBundleId: 'ai.metahin.appw',
  },
}

const v_46e192 = process.env.APP_VARIANT || 'metahint'
const v_81e2ef = v_8ed9ae[v_46e192] || v_8ed9ae.metahint

module.exports = ({ config: v_74a79c }) => ({
  ...v_74a79c,
  android: {
    ...v_74a79c.android,
    package: v_81e2ef.androidPackage,
  },
  ios: {
    ...v_74a79c.ios,
    bundleIdentifier: v_81e2ef.iosBundleId,
  },
})
