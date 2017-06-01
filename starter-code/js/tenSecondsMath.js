// Use this file to write the logic of your game, the needed attrs and functions
function TenSecondsMathGame(operator, maxNums) {
  this.counter = 10;
  this.maxNums = maxNums;
  this.operator = operator;

  this.question = "";
  this.answer = 0;

  this.checkAnswer = function(){
    if(this.checkCounter){

      var answer = $('input[name="answer"]').val();
      if(answer == this.answer){

        this.counter += 10;
        this.createQuestion();
        this.printQuestion();
      }else{
        this.gameover();
      }

    }
  };

  this.printQuestion = function (){
    $('.gameform').addClass("hidden");
    $('.board').removeClass("hidden");

    this.createQuestion();
    $('input[name="answer"]').val(0);
    $('label').text(this.question);
  };


  this.createQuestion = function(){
    var factor1 = "";
    var factor2 = "";
      factor1 = parseInt(Math.floor(Math.random()*maxNums));
      factor2 = parseInt(Math.floor(Math.random()*maxNums));

    switch (this.operator) {
      case "div":
        this.question = factor1 +"/"+factor2;
        this.answer = factor1 / factor2;
        break;

      case "sum":
        this.question = factor1 +"+"+factor2;
        this.answer = factor1 + factor2;
        break;

      case "res":
        this.question = factor1 +"-"+factor2;
        this.answer = factor1 - factor2;
        break;

      case "mul":
        this.question = factor1 +"*"+factor2;
        this.answer = factor1 * factor2;
        break;
    }

  };

  this.decreaseCounter = function(){
    if(this.counter > 0){
      this.counter --;
    }
  };

  this.checkCounter = function(){
    if(this.counter > 0){
      return true;
    }else{
      clearInterval(counting);
      this.gameover();

    }
  };

  this.gameover = function(){
    $(".board").addClass("hidden");
    $(".gameover").removeClass("hidden");
  }


}

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
