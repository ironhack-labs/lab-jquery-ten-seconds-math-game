// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operator, max) {
  this.operation = operator;
  this.max = max;
  this.time = 0;
  this.counter = 0;
};

TenSecondsMathGame.prototype.randomNumber = function() {
  return Math.floor(Math.random() * (this.max - 1) + 1);
};

TenSecondsMathGame.prototype.giveQuestion = function() {
  this.firstNumber = this.randomNumber();
  this.secondNumber = this.randomNumber();
  //  this.result = this.firstNumber + this.secondNumber;
  // if(this.firstNumber - this.secondNumber <3 || this.result <0 )|| this.firstNumber === this.secondNumber){
  //   return this.giveQuestion();
  //  }
  if (this.firstNumber - this.secondNumber === 0) {
    return this.giveQuestion();
  } else if (this.firstNumber === this.secondNumber && this.operation != "divide") {
    return this.giveQuestion();
  } else if (this.firstNumber - this.secondNumber < 3 && this.operation != "divide") {
    return this.giveQuestion();
  }
  switch (this.operation) {
    case "addition":
      this.result = this.firstNumber + this.secondNumber;
      console.log(this.firstNumber + "+" + this.secondNumber);
      break;
    case "substract":
      this.result = this.firstNumber - this.secondNumber;
      console.log(this.firstNumber + "-" + this.secondNumber);
      break;
    case "multiply":
      this.result = this.firstNumber * this.secondNumber;
      console.log(this.firstNumber + "*" + this.secondNumber);
      break;
    case "divide":
      this.result = Math.floor(this.firstNumber / this.secondNumber);
      console.log(this.firstNumber + "/" + this.secondNumber);
      break;
  }
  //console.log(this.firstNumber+ "+" + this.secondNumber);
};

TenSecondsMathGame.prototype.checkNumber = function(number) {
  this.counter++;
  if (number == this.result) {
    this.time += 10;
    this.giveQuestion();
    if (this.counter === 1) {
      this.checkTimer();
    }
  } else {
    this.counter = 0;
    console.log("Intentalo otra vez!!");
  }
};

TenSecondsMathGame.prototype.checkTimer = function() {
  var that = this;
  var interval = setInterval(function() {
    console.log(this.time);
    this.time -= 1;
    if (this.time < 0 || this.counter === 0) {
      clearInterval(interval);
    }
  }, 1000);
};


// function generateRandom () {
//   var firstNumber = TenSecondsMathGame.randomNumber;
//   console.log(firstNumber);
// }
// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
