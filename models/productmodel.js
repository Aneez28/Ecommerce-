const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
       type : String,
       required : true
    },
    description:{
        type : String,
        required : true
     },
     price:{
        type : Number,
        required : true,
        default : 0
     },
     images:{
        type : Array,
        required : true
     }
  });

  const Product = mongoose.model('Product',productSchema);

  module.exports = Product
