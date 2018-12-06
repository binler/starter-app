const TestController = require('../controllers/TestController')

module.exports = (server, express) => {
    const router = express.Router();

    router.get('/:id', TestController.index);

    server.use(`/${process.env.PREFIX_API}/test`, router);
}
