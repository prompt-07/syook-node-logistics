const DeliveryVehicles = require('../models/deliveryVehicle')

module.exports.read_deliveryVehicle = async (req, res) => {
    try{
      const {vehicleRegistrationNumber} = req.param
      const deliveryVehicle = await DeliveryVehicles.findOne({registrationNumber : vehicleRegistrationNumber})
      if(deliveryVehicle)
        res.send(deliveryVehicle)
      else
        res.status(404).send({message: 'Item with matching number not found'})
    } catch(e) {
        res.status(500).json({message: 'Unable To Fetch Delivery Vehicle'})
    }
}

module.exports.create_deliveryVehicle = async (req, res) => {
    try{
      const newVehicle = req.body
      const createdDeliveryVehicle = await DeliveryVehicles.create(newVehicle)
      if(createdDeliveryVehicle)
        res.send(createdDeliveryVehicle);
      else
        res.status(500).json({message:"Failed to create Delivery Vehicle"})
    } catch(err) {
        res.status(500).json(err)
        //{message: 'Failed To Create Delivery Vehicle'}
    }
}


//   read_deliveryVehicle
//   create_deliveryVehicle
//   update_deliveryVehicle