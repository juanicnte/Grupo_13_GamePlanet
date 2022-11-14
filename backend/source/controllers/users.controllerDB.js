const db = require('../database/models/index');
const { body, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const controlador = {
    create: (req, res) => {
        
        return res.render('register',{oldData: {}})
    },
    index: function(req, res){
        let users = db.user.findAll().then(function(users){
            return res.render('users/adminUsers',{users:users})
        })
        
        

        
    },
    show: function(req, res){
        db.user.findOne({
            where:{
                id:req.params.id
            }
        }).then(function(user){
            if(user){
                return res.render('users/userDetail',{ user:user });
            }
            res.redirect('/')
        })
        /*let product = products.filter(product => product.sku == req.params.id);*/
        

    },
    save: (req, res) => {
        console.log('Buenooo', req.body);
       const result = validationResult(req);
       
       req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
  
       
       if(result.isEmpty()){
           console.log('funciona');
            db.user.create({
                fullName: req.body.fullName,
                user: req.body.user,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password,10),
                perfil: req.body.perfil,
                birthDay: req.body.birthDay,

                image: req.body.image})
                .then(function(user){
                    console.log(user);
                    return res.redirect('/login')
                })
            }else{
            let errores = result.mapped();
            console.log('fallo');
            console.log('errores ;:    ',errores);
            return res.render('register',{errors:errores,oldData: req.body})
        } },
    edit: (req, res) => {

        db.user.findOne({
            where:{
                id:req.params.id
            }
        }).then(function(user){
            
            return res.render('users/userEdit', {
                user: user, oldData:{}})
            
        })
    },
    update: (req, res) => {
        const result = validationResult(req);
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        if(result.isEmpty()){

            db.user.findByPk(req.params.id).then((data) => db.user.update({
                fullName: req.body.fullName,
                user: req.body.user,
                password: req.body.password,
                perfil: req.body.perfil,
                birthDay: req.body.birthDay,
                image: req.files && req.files.length>0 ? req.files[0].fileName : data.image,
                email: req.body.email
             },{
                 where:{
                     id: req.params.id
                 }
            })).then(success).catch(error)
        }else{
            let errores = result.mapped();
            console.log('fallo');
            console.log('errores ;:    ',errores);
            return res.render('users/userEdit',{errors:errores,user: req.body})
        }
    },
    remove: (req, res) => {
        const user = db.user.destroy({
            where:{
                id: req.body.id
            }
        })
        const success = data => res.redirect('/users')
        const error = error => res.render(error)
        return user.then(success).catch(error)
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
        
        db.user.findOne({
                where:{
                    email:req.body.email
                }
            })
        .then(function(dato){
             
        if(dato){
            req.session.user = dato
            if(req.body.recordame){
                res.cookie('user',req.body.email,{maxAge: 1000*60000*3})
        
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
        })
       
    
        
    },
    logout:(req, res) => {
        delete req.session.user
        res.cookie('user', req.body.email,{maxAge:-1})
        return res.redirect('/')
        //return res.back()
    },
    findEmail: (req, res) => {

        const user = db.user.findOne({
            where:{
                email:req.body.email
            }
        })
        const success = data => data
        const error = error => res.render(error)
        user.then(success).catch(error)

    }
};

module.exports = controlador;