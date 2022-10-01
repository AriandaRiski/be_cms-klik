const Joi = require('joi');

const schema = {
    create: Joi.object({
        parentId: Joi.number().required(),
        title: Joi.string().max(150).required(),            
        slug: Joi.string().max(11).required(),
        content: Joi.string().max(500).required()            
    })
}

module.exports = schema;
