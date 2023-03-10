"use strict";

//? Зацикліть калькулятор. Запросіть у користувача 2 числа і знак, розв’яжіть приклад, виведіть результат і запитайте, чи хоче він розв’язати ще один приклад. І так триватиме доти, доки користувач не відмовиться.

let btn = confirm('Хочете скористатися калькулятором та розв`язати приклад?');

do {
    let n1 = +prompt('Введіть перше число');
    let symbol = prompt('Вкажіть дію (+), (-), (*), (/)');
    let n2 = +prompt('Введіть друге число'); 

    switch(symbol) {
        case '+':
            alert(`${n1} + ${n2} = ${n1 + n2}`);
            n1 = n2 = 0;
            // symbol = false;
        break;
        case '-':
            alert(`${n1} - ${n2} = ${n1 - n2}`);
            n1 = n2 = 0;
        break;
        case '*':
            alert(`${n1} * ${n2} = ${n1 * n2}`);
            n1 = n2 = 0;
        break;
        case '/':
            alert(`${n1} / ${n2} = ${n1 / n2}`);
            n1 = n2 = 0;
        break;
        default:
            alert('Вкажіть дію (+), (-), (*), (/)');
    
    }
    btn = confirm('Чи хочете ви розв’язати ще один приклад?');
} while (btn == true)

