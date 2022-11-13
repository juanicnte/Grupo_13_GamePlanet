const { body } = require('express-validator')
let db = require('../database/models/index')


        
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
.isLength({min:2}).withMessage('Al menos 2 caracteres')

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ]
  
let imagen = body('image').custom(function(value,{req}){
         if(req.files && req.files.length > 0 && !whitelist.includes(req.files[0].mimetype)){
            return Promise.reject('Por favor que el archivo sea de tipo png, jpeg, jpg o webp')
         }else{
            return true
         }
})







let validaciones = [email,user,fullName,imagen]

module.exports = validaciones;