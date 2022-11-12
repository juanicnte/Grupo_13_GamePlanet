const { body } = require('express-validator')
let db = require('../database/models/index')
console.log("he ingresado al validador REGISTER VALIDATION")

        
let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacio').bail().isEmail().custom(function(user,{req}){
    return db.user.findOne({where:
    {
        email: req.body.email
    }}).then(function(data){
        if(data){
            return Promise.reject('used email')
        }else{
            return true
        }
    })
}).withMessage('Email ya registrado')
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail().isLength({min:10}).withMessage('Al menos 10 caracteres')

let user = body('user').notEmpty().withMessage('El nombre de usuario no puede quedar vacío').
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
.isLength({min:2,max:20}).withMessage('minimo 2 caracteres, maximo 20')

let fullName = body('fullName').notEmpty().withMessage('El nombre de usuario no puede quedar vacío').
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







let validaciones = [email,password,user,fullName]

module.exports = validaciones;