const fs = require('fs');
const { unlinkSync} = require('fs');
const { resolve } = require('path');
const path = require('path');
const {all, one, generate, write} = require('../models/products.model')
//const model = require('../models/products.model')

/*//obtengo la ruta del archivo json 
const productsFilePath = path.join(__dirname, '../data/products.json')
//Luego lo parseo para poder usarlo
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/
const controlador = {
    //Muestra la lista de productos
    index: (req, res) => {
        let products = all();
        //res.render('Listado', {products})
        //res.render(path.resolve(__dirname, '../views/home.ejs'));
        //filtraré por productos
        const inOffer = products.filter(product => product.inOffer == 1);
        const juegos = products.filter(product => product.classification == 'Juegos del momento');
        const masVendidos = products.filter(product => product.classification == 'Más vendidos');
        const soporte = products.filter(product => product.classification == 'Soporte 24/7');
        const xbox = products.filter(product => product.category == 'Xbox');
        const nintendo = products.filter(product => product.category == 'Nintendo');
        const playStation = products.filter(product => product.category == 'PlayStation');
        const pc = products.filter(product => product.category == 'PC');
        
        //PREGUNTAR COMO SE FILTRA EN EL VIEW
        return res.render('home', { products, inOffer, juegos, masVendidos, soporte, xbox, nintendo, playStation, pc });
    },
    //Muesta el detalle del producto
    show: function(req, res){

        let product = one(req.params.sku)
        /*let product = products.filter(product => product.sku == req.params.id);*/
        if(product){
            return res.render('productDetail',{ product });
        }
        res.render('productDetail' + { product:null });

    },
    //Crea el producto
    create: (req, res) => {
        //let nuevo = generate(req.body);
        return res.render('create')
    },
    save: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        
        let datosDelForm = req.body;
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);
        write(todos);
        return res.redirect('/')
    },
    edit: (req, res) => {

        let product = one(req.params.sku);
        
        return res.render('edit', {
            product})
    },
    update: (req, res) => {
        let todos = all();
        let actualidos = todos.map(elemento => {
            if(elemento.sku == req.body.sku){
                elemento.name = req.body.name;
                elemento.description = req.body.description;
                //elemento.price = paseInt(req.body.price);
                elemento.price = req.body.price;
                elemento.category = req.body.category;
                elemento.classification = req.body.classification;
                elemento.inOffer = req.body.inOffer;
                elemento.image = req.files && req.files.length > 0 ? req.files[0].filename : elemento.image;
            }
            return elemento;
        })
        write(actualidos)
        return res.redirect('/')
    },
    remove: (req, res) => {
        let product = one(req.body.sku);
        /*if(product.image =! undefined && product.image != 'default.png'){
            let file = resolve(__dirname, '..', '..', 'public', product.image)
            unlinkSync(file);
        }*/
        let todos = all();
        let noEliminar = todos.filter(elemento => elemento.sku != req.body.sku);
        write(noEliminar);
        return res.redirect('/')
    }
};

module.exports = controlador;