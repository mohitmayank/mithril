/* eslint import/no-commonjs: [0] */
/** @TODO move all config here via .env and remove .env babel plugin * */
module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  serverRuntimeConfig: {
    serverApiDomain: process.env.SERVER_API_DOMAIN,
  },
  publicRuntimeConfig: {
    apiDomain: process.env.API_DOMAIN,
  },
};
