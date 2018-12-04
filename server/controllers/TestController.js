module.exports = {
    index: (req, res, next) => {
        return res.json({'name' : 'Test controller'})
    }
}
