const express = require('express');

const route = express.Router();

const categoriesController = require('../../controllers/api/categories.api.controller');

//route.get('/api/categories', isLogged, isAdmin, categoriesController.list)
route.get('/api/categories', categoriesController.list);
route.get('/api/categories/products/:id', categoriesController.categoryProducts);


module.exports = route;