const res = require('express/lib/response')
const Orders = require('../models/orders')
const Customers = require('../models/customer')
const DeliveryVehicles = require('../models/deliveryVehicle')
const Items = require('../models/items')

module.exports.get_order = async (req, res) => {
    try{
        const {orderNumber} = req.params
        const order = await Orders.findOne({orderNumber: orderNumber})
        if(order)
            res.send(order)
        else
            res.status(404).json({message: 'Order with matching number not found'})
    } catch(e) {
        res.status(500).json({message: 'Unable To Fetch Order'})
    }
}

module.exports.create_order = async (req, res) => {
    try{
     const {customerId, itemId} = req.body
     
     const customer = await Customers.findOne({ _id: customerId})
     const item = await Items.findOne({__id: itemId})
     const deliveryVehicle = await DeliveryVehicles.findOne({city : customer.city})
     if(deliveryVehicle && deliveryVehicle.activeOrdersCount<2){
        const createdOrder = await Orders.create({itemId : itemId, price : item.price, customerId : customerId, deliveryVehicleId : deliveryVehicle._id, isDelivered : false})
        if(createdOrder){
            deliveryVehicle.activeOrdersCount = deliveryVehicle.activeOrdersCount + 1
            await deliveryVehicle.save();
            res.send(createdOrder)
        }
        else
            res.status(500).json({message : "Failed to place order"})
    }
     else{
        res.status(404).json({message : "No vehicles found"})
     }
    } catch(err) {
        //res.status(500).json(err)
        res.status(500).json({message: 'Failed To Create Order'})
    }
}







//   get_order
//   create_order