var op = ["+", "-", "*", "/"];
var TenSecondsMathGame = function(operationsArray, limit) {
  this.limit = limit;
  this.operationsArray = operationsArray;
  this.result = 0;
  this.actualTime = 30;
};

TenSecondsMathGame.prototype.newQuestion = function() {
  var operation;
  do {
    operation = this.generateOperation(this.operationsArray, this.limit);
    this.result = this.operate(operation);
  } while (this.result < 0 || (operation.number2 === 0 && operation.operator == "/" ));
  console.log("Escribe tu respuesta para " +
  operation.number1 + " " +
  this.operationsArray[operation.operator]  + " " +
    operation.number2);
    this.timer();
};

TenSecondsMathGame.prototype.isCorrectAnswer = function(answer) {
    if (answer === this.result) {
      this.actualTime += 10;
      console.log("You Win !!!");
    } else {
      console.log("Try Again!");
    }
};

TenSecondsMathGame.prototype.operate = function(operation) {
  var a = operation.number1;
  var b = operation.number2;
  var operator = this.operationsArray[operation.operator];

  switch (operator) {
    case "+":
      return a+b;
    case "-":
      return a-b;
    case "*":
      return a*b;
    case "/":
      return a/b;
  }
};

TenSecondsMathGame.prototype.generateOperation = function (array, lim) {
  var operation = {
    operator: this.randomNumber(array.length),
    number1: this.randomNumber(this.limit+1),
    number2: this.randomNumber(this.limit+1)
  };

  return operation;
};

TenSecondsMathGame.prototype.randomNumber =function (max) {
  return Math.floor(Math.random() * max);
};

TenSecondsMathGame.prototype.timer = function(){
  var that = this;

  var callbackFunction = function () {
    console.log(that.actualTime);
    timeoutId = setTimeout(callbackFunction, 1000);
    that.actualTime -= 1;

    if (that.actualTime <= 0) {
      clearTimeout(timeoutId);
      console.log("Time Out, Game Over!!");
    }
  };
  var timeoutId = setTimeout(callbackFunction, 1000);
};

var game = new TenSecondsMathGame(op, 10);
game.newQuestion();


// Checks a user answer
