const express = require('express');
const productsController = require('../controllers/products.controller');
const route = express.Router();

route.get('/', productsController.index)
route.get('/productos/:idProducto', productsController.show)
route.get('/productos/nuevo', productsController.create)

module.exports = route;