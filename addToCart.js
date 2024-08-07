import { GetCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
GetCartProductFromLS()
export const addToCart = (e, id, stock) => {
  let arrLocalStorageProduct = GetCartProductFromLS();
  const CurrentProdElem = document.querySelector(`#card${id}`);
  let quantity = CurrentProdElem.querySelector(".productQuantity").innerText;
  let price = CurrentProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);
  price = price.replace("₹", "");
 ;

  let existingprod = arrLocalStorageProduct.find((currprod) => currprod.id === id);
  // console.log(existingprod);

  if (existingprod && quantity > 1) {
    quantity = Number(existingprod.quantity) + Number(quantity)
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price }
    updatedCart = arrLocalStorageProduct.map((crr) => {
      return crr.id === id ? updatedCart : crr

    })
    localStorage.setItem("cartProductLs", JSON.stringify(updatedCart));
    showToast("add",id)
  }
  if (existingprod) {
    // alert("bhai duplicate hai")
    return false;
  }
  quantity = Number(quantity)
  price = Number(price * quantity);


  // console.log(price);
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct));
  // console.log(arrLocalStorageProduct);
  updateCartValue(arrLocalStorageProduct);
  showToast("add",id);
};


