//Initialize ion library
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

var options = {
  ops: ['addition'],
  numberLimit: 10
};

var game;

$(document).ready(function(){
  var timer;
  $("#number-limit-range").on('change', function(){
    options.numberLimit = this.value;
    $("#number-limit").html(this.value);
  });

  $(".option-box").on('change', function(){
    // Checked and not in options? Add it!
    if (this.checked && !options.ops.includes(this.id)) {
      options.ops.push(this.id);
    }
    // Unchecked and inside options? Remove it!
    if (!this.checked && options.ops.includes(this.id)) {
      options.ops.splice(options.ops.lastIndexOf(this.id),1);
    }
  });

  $('#start').on('click', function(){
    $('#game-options').hide();
    $('#game-board').show();

    game = new TenSecondsMathGame(options);
    $('#question').html(game.newQuestion());
    $('#answer').on('keyup', checkAnswer);
    timer = setInterval(checkTimer, 500);
  });

  $("#restart").on('click', function(){
    $('#game-options').show();
    $('#game-board').hide();
    $("#restart").hide();
    $("#game-over-img").hide();
    $("#game-board div:nth-child(1)").show();
    $('#answer').removeAttr('disabled');
  });

  function checkAnswer(){
    if ($(this).val() !== '') {
      var answer = parseInt($(this).val());
      if (game.isCorrectAnswer(answer)) {
        correctAnswer();
      } else {
        $('#answer').addClass('answer-wrong');
      }
    }
  }

  function correctAnswer() {
    $('#answer').val('');
    $('#answer').removeClass('answer-wrong');
    $('#question').html(game.newQuestion());
    animateCoin();
  }

  function animateCoin() {
    var btc = $("#btc-reward");
    btc.show(400);
    btc.css('left', Math.floor(Math.random() * 80 + 10) + '%');
    btc.css('top',  Math.floor(Math.random() * 80 + 10) + '%');
    ion.sound.play("cash-register");
    setTimeout(function(){ btc.hide(1000); }, 1500);
  }

  function checkTimer(){
    if (game.secondsLeft >= 0){
      $('#clock').html(game.secondsLeft);
    } else {
      clearInterval(timer);
      $('#answer').attr('disabled', true);
      $("#restart").show();
      gameOver();
    }
  }

  function gameOver(){
    $("#game-board div:nth-child(1)").hide();
    $("#game-over-img").show();
  }
});
