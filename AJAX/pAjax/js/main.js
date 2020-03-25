/*
1.- crear un formulario que me permita guardar un nuevo producto en mi base de datos
2.- crear un boton que al darle click muestre en consola mis productos guardados
 */

 /*GET*/
 const jsonRequestProduct = () => {
    addProductToDB()
    getProducts ()
    console.log(addProductToDB())
 }

 const buttonproduct = document.getElementById('sendProduct')
 buttonproduct.addEventListener('click', jsonRequestProduct)

const getProducts = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            productsArray = JSON.parse(this.responseText)
            printProductList();
        }
    }
    xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/israel/products.json",true)
    xhttp.send();
}
/*POST*/
const addProductToDB = () => {
    let xhttp = new XMLHttpRequest();
    //objeto a guardar en la base//
    let productObject = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: document.getElementById('productPrice').value
    }
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }
    
    xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/israel/products.json",true)
    xhttp.send(JSON.stringify(productObject))
}


