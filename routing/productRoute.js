const express = require('express');
const { addProduct, deleteProduct, editForm, editData } = require('../controller/productControl');

const prouter = express.Router();

prouter.get("/addProduct", (req, resp)=>{
    resp.render("addProduct")
});

prouter.post("/addProduct", addProduct);

prouter.delete("/delete/:id", deleteProduct)

prouter.get("/edit/:id",editForm)
prouter.patch("/edit/:id",editData ) 

module.exports = prouter;