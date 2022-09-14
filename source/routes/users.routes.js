const express = require('express');
const usersController = require('../controllers/users.controller');
const isLogged = require('../middlewares/isLogged')
const isAdmin = require('../middlewares/isAdmin')


const route = express.Router();

const {resolve, extname} = require('path');

const { existsSync, mkdirSync } = require('fs');

const destination = function(req, file, cb){
    let folder = resolve(__dirname, '..', '..', 'public', 'images');
   
    if(!existsSync(folder))
    {
        mkdirSync(folder)
    }
    return cb(null, folder);
}
//nombre único a cada archivo que se suba
const filename = function(req, file, cb){
    let unique =  Date.now();
    //console.log(file.fieldname)
    //let name = file.fieldname + '-' + unique + extname(file.originalname);
    let name = file.originalname;
   
    return cb(null, name);
}
//SI QUISIERA VALIDAR SI UNA IMAGEN TIENE EL MISMO NOMBRE CÓMO HAGO ESA VALIDACIÓN CON EL MULTER


const multer = require('multer');
const upload = multer({storage:multer.diskStorage({destination, filename})});

const registerValidator = require('../validations/register')

const loginValidator = require('../validations/login')

route.get('/register', usersController.create)
route.post('/register/save', upload.any(),registerValidator, usersController.save)

route.get('/login',usersController.login)
route.post('/login/access', usersController.access)

route.get('/logOut', usersController.logout)
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