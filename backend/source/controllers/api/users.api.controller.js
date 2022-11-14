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
                        deatil: req.url
                    },
                    data: {
                        id: user.id,
                        fullName: user.fullName,
                        user: user.user,
                        email: user.email,
                        deatil: `/images/avatars/${user.image}`
                    }
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