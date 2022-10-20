window.addEventListener('load', function() {

let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let errores = [];

    let email = document.querySelector("input .email")

    if(email.value == " @ "){

        errores.push('El campo email es correcto')

    }else if (email.value == " "){

        errores.push('El campo email es obligatorio y debe estar completo')

    }

    let password = document.querySelector("input .password")

    if (password.value == " ") {

        errores.push('El campo password es obligatorio y debe estar completo')
        
    }else if (email.value.length < 6){

        errores.push('El campo password tiene que tener al menos 6 caracteres')
        
    }

})

})