// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {
  this.question=[];
  this.answer=0;
};

// Returns a random integer between [1..numberLimit]
function getRandomNumber(numberLimit){
  return Math.random() * (numberLimit - 1) + 1;
}

// Returns an object with {question, answer}
function getCorrecMathQuestion(options,maxNumber){
  var newGame=TenSecondsMathGame(options);
  var num1=0;
  var num2=0;
  var operation=selectOption(options);
  while(!correctNumbers(num1,num2,operation) && correctAnswer(generateAnswer(num1,num2,operation))){
    num1=getRandomNumber(maxNumber);
    num2=getRandomNumber(maxNumber);
    newGame.answer=generateAnswer(newGame);
  }
  newGame.question = [num1,operation,num2];
  newGame.answer=generateAnswer(num1,num2,operation);
  return newGame;
}
//Genera una pregunta matematica
function generateAnswer(num1,num2,operation){
  switch (operation) {
    case '+':
      solution = num1 + num2;
      break;
    case '-':
      solution = num1-num2;
      break;
    case '/':
      solution = num1/num2;
      break;
    case'*':
      solution = num1*num2;
      break;
  }
  return solution;
}
// Checks a user answer
function checkAnswer(answer,userAnswer){
  if(answer===userAnswer){
    return true;
  }else{
    return false;
  }
}
//Comprueba si los numeros son validos
function correctNumbers(num1,num2,operation){
  if(num1-num2){
    return false;
  }else {
    if(num1 - num2 < 3 && operation != '/'){
      return false;
    }else{
      if(num1===num2 && operation != '/'){
        return false;
      }else{
        return true;
      }
    }
  }
}
//Selecciona una operacion
function selectOption(options) {
  return options[Math.floor(Math.random*options.length)];
}
