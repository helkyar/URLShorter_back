const Joi = require("@hapi/joi");

const schemaRegister = Joi.object({
  username: Joi.string().min(1).max(255).required(),
  email: Joi.string().min(4).max(255).required().email(),
  password: Joi.string().min(4).max(1024).required(),
});

const schemaLogin = Joi.object({
  username: Joi.string().min(1).max(255).required(),
  password: Joi.string().min(4).max(1024).required(),
});

const validations = {
  schemaRegister,
  schemaLogin,
};
module.exports = validations;
