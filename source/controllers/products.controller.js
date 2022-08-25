const { write, unlinkSync } = require('fs');
const { resolve } = require('path');
const path = require('path');
const {all, one, generate, save} = require('../models/products.model')
const controlador = {
    //Muestra la lista de productos
    index: (req, res) => {
        //let products = all();
        //res.render('Listado', {products})
        //res.render(path.resolve(__dirname, '../views/home.ejs'));
        return res.render('home');
    },
    //Muesta el detalle del producto
    show: function(req, res){
        let product = one(req.params.producto)
        if(product){
            return res.render('El detalle ' + {product});
        }
        res.render('El detalle ' + {product:null});
    },
    //Crea el producto
    create: (req, res) => {
        let nuevo = generate(req.body);
        return res.render('create')
    },
    save: (req, res) => {
        req.body.image = req.files && req.file.length > 0 ? req.files[0].filename : 'default.png'
        let datosDelForm = req.body;
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);
        write(todos);
        return res.redirect('/products/')
    },
    edit: (req, res) => {
        let product = one(req.params.producto);
        return res.render('edit', {
            product})
    },
    update: (req, res) => {
        
        let todos = all();
        let actualidos = todos.map(elemento => {
            if(elemento.sku == req.body.sku){
                elemento.name = req.body.name;
                elemento.description = req.body.description;
                elemento.price = paseInt(req.body.price);
                elemento.category = req.body.category;
                elemento.classification = req.body.classification;
                elemento.inOffer = req.body.inOffer;
                elemento.image = req.files && req.files.length > 0 ? req.files[0].filename : elemento.image;
            }
            return elemento;
        })
        write(actualidos)
        return res.redirect('/products/')
    },
    remove: (req, res) => {
        let product = one(req.body.sku);
        if(product.image != 'default.png'){
            let file = resolve(__dirname, '..', '..', 'public', product.image)
            unlinkSync(file);
        }
        let todos = all();
        let noEliminar = todos.filter(elemento => elemento.sku != req.body.sku);
        write(noEliminar);
        return res.redirect('/products/')
    }
};

module.exports = controlador;