window.addEventListener('load', function() {

    //Creo una función para generar los span
    const createError = function (idElemento, msj) {
        if (document.getElementById(idElemento) == null) {
            let listaErrores = document.querySelector('#erroresLogin')
            let mensaje = document.createElement("li")
            mensaje.id = idElemento
            mensaje.innerHTML = msj        
            listaErrores.appendChild(mensaje)
        }
    }

    const deleteSpan = function (idElemento) {
        if (document.getElementById(idElemento) != null) {
            document.getElementById(idElemento).remove();
        }
    }

    const validarLogin = (login) => {
        console.log('Estoy validando el login')
        let valor = validator.trim(login.value)
        if (validator.isEmpty(valor) || !validator.isEmail(valor)) {
            login.style.background = 'var(--msjError)'  
            createError("errorUsuario", 'El correo electrónico es requerido y debe ser válido')
            return false
        }
        else {
            login.style.background = 'var(--sinError)'  
            deleteSpan("errorUsuario")
            return true
        }
    }

    const validarPassword = (psw) => {
        let valor = validator.trim(psw.value)
        if (validator.isEmpty(valor)) {
            psw.style.background = 'var(--msjError)'  
            createError("errorClave", 'La clave es obligatoria')
            return false
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorClave")
            return true
        }
    }

    document.querySelector("#usuario").addEventListener('change', e => {
        validarLogin(e.target) })
   
    document.querySelector("#password").addEventListener('change', e => {
        console.log('Estoy changes validando el pws')
        
        validarPassword(e.target) })
    

    let formulario = document.querySelector('form')
    
    formulario.addEventListener("submit", function(e){
    
        console.log('estoy en el evento submit')
        e.preventDefault();
        let errores = 0
    
        //let email = document.querySelector("input .email")
        console.log('empecé')
        erroresLogin
        if(!validarLogin(document.querySelector("#usuario"))) {
            console.log('ingreso')
            errores++
        } 

        let password = document.querySelector("#password")
        
        if(!validarPassword(password)) {
            console.log('passw')
            errores++
        }
        if (errores == 0) {
            e.target.submit()
        }
        /*
        if (password.value == " ") {
    
            //errores.push('El campo password es obligatorio y debe estar completo')
            
        }else if (email.value.length < 6){
    
            //errores.push('El campo password tiene que tener al menos 6 caracteres')
            
        }*/
    
    })
    
})


//Debe existir en la base.
