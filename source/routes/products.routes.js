const express = require('express');
const productsController = require('../controllers/products.controller');
const route = express.Router();


//Implementando multer
const {resolve, extname} = require('path');
//   Verifica que la carpeta exista con existsSync y si no existe la crea con mkdirSync
const { existsSync, mkdirSync } = require('fs');

const destination = function(req, file, cb){
    let folder = resolve(__dirname, '..', '..', 'public', 'products');
    if(!existsSync(folder))
    {
        mkdirSync(folder)
    }
    return cb(null, folder);
}
//nombre único a cada archivo que se suba
const filename = function(req, file, cb){
    let unique =  Date.now();
    let name = file.filename + '-' + unique + extname(file.originalName);
    return cb(null, name);
}

const multer = require('multer');
const upload = multer({Storage:multer.diskStorage({destination, filename})});

//Un sólo archivo (single('image)) o req.file 
//Cualquer cantidad de archivos any() req.files
route.get('/products/create', productsController.create)

//route.post('/products',  productsController.save)
route.post('/products/guardar', upload.any(), productsController.save)

route.put('/products/:id', productsController.show)

route.get('/products/edit/:id', productsController.edit)

route.get('/products/:id', upload.any(), productsController.update)
//route.put('/products/:id',  productsController.update)

route.delete('/products/:id',  productsController.remove)


route.get('/', productsController.index)

/*
Recuerden que para cumplir ese objetivo necesitarán de siete rutas:
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado*/

module.exports = route;