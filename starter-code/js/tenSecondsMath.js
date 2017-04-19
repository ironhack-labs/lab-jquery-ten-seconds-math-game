// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {
  var radioButtons = document.getElementsByName('operation');
  var gameOption;
  for(var i = 0; i < radioButtons.length; i++){
    if(radioButtons[i].checked){
        gameOption = radioButtons[i].value;
        playGame(gameOption);
    }
  }
};

// Returns a random integer between [1..numberLimit]
function randomInteger() {
  var inputNumber = document.getElementById('rangeInputID').value;
  var integer = (Math.floor(Math.random()*inputNumber))+1;
  return integer;

}

function playGame(gameOption) {
  startCounter(gameOption);
}

// function createObject() {
//
// }

function createQuestion(gameOption) {
  var tmp;
  var num1 = randomInteger();
  var num2 = randomInteger();
// Switch to check what game is selected.
  switch(gameOption) {
      case "add":
          question = num1 + " + " + num2;
          answer = num1 + num2;
          console.log(question);
          break;
      case "subtract":
          question = num1 + " - " + num2;
          answer = num1 - num2;
          break;
      case "multiply":
          question = num1 + " * " + num2;
          answer = num1 * num2;
          break;
      case "divide":
          question = num1 + " / " + num2;
          answer = num1 / num2;
          break;
  }
    return {question: question, answer: parseInt(answer)};
}

function evaluateKey() {

}

// Function to create the Overlay for the beginning of the game
function createOverlay() {
  var overlay = document.createElement('div');
  overlay.setAttribute('class', 'card game');
  overlay.setAttribute('id', 'overlay');
  overlay.style.position = 'absolute';
  overlay.style.zIndex = '1';
  overlay.style.width = '400px';
  overlay.style.height = '510px';
  overlay.style.top = '-64px';
  overlay.style.left = '-20px';
  overlay.style.bottom = '0';
  overlay.style.right = '0';
  overlay.style.paddingTop = '50px';
  return overlay;
}

// Function to create the Restart Button and set the styling and attributes
function createBtnRestart() {
  var btnRestart = document.createElement('button');
  btnRestart.setAttribute('class','btn btn-primary');
  btnRestart.style.height = '50px';
  btnRestart.setAttribute('id','btnRestart');
  btnRestart.innerText = 'Restart';
  btnRestart.style.fontSize = '26px';
  btnRestart.style.marginTop = '50px';
  return btnRestart;
}

// Function to create the Timer Display and set the styling and attributes
function createTimerDisplay() {
  var timerDisplay = document.createElement('div');
  timerDisplay.setAttribute('id','theTimer');
  timerDisplay.style.color = 'red';
  timerDisplay.style.fontSize = '30px';
  timerDisplay.style.paddingTop = '15px';
  timerDisplay.style.fontWeight = 'bolder';
  return timerDisplay;
}

// Function to create the Answer Input Field and set the styling and attributes
function createInputField() {
  var inputAnswer = document.createElement('input');
  inputAnswer.setAttribute('id','inputAnswer');
  inputAnswer.setAttribute('placeholder','answer');
  inputAnswer.style.width = "160px";
  return inputAnswer;
}

//Function to clear the display after a gameover
function removeElements(inputAnswer,questionDiv,timerLabel) {
  inputAnswer.remove(inputAnswer);
  questionDiv.remove(inputAnswer);
  timerLabel.remove(timerLabel);
}

function startCounter(gameOption, num1, num2) {
  var overlay = createOverlay();
  document.getElementById('parentOfCard').appendChild(overlay);
  var counter;
  var temporary = createQuestion(gameOption);
  var question = temporary.question; // Create question
  var answer = temporary.answer; // Create answer for comparison reasons
  var questionDiv = document.createElement('div');
  questionDiv.style.id = 'question';
  questionDiv.innerText = String(question);
  // console.log(questionDiv); JUST FOR TEST
  var inputAnswer = createInputField();
  document.getElementById('overlay').appendChild(questionDiv);
  document.getElementById('overlay').appendChild(inputAnswer);

// If a correct answer is entered and Enter button pressed, make sound, and add 10 seconds to timer. Then arrange for new question.
  inputAnswer.onkeypress = function (e) {
    if (e.keyCode === 13) {
        if (parseInt(answer) === parseInt(inputAnswer.value)) {
          var audio = new Audio('./audios/cash-register.mp3');
          audio.play();
          // console.log("success"); // JUST TEST
          counter += 10;
          var tempHolder = createQuestion(gameOption);
          question = tempHolder.question;
          answer = tempHolder.answer;
          // console.log(question); // JUST TEST
          questionDiv.innerText = String(question);
          inputAnswer.value = null;
        }
      }

  };
  var timerDisplay = createTimerDisplay();
  var timerLabel = document.createElement('div');
  timerLabel.innerText = "seconds remaining";
  timerLabel.setAttribute('id','timerLabel');
  document.getElementById('overlay').appendChild(timerDisplay);
  document.getElementById('theTimer').innerHTML = 10;
  document.getElementById('overlay').appendChild(timerLabel);

  var btn = document.getElementById("btnStart");
  btn.disabled = true;
  counter = 10;
  var callbackFunction = function () {
    console.log(counter);
    timeoutId = setTimeout(callbackFunction, 1000);
    counter -= 1;
    document.getElementById('theTimer').innerHTML = counter;

// If timer counter reaches zero, then clear timer and gameover.
    if (counter === 0) {
      clearTimeout(timeoutId);
      btn.disabled = false;
      removeElements(inputAnswer,questionDiv,timerLabel);
      document.getElementById('theTimer').innerHTML = "<img width=250px src=\"./images/gameover.jpg\" alt=\"\">";
      var btnRestart = createBtnRestart();
      document.getElementById('overlay').appendChild(btnRestart);
      console.log(document.getElementById('theTimer').innerHTML);

// Set event listening on restart button and remove the overlay if clicked to allow a new game.
      var restartGameButton = document.getElementById('btnRestart');
      restartGameButton.onclick = function (e) {
        overlay.remove(overlay);
      };
    }
  };

  var timeoutId = setTimeout(callbackFunction, 1000);

}
