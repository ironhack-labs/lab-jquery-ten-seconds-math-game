// Use this file to write the interactions between your game and the user

//Initialize ion library

window.onload = function(){
};

var numberLimit = window.prompt("Enter number limit");
var option = window.prompt("Enter type of operation (+, -, / or *)");

var game = new TenSecondsMathGame (  option, numberLimit);
game.newQuestion();
