const db = require('../../database/models');
const Product = db.product;

const productsAPIController =  {
    'list': (req, res) => {
        Product.findAll()
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                };
                res.json(respuesta);
            });
    },    
    'detail': (req, res) => {
        Product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                };
                res.json(respuesta);
            });
    },

    'last': (req, res) => {
        Product.findOne({order:[['id', 'DESC']]})
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/products/last'
                    },
                    data: products
                };
                res.json(respuesta);
            });
    },    
};
module.exports = productsAPIController;