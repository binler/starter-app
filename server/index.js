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
const routesApi = require('./routes')
const app = next({dir: './client', dev})

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

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
