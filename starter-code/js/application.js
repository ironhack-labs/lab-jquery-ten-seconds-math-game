var userOperator, userTopLimit = 10, game;

function startGame(){
  var numberOfCheckboxes = document.getElementsByClassName("userOperator").length;
  var checkboxes = document.getElementsByClassName("userOperator");

  //Assign operator according to button checked - when start button is clicked.

  for (var i=0; i < numberOfCheckboxes; i++){
    if(checkboxes[i].checked == true) {
      switch(checkboxes[i].id){
        case "addCheck":
          userOperator = "+";
          break;
        case "minusCheck":
          userOperator = "-";
          break;
        case "multCheck":
          userOperator = "*";
          break;
        case "divideCheck":
          userOperator = "/";
          break;
      }
    }
  }

  //Assign limit based on what user has selected on sliding scale

//Generate new game based on user operator and limit selected

game = new TenSecondsMathGame(userOperator,userTopLimit);
//Function to start first game, HTML not shown until start game button is clicked
game.newQuestion();
}

//USER ACTION SECTION

//When start button is clicked
document.getElementById("start").onclick = function go(){
  startGame();
  //switch screens from start-screen to game-screen
  document.getElementById("game-started").setAttribute("class", "display");
  document.getElementById("start-screen").setAttribute("class", "display-none");
};

//When slider is moved

document.getElementById("slider").oninput = function updateLimitHtml(){
  userTopLimit = this.value;
  document.getElementById("limit").innerHTML = this.value;
}

//When submit button is clicked

document.getElementById("submit").onclick = function checkAnswer() {
  var userAnswer = document.getElementById('answer').value;
  isCorrectAnswer(userAnswer);
};
