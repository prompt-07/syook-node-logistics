const {Router} = require("express");
const authRoute = Router()
const authController = require('../controller/AuthController')


authRoute.post('/login',authController.login)

module.exports=authRoute