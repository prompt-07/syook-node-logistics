const express = require('express')
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number
    }
})



module.exports = mongoose.model('Items',itemSchema)