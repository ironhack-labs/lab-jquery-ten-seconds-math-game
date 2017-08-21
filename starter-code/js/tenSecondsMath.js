// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(limit, operation) {
  this.limit = limit;
  this.operation = operation;
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber = function(a, limit){
  return Math.round(Math.random() * (limit - a)) + a  ;
};

// Returns an object with {question, answer}

TenSecondsMathGame.prototype.newQuestion = function() {

  this.num1 = this.randomNumber(1, this.limit);
  this.num2 = this.randomNumber(1,this.limit);

  if(Math.abs(this.num1 - this.num2) <= 3){
      this.newQuestion()
    } else {
      console.log(this.num1, this.num2)
  }
};


TenSecondsMathGame.prototype.userAnswer = function(ans) {
  this.answer = ans;
  var ans = prompt("¿Cuál es el resultado?");
  return ans
}



TenSecondsMathGame.prototype.checkOperation = function() {
  if(this.operation === "suma") {
      var suma = this.num1 + this.num2;
      return suma;
  }
};

TenSecondsMathGame.prototype.isCorrectAnswer = function() {
  var a = this.userAnswer();
  var gameAnswer = this.checkOperation();


  if(gameAnswer == a){
    console.log("Great!");
  } else {
    console.log("Wrongggg");
  }
};


TenSecondsMathGame.prototype.counter = function() {
  this.count = 10;
}


// Checks a user answer

var game = new TenSecondsMathGame(10);
