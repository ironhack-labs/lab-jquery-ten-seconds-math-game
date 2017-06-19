// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(limit, operation) {
      this.operation = operation;
      this.limit = limit;
      this.firstNumber = this.randomNumber(limit);
      this.secondNumber = this.randomNumber(limit);
      this.result = 0;
};

TenSecondsMathGame.prototype.randomNumber = function (limit) {
var random =  Math.floor((Math.random() * limit) + 1 );
  return random;
};

var game = new TenSecondsMathGame(8, "sum");

// console.log(game.__proto__.randomNumber(10));

TenSecondsMathGame.prototype.generateQuestion = function () {
    switch (this.operation) {
      case "sum":
      console.log(this.firstNumber + " + " + this.secondNumber);
      this.result = this.firstNumber + this.secondNumber;
      break;
    }
    return this.result;
  };

  console.log(game.generateQuestion());


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
