const {Router} = require("express");
const itemRoute = Router()
const itemController = require('../controller/ItemController')


itemRoute.get('/get/:itemName',itemController.readItem)
itemRoute.post('/create',itemController.createItem)
itemRoute.post('/update',itemController.updateItem)

module.exports=itemRoute