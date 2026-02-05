const productModel = require("../model/productModel");
const userModel = require("../model/userModel");
const bcrypt = require('bcryptjs');

const register = async (req, resp) => {
    try {
        console.log(req.body)

        const {uname, uphone, uemail, upass} = req.body;
        const hashPass = await bcrypt.hash(upass,10);
        await userModel.create({uname, uphone, uemail, upass:hashPass});
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
}

const login = async (req, resp) => {
    try {
        const {uname, uphone, uemail, upass} = req.body;
        const userData = await userModel.findOne({uname});
        if (userData && bcrypt.compare(upass, userData.upass)) {
            req.session.user = userData.uname;
            resp.redirect("/dashboard")
            
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
        
    }
}

const dashboard = async (req, resp) => {
    try {
        const pdata = await productModel.find();
        resp.render("dashboard", {pdata, user:req.session.user})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {register, login, dashboard}