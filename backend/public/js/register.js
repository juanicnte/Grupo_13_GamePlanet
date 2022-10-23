//Password usar isStrongPassword de express-validator

window.addEventListener('load', function () {

    const validarEmail = (email) => {
        let valor = validator.trim(email.value)
        if (validator.isEmpty(valor) || !validator.isEmail(valor)) {
            email.style.background = 'var(--msjError)'  
            createSpan("spanEmail", "#fsEmail", 'El e-mail es obligatorio y debe ser válido')
            return false
        }
        else {
            email.style.background = 'var(--sinError)'  
            deleteSpan("spanEmail")
            return true
        }
    }



    document.querySelector("#email").addEventListener('change', e => validarEmail(e.target))

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
})