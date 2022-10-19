//Creo una función para generar los span
const createSpan = function(idElemento, msj){
    let contenedor = document.querySelector(idElemento)
    let mensaje = document.createElement("span")
    mensaje.innerHTML = msj
    contenedor.appendChild(mensaje)
}

const deleteSpan = function(idElemento){
    let contenedor = document.querySelector(idElemento)
    let mensaje = document.deleteElemente("span")
    
}
//Voy a validar todo el formulario para ello tengo que cargar el formulario y agregar el evento
//submit del formulario
window.addEventListener('load', function(){
    document.querySelector("#image").addEventListener('change', e => {
        //document.querySelector("#imageMsj").innerHTML = !e.target.files[0].type.includes("jpg", "jpeg", "png") 
                //? "Debe seleccionar una imagen en el formato jpg, jpeg y png" : null)
                alert('Evento change')

            if(!e.target.files[0].type.includes("JPG", "JPEG", "PNG", "GIF")){
            alert('Entro al if')
            document.querySelector("#msjImage").innerHTML = 'Debe seleccionar una imagen en el formato jpg, jpeg y png'
            //createSpan('#idImage', 'Debe seleccionar una imagen en el formato jpg, jpeg y png')
        }})
    //Obtengo el formulario
    //Obtengo todo el formulario para ver si el botón de crear puede o no hacer el submit 
    document.querySelector("#form-create").addEventListener('submit', function(e){
        //Que no haga nada y estar tranquila

        e.preventDefault()

        let errores = 0
        //alert(document.querySelector("body"))
        //Validaciones de campos obligatorios
        let name = document.querySelector("#name")
        let description = document.querySelector("#description")
        let category = document.querySelector("#category")
        let price = document.querySelector("#price")
        name = validator.trim(name.value)
        description = validator.trim(description.value)
        price = validator.trim(price.value)
        //No acepta espacios  !validator.isAlpha(name)
        if(validator.isEmpty(name) || !validator.isLength(name, {min:5, max: 50})){
            alert('El nombre es requerido, no debe contener letras y la longitud debe ser entre 5 letras y 50 caracteres')
            errores++
        }
        if(validator.isEmpty(price) || validator.toFloat(price) == 'NaN'){
            alert('El precio es requerido, numérico y debe ser mayor que cero')
            errores++
        }
        if(validator.isEmpty(description) || !validator.isLength(description, {min:20, max: 500})){
            alert('La descripción es requerida entre 20 y 500 caracteres')
            errores++
        }
        /*
        if(category == null || validator.isEmpty(category.value)){
            alert('La categoría es requerida')
            alert(category.value)
            errores++
        }
*/
        if(errores == 0) {
            alert('sin errores')
            e.target.submit()
        }
        else{
            alert('mayor a cero')  
        } 

    })

})
 //Si quiero preguntar cosas por pantalla puedo usar let variable = window.prompt('Pregunta')
    //Expresiones regulares sólo se hacen para texto (regex) página https://regexr.com/
    //Usar también el express validator ( se debe instalar - https://express-validator.github.io/docs/)
    /*○ Nombre


○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.*/

