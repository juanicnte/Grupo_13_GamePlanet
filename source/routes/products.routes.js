const express = require('express');
const productsController = require('../controllers/products.controllerDB');
const route = express.Router();


//Implementando multer
const {resolve, extname} = require('path');
//   Verifica que la carpeta exista con existsSync y si no existe la crea con mkdirSync
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

const isLogged = require('../middlewares/isLogged')
const isAdmin = require('../middlewares/isAdmin')


//Un sólo archivo (single('image)) o req.file 
//Cualquer cantidad de archivos any() req.files
//route.get('/products/create',  isLogged, isAdmin, productsController.create)
route.get('/products/create', isLogged, isAdmin, productsController.create)

//route.post('/products',  productsController.save)
route.post('/products/guardar', isLogged, isAdmin, upload.any(), productsController.save)

route.get('/products/:categoria?', productsController.index)

route.get('/products/detail/:id', productsController.show)

route.put('/products/:id', isLogged, isAdmin, productsController.show)

route.get('/products/edit/:id', isLogged, isAdmin, productsController.edit);

route.put('/products/actualizar/:id', isLogged, isAdmin, upload.any(), productsController.update);

//route.get('/products/update', isLogged, isAdmin, productsController.update)
//route.put('/products/:id',  productsController.update)

route.delete('/products/delete/:id', isLogged, isAdmin, productsController.remove)


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