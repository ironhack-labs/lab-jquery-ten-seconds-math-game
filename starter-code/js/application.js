// Use this file to write the interactions between your game and the user
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
    newGame = new TenSecondsMathGame({ operations: operators, upperLimit: upperLimit});
    newGame.generateQuestion();
    newGame._clearTimer();
    document.getElementById('timer').innerText = self.timerCounter;
    document.getElementById('timer').innerText = 10;
    newGame._startTimer();
    document.getElementById('question').innerText = newGame.questionObj.question;
    game.answer = newGame.questionObj.answer;

   },

   verifyAnswer:function() {
       var userAnswer = document.getElementById('answer').value;
       console.log('useranswer ' + userAnswer);
       console.log('answer ' + game.answer);
       if (userAnswer == game.answer) {
        document.getElementById('answer').removeAttribute("class");
        document.getElementById('answer').value = '';
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

//Initialize ion library
window.onload = function(){
  var startGameButton = document.getElementById('startGame');
  var answerInput = document.getElementById('answer');
  var restartButton = document.getElementById('restartButton');
  startGameButton.onclick = game.startGame;
  answerInput.onkeyup = game.verifyAnswer;
  restartButton.onclick = game.restartGame;
 
};
