// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options, limit){
  this.options = options;
  this.limit = limit;
};
// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNum = function(max){
  return Math.floor(Math.random()*(max - 1) + 1);
};

TenSecondsMathGame.prototype.add = function(){
  var n1 = this.randomNum();
  var n2 = this.randomNum();

  while (n1 - n2 < 3){
    n2 = this.randomNum();
  }

  switch (this.options) {
    case suma:
      var resultado = a+b;
      var operacion = "a" + "+" + "b";
      break;
    default:

  }
  return operacion;
};



// Returns an object with {question, answer}


// Checks a user answer
