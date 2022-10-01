const schema = require('./login.schema');

module.exports = {
    valid_login : async(req, res, next) => {
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