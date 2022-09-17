const { body } = require('express-validator')

const { all } = require('../models/users.model')

const { compareSync } = require('bcryptjs')

let email = body('email').notEmpty().withMessage('Email no puede estar vacío').bail().isEmail().withMessage('Email no válido').custom((value, {req}) => {
    let users = all()
    let result = users.map(user => user.email)

    if(result.indexOf(value) == -1){
        throw new Error('Usuario no encontrado')
    }

    return true
})

let password = body('password').notEmpty().withMessage('Contraseña no válida').bail().isLength({min:4,max:30}).withMessage('Mínimo 4 caracteres').custom((value,{req})=>{

    let users = all()
    let result = users.find(user =>user.email == req.body.email)
    
    if(!result){
        throw new Error('Usuario no válido')
    }

    if(!compareSync(value,result.password)){
        console.log('Hay error de contraseña')
        throw new Error('La contraseña no coincide')
    }

    

    return true
})

let validaciones =[email,password]

module.exports= validaciones