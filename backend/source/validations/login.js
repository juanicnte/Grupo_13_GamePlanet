const { body } = require('express-validator')
let db = require('../database/models/index')


module.exports = [
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
]  
          

            
            
         
      
   


