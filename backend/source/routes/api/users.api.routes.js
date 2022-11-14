const express = require('express');

const usersController = require('../../controllers/api/users.api.controller');

const route = express.Router();

const {resolve, extname} = require('path');

const { existsSync, mkdirSync } = require('fs');


//const multer = require('multer');
//const upload = multer({storage:multer.diskStorage({destination, filename})});

//const registerValidator = require('../validations/register')

//const loginValidator = require('../validations/login')

//const isLogged = require('../middlewares/isLogged')
//const isAdmin = require('../middlewares/isAdmin')



// route.get('/register', usersController.create)

// route.get('/login', usersController.login)

route.get('/api/users', usersController.list)

route.get('/api/users/last', usersController.last);

// route.put('/users/:id', usersController.show)


route.get('/api/users/:id', usersController.detail);

module.exports = route;