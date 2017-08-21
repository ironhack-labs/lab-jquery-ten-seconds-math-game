// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
  var time = 10;
  var operation = "add";
  //TenSecondsMathGame();
  var game = new TenSecondsMathGame(operation, time);


  var startGame = document.getElementById('start');

  startGame.onclick = function(){
    game.control = true;
    game.question();

    var enter = document.getElementById('restart');
    enter.onclick = function(){
      b = document.getElementById('answer').value;
      game.compareResult(game.sum, b);

    };


    // Counter
    var timeoutId = setInterval(function(){
      if(game.count > 0){
        game.timer();
        console.log(game.count);
      }else{
        clearInterval(timeoutId);
        game.control = false;
      }
    }, 1000);

  };

};
