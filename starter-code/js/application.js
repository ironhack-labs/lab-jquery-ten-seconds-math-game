// Use this file to write the interactions between your game and the user

//Initialize ion library

var newGame;
var userChoiceOps = [];
var userChoiceLimit = "";
var toBeAdded = 0;

window.onload = function() {



  // Function to show the limit chosen by the player

  $(".ranger").on("click", function(event) {
    $(".the-limit").text($(".ranger").val());
  });

  // Start button

  $(".start-game").on("click", function(event) {

    if ($("input.suma").prop("checked")) {
      userChoiceOps.push("addition");
    }
    if ($("input.subs").prop("checked")) {
      userChoiceOps.push("substraction");
    }
    if ($("input.mult").prop("checked")) {
      userChoiceOps.push("multiplication");
    }
    if ($("input.divi").prop("checked")) {
      userChoiceOps.push("division");
    }

    // userChoiceOps = $('input[type=checkbox]:checked').map(function(_, el) {
    // return $(el).val();
    // }).get();



    if (userChoiceOps.length !== 0) {

      userChoiceLimit = $(".ranger").val();

      $(".the-game").hide();
      $(".questions").removeClass("hidden");

      newGame = new TenSecondsMathGame(userChoiceOps, userChoiceLimit);

      newGame.newQuestion();
      newGame._startTimer();

      $(".display-operation").text(newGame.theQuestion);

      console.log(newGame);

    } else {
      alert("Choose wisely");
    }


  });

  $("#userAnswer").on("keyup", function() {
    if ($("#userAnswer").val() == newGame.correctResult) {
      newGame.getTimeCarried();
      toBeAdded = newGame.storedTime;
      newGame.clearTimer();
      newGame = new TenSecondsMathGame(userChoiceOps, userChoiceLimit);
      newGame.newQuestion();
      newGame._startTimer();
      console.log(newGame);
      $(".display-operation").text(newGame.theQuestion);
      $('#userAnswer').val("");
    }
  });

};
