var koders = [
    "Victor",
    "Fer",
    "Reginita",
    "Abrham"
]

var newList = document.createElement("ul")

koders.forEach( koder => {
    let newKoder = document.createElement("li")

    let newKoderName = document.createTextNode(koder)

    newKoder.appendChild(newKoderName) //ya existe el nomre pero falta adderirselo al li que se creo

    newList.appendChild(newKoder) // ya existe el li donde se gurada el string ahora se lo pasamos o adderimos a la lista ordenada
})

document.body.appendChild(newList) //ahora hay que adderirselo al body para que lo muestre en el dom


/*--------------------------New Excercice---------------------*/
/*Pedir al usuario que nos indique la cantidad de koders a registrar*/
/*pedir al usuario el nombre de cada koder a registrar*/
/*Crear una lista ordenada mediante javascript para insertar el nombre de cada koder*/
/*crear un list item por cada koder, que contenga el nombre del koder en cuestion*/
/*agregar los list items a la lista ordenada*/
/*agregar la lista ordenada al body de mi documento*/

var kodersQuantity = prompt("Cuántos koders quieres registar?")
kodersQuantity = parseInt(kodersQuantity)

var koderNames = []

var myKoders = document.createElement("ol")

for (let index = 0; index < kodersQuantity; index++) {
    let koderName = prompt(`Ingresa el nombre del koder ${index + 1}`)
    koderNames.push(koderName)
}

const printKoderNames = () => {
    document.body.getElementsByTagName("ol")[0] ? document.body.getElementsByTagName("ol")[0].remove() : null
    let myKoders = document.createElement("ol")

    koderNames.forEach( name => {
        let koderListItem = document.createElement("li")
        /* <li></li> */
        let koderName = document.createTextNode(name)
        /*"nombre1"*/
        koderListItem.appendChild(koderName)
        /* koderListItem = <li>nombre1</li> */
        myKoders.appendChild(koderListItem)
        /* myKoders = <ul><li>nombre1</li></ul> */
    })
    document.body.appendChild(myKoders)
    
}

const askForKoder = () => {
    let newKoder = prompt("Ingresa nombre de nuevo koder")
    koderNames.push(newKoder)
    printKoderNames()
}

printKoderNames()