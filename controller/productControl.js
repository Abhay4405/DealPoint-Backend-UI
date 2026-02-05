const productModel = require("../model/productModel");

const addProduct = async (req, resp) => {
    try {
        const {pname, pimage, pprice, pcat} = req.body;
        await productModel.create({pname, pimage, pprice, pcat});
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const deleteProduct = async (req, resp) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const editForm =async(req,resp) =>{
    try {
        const product = await productModel.findById(req.params.id)
        resp.render("edit",{product})
    } catch (error) {
        console.log(error);
    }
}

const editData = async(req,resp)=>{
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addProduct, deleteProduct, editForm, editData};