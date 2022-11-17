

//Password usar isStrongPassword de express-validator

window.addEventListener('load', function() {

    //Creo una función para generar los span
    const createError = function (idElemento, msj) {
        if (document.getElementById(idElemento) == null) {
            let listaErrores = document.querySelector('#erroresRegister')
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

    const validarPassword = (psw) => {
        let valor = validator.trim(psw.value)
        if (validator.isEmpty(valor) || !validator.isLength(valor, { min: 10, max: 1000 })) {
            psw.style.background = 'var(--msjError)'  
            createError("errorClave", 'La clave es obligatoria y debe tener al menos 10 caracteres')
            return false
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorClave")
            return true
        }
    }
    const validarImagen = (image) => {
        if (image !=null && image.files[0] != undefined && !image.files[0].type.includes("image")) {
            image.style.background = 'var(--msjError)';
            createError("errorImage", 'Debe seleccionar una imagen en el formato jpg, jpeg y png')
            return false
        }
        else {
            image.style.background = 'var(--sinError)'; deleteSpan("spanImage")
            deleteSpan("errorImage")
            return true
        }
    } 



    const validarName = (psw) => {
        let valor = validator.trim(psw.value)
        if  (validator.isEmpty(valor) || !validator.isLength(valor, { min: 5, max: 20 }) || !validator.isAlphanumeric(valor, 'es-ES', { ignore: ' ' })) {
            psw.style.background = 'var(--msjError)'  
            createError("errorName", 'El nombre de usuario es obligatorio, debe contener entre 5 y 20 carácteres')
            return false
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorName")
            return true
        }
    }
    const validarfullName = (psw) => {
        let valor = validator.trim(psw.value)
        if  (validator.isEmpty(valor) || !validator.isLength(valor, { min: 4, max: 1000 }) || !validator.isAlphanumeric(valor, 'es-ES', { ignore: ' ' })) {
            psw.style.background = 'var(--msjError)'  
            createError("errorfullName", 'Este campo debe ser completado con el nombre y apellido')
            return false
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorfullName")
            return true
        }
    }
    const validarbirthDay = (psw) => {
        let valor = validator.trim(psw.value)
        if  (validator.isEmpty(valor) || !validator.isLength(valor, { min: 4, max: 10 })) {
            psw.style.background = 'var(--msjError)'  
            createError("errorBirthDay", 'La fecha de nacimiento no puede contener mas de 10 caracteres')
            return false
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorBirthDay")
            return true
        }
    }
    const validarEmail = (psw) => {
        let valor = validator.trim(psw.value)
        let iChars = "!`#$%^&*()+=-[]\\\';,/{}|\":<>?~_";
        
        if  (validator.isEmpty(valor) || !validator.isLength(valor, { min: 6, max: 800 })) {
            psw.style.background = 'var(--msjError)'  
            createError("errorEmail", 'El email debe tener al menos 6 caracteres y debe tener formato de Email')
            return false
        }
        else if(!validator.isEmpty(valor)){
         for (i = 0; i < valor.length; i++)
    
         {      
    
             if (iChars.indexOf(valor.charAt(i)) != -1)
    
             {    
             createError("errorEmail", 'no puede contener valores ilegales tales como / , ? , ! , }')
             return false; 
             } 
    
         }
        }
        else {
            psw.style.background = 'var(--sinError)'  
            deleteSpan("errorEmail")
            return true
        }
    }
    
    document.querySelector("#email").addEventListener('change', e => {
        console.log('Estoy changes validando easdasdasdasl pws')
        
        validarEmail(e.target) })
        
    document.querySelector("#password").addEventListener('change', e => {
            console.log('VALIDATIN PASSWORD')
            
        validarPassword(e.target) })
        
    document.querySelector("#birthDay").addEventListener('change', e => {
            console.log('VALIDATIN BIRTHDATE')
            
        validarbirthDay(e.target) })
    
    document.querySelector("#user").addEventListener('change', e => {
        console.log('VALIDATIN USER')
        
        validarName(e.target) })
    document.querySelector("#fullName").addEventListener('change', e => {
        console.log('VALIDATING FULLNAME')
        
        validarfullName(e.target) })
    document.querySelector("#image").addEventListener('change', e => {
        console.log('VALIDATING IMAGE')
        
        validarImagen(e.target) })
    

    let formulario = document.querySelector('form')
    
    formulario.addEventListener("submit", function(e){
    
        console.log('estoy en el evento submit')
        e.preventDefault();
        let errores = 0
    
    
        console.log('empecé')
        
        
        let password = document.querySelector("#password")
        
        if(!validarPassword(password)) {
            console.log('passw')
            errores++
        }
      
        
        let email = document.querySelector("#email")
        
        if(!validarPassword(email)) {
            console.log('passw')
            errores++
        }
      

        let name = document.querySelector("#user")
        
        if(!validarName(name)) {
            console.log('passw')
            errores++
        }
      
        
        let fullName = document.querySelector("#fullName")
        
        if(!validarfullName(fullName)) {
            console.log('passw')
            errores++
        }
      
        
        let image = document.querySelector("#image")
        
        if(!validarImagen(image)) {
            console.log('passw')
            errores++
        }
       
        
        let birthDay = document.querySelector("#birthDay")
        
        if(!validarbirthDay(birthDay)) {
            console.log('passw')
            errores++
        }
        if (errores == 0) {
            console.log('no pasa nada');
            e.target.submit()
        }

    }) 
})