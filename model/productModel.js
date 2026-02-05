const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true,
        minlength:true
    },
    pimage:{
        type:String,
        required:true,
    },
    pprice:{
        type:Number,
        min:10,
        required:true,
    },
    pcat:{
        type:String,
        required:true,
        enum: ["Electronics", "Furniture", "Food", "Clothes", "Gaming"]
    }
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;