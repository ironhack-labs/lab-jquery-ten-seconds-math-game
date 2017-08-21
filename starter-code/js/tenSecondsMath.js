function TenSecondsMathGame(opUser, upperLimit) {
  this.opUser = opUser;
  this.upperLimit = upperLimit;
  this.count = 10;
};

TenSecondsMathGame.prototype.getOperation = function (){
  switch (this.opUser) {
    case "add": this.addition();
      break;

    case "rest": this.substraction();
      break;

    case "mult": this.multiplication();
      break;

    case "div": this.division();
      break;
    default: console.log("ERROR EN PARAMETRO OPERACION");

  }
};

TenSecondsMathGame.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * this.upperLimit + 1);
};

TenSecondsMathGame.prototype.question = function () {
  //var number1 = this.getRandomNumber(this.upperLimit);
  //var number2 = this.getRandomNumber(this.upperLimit);
  var number1, number2;
  do{
    number1 = this.getRandomNumber(this.upperLimit);
    number2 = this.getRandomNumber(this.upperLimit);
  }while ((Math.abs(number1 - number2) <= 3) || (number1 == number2));
  return [number1,number2];
};

TenSecondsMathGame.prototype.addition = function(){
  var resultado = this.question();
  var result = resultado[0] + resultado[1];

  console.log("La suma vale: " ,result);
};

TenSecondsMathGame.prototype.substraction = function(){
  var resultado, result
  do {
    resultado = this.question()
    result = resultado[0] - resultado[1]
  } while (result < 0)
  console.log(result);
};

TenSecondsMathGame.prototype.multiplication = function(){
  var resultado = this.question();
  var result = resultado[0] * resultado[1]

  console.log(result)
};

TenSecondsMathGame.prototype.division = function(){
  var number1 = this.getRandomNumber(this.upperLimit);
  var number2 = this.getRandomNumber(this.upperLimit);
  var result = number1 / number2

  console.log(result.toFixed(2))
};

// TenSecondsMathGame.prototype.answerReceive = function (){
//   var resultado = this.question();
// console.log(resultado)
//   var respuesta = prompt ("escribe tu respuesta")
//   if (resultado != respuesta) {
//     console.log( "incorrect");
//   }else{
//     return "correct";
//   }
// };
// Returns a random integer between [1..numberLimit]
  // var game = new TenSecondsMathGame('add', 10);

// Returns an object with {question, answer}


// Checks a user answer
