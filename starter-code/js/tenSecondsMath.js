// Use this file to write the logic of your game, the needed attrs and functions
var counter = 10;
var TenSecondsMathGame = function(operation, limit) {
  this.numberLimit = limit;
  this.operationArr = operation;
  this.operation = "";
  this.numberOne = 0;
  this.numberTwo = 0;
  this.result = 0;
  this.generateQuestion();
};

TenSecondsMathGame.prototype.numberAleatory = function() {
  return Math.floor(Math.random()*this.numberLimit);
};

TenSecondsMathGame.prototype.chooseOperator = function() {
  this.operation = this.operationArr[Math.floor(Math.random()*this.operationArr.length)];
};

TenSecondsMathGame.prototype.chooseOperation = function () {
  switch (this.operation) {
    case "sum":
      this.result = this.numberOne + this.numberTwo;
      break;
    case "sub":
      this.result = this.numberOne - this.numberTwo;
      break;
    case "mult":
      this.result = this.numberOne * this.numberTwo;
      break;
    case "div":
      this.result = this.numberOne / this.numberTwo;
      break;
  }
};

TenSecondsMathGame.prototype.generateQuestion = function () {
  this.numberOne =this.numberAleatory();
  this.numberTwo =this.numberAleatory();
  this.chooseOperator();
  this.chooseOperation();
  console.log(this.numberOne, this.operation, this.numberTwo);
};

TenSecondsMathGame.prototype.checkResult = function(userResult) {
  if (userResult === this.result) {
    counter +=10;
    this.generateQuestion();
  }
};





// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
