/*
1. Crear el ojeto xmlhttprequest
    2. Abrir un conexion, indicando el verbo http, la url
    onliad, una vez que se carag la pagina,
    el codigo debe correr cuando esta en el status 200
    traer la respuesta
enviar el request
*/

const cargarDatos = () => {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "datos.txt", true)
    xhttp.onload = function() {
        if(this.status === 200 ) {
            document.getElementById("listado").innerHTML = `<h2>${this.responseText}</h2>`;
            console.log(`respuesta: ${this.responseText}`)
        }
    }
    xhttp.send()
}

document.getElementById("listado").innerHTML = this.responseText;
document.getElementById('cargar').addEventListener('click', cargarDatos)