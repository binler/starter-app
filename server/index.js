/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const next = require('next')

const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require("compression")
const session = require("express-session");
const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const routes = require('../client/routes')
const models = require('./models')
const app = next({
  dir: './client',
  dev
})

const handler = routes.getRequestHandler(app)

let server
app
  .prepare()
  .then(() => {
    server = express()

    if (!dev) {
      /* Helmet helps secure our app by setting various HTTP headers */
      server.use(helmet());
      /* Compression gives us gzip compression */
      server.use(compression());
    }

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({
      extended: true
    }))
    server.use(cookieParser())
    server.disable('x-powered-by')

    server.use(session({
      name: "starter_app",
      // secret used for using signed cookies w/ the session
      secret: process.env.SECRET_KEY_TOKEN,
      // store: new MongoStore({
      //   mongooseConnection: mongoose.connection,
      //   ttl: 14 * 24 * 60 * 60 // save session for 14 days
      // }),
      // forces the session to be saved back to the store
      // resave: false,
      // don't save unmodified sessions
      // saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
      }
    }));

    server.use((req, res, next) => {
      /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
      res.locals.user = req.user || null;
      next();
    });

    /* give all Next.js's requests to Next.js server */
    server.get("/_next/*", (req, res) => {
      handler(req, res);
    });

    require('./routes')(server, express)

    /* Error handling from async / await functions */
    server.use((err, req, res, next) => {
      const {
        status = 500, message
      } = err;
      res.status(status).json(message);
    });

    models.sequelize.sync().then(function () {
      // Default catch-all handler to allow Next.js to handle all other routes
      server.use(handler).listen(port)
      console.log('Listening on ' + port);
    });

  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })