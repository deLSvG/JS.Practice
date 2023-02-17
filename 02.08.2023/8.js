"use strict";

//? Зацикліть виведення днів тижня таким чином: «День тижня. Бажаєте побачити назву наступного дня тижня?”, і так доти, доки користувач натискатиме OK.

// Tuesday Wensday Thursday Friday Suterday Sunday

console.log('Today is Monday');
let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let yes = true;
let i = 0;

do {
    if (i >= 7) { i -= 7; }
    alert(day[0 + i]);
    i++;
    yes = confirm('Бажаєте побачити назву наступного дня тижня?');
} while (yes == true)


