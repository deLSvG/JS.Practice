"use strict";

//? Виведіть таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

const mRes = document.getElementById('mult');

let c = 0;
let res = 0;

document.body.innerHTML += ('<h1>Multiplication Table</h1>');
for (let i = 2; i <= 9; i++) {
    document.body.innerHTML += (`Number: ${i}<br>`);

    for (let j = 1; j <= 10; j++){
        document.body.innerHTML += (`${i} * ${j} = ${i * j} <br>`);
    }
    document.body.innerHTML += (`<br>`);
}

