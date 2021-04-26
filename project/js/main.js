const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise

let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(xhr.response)
                if (xhr.status !== 200) {
                    reject('Error');
                } else {
                    reject(xhr.responseText);
                }
            }
        };

        xhr.send();

    })
}

getRequest(`${API}/catalogData.json`)
    .then(response => console.log(response))
    .catch(error => console.log(error))

class ProductList {

    constructor(container = '.products__block') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];
        this._basketGoods = [];
        this._basketProduct = [];

        this._getProducts()
            .then((data) => {
                this._goods = data;
                this._render();

                document.getElementById("product__id")
                    .addEventListener('click', event => {
                        if (event.target.className === 'buy-btn') {
                            this.addToBasket()
                        }
                    })
            });


        this._getProductsBasket()
            .then((data) => {
                this._basketGoods = data.contents;

                this.renderBasketStart()
                this._renderAllQuantityAndPrice()
                document.getElementById("basket__id")
                    .addEventListener('click', event => {
                        if (event.target.className === 'del-btn') {
                            this.deleteItem()
                        }
                    })

                document.getElementById("delete__button")
                    .addEventListener('click', event => {
                        if (event.target.className === 'basket__button') {
                            this.deleteAllItems()
                        }
                    })
            });

    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            });
    }


    _render() {
        const block = document.querySelector(this.container);
        for (const good of this._goods) {
            const productObject = new ProductItem(good);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }

    _cartCost() {

        return this._basketProduct.reduce((totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity, 0)

    }
    _cartQuantity() {

        return this._basketProduct.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
    }


    _renderAllQuantityAndPrice() {
        const priceItemsAndQuantity = document.querySelector(".basket__info")
        priceItemsAndQuantity.innerHTML = ""
        priceItemsAndQuantity.insertAdjacentHTML("beforeend",
            `<div>
            <h4 class="desc__head">Total Price = ${this._cartCost()}</h4>
            <p class="desc__price">Total Quantity = ${this._cartQuantity()}</p>
        </div>`)
    }

    _getProductsBasket() {
        return fetch(`${API}/getBasket.json`)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            });

    }
    renderBasketStart() {
        this._renderAllQuantityAndPrice()
        const block = document.querySelector(".basket__items");
        for (const basket of this._basketGoods) {
            const productObject = new BasketItem(basket);
            this._basketProduct.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }

    }
    basketBox() {
        this._renderAllQuantityAndPrice()
        const block = document.querySelector(".basket__items");
        block.innerHTML = ""
        for (let basket of this._basketProduct) {
            let basketToken = new BasketItem(basket)
            block.insertAdjacentHTML('afterbegin', basketToken.render());
        }




    }
    addToBasket() {
        let basketToken = this._basketProduct.find(item => item.id_product === Number(event.target.id))
        let basketFoo = this._basketGoods.find(item => item.id_product === Number(event.target.id))
        if (basketToken === undefined) {
            this._basketProduct.push(Object.assign({}, basketFoo))
            this.basketBox()
        } else basketToken.quantity += 1
        this.basketBox()
        console.log(this._basketProduct);
    }
    deleteItem() {
        let basketToken = this._basketProduct.findIndex(item => item.id_product === Number(event.target.id))
        this._basketProduct.splice(basketToken, 1)
        this.basketBox()

    }
    deleteAllItems() {
        this._basketProduct = []
        this.basketBox()
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id_product = product.id_product
        this.product_name = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id_product}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3 class="desc__head">${this.product_name}</h3>
                          <p class="desc__price">${this.price} \u20bd</p>
                          <button id="${this.id_product}" class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}

class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id_product = product.id_product
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
        this.quantity = product.quantity
    }

    render() {
        return `<div class="product-item basket__desc" data-id="${this.id_product}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc ">
                          <h3 class="desc__head">${this.product_name}</h3>
                          <p class="desc__price">${this.price} \u20bd</p>
                          <p class="desc__price">${this.quantity}</p>
                          <button id="${this.id_product}" class="del-btn">Удалить</button>
                      </div>
                  </div>`;
    }
}

const pl = new ProductList();