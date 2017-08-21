// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, numberLimit) {
  this.operation = opeartion;
  this.numberLimit = numberLimit;
  this.underLimit = 1;
};

// Returns a random integer between [1..numberLimit]
randomInt = function (numberLimit){
  return Math.floor(Math.random()*numberLimit + 1);
};

// Returns an object with {question, answer}
var QuestionGenerator = function (numberLimit, operation){
  TenSecondsMathGame.call (this, operation, numberLimit);
  var num1 = randomInt(numberLimit);
  var num2 = randomInt(numberLimit);
  while (num1-num2 < 3) {
  num2 = randomInt(numberLimit);
}

  this.solution = calculator(operation, num1, num2);
  console.log ("Cuanto es: " + num1 + " + " + num2);
  return solution;
};

QuestionGenerator.prototype = Object.create(TenSecondsMathGame.prototype);
QuestionGenerator.prototype.constructor = QuestionGenerator;

var calculator = function (operation, num1, num2){
  if (operation == "sum"){
    return num1+num2;
  }
};
// Checks a user answer
var userAnswer = function (answer){
  if (answer == questionGenerator(numberLimit, operation)){
    return true;
  }
  else {
    return false;
  }
};
//questionGenerator(10, "sum");
