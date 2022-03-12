const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
      name: { type: String },
      image: { type: String },
      brand: { type: String},
      category: { type: String},
      description: { type: String},
      price: { type: Number},
     
    },
    {timestamps: true}
   
  );
  
  module.exports= mongoose.model('product', productSchema);
  
