    //Creo una función para generar los span
function createSpan (idElemento, idContenedor, msj) {
    if (document.getElementById(idElemento) == null) {
        let contenedor = document.querySelector(idContenedor)
        let mensaje = document.createElement("p")
        mensaje.id = idElemento
        mensaje.classList.add('mensajeError')
        mensaje.innerHTML = msj
        contenedor.appendChild(mensaje)
    }
}

function deleteSpan(idElemento) {
    if (document.getElementById(idElemento) != null) {
        document.getElementById(idElemento).remove();
    }
}