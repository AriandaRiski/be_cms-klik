const Joi = require('joi');

const schema = {
    create: Joi.object({
        authorId : Joi.number().max(11).required(),
        parentId: Joi.number().max(100).required(),
        title: Joi.string().max(150).required(),
        metaTitle: Joi.string().max(150).required(),
        slug: Joi.string().length(5).required(),
        content: Joi.string().max(500).required()        
    })
}

module.exports = schema;