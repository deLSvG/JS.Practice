"use strict";

//? Визначте кількість цифр у введеному числі.

let l = 0;
let c = 0;

let n = +prompt('Введіть чиcло, визначимо кількість цифр у цьому числі:');
let N = n; // for output

for (let i = 0; i <= n; n--) {
    l = n % 10; // last number
    c += 1; // count
    n = n / 10;
}
document.body.innerHTML += (`<h2>Кількість цифр <br> у числі <i>${N}</i><br>=<br>${c}</h2>`);



// document.body.innerHTML += (`<h1>Кількість цифр у числі <i>${n}</i> = </h1>`);