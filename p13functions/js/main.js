var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
  ];
  var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
  ];
  
//   var nombre, apellido

//   bmentorsNames.forEach(element => {
//     nombre = `${element}, ${element[0]}`
//     apellido = `${element.split(" ")[1].substring(0,1)}`
//     console.log(`${nombre}. ${apellido}.`)   
//   });


//-------------------------------------------------filter, map, foreach, reduce
// var someArray = [1,2,3,4,5]

// var filteredArray = someArray.filter(number => number % 2 === 0)

// console.log(filteredArray)

// //Procesa un array
// var mappedArray = someArray.map( number => number*10)
// console.log(mappedArray)


// var reduceArray = someArray.reduce((reduceArray, number) => 
//   reduceArray + number
// )

// console.log(reduceArray)


// practicasDeKoders.forEach(element => {
//   let practicasReducidas = element.reduce((totalDePracticas, practica = > totalDePracticas + practicas))  
//   totalDePracticasDeKoders.push(practicasReducidas)
// });

// console.log(`Total de practicas de koders: ${totalDePracticasDeKoders}`)

// var kodersMasAplicados = totalDePracticasDeKoders.filter((practicasDeUnKoder) => {
//   return practicasDeUnKoder > 3
// })

// console.log(`Koder mas aplicados: ${kodersMasAplicados}`)


// var bmentorsNames = [
//     "Brenda González",
//     "Shalem Solis",
//     "Jorge Ochoa",
//     "Rurick Maqueo",
//     "Alex Cruz",
//     "Daniel Ortega"
//   ];
//   var amentorsNames = [
//     "Verónica Nemecio",
//     "Carolina Gayoso",
//     "David Moranchel",
//     "Carlos Silva",
//     "Michael Villalba",
//     "Israel Salinas",
//     "Carlos Ramos"
//   ];
  
//   var otherVariable = "hola mundo";

//   /*
//     iterar dentro del array,
//     por cada item, obtener el nonbre de cada bmentor
//     extraer la primer letra de cada palabra del nombre
//     concatenar el contenido de cat item con las iniciales  separadas por un punto
//     mostrar en consola el resultado
//     output = 
// */

// var initials = ""; // ambito global ya que se utiliza en ambas funciones

// const getInitials = word => (initials += word.charAt(0) + ". ");

// bmentorsNames.forEach(name => { //Brenda Gonzales
//   let arrayName = name.split(" ");//Brenda,Gonzalez
//   //console.log("que hace arrayName: "+arrayName)//Brenda,Gonzalez
//   arrayName.forEach(getInitials);//para cada nueva cadena obtenida ejecuta la funcion getInitials
//   //console.log("que hace arrayNameGetinitials: "+arrayName)
//   console.log(`${name} ${initials}`);
//   initials = ""; //se limpia nuevamente la variable
// });
// console.log(`________________________________________`);
// // const printNamesInitials = arrayNames => {
// //   arrayNames.forEach(name => {
// //     let arrayName = name.split(" ");
// //     arrayName.forEach(getInitials);
// //     console.log(`${name} ${initials}`);
// //     initials = "";
// //   });
// // };

// // const printFullName = (name, lastName) =>
// //   console.log(`Tu nombre completo es: ${name} ${lastName}`);

// /* 4. función que reciba una cantidad (número), este número será la cantidad de veces 
//       que se solicite al usuario mediante un prompt algún nombre, todos los nombres se 
//       deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, 
//       con sus respectivas iniciales*/

// var totalNames, totalNamesToNumber, name, arrayNames = []

// const getTotalNames = totalNamesToNumber => {
//   totalNames = prompt("Enter a number of names: ")
//   totalNamesToNumber = parseInt(totalNames, 10)
//   return totalNamesToNumber
// }
// //console.log(getTotalNames())

// for (let i = 0; i < getTotalNames(); i++) {
//   console.log("si entro")
  
// }




// // totalNames = prompt("Enter a number of names: ")
// // totalNamesToNumber = parseInt(totalNames, 10)
// // console.log(totalNamesToNumber)
// // for (let i = 0; i < totalNamesToNumber; i++) {
// //   name = prompt("Enter a name: ")
// //   arrayNames.push(name)
// // }
// // console.log(arrayNames)

// // const setArrayNames = (arrayNames, totalNamesToNumber) => {
// //     for (let i = 0; i < totalNamesToNumber; i++) {
// //     name = prompt("Enter a name: ")
// //     arrayNames.push(name)
// //   }
// //   console.log(arrayNames)
// // }

// // setArrayNames(totalNamesToNumber)