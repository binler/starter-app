const UserCrl = require('../controllers/api-web/UserController');

module.exports = (server, express) => {
    const router = express.Router();
    router.post('/login', UserCrl.login);
    server.use(`/${process.env.PREFIX_API}`, router);
}
