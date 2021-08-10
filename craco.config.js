const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  //   plugins: [
  //     {
  //       plugin: CracoWorkboxPlugin,
  //     },
  //   ],
  webpack: {
    alias: {},
    plugins: {
      add: [
        new InjectManifest({
          swSrc: "./src/src-sw.js",
          swDest: "sw.js",
        }),
      ] /* An array of plugins */,
      remove:
        [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
