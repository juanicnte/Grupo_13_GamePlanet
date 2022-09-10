let middleware = (req, res, next) =>{
    let user = null

    //if(req.cookies && req.cookies.email){
        //uscarlo en la bd a partir un método en mi modelo y guardarlo en session
    //}

    if(req.session && req.session.user){
        user = req.session.user
    }

    res.locals.user = user

    return next()
}

module.exports = middleware;