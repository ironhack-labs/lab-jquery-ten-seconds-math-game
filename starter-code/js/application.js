// Use this file to write the interactions between your game and the user

//Initialize ion library
var game;

window.onload = function(){
  game = new TenSecondsMathGame({ops:['-','+','*'], numberLimit: 50});
  game.newQuestion();
};
