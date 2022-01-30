const {Router} = require("express");
const orderRoute = Router()
const orderController = require('../controller/OrdersController')


orderRoute.get('/get/:orderNumber',orderController.get_order)
orderRoute.post('/create',orderController.create_order)
orderRoute.post('/update',orderController.update_order)

module.exports=orderRoute