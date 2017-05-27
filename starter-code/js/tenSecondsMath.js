// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, limitNumber) {
    this.operation = operation;
    this.limitNumber = parseInt(limitNumber);
    this.firstNumber = "";
    this.secondNumber = "";
    this.solution = "";
    this.interval= 0;

    this.randomNumber = function(limit) {
      return Math.floor(Math.random() * limit) + 1;
    };
    this.gameOver = function () {
      $("#solution").prop( "disabled", true );
      $("#solution").addClass("disabled");
      $(".clock").hide();
      $(".over").show();
      $("#restart").show();
    };
    this.restart = function () {
      $(".options").show();
      $(".game-board").hide();
      $("#solution").removeClass("disabled");
      $("#solution").prop( "disabled", false );
      $(".clock").show();
      $(".over").hide();
      $("#restart").hide();

    };
    this.winAnimation = function () {
      var topRandom = this.randomNumber($("body").width()*0.8);

      var leftRandom = this.randomNumber($("body").height()*0.8);

      $("#btc-reward").show();
      $("#btc-reward").css({"position" : "absolute", "display" :"block", "top":  topRandom, "left":  leftRandom });
      ion.sound.play("cash-register");
      setTimeout(function(){
        $("#btc-reward").hide();
      }, 3000);
    };
    this.startTimer = function () {
      var self = this;
      var timer = 10;

        this.interval = setInterval(function() {
        if (timer === 0) {
          console.log("lose");
          self.gameOver();
          clearInterval(self.interval);
        } else {
          timer -= 1;
          //console.log(timer);
          $(".clock span").text(timer);
        }
      }, 1000);
    };








    this.newQuestion = function () {
        this.firstNumber = parseInt(this.randomNumber(this.limitNumber));
        this.secondNumber = parseInt(this.randomNumber(this.limitNumber));
        var operationSelected = this.operation[this.randomNumber(this.operation.length) - 1];
        console.log("selected", operationSelected);
        var biggerNumber = this.firstNumber;
        var smallestNumber = this.secondNumber;
        if(this.secondNumber > this.firstNumber) {
          biggerNumber = this.secondNumber;
          smallestNumber = this.firstNumber;

        }
        if (operationSelected !== "%" && biggerNumber - smallestNumber <= 3 && biggerNumber + 3 < this.limitNumber) {
          console.log(biggerNumber, smallestNumber);
          biggerNumber += 3;

        } else {

          biggerNumber -= 3;
        }

        if(operationSelected === "addition") {
          operationSelected = "+";
          this.solution = biggerNumber + smallestNumber;
          console.log(this.solution);
        }
        if(operationSelected === "substraction") {
          operationSelected = "-";
          this.solution = biggerNumber -  smallestNumber;
          console.log(this.solution);
        }
        if(operationSelected === "multiplication") {
          operationSelected = "*";
          this.solution = biggerNumber *  smallestNumber;
          console.log(this.solution);
        }
        if(operationSelected === "division") {
          operationSelected = "%";
          this.solution = parseFloat(biggerNumber %  smallestNumber);
          console.log(this.solution);
        }


        return $("#question").text(biggerNumber + operationSelected + smallestNumber);

    };
    this.newQuestion();
    this.isCorrectAnswer = function (value) {
        console.log(value, this.solution);
        if(this.solution == value) {
          console.log("correct");

          $("#solution").css("border", "2px solid green");
          $("#solution").val("");
          this.winAnimation();
          this.newQuestion();
          clearInterval(this.interval);
          this.startTimer();

        } else {
          console.log("incorrect");
          $("#solution").css("border", "2px solid red");
        }




    };

  //  Math random 0 to limit number

    //Generate math question

    //ocultar options

};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
