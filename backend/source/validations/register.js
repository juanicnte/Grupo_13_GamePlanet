const { body } = require('express-validator')
let db = require('../database/models/index')
console.log("he ingresado al validador REGISTER VALIDATION")

let email = body('email').isEmpty().withMessage('E-Mail no puede quedar vacíoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').bail().
custom(function(user){
    db.user.findOne({where:
    {
        email: req.body.email
    }}).then(function(user){
        if(user){
            throw new Error('used email')
        }else{
            true
        }
    })
}).withMessage('Email ya registrado')
let password = body('password').isEmpty().withMessage('Por favor, ingrese su contraseña').bail()






let validaciones = [email,password]

module.exports = validaciones;