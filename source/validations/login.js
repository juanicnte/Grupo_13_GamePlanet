const { body } = require('express-validator')

const { all } = require('../models/users.model')

const { compareSync } = require('bcryptjs')

let email = body('email').isEmail().withMessage('Email no valido').custom((value,{req})=>{

    let users = all()

    let listEmails = users.map(user => user.users.mail)

    if(!listEmails.indexOf(value) == -1){

        throw new Error('Usuario no encontrado')
    }

    return true;

})

let password = body('password').notEmpty().withMessage('Contrasela es invalida').bail().isLength({min:4,max:30}).withMessage('Minimo de 4 caracteres').custom((value,{req})=>{

    let users = all()

    let result = users.find(user =>user.email == req.body.email)

    if(!result){

        throw new Error('Contraseña es invalida')
    }

    if(!compareSync(value,result.password)){

        throw new Error('La contraseña no coincide')
    }

    return true

})

let validaciones =[email,password]

module.exports= validaciones