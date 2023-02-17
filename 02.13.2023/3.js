//? 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне

"use strict";

function even (n) {
    // if ((n % 2) == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    //* another way
    return ((n % 2) == 0) ? true : false;
}
console.log(even(113));