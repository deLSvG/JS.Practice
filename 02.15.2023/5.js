'use strict';

//? Напишіть функцію, яка перевіряє, чи є передане їй число досконалим. Досконале число – це число, що дорівнює сумі всіх своїх власних дільників.

//не чиста функція?

function perfect ( num ) {
    if ( num > 0 ) {
        let sum = 0;

        for ( let i = 1; i < num; i++ ) {
            if ( num % i == 0 ) {
                sum += i;
            }
        }

        let res = sum == num ? console.log(`${num} is a Perfect Number`) : console.log(`${num} is NOT a Perfect Number`);
    } else {
        console.log('This your number can not be a Perfect');
    }
}
//* perfect numbers are 6, 28, 496, 8.128
//* number '0' is not a Perfect Number first of all because it`s not positive number
perfect( 6 );