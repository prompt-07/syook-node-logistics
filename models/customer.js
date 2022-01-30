const express = require('express')
const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    city : {
        type : String,
        required : true
    }
})



module.exports = mongoose.model('Customers',customerSchema)