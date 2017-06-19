// Use this file to write the interactions between your game and the user
var currentGame;
var remainingTime = 0;
var game = {
   answer:null,
   startGame:function () {
    document.getElementById('gameOptions').style.visibility = 'hidden';
    document.getElementById('gameBoard').style.display = 'block';
    var upperLimit = document.getElementById('numberLimit').value;
    var operators = [];
    if (document.getElementById('add').checked) {
        operators.push('+');
    }
    if (document.getElementById('substract').checked) {
        operators.push('-');
    }
    if (document.getElementById('multiply').checked) {
        operators.push('*');
    }
    if (document.getElementById('divide').checked) {
        operators.push('/');
    }
    var timeLeft = 0;// = currentGame !== undefined ? currentGame.timerCounter : 10;
    if (remainingTime === 0) {
        timeLeft = 10;
    } else {
        timeLeft += remainingTime + 10;
    }
    currentGame = new TenSecondsMathGame({ operations: operators, upperLimit: upperLimit});
    currentGame.generateQuestion();
    currentGame._clearTimer();
    currentGame.timerCounter = timeLeft;
    document.getElementById('timer').innerText = currentGame.timerCounter;
    currentGame._startTimer();
    document.getElementById('question').innerText = currentGame.questionObj.question;
    game.answer = currentGame.questionObj.answer;

   },

   verifyAnswer:function() {
       var userAnswer = document.getElementById('answer').value;
       if (userAnswer == game.answer) {
        document.getElementById('answer').removeAttribute("class");
        document.getElementById('answer').value = '';
        remainingTime = currentGame.timerCounter;
        game.startGame();
       } else {
           document.getElementById('answer').setAttribute("class", "wrong-answer");
       }
   },
   restartGame: function() {
        location.reload();
   }
};

function updateRange(val){
    document.getElementById('rangeValueInput').innerText=val;     
}

function updateAnswerBoxWhenError() {
    document.getElementById('answer').disabled = true;
    document.getElementById('secondsleft').style.visibility = 'hidden'; 
    document.getElementById('timer').style.visibility = 'hidden'; 
    document.getElementById('game-over').style.display = 'block'; 
    document.getElementById('problem').removeAttribute("class");
    document.getElementById('restart').style.display = 'block';  
}

//Initialize ion library
window.onload = function(){
  var startGameButton = document.getElementById('startGame');
  var answerInput = document.getElementById('answer');
  var restartButton = document.getElementById('restartButton');
  startGameButton.onclick = game.startGame;
  answerInput.onkeyup = game.verifyAnswer;
  restartButton.onclick = game.restartGame;
 
};
