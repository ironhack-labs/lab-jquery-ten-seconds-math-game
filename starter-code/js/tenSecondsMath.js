// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(limit, operation) {
  this.operation = operation;
  this.limit = limit;
  this.firstNumber = 0;
  this.secondNumber = 0;
  this.result = 0;
};

TenSecondsMathGame.prototype.randomNumber = function(limit) {
  var random = Math.floor((Math.random() * limit) + 1);
  return random;
};


TenSecondsMathGame.prototype.isCorrectAnswer = function(answer) {
  if (this.result === answer) {
    console.log("Great");
    this.generateQuestion();

    this._checkTimer();
  } else {
    console.log("Wroooong!!!");
  }
};

TenSecondsMathGame.prototype._checkTimer = function() {
  var i = 10;
  var intervalId = setInterval(function() {
    console.log(i);
    i--;
    if (i < 0) {
      clearInterval(intervalId);
      // "Time is over" is printed out 1seg after in the console
      setTimeout(function() { console.log('Time is over'); }, 1000);
    }
  }, 1000);

  return intervalId;
};
// console.log(game.__proto__.randomNumber(10));

TenSecondsMathGame.prototype.generateQuestion = function() {

  this.firstNumber = this.randomNumber(this.limit);
  this.secondNumber = this.randomNumber(this.limit);

  switch (this.operation) {
    case "sum":
      if (this.firstNumber === this.secondNumber) {
        this.firstNumber += 1;
      }
      console.log(this.firstNumber + " + " + this.secondNumber);
      this.result = this.firstNumber + this.secondNumber;
      break;

    case "sub":
      if (this.firstNumber === this.secondNumber) {
        this.firstNumber += 1;
      }
      if (this.firstNumber < this.secondNumber) {
        var aux = this.firstNumber;
        this.firstNumber = this.secondNumber;
        this.secondNumber = aux;
      }
      this.result = this.firstNumber - this.secondNumber;
      console.log(this.firstNumber + " - " + this.secondNumber);
      break;

    case "multiply":
      if (this.firstNumber === this.secondNumber) {
        this.firstNumber += 1;
      }
      console.log(this.firstNumber + " * " + this.secondNumber);
      this.result = this.firstNumber * this.secondNumber;
      break;

    case "divide":
      if (this.firstNumber < this.secondNumber) {
        var aux2 = this.firstNumber;
        this.firstNumber = this.secondNumber;
        this.secondNumber = aux2;
      }
      console.log(this.firstNumber + " / " + this.secondNumber);
      this.result = this.firstNumber / this.secondNumber;
      break;
  }
};

//


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
