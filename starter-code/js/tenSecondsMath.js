// Use this file to write the logic of your game, the needed attrs and functions


var TenSecondsMathGame = function(operation, numberLimit) {

  this.operations = operation;
  this.numberLimit = numberLimit;
  this.correctResult = "";
  this.theQuestion = "";
  this.interval = 0;
  var counter = toBeAdded + 10;
  var stored;
  this.storedTime = 0;
  //

  this.getTimeCarried = function() {
    this.storedTime += stored;
  };

  if (this.storedTime > 0) {
    console.log(this.storedTime);
  }

  this.getOperation = function() {
    return this.operations[Math.floor(Math.random() * this.operations.length)];
  };

  // Returns a random integer between [1..numberLimit]
  // this.generateRandomNum = function(){
  //    return Math.floor(Math.random() * this.numberLimit);
  // };

  // Returns an object with {question, answer}


  this.newQuestion = function() {
    var firstNum = Math.floor(Math.random() * this.numberLimit);
    var secondNum = Math.floor(Math.random() * this.numberLimit);



    //variations for every kind of operation

    var operation = this.getOperation();



    if (operation === "addition") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10) {
          secondNum -= 1;
        }
      }
      this.theQuestion = firstNum + " + " + secondNum;
      this.correctResult = firstNum + secondNum;
    }

    if (operation === "substraction") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10) {
          secondNum -= 1;
        }
      }
      this.theQuestion = firstNum + " - " + secondNum;
      this.correctResult = firstNum - secondNum;
    }

    if (operation === "multiplication") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10) {
          secondNum -= 1;
        }
      }
      this.theQuestion = firstNum + " * " + secondNum;
      this.correctResult = firstNum * secondNum;
    }

    if (operation === "division") {
      if (firstNum || secondNum === 0) {
        firstNum += 1;
        secondNum += 1;
      }

      if (firstNum < secondNum) {
        firstNum = secondNum;
        secondNum = firstNum;
      }
      this.theQuestion = firstNum + " / " + secondNum;
      this.correctResult = Math.floor(firstNum / secondNum);
    }

    //Conditionals for the result

    if (this.correctResult < 0) {
      this.correctResult *= -1;
    }
  };

  // Checks a user answer

  this.isCorrectAnswer = function(userAnswer) {
    if (userAnswer === this.correctResult) {
      console.log("Nice!");
      return true;
    } else {
      console.log("Wrooooong!!!!!");
      return false;
    }
  };



  this._startTimer = function() {
    var self = this;

    this.interval = setInterval(function() {
      if (counter === 0) {
        clearInterval(self.interval);
        $(".timer-show").hide();
        $(".game-over").removeClass('hidden');
        $("#userAnswer").prop("disabled", true);
        // console.log("You've lost");
        $(".restart-game").prepend("<input class='restart-game-btn btn btn-primary' type='button' value='Play Again!'>");
        $(".restart-game-btn").on("click", function(event) {
          $(".restart-game-btn").remove();
          $(".the-game").show();
          $(".game-over").addClass('hidden');
          $(".timer-show").show();
          $(".questions").addClass("hidden");
          $("#userAnswer").prop("disabled", false);
          userChoiceOps = [];
        });

      } else {
        counter--;
        $(".show-time").text(counter);
        stored = counter;
        // console.log(counter);
        // console.log(stored);
      }
    }, 1000);
  };

  this.clearTimer = function() {
    clearInterval(this.interval);
  };

};
