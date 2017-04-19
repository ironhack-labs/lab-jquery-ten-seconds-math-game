// Use this file to write the logic of your game, the needed attrs and functions
function TenSecondsMathGame (operation, limit){
  this.operation = operation;
  this.limit = limit;
  this.generateOperation = function (){
    var randomNum = 0, randomNum2 = 0;

    while (randomNum <= randomNum2) {
      randomNum = random(0,this.limit);
      randomNum2 = random(0, this.limit);
    }

    var result;
    console.log(randomNum, operation, randomNum2);

    switch (operation) {
      case "sum":
        result = randomNum + randomNum2;
        break;
      case "substraction":
         result = randomNum - randomNum2;
        break;
      case "divide":
        result = randomNum / randomNum2;
        break;
      case "multiply":
       result = randomNum * randomNum2;
      break;

      default:
    }

    this.resultAnswer = result;
  };

  this.isCorrectAnswer = function (userResult){
    return this.resultAnswer === userResult;
  };

  this._checkTimer = function(time){
    var counter = 10;
    var idInterval = setInterval(function(){
      console.log(counter);
      counter--;
      if(counter < 0) {
        clearInterval(idInterval);

      }
    }, 1000);
  };
}


// Returns a random integer between [1..numberLimit]
function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns an object with {question, answer}


// Checks a user answer
