
module.exports = (server, express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
		return res.json({version: '1.0'})
	});

    server.use(`/${process.env.PREFIX_API}/test`, router);
}
