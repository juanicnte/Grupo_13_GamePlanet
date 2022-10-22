const { body } = require('express-validator')
<<<<<<< HEAD
let db = require('../database/models/index')
=======
const { compareSync } = require('bcryptjs')

const db = require('../database/models/index');
const { nextTick } = require('process');
console.log("he ingresado al validador back")
>>>>>>> 2b790ec07ea827df5b1f58d0a9337d4143886a3b

let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacío').bail().isEmail().withMessage('Email no valido').bail()
let password = body('password').notEmpty().withMessage('Por favor, ingrese su contraseña').bail()

module.exports = [
<<<<<<< HEAD
    body('email')
    .isLength({ min: 10 }).withMessage('Debe tener al menos 10 caracteres')
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
    })
=======
    
    email, password
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
 
        }))*/
>>>>>>> 2b790ec07ea827df5b1f58d0a9337d4143886a3b
]  
          

            
            
         
      
   


