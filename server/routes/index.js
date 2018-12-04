/**
 * Module dependencies.
 */
let express = require('express');
let router = express.Router();
let user = require('../controllers/user');

router.get('/user/list', user.list);

module.exports = router;