// Use this file to write the logic of your game, the needed attrs and functions
// game = new TenSecondsMathGame(['addition','subtraction'],10); //to start game
//game.operators[index] to get operator value
function TenSecondsMathGame(operators, numberLimit) {
  this.operators = operators;
  this.numberLimit = numberLimit;
  this.newQuestion = function() {
    var finalArray = generateQuestion(this.operators,this.numberLimit);
    this.finalNum1 = finalArray[0];
    this.finalNum2 = finalArray[1];
    this.finalOper = finalArray[2];
    this.answer = Math.floor(eval(this.finalNum1+this.finalOper+this.finalNum2));
    // console.log("This Answer: " + this.answer);
    return this.finalNum1 + this.finalOper + this.finalNum2;
  };
    this.isCorrectAnswer = function(guess) {
      if (guess === this.answer) {
        console.log("woohoo!");
      } else {
        console.log("WRONG!");
      }
    };
}
var generateQuestion = function(operators,numLimit) {
  var num1 = Math.floor((Math.random() * numLimit) + 1);
  console.log("NUM1: " + num1);
  var num2 = Math.floor((Math.random() * numLimit) + 1);
  console.log("NUM2: " + num2);
  var operator = operators[Math.floor(Math.random() * operators.length)];
  console.log("OP: " + operator);
  if(rulesCheck(num1,num2,operator)) {
    var array = [num1, num2,operator];
    return array;
  }
  return generateQuestion(operators,numLimit);
};

// I'M HAVING A LOT OF ISSUES WITH GETTING THE RULES RIGHT
// My understading is addition as long as number difference is > 3 and are not equal it is valid
// With rulesCheck below - I will always get nubmers where first number is larger than second number
var rulesCheck = function(num1, num2, operator) {
  if(num1<num2){
    console.log(eval(num1+operator+num2));
    return false;
  } else if (operator !=='/'){
    if(Math.abs(num1-num2)<3){
      return false;
    } else if(num1 === num2) {
      return false;
    }
  return true;
}
}
