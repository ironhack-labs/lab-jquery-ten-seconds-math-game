// Use this file to write the interactions between your game and the user

//Initialize ion library

function showGame() {
 var destination = $('#position-hook').offset();
  $('#question-div').css({top: destination.top, left: destination.left});
  document.getElementById("question-div").style.visibility="visible";
  document.getElementById("options-div").style.visibility="hidden";
 
  showQuestion()
  document.getElementById("time-left").textContent = game.timeLeft;
}

function showQuestion() {
  document.getElementById("question").textContent = game.question.message;
}

function timerTick() {

  document.getElementById("time-left").textContent = game.timeLeft;
}

function startGame() {
  
  var operations = [];
  if(document.getElementById("check-add").checked) operations.push("add");
  if(document.getElementById("check-sub").checked) operations.push("substract");
  if(document.getElementById("check-mul").checked) operations.push("multiply");
  if(document.getElementById("check-div").checked) operations.push("divide");
  
  var limit = document.getElementById("number-limit").textContent;
  console.log(limit);
  game = new TenSecondsMathGame({ops:operations, numberLimit:limit, gameOverCb:gameOver, timerTickCb:timerTick});
  
  game.newQuestion();

  showGame();

 
}
function gameOver() {
  var destination = $('#position-hook').offset();
  $('#game-over-div').css({top: destination.top, left: destination.left});
  document.getElementById("game-over-div").style.visibility="visible";
  document.getElementById("question-div").style.visibility="hidden";
}

function showOptions() {
  document.getElementById("game-over-div").style.visibility="hidden";
  document.getElementById("options-div").style.visibility="visible";
}

function checkAnswer(userAnswer) {
  if( game.isCorrectAnswer(userAnswer) ) {
    document.getElementById("answer-result").textContent = "Great!"
    game.newQuestion();
    showQuestion()
  } else {
    document.getElementById("answer-result").textContent = "Wrooong!"
  }
  
  document.getElementById("user-answer").value="";
  
  timerTick();
  setTimeout(function() {
      document.getElementById("answer-result").textContent="";
  }, 1000);
}

var game, timer, timeBonus=10;

window.onload = function(){

  document.getElementById("start-button").onclick=startGame;
  document.getElementById("options-button").onclick=showOptions;

  document.getElementById("user-answer").onkeypress = function(e) {
    if(e.keyCode===13) {
      checkAnswer(document.getElementById("user-answer").value);
    }
  }
  

  var slider = new Slider('#number-limit-input', {
    tooltip:"hide"
  });



  slider.on("slide", function(sliderValue) {
    document.getElementById("number-limit").textContent = sliderValue;
  });
}