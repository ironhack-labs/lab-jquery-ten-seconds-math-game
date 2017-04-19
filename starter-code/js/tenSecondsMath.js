<<<<<<< HEAD
function Game(operators, numberLimit) {
  this.operator = 'addition';
  this.numberLimit = numberLimit;
  this.answer = -120000;
  this.won = false;
}

Game.prototype.randomNum = function (numberLimit) {
  return Math.floor(Math.random() * (numberLimit + 1));
};

Game.prototype.validOperation = function (string) {
  if (string === 'addition'){
    return true;
  }
  return false;
};

//Ask for game settings
var operatorInput;
while(!Game.prototype.validOperation(operatorInput)){
  operatorInput = prompt('What\'s operator do you want?');

  if (operatorInput == "addition"){
    break;
  }
}

var numLimitInput;
while(isNaN(numLimitInput)){
  numLimitInput = prompt('What\'s number do you want?');
}

numLimitInput = parseInt(numLimitInput);


//Create our Game object
var newGame = new Game(operatorInput, numLimitInput);

//Make out question
function makeQuestion(game) {

  let n1 = game.randomNum(game.numberLimit);
  let n2 = game.randomNum(game.numberLimit);

  let operator = game.operator;

  switch(operator) {
    case 'addition':
    game.answer = n1 + n2;
      return 'What is ' + n1 + ' + ' +  n2 + '?';
  }
  return "Error";
}




//Play the game
var response = "";
while(newGame.won === false){
  response = prompt(makeQuestion(newGame));

  if (response == newGame.answer || response == 'stop') {
    newGame.won = true;
    console.log("You did it! You bastard!");
  }
}
=======
// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {

};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
>>>>>>> ironhack/master
