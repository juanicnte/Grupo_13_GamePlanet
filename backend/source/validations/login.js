const { body, check } = require('express-validator')
const { bcryptjs } = require('bcryptjs')

const db = require('../database/models/index');
const { nextTick } = require('process');
console.log("he ingresado al validador back")

let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacío').bail().isEmail().withMessage('Email no valido').bail()
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail()

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
