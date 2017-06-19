// Use this file to write the logic of your game, the needed attrs and functions

function Calculator(limitNumber, operator) {
  this.limitNumber = limitNumber;
  this.numberOne = 0;
  this.numberTwo = 0;
  this.operator = operator;
}

Calculator.prototype.randomNumber = function() {
  return Math.floor(Math.random() * this.limitNumber + 1);
};

Calculator.prototype.checkAbsNumbers = function(){
  return Math.abs((this.numberOne - this.numberTwo) < 3);
};

Calculator.prototype.generateBothRandomNumber = function(){
  do {
  this.numberOne = this.randomNumber();
  this.numberTwo = this.randomNumber();
} while ( (this.numberOne === this.numberTwo) || this.checkAbsNumbers());
};

Calculator.prototype.chooseOperation = function() {
  switch (this.operator) {
    case "+":
    this.result = this.numberOne + this.numberTwo;
      break;
    case "-":
    if (this.numberOne >= this.numberTwo) {
    this.result = this.numberOne - this.numberTwo;
  } else {
    this.result = this.numberTwo - this.numberOne;
  }
      break;
    case "*":
    this.result = this.numberOne * this.numberTwo;
      break;
    case "/":
    this.result = his.numberOne / this.numberTwo;
      break;
  }
  return this.result;
};

//if (this.operator[i] > 1)
Calculator.prototype.randomOperation = function() {
    var randomOperator = Math.floor(Math.random() * this.operator.lenght);
    switch (randomOperator) {
      case randomOperator = 1:
    this.result = this.numberOne + this.numberTwo;
        break;
      case randomOperator = 2:
    this.result = this.numberOne - this.numberTwo;
        break;
      case randomOperator = 3:
    this.result = this.numberOne * this.numberTwo;
        break;
      case randomOperator = 4:
    this.result = his.numberOne / this.numberTwo;
        break;
  }
    return this.result;
};

var TenSecondsMathGame = function(limit, operator) {};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
