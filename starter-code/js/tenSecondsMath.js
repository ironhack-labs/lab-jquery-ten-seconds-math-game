// Use this file to write the logic of your game, the needed attrs and functions


var TenSecondsMathGame = function(operation, numberLimit) {

  this.operations = operation;
  this.numberLimit = numberLimit;
  this.correctResult = "";
  this.theQuestion = "";
  //

  this.getOperation = function() {
    return this.operations[Math.floor(Math.random() * this.operations.length)];
  };

 // Returns a random integer between [1..numberLimit]
  // this.generateRandomNum = function(){
  //    return Math.floor(Math.random() * this.numberLimit);
  // };

 // Returns an object with {question, answer}


  this.newQuestion = function(){
     var firstNum = Math.floor(Math.random() * this.numberLimit);
     var secondNum = Math.floor(Math.random() * this.numberLimit);

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

    if (this.getOperation() === "addition") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10){
        secondNum -=1;
        }
      }
        this.theQuestion = firstNum + " + " + secondNum;
        this.correctResult  = firstNum + secondNum;
    }

     if (this.getOperation() === "substraction") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10){
        secondNum -=1;
        }
      }
        this.theQuestion = firstNum + " - " + secondNum;
        this.correctResult  = firstNum - secondNum;
    }

     if (this.getOperation() === "multiplication") {
      if (firstNum === secondNum) {
        secondNum += 1;
        if (secondNum === 10){
        secondNum -=1;
        }
      }
      this.theQuestion = firstNum + " * " + secondNum;
      this.correctResult  = firstNum * secondNum;
    }

     if (this.getOperation() === "division") {
      if(firstNum || secondNum === 0){
        firstNum += 1;
        secondNum +=1;
      }
      this.theQuestion = firstNum + " / " + secondNum;
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
        return true ;
      } else{
        console.log("Wrooooong!!!!!");
        return false;
      }
    };
};
