const { body } = require('express-validator')

let email = body('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('Ingrese un mail válido')
let password = body('password').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({min:4,max:30}).withMessage('Min 4 caracteres')

let validaciones = [email, password]
module.exports = validaciones;