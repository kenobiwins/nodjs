const Joi = require("joi");

const putBookScheme = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  image: Joi.string(),
  plot: Joi.string(),
  isRead: Joi.boolean(),
});

const validatePutBookJoi = (req, res, next) => {
  const { body } = req;
  const isNotEmpty = Object.keys(body).length;

  if (!isNotEmpty) {
    res.status(400).json({ message: "missing fields" });
    return;
  }
  const { error } = putBookScheme.validate(body);

  if (error) {
    res
      .status(400)
      .json({ message: `missing required ${error.details[0].context.key} is not valid` });
    return;
  }

  next();
};

module.exports = validatePutBookJoi;
