const express = require('express')
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderNumber : {
        type: Number,
        required: true,
        unique: true,
        default:0
    },
    itemId: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    deliveryVehicleId: {
        type: String,
        required: true
    },
    isDelivered: {
        type: Boolean, 
        default: false
    }
})


orderSchema.pre('save', async function(next){
    const currRecord = this
    if(!this.orderNumber){
      const index = await this.constructor.count()
      this.orderNumber = index + 1
    }
    //console.log(this)
    next()
});


module.exports = mongoose.model('Orders',orderSchema)