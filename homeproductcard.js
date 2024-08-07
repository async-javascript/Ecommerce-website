import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate")

export const showProductContainer = (product) => {
    if (!product) {
        return false;
    }
    product.forEach((curProd) => {
        const { id, category, description, brand, image, name, price, stock } = curProd;
        const productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`)
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = image;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productPrice').textContent = price;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${price * 4}`;

        productClone.querySelector(".stockElement").addEventListener('click', (e) => {
            homeQuantityToggle(e, id, stock)
        })
        productClone.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            addToCart(e, id, stock);
        })

        productContainer.append(productClone);
    });
}