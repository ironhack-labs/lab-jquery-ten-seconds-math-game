// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(ops) {
  this.ops = ops;
  this.numberLimit = 10;
  this.underLimit = 0;
  this.count =10;
  this.sum =0;
  this.control = false;
};

//Generate random number
TenSecondsMathGame.prototype.generateRandomNumber = function(){
  var max = 10;
  return parseInt(Math.random()*10)+1;
};

TenSecondsMathGame.prototype.timer = function(){
  this.count -=1;
  //console.log(this.count);
};
//Generate the correct answer
TenSecondsMathGame.prototype.question = function(){
  if (this.control){
    var a = this.generateRandomNumber();
    var b = this.generateRandomNumber();

    while ( Math.abs(a-b) < 3 ){
      a = this.generateRandomNumber();
    }

    this.sum = this.sumNumbers(a, b);
    console.log(a,b);
    console.log("suma: ", this.sum);
  }
};

// Sum two values
TenSecondsMathGame.prototype.sumNumbers = function(a, b){
  this.sum = a+b;
  return a+b;
};

//Compare result
TenSecondsMathGame.prototype.compareResult = function(a, b){
  if (a == b){
    if (this.control){
      console.log("You are right!");
      this.question();
    }else{
      return;
    }
  }else{
    if (this.control){
      console.log("You are wrong!");
    }else{
      return;
    }
  }
};

TenSecondsMathGame.prototype.questionInfo = function(){
  //a = getElementById('answer');

  a = prompt("Insert number: ");
  return a;
};
