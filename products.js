let mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define new schema for product
const product = new Schema({
    name: String,
    description: String,
    price: Number,
    published: Boolean,
    category: String
})
//using mongoose model function it exprots the product schema object

module.exports = mongoose.model('Product', product);