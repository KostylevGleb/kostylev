"use strict";

//4:
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  //циклы
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
  printList(list);
  //рекурсия
  function printList(list) {

    alert(list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }
  
  printList(list);

  //в обратном порядке
  function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  printReverseList(list);