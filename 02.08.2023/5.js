'using strict';

//? Запросіть у користувача 10 чисел і підрахуйте, скільки він ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть статистику на екран. Враховуйте те, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let number = 0;
let cPositive = 0; // 20
let cNegative = 0; // -20
let cZero = 0;
let cOdd = 0; // ne parne
let cEven = 0;

for (let i = 1; i <= 10; i++) {
    number = +prompt('Enter numbers');
    console.log('number: ', number);

    if (number > 0) {
        // console.log('Positive number');
        cPositive += 1;
    } else if (number < 0) {
        // console.log('Negative number');
        cNegative += 1;
    } else {
        cZero += 1;
    }

    let oddOrEven = ((number % 2) == 0) ? cEven += 1 : cOdd += 1;
}
console.log('----------------');
document.body.innerHTML += (`<h2>Count of Positive numbers: ${cPositive}</h2><br>`);
document.body.innerHTML += (`<h2>Count of Negative numbers: ${cNegative}</h2><br>`);
document.body.innerHTML += (`<h2>Count of Zeros (0) numbers: ${cZero}</h2><br>`);
document.body.innerHTML += (`<h2>Count of Even numbers (Zero is Even number too): ${cEven}</h2><br>`);
document.body.innerHTML += (`<h2>Count of Odd numbers: ${cOdd}</h2><br>`);

// else if (number == 0) {
//         console.log('it`s zero');
//         cZero = number.toString();
//         cZero = cZero + 1;
//     }
// console.log('Count of Zeroes: ', cZero);