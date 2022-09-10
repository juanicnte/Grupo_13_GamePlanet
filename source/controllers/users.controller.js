const { unlinkSync} = require('fs');
const { resolve } = require('path');
const path = require('path');
const {all, one, generate, write} = require('../models/users.model')
const { validationResult } = require("express-validator")

const controlador = {
    create: (req, res) => {
        return res.render('register')
    },
    show: function(req, res){
/*
        let user = one(req.params.id)
        if(user){
            return res.render('productDetail',{ user });
        }
        res.render('productDetail' + { user:null });
*/
        return res.send('Debe mostrar el usuario')
    },
    save: (req, res) => {
        
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render('register',{
                errores: errores,
                data: req.body
            })

        }
        
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);  
        write(todos);
        return res.redirect('/')
        
    
    },
    edit: (req, res) => {

        let user = one(req.params.id);
        
        return res.render('edit', {
            user})
    },
    update: (req, res) => {
        let todos = all();
        let actualidos = todos.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.fullName = req.body.fullName;
                elemento.user = req.body.user;
                //elemento.price = paseInt(req.body.price);
                elemento.email = req.body.email;
                elemento.password = req.body.password;
                elemento.perfil = req.body.perfil;
                elemento.birthDay = req.body.birthDay;
                elemento.image = req.files && req.files.length > 0 ? req.files[0].filename : elemento.image;
            }
            return elemento;
        })
        write(actualidos)
        return res.redirect('/')
    },
    remove: (req, res) => {
        let user = one(req.body.id);
        let todos = all();
        let noEliminar = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminar);
        return res.redirect('/')
    },
    access: (req, res) => {
        const dato = usuarios.find(usuario => usuario.email == req.body.email)
        if(dato){
            req.session.user = dato
            if(req.body.remember){
                res.cookies('email', req.body.email, {maxAge: 1000*60})
            }
            return res.redirect('/')
        }
        else{
            return res.render('home', {errores:{email:'No estás registrado'}})
        }
    },
    logout:(req, res) => {
        delete req.session.user
        res.cookie('email', req.body.email,{maxAge:1})
        return res.back()
    }
};



    
module.exports = controlador;
