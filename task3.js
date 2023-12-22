alert('Программа для вычисления значения функции y=f(x) при произвольных значениях x');
var a = 1.76, b = 2.34, x, y;
x = Number(prompt('Ввелите x', ''))
if (x >= 5) {
    y = b * (Math.sqrt((Math.abs(x)) ** 3));
} else if (x <= 2) {
    y = Math.E ** -x;
} else {
    y = a + 3 ** x;
}
alert(`Значения функции y=f(x) x = ${x} равно ${y}`)