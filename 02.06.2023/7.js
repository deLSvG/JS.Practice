//? Запросіть у користувача суму покупки та виведіть суму до сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до 500 – 5%, від 500 і вище – 7%. */
"using strict";

const output = document.getElementById('output');

let sum = +prompt('Введіть суму вашої покупки у гривнях');
console.log('sum: ', sum);

// (3"%" / 100"%") * sum(201) = 6(math.round)
// sum(201) - 6 = 195 

if (sum >= 200 && sum <= 300) { 
    let p1 = sum - ((3 / 100) * sum);
    output.innerText = (`Ви отримуєте 3% знижки від вашої покупки,\nВаша сума до сплати: ${Math.round(p1).toFixed(2)} гривень`);
} else if (sum >= 300 && sum <= 500) { 
    let p1 = sum - ((5 / 100) * sum);
    output.innerText = (`Ви отримуєте 5% знижки від вашої покупки,\nВаша сума до сплати: ${Math.round(p1).toFixed(2)} гривень`);
} else if (sum > 500) { 
    let p1 = sum - ((7 / 100) * sum);
    output.innerText = (`Ви отримуєте 7% знижки від вашої покупки,\nВаша сума до сплати: ${Math.round(p1).toFixed(2)} гривень`);
} else { 
    // console.log('Сьогодні ви залишаєтесь без знижки');
    output.innerText = ('Сьогодні ви залишаєтесь без знижки');
}


