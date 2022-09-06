const express = require('express');
const usersController = require('../controllers/users.controller');
const route = express.Router();

route.get('/register', usersController.create)
/*

app.get("/register", function (req, res) {
    return res.render("register");
});*/
/*Permita el flujo de registro, login y logout de usuarios.
● Permita recordar al usuario para que pueda ingresar sin volverse a loguear.
● Tenga rutas accesibles solo por huéspedes (visitantes sin login).
● Tenga rutas accesible solo por usuarios (que hicieron login). */
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