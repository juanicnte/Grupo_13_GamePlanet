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

};
module.exports = productsAPIController;