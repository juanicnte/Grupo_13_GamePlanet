const { unlinkSync} = require('fs');
const { resolve } = require('path');
const path = require('path');
const {all, one, generate, write} = require('../models/users.model')
const { validationResult } = require("express-validator");
const { text } = require('stream/consumers');
const bcryptjs = require('bcryptjs')

const controlador = {
    create: (req, res) => {
        errorEmail = ''
        return res.render('register',{oldData: {}},errorEmail)
    },
    index: function(req, res){

        let users = all()

        return res.render('users/adminUsers',{users})
    },
    show: function(req, res){
        let user = one(req.params.id)
        /*let product = products.filter(product => product.sku == req.params.id);*/
        if(user){
            return res.render('users/userDetail',{ user });
        }
        res.render('/users/detail' + { user:null }, req.session);

    },
    save: (req, res) => {
        
        let todoss = all()
        const result = validationResult(req);
        errores = result.mapped();
        coincide = todoss.find(user => user.email === req.body.email)
        // if(coincide){
        //     return res.render('register',{
               
        //         oldData:req.body,
        //         errors:{msg:'Email en uso'}
        //     })
        
        // }
        if(coincide){
            return res.render('register',{
                errorEmail:{email:{msg:'EMAIL ALREADY USED'}},
                oldData: req.body,
                errors:errores
            })
        }
        if(!result.isEmpty()){
            return res.render('register',{
                errorEmail:{email:{msg:''}},
                oldData: req.body,
                errors: errores
            })
        }
        if((!result.isEmpty()) && coincide){

            return res.render('register',{
                errorEmail:{email:{msg:'Email ya registrado'}},
                oldData: req.body,
                errors: errores
            })
        }

        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'defaultUser.png'
        
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);  
        write(todos);
        
        return res.redirect('/login')
    },
    edit: (req, res) => {

        let user = one(req.params.id);
        
        return res.render('users/userEdit', {
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
                //NO SE MODIFICARÁ EL PASSWORD
                elemento.password = elemento.password;
                elemento.perfil = req.body.perfil;
                elemento.birthDay = req.body.birthDay;
                elemento.image = req.body.image ? req.body.image : elemento.image;
            }
            return elemento;
        })
        write(actualidos)
        return res.redirect('/')
    },
    remove: (req, res) => {
        //let user = one(req.body.id);
        let todos = all();
        let noEliminar = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminar);
        return res.redirect('/')
    },
    login:(req, res) => {
        errorEmail = ''
        return res.render('login',{oldDataLogin:{}},errorEmail)
    },
    access: (req, res) => {

        const result = validationResult(req);
        if(!result.isEmpty()){
            errores = result.mapped();
            return res.render('login',{
                errorEmail:{email:{msg:''}},
                oldDataLogin: req.body,
                errors: errores
            })
        }
        

        oldDataLogin = req.body   
        let usuarios = all()
        const dato = usuarios.find(usuario => usuario.email == req.body.email)
        
        if(dato){
            req.session.user = dato
            if(req.body.recordame){
                res.cookie('user',req.body.email,{maxAge: 1000*60*3})
            }
             return res.redirect('/')
        }
        else{
            console.log('else')
            const result = validationResult(req);
            if(!result.isEmpty()){
                errores = result.mapped()
            // return  res.render('login', {errores:{email:'No estás registrado'}});
                return res.render('login',{
                    errorEmail:{email:{msg:'Not found'}},
                    oldDataLogin: req.body,
                    errors:errores
                })
            }
        }
    },
    logout:(req, res) => {
        delete req.session.user
        res.cookie('user', req.body.email,{maxAge:-1})
        return res.redirect('/')
        //return res.back()
    }
};

module.exports = controlador;
