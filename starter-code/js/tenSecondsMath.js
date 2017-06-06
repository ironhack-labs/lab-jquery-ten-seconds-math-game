
var TenSecondsMathGame = {
    computerResult : 0,
    selectedOperator: "",
    selectedRangeOfInput: "",
    timeLeft: 0,

    generateRandomNumbers: function(rangeOfNumbersInput){
      var numbers=[];
      var number1 = Math.floor(Math.random() * rangeOfNumbersInput + 1);
      numbers.push(number1);
      var number2 = Math.floor(Math.random() * rangeOfNumbersInput + 1);
      numbers.push(number2);
      return numbers;
    },

    makeMathChallenge: function(operator, rangeOfNumbersInput, callback){

      if(rangeOfNumbersInput != ""){
        this.selectedRangeOfInput=rangeOfNumbersInput;
      }

      if(rangeOfNumbersInput == ""){

        rangeOfNumbersInput=this.selectedRangeOfInput;
      }
      var selectedRangeOfNumbers=rangeOfNumbersInput;
      if (operator == ""){
          operator=TenSecondsMathGame.selectedOperator;
      }
      if (rangeOfNumbersInput === ""){
        rangeOfNumbersInput = selectedRangeOfNumbers;
      }

      var numbers=TenSecondsMathGame.generateRandomNumbers(rangeOfNumbersInput);
      var number1=numbers[0];
      var number2=numbers[1];
      var mathTask;
      switch(operator) {
        case 'addition' :
            mathTask = number1 + " + " + number2;
            this.selectedOperator = "addition";
            TenSecondsMathGame.computerResult = number1 +  number2;
          break;
        case 'substraction' :
        this.selectedOperator = "substraction";
          if((number1 > number2) || (number1 === number2)){
            mathTask = number1 + " - " + number2;
            TenSecondsMathGame.computerResult = number1 - number2;
          }
          else if(number1 < number2){
              mathTask = number2 + " - " + number1;
            TenSecondsMathGame.computerResult = number2 - number1;
          }
          break;
        case 'multiplication' :
          this.selectedOperator = "multiplication";
          mathTask = number1 + " * " + number2;
            TenSecondsMathGame.computerResult = number1 * number2;
          break;
        case 'division' :
          this.selectedOperator = "division";
          mathTask = number1 + " : " + number2;
          TenSecondsMathGame.computerResult = number1 / number2;
          break;

        }

      mathTask+= " = ";
      return callback(mathTask);
    },

    isCorrectAnswer: function(userAnswer, callback){

      if(TenSecondsMathGame.computerResult == userAnswer){
          userAnswer = true;

      }
      else{
          userAnswer = false;
      }
      return callback(userAnswer);
  },

    _checkTime: function(CountDown){
      TenSecondsMathGame.timeLeft = CountDown;
    },

    _startTimer: function(CountDown){

      interval = setInterval(function(){
        displayCountdown(CountDown);
        TenSecondsMathGame._checkTime(CountDown);
        CountDown--;
        if (CountDown < 0){
          clearInterval(interval); // Stopping the counter when reaching 0.
        }
      }, 1000);
    },

    giveFeedbackToUser: function(userAnswer){
      if(userAnswer){

      }
      else if(!userAnswer){

      }
    },

    getMathOperators : function(operator){
      switch(operator) {
        case addition :
          break;
        case substraction :
          break;
        case multiplication :
          break;
        case division :
          break;
        default:

      }

    }

}
