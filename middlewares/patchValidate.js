const Joi = require("joi");

const patchBookScheme = Joi.object({
  isRead: Joi.boolean().required(),
});

const patchValidation = (req, res,next) => {
  const { body } = req;
  // body.isRead;
 console.log(body);
  if (!body["isRead"]) {
    res.status(400).json({ message: 'missing "isRead" field' });
    return;
  }
  if (Object.keys(body).length !== 1) {
    res.status(400).json({ message: "extra keys in object" });
    return;
  }

  const { error } = patchBookScheme.validate(body);

  if (error) {
    res.status(400).json({ message: `${error.details[0].context.key} is not valid` });
    return;
    }
    next()
};

module.exports = patchValidation;
