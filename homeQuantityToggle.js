export const homeQuantityToggle = (e,id,stock)=>{
const currentCardElement = document.querySelector(`#card${id}`)
// console.log(currentCardElement);

const productQuantity = currentCardElement.querySelector('.productQuantity')
// console.log(productQuantity);
let qunatity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;
console.log(qunatity);

if (e.target.className === "cartIncrement") {
    if (qunatity<stock) {
        qunatity +=1;

    }else if(qunatity===stock){
        qunatity =stock
    }
}
if (e.target.className === "cartDecrement") {
    if (qunatity>1) {
        qunatity -=1;

    }else if(qunatity===stock){
        qunatity =stock
    }
}
productQuantity.innerText =qunatity;
// console.log(qunatity);
productQuantity.setAttribute("data-quantity", qunatity.toString())
return qunatity;
}

