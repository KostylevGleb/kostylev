"use strict";

//2:Перепишите функцию, используя оператор '?' или '||'
function checkAge2(age) {
    (age > 18) ? alert(true) : confirm('Родители разрешили?');
  }
  checkAge2(19);
  function checkAge2(age) {
    (age > 18) || confirm('Родители разрешили?');
  }
  checkAge2(18);