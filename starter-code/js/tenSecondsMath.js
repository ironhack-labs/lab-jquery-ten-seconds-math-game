// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function( operator, numberLimit) {
  this.n1 = 0;
  this.n2 = 0;
  this.operator = operator;
  this.numberLimit = numberLimit;
  this.result = 0;
  this.timer=10;
};
TenSecondsMathGame.prototype.chooseNumber = function() {
  this.n1 = Math.floor(Math.random() * this.numberLimit );
  this.n2 = Math.floor(Math.random() * this.numberLimit );
};
TenSecondsMathGame.prototype.chooseOperator = function() {
  var result;
  switch (this.operator) {
    case "+":
      this.result = " "+this.n1+" + "+this.n2+" ";
      break;
    case "-":
      this.result =" " +this.n1+" - "+this.n2+" ";
      break;
    case "/":
    this.result =" "+this.n1+" / "+this.n2+" ";
      break;
      case "*":
      this.result =" "+this.n1+" * "+this.n2+" ";
        break;
      }
      return result;
};
TenSecondsMathGame.prototype.checkResult = function(r){
  var correct = 0;
  switch (this.chooseOperator) {
    case "+":
    correct = this.n1+this.n2;
      break;
    case "-":
    correct = this.n1-this.n2;
    break;
    case "/":
    correct = this.n1/this.n2;
    break;
    case "*":
    correct = this.n1*this.n2;
    break;
  }
  return correct;
};
TenSecondsMathGame.prototype.newQuestion = function (){
  do {
    this.chooseOperator();
  }while ((this.n1===this.n2) || this.checkResult());
  if (this.n1 < this.n2) {
    var aux = this.n1;
    this.n1 = this.n2;
    this.n2 = aux;
  }
  this.chooseOperator();
  var question = this.options();
  console.log(question);
  console.log("Tiempo restante: "+this.timer);
};
TenSecondsMathGame.prototype.checkNumbers = function(){
  return Math.abs(this.n1 - this.n2) < 3;
};

TenSecondsMathGame.prototype.isCorrectAnswer = function(response){
  this.response = response;
  this.rightAnswer = this.resolution();
  if (this.response === this.rightAnswer) {
    console.log("Correcto!");
    this.timer += 10;
    this.newQuestion();
  } else {
    console.log("Better luck next time");
  }
};


var mathGame = new TenSecondsMathGame(["+","-","/","*"], 10);




// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
