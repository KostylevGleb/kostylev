"use strict";

//3:Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a,b) {
    if(a < b) {
        return a;
    }else {
        return b;
    }
  }
  alert(min(2, 5));
  alert(min(3, -1));
  alert(min(1, 1));