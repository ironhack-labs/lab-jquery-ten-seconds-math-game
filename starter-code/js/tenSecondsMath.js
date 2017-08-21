function TenSecondsMathGame(ops, numberLimit) {
  this.ops = ops;
  this.numberLimit = numberLimit;
  this.underLimit = 0;
  this.result = 0;
}

TenSecondsMathGame.prototype.getRandomNumber = function(){
  return parseInt(Math.random()*this.numberLimit +1);
};

TenSecondsMathGame.prototype.question = function(){
  var num1 = this.getRandomNumber();
  var num2 = this.getRandomNumber();


  if((Math.abs(num1-num2))<=3){
    return this.question();
  }
  else{
    console.log('Voy a devolverte los siguientes números : '+ num1 +' y '+num2 );
    this.result = num1 + num2;
  }
  return this.result;
};


TenSecondsMathGame.prototype.answer= function(answer){

  if(answer === this.result) {
    console.log("Correcto!!!");
    this.question();

  }else{
    console.log("No es correcto");
  }
};


var game = new TenSecondsMathGame('substract', 10);
var game2 = new TenSecondsMathGame('substract', 100);



// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
