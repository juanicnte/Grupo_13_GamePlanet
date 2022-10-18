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
//Obtengo todo el formulario para ver si el botón de crear puede o no hacer el submit 
document.querySelector("form").addEventListener('submit', function(e){
    
    //Valido la imagen
    document.querySelector("#image").addEventListener('change', e => {
    //document.querySelector("#imageMsj").innerHTML = !e.target.files[0].type.includes("jpg", "jpeg", "png") 
            //? "Debe seleccionar una imagen en el formato jpg, jpeg y png" : null)

    if(!e.target.files[0].type.includes("jpg", "jpeg", "png")){
        createSpan('#idImage', 'Debe seleccionar una imagen en el formato jpg, jpeg y png')
    }}
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

})

