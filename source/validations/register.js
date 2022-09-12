const { body } = require('express-validator')
const {all} = require('../models/users.model')

        


let email = body('email').notEmpty().withMessage('E-Mail no puede quedar vacío').bail().isEmail().withMessage('Email no valido').bail()
    // .custom(todos => {
    //     let todoss = all()
    //     todoss.find(user => user.email === req.body.email)
    // })
    .withMessage('Email en uso, porfavor intente otro')
    
    
let password = body('password').notEmpty().withMessage('Contraseña no valida').bail().isLength({min: 4}).withMessage('4 caracteres como minimo')

let validaciones = [email,password]

module.exports = validaciones;

