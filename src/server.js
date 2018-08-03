const express = require("express");
const next = require("next");
const helmet = require("helmet");
const mobxReact = require("mobx-react");
const favicon = require("serve-favicon");
const after = require("aftertime");
const router = require("./router");

module.exports = function () {
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev, dir: "./src" });
  // const handle = app.getRequestHandler();
  const routerHandler = router.getRequestHandler(app);

  mobxReact.useStaticRendering(true);

  app.prepare()
    .then(() => {
      const server = express();

      // app.setAssetPrefix(process.env.BASE_PATH);

      // Favicon - This middleware will come very early in your stackdb
      // (maybe even first) to avoid processing any other middleware
      // if we already know the request is for favicon.ico
      server.use(favicon(`${__dirname}/../assets/favicon.ico`));

      // Security Settings
      server.enable("trust proxy", 1); // trust first proxy
      server.set("trust proxy", 1); // trust first proxy
      server.disable("x-powered-by"); // Don't advertise our server type
      server.use(helmet.ieNoOpen()); // X-Download-Options for IE8+
      server.use(helmet.noSniff()); // Sets X-Content-Type-Options to nosniff
      server.use(helmet.xssFilter()); // sets the X-XSS-Protection header
      server.use(helmet.frameguard({ action: "deny" })); // Prevent iframe clickjacking
      /**
        * @TODO csrf
        */
      if (dev) {
        server.use(helmet.noCache());
      } else {
        server.use(helmet.hsts({ maxAge: after.ten.months }));
      }

      // http://en.wikipedia.org/wiki/HTTP_ETag
      // Google has a nice article about "strong" and "weak" caching.
      // It's worth a quick read if you don't know what that means.
      // https://developers.google.com/speed/docs/best-practices/caching
      server.set("etag", true); // other values 'weak', 'strong'

      // Now setup serving static assets from /assets
      server.use(express.static(
        `${__dirname}/../assets`,
        { maxAge: after.two.months },
      ));

      server.use(routerHandler);
      // server.get("*", (req, res) => handle(req, res));

      server.listen(process.env.SERVER_PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on port ${process.env.SERVER_PORT}`);
      });
    })
    .catch((ex) => {
      console.error(ex.stack);
      process.exit(1);
    });
};
