const express = require('express');
const { register, login, dashboard  } = require('../controller/userControl');

const router = express.Router();

router.get("/register", (req, resp) => {
    resp.render("register")
});

router.post("/register", register);

router.get("/login", (req, resp) => {
    resp.render("login")
});

router.post("/login", login);

const isAuth = (req, resp, next) => {
    if (req.session.user) {
        next()
    } else {
        resp.redirect("/login")
    }
}

router.get("/dashboard", isAuth, dashboard)



module.exports = router;