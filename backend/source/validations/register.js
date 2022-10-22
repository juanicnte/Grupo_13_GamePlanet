const { body } = require('express-validator')
let db = require('../database/models/index')

        
let email = body('email')
.isEmpty().withMessage('Email no puede quedar vacio')
.isLength({ min: 13 }).withMessage('Email debe ser al menos mayor a 13 caracteres').bail()
.isEmail().withMessage('Este campo debe ser del tipo email')
.custom(function(email){
    return db.user.findOne({
        where:{
            email:req.body.email
        }
    }).then(function(user){
        if(user){
            throw new Error ('Bad')
         
        }
        else{
            return true
        }

    })
}).withMessage('Este email is used')

let password = body('password')
.isEmpty().withMessage('Este campo no puede quedar vacioooo').bail()
.isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres').bail()


    
    


let validaciones = [email,password]

module.exports = validaciones;

