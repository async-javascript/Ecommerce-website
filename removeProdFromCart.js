import { GetCartProductFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateCarProductTotal } from "./updateCarProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = GetCartProductFromLS();
    // console.log(cartProducts);
    cartProducts = cartProducts.filter((cuo) => cuo.id !== id);
    // console.log(newCartProd);

    localStorage.setItem("cartProductLs", JSON.stringify(cartProducts));

    let removediv = document.getElementById(`card${id}`);
    // console.log(removediv);
    if (removediv) {

        removediv.remove()
        showToast("delete",id)
    }
    updateCartValue(cartProducts)// it is update to navbar cart icon
    updateCarProductTotal();
    
}