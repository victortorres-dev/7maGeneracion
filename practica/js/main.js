var productsArray = [
    {
        name:"Sabritas 340gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name:"Paketaxo verde",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:50,
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzpSlOJoOjZ5Ro2718NwuGpzHUxppbpF1cuB2GyFx8zjP8KPBU"
    },
    {
        name:"Sabritas Moradas 170gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:45,
        imgUrl:"https://elpoderdelconsumidor.org/wp-content/uploads/2018/10/papas-fritas-flamin-hot-d-sabritas.jpg"
    },
    {
        name:"Coca Cola lata 335ml",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:14,
        imgUrl:"https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name:"Coca Cola sin azúcar",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:18,
        imgUrl:"https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name:"Six pack XX Lager",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:84,
        imgUrl:"https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name:"Six Pack Modelo Especial",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:112,
        imgUrl:"https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name:"Six Pack Negra Modelo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:140,
        imgUrl:"https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name:"Jägermeister",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:270,
        imgUrl:"https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name:"Alka-seltzer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }
    

]
/*
la ui consta de 3 columnas la primer columna debería mostar una card 
por cada producto dentro del array esa card tiene los textos 
descriptivos del producto, un input para seleccionar cantidad, un botón 
"mostrar detalle" y un botón "agregar al carrito" al dar clic a "mostrar
detalle", la card que se encuentra en la 2a columna debería cambiar y 
mostrar los datos del producto al que se le dio click
*/

const printCardOfProducts = () => {
    document.getElementById("list-of-products").innerHTML = ""
    productsArray.forEach((product, index) => {
        let productName = product.name
        let productPrice = product.price

        //acumulador items
        let currentContentCards = document.getElementById("list-of-products").innerHTML;
        let showProduct = `
        <li class="list-group-item list-group-item-info mb-3">
            <div class="product-name font-weight-bold">${productName}</div>
            <div class="product-price">Costo: $${productPrice}</div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Cantidad:</label>
                <div class="col-sm-8">
                    <input type="number" class="form-control">
                </div>
            </div>
            <div class="btn-wrapper d-flex justify-content-between">
                <div class="btn btn-primary w-50" data-product-index="${index}">Ver Detalle</div>
                <div class="btn btn-success w-50 ml-2">Agregar al carrito</div>
            </div>
        </li>
        `
        document.getElementById("list-of-products").innerHTML = currentContentCards + showProduct
    })
}

printCardOfProducts()
/*
Identificar a que producto le doy click
saber cual especificamente le esoy dando click
*/

// const viewDetailOfProduct = (productIndex) => {
//     let products = productsArray[productIndex]
//     let {name, description, imgUrl} = products
//         let showProduct = `
//         <div class="card">
//             <img src="${imgUrl}"
//                 class="card-img-top" alt="${name}">
//             <div class="card-body">
//                 <h5 class="card-title">${name}</h5>
//                 <p>${description}</p>
//             </div>
//         </div>
//         `
//         document.getElementById("description-products").innerHTML = showProduct
//     }

// //viewDetailOfProduct()

// const addDetailAProductButtonListener = () => {
//     {
//         var showDatilButtons = document.getElementsByClassName("btn-primary")
    
//         for (let i = 0; i < showDatilButtons.length; i++) {   
//             showDatilButtons[i].addEventListener("click", (event) => {
//                     let productIndex = event.target.dataset.productIndex
//                     viewDetailOfProduct(productIndex)
//                 })
//             }
//         }
// }

const showProductDetail = (event) => {
    let clickedProduct = event.target //elemento especifico al que se l da click
    let productIndex =  clickedProduct.dataset.productIndex
    let selectedProduct = productsArray[productIndex]
    let detailCard = document.getElementById("description-products")
    detailCard

}
var detailButtonsCollection = document.getElementsByClassName("show-product-detail")

