//? 4. Створіть функцію, яка приймає два числа та повертає найбільший спільний дільник (НСД)

"use strict";

// The greatest common denominator
function gcd (m, n) {
    if (m > n) 
    {
        while (n != 0) {
            let value = n;
            n = m % n;
            m = value;
            return value;
        }
    } else {
        return alert("Перше число має бути більшим")
    }
}

let resM = gcd(+prompt('Введіть перше число'), +prompt('Введіть друге число'));

document.body.innerHTML += (`<h2>Найбільший спільний дільник<br>${resM}</h2>`);