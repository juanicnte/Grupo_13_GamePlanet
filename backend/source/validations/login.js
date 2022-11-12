const { body, check } = require('express-validator')
const { compareSync } = require('bcryptjs')

const db = require('../database/models/index');
const { nextTick } = require('process');
const { cp } = require('fs');
console.log("he ingresado al validador back")

let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacío').bail().isEmail().withMessage('Email no valido').bail()
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail()

module.exports = [
    
    body('email').custom(value => {
        return db.user.findOne({
            where:{
                email: value
            }
        }).then(user => {
          if (!user) {
            return Promise.reject('E-mail no existe');
          }
        });
      }),
    body('password').notEmpty().withMessage('La contraseña no puede quedar vacia').bail().custom(function(user,{req}){
        return db.user.findOne({where:
        {
    
            email: req.body.email
        }}).then(function(data){     
            if(data){
                console.log(password);
                if(compareSync(password) == data.password){            
                    return true
                }else{
                    return Promise.reject('la contra no cinicde XD')
                }
            }
        })
    }).withMessage('la contra no cinice wtachin')

    
]  

/*if(!compareSync(password, user.password)){
    return true
}*/
