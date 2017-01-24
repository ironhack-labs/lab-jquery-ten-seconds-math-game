// New game constructor

function TenSecondsMathGame(operation, topLimit) {
    this.userOperation = operation;
    this.userTopLimit = topLimit;
    this.newQuestion = questionGen;
    this.isCorrectAnswer = isCorrectAnswer;
}

//Generates new game, run in function newGame();

var randomGen, answer;

function questionGen() {
  //Generates random numbers for game
  var random1, random2;
  randomGen = function() {
    random1 = Math.floor(Math.random() * (game.userTopLimit - 1)) +1;
    random2 = Math.floor(Math.random() * (game.userTopLimit - 1)) +1;
  };

  randomGen();

//Reruns random number generators if difference is between 0 and 3
  var reRunRandom = function(){
    while((random1 - random2 < 3 &&  random1 - random2 >= 0) || (random2 - random1 < 3 && random2 - random1 >= 0)){
    randomGen();
    }
  };

  //Generates correct answer to question generated

  switch(this.userOperation) {
    case '+':
      reRunRandom();
      answer = random1 + random2;
      break;
    case '-':
      reRunRandom();
      if(random1 < random2){
          answer = random2 - random1;
      } else {
        answer = random1 - random2;
      }
      break;
    case '*':
      reRunRandom();
      answer = random1 * random2;
      break;
    case '/':
      answer = random1 / random2;
      break;

  }

  //Shows which operator has been selected in HTML

  document.getElementById("operation").innerHTML = this.userOperation;

  //Switched HTML numbers depending on which is bigger

  if (random1 > random2 || game.userOperation == "/"){
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = random2;
  } else if (random2 > random1) {
    document.getElementById("random1").innerHTML = random2;
    document.getElementById("random2").innerHTML = random1;
  }
}


//function to check if correct answer - runs new game function if answer is correct

function isCorrectAnswer(userAnswer) {
  if (userAnswer == answer) {
    console.log("You are correct sir.");
    newGame();
  }
  else if (userAnswer != answer){
    document.getElementById("answer").style.borderColor = "red";
    runAgain = 0;
    console.log("Nope, guess again.");
  }

}

//function to run new game, gets run within checkAnswer(), which is run when user submits answer;

function newGame() {
  game.newQuestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").style.borderColor = "inherit";
}
