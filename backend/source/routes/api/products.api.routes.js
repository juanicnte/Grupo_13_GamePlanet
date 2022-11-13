const express = require('express');
const productsController = require('../../controllers/api/products.api.controller');
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


//const multer = require('multer');

//const upload = multer({storage:multer.diskStorage({destination, filename})});


//const isLogged = require('../middlewares/isLogged')
//const isAdmin = require('../middlewares/isAdmin')
//const isProduct = require('../validations/product')



/*
route.get('/products/:categoria?', productsController.index)

route.get('/products/detail/:id', productsController.show)

//route.put('/products/:id', isLogged, isAdmin, productsController.show)
route.put('/products/:id', productsController.show)
*/
route.get('/api/products', productsController.list);

route.get('/api/products/:id', productsController.detail);


module.exports = route;