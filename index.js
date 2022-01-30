require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const itemRoute = require('./routes/itemRoute')
const deliveryVehicleRoute = require('./routes/deliveryVehicleRoute')
const customerRoute = require('./routes/customerRoute')
const orderRoute = require('./routes/orderRoute')
const authRoute = require('./routes/authRoute')

const app = express()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', ()=>console.log('Connected to database'));

app.use(express.json())

app.use('/user', authRoute)
app.use('/api/items', authenticateUser, itemRoute)
app.use('/api/delivery-vehicle',authenticateUser, deliveryVehicleRoute)
app.use('/api/customer', customerRoute)
app.use('/api/orders',authenticateUser, orderRoute)


//quick-authenticate-middleware
function authenticateUser(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) 
      return res.sendStatus(401)
    else{
          jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
          console.log(err)
          if (err) 
              return res.status(403).json({message : "Invalid Access Token"})
  
          req.user = user
          next()
        })
    }
          
  }


let port = process.env.PORT || 8000
app.listen(port, ()=>{console.log(`App started at port : ${port}`)});