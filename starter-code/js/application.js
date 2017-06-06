
ion.sound({
  sounds: [
    {
      name: "cash-register"
    }
  ],
  volume: 1,
  path: "audios/",
  preload: true
});

function getSettings(rangeInput){

    var checkboxes = $('[type=checkbox]');

    var checkBoxTrue=[];
    Array.from(checkboxes).forEach(function( elem ){

        if(elem.checked === true){
          checkBoxTrue.push(elem);

        }

    });
    if ((checkBoxTrue.length > 1) || (checkBoxTrue.length < 1)){
      var myOperator = checkboxes[Math.floor(Math.random() * checkboxes.length)].id;

    }
    else if(checkBoxTrue.length = 1){
      var myOperator = checkBoxTrue[0].id;
    }
    TenSecondsMathGame.makeMathChallenge(myOperator, rangeInput, function(mathTask){

        $('#gamesettings').hide();
        $('#math-task').text(mathTask);
        $('#gogame').show();

    });
}

function startClock(){
  var CountDown = TenSecondsMathGame.timeLeft + 10;
  TenSecondsMathGame._startTimer(CountDown);
}


function displayCountdown(CountDown){
  var timerWrapper = document.getElementById('timerwrapper');
  var timerElement = document.getElementById('timer');

  if(CountDown <= 0){
      $('#gameover-img').show();
      timerWrapper.style.display = "none";
      document.getElementById('userinput').disabled = true;
      document.getElementById('restart').style.display = "block";
  }
  else if(CountDown > 0){

    timerElement.innerHTML=CountDown;
    timerWrapper.style.display = "block";

  }
}

function reStartGame(){
  $('#gogame').hide();
  $('#gameover-img').hide();
  $('#gamesettings').show();
  $('#restart').hide();
  document.getElementById('userinput').value = "";
  document.getElementById('userinput').disabled = false;

}

function hideCoin(){
  setTimeout(function(){
    document.getElementById('gamecontainer').style.visibility="hidden";
  },1000);
}


function checkUserAnswer(userAnswer){

  TenSecondsMathGame.isCorrectAnswer(userAnswer, function(userAnswer){
      if(userAnswer){

        var positionx = Math.floor(Math.random() * 350) + "px";
        var positiony = Math.floor(Math.random() * 50) + "px";
        document.getElementById('coin-img').style.position="absolute";
        document.getElementById('coin-img').style.left = positionx;
        document.getElementById('coin-img').style.top = positiony;
        document.getElementById('gamecontainer').style.visibility="visible";

        ion.sound.play("cash-register");
        document.getElementById('userinput').value="";
        hideCoin();
        TenSecondsMathGame.makeMathChallenge("", "", function(mathTask){
          $('#math-task').text(mathTask);
          clearInterval(interval);
          startClock();
        });
      }else if(!userAnswer){
        $('#gameover-img').show();
        var timerWrapper = document.getElementById('timerwrapper');
        clearInterval(interval);
        timerWrapper.style.display = "none";
        document.getElementById('userinput').disabled = true;
        document.getElementById('restart').style.display = "block";
      }
    });

}

document.addEventListener("DOMContentLoaded", function(event){
  var rangeInput = $('#range-value').val();
  $('#userinput').on('blur', function(){
      var userAnswer = $('#userinput').val();
      checkUserAnswer(userAnswer);
  });

  $('#range-value').on('change', function(){
    rangeInput = $('#range-value').val();
    $('#current-range-value').text(rangeInput);
  });
  $('#current-range-value').text(rangeInput);
  $('#startgame').on('click', function(){
      getSettings(rangeInput);
      startClock();
  });
  $('#restart').on('click', function(){
      reStartGame();
  })

});
