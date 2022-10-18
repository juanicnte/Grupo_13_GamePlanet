//Agregar la expresión regular para el email ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
//Password usar isStrongPassword de express-validator
let email = document.querySelector("#email")

//Esto sería con reggex
let expEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
if(!expEmail.test(email)){
    return "Debe ingresar un e-mail correcto"
}
//Con express validator sería así
if(!expEmail.isEmail(email)){
    return "Debe ingresar un e-mail correcto"
}
