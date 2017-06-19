// Use this file to write the logic of your game, the needed attrs and functions


var TenSecondsMathGame = function(options) {
  this.limit = options.limit;
  this.operation = options.operation;
  this.random = function () {
  return Math.floor(Math.random()*this.limit);
  };
};

// Returns a random integer between [1..numberLimit]
/*TenSecondsMathGame.prototype.generateRandom = function (){
  this.random =
  console.log(this.random);
  return this.random;
};*/

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateQuestion = function () {
    var aleatorio1;
    var aleatorio2;
    aleatorio1= this.random();
    aleatorio2 = this.random();
    console.log(aleatorio1);
        console.log(aleatorio2);
}

// Checks a user answer

var obj = {
  limit: 50,
  operation: ["asdasdasd"]
}
var a = new TenSecondsMathGame (obj);

a.generateQuestion();
