"use strict";

//? Запросіть у користувача число та виведіть усі дільники цього числа.

let res = 0;
let n = +prompt('Введіть чиcло і знайдемо усі дільники цього числа:');

document.body.innerHTML += (`<h1>Спільні дільники числа ${n} є числа:</h1>`);
for (let i = 1; i <= n; i++) {
    if ((n % i) == 0) {
        document.body.innerHTML += (`<h2><i>${i}</i></h2>`);
    }   
}
 