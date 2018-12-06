const { checkBody } = require('express-validator/check');
const sequelize = require('sequelize');
const models = require('../../models/');
const jwt = require('jsonwebtoken');
var crypto = require('crypto');

const userCtrl = {
    generateToken(user_id) {
        return jwt.sign({ user: user_id }, process.env.SECRET_KEY_TOKEN);
    },
    /**
     * Login system.
     * 
     * @return Response
     */
    async login(req, res, next) {
        console.log('aaa');
        // req.checkBody('email', 'email is required').notEmpty();
        // req.checkBody('password', 'Password is required').notEmpty();
        //var errors = req.validationErrors();
        var errors = "";
        var error_msg = [];
        var pass = crypto.createHash('sha256').update(req.body.password).digest('hex');
        let user = '';
        console.log(pass);
        if (errors) {
            return error_msg = errors;
        } else {
            user = await models.user_accounts.findOne({ where : {email : req.body.email, password : pass}});
            console.log("A",user.get());
            if (!user.get()) {
                error_msg.push({param: 'login', msg: 'Login user or pass is wrong' });
            } else if (user.status != 1) {
                error_msg.push({ param: 'status', msg: 'Account not active'});
            }
        }
        if (!error_msg.length) {
            // then return a token, secret key should be an env variable
            const token = userCtrl.generateToken(user.get().id);
            res.cookie(process.env.COOKIES_KEY, token, { maxAge: parseInt(process.env.EXPIRES_COOKIES) });
            res.status(200).send({
                success_flg: true,
                data: {
                    id: user.get().id,
                    email: user.get().email,
                    phone: user.get().phone,
                    token: token
                }
            });
        } else {
            res.status(200).send({ success_flg: false, errors: error_msg });
        }
        return;
    },

};

module.exports = userCtrl;