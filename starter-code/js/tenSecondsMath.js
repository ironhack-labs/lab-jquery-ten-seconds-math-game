// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(opetarion, numberLimit) {
  this.options = opetarion;
  this.numberLimit = numberLimit;
  this.correctAnswer;
  this.question;

  this.getOperation = function() {
    var numOp = this.options.length;
    return this.options[Math.floor(Math.random() * numOp)];
  }

  this.getNumbers = function() {
    var number1 = Math.floor(Math.random() * this.numberLimit) + 1;
    var number2 = Math.floor(Math.random() * this.numberLimit) + 1;

    if( number1 > number2 )
      return [number1, number2];
    else
      return [number2, number1];
  }

  this.setQuestion = function() {
    var numbers = this.getNumbers();
    switch (this.getOperation()) {
      case "add":
        this.opDiferenceByThree("+", numbers);
        break;
      case "substract":
        this.opDiferenceByThree("-", numbers);
        break;
      case "multiply":
        this.opDiferenceByThree("*", numbers);
        break;
      case "divide":
        this.question = (numbers[0] + "/" + numbers[1]);
        this.correctAnswer = (parseInt(numbers[0]/numbers[1]*100))/100;
        break;
    }
  }

  this.opDiferenceByThree = function(op, numbers) {
    if( numbers[0] - numbers[1] <= 3 ){
      if(numbers[0]+4 > this.numberLimit ){
        var question = (numbers[0]-4 + op + numbers[1]);
        this.question = question;
        this.correctAnswer = eval(question);
      } else if(numbers[0]-4 > 0){
        var question = (numbers[0]+4 + op + numbers[1]);
        this.question = question;
        this.correctAnswer = eval(question);
      } else {
        var question = (numbers[0]+4 + op + numbers[1]);
        this.question = question;
        this.correctAnswer = eval(question);
      }
    } else{
      var question = (numbers[0]+4 + op + numbers[1]);
      this.question = question;
      this.correctAnswer = eval(question);
    }
  }

  this.isCorrectAnswer = function(answer){
    if(answer === this.correctAnswer)
      return true
    else
      return false
  }

};
