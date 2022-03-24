const mongoose = require ('mongoose')
const categorySchema = new mongoose.Schema({

        name:{type :String},
        slug:{type:String, unique:true},
        parentId:{type:String}
},{timestamps:true})
module.exports = mongoose.model('Category',categorySchema);