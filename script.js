"use strict";

function squareRoots(a, b, c) {
  if (a == 0) {
    return [-c / b]; // Уравнение - линейное. Проверка делается до расчета дискриминанта, чтобы быстрее вернуть результат
  }
  var d = b * b - 4 * a * c;
  if (d < 0)
    return [];

  if (d == 0)
    return [-b / (2 * a)];

  var x1 = (-b + Math.sqrt(d)) / (2 * a); // При a=0 дискриминант будет равен квадрату b => x1 будет равен 0/0 = NaN
  var x2 = (-b - Math.sqrt(d)) / (2 * a); // При a=0 дискриминант будет равен квадрату b => x2 будет равен -2b/0 = -Infinity
  return [x1, x2];
}

function ttt() {
  var a = Number(prompt('Введите a'));
  var b = Number(prompt('Введите b'));
  var c = Number(prompt('Введите c'));
  var roots = squareRoots(a, b, c);

  if (!roots.length)
    alert('корней нет!');
  else if (roots.length == 1)
    alert('один корень: ' + roots[0]);
  else
    alert('два корня: ' + roots[0] + ' и ' + roots[1]);
}






