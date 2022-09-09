const bcrypt = require('bcryptjs')
let cryptPass = bcrypt.hashSync('c',10);

const model = require('/source/controllers/users.controller')


