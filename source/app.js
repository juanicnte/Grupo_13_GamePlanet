const express = require('express');
const path = require ('path');
const config = require('./modules/server')
const { join } = require('path');
const method = require('method-override');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)) 
app.set('views', join(__dirname, './views'));
app.listen(process.env.PORT || 3030, () => {
    console.log('servidor corriendo...');
});

app.use(express.urlencoded({extended:true}));
app.use(method('m'))
app.use(require('./routes/products.routes'));

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