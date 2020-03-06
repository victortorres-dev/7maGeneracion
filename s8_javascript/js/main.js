/*
1.- Crear las variables x, y
2.- asignarles un valor numérico
3.- imprimir la suma de x + y
4.- imprimir la resta de x - y
5.- "" multiplicación de x*y
6.- division x/y
*/

// var numeroA
// var numeroB

// numeroA = 10
// numeroB = 5

// console.warn(`numeroA = ${numeroA}`)
// console.warn(`numeroB = ${numeroB}`)

// console.log(`numeroA + numeroB =  ${numeroA + numeroB}`)
// console.log(`numeroA - numeroB =  ${numeroA - numeroB}`)
// console.log(`numeroA * numeroB =  ${numeroA * numeroB}`)
// console.log(`numeroA / numeroB =  ${numeroA / numeroB}`)
//______________________________________________________________
//practica 4
//recibir del usuario los datos de 3 lados de un triangulo
//con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje

/*
1. Declarar las variables sideA, sideB, sideC, perimeter
2. Solicitar al usuario el sideA del un triangulo mediante el metodo propmpt con el mensaje "Please enter a sideA"
3. Asiganar a la variable sideA, el valor obtenido en la petición del sideA
4. Convertir la variable sideA a tipo number, mediante el metodo parseInt
5. Reasignar el valor convertido a tipo number de la variable sideA a la misma

6. Solicitar al usuario el sideB del un triangulo mediante el metodo propmpt con el mensaje "Please enter a sideB"
7. Asiganar a la variable sideB, el valor obtenido en la petición del sideB
8. Convertir la variable sideB a tipo number, mediante el metodo parseInt
9. Reasignar el valor convertido a tipo number de la variable sideB a la misma

10. Solicitar al usuario el sideC del un triangulo mediante el metodo propmpt con el mensaje "Please enter a sideC"
11. Asiganar a la variable sideC, el valor obtenido en la petición del sideC
12. Convertir la variable sideC a tipo number, mediante el metodo parseInt
13. Reasignar el valor convertido a tipo number de la variable sideC a la misma

. Asignar a la variable perimeter, la suma de sideA + sideB + sideC



reasignar a l variable...
*/
// var sideA
// var sideB
// var sideC
// var perimeter

// sideA = prompt("Please enter a sideA")
// sideA = parseInt(sideA, 10)

// sideB = prompt("Please enter a sideB")
// sideB = parseInt(sideB, 10)

// sideC = prompt("Please enter a sideC")
// sideC = parseInt(sideC, 10)



// perimeter = sideA + sideB + sideC


// console.log(`${sideA} ${sideB} ${sideC}`)
// console.log(`${perimeter}`)


/*
Declarar las variables: sideA, sideB, sideC, addAB,addBC, addAC, perimeter, semiperimeter, product, area
Solicitar al usuario mediante el metodo prompt el valor para sideA, con el mensaje "Enter side A"
Guardar en la variable sidA el valor obtenido del prompt para sideA
Solicitar al usuario mediante el metodo prompt el valor para sideB, con el mensaje "Enter side B"
Guardar en la variable sidB el valor obtenido del prompt para sideB
Solicitar al usuario mediante el metodo prompt el valor para sideC, con el mensaje "Enter side C"
Guardar en la variable sidC el valor obtenido del prompt para sideC
Convertir el valor de la variable sideA a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideA en sideA
Convertir el valor de la variable sideB a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideB en sideB
Convertir el valor de la variable sideC a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideC en sideC
Asignar a la variable sumaAB la operación sideA+sideB
Asignar a la variable sumaBC la operación sideB+sideC
Asignar a la variable sumaAC la operación sideA+sideC
Validar la construccion del triangulo preguntando si addAB > sideC y addBC > sideA y addAC > sideB
    si es verdadero ejecutar:
        Asignar a la variable perimeter la operación: sideA + sideB + sideC
        Asignar a la variable semiperimeter la operación: perimeter / 2
        Asignar a la variable product la operación: semiperimeter*(semiperimeter - sideA) * (semiperimeter -sideB) * (semiperimeter - sideC)
        Asignar a la variable area la operación de raíz cuadrada de la variable product mediante el metodo Math.sqrt()
        Mostrar en un mensaje el valor devuelto por la variable area
        Validar si el triangulo es equilatero preguntando si
            sideA === sideB y sideB === sideC y sideA === sideC
                si es verdadero mostar mensaje "Es equilatero"
            En caso contrario si sideA === sideB o sideB === sideC o sideA === sideC
                si es verdadero mostrar mensaje "Es Isóceles"
            En caso contrario
                mostrar mensaje "Es escaleno"
        Validar si el triangulo es rectangulo preguntando si

            sideA > sideB y sideA > sideB
                si es verdadero ejecutar la operacion:
    En caso contrario:
        mostrar mensaje "No existe triángulo con esas dimensiones"
    

*/

var sideA
var sideB
var sideC
var addAB
var addBC
var addAC
var perimeter
var semiperimeter
var product
var area
var powSideA
var powSideB
var powSideC
var hipotenuse
sideA = prompt("enter sideA")
sideB = prompt("enter sideB")
sideC = prompt("enter sideC")
sideA = parseInt(sideA, 10)
sideB = parseInt(sideB, 10)
sideC = parseInt(sideC, 10)
addAB = sideA + sideB
addBC = sideB + sideC
addAC = sideA + sideC
if (addAB > sideC && addBC > sideA && addAC > sideB) {
  //console.log("si existe triangulo con esas dimensiones")
  perimeter = sideA + sideB + sideC
  semiperimeter = perimeter / 2
  product = semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC)
  area = Math.sqrt(product)
  console.log(`el area del triangulo es ${area}`)
  if (sideA===sideB && sideB===sideC && sideA===sideC) {
    console.log("es equilatero")
  }else if (sideA===sideB || sideB===sideC || sideA===sideC){
    console.log("es isoceles")
  }else {console.log ("es escaleno")}
  powSideA = Math.pow(sideA, 2)
  powSideB = Math.pow(sideB, 2)
  powSideC = Math.pow(sideC, 2)
  
  if(powSideA > powSideB && powSideA > powSideC) {
      hipotenuse = powSideB + powSideC
      if(hipotenuse === powSideA){
        console.log ("es rectangulo")
      }
  }

  if(powSideB > powSideA && powSideB > powSideC) {
    hipotenuse = powSideA + powSideC
    if(hipotenuse === powSideB){
      console.log ("es rectangulo")
    }
  }

  if(powSideC > powSideB && powSideC > powSideA) {
    hipotenuse = powSideA + powSideB
    if(hipotenuse === powSideC){
      console.log ("es rectangulo")
    }
  }


} else {
  console.log("no existe triangulo con esas dimensiones")
}