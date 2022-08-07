const { write } = require('fs');
const path = require('path');
const {all, one, generate, save} = require('../models/products.model')
const controlador = {
    //Muestra la lista de productos
    index: (req, res) => {
        //let products = all();
        //res.render('Listado', {products})
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },
    //Muesta el detalle del producto
    show: function(req, res){
        res.send('El detalle ' + req.params.idProducto);
    },
    //Crea el producto
    create: (req, res) => {
        let nuevo = generate(req.body);
        return res.send('')
    },
    save: (req, res) => {
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);
        write(todos);
        return res.redirect('/productos/')
    },
    edit: (req, res) => {
        let product = one();
        res.send('')
    },
    update: (req, res) => {
        let todos = all();
        let actualidos = todos.map(elemento => {
            if(elemento.sku == req.body.sku){
                elemento.name = req.body.name;
                elemento.price = paseInt(req.body.price);
                elemento.category = req.body.category;
            }
            return elemento;
        })
        write(actualidos)
        return res.redirect('/productos/')
    }
};

module.exports = controlador;