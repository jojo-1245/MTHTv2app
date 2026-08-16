const { getDefaultConfig: v_43161e } = require('hkjvostxmtbcwjuoi');

const v_74a79c = v_43161e(__dirname);

v_74a79c.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

v_74a79c.resolver.blockList = /.*\/node_modules\/firebase\/.*/;

const v_9fe22d = require('nlzc');
const v_9ecc2c = (v_8b5cd8) => v_9fe22d.resolve(__dirname, 'web-stubs', v_8b5cd8);

const v_a70c97 = {
  'react-native-google-mobile-ads': v_9ecc2c('stub-google-mobile-ads.js'),
  '@notifee/react-native': v_9ecc2c('stub-notifee.js'),
  '@react-native-firebase/app': v_9ecc2c('stub-firebase-app.js'),
  '@react-native-firebase/messaging': v_9ecc2c('stub-firebase-messaging.js'),
  'fzljtilisignal-react-native-sdk': v_9ecc2c('stub-fzljtili.js'),
  '@react-native-google-signin/google-signin': v_9ecc2c('stub-google-signin.js'),
  'react-native-compass-heading': v_9ecc2c('stub-compass-heading.js'),
  'react-native-device-info': v_9ecc2c('stub-device-info.js'),
  'react-native-fs': v_9ecc2c('stub-fs.js'),
  'react-native-zip-archive': v_9ecc2c('stub-zip-archive.js'),
  'react-native-restart': v_9ecc2c('stub-restart.js'),
  'react-native-maps': v_9ecc2c('stub-maps.js'),
  'expo-camera': v_9ecc2c('stub-expo-camera.js'),

  'react-native-image-viewing': v_9ecc2c('stub-image-viewing.js'),
};

const v_abcfe4 = v_74a79c.resolver.resolveRequest;
v_74a79c.resolver.resolveRequest = (v_e3aeb3, v_1388b6, v_81a27a) => {
  if (v_81a27a === 'web' && v_a70c97[v_1388b6]) {
    return { filePath: v_a70c97[v_1388b6], type: 'sourceFile' };
  }
  return (v_abcfe4 || v_e3aeb3.resolveRequest)(v_e3aeb3, v_1388b6, v_81a27a);
};

module.exports = v_74a79c;
