// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
  var newGame = new TenSecondsMathGame();
  newGame.randomNumbers();
  newGame.getRandomOperator();
  newGame.calculator();
  var input = Number(prompt(newGame.operation + " = ? "));

  var i = 10;
  var intervalId = setInterval (function() {
    if (i > 0) {

    } else {
      alert("Time Out");
      clearInterval(intervalId);
    }
    i--;
  }, 1 * 1000);

  if (input == newGame.result){
    confirm("OK");
    i += 10;
  }
};
