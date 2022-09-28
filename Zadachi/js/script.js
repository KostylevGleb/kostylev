"use strict";
//Функции:
//1:Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
    if (age > 18) {
      return alert(true);
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }
  checkAge(18);
                    
  function checkAge1(age) {
    if (age > 18) {
        alert(true);
    }
    return confirm('Родители разрешили?');
  }
  checkAge1(19);
  //обе функции работают одинаково работают одинаково




