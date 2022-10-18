//Password usar isStrongPassword de express-validator
let email = document.querySelector("#email")
let clave = document.querySelector("#contraseña")


//Con express validator sería así
if(!validator.isEmail(email)){
    return "Debe ingresar un e-mail correcto"
}

let validacionPsw = validator.isStrongPassword(clave, {minLength:5})
if(!validacionPsw){
    return "Debe elegir un mejor password"
}