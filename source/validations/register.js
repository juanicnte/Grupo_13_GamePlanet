const { body } = require('express-validator')

let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacío').bail().isEmail().withMessage('Email no valido')
let password = body('password').notEmpty().withMessage('Contraseña no valida').bail().isLength({min: 4}).withMessage('4 caracteres como minimo')

let validaciones = [email,password]

module.exports = validaciones;

