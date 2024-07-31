const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const verifySignUp  = require('../middleware/verifySignUp');
const { authJwt } = require("../middleware");

userRouter.post('/register', verifySignUp.checkDuplicateUsernameOrEmail,userController.signUp);
userRouter.post('/login', userController.signIn);

//login with refreshToken 
userRouter.post('/relogin', userController.reSignIn);


module.exports = userRouter;