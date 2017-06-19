// Use this file to write the interactions between your game and the user

//Initialize ion library


var game;


window.onload = function(){
  game = new TenSecondsMathGame(["sum","sub","mult","div"], 10);
  var intervalId = setInterval(function() {
    if (counter>0) {
      console.log(counter);
    } else {
      console.log("Game Over");
      clearInterval(intervalId);
    }
    counter--;
  }, 1000);
};


//var addSeconds = function () {

//}
