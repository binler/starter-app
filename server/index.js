/* eslint-disable no-console */
const express = require('express')
const next = require('next')
// Add contents config
const config = require('../config/config');
// Add config
require('dotenv').config()
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
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
// Express
const server = express();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(cookieParser());
server.use('/', index);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
server.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

if (!module.parent) {
	server.listen(config.port, function() {
	console.log(`app is listening at http://localhost:${config.port}`);
	});
}
