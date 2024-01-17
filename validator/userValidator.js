const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),

  // Add other user-related fields as needed
});

module.exports = userSchema;
