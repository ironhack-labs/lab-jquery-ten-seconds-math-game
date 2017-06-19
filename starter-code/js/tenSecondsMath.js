// Use this file to write the logic of your game, the needed attrs and functions

function generateQuestion(limit,operation){
  var randomNumber = Math.ceil(Math.random()*limit);
  var randomNumber2 = Math.ceil(Math.random()*limit);


  if(checkRulesNumbers(randomNumber,randomNumber2,operation)){
    var array = [randomNumber,randomNumber2];
    return array;
  }
  return generateQuestion(limit,operation);

}

function generateSolution(operation,number1,number2,object){
  var solution;
  switch(operation){
    case "addition":
      solution = number1+number2;
      object.operation = " + ";
      break;
    case "substraction":
      solution = number1-number2;
      object.operation = " - ";
      break;
    case "multiplication":
      solution = number1*number2;
      object.operation = " * ";
      break;
    case "division":
      solution = number1/number2;
      object.operation = " / ";
      break;
    case " + ":
        solution = number1+number2;
        break;
    case " - ":
      solution = number1+number2;
      break;
    case " * ":
      solution = number1+number2;
      break;
    case " / ":
      solution = number1+number2;
      break;
  }
  console.log(solution);
  return solution;
}

function checkRulesNumbers(number1,number2,operation){
  if(number2>number1){
    return false;
  }
  else if(operation !== "division"){
    if(number1-number2<3 ){
       return false;
    }
    else if(number1 === number2){
      return false;
    }
  }
  return true;
}


var TenSecondsMathGame = function(options) {
  this.operation = options.operation;
  this.numberLimit = options.numberLimit;

  this.newQuestion = function(){
    var array = generateQuestion(this.numberLimit,this.operation);
    this.number1 = array[0];
    this.number2 = array[1];
    this.solution = generateSolution(this.operation,array[0],array[1],this);
    return array[0] + this.operation+array[1];
  };

  this.isCorrectAnswer = function(possibleSolution){
    if(possibleSolution === this.solution){
      return "Great!";
    }
    else{
      return "Wrooong!";
    }
  };

  this.startGame = function(timer){
      this.newQuestion();
      var operationToResolve = document.getElementById("result");
      var textToResolve = this.number1+this.operation+this.number2;
      result.textContent = textToResolve;
      var answer = document.getElementById("answer");
      var game = this;


      var secondsLeft = document.getElementById("seconds");
      secondsLeft.textContent = timer;

      answer.value = 0;


      var solutionFound = false;
      answer.onkeydown = function(){
        var timeOut = setTimeout(function(){
          if(game.solution.toString().trim() === answer.value.trim()){
            solutionFound = true;
            console.log("Correct");
          }

        },200);
      };

      var intervalId = setInterval(function(){
        var answer = document.getElementById("answer").textContent;
        if(timer===0){
          clearInterval(intervalId);
          var imageGameOver = document.getElementById('game-over');
          imageGameOver = imageGameOver.style.display = 'block';
          var restartButton =  document.getElementById("restartButton");
          restartButton.style.display = "block";
            restartButton.onclick = function(){
            var toShow = document.getElementById("to-hide");
            toShow = toShow.style.display = 'block';

            var toHide = document.getElementById("init-game");
            toHide = toHide.style.display = 'none';



            var startButton =  document.getElementById("startButton");
            startButton.style.display = "block";
            var restartButton =  document.getElementById("restartButton");
            restartButton.style.display = "none";

          };


          return;
        }
        else if(solutionFound){
          clearInterval(intervalId);
          timer+=10;
          game.startGame(timer);
        }
        timer--;
        secondsLeft.textContent = timer;


      },1000);
    };
  };

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
