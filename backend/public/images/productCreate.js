const { body } = require('express-validator')
const {all} = require('../models/products.model')
const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ]

  
let imagen = body('image').custom(function(value,{req}){
         if(!whitelist.includes(req.files[0].mimetype)){
            return Promise.reject('Por favor que el archivo sea de tipo png, jpeg, jpg o webp')
         }else{
            return true
         }
})
module.exports = [imagen]