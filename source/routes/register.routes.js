const express = require('express');
const usersController = require('../controllers/users.controller');
const route = express.Router();

route.get('/register/nuevo', usersController.create)

/*
//QUITAR
route.get("/register", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

route.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
route.get("/carrito", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/carrito.ejs'));
});
*/
module.exports = route;