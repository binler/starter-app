const routes = require('next-routes')

// Docs: https://github.com/fridays/next-routes

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
.add('index')
.add('about')
.add('contact')