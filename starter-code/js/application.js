
function getOperation(checkBox){
  if(checkBox.length === 1){
    return checkBox[0].getAttribute("id");
  }
  for(var i = 0;i<checkBox.length;i++){
    return checkBox[Math.floor(Math.random()*checkBox.length)].getAttribute("id");
  }
}


window.onload = function(){


  var startButton =  document.getElementById("startButton");
  var game;
  startButton.onclick = function(){
    var checkBoxElements = document.getElementsByName("operation");
    var arrayCheckBox = [];
    for(var i = 0;i<checkBoxElements.length;i++){
      if(checkBoxElements[i].checked === true){
        arrayCheckBox.push(checkBoxElements[i]);
      }
    }
    var toHide = document.getElementById("to-hide");
    toHide = toHide.style.display = 'none';

    var toShow = document.getElementById("init-game");
    toShow = toShow.style.display = 'block';


    var imageGameOver = document.getElementById('game-over');
    imageGameOver = imageGameOver.style.display = 'none';

    startButton.style.display = "none";


    var operation = getOperation(arrayCheckBox);
    var numberLimit = document.getElementById("amount").textContent;
    game = new TenSecondsMathGame({operation: operation,numberLimit:numberLimit});
    //console.log(game.newQuestion(operation));
  //  console.log(game.solution);

  game.startGame(10);

  };


};
