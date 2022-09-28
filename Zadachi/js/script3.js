"use strict";

//2:Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n-1);
}
alert(factorial(5));