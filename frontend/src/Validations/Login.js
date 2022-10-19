window.addEventListener("load", function(){

    let formulario = document.querySelector('form');

    formulario.addEventListener("submit", function(e){

        let errors = [];

        let email = document.querySelector('input .email')

        if (email.value == "@") {

            errors.push("El campo email es obligatorio, no debe estar vacio")
            
        }

        let password = document.querySelector('input .password')

        if(password.value == " "){

            errors.push("El campo contraseña es obligatorio, no debe estar vacio")

        }else if (password.value.length < 4){

            errors.push("El campo contraseña debe tener al menos 4 caracteres")

        }

        if(errors.length > 0){

            e.preventDefault()
        }

    }) 

})