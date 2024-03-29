const { body, validationResult } = require('express-validator')

const db = require('../database/models/index');

const controlador = {
    index: (req, res) => {
        const products = db.product.findAll()
        const success = data => res.render('home',{ products: data})
        const error = error => res.send(error)
        products.then(success).catch(error)
    },
    show: function(req, res){
        const products = db.product.findByPk(req.params.id)        
        const success = data => res.render('productDetail',{ product: data})
        const error = error => res.render(error)
        products.then(success).catch(error)
    },
    create: (req, res) => {
        
        const categories = db.category.findAll()
        const success = data => res.render('create', { categories: data ,oldData:{}})
        const error = error => res.render(error)
        categories.then(success).catch(error)
    },
    save: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
      
        const result = validationResult(req);

        if(!result.isEmpty()){
            let errores = result.mapped();
            console.log('fallo');
            console.log('errores ;:    ',errores);
            const categories = db.category.findAll()
            const success = data => res.render('create',{errors:errores,oldData: req.body,categories: categories})
            categories.then(success)
        }else{

            db.product.create({
                //sku: req.body.sku,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                categoryId: req.body.category,
                //classification: req.body.classification,
                inOffer: req.body.inOffer,
                image: req.body.image,
                //createdAt: new Date()
            })
            return res.redirect('/')
        }
    },
    edit: (req, res) => {

        const product = db.product.findByPk(req.params.id)        
        const categories = db.category.findAll()
        const success = data => res.render('edit', {
            product: data[0], categories: data[1],oldData:{} })
        const error = error => res.render(error)
        return Promise.all([product, categories]).then(success).catch(error)
    },
    update: (req, res) => {
        const product = db.product.findByPk(req.body.id)        
        const result = validationResult(req);
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        
        if(!result.isEmpty()){
            let errores = result.mapped();
            console.log('fallo');
            console.log('errores ;:    ',errores);
            const product = db.product.findByPk(req.params.id)        
            const categories = db.category.findAll()
            const success = data => res.render('edit', {
                product: data[0], categories: data[1], errors:errores,oldData:req.body })
                const error = error => res.render(error)
                return Promise.all([product, categories]).then(success).catch(error)
            }else{
               req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
                product.then((data) => db.product.update({
                    //sku: req.body.sku,
                 name: req.body.name,
                 description: req.body.description,
                 price: req.body.price,
                 categoryId: req.body.category,
                 //classification: req.body.classification,
                 inOffer: req.body.inOffer,
                 image: req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
                 /*createdAt: createdAt,  
                 updatedAt: Date.now() */
             },{
                 where:{
                     id: req.body.id
                 }
            })).then(success).catch(error)
            
        }

    },
    remove: (req, res) => {
        const product = db.product.destroy({
            where:{
                id: req.body.id
            }
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return product.then(success).catch(error)
        return res.redirect('/')
    },
    find: (req, res) => {

        //Tener en cuenta el paginado
        return
    }}


module.exports = controlador;