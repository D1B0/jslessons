"use strict";
// Вывод простых чисел
let i = 1;
simpleNumbers:
while (i < 100) {
    i++
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            continue simpleNumbers;
        }
        j++;
    } console.log(i);
}
// Массив и сумма товаров
const productCart = [
    ['item43', 390, 4],
    ['item38', 140, 2],
    ['item51', 259, 1],
    ['item67', 360, 5]
]
function countBasketPrice(productCart) {
    let c = 0;
    for (let i = 0; i < productCart.length; i++) {

        c = c + productCart[i][1] * productCart[i][2];
    }
    return c;
}
console.log(countBasketPrice(productCart));
//Цикл for с пустым телом
for (let i = 0; i <= 9; console.log(i++)) { }
//Пирамидка
let p = "";
for (let i = 0; i <= 20; i++) {
    p += "x"
    console.log(p)
}
