const userModel = require("../models/userModel");

const signupUser = async (req, res) => {
  const {
    body: { email, name, password },
  } = req;
  try {
    const isEmailIncludes = await userModel.findOne({ email });
    if (isEmailIncludes) {
      res.status(409).json({
        message: "user with such email already register",
      });
      return;
    }
    const newUser = await userModel.create({ email, name, password });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupUser };
