// Use this file to write the interactions between your game and the user

//Initialize ion library
var rangeInput = document.getElementById("rangeBarInput").value * 10;
var checksInputArray = [];
var finalChecksInput;
var randomNum1;
var randomNum2;
var calculationSymbol;
var answerCheck;
var inputAnswer;
var correctAnswer;
var timeleft;
var createFirstNumberSpan;
var createSecondNumberSpan;
var createInputBox;

//Get the input from the Range Input Bar.
function assignNumberInput () {
  rangeInput = document.getElementById("rangeBarInput").value * 10;
  document.getElementById("number").innerHTML = rangeInput;
}

//Returns an Array of the check boxes that are selected.
function selectorSelection() {
  var checksInput = document.getElementsByClassName("checks");
  checksInputArray = [];
  for (var i= 0; i < checksInput.length; i++) {
    if (checksInput[i].checked === true) {
      checksInputArray.push(checksInput[i].id);
    }
  }
  return checksInputArray;
}

/*
Calls the range bar function on load to get the correct input at sart.
*/
window.onload = function(){
  assignNumberInput();
};

/*
Launches the check of inputs and returns the value of one of them.
*/
function startGameInput () {
  selectorSelection();
  finalChecksInput = "";
  if (checksInputArray.length === 0) {
    finalChecksInput = "none";
    alert("Please Select One of the Operators");
  } else if (checksInputArray.length > 1) {
    finalChecksInput = checksInputArray[Math.floor((Math.random())*checksInputArray.length)];
  } else {
    finalChecksInput = checksInputArray[0];
  }
  return finalChecksInput;
}

/*
Checks which symbol is being requested and returns a string with it to be used in the creation.
*/
function checkSymbol () {
  startGameInput();
  calculationSymbol = "";
  if (finalChecksInput === "sum") {
    calculationSymbol = " + ";
  } else if (finalChecksInput === "minus"){
    calculationSymbol = " - ";
  } else if (finalChecksInput === "product") {
    calculationSymbol = " * ";
  } else if (finalChecksInput === "division") {
    calculationSymbol = " / ";
  }
  return calculationSymbol;
}

/*
Two Functions that check the answers and return wether is correct or wrong
*/
function answerChecking () {
  inputAnswer = document.getElementById("inputBox");
  correctAnswer = eval(randomNum1 + calculationSymbol + randomNum2);
  if (parseInt(inputAnswer.value) === correctAnswer) {
    answerCheck = true;
    timeleft += 2;
    randomNumGenerator1();
    randomNumGenerator2();
    createFirstNumberSpan.innerHTML = randomNum1;
    createSecondNumberSpan.innerHTML = randomNum2;
    createInputBox.value = "";
  } else {
    answerCheck = false;
  }
  return answerCheck;
}

function answerReaction () {
  inputAnswer = document.getElementById("inputBox");
  answerChecking();
  if (answerCheck === true) {
    inputAnswer.className = "greenBorder";
  } else if (answerCheck === false) {
    inputAnswer.className = "redBorder";
  }
  return answerCheck;
}

/*
Two options that generate the random numbers that wil be
used later on based on the input of the Range Bar
*/
function randomNumGenerator1 () {
  randomNum1 = Math.floor(Math.random() * rangeInput) + 1;
  return randomNum1;
}

function randomNumGenerator2 () {
  randomNum2 = Math.floor(Math.random() * rangeInput) + 1;
  return randomNum2;
}

/*
The function that creates new levels.
Launches the random number functions and the checking of the symbol input.
Also sets the timer and and reacts if it runs out.
*/
function levelCreation () {
  randomNumGenerator1();
  randomNumGenerator2();
  checkSymbol();
  timeleft = 10;
  var downloadTimer = setInterval(function(){
  timeleft--;
  countdown.textContent = timeleft;
  if(timeleft <= 0) {
      clearInterval(downloadTimer);
      return gameOver();
    }
  },1000);
   function gameOver(){
     countdown.textContent = "Game Over!";
     createInputBox.disabled = true;
     document.getElementById("secondsLeft").textContent ="";
     var createRestartButton = document.createElement("button");
     createRestartButton.type = "button";
     createRestartButton.className = "btn btn-primary";
     createRestartButton.innerHTML = "Restart";
     createRestartButton.onclick = showIt;
     createRestartButton.id = "restartButton";
     createSecondDiv.appendChild(createRestartButton);
  }

  var parent = document.getElementById("whiteBox");

  var createFirstDiv = document.createElement("div");
  createFirstDiv.className = "container newCenteredBox";
  createFirstDiv.id= "box1";
  var createCountdownSpan = document.createElement("span");
  createCountdownSpan.id = "countdown";
  createCountdownSpan.innerHTML = 10;
  var createEmptySpan = document.createElement("span");
  createEmptySpan.innerHTML = " seconds left...";
  createEmptySpan.id = "secondsLeft";
  createFirstDiv.appendChild(createCountdownSpan);
  createFirstDiv.appendChild(createEmptySpan);

  var createSecondDiv = document.createElement("div");
  createSecondDiv.className = "container newCenteredBox";
  createSecondDiv.id = "box2";
  var createFirstChildDiv = document.createElement("div");
  createFirstChildDiv.className = "container operation";
  createFirstNumberSpan = document.createElement("span");
  createFirstNumberSpan.id = "firstNumber";
  createFirstNumberSpan.innerHTML = randomNum1;
  createFirstChildDiv.appendChild(createFirstNumberSpan);
  var createOperatorSpan = document.createElement("span");
  createOperatorSpan.id = "operator";
  createOperatorSpan.innerHTML = calculationSymbol;
  createFirstChildDiv.appendChild(createOperatorSpan);
  createSecondNumberSpan = document.createElement("span");
  createSecondNumberSpan.id = "secondNumber";
  createSecondNumberSpan.innerHTML = randomNum2;
  createFirstChildDiv.appendChild(createSecondNumberSpan);
  var createSecondChildDiv = document.createElement("div");
  createSecondChildDiv.className = "container inputContainer";
  createInputBox = document.createElement("input");
  createInputBox.id = "inputBox";
  createInputBox.type = "number";
  createInputBox.placeholder = "answer";
  createInputBox.onchange = answerReaction;
  createInputBox.onKeyPress = answerReaction;
  createSecondChildDiv.appendChild(createInputBox);
  createSecondDiv.appendChild(createFirstChildDiv);
  createSecondDiv.appendChild(createSecondChildDiv);

  parent.appendChild(createFirstDiv);
  parent.appendChild(createSecondDiv);
}

/*
Two functions that first hide the main screen and the delete the game screen
created and shows the main screen again
*/
function hideIt(){
  document.getElementById("hideMe").style.display = 'none';
}

function showIt(event){
  document.getElementById("box1").remove();
  document.getElementById("box2").remove();
  document.getElementById("hideMe").style.display = 'block';
}

/*
This function gets executed on the Start Button click and kickstarts the level
creation if there is a correct input.
*/
function mathQuestionGenerator () {
  startGameInput();
  if (finalChecksInput === "none") {
    return false;
  } else {
    hideIt();
    levelCreation();
  }
}
