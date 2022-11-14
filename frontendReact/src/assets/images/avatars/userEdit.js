const { body } = require('express-validator')
let db = require('../database/models/index')
console.log("he ingresado al validador DE EDICION DE USUARIOS")

        
let fullName =  body('fullName').notEmpty().withMessage('La contraseña no puede quedar vacia').bail()







let validaciones = [fullName]

module.exports = validaciones;