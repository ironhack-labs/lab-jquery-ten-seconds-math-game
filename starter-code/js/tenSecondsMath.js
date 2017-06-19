// Use this file to write the logic of your game, the needed attrs and functions
var count = 10;

var TenSecondsMathGame = function(options) {
  this.limit = options.limit;
  this.operations = options.operations;
  this.random1 = 0;
  this.random2 =0;
  this.generateQuestion();
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.generateRandom = function (){
  //this.random1 = Math.floor(Math.random()*this.limit);
   return Math.floor(Math.random()*this.limit);
};
var qa = {
  question: 0,
  answer:0
};
// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateQuestion = function () {
    this.random1 = this.generateRandom();
    this.random2 = this.generateRandom();
    var randomOperation = Math.floor(Math.random()*this.operations.length);

    if (this.operations[randomOperation] != 'div') {
      while (this.random1 < this.random2 || this.random1 == this.random2 || this.random1+3 == this.random2 || this.random1-3 == this.random2){
        this.random1 =Math.floor(Math.random()*this.limit);
      }
    }
    switch (this.operations[randomOperation]) {
      case 'sum':
          qa.question = "+";
          qa.answer = this.random1 + this.random2;

        break;
        case 'div':
          qa.question = "/";
          qa.answer = this.random1 / this.random2;
        break;
        case 'multi':
        qa.question = "*";
        qa.answer = this.random1 * this.random2;
        break;
        case 'subs':
        qa.question = "-";
        qa.answer = this.random1 - this.random2;

        break;
      default:

    }
    console.log(this.random1 + qa.question + this.random2);
  //  console.log(this.random2);
    //console.log(qa);
    return qa;
};

// Checks a user answer
TenSecondsMathGame.prototype.checkAnswer = function (answer) {

  if (qa.answer == answer) {
    console.log("bien!");
    count += 10;
    this.generateQuestion();
    return true;
  }else {
  }
};
var timeout = setInterval (function (){
    if (count === 0) {
          console.log ("Has perdido");
          clearTimeout(timeout);
}else {
      console.log(count);
      count--;
    }
},1000);
///// Pruebas
var obj = {
  limit: 100,
  operations: ["sum","div","subs"]
};
var a = new TenSecondsMathGame (obj);
