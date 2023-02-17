"use strict";

//* Підрахуйте суму всіх чисел у заданому користувачем діапазоні.

const blo = document.getElementsByClassName('blo');

let result = 0;
alert('Enter number`s range');
let n1 = +prompt('Enter First number of range');
let n2 = +prompt('Enter Second number of range');

for (n1; n1 <= n2; n1++) {
    result += n1;
}
document.body.innerHTML += `<h2>Sum of number's range:<br>${result}</h2>`;
