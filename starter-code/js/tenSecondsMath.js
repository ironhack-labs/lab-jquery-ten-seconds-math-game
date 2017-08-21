// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, numberLimit) {
  this.operation = operation;
  this.numberLimit = numberLimit;
  this.underLimit = 0;
  this.timer = 10;
};

TenSecondsMathGame.prototype.calculator = function (num1, num2, operation) {
  if (this.operation == "sum"){
    return  num1+num2;
  }
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomInt = function (){
  return parseInt(Math.random()*this.numberLimit + 1);
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.questionGenerator = function (){
  var num1 = this.randomInt();
  console.log(num1);
  var num2 = this.randomInt();
  console.log(num2);
  while (Math.abs(num1-num2) < 3) {
    num2 = this.randomInt();
    }
  var objeto = {
    question: num1 + " + " + num2,
    answer: this.calculator(num1, num2, this.operation)
  };
  console.log(objeto.question);
  return objeto;
};

// Checks a user answer
TenSecondsMathGame.prototype.userAnswer = function (){
  var resultado = this.questionGenerator().answer;
  var answer = prompt("Indica el resultado");
  if (answer == resultado){
    this.userAnswer();
    return true;
  }
  else {
    return false;
  }
};

TenSecondsMathGame.prototype._checkTimer = function (){
    var that = this;
    var intervalId = setInterval(function() {
    if(that.timer > 0) {
      console.log(that.timer);
    }
    else {
      console.log("Time is over!");
      clearInterval(intervalId);
    }
    that.timer--;
  }, 1000);
};

var juego = new TenSecondsMathGame("sum", 20);
juego.userAnswer();
