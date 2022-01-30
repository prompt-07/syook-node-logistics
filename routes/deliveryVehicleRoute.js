const {Router} = require("express");
const deliveryVehicleRoute = Router()
const deliveryVehicleController = require('../controller/DeliveryVehicleController')


deliveryVehicleRoute.get('/get/:vehicleRegistrationNumber',deliveryVehicleController.read_deliveryVehicle)
deliveryVehicleRoute.post('/create',deliveryVehicleController.create_deliveryVehicle)


module.exports=deliveryVehicleRoute