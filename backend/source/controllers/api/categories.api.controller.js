const db = require('../../database/models');
//const db = require('../database/models/index');
const sequelize = db.sequelize;
const moment = require('moment');

const Category = db.category;

const categoriesAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
            .then(categories => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: categories.length,
                        url: 'api/categories'
                    },
                    data: categories
                }
                res.json(respuesta);
            })
    }

}

module.exports = categoriesAPIController;