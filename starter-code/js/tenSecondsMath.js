function TenSecondsMathGame(ops, numberLimit) {
  this.ops = ops;
  this.numberLimit = numberLimit;
  this.underlimit = 0;
  this.result = 0;
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype._getRandomNumber = function() {
  return parseInt(Math.random() * this.numberLimit + 1);
}

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.question = function() {
  var num1 = this._getRandomNumber();
  var num2 = this._getRandomNumber();
  this.result = num1 + num2;
  if (this.result<0){return num1;}
  if(this.num1-this.num2<3||this.num2-this.num1<3){return num1;}

  console.log('La operacion es :' + num1 + this.ops + num2);
  console.log('Y el resultado es ' + this.result);
};

TenSecondsMathGame.prototype.answer = function(result) {
  if(this.result === result){
    console.log('Eres un crack!');
  } else {
    console.log('Jubilate, padre...');
  }
};

// Checks a user answer
