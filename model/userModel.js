const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uname:{
        type:String,
        required:true,
        unique:true
    },
    uphone:{
        type:Number,
        unique:true,
        required:true
    },
    uemail:{
        type:String,
        unique:true,
        required:true
    },
    upass:{
        type:String,
        required:true
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;