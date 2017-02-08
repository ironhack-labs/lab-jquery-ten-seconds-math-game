// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options, numberLimit) {
  // this.num1 = 0;
  // this.num2 = 0;
  this.numberLimit = numberLimit;
  this.options = options;
  };



// Retur=ns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.getRandomNumber = function(numberLimit) {
  this.num1 = Math.floor((Math.random() * numberLimit) + 1);
  this.num2 = Math.floor((Math.random() * numberLimit) + 1);
  // return this.x;
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function () {
this.getRandomNumber(this.numberLimit);
this.result = this.checkOption(this.num1, this.num2);
while (!this.logicRules()) {
  this.getRandomNumber(this.numberLimit);
  this.result = this.checkOption(this.num1, this.num2);
}
  console.log(this.num1 + this.options + this.num2 + "= ?") ;
};

TenSecondsMathGame.prototype.logicRules = function () {
  if (this.result < 0) {
    return false;}
     else  if (this.operation === "/"){
      return true;
    } else if(this.num1 - this.num2 > 3  && this.num1 != this.num2){
      return true;
    }else {
    return false;
  }

};

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function(x) {
  if ((this.checkOption(this.num1, this.num2)) === x) {
    console.log("Great!");
  } else {
    console.log("Wrooong!");
    console.log("The correct answer is " + this.checkOption(this.num1, this.num2));
  }
};

TenSecondsMathGame.prototype.checkOption = function(a, b) {
  switch (this.options) {
    case "+":
    return a + b;

    case "-":
    return a - b;

    case "*":
    return a * b;

    case "/":
    return a / b;
  }
};
