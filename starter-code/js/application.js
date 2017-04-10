// Use this file to write the interactions between your game and the user

//Initialize ion library


function startGame(operationOptions, numberLimitSelected){

  var game = TenSecondsMathGame({ops:operationOptions , numberLimit: numberLimitSelected});

  document.getElementsByClassName("game-options-number-limit")[0].style.display = "none";

  document.getElementsByClassName("game-options-operation")[0].style.display = "none";

  document.getElementsByClassName("game-start")[0].style.display = "none";

  document.getElementsByClassName("game-board")[0].style.display = "block";

  game.newQuestion();

}


window.onload = function(){
  var startGameButton = document.getElementById('btn-start');
  var addCheckBox = document.getElementById('add');
  var substractCheckBox = document.getElementById('substract');
  var multiplyCheckBox = document.getElementById('multiply');
  var divideCheckBox = document.getElementById('divide');
  var operationOptions = [];

  addCheckBox = document.getElementById('add').onclick = function() {
    if ( this.checked ) {
      operationOptions.push('add');
    } else {
      var arrayTemp=[];
      operationOptions.forEach(function(name){
        if(name!='add')
        {
          arrayTemp.push(name);
        }
      });
      operationOptions = arrayTemp;
    }
  };

  substractCheckBox = document.getElementById('substract').onclick = function() {
    if ( this.checked ) {
      operationOptions.push('substract');
    } else {
      var arrayTemp=[];
      operationOptions.forEach(function(name){
        if(name!='substract')
        {
          arrayTemp.push(name);
        }
      });
      operationOptions = arrayTemp;
    }
  };

  multiplyCheckBox = document.getElementById('multiply').onclick = function() {
    if ( this.checked ) {
      operationOptions.push('multiply');
    } else {
      var arrayTemp=[];
      operationOptions.forEach(function(name){
        if(name!='multiply')
        {
          arrayTemp.push(name);
        }
      });
      operationOptions = arrayTemp;
    }
  };

  divideCheckBox = document.getElementById('divide').onclick = function() {
    if ( this.checked ) {
      operationOptions.push('divide');
    } else {
      var arrayTemp=[];
      operationOptions.forEach(function(name){
        if(name!='divide')
        {
          arrayTemp.push(name);
        }
      });
      operationOptions = arrayTemp;
    }
  };


  var numberLimit = document.getElementById('input-number-limit');
  var numberLimitDisplay = document.getElementById('number-limit-display');

  numberLimitDisplay.innerHTML = numberLimit.value;

  numberLimit.addEventListener('input',function(){
    numberLimitDisplay.innerHTML = numberLimit.value;
  }, false);

  startGameButton.onclick = startGame(operationOptions, numberLimit.value);



};
