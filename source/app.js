const express = require('express');
const path = require('path');
const config = require('./modules/server')
const { join } = require('path');

//method-override agregamos los verbos put delete y patch
const method = require('method-override');
const app = express();
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)) 
app.set('views', join(__dirname, './views'));
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3030, () => {
    console.log('servidor corriendo...');
});

//Configuración del entorno de la aplicación para que pueda capturar la información
//express.urlencoded y express.json
app.use(express.urlencoded({extended:true}));
//app.use(logger('dev'));
app.use(express.json());
//app.use(cookieParser());

//Debe estar antes del routes y será la forma de poder usar los métodos put path y delete

app.use(method('m'))
app.use(require('./routes/products.routes'));


app.get("/register", function (req, res) {
    return res.render("register");
});

app.get("/login", function(req,res){
    return res.render("login");
});

app.get('/carrito', function(req,res){
    return res.render("carrito");//RENDERIZADO

});

app.get('/productDetail', function(req,res){
    return res.render("productDetail");//RENDERIZADO

});


//Configurar error 404 ruta no encontrada
app.use((req, res, next)=>{
    res.status(404).render('No encontrada')
})

/*Código viejo
app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/register", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.post("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
*/