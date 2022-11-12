const db = require('../database/models/index');

const controlador = {
    index: (req, res) => {
        const products = db.product.findAll()
        const success = data => res.send('home',{ products: data})
        const error = error => res.send(error)
        products.then(success).catch(error)
    },
    show: function(req, res){
        const products = db.product.findByPk(req.params.id)        
        const success = data => res.send('productDetail',{ product: data})
        const error = error => res.send(error)
        products.then(success).catch(error)
    }
}

module.exports = controlador;