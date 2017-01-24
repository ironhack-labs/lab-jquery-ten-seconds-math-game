// Use this file to write the logic of your game, the needed attrs and functions

// var numberLimit = prompt("numero limite");
// var operador = prompt("operador");


var TenSecondsMathGame = function(userSelect,numberLimit) {
  var number1;
  var number2;
  var operatorSelected;
  this.operators = userSelect;
  this.numberLimit = numberLimit;
  this.newQuestion = function(){
    number1 = randomNumber();
    number2 = randomNumber();
    var i = Math.floor(Math.random() * (userSelect.length - 1)) + 1;
    operatorSelected = userSelect[i];
    switch (operatorSelected) {
      case 'adition':
        return number1+" + "+number2;
      case 'substraction':
        if (number1<number2) {
          return number2+" - "+number1;
        }else{
          return number1+" - "+number2;
        }
        break;
      case 'multiplication':
          return number1+" x "+number2;
      case 'division':
        if (number1<number2) {
          return number2+" / "+number1;
        }else{
          return number1+" / "+number2;
        }
        break;
    }
  };
  this.theCorrectAnswer = function(){
    switch (operatorSelected) {
      case 'adition':
        return number1+number2;
      case 'substraction':
        if (number1<number2) {
          return number2-number1;
        }else{
          return number1-number2;
        }
        break;
      case 'multiplication':
          return number1*number2;
      case 'division':
        if (number1<number2) {
          if (number2%number1===0) {
            return number2/number1;
          }else{
            this.newQuestion();
          }
        }else if (number1%number2===0) {
            return number1/number2;
        }else{
          this.newQuestion();
        }
        break;
    }
  };
  this.isCorrectAnswer = function(respuesta){
      if(respuesta === this.theCorrectAnswer()){
        //algo para sumar 10 segundos
        console.log("Good Answer");
        this.newQuestion();
        console.log(this.newQuestion());
      }else{
        console.log("Oh! its wrong");
        this.newQuestion();
        console.log(this.newQuestion());
      }
  };
};

 //Estos argumentos se recogen del DOM a elección del usuario
var game = new TenSecondsMathGame(['adition','substraction','multiplication','division'],10);


// Returns a random integer between [1..numberLimit]
function randomNumber(){
  var num = Math.floor(Math.random() * (game.numberLimit - 1)) + 1;//El 10 debe ser el numero elegido por el usuario
  return num;
}

game.newQuestion();
console.log("Start!");
console.log(game.newQuestion());



// Returns an object with {question, answer}
