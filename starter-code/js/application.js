// Use this file to write the interactions between your game and the user

//Initialize ion library
function showGameBoard() {
  
  // if at least one operator is selected
  if( document.querySelectorAll('#sum')[0].checked ||
      document.querySelectorAll('#substract')[0].checked ||
      document.querySelectorAll('#multiply')[0].checked ||
      document.querySelectorAll('#divide')[0].checked) {
    
    // build the operator array
    var operatorsSelected = [];
    if (document.querySelectorAll('#sum')[0].checked) { 
      operatorsSelected.push("+");
     }
     if (document.querySelectorAll('#substract')[0].checked) { 
      operatorsSelected.push("-");
     }
     if (document.querySelectorAll('#multiply')[0].checked) { 
      operatorsSelected.push("*");
     }
     if (document.querySelectorAll('#divide')[0].checked) { 
      operatorsSelected.push("/");
     }

    // initiate the game
    console.log("Game Start");
    game = new TenSecondsMathGame(operatorsSelected, 10);
    game.newQuestion();

    // Set question 
    document.querySelectorAll('.question span')[0].innerText = game.gameParameters.question;

    // hide the options and display the game board
    document.querySelectorAll('.game-options')[0].setAttribute('class','game-options game-options--hidden');
    document.querySelectorAll('.game-board')[0].setAttribute('class','game-board');

  } else  {
    alert("You have to select at least one operator!");
  }
}

window.onload = function(){
  var game; // The game to be created when clicking the start button
  var startButton = document.querySelectorAll('.btn-start')[0];

  startButton.onclick = function() {

    // if at least one operator is selected
    if( document.querySelectorAll('#sum')[0].checked ||
      document.querySelectorAll('#substract')[0].checked ||
      document.querySelectorAll('#multiply')[0].checked ||
      document.querySelectorAll('#divide')[0].checked) {

      // build the operator array
      var operatorsSelected = [];
      if (document.querySelectorAll('#sum')[0].checked) { 
        operatorsSelected.push("+");
      }
      if (document.querySelectorAll('#substract')[0].checked) { 
        operatorsSelected.push("-");
      }
      if (document.querySelectorAll('#multiply')[0].checked) { 
        operatorsSelected.push("*");
      }
      if (document.querySelectorAll('#divide')[0].checked) { 
        operatorsSelected.push("/");
      }

      // initiate the game
      console.log("Game Start");
      game = new TenSecondsMathGame(operatorsSelected, 10);
      game.newQuestion();

      // Set question 
      document.querySelectorAll('.question span')[0].innerText = game.gameParameters.question;

      // hide the options and display the game board
      document.querySelectorAll('.game-options')[0].setAttribute('class','game-options game-options--hidden');
      document.querySelectorAll('.game-board')[0].setAttribute('class','game-board');

    } else  {
      alert("You have to select at least one operator!");
    }
  };
 
  // Add an event listener to the answer input on enter key press
  var userAnswer = document.querySelectorAll('#answer')[0];
  
  userAnswer.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
      var isUserAnswerCorrect = game.isCorrectAnswer(Number(userAnswer.value)); // The value needs to be converted to integer first 
      if (isUserAnswerCorrect) {
        game._startTimer();
        game.newQuestion();
        document.querySelectorAll('.question span')[0].innerText = game.gameParameters.question;
        document.querySelectorAll('#answer')[0].value = "";
      }
    }
  });
};
