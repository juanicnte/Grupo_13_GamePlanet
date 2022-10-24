
const { body } = require('express-validator')

const { compareSync } = require('bcryptjs')


const db = require('../database/models/index');
const { nextTick } = require('process');
console.log("he ingresado al validador back")



let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacíoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').bail().
custom(function(user){
    db.user.findOne({where:
    {
        email: req.body.email
    }}).then(function(user){
        if(!user){
            throw new Error('used email')
        }else{
            true
        }
    })
}).withMessage('Email no registrado')
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail()


   


    
    


let validaciones = [email,password]

module.exports = validaciones;
          

            
            
         
      
   



