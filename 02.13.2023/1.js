"use strict";

//? 1. Створіть функцію, яка повертає випадкове число

console.log('Ola');

function randN (max) {
    return Math.round(Math.random() * max);
}
document.body.innerHTML += (`<h2>Випадкове число:<br>${randN(7)}</h2>`);
document.body.innerHTML += (`<h2>press f5 to get new number</h2>`);
