// Player's remain default time
var remainTime = 10;

// Game object constructor
var TenSecondsMathGame = function(operators, numberLimit){
  this.operators = operators,
  this.numberLimit = numberLimit;
  this.newQuestion();
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.aleatoryNumber = function(n){
  var num = Math.floor(Math.random() * n) + 1;
  return num;
}

// Applies the operator chosen by the player
TenSecondsMathGame.prototype.chosenOperator = function(operator, num1, num2){
  var operationResult = 0;
  switch(operator) {
    case "+":
      operationResult = num1 + num2;
      break;
    case "-":
      operationResult = num1 - num2;
      break;
    case "*":
      operationResult = num1 * num2;
      break;
    case "/":
      operationResult = num1 / num2;
      break;
  }
  return operationResult;
}

// Returns a new question
TenSecondsMathGame.prototype.newQuestion = function(){
  do {
    this.firstNumber = this.aleatoryNumber(this.numberLimit);
    this.secondNumber = this.aleatoryNumber(this.numberLimit);
  } while (this.firstNumber === this.secondNumber || this.checkDiffBtweenNums() );
  if(this.firstNumber < this.secondNumber){
    var temp = this.firstNumber;
    this.firstNumber = this.secondNumber;
    this.secondNumber = temp;
  }
  this.result = this.chosenOperator(this.operators, this.firstNumber, this.secondNumber);
  console.log(this.firstNumber,this.operators,this.secondNumber);
}

// Calculates difference between numbers
TenSecondsMathGame.prototype.checkDiffBtweenNums = function(){
  return Math.abs(this.firstNumber - this.secondNumber < 3);
}

// Checks the user's answer
TenSecondsMathGame.prototype.checkAnswer = function(userAnswer){
  if(this.result == userAnswer){
    this.newQuestion();
    remainTime += 10;
  }
}

// Updates remaining time
var intervalId = setInterval(function(){
  if(remainTime == 0){
    console.log("Time is over!");
    clearInterval(intervalId);
   }else{
    console.log(remainTime);
    remainTime--;
  }
}, 1000);

// Initializes the new game when loaded
var game = new TenSecondsMathGame(prompt("Choose your operator"), prompt("Choose your number limit"));
