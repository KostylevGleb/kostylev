"use strict";

//3:Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

alert(fib(3));
alert(fib(7));
alert(fib(77));