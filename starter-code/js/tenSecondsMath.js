// Use this file to write the logic of your game, the needed attrs and functions
var op = [];
var operation;
var max;

function init() {
  operation = prompt("Select one type of operation: +, -, * or /");
  var firstAnswer;
  if (operation != "+" && operation != "-" && operation != "*" && operation != "/" ){
    firstAnswer = false;
  } else { firstAnswer = true;
    op.push(operation);
    return;
  }

    while (firstAnswer === false) {
      prompt("Selection must be + , - , * , /");
      if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" ){
        firstAnswer = false;
      } else { firstAnswer = true;
        op.push(operation);
      }
}}

function setMax(){
  max = prompt ("Tipe the maximun number");
}

function generateNumbers(){
  var x = Math.floor(Math.random * max);
  var y = Math.floor(Math.random * max);
  return [x,y];
}

function getRandomOperator (){
  var
}

/*function addOperations (){
  var continueAnswer = true;
  while (continueAnswer === true) {ç

        var continueAnswer = prompt("Do you want another operation?");
    if (continueAnswer === false) {
      return;
    }
}
}*/

//var TenSecondsMathGame = function(operationsArray, limit) {


    // Returns a random integer between [1..numberLimit]


    // Returns an object with {question, answer}


    // Checks a user answer
