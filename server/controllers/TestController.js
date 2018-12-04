const models = require('../models');

module.exports = {
    index: (req, res, next) => {
        models.Test.findAll().then(tests => {
            return res.json({test: tests});
        })        
    }
}
