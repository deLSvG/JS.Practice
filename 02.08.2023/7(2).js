"use strict";

//? Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо число 123456 змістити на 2 цифри, то вийде 345612).

let bias = 2;
let n = 123456;
console.log('n: ', n);

// const array = (n) => n.toString().split('').reverse().join('');
const array = (n) => n.toString().split('');
console.log('array: ', array(n));

for (let i = 1; i <= bias; i++) {
    console.log(array.slice(2));
}