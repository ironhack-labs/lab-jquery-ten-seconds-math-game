// Use this file to write the interactions between your game and the user

//Initialize ion library


function newInstance(numberLimit){
  var game = new TenSecondsMathGame(numberLimit);
  game.questionGenerator();
}

window.onload = function(){
  var startGame = document.querySelector('#start-game');
  startGame.onclick = function () {
    newInstance(10);
  };
};
