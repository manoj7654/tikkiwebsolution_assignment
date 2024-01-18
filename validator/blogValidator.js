const Joi = require('joi');

const userSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

module.exports = userSchema;