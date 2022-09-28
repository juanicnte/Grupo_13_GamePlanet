
const db = require('../database/models/index');

const controlador = {
    index: (req, res) => {
        const products = db.products.findAll()
        const success = data => res.render('home',{ products: data})
        const error = error => res.render(error)
        products.then(success).catch(error)
    },
    show: function(req, res){
        const products = db.products.findByPk(req.params.sku)        
        const success = data => res.render('productDetail',{ product: data})
        const error = error => res.render(error)
        products.then(success).catch(error)
    },
    create: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        const save = db.products.create({
            //sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            classification: req.body.classification,
            inOffer: req.body.inOffer,
            image: req.body.image,
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return save.then(success).catch(error)
    },
    update: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        const upload = db.products.update({
            //sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            classification: req.body.classification,
            inOffer: req.body.inOffer,
            image: image == req.body.image ? req.body.image : image        
        },{
            where:{
                sku: req.body.sku
            }
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return upload.then(success).catch(error)
    },
    remove: (req, res) => {
        const remove = db.products.delete({
            where:{
                sku: req.body.sku
            }
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return remove.then(success).catch(error)
        return res.redirect('/')
    },
    find: (req, res) => {

        //Tener en cuenta el paginado
        return
    }
}


module.exports = controlador;