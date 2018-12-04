/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const next = require('next')

const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const routes = require('../client/routes')
const models = require('./models')
const app = next({dir: './client', dev})

const routesApi = require('./routes')

const handler = routes.getRequestHandler(app)

let server
app
  .prepare()
  .then(() => {
    server = express()

    server.use(helmet())
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser())
    server.disable('x-powered-by')

    require('./routes')(server, express)
    // Default catch-all handler to allow Next.js to handle all other routes
    server.use(handler)

    models.sequelize.sync().then(function() {
        server.listen(port, function() {
            console.log(`> Ready on port ${port} [${env}]`)
        });
        server.on('error', onError);
        server.on('listening', function() {
            var addr = server.address();
            var bind = typeof addr === 'string'
              ? 'pipe ' + addr
              : 'port ' + addr.port;
            console.log('Listening on ' + bind);
        });
    });

})
.catch(err => {
console.log('An error occurred, unable to start the server')
console.log(err)
})

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
