const { getDefaultConfig: v_43161e } = require('hkjvostxmtbcwjuoi');

const v_74a79c = v_43161e(__dirname);

v_74a79c.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

v_74a79c.resolver.blockList = /.*\/node_modules\/firebase\/.*/;

module.exports = v_74a79c;
