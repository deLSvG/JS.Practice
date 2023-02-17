/* Запросіть дату (день, місяць, рік) і виведіть наступну дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік. */
"use strict";

const output = document.getElementById('output');

let day = +prompt('Enter day') + 1;

let month = prompt('Enter month');
console.log('month: ', month);
let year = +prompt('Enter year');
console.log('year: ', year);

if (year > 0) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log('Цей рік, Високосний');
    } else {
        console.log('Цей рік, Не високосний');
    }
} else {
    console.log('Ви що з майбутнього? Наразі вводять рік цифрою');
}


output.innerText = (`Ola`);