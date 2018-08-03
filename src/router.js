const routes = require("next-routes");

module.exports = routes()
  .add('signup')
  .add("blog", "/blog/:slug");
