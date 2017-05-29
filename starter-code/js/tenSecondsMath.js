// Use this file to write the logic of your game, the needed attrs and functions


var TenSecondsMathGame = function(operation,numberLimit) {

  this.operation = operation;
  this.numberLimit = numberLimit;
  this.correctResult = "";

 // Returns a random integer between [1..numberLimit]
  this.generateRandomNum = function(){
     return Math.floor(Math.random() * this.numberLimit);
  };

 // Returns an object with {question, answer}


  this.newQuestion = function(){
    var firstNum = this.generateRandomNum();
    var secondNum = this.generateRandomNum();

  //
    // Conditional de *** 3 *** Pendiente
  // -------- Pendienter ---------- //

  // if (firstNum % secondNum <= 3 ) {
  //   secondNum = firstNum - 3;
  // }
  //
  // if (secondNum % firstNum <= 3) {
  //   firstNum = 3;
  // }

    //variations for every kind of operation

    if (this.operation === "addition") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10)
        secondNum -=1;
      }
      console.log(firstNum + " + " + secondNum);
        this.correctResult  = firstNum + secondNum;
    }

    if (this.operation  === "substraction") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10)
        secondNum -=1;
      }
      console.log(firstNum + " - " + secondNum);
        this.correctResult  = firstNum - secondNum;
    }

    if (this.operation  === "multiplication") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10)
        secondNum -=1;
      }
      console.log(firstNum + " * " + secondNum);
        this.correctResult  = firstNum * secondNum;
    }

    if (this.operation  === "division") {
      console.log(firstNum + " / " + secondNum);
        this.correctResult  = Math.floor(firstNum / secondNum);
    }

  //Conditionals for the result

    if (this.correctResult  < 0){
        this.correctResult  *= -1;
    }
};

  // Checks a user answer

    this.isCorrectAnswer = function(userAnswer) {
      if (userAnswer ===  this.correctResult){
        console.log("Nice!");
      } else{
        console.log("Wrooooong!!!!!");
      }
    };
};



var game = new TenSecondsMathGame("multiplication",10);
