// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(options) {
  this.n1 = 0;
  this.n2 = 0;
  this.limit = Math.floor(prompt("What's your number limit?"));
  this.operation = prompt("Which operations you want?");
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNum = function (limit) {
  return Math.floor(Math.random() * limit);
};

// Returns an object with {question, answer}

TenSecondsMathGame.prototype.generateBothNum = function () {
  this.n1 = tenSecondsMath.randomNum(this.limit);
  this.n2 = tenSecondsMath.randomNum(this.limit);
  
}



// Checks a user answer
var tenSecondsMath = new TenSecondsMathGame();

// tenSecondsMath.randomNum(this.limit);
