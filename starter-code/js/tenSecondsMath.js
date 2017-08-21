function TenSecondsMathGame(ops, numberLimit) {
  this.ops = ops;
  this.numberLimit = numberLimit;
  this.underLimit = 0;
  this.result = 0;
  this.time = 10;
}

TenSecondsMathGame.prototype.getRandomNumber = function() {
  return parseInt(Math.random() * this.numberLimit + 1);
};

TenSecondsMathGame.prototype.question = function() {
  var num1 = this.getRandomNumber();
  var num2 = this.getRandomNumber();


  if ((Math.abs(num1 - num2)) <= 3) {
    return this.question();
  } else {
    console.log('Voy a devolverte los siguientes números : ' + num1 + ' y ' + num2);
    this.result = num1 + num2;
  }
  this.checkTimer();
  return this.result;

};


TenSecondsMathGame.prototype.answer = function(answer) {

  if (answer === this.result) {
    console.log("Correcto!!!");
    this.time += 10;
    this.question();

  } else {
    console.log("No es correcto");
  }
};

TenSecondsMathGame.prototype.starTimer = function() {
  this.checkTimer();
};

TenSecondsMathGame.prototype.checkTimer = function() {
  var esto = this
  var intervalId = setInterval(function() {
    if (esto.time > 0) {
      console.log(esto.time);
    } else {
      console.log("You looose!");
      clearInterval(intervalId);
    }

    esto.time--;
  }, 1000);
};


var game = new TenSecondsMathGame('substract', 10);
var game2 = new TenSecondsMathGame('substract', 100);



// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
