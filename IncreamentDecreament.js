import { GetCartProductFromLS } from "./getCartProducts";
import { updateCarProductTotal } from "./updateCarProductTotal";

export const IncreamentDecreament = (e, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector('.productQuantity')
    const productPrice = currentCardElement.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;
    let arrLocalStorageProduct = GetCartProductFromLS();
    let existingprod = arrLocalStorageProduct.find((ep) => ep.id === id);
    if(existingprod) {
      quantity = existingprod.quantity
      localStoragePrice = existingprod.price
    }else{
        localStoragePrice =price;
        quantity= quantity
    }
    if (e.target.className === "cartIncrement") {
        if (quantity<stock) {
            quantity +=1;
    
        }else if(quantity===stock){
            quantity =stock
            localStoragePrice = price*stock
        }
    }
    if (e.target.className === "cartDecrement") {
        if (quantity>1) {
            quantity -=1;
    
        }else if(quantity===stock){
            quantity =stock;
           
        }
    }
    localStoragePrice = quantity*price
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = { id, quantity, price : localStoragePrice }
    updatedCart = arrLocalStorageProduct.map((crr) => {
      return crr.id === id ? updatedCart : crr

    })
    localStorage.setItem("cartProductLs", JSON.stringify(updatedCart));
    productQuantity.innerText = quantity;
    productPrice.innerText = `₹ ${localStoragePrice}`
    updateCarProductTotal()
}