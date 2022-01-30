require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

const itemRoute = require('./routes/itemRoute')
const deliveryVehicleRoute = require('./routes/deliveryVehicleRoute')
const customerRoute = require('./routes/customerRoute')
const orderRoute = require('./routes/orderRoute')

const app = express()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', ()=>console.log('Connected to database'));

app.use(express.json())


app.use('/api/items', itemRoute)
app.use('/api/delivery-vehicle', deliveryVehicleRoute)
app.use('/api/customer', customerRoute)
app.use('/api/orders', orderRoute)

let port = process.env.PORT || 8000
app.listen(port, ()=>{console.log(`App started at port : ${port}`)});