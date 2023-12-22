alert('Программа для проверки истинности высказывания:"В четырехзначном числе 2 и 3 цифры одинаковы"');
var number, second, third;
number = Number(prompt('Введите четырехзначное число', ''));
second = (Math.floor(number / 100) % 10);
third = (Math.floor(number / 10) % 10);
if (second == third) {
    alert(`В числе ${number} вторая и третья цифры одинаковы!`);
} else {
    alert(`В числе ${number} вторая и третья цифры разные!`);
}