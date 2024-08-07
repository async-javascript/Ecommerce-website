import { GetCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLs = ( id,orice) =>{
let cartProducts = GetCartProductFromLS()

let existingProduct = cartProducts.find((cur)=> cur.id === id)
let quantity = 1
let price
if (existingProduct) {
    quantity =existingProduct.quantity
    price = existingProduct.price
}
return{quantity,price}
}