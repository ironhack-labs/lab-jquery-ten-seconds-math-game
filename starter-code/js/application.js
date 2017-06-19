// Use this file to write the interactions between your game and the user

//Initialize ion library

var game;

window.onload = function(){
  game = new TenSecondsMathGame("+",20);
    game.chooseNumber();
    game.chooseOperator();
  var result = prompt(game.n1+game.operator+game.n2);
};
