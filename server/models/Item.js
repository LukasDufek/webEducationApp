const mongoose = require('mongoose');
//const {itemsConnections} = require("../connections")

const Item = new mongoose.Schema({
    name: String,
    type: String,
    using: String,
    value: Number,
    img_address: String,
    price: Number,
    sell_price: Number,

});



module.exports = mongoose.model('Item', Item, 'items')







