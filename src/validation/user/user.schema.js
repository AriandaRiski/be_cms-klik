const Joi = require('joi');

const schema = {
    create : Joi.object({        
        fullName: Joi.string().min(4).max(30).required(),
        mobile: Joi.number().integer().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        passwordHash: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),        
    })
}

module.exports = schema;