"use strict";
let numberSort = (a) => {
    if (a > 999 || a < 0) {
        console.log('это число не входит в диапазон 0-999');
        return {};
    } else {
        let number = a.toString().padStart(3, 0).split('').map(i => parseInt(i));
        return { единицы: number[2], десятки: number[1], сотни: number[0] };
    }
}
console.log(numberSort(12));

const productCart = [
    {
        name: 'item43',
        cost: 390,
        quantity: 4
    },
    {
        name: 'item38',
        cost: 140,
        quantity: 2
    },
    {
        name: 'item51',
        cost: 259,
        quantity: 1
    },
    {
        name: 'item67',
        cost: 360,
        quantity: 5
    }
]
let countBasketPrice = (arr) => {
    return arr.reduce((start, price) => start + price.cost * price.quantity, 0);
}

console.log("Стоимость вашей корзины = " + countBasketPrice(productCart));
