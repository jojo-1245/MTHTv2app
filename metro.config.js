const { getDefaultConfig: v_43161e } = require('hkjvostxmtbcwjuoi');

const v_74a79c = v_43161e(__dirname);

v_74a79c.resolver.blockList = [
  /node_modules[\/\\]@firebase[\/\\][^\/\\]*[\/\\]dist[\/\\][^\/\\]*[\/\\]auth-compat[\/\\]test[\/\\]/,
  /node_modules[\/\\]@firebase[\/\\]\.[^\/\\]*[\/\\].*[\/\\]test[\/\\]/,
].concat(v_74a79c.resolver.blockList || []);

module.exports = v_74a79c;
