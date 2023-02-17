"use strict";

//? Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо число 123456 змістити на 2 цифри, то вийде 345612).

let n = 123456;
let res = n;
let bias = 2; // зміщення

// for (let i = 1; i <= 2; i++) {
//     console.log('i: ', i);
//     n = n * 10;
//     console.log('n: ', n);
// }

if ((bias % 2) == 0) { //! парне на сто, непарне на 10
    for (let i = 1; i <= bias; i++) {
        n /= 100;

        res *= 10;
    }
    console.log('n: ', Math.trunc(n));
    console.log('n: ', Math.trunc(res + n));
    console.log('res: ', res);
} else {
    for (let i = 1; i <= bias; i++) {
        n /= 10;
    }
    console.log('n: ', Math.trunc(res + n));
    // console.log('n: ', Math.trunc(n));
}
