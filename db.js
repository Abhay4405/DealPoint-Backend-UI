const mongoose = require('mongoose');

const ConnectDB = () => {
    mongoose.connect("mongodb://localhost:27017/DealPoint").then(() => {
        console.log("Successfully connected to Database...");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports = {ConnectDB}