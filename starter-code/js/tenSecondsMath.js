// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options, limit){
  this.options = options;
  this.limit = limit;
  this.result = 0;
  this.operacion = 0;
  this.time = 10;
  };
// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNum = function(){
  return Math.floor(Math.random()*(this.limit - 1) + 1);
};



TenSecondsMathGame.prototype.operations = function(){
  var n1 = this.randomNum();
  var n2 = this.randomNum();


  while (Math.abs(n1 - n2) < 3){
    n2 = this.randomNum();
  }

  switch (this.options){
    case 'suma':
      this.result = n1 + n2;
      this.operacion = n1 + " + " + n2;
    break;
    }
    console.log(this.operacion);
    return this.result;
};

TenSecondsMathGame.prototype.answer = function(ans){
  if(ans === this.result){
    console.log("GREAT!");
  }else{
    console.log("WRONG!");
  }
};

TenSecondsMathGame.prototype.time = function () {
  var that = this;
  var intervalId = setInterval(function() {
    if (that.time > 0) {
      console.log(i);
    } else {
      console.log("Pop!");
      clearInterval(intervalId);
    }

    that.time--;
  }, 1000);
};

var game = new TenSecondsMathGame("suma", 10);
// Returns an object with {question, answer}


// Checks a user answer
