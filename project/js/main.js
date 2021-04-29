class ProductList {
    #goods;
    #allProducts;
    #totalPrice;
    #totalQuantity;

    constructor(container = '.products__block') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        this._fetchGoods();
        this._render();
        this._cartCostAndQuantity();


    }

    _fetchGoods() {
        this.#goods = [
            { id: 1, title: 'Notebook', price: 20000, quantity: 1 },
            { id: 2, title: 'Mouse', price: 1500, quantity: 1 },
            { id: 3, title: 'Keyboard', price: 5000, quantity: 1 },
            { id: 4, title: 'Gamepad', price: 4500, quantity: 1 },
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (const good of this.#goods) {
            const productObject = new ProductItem(good);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }

    }
    _cartCostAndQuantity() {
        this.#totalPrice = 0
        this.#totalQuantity = 0
        this.#totalPrice += this.#allProducts.reduce((totalCost, cartItem) => totalCost + cartItem.price, 0)
        this.#totalQuantity += this.#allProducts.reduce((totalCost, cartItem) => totalCost + cartItem.quantity, 0)
        this._renderAllQuantityAndPrice();
    }

    _renderAllQuantityAndPrice() {

        const priceItemsAndQuantity = document.querySelector(".products")
        priceItemsAndQuantity.insertAdjacentHTML("beforeend",
            `<div>
            <h4 class="desc__head">Total Price = ${this.#totalPrice}</h4>
            <p class="desc__price">Total Quantity = ${this.#totalQuantity}</p>
        </div>`)
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.quantity = product.quantity
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3 class="desc__head">${this.title}</h3>
                          <p class="desc__price">${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}

const pl = new ProductList();