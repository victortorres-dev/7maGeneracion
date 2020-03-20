
/*
    pedir al usuario la cantidad de koders a registrar
    por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
    generar un objeto del tipo Koder por cada koder registrado
    guardarlo en una colección que se llame KodersList
    PART 2:
    agregar a nuestro constructor un método que permita obtener el promedio del koder
*/

var arrayKoder = [], kodersTotal, kodersTotalParse

function Koder(nombre, apellido, calificacionhtml, calificacionjs, calificacioncss ) {
    this.nombre = nombre
    this.apellido = apellido
    this.calificacionhtml = calificacionhtml
    this.calificacionjs = calificacionjs
    this.calificacioncss = calificacioncss
} 


// var kodersTotal = prompt('¿cuantos koders desea registrar?')
// kodersTotal = parseInt(kodersTotal, 10)
// for (let index = 0; index < kodersTotal; index++) {
//    let nombre = prompt('Ingresa el nombre')
//    let apellido = prompt('Ingresa el apellido')
//    let calificacionhtml = prompt('Ingresa  calificación html')
//    let calificacionjs = prompt('Ingresa  calificación js')
//    let calificacioncss = prompt('Ingresa  calificación css')
//    let koder = new Koder(nombre, apellido, calificacionhtml, calificacionjs, calificacioncss)
//    arrayKoder.push(koder)
// }

// console.log(arrayKoder)


/*TRansformanddo el ejercicio anterior en una funcion*/
const getTotalKoders = () => {
    kodersTotal = prompt('¿cuantos koders desea registrar?')
    kodersTotalParse = parseInt(kodersTotal, 10)
    return kodersTotalParse
}

const printKoderObjects = () => {
    let totalKoders = getTotalKoders()
    for (let index = 0; index < totalKoders; index++) {
        let nombre = prompt('Ingresa el nombre')
        let apellido = prompt('Ingresa el apellido')
        let calificacionhtml = prompt('Ingresa  calificación html')
        let calificacionjs = prompt('Ingresa  calificación js')
        let calificacioncss = prompt('Ingresa  calificación css')
        let koder = new Koder(nombre, apellido, calificacionhtml, calificacionjs, calificacioncss)
        arrayKoder.push(koder)
     }
     console.log(arrayKoder)
}

printKoderObjects()