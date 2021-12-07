const joi = require("joi");
const pattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

module.exports = (user) => {
  const schema = joi.object({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().regex(pattern).min(8).required(),
    confirmpassword: joi.string().regex(pattern).min(8).required(),
  });
  return schema.validate(user);
};
