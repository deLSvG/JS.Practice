/*? Напишіть конвертор валют. Користувач вводить кількість
USD, вибирає в яку валюту хоче перекласти: EUR, UAN
? або AZN, і отримує відповідну суму. */

"use strict";

const output = document.getElementById('output').innerHTML;

const euro = 0.92;
let eUR = 'EUR';
const cny = 6.73; // yuah
let cNY = 'CNY';
const mxn =  0.51; // mexican peso
let mXN = 'MXN';
let result = 0;
let whichOfCur;

let usd = +prompt(`Скільки ваших USD будемо конвертувати`);
let currency = prompt('У яку з валют бажаєте конвертувати? ( EUR , CNY , MXN )');

if (usd > 0) {
    if (currency === 'EUR') {
    result = usd * euro;
    whichOfCur = eUR;
    } else if (currency === 'CNY') {
        result = usd * cny;
        whichOfCur = cNY;
    } else if (currency === 'MXN') {
        result = usd * mxn;
        whichOfCur = mXN;
    } else {
        alert('Цікава валюта, але такого тут німа');
    }

    output.innerText = (`Ось прошу, ваші\n${result.toFixed(2)} ${whichOfCur},\nГарного дня.`);
} else {
    alert('Введи скільки у тебе money, а не це');
}

// .toFixed(2) - залишає 2 цифри після крапки
