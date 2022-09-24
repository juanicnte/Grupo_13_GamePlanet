const { all } = require('../models/users.model')
//Es un middleware de aplicación
let middleware = (req, res, next) =>{
    let user = null
    // Alternativa 1 existe una cookie de usuario


    if(req.cookies && req.cookies.user){
        let users = all()
        let result = users.find(user => user.email == req.cookies.user)
        req.session.user = result 
    }   

    // Alternativa 2 existe un usuario en sesssion
    if(req.session && req.session.user){
        user = req.session.user
    }

    res.locals.userLogged = user

    return next()
}

module.exports = middleware;