<<<<<<< HEAD
const { body } = require('express-validator')

const { compareSync } = require('bcryptjs')
=======
const { body, check } = require('express-validator')
const { bcryptjs } = require('bcryptjs')
>>>>>>> bd016d0f06e4822725a7f5676f8216bbb91c8abf

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

<<<<<<< HEAD
   


    
    


let validaciones = [email,password]

module.exports = validaciones;
          

            
            
         
      
   


=======
module.exports = [
    
    email, password,
    check('email').custom(value => {
        return db.user.findOne({
            where:{
                email: value
            }
        }).then(user => {
          if (!user) {
            return Promise.reject('E-mail no existe');
          }/*
          if(!bcryptjs.compareSync(user.password, value)){
            return Promise.reject('La clave no coincide');
          }*/
        });
      })/*,
      check('password').custom(value => {
          return db.user.findOne({
              where:{
                password: bcryptjs.hashSync(value,10)
              }
          }).then(user => {
            if (!user) {
              return Promise.reject('La clave no coincide');
            }
          });
        })*/
]  
>>>>>>> bd016d0f06e4822725a7f5676f8216bbb91c8abf
