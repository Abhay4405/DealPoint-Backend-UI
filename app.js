const express = require('express');
const { ConnectDB } = require('./db');
const session = require('express-session');
const router = require('./routing/userRoute');
const prouter = require('./routing/productRoute');
const methodOverride = require('method-override');


const app = express();

ConnectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(session({
    secret:"qwertyuop",
    resave:false,
    saveUninitialized:false
}))

app.use("/", router);
app.use("/", prouter);

app.listen(4500, ()=>{
    console.log("Server is running on port number 4500!!!");
    
})