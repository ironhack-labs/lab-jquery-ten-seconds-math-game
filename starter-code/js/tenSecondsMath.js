/*
Short Version
create constructor
recieve 1 type 'addition' and max number
confirm answer from user

*/


// Use this file to write the logic of your game, the needed attrs and functions

function score(){
  //starts with 10 seconds
  //10 seconds added for each correct question
}

startGame.prototype.randomNumbers = function(max) {
  // console.log(max);
  this.num1 = Math.floor(Math.random() * max);
  this.num2 = Math.floor(Math.random() * max);
  return this.num1, this.num2; // console.log(num1, num2);
};

startGame.prototype.correctAnswer = function(answer) {

};

startGame.prototype.askQuestion = function(a, b, operation) {
  console.log(a, b);

  if (operation === "a") {

    this.theAnswer = prompt("What is " + a + " + " + b + "?");
    var c = parseInt(this.theAnswer);
    if (c === (a + b)) {console.log("you got it right!")
  } else {
    console.log("You got it wrong");
  }
    // this.validateAnswer(this.theAnswer);
  } else if (operation === "s") {
    this.theAnswer = prompt("What is " + a + " + " + b + "?");
  } else {
    console.log("NONE SELECTED");
  }

  return this.theAnswer;
};

function startGame(maxNumber, operation) {
  this.maxNumber = prompt("Max Number?");
  this.operation = operation;
  this.randomNumbers(this.maxNumber);
  // console.log(this.num1, this.num2);
  this.askQuestion(this.num1, this.num2, this.operation);
}

var game = new startGame(3, "a");
// var TenSecondsMathGame = function() {
//   this.maxNumber = prompt("What is your maximum number?");
//
//   TenSecondsMathGame.randomNumbers(maxNumber);
// };
//
//
// // Returns a random integer between [1..numberLimit]
// TenSecondsMathGame.prototype.randomNumbers = function(max) {
//   var num1 = Math.floor(Math.random() * max);
//   var num2 =Math.floor(Math.random() * max);
//   console.log(num1, num1);
// };
//
// // Returns an object with {question, answer}
// TenSecondsMathGame();
// TenSecondsMathGame.randomNumbers();

// Checks a user answer
