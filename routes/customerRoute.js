const {Router} = require("express");
const customerRoute = Router()
const customerController = require('../controller/CustomerController')


customerRoute.get('/get/:name',customerController.get_customer)
customerRoute.post('/create',customerController.create_customer)

module.exports=customerRoute