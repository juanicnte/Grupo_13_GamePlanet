const { write } = require('fs');
const path = require('path');
const {generate} = require('../models/users.model')
const controlador = {
    create: (req, res) => {
        let nuevo = generate(req.body);
        return res.send('Creado')
    }
};

module.exports = controlador;
