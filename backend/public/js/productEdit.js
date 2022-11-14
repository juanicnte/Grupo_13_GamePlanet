
window.addEventListener('load', function () {
    console.log('ESTAMOSSSSS EN LA VALIDACION DE FRONT EDIT');
    const validarNombre = (name) => {
        let valor = validator.trim(name.value)
        if (validator.isEmpty(valor) || !validator.isLength(valor, { min: 5, max: 50 }) || !validator.isAlphanumeric(valor, 'es-ES', { ignore: ' ' })) {
            name.style.background = 'var(--msjError)'  
            createSpan("spanName", "#fsName", 'El nombre es requerido, no debe contener letras y la longitud debe ser entre 5 letras y 50 caracteres')
            return false
        }
        else {
            name.style.background = 'var(--sinError)'  
            deleteSpan("spanName")
            return true
        }
    }

    const validarPrice = (price) => {
        let valor = validator.trim(price.value)      
        if (validator.isEmpty(valor) || isNaN(validator.toFloat(valor))) {
            price.style.background = 'var(--msjError)';
            createSpan("spanPrice", "#fsPrice", 'El precio es requerido, numérico y debe ser mayor que cero')
            return false
        }
        else {
            price.style.background = 'var(--sinError)';
            deleteSpan("spanPrice")
            return true
        }
    }

    const validarImagen = (image) => {
        if (image !=null && image.files[0] != undefined && !image.files[0].type.includes("image")) {
            image.style.background = 'var(--msjError)';
            createSpan("spanImage", "#fsImage", 'Debe seleccionar una imagen en el formato jpg, jpeg y png')
            return false
        }
        else {
            image.style.background = 'var(--sinError)'; deleteSpan("spanImage")
            deleteSpan("spanImage")
            return true
        }
    }

    const validarDescripcion = (description) => {
        let valor = validator.trim(description.value)
        if (validator.isEmpty(valor) || !validator.isLength(valor, { min: 400, max: 500 })) {
            description.style.background = 'var(--msjError)';
            createSpan("spanDescription", "#fsDescription", 'La descripción es requerida entre 20 y 500 caracteres')
            return false
        }
        else {
            description.style.background = 'var(--sinError)';
            deleteSpan("spanDescription")
            return true
        }
    }

    document.querySelector("#image").addEventListener('change', e => validarImagen(e.target))

    document.querySelector("#name").addEventListener('change', e => validarNombre(e.target))

    document.querySelector("#price").addEventListener('change', e => validarPrice(e.target))

    document.querySelector("#description").addEventListener('change', e => validarDescripcion(e.target))

    //Obtengo todo el formulario para ver si el botón de crear puede o no hacer el submit 
    document.querySelector("#form-edit").addEventListener('submit', function (e) {
        //Que no haga nada y estar tranquila
        e.preventDefault()

        let errores = 0
        let category = document.querySelector('input[name="category"]:checked');

        if(!validarNombre(document.querySelector("#name"))){        
            console.log('El nombre es requerido, no debe contener letras y la longitud debe ser entre 5 letras y 50 caracteres')
            errores++
        }

        if(!validarPrice(document.querySelector("#price"))){        
            console.log('El precio es requerido, numérico y debe ser mayor que cero')
            errores++
        }

        if(!validarImagen(document.querySelector("#image"))){     
            console.log('Debe seleccionar una imagen en el formato jpg, jpeg y png')   
            errores++
        }

        if(!validarDescripcion(document.querySelector("#description"))){        
            console.log('La descripción es requerida entre 20 y 500 caracteres')
            errores++
        }

        if (category == null || validator.isEmpty(category.value)) {
            document.querySelector('#legCategory').style.background = 'var(--msjError)';
            createSpan("spanCategory", "#fsCategory", 'La categoría es requerida')
            console.log('La categoría es requerida')
            errores++
        } else {
            document.querySelector('#legCategory').style.background = 'var(--sinError)';
            deleteSpan("spanCategory")
        }

        if (errores == 0) {
            e.target.submit()
        }

    })

})