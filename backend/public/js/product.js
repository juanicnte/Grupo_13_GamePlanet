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
    
        if(!e.target.files[0].type.includes("jpg", "jpeg", "png")){
            alert('Entro al if')
            document.querySelector("#msjImage").innerHTML = 'Debe seleccionar una imagen en el formato jpg, jpeg y png'
            //createSpan('#idImage', 'Debe seleccionar una imagen en el formato jpg, jpeg y png')
        }})
    //Obtengo el formulario
    //Obtengo todo el formulario para ver si el botón de crear puede o no hacer el submit 
document.querySelector("#form-create").addEventListener('submit', function(e){
    //Que no haga nada y estar tranquila

    e.preventDefault()

    alert("Entro a la validacion del producto")
    let errores = 0

    //Validaciones de campos obligatorios
    let name = document.querySelector("#name")
    if(name.value == ''){
        alert('El nombre es requerido')
        errores++
    }
    if(name.value.length < 5){
        alert('El nombre debe tener mínimo 5 letras')
        errores++
    }
    
alert(errores)
    //Valido la imagen
    
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
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.*/

