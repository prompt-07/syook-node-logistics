const {Router} = require("express");
const deliveryVehicleRoute = Router()
const deliveryVehicleController = require('../controller/DeliveryVehicleController')


deliveryVehicleRoute.get('/get/:vehicleRegistrationNumber',deliveryVehicleController.read_deliveryVehicle)
deliveryVehicleRoute.post('/create',deliveryVehicleController.create_deliveryVehicle)
// deliveryVehicleRoute.post('/update',deliveryVehicleController.updateItem)

module.exports=deliveryVehicleRoute