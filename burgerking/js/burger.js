"use strict"
class ProductList {
    constructor(container = '.products__block') {
        this.container = container;
        this.size = [];
        this.stuffing = [];
        this.topping = [];
        this.allProducts = [];



        this.fetchBurgerSize();
        this.fetchBurgerComponent();
        this.fetchBurgerTopping()
        this.render();
        this.renderBurgerProperty()
    }

    fetchBurgerSize() {
        this.size = [
            { id: 0, size: "Маленький", price: 50, calories: 20 },
            { id: 1, size: "Большой", price: 100, calories: 40 }
        ]
    }
    fetchBurgerComponent() {
        this.stuffing = [
            { id: 2, stuffing: "С сыром", price: 10, calories: 20 },
            { id: 3, stuffing: "С салатом", price: 20, calories: 5 },
            { id: 4, stuffing: "С картошкой", price: 15, calories: 10 }
        ]
    }
    fetchBurgerTopping() {
        this.topping = [
            { id: 5, topping: "Добавить приправы", price: 15, calories: 0 },
            { id: 6, topping: "Добавить майонеза", price: 20, calories: 5 }
        ]
    }
    render() {

        const block = document.querySelector(this.container);
        block.insertAdjacentHTML('beforeend', "<p>Выберете размер бургера(возможен только один выбор и выбор обязателен)</p>")
        for (const size of this.size) {
            const productObject = new BurgerSize(size);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.renderBurgerSize());
        }
        block.insertAdjacentHTML('beforeend', "<p>Выберете начинку бургера(возможен только один выбор и выбор обязателен)</p>")
        for (const stuffing of this.stuffing) {
            const productObject = new BurgerStuffing(stuffing);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.renderBurgerStuffing());
        }
        block.insertAdjacentHTML('beforeend', "<p>Добавьте топпинг(по желанию)</p>")
        for (const topping of this.topping) {
            const productObject = new BurgerTopping(topping);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.renderBurgerTopping());
        }

        document.getElementById("burgerform").addEventListener('click', event => {
            if (event.target.className === 'input-button') {
                this.renderBurgerProperty()
            }
        });
    }

    calculatedPrice() {
        let totalPrice = 0
        let checkedBoxes = document.querySelectorAll('input:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
            let stuffings = 0
            stuffings = checkedBoxes[i].id;
            totalPrice += this.allProducts.find(item => item.id === Number(stuffings)).price

        }

        return totalPrice;



    }
    calculateCalories() {
        let totalCalories = 0
        let checkedBoxes = document.querySelectorAll('input:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
            let stuffings = 0
            stuffings = checkedBoxes[i].id;
            totalCalories += this.allProducts[stuffings].calories;
        }
        return totalCalories;

    }
    renderBurgerProperty() {
        let fullPrice = 0
        let fullCalories = 0
        fullPrice = this.calculatedPrice()
        fullCalories = this.calculateCalories()
        let fullTotal = document.querySelector(".burger-property")
        fullTotal.innerHTML = ""
        fullTotal.insertAdjacentHTML("beforeend", `Стоимость бургера = ${fullPrice} Количество калорий = ${fullCalories}`)


    }
}
class BurgerSize {
    constructor(product) {
        this.size = product.size;
        this.id = product.id;
        this.price = product.price;
        this.calories = product.calories;
    }
    renderBurgerSize() {
        return `<p><input class="input-button" id="${this.id}" name="size" type="radio"">${this.size}</p>`
    }
}
class BurgerStuffing {
    constructor(product) {
        this.stuffing = product.stuffing;
        this.id = product.id;
        this.price = product.price;
        this.calories = product.calories;
    }
    renderBurgerStuffing() {
        return `<p><input class="input-button" id="${this.id}" name="stuff" type="radio">${this.stuffing}</p>`
    }
}

class BurgerTopping {
    constructor(product) {
        this.topping = product.topping;
        this.id = product.id;
        this.price = product.price;
        this.calories = product.calories;
    }
    renderBurgerTopping() {
        return `<p><input class="input-button" id="${this.id}" name="topping" type="checkbox">${this.topping}</p > `
    }
}

const pl = new ProductList();
