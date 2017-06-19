// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operations, limit) {
  this.operations = operations;
  this.limit = limit;
  this.num1 = 0;
  this.num2 = 0;
  this.result = 0;
  this.generatorNum();
  this.operatorGenerator();
};

TenSecondsMathGame.prototype.generatorNum = function() {
  this.num1 = Math.ceil(Math.random() * (this.limit));
  this.num2 = Math.ceil(Math.random() * (this.limit));
};

TenSecondsMathGame.prototype.operatorGenerator = function() {
  this.result = 0;
  switch (this.operations) {
    case 'A':
      console.log(this.num1 + " + " + this.num2);
      this.result = this.num1 + this.num2;
      break;
    case 'S':
      while (this.num1 - this.num2 < 0) {
        this.generatorNum();
      }
      console.log(this.num1 + " - " + this.num2);
      this.result = this.num1 - this.num2;
      break;
    case 'M':
      console.log(this.num1 + " * " + this.num2);
      this.result = this.num1 * this.num2;
      break;
    case 'D':
      while (this.num1 % this.num2 !== 0) {
        this.generatorNum();
      }
      console.log(this.num1 + " / " + this.num2);
      this.result = this.num1 / this.num2;
      break;
    default:
      console.error("That's a wrong answer");
  }
};








// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
