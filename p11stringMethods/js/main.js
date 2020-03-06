/*-----------------------------------Ejercicio----------------------------
    Práctica 1: (Cuenta las letras del nombre completo)

    Declarar la variable name
    mediante un prompt que solicite al usuario ingresar su nombre, asignamos el nombre del usuario al a variable name
    declarar la variable charname
    contar los caracteres del nombre del usuario y asignar ese valor a la variable  namechartcount
    mostrar el valor de namechartcount con el mensaje "tu nombre tiene {namechartcount}"

    ---------Algoritmo---------
    1. Declarar variables fullName, fullNameNoSpaces, fullNameLength
    2. Asignar a la variable fullName el valor obtenido mediante un prompt con mensaje "Enter your name"
    3. Remplazar el string " " por "" obtenido de la variable fullName y asignar el nuevo string a la variable fullNameNoSpaces
    4. Asignar a la variable fullNameLength el numero de caracteres encontrados en la variable fullNameNoSpaces
    5. Mostrar en mensaje "Tu nombre tiene ... caracteres", concatenando la variable fullNameLengt
*/

var fullName, fullNameNoSpaces, fullNameLength
fullName = prompt("Enter your full name:")
fullNameNoSpaces = fullName.replace(/ /gi, "")
fullNameLength = fullNameNoSpaces.length
//console.log(fullNameNoSpaces)
console.log(`Tu nombre tiene ${fullNameLength} caracteres`)


/*-----------------------------------Ejercicio----------------------------

    Práctica 2

    obtener el nombre completo del usuario
    Contar cuántos caracteres tiene
    si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
    si tiene más de 15 caracteres indicarle que su nombre es muy largo

    ---------Algoritmo---------
    1. Declarar las variables fName, 
    2. Asignar a la variable fName el valor obtenido mediante un prompt con mensaje "Enter your full name"
    3. Asignar a la variable fNameLength el numero de caracteres encontrados en la variable fName
    4. Válidar si la variable fNameLength posee un string menor o igual a 15 caracteres
        4.1 Si la cantidad de caracteres es menor o igual a 15
                mostrar mensaje "El nombre es demasiado corto"
        4.2 En caso contrario
                mostrar mensaje "El nombre es demasiado largo"
*/

var fName, fNameLength
fName = prompt("Enter your full name")
fNameLength = fName.length
if(fNameLength <= 15) {
    console.log("El nombre es demasiado corto")
} else {
    console.log("El nombre es demasiado largo")
}


/*-----------------------------------Ejercicio----------------------------

    Práctica 3

    obtener el nombre completo del usuario
    contar cuántas vocales tiene

    //     ---------Algoritmo---------
    1. Declarar las variables fVocalName, arrayMatchVocalName, arrayMatchVocalNameLength
    2. Asignar a la variable fVocalName el valor obtenido mediante un prompt con mensaje "Enter your full name"
    3. Asignar a la variable arrayMatchVocalName las coincidencias de los caracteres "a", "e", "i", "o", "u" que se encuentra en la variable fVocalName
    4. Asignar a la variable arrayMatchVocalNameLength el numero de coincidencias encontradas en la variable arrayMatchVocalName
    5. Mostrar en mensaje "Tu nombre tiene: ... vocales", concatenando la variable arrayMatchVocalNameLengt
*/

var fVocalName, arrayMatchVocalName, arrayMatchVocalNameLength
fVocalName = prompt("Enter your full name")
arrayMatchVocalName = fVocalName.match(/[AEIOU]/gi)
arrayMatchVocalNameLength = arrayMatchVocalName.length
console.log(`Tu nombre tiene: ${arrayMatchVocalNameLength} vocales`)


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*-----------------------------------Ejercicio----------------------------
    Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
    letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo
    
    ---------Algoritmo---------

    1. Declarar variables userWord, userWordNoSpace, userWordTwoFirstCharacter, userWordTwoLastCharacter
    2. Asignar a la variable userWord el valor obtenido mediante un prompt con mensaje "Enter a word"
    3. Eliminar los caracteres "espacio" del string obtenido de la variable userWord y asignarlo a la variable userWordNoSpace
    4. Válidar si la cantidad de caracteres almacenados en la variable userWordNoSpace es mayor a cinco
        4.1 Si la cantidad de caracteres es mayor a cinco, ejecutar:
                mostrar mensaje de error con "La palabra debe tener más de cinco caracteres"
        4.2 En caso contrario ejecutar:
                Asignar a la variable userWordTwoFirstCharacter los dos primeros caracteres obtenidos del string 
                almacenado en la variable userWordNoSpace 
                Asignar a la variable userWordTwoLastCharacter los dos últimos caracteres obtenidos del string 
                almacenado en la variable userWordNoSpace
                Mostrar en mensaje "Nueva palabra: " con la concatenación de las variables userWordTwoFirstCharacter y userWordTwoLastCharacter, respectivamente

*/

var userWord, userWordNoSpace, userWordTwoFirstCharacter, userWordTwoLastCharacter
userWord = prompt("Enter a word")
userWordNoSpace = userWord.replace(/ /g, "")
if(userWordNoSpace.length < 6) {
    console.error("La palabra debe tener más de cinco caracteres")
} else {
    userWordTwoFirstCharacter = userWordNoSpace.substring(0,2)
    userWordTwoLastCharacter = (userWordNoSpace.slice(-2))
    console.log(`Nueva palabra: ${userWordTwoFirstCharacter}${userWordTwoLastCharacter}`)
}

/*-----------------------------------Ejercicio----------------------------

    Pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

    ---------Algoritmo---------

    1. Declarar variables namePerson, agePerson
    2. Asignar a la variable namePerson el valor obtenido mediante un prompt con mensaje "Enter your name"
    3. Asignar a la variable agePerson el valor obtenido mediante un prompt con mensaje "Enter your age"
    4. Mostrar en mensaje "Hola, soy ... y tengo ... años de edad" con las variables namePerson y agePerson respectivamente

*/

var namePerson, agePerson
namePerson = prompt("Enter your Name")
agePerson = prompt("Enter your Age")
console.log(`Hola, soy ${namePerson} y tengo ${agePerson} años de edad`)

/*-----------------------------------Ejercicio----------------------------

    Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
    Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario    

    ---------Algoritmo---------
    1. Declarar variables actualParagraph, newParagraph, arrayMatch
    2. Asignar a la variable actualParagraph la cadena "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
    3. Asignar a la variable arrayMatch las coincidencias del string "estudiante" que se encuentra en la variable actualParagraph
    4. Asignar a la variable arrayLength el numero de coincidencias encontradas en la variable arrayMatch
    5. Remplazar el string "estudiante" por el string "koder" obtenido de la variable actualParagraph y asignar el nuevo string a la variable newParagraph
    6. Mostrar en mensaje "Concidencias de la palabra "estudiante" : ", concatenando la variable arrayLength
    7. Mostrar en mensaje "Párrafo actual: ... :", concatenando la variable actualParagraph
    8. Mostrar en mensaje "Nuevo párrafo: ... :", concatenando la variable newParagraph
*/

var actualParagraph, newParagraph, arrayMatch
actualParagraph = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
arrayMatch = actualParagraph.match(/estudiante/gi)
arrayLength = arrayMatch.length
newParagraph = actualParagraph.replace(/estudiante/gi, "koder")
console.log(`Concidencias de la palabra "estudiante": ${arrayLength}`)
console.log(`Párrafo actual: ${actualParagraph}`)
console.log(`Nuevo párrafo: ${newParagraph}`)