const res = require('express/lib/response')
const Customers = require('../models/customer')

module.exports.get_customer = async (req, res) => {
    try{
        const {name} = req.params
        const customer = await Customers.findOne({name:name})
        if(customer)
            res.send(customer)
        else
        res.status(404).send({message: 'Customer with matching name not found'})
    } catch(e) {
        res.status(500).json({message: 'Unable To Fetch Customer'})
    }
}

module.exports.create_customer = async (req, res) => {
    try{
      const newCustomer = req.body
      const customer = await Customers.create(newCustomer)
      res.send(customer)
    } catch(err) {
        res.status(500).json({message: 'Failed To Create Customer'})
    }
}



//   get_customer
//   create_customer