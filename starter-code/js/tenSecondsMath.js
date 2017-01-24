// Use this file to write the logic of your game, the needed attrs and functions

var userOperation, userTopLimit;

// New game constructor

function TenSecondsMathGame(operation, topLimit) {
    this.userOperation = operation;
    this.userTopLimit = topLimit;
    this.newQuestion = questionGen;
    this.isCorrectAnswer = isCorrectAnswer;
}

var randomGen, answer;

function questionGen() {

  // Returns a random integer between [1..numberLimit]

  randomGen = function() {
    return Math.floor(Math.random() * (game.userTopLimit - 1)) +1;
  };

  // Returns an object with {question, answer}

  var random1 = randomGen();
  var random2 = randomGen();

//Reruns random number generators if difference is between 0 and 3

  var reRunRandom = function(){
    while((random1 - random2 < 3 &&  random1 - random2 >= 0) || (random2 - random1 < 3 && random2 - random1 >= 0)){
    random1 = randomGen();
    random2 = randomGen();
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

//HTML section

//Shows which operator has been selected in HTML

document.getElementById("operation").innerHTML = this.userOperation;

//Switched HTML numbers depending on which is bigger

  if (random1 > random2 || game.userOperation == "/"){
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = random2;
  } else if (random2 < random1) {
    document.getElementById("random1").innerHTML = random2;
    document.getElementById("random2").innerHTML = random1;
  }


}


//function to run new game

function newGame() {
  random1 = randomGen();
  random2 = randomGen();
  game.newQuestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").style.borderColor = "inherit";
}

//function to check if correct answer - runs new game function if answer is correct

function isCorrectAnswer(userAnswer) {
  console.log(userAnswer,answer);
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

//code to check user answer - run when user submit button is pressed

function checkAnswer() {
  var userAnswer = document.getElementById('answer').value;
  isCorrectAnswer(userAnswer);
}
