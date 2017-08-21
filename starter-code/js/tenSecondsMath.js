function TenSecondsMathGame(opUser, upperLimit) {
  this.opUser = opUser;
  this.upperLimit = upperLimit;
  this.count = 10;
};

TenSecondsMathGame.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * this.upperLimit + 1);
};

TenSecondsMathGame.prototype.question = function () {
  var number1 = this.getRandomNumber(this.upperLimit);
  var number2 = this.getRandomNumber(this.upperLimit);
  do{
    number1 = this.getRandomNumber(this.upperLimit);
    number2 = this.getRandomNumber(this.upperLimit);
  }while ((Math.abs(number1 - number2) <= 3) || (number1 == number2));
  return number1 + number2;
};

TenSecondsMathGame.prototype.answerReceive = function (){
  var resultado = this.question();
console.log(resultado)
  var respuesta = prompt ("escribe tu respuesta")
  if (resultado != respuesta) {
    console.log( "incorrect");
  }else{
    return "correct";
  }
};
// Returns a random integer between [1..numberLimit]
  // var game = new TenSecondsMathGame('add', 10);

// Returns an object with {question, answer}


// Checks a user answer
