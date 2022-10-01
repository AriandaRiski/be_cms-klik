const schema = require('./user.schema');

module.exports = {
    valid_user : async (req, res, next) => {
        const {error, value} = schema.create.validate(req.body);
        if(error){
            res.status(422).json({
                success : false,
                message : error.details[0].message
            })
        } else {
            next()
        }
    }
}