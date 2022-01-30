const res = require('express/lib/response')
const Orders = require('../models/orders')

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
     const order = req.body
     console.log(order)
     const createdOrder = await Orders.create(order)
     res.send(order)
    } catch(err) {
        //console.log(err)
        res.status(500).json("failed")
        //res.status(500).json({message: 'Failed To Create Order'})
    }
}







//   get_order
//   create_order