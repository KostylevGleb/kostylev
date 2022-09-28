"use strict";
/*3:Напишите код для суммирования всех зарплат 
и сохраните результат в переменной sum. Должно получиться 390.*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sum(obj) {
    let summ = 0;
    for (let key in obj) {
        summ = obj[key] + summ;
      }
      return summ;
}

alert(sum(salaries));