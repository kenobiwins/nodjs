const Joi = require("joi");

const bookSchemeJoi = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string(),
  plot: Joi.string(),
  isRead: Joi.boolean(),
});

const validateBookJoi = (req, res, next) => {
  const { body } = req;
  const { error } = bookSchemeJoi.validate(body);
  // missing required '' is not valid missing
  if (error) {

    res
      .status(400)
      .json({ message: `missing required ${error.details[0].context.key} is not valid` });
    return;
  }
  next();
};

module.exports = validateBookJoi;
