// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options, limit){
  this.options = options;
  this.limit = limit;
  this.n1 = 0;
  this.n2 = 0;
  this.result = 0;
  this.operacion = 0;
  this.ans = 0;
  };
// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNum = function(max){
  return Math.floor(Math.random()*(max - 1) + 1);
};

TenSecondsMathGame.prototype.operations = function(){
  this.n1 = this.randomNum(this.limit);
  console.log(this.n1);
  this.n2 = this.randomNum(this.limit);
  console.log(this.n2);
  while (this.n1 - this.n2 < 3){
    this.n2 = this.randomNum(this.limit);
  }
  switch (this.options){
    case 'suma':
      this.result = this.n1 + this.n2;
      this.operacion = this.n1 + " + " + this.n2;
    break;
    }
  console.log(this.operacion);
};
TenSecondsMathGame.prototype.answer= function(answ){
  console.log(this.operacion);
  this.ans = prompt(this.operacion, "ONLY NUMBERS");
  if(this.ans != this.result){
    console.log("WRONG!");
  }else{
    console.log("GREAT!");
  }
};



// Returns an object with {question, answer}


// Checks a user answer
