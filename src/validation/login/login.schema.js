const Joi = require('joi');

const schema = {
    create: Joi.object({
        
        username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.number().required()

    })
}

module.exports = schema;