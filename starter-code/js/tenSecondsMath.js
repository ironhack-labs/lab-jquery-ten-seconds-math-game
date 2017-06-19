// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(ops, numLimit) {
  this.n1 = 0;
  this.n2 = 0;
  this.limit = numLimit;
  this.operation = ops;
  this.response = 0;
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNum = function () {
  return Math.floor(Math.random() * this.limit);
};


// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateBothNum = function () {
  this.n1 = this.randomNum();
  this.n2 = this.randomNum();
};

TenSecondsMathGame.prototype.randomOp = function() {
    this.opSel  = this.operation[Math.floor(Math.random() * this.operation.length)];
};

TenSecondsMathGame.prototype.options = function(){
  var result;
  switch(this.opSel){
    case "sum":
      result = " "+this.n1+" + "+this.n2+" ";
      break;
    case "sub":
      result = " "+this.n1+" - "+this.n2+" ";
      break;
    case "div":
      result = " "+this.n1+" / "+this.n2+" ";
      break;
    case "mult":
      result = " "+this.n1+" * "+this.n2+" ";
      break;
  }
  return result;
};

TenSecondsMathGame.prototype.resolution = function(){
  var correct = 0;
  switch(this.opSel){
    case "sum":
      correct = this.n1+this.n2;
      break;
    case "sub":
      correct = this.n1-this.n2;
      break;
    case "div":
      correct = this.n1/this.n2;
      break;
    case "mult":
      correct =this.n1*this.n2;
      break;
  }
  return correct;
};

TenSecondsMathGame.prototype.newQuestion = function() {
  this.generateBothNum();
  this.randomOp();
  var question = this.options();
  console.log(question);
};

TenSecondsMathGame.prototype.isCorrectAnswer = function(response){
  this.response = response;
  this.rightAnswer = this.resolution();
  if (this.response === this.rightAnswer) {
    console.log("You got it right");
  } else {
    console.log("Better luck next time");
  }
};


// Checks a user answer
var mathGame = new TenSecondsMathGame();
