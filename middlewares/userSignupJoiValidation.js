const Joi = require('joi')

const userJoiScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

const userSignupJoiValidation = (req, res,next) => {
    const { body } = req
    const { error } = userJoiScheme.validate(body);
    if (error) {
        res
          .status(400)
          .json({ message: `missing required ${error.details[0].context.key} is not valid` });
    }

    next()
 }

module.exports = userSignupJoiValidation;