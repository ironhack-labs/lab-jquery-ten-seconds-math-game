// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
  var game = new TenSecondsMathGame(10, "suma");

  game.newQuestion();
  game.checkOperation();
  game.isCorrectAnswer();
  game.counter();



  var timeoutId = setTimeOut(function(){
    game.counter();
    if(game.counter > 0) {
      game.counter() -1;

    } else {
      clearInterval(timeoutId);
    }

  }, 1000);

};
