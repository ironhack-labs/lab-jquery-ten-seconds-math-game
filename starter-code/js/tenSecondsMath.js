// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function( max) {
  this.operation = "add";
  this.max = max;

};

TenSecondsMathGame.prototype.randomNumber = function () {
  return Math.floor( Math.random()*(this.max-1)+1);
};

TenSecondsMathGame.prototype.giveQuestion = function (){
  this.firstNumber = this.randomNumber();
  this.secondNumber = this.randomNumber();
  this.result = this.firstNumber + this.secondNumber;
  console.log(this.firstNumber+ "+" + this.secondNumber);
};

TenSecondsMathGame.prototype.checkNumber = function (number){
  if(number == this.result){
    return this.giveQuestion();
  }else{
    console.log("Intenatalo otra vez!!");
  }
};


// function generateRandom () {
//   var firstNumber = TenSecondsMathGame.randomNumber;
//   console.log(firstNumber);
// }
// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
