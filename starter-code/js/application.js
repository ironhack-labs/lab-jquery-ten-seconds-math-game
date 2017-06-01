// Use this file to write the interactions between your game and the user

//Initialize ion library

$(document).ready(function(){

  $('.operator').on("click", function(){
    var maxNum = $('.maxNums').val();
    var operation = $(this).val()

    if (maxNum > 1){
      var game = new TenSecondsMathGame(operation, maxNum);
      game.printQuestion();


      $('.send').on("click", function(){
        game.checkAnswer();
      });

      var counting = setInterval(function(){
        game.decreaseCounter();

        $('.progress-bar').css("width", game.counter + "%");
        $('.progress-bar').text(game.counter + "%");

        game.checkCounter();

      },1000);

    }else {
      $(".maxNums").addClass("error");
    }
  });





});
