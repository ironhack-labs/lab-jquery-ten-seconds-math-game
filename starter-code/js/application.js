window.onload = function(){

  var generatedObject;
  var game;

  var startButton = document.getElementById("start-button");
  var buttons = document.querySelectorAll('.btn');

  var answerInput = document.querySelector('.answer');
  var restart = document.querySelector('.restart');

  answerInput.addEventListener('keypress', evaluateAnswer);
  restart.addEventListener('click', restartGame);

  buttons.forEach(function(button) {
    button.addEventListener("click", makeButtonActive);
  });

  startButton.onclick = toggleElement;
};

function toggleElement() {

  var hideGameContainer = document.getElementById("game-container");
  hideGameContainer.setAttribute("class", "hide");
  var gameBoard = document.getElementById("game-board-container");
  gameBoard.setAttribute("class", "make-visible");

  initializeGame();

}

function initializeGame() {
  var gameObject = {};
  var activeButton = document.getElementsByClassName('active');
  var upperlimit = document.getElementById('number-limit').innerHTML;

  var operation = getOperatorHelper(activeButton);

  gameObject['operation'] = operation;
  gameObject['upperlimit'] = parseInt(upperlimit);

  game = new TenSecondsMathGame(gameObject);

  generatedObject = questionGenerator(game.operation, game.upperlimit);
  renderQuestion(generatedObject);
   _startTimer();

}

function renderQuestion(object) {
  var question = object.question;
  document.getElementById('game-question').innerHTML = question;
}

function evaluateAnswer(e) {
  if (e.keyCode === 13) {
    var answer = isCorrectAnswer(generatedObject, e.target.value);

    if (!answer) {
      e.target.style.backgroundColor = 'red';
    } else {
      generatedObject = questionGenerator(game.operation, game.upperlimit);
      e.target.style.backgroundColor = 'limegreen';
      renderQuestion(generatedObject);
      updateTimer();
    }
  }
}

function getOperatorHelper(activeButton) {
  if (activeButton[0].id === 'add') {
    return '+';
  }
  if (activeButton[0].id === 'subtract') {
    return '-';
  }
  if (activeButton[0].id === 'multiply') {
    return '*';
  }
  if (activeButton[0].id === 'divide') {
    return '/';
  }
}

function makeButtonActive() {
  var buttons = document.querySelectorAll('.btn');

  buttons.forEach(function(button){
    button.classList.remove('active');
  });

  this.classList.add('active');
}

function restartGame() {
  location.reload();
}
