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

};
module.exports = usersAPIController;