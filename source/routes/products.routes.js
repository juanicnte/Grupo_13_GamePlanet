const express = require('express');
const productsController = require('../controllers/products.controller');
const route = express.Router();

route.get('/productos/nuevo', productsController.create)
route.post('/productos/guardar', productsController.save)

route.get('/productos/detalle/:idProducto', productsController.show)
route.get('/productos/editar/:idProducto', productsController.edit)
route.get('/productos/actualizar/:idProducto', productsController.update)
route.put('/productos/:idProducto', productsController.show)
route.get('/', productsController.index)

module.exports = route;