console.log('Validas iMAGEEEEEN');
const { body } = require('express-validator')
module.exports = [
    body('image').isLength({min:1}).withMessage('Min 1')
    

]