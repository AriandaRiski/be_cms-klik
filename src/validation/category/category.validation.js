const schema = require('./category.schema');

module.exports = {
    valid_category : async(req, res, next) => {
        const {error, value} = schema.create.validate(req.body);

        if (error) {
            res.status(422).json({
                success : false,
                message : error.details[0].message
            })
        }
        next()
    }
}