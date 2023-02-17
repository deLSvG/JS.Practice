"use strict";

//? Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.

// Алгоритм Евкліда 

let m = +prompt('Введіть перше число');
let resOfM = Math.max(m);
let n = +prompt('Введіть друге число');
let resOfN = Math.min(n);

while (n != 0) {
    let val = n;
    n = m % n;
    m = val;
}
console.log(m);

document.body.innerHTML += (`<h2>Найбільший спільний дільник ${m}</h2>`);


