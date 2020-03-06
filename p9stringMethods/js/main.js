/*-----------------------------------Ejercicio----------------------------

    Calcular el area de un circulo

    ---------Algoritmo---------

    1. Declarar variables radius, radiusNumber, circleArea
    2. Declarar constante PI = 3.1416
    3. Asignar a la variable radius el valor obtenido mediante un prompt con mensaje "Enter the radius"
    4. Convertir el valor obtenido de la variable radius a tipo number y asignarlo a la variable radiusNumber
    5. Asignar a la variable circleArea la operación  dada por las variables radiusNumber y circleArea y la constante PI -> PI * radiusNumber *radiusNumber
    6. Mostrar mensaje "El area del circulo es: ...", concatenando la variable circleArea
*/

var radius, radiusNumber, circleArea
const PI = 3.1416
radius = prompt("Enter the radius")
radiusNumber = parseInt(radius,10)
circleArea = PI * radiusNumber * radiusNumber
console.log(`El area del circulo es: ${circleArea}`)