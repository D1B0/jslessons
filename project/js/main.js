'use strict';
const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
    { id: 5 }
];

const renderProduct = (title = "Йо, а где имя", price = "Цену уронили") => {
    return `<div class="product-item">
                <h3 class="product-item__head">${title}</h3>
                <p class="product-item__price">${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list) => {
    document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join('');
}

renderProducts(products);
