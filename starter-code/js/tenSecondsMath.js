
function TenSecondsMathGame(ops, numLim) {

  this.operators = ops;
  this.numberLimit = numLim;

}

TenSecondsMathGame.prototype.createRandomNumber = function(max) {

  var randomNumber = Math.random();
  randomNumber = randomNumber*max;
  randomNumber = Math.floor(randomNumber);

  return randomNumber;

};

TenSecondsMathGame.prototype.questionGenerator = function() {

  var randomIndex = this.createRandomNumber(this.operators.length);
  var randomOperator = this.operators[randomIndex];
  var mathQuestion = this.getMathQuestion(randomOperator);


};

TenSecondsMathGame.prototype.getMathQuestion = function(op) {

  var numberA = this.createRandomNumber(this.numberLimit + 1);
  var numberB = this.createRandomNumber(this.numberLimit + 1);

  var mathOperator = new MathOperators(numberA, numberB, this.numberLimit);

};


function MathOperators(a, b, limit) {
  //TODO-: Delete property limit.
  this.a = a;
  this.b = b;
  this.limit = limit;
}

MathOperators.prototype.checkNumbers = function() {

  if (a - b < 3) {

    if (a < 3) {

      this.a += 3;

    }
    else if (this.a > this.limit - 3){

      this.b -= 3;

    }
    else {

      this.a += 3;

    }
  }
};

MathOperators.prototype.addNumbers = function() {

  return this.a + this.b;

};

MathOperators.prototype.substractNumbers = function() {

  return this.a - this.b;

};

MathOperators.prototype.multiplyNumbers = function() {

  return this.a * this.b;

};

MathOperators.prototype.divideNumbers = function() {

  return this.a / this.b;

};


var newMath = new MathOperators(2,3);

newMath.addNumbers();







var operators = [1,2,3, ];
var numberLim = 10;

var newGame = new TenSecondsMathGame(operators, numberLimit);
newGame.createRandomNumber();
