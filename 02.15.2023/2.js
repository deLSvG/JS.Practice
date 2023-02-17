//? Напишіть функцію, яка вираховує факторіал переданого їй числа.

"use strict";

const output = document.querySelector('#div');

function factorial (n) {
    let N = 1;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            N = N * i;
        }
        // return N;
        return output.innerHTML = `<h2>Факторіал<br> з числа <i>${n}</i> (!${n})<br>=<br>${N}`;
    } else if (n === 0) {
        return 1;
    } else if (n < 0) {
        return alert('Факторіал з від`ємного числа не можна знайти. Введіть додатне число!');
    }
}
factorial(5);

