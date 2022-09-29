
const db = require('../database/models/index');

const controlador = {
    index: (req, res) => {
        const products = db.product.findAll()
        const success = data => res.render('home',{ products: data})
        const error = error => res.render(error)
        products.then(success).catch(error)
    },
    show: function(req, res){
        const products = db.product.findByPk(req.params.id)        
        const success = data => res.render('productDetail',{ product: data})
        const error = error => res.render(error)
        products.then(success).catch(error)
    },
    create: (req, res) => {
        //let nuevo = generate(req.body);
        return res.render('create')
    },
    save: (req, res) => {
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        const save = db.product.create({
            //sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            //classification: req.body.classification,
            inOffer: req.body.inOffer,
            image: req.body.image,
            createdAt: Date.now() 
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return save.then(success).catch(error)
    },
    edit: (req, res) => {

        let product = one(req.params.id);
        
        return res.render('edit', {
            product})
    },
    update: (req, res) => {
        console.log('update')
        req.body.image = req.files && req.files.length > 0 ? req.files[0].originalname : 'default.png'
        console.log(req.body.inOffer)
        const upload = db.product.update({
            //sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            //classification: req.body.classification,
            inOffer: req.body.inOffer,
            image: image == req.body.image ? req.body.image : image,
            createdAt: createdAt,  
            updatedAt: Date.now()  
        },{
            where:{
                id: req.body.id
            }
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return upload.then(success).catch(error)
    },
    remove: (req, res) => {
        const remove = db.product.delete({
            where:{
                id: req.body.id
            }
        })
        const success = data => res.redirect('/')
        const error = error => res.render(error)
        return remove.then(success).catch(error)
        return res.redirect('/')
    }/*,
    find: (req, res) => {

        //Tener en cuenta el paginado
        return
    }*/
}


module.exports = controlador;