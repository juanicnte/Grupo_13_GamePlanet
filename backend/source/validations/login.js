const { body } = require('express-validator')



const { compareSync } = require('bcryptjs')


const db = require('../database/models/index');
const { nextTick } = require('process');


module.exports = [
    body('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),
 
    body('password')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña'),
 
    body('password')
        .custom((async function(req,res) {  
                     
            usuario = db.user.findOne({
                where:{
                    email: req.body.email
                }
            })
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
]  
          

            
            
         
      
   


