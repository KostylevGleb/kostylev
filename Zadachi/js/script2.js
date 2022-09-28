"use strict";
//1:Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  alert(sumTo(4));