/*-----------------------------------Ejercicio----------------------------

    pedir al usuario la cantidad de koders a registar
    pedir tantos nombres de koder como el usuario haya indicado
    guardar cada nombre de cada koder en una colección
    de cada Koder imprimir únicamente el primer nombre

    ---------Algoritmo---------

    1. Declarar variables KodersTotal, KodersTotalNumber, koderName kodersArray koderPrintFirstName
    2. Asignar a la variable kodersTotal la cantidad de kodesrs a registrar con mensaje "Enter koders to register"
    3. Convertir el tipo de dato de la variable koderTotal a tipo number y asignarlo a la variable KodersTotalNumber
    4. Solicitar al usuario el nombre mediante mensaje "Enter a name", tantas veces como el usuario haya indicado y asignar los valores a la variable kodersArray
    5. Mostrar en mensaje "Koders totales: ", concatenando el valor obtenido de la variable KodersTotalNumber
    6. Obtener de cada elemento del arrelo generado en la variable kodersArray el primer subelemento y asignarlo a la variable printFirstNameItem
    7. Mostrar en mensaje "Nombre del koder ..., ...", concatenando la posicion de cda elemento obtenido  la variable printFirstNameItem y su respectivo valor

*/

var KodersTotal, KodersTotalNumber, koderName, kodersArray = [], koderPrintFirstName
kodersTotal = prompt("Enter total koders to register")
KodersTotalNumber = parseInt(kodersTotal, 10)
for(i = 0; i < KodersTotalNumber; i++) {
    koderName = prompt('Enter your name')
    kodersArray.push(koderName)
    //console.log(kodersArray)
}

console.log(`Koders totales: ${KodersTotalNumber}`)
kodersArray.forEach((item, index) => {
    printFirstNameItem = item.split(" ").slice(0,1)
    console.log(`Nombre del koder ${index}: ${printFirstNameItem[0]}`)
});
