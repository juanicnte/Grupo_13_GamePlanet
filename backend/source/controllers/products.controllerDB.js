
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
        const success = data => res.render('create', { categories: data })
        const error = error => res.render(error)
        categories.then(success).catch(error)
    },
    save: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
      

        const save = db.product.create({
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
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return save.then(success).catch(error)
    },
    edit: (req, res) => {

        const product = db.product.findByPk(req.params.id)        
        const categories = db.category.findAll()
        const success = data => res.render('edit', {
            product: data[0], categories: data[1] })
        const error = error => res.render(error)
        return Promise.all([product, categories]).then(success).catch(error)
    },
    update: (req, res) => {
        const product = db.product.findByPk(req.body.id)        
       
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return product.then((data) => db.product.update({
             //sku: req.body.sku,
             name: req.body.name,
             description: req.body.description,
             price: req.body.price,
             categoryId: req.body.category,
             //classification: req.body.classification,
             inOffer: req.body.inOffer,
             image: req.files && req.files.length>0 ? req.files[0].fileName : data.image
             /*createdAt: createdAt,  
             updatedAt: Date.now() */
         },{
             where:{
                 id: req.body.id
             }
        })).then(success).catch(error)
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