// Use this file to write the interactions between your game and the user

//Initialize ion library


// window.onload = function(){
//
// };

var userOperator, game;

function getUserOperator(){
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

game = new TenSecondsMathGame(userOperator,10);
//Function to start first game, HTML not shown until start game button is clicked
game.newQuestion();
}

document.getElementById("start").onclick = function(){
  getUserOperator();
  document.getElementById("game-started").setAttribute("class", "display");
  document.getElementById("start-screen").setAttribute("class", "display-none");
};
