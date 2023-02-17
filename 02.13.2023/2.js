//? 2. Створіть функцію, яка приймає дві змінні та міняє їх значення місцями

"use strict";

// function revolution (n1, n2) {
    // Can't imagine another way
// }

function revolution (n1, n2) {
    console.log("Змінні:\n","n1:", n1,",", "n2:", n2);
    console.log("Міняємо їх значення місцями");
    return {
        n1: n2.toString(),
        n2: n1.toString(),

    }
}
console.log(revolution(2, 4));