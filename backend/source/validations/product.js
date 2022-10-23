const { body } = require('express-validator')
const {all} = require('../models/products.model')

module.exports = [
    body('name').isEmpty().withMessage('Este campo es obligatorio').isLength({min: 6}).withMessage('La longitud de caracteres debe ser mayor a 5')
]