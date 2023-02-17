//? Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге; 0 - якщо числа рівні.

'use strict';

function comparison (n1, n2) {
    if (n1 < n2) {
        return -1;
    } else if (n1 > n2) {
        return 1;
    } else if (n1 === n2) {
        return 0;
    }
}
alert(comparison(1, 2));