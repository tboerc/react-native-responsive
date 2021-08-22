/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const dist = path.resolve(path.join(__dirname, '..', 'dist'));

const extraNodeModules = {
  common: dist,
};

const watchFolders = [dist];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (_, name) => path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
