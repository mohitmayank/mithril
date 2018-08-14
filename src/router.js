/* eslint import/no-commonjs: [0] */

const routes = require('next-routes');

module.exports = routes()
  .add('blog', '/blog/:slug');
