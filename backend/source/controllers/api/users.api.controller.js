const db = require('../../database/models');
const User = db.user;

const usersAPIController =  {
    'list': (req, res) => {
        User.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                };
                res.json(respuesta);
            });
    },    
    'detail': (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: user
                };
                res.json(respuesta);
            });
    },

    'last': (req, res) => {
        User.findOne({order:[['id', 'DESC']]})
            .then(User => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/users/last'
                    },
                    data: User
                };
                res.json(respuesta);
            });
    },     
};
module.exports = usersAPIController;