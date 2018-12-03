/* eslint-disable no-console */
const express = require('express')
const next = require('next')

const devProxy = {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const routes = require('../client/routes')
const app = next({
  dir: './client', // base directory where everything is, could move to src later
  dev
})

// const handle = app.getRequestHandler()

const handler = routes.getRequestHandler(app)

let server
app
  .prepare()
  .then(() => {
    server = express()

    //Set up the proxy.
    // if (dev && devProxy) {
    //   const proxyMiddleware = require('http-proxy-middleware')
    //   Object.keys(devProxy).forEach(function (context) {
    //     server.use(proxyMiddleware(context, devProxy[context]))
    //   })
    // }

    server.get('/api/todo', (req, res) => {
        return res.json({id: 'binh'});
    })

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
