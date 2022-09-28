"use strict";

//4:Напишите функцию pow(x,n), которая возвращает x в степени n.
function pow(x,n) {
    for(let i = 1; i < n; i++){
        x = x * x;
    }
    return x;
  }
  let x = prompt("Введите x:", '');
  let n = prompt("Введите n:", '');
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert(pow(x,n));
  }