const routes = require('next-routes')

// Docs: https://github.com/fridays/next-routes

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
.add('index', '/', 'App/index')
.add('about', '/about', 'App/about')
.add('contact', '/contact', 'App/contact')