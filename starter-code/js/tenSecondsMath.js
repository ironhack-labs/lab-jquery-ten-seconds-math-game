// Use this file to write the logic of your game, the needed attrs and functions
var remainTime = 10;


var TenSecondsMathGame = function(operation, upperNumber) {
  this.operation = operation;
  this.upperNumber = upperNumber;
  this.generateQuestion();
};

TenSecondsMathGame.prototype.random = function(upperNumber) {
  return Math.floor(Math.random() * upperNumber + 1);
};

TenSecondsMathGame.prototype.result = function(operation, n1, n2) {
  var operationResult = 0;
  switch (operation) {
    case '+':
      operationResult = n1 + n2;
      break;
    case '-':
    operationResult = n1 - n2;
      break;
    case '*':
      operationResult = n1 * n2;
      break;
    case '/':
      operationResult = n1 / n2;
      break;
  }
  return operationResult;
};

TenSecondsMathGame.prototype.generateQuestion = function () {
  do {
    this.n1 = this.random(this.upperNumber);
    this.n2 = this.random(this.upperNumber);
  } while  ((this.n1 === this.n2) || this.checkNumbers());
  if (this.n1 < this.n2) {
    var aux = this.n1;
    this.n1 = this.n2;
    this.n2 = aux;
  }
  console.log( this.n1 + " " + this.operation + " " + this.n2);
};

TenSecondsMathGame.prototype.checkNumbers = function(){
  return Math.abs(this.n1 - this.n2) < 3;
};

TenSecondsMathGame.prototype.checkAnswer = function (userSay) {
  var result = this.result(this.operation, this.n1, this.n2);
  if(result == userSay){
    console.log("CONGRATS!!!");
    remainTime += 10;
    this.generateQuestion();
  }else{

  }

};

var intervalId = setInterval(function(){
  if (remainTime === 0){
    console.log("LOOSER!!!");
    clearInterval(intervalId);
  }else {
    console.log(remainTime);
  remainTime--;
  }
},1 * 1000);

var game = new TenSecondsMathGame('+',10);



// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
