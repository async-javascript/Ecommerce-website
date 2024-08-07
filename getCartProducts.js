import { updateCartValue } from "./updateCartValue";

export const GetCartProductFromLS = () => {
    let cartProducts = localStorage.getItem('cartProductLs');
    // console.log(cartProducts);
    if (!cartProducts) {
        return[]
    }
    cartProducts = JSON.parse(cartProducts);
    updateCartValue(cartProducts);
    return cartProducts;
}