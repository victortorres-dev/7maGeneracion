/*
//crear una función que pida al usuario las propiedades nombre {name}, 
apellido{lastName}, edad{age} y teléfono{phone} de un koder y 
crear un objeto {koderObject} con esos datos
*/

// getValues = () => {
//     var name = prompt("name")
//     var lastName = prompt("last name")
//     var age = prompt("age")

//     return {name, lastName, age}
// }

const craeteObject = () => {
    
    var name = prompt("name")
    var lastName = prompt("last name")
    var age = prompt("age")
    var koderObject = {}
    koderObject.name = name
    koderObject.lastname = lastName
    koderObject.age = age

    console.log(koderObject)
}

craeteObject()