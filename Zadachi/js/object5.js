"use strict";
//5:Создайте объект calculator (калькулятор) с тремя методами:

let calculator = {
    read() {
        this.x = +prompt("Введите x",0);
        this.y = +prompt("Введите y",0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());