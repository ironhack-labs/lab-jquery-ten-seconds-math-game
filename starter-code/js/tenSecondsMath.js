// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(numberLimit, operatorsArray) {
  this.numberLimit = numberLimit;
  this.numberOne = 0;
  this.numberTwo = 0;
  this.operators = operatorsArray;
  this.result = 0;
  this.currentOperator = 0;
};
TenSecondsMathGame.prototype.setNumbers = function () {
  this.numberOne = Math.floor(Math.random() * this.numberLimit);
  this.numberTwo = Math.floor(Math.random() * this.numberLimit);
};
TenSecondsMathGame.prototype.setCurrentOperator = function (){
  var random = Math.floor(Math.random() * this.operators.length);
  this.currentOperator = this.operators[random];

};

TenSecondsMathGame.prototype.setResult = function (){
  this.operation = this.numberOne + this.currentOperator + this.numberTwo;
  switch (this.currentOperator) {
    case '+':
      this.result = this.numberOne + this.numberTwo;
      break;
    case '-':
      this.result = this.numberOne + this.numberTwo;
      break;
    case 'x':
      this.result = this.numberOne + this.numberTwo;
      break;
    case '/':
      this.result = this.numberOne + this.numberTwo;
      break;
    default:

  }
};

var Contador = function() {
  this.number = 10;
};

Contador.prototype.gameOver = function (){
  alert('GAME OVER');
};

Contador.prototype.addTen = function () {
  this.number += 10;
};

Contador.prototype.play = function() {
  var that = this;
  var hola = setInterval (function (){
    if (that.number > 0 ){
      that.number -=1;
      document.getElementById('seconds').innerHTML = that.number;
    } else {
      that.gameOver();
      clearInterval(hola);
    }
  }, 1000);};






// Returns a random integer between [1..numberLimit]

// Returns an object with {question, answer}


// Checks a user answer
