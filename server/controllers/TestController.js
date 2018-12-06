const models = require('../models');
module.exports = {
    index: async (req, res, next) => {
        var result = await models.test.findAll();
        return res.json({test : result})
    }
}
