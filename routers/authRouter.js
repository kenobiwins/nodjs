const express = require("express");
const authRouter = express.Router();
const userSignupJoiValidation = require("../middlewares/userSignupJoiValidation");
// login , current,logout, register
const { signupUser } = require("../controllers/users");

authRouter.post("/signup", userSignupJoiValidation, signupUser);
// authRouter.post('/signin')
// authRouter.post('/exit')
// authRouter.get('/current')

module.exports = authRouter;
