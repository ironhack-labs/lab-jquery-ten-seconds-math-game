// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operations, numberLimit) {
  this.operations = operations;
  this.numberLimit = numberLimit;
  this.rightAnswer = 0;
  this.playersGuess = 0;

};

//

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber = function () {

  //Random number between 1 and an arbitrary upper limit set by player.
  var ranNum= Math.floor(Math.random()*this.numberLimit) + 1;

  return ranNum;
};

// Function that generates a random problem given the operation desired.

TenSecondsMathGame.prototype.problemGenerator = function(operation){
  console.log("Lets play a math game!\n");

  var ranNum1 = 0;
  var ranNum2 = 0;

  ranNum1 = this.randomNumber();
  ranNum2 = this.randomNumber();

  //If the operation is addition.
  if (this.operations === "addition"){

    rightAnswer = ranNum1 + ranNum2;

    //For debug purposes
    console.log(ranNum1 + " + " + ranNum2);

    //this.checkAnswer();

    //For debug purposes
    console.log("The correct answer is: " + rightAnswer);

  }
  //If the operation is subtraction.
  else if (this.operations === "subtraction"){

    rightAnswer = ranNum1 - ranNum2;

    console.log(ranNum1 + " - " + ranNum2);

    //this.checkAnswer();

    console.log("The correct answer is: " + rightAnswer);
  }
  //If the operation is division.
  else if (this.operations === "division"){

    rightAnswer = ranNum1 / ranNum2;

    console.log(ranNum1 + " / " + ranNum2);

    //this.checkAnswer();

    console.log("The correct answer is: " + rightAnswer);

  }
  //If the operation is multiplication.
  else if (this.operations === "multiplication"){
    rightAnswer = ranNum1 * ranNum2;

    console.log(ranNum1 + " * " + ranNum2);

    //this.checkAnswer();

    console.log("The correct answer is: " + rightAnswer);
  }
};


// Checks a user answer
TenSecondsMathGame.prototype.checkAnswer = function(){
  if (this.rightAnswer === this.playersGuess){
    console.log("You are correct!");
  }
  else {
    console.log("Please try again.");
  }
};


//Sample addition game.
var newGame1 = new TenSecondsMathGame('addition', 100);
newGame1.problemGenerator();

//Sample subtraction game.
var newGame1 = new TenSecondsMathGame('subtraction', 100);
newGame1.problemGenerator();

//Sample division game.
var newGame1 = new TenSecondsMathGame('division', 100);
newGame1.problemGenerator();

//Sample multiplication game.
var newGame1 = new TenSecondsMathGame('multiplication', 100);
newGame1.problemGenerator();
