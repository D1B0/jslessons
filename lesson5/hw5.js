"use strict"
// шахматная доска
const chess = {
    arr: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    foo: true,
    chessItem: ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"],

    board() {

        let field = document.createElement('table');
        field.style.borderCollapse = "collapse"
        document.body.appendChild(field);
        let test = document.createElement('tr')
        let foo = true
        for (let row = 0; row < 8; row++) {
            let tr = document.createElement('tr');
            field.appendChild(tr);
            let rowText = document.createElement('td')
            rowText.style.cssText = "width: 50px ; height: 50px ; padding: 0; text-align:center"
            rowText.innerHTML = row + 1;
            tr.appendChild(rowText)

            for (let col = 0; col < 8; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
                td.style.cssText = "width: 50px; height: 50px; border: 1px solid black; padding: 0"
                if (col === 0)
                    this.foo = !this.foo;
                if (this.foo) {
                    td.style.background = 'black';
                } else {
                    td.style.background = 'white';
                } this.foo = !this.foo;
                if (row === 0 || row === 7) {
                    td.innerHTML = this.chessItem[col];
                    if (td.style.background === "white") {
                        td.style.cssText = 'background:white; color : black; text-align : center; font-size : 30px ;border: 1px solid black'
                    } else if (td.style.background === "black") {
                        td.style.cssText = 'background:black; color : white; text-align : center; font-size : 30px;border: 1px solid black'
                    }
                }
                if (row === 1 || row === 6) {
                    td.innerHTML = "&#9817;";
                    if (td.style.background === "white") {
                        td.style.cssText = 'background:white; color : black; text-align : center; font-size : 30px;border: 1px solid black'
                    } else if (td.style.background === "black") {
                        td.style.cssText = 'background:black; color : white; text-align : center; font-size : 30px;border: 1px solid black'
                    }
                }
            }
        }
        field.appendChild(test);
        for (let k = 0; k < 9; k++) {
            let colText = document.createElement('td');
            colText.style.cssText = "width: 50px ; height: 50px ; background: white ; text-align: center ";
            colText.innerHTML = this.arr[k];
            test.appendChild(colText);
        }
    }
}
chess.board();


//корзина и каталог
const product = {
    goods: [
        {
            id_product: 123,
            img: "cartitem1.png",
            product_name: "Ноутбук",
            price: 45600,
            quantity: 1
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Мышка",
            price: 1000,
            quantity: 3
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Пончик",
            price: 15,
            quantity: 3
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Заглушка",
            price: 100,
            quantity: 3
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Мышка",
            price: 1000,
            quantity: 3
        }, ,
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Мышка",
            price: 1000,
            quantity: 3
        }, ,
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Мышка",
            price: 1000,
            quantity: 3
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Мышка",
            price: 1000,
            quantity: 3
        },
        {
            id_product: 456,
            img: "cartitem1.png",
            product_name: "Заглушка",
            price: 100,
            quantity: 3
        }

    ],

    countBasketPrice() {
        total = this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
        let cartBlock = document.querySelector(".cart")
        let quantityItems = 0
        quantityItems += this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity, 0)
        if (this.goods.length === 0 || quantityItems === 0) {
            let cartInfo = document.createElement("p")
            cartInfo.innerHTML = "Ваша корзина пуста"
            cartBlock.appendChild(cartInfo)
        } else if (this.goods.length > 0) {
            let cartInfo = document.createElement("p")
            cartInfo.insertAdjacentHTML("beforeend", "В корзине " + quantityItems + " товаров на сумму " + total)
            cartBlock.appendChild(cartInfo)
        }
        cartBlock.style.cssText = " display:flex; justify-content:center"



    },
    addToCatalog() {
        let block = document.getElementById("catalog");
        block.style.cssText = "display: flex; justify-content: space-between; flex-wrap : wrap"
        for (let key in this.goods) {

            let productItem = document.querySelector('catalog');
            productItem.insertAdjacentHTML('beforeend', `<div class="product__item">
            <img class="product__img" src=${this.goods[key].img}
            <h3 class="product__name">${this.goods[key].product_name}</h3>
            <p class="product__price">${this.goods[key].price} рублей</p>
            </div>`)

            let productImg = document.createElement('div')
            productImg.insertAdjacentHTML("beforeend", '<img src=' + this.goods[key].img + '  width="180" height="200">')
            productImg.style.cssText = "width: 180px; height: 200px;"
            let productName = document.createElement("h3")
            productName.insertAdjacentHTML("beforeend",)
            productName.style.cssText = 'margin:0'
            let productPrice = document.createElement("p")
            productPrice.insertAdjacentHTML("beforeend", + "  рублей")

            productPrice.style.cssText = 'margin:0'

        }
    }

}
product.addToCatalog();
product.countBasketPrice();