import { IncreamentDecreament } from "./IncreamentDecreament";
import products from "./api/produts.json";
import { fetchQuantityFromCartLs } from "./fetchQuantityFromCartLs";
import { GetCartProductFromLS } from "./getCartProducts";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCarProductTotal } from "./updateCarProductTotal";
let cartproducts = GetCartProductFromLS();// isme localstorage ke items hai
// console.log(cartproducts);
const filterProducts = products.filter((curProd)=>{
  console.log(curProd.id);
  return cartproducts.some((curElem)=> curElem.id === curProd.id )
})
// console.log(filterProducts);
 
const carElement = document.querySelector("#productCartContainer");
const templateContainer  = document.querySelector("#productCartTemplate");

const showCartProduct =()=>{
    filterProducts.forEach((curProd)=>{
        const {category, id, image , name, stock , price } = curProd;
       
        let productClone = document.importNode(templateContainer.content,true);

        const lsActualdata = fetchQuantityFromCartLs(id,price);

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image
        productClone.querySelector(".productName").textContent = name
        productClone.querySelector(".productQuantity").textContent = lsActualdata.quantity
        productClone.querySelector(".productPrice").textContent = `₹ ${lsActualdata.price}`;
        productClone.querySelector(".stockElement").addEventListener('click', (e) => {
          IncreamentDecreament(e, id, stock,price)
      })
        
        productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>removeProdFromCart(id))
        
        
        carElement.append(productClone)
    })
    
}

showCartProduct()

updateCarProductTotal();