const db = require('../../database/models/index');
const { body, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const controlador = {
    index: function(req, res){
        let users = db.user.findAll().then(function(users){
            return res.send('users/adminUsers',{users:users})
        })
    },
    show: function(req, res){
        db.user.findOne({
            where:{
                id:req.params.id
            }
        }).then(function(user){
            if(user){
                return res.send('users/userDetail',{ user:user });
            }
            res.redirect('/')
        })
        /*let product = products.filter(product => product.sku == req.params.id);*/
    }
};

module.exports = controlador;