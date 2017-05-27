var game;
var timer;
var options;
var limit;
var rounds = 0;


window.onload = function(){
  $('.answer').hide();
  $('#coin').hide();

  ion.sound({
    sounds: [
      {
        name: "cash-register"
      }
    ],
    volume: 1,
    path: "./audios/",
    preload: true
  });

};

$("#startGame").on('click', function(){
  options = $('input[type=checkbox]:checked').map(function(_, el) {
    return $(el).val();
  }).get();

  if(options.length !== 0 ) {
    showGame();
    limit = $('input[type=range]').val();
    game = new TenSecondsMathGame(options,limit);
    game.setQuestion();
    $('.answer .label').text(game.question);
    $('#timer').text(10);
    interval(10,1);
    $('#rounds').text(0);
    console.log("Correcto: " + game.correctAnswer);
  }

});

$('#answerInput').on('keyup', function(){
  if( $(this).val() == game.correctAnswer){
    game = new TenSecondsMathGame(options,limit);
    game.setQuestion();
    $('.answer .label').text(game.question);
    $('#answerInput').val("");
    clearInterval(timer);
    $('#timer').text(10);
    interval(10,1);
    rounds++;
    $('#rounds').text(rounds);
    console.log("Correcto: " + game.correctAnswer);
    ion.sound.play("cash-register");

    setInterval($('#coin').show(""), 1000);
    $('#coin').hide("");
  }
});

$('input[type=range]').on('change', function(){
  $('.valueRange').text($(this).val());
});

$('#restart').on('click',function() {
  restartGame();
});

function interval(time,i){
    var counter=time;
    timer = setInterval(function(){
      if(counter==0) {
          clearInterval(timer);
          $('#timer').text("");
          $('#timer').append('<img src="./images/gameover.jpg" width="200" alt="gameover">');
          $('#restart').show("");
          $('#answerInput').hide("");

      } else {
          counter=counter-i;
          $('#timer').text(counter);
      }
    }, 1000);
}

function showGame(){
  $('#restart').hide("");
  $('#answerInput').show("");
  $('.answer').show("");
  $('.typeOp').hide("");
}

function restartGame(){
  $('#answerInput').show("");
  $('#timer').text("");
  $('.answer').hide("");
  $('.typeOp').show("");
}
