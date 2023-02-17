/*? Запросіть у користувача тризначне число та перевірте чи є в ньому однакові цифри. */
'using strict';

const output = document.getElementById('output');

let n = +prompt('Введіть трьохзначне число, перевіримо чи там є однакові числа');
console.log('ur n: ', n);
let urn = n; // щоб гарно вивести на екран

c1 = ~~(n / 100); 
console.log('c1: ', c1);
c3 = n % 10;
console.log('c3: ', c3);
n = ~~(n / 10);
console.log('n: ', n);
c2 = n % 10;
console.log('c2: ', c2);

let same = c1 === c2 || c2 === c3 || c1 === c3 
? output.innerText = (`У вашому числі (${urn})\nЄ однакові числа`)
: output.innerText = (`У вашому числі (${urn})\nНемає однакових чисел`) 
   

