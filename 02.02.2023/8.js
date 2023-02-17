/* Користувач вводить суму грошей у гаманці та вартість однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі в нього залишиться. */
"using strict"

let balance = +prompt(`Бажаєте солодкого\nВведіть який ваш поточний баланс у гривнях?`);
const costOfOne = +prompt(`А яка вартість однієї шоколадки у гривнях?`);

if (balance > costOfOne) {
    let howMuchChocks = Math.floor(balance / costOfOne);
    alert(`Ви взмозі придбати ${howMuchChocks} шоколадок, будете брати?`);

    let remainder = ((howMuchChocks * costOfOne) % balance);
    if (remainder > balance) {
        alert(`Ось тримайте, Ваша решта: ${remainder} гривень\nСмачного!`);
    } else {
        remainder = (balance - (howMuchChocks * costOfOne));
        alert(`Ось тримайте, Ваша решта: ${remainder} гривень \nСмачного!`);
    }
} else {
    alert('У вас не достатньо коштів для здійснення купівлі');
}
