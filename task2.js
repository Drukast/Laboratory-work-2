alert('Программа для нахождения произведения 2 наименьших чисел из 3 введённых чисел');
var F_number, S_number, T_number, product;
F_number = Number(prompt('Введите 1 число', ''));
S_number = Number(prompt('Введите 2 число', ''));
T_number = Number(prompt('Введите 3 число', ''));
if ((F_number < S_number) || (F_number < T_number)) {
    if (S_number < T_number) {
        product = F_number * S_number;
        alert(`Наименьшими числами являются ${F_number} и ${S_number}. Результат их произведения равен ${product}`);
    } else {
        product = F_number * T_number;
        alert(`Наименьшими числами являются ${F_number} и ${T_number}. Результат их произведения равен ${product}`);
    }
} else {
    product = S_number * T_number;
    alert(`Наименьшими числами являются ${S_number} и ${T_number}. Результат их произведения равен ${product}`);
}