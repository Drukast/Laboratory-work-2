alert('Программа для вычисления значения функции y=f(x) при произвольных значениях x');
var a = 1.76, b = 2.34, x, y;
x = Number(prompt('Ввелите x', ''))
switch (x) {
    case 5:
        y = b * (Math.sqrt((Math.abs(x)) ** 3));
        alert(`При x = ${x} функция y=f(x) равна ${y}`);
        break;
    case 3:
        y = a + 3 ** x;
        alert(`При x = ${x} функция y=f(x) равна ${y}`);
        break;
    case 2:
        y = Math.E ** -x;
        alert(`При x = ${x} функция y=f(x) равна ${y}`);
        break;
    default:
        alert(`При x = ${x} функция y=f(x) не существует`);
}