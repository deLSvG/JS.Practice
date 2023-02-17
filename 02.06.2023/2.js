/*? Запросіть у користувача число від 0 до 9 і виведіть йому
спеціальний символ, який розташований на цій клавіші
(1–!, 2–@, 3–# тощо). */
"use strict"

let n = +prompt('Не працює Shift? Давайте допоможу.\nВведіть, число за яким виведеться відповідний символ від 0-9');

switch (n) {
    case 0:
        alert(')');
    break;
    case 1:
        alert('!');
    break;
    case 2:
        alert('@');
    break;
    case 3:
        alert('#');
    break;
    case 4:
        alert('$');
    break;
    case 5:
        alert('%');
    break;
    case 6:
        alert('^');
    break;
    case 7:
        alert('&');
    break;
    case 8:
        alert('*');
    break;
    case 9:
        alert('(');
    break;
    default:
        alert('Перепрошую, я взмозі вивести символи, які розташовані тільки в заданому діапазоні, введіть правильні значення');
}