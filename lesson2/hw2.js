"use strict";
//свитч и числа
let a = 5
switch (a) {
    case 0:
        console.log(a++)
    case 1:
        console.log(a++)
    case 2:
        console.log(a++)
    case 3:
        console.log(a++)
    case 4:
        console.log(a++)
    case 5:
        console.log(a++)
    case 6:
        console.log(a++)
    case 7:
        console.log(a++)
    case 8:
        console.log(a++)
    case 9:
        console.log(a++)
    case 10:
        console.log(a++)
    case 11:
        console.log(a++)
    case 12:
        console.log(a++)
    case 13:
        console.log(a++)
    case 14:
        console.log(a++)
    case 15:
        console.log(a++)
        break;
    default:
        console.log("число не от 0 до 15, или это не число вовсе");
        break;
}

//условия и числа
let a = 5
let b = 3
let c = 0
if (a >= 0 && b >= 0) {
    c = a - b;
} else if (a < 0 && b < 0) {
    c = a * b;
} else
    c = a + b;
console.log(c);

//Арифметические функции
function summary(a, b) {
    return a + b
}
summary(4, 6)
function substraction(a, b) {
    return a - b
}
substraction(4, 6)
function multiply(a, b) {
    return a * b
}
multiply(4, 6)
function divide(a, b) {
    return a / b
}
divide(6, 3)

//Функция с арифметикой и switch
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "summary":
            return summary(arg1, arg2);
        case "substraction":
            return substraction(arg1, arg2);
        case "multiply":
            return multiply(arg1, arg2);
        case "divide":
            return divide(arg1, arg2);
        default:
            console.log("это не арифметическая функция")
            break;

    }
}
mathOperation(4, 7, "summary");
mathOperation(4, 7, "substraction");
mathOperation(4, 7, "multiply");
mathOperation(4, 7, "divide");

//рекурсивная функция возведения в степень

function power(val, pow) {
    if (pow === 1) {
        return val;
    } else {

        return val * power(val, pow - 1);

    }
}
power(2, 3); 