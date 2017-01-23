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

function assignNumberInput () {
  rangeInput = document.getElementById("rangeBarInput").value * 10;
  document.getElementById("number").innerHTML = rangeInput;
}

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

function randomNumGenerator1 () {
  randomNum1 = Math.floor(Math.random() * rangeInput) + 1;
  return randomNum1;
}

function randomNumGenerator2 () {
  randomNum2 = Math.floor(Math.random() * rangeInput) + 1;
  return randomNum2;
}

function hideIt(){
  document.getElementById("hideMe").style.display = 'none';
}

function showIt(event){

  document.getElementById("box1").remove();
  document.getElementById("box2").remove();
  document.getElementById("hideMe").style.display = 'block';

}

var deleteItem = function (event) {
  event.preventDefault();
  event.currentTarget.parentElement.parentNode.remove();
};

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

function mathQuestionGenerator () {
  startGameInput();
  if (finalChecksInput === "none") {
    return false;
  } else {
    hideIt();
    levelCreation();
  }
}

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

function checkSymbol () {
  startGameInput();
  calculationSymbol = "";
  if (finalChecksInput === "sum") {
    calculationSymbol = " + ";
  } else if (finalChecksInput === "minus"){
    calculationSymbol = " - ";
  } else if (finalChecksInput === "product") {
    calculationSymbol = " x ";
  } else if (finalChecksInput === "division") {
    calculationSymbol = " % ";
  }
  return calculationSymbol;
}

window.onload = function(){
  assignNumberInput();
};
