const { body } = require('express-validator')
let db = require('../database/models/index')
console.log("he ingresado al validador REGISTER VALIDATION")

        
let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacio').bail().custom(function(user,{req}){
    return db.user.findOne({where:
    {
        email: req.body.email
    }}).then(function(data){
        if(data){
            return Promise.reject('used eemail')
        }else{
            return true
        }
    })
}).withMessage('Email ya registrado')
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail()

let user = body('user').
custom(function(user){
   return db.user.findOne({where:
    {
        user: user
    }}).then(function(data){
        if(data){
            throw new Error('used user')
        }else{
            return true
        }
    })
}).withMessage('Usuario ya registrado').bail()
.isLength({min:2})






let validaciones = [email,password,user]

module.exports = validaciones;