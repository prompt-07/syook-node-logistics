const res = require('express/lib/response')
const Items = require('../models/items')


module.exports.readItem = async (req, res) => {
    const {itemName} = req.params
    try{
        const item = await Items.findOne({name : itemName})
        if(item == null){
             res.status(404).json({message : 'Item with matching name not found'})
        }
        else
        return res.send(item)
    }catch(err) {
        res.status(500).json({message : 'Failed to get Item'})
    }
  }


module.exports.createItem = async (req, res) => {
    const newItem = req.body
    try{
     const item = Items.create(newItem)
     res.send({message : 'Item created'});
    } catch(err) {
        res.status(500).json({message: 'Failed to create Item'})
    }
  }


module.exports.updateItem = async (req, res) => {
    const {itemName, newPrice} = req.body
    try{
     const item = await Items.findOne({name : itemName})
     if(item){
        item.price = newPrice
        const updatedItem = await item.save()
        res.send(updatedItem);
     }
     else
     res.status(404).json({message : 'Item with matching name not found'})
     
    } catch(err) {
        res.status(500).json({message: 'Failed To Update Item'})
    }
  }
