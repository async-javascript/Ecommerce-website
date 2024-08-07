import { GetCartProductFromLS } from "./getCartProducts";

export const updateCarProductTotal=()=>{
    let prodsubtotal = document.querySelector(".productSubTotal");
    let prodTotal = document.querySelector(".productFinalTotal");
    let initialValue = 0;
    let Localproducts = GetCartProductFromLS();
    let total = Localproducts.reduce((accum,e)=>{
        let productPrice = parseInt(e.price)||0;
        return accum + productPrice
    },initialValue);
    // console.log(total);
    prodsubtotal.textContent = `₹${total}`   
    prodTotal.textContent = `₹${total+50 }`

    if (total===0) {
        prodTotal.textContent =` `;
    }
}