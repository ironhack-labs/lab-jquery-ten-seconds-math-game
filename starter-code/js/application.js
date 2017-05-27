// Use this file to write the interactions between your game and the user

//Initialize ion library

var newGame;
window.onload = function(){
  var operator = [];
  var value = 10;
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

  $("#range").ionRangeSlider({
      min: 10,
      max: 534,
      from: 10
  });
  $("#range").on("change", function () {
    //var $this = $(this),
        value = $(this).prop("value");

    console.log(" valor" + value);
    return value;
});
$("#startGame").prop( "disabled", true );
  $('input:checkbox').change(
      function(){
          if ($(this).is(':checked')) {
            operator.push($(this).val());
            //console.log($(this).val());
            $("#startGame").removeClass("disabled");
            $("#startGame").prop( "disabled", false );
          } else {
            $("#startGame").addClass("disabled");
            $("#startGame").prop( "disabled", true );
          }


      });

      $('#startGame').click(
          function(){
            console.log("operador" + operator);
            console.log("valor start" + value);
               newGame = new TenSecondsMathGame(operator, value);
               //console.log(newGame);
               $(".options").hide();
               $(".game-board").show();

              return newGame;

          });

          $( "#solution" ).keyup(function() {
            $(this).val();
            console.log("test" + $(this).val());
            return newGame.isCorrectAnswer($(this).val());
        });
        $('#restart').click(
            function(){
              $(".options").show();
              $(".game-board").hide();
              return newGame.restart();
            });









};
