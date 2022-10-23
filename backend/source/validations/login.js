const { body, check } = require('express-validator')
const { compareSync } = require('bcryptjs')

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
          }
        });
      })

    /*
    body('password')
        .custom((async function(req,res) {  
            usuario = db.user.findOne({
                where:{
                    email: req.body.email
                }
            })
            console.log(usuario)
            if(usuario) {
                res.status(400).json({
                    message: 'This login is already taken. Try another.'
                })}
            ((user) => {
 
                if(!compareSync(req.body.password, user.password)){
                     console.log('CONTRASEÑA INCORRECTAAAAAAAAAAAAAA');
                    return Promise.reject("Email o contraseña incorrectos")
                }
            })
 
        }))
>>>>>>> 2b790ec07ea827df5b1f58d0a9337d4143886a3b*/
]  
