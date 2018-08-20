/* eslint import/no-commonjs: [0] */
/** @TODO move all config here via .env and remove .env babel plugin * */
const withLess = require('@zeit/next-less');
const resolve = require('resolve');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    // theme antd here
    modifyVars: {
      '@primary-color': '#8bc34a',
      '@font-family': 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      '@input-bg': '#efefef',
    },
  },
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    config.externals = [];
    const { dir, isServer } = options;

    if (isServer) {
      config.externals.push((context, request, callback) => {
        resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
          if (err) {
            return callback();
          }

          // exclude webpack itself and antd from externals
          if (res.match(/node_modules[/\\].*\.js/) && !res.match(/node_modules[/\\]webpack/) && !res.match(/node_modules[/\\]antd/)) {
            return callback(null, `commonjs ${request}`);
          }

          return callback();
        });
      });
    }

    return config;
  },
  serverRuntimeConfig: {
    serverApiDomain: process.env.SERVER_API_DOMAIN,
  },
  publicRuntimeConfig: {
    apiDomain: process.env.API_DOMAIN,
    authCookie: process.env.AUTH_COOKIE,
    staticDomain: process.env.STATIC_DOMAIN,
    baseDomain: process.env.BASE_DOMAIN,
    legalDomain: process.env.LEGAL_DOMAIN,
  },
});
