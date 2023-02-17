'use strict';

//? Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 параметр, вона вираховує площу квадрата.

// short (a) - коротша, long (b) довша сторони прямокутника 
let s = 0;
function calcR (a, b) {
    document.body.innerHTML += '<h2>Знайти площу прямокутника або квадрата<br></h2>';
    if (a > 0 && b > 0) {
        s = a * b;
        return document.body.innerHTML += (`<h2>S = a · b = ${a} · ${b} = ${s}(м)<sup>2</sup></h2>`);
    } else if (a === 0 && b === 0) {
        return console.log("Such a rectangle does not exist! Enter values, a && b > 0");
    } else if (a > 0 && b === 0) {
        s = Math.pow(a, 2);
        return document.body.innerHTML += (`<h2>S = a<sup>2</sup> = ${a}<sup>2</sup> = ${s}(м)<sup>2</sup></h2>`);
    } else if (a === 0 && b > 0) {
        s = Math.pow(b, 2);
        return document.body.innerHTML += (`<h2>S = b<sup>2</sup> = ${b}<sup>2</sup> = ${s}(м)<sup>2</sup></h2>`);
    }
}
calcR(3, 0);
