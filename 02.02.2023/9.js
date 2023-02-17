/* Запросіть у користувача тризначне число і виведіть його (число-перевертень). Для вирішення завдання
вам знадобиться оператор % (залишок від ділення). */
"using strict"
// const colors = require('colors'); // не робе

let n = +prompt('Бажаєте відзеркалити будь яке ваше число\nТо Введіть число:');
//! first solution

const reverse = (n) => n.toString().split('').reverse().join('');
alert(`Ось так виглядає ваше число у дзеркальному вигляді: ${reverse(n)}`);

//! second solution
n = +prompt('Бажаєте відзеркалити тільки трьохзначне ваше число\nТо Введіть тільки трьохзначне число:');
console.log('n: ', n);

let c1 = n / 10;
console.log('c1: ', c1);
c1 = n % 10;
console.log('c1: ', c1);
n = Math.floor(n / 10);
console.log('n: ', n);

let c2 = n / 10;
console.log('c2: ', c2);
c2 = n % 10;
console.log('c2: ', c2); 

n = Math.floor(n / 10);
console.log('n: ', n);

c1 *= 100;
console.log('n: ', n);
c2 *= 10;
console.log('c2: ', c2);

let rr = c1 + c2 + n;
alert(`Ось так виглядає ваше число у дзеркальному вигляді: ${rr}`);

//! third solution in process...
n = +prompt('Бажаєте відзеркалити тільки трьохзначне ваше число\nТо Введіть тільки трьохзначне число:');
console.log('n: ', n);

// let m = (n % 10) * 100;
let m = n % 10;            
console.log('m: ', m);
m = m * 100; 
console.log('m: ', m);

n = Math.floor(n / 10); // округлює до цілого, ділить націло
console.log('n: ', n);

let r = m + n;
console.log('r: ', r); // тут останнє число вже на 1 місці

m = 0;

m = n % 10;
console.log('m: ', m);
m = n * 10;
console.log('m: ', m);

r = Math.floor(r / 10); //? тут (31) зробити щоб нуль був по центру 
console.log('r: ', r);

// n = Math.floor(n / 10); // округлює до цілого, ділить націло








