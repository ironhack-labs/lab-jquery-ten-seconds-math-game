// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(operations, numberLimit) {
  this.operations = operations; // Array of 0..3 including the operator
  this.numberLimit = numberLimit;
  this.timer; // Game timer
};

// Returns a random integer between [1..numberLimit]
var randomLimit = function (numberLimit) {
  return Math.floor(Math.random()*numberLimit);
};


// Rule 2: The difference between the generated operators can't be less than 3 (except for the division)
function isDifferenceLessThan3(a, b) {
  if ( ((a > b) && (a - b) < 3) || ((a < b) && (b - a) < 3) ) {
    return true;
  } else { 
    return false;
  }
}

// Function: Set the operator based on game rules.
// Input: List of operations in an Array
// Output: Returns a single operator
function setMathOperator(operatorArray) {
  
  // set the operator
  var possibleOperators = ["+", "-", "*", "/"];
  var operatorSelected;
  
  // If more than one operations, select one randomly
  if(operatorArray.length > 1) {
    operatorSelected = operatorArray[randomLimit(operatorArray.length)];
  } else {
    operatorSelected = operatorArray[0];
  }
  
  return operatorSelected;
}

// Function: Set numbers based on game rules.
// Input: 1 operator & the limit
// Output: Returns a and b in an array
function setNumbers(operator, numberLimit) {
  
  var num1 = randomLimit(numberLimit);
  var num2 = randomLimit(numberLimit);
  
  // Rule 3: The generated numbers should never be equal (except for the division)
  if ( ((num1 === num2) || isDifferenceLessThan3(num1, num2)) && (operator !== "/") ) {
    while(num1 === num2 || isDifferenceLessThan3(num1, num2)) {
      num1 = randomLimit(numberLimit);
      num2 = randomLimit(numberLimit);
    }
  }
  
  // Return numbers as an array
  return [num1, num2];
 
}

// Function: Generate the answer to the question
// Input: 1. the operator, 2. a, 3. b
// Output: Array including: 1. the answer, 2. the new value of a, 3. the new value of b
function generateMathAnswer(op, num1, num2) { 
  var answerToReturn = 0;
  var swapNumber = 0;

  // Define the answer based on the operation
  switch(op) {
    case "+": 
      answerToReturn = num1 + num2;
      break;
    case "-": 
      // Rule 2: The result should never be negative
      if(num2 > num1) {
        swapNumber = num1;
        num1 = num2;
        num2 = swapNumber;
      }
      answerToReturn = num1 - num2;
      break;
    case "*": 
      answerToReturn = num1 * num2;
      break;
    case "/": 
      // Rule 2: The result should never be negative
      if(num2 > num1) {
        swapNumber = num2;
        num1 = num2;
        num2 = swapNumber;
      }
      answerToReturn = num1 / num2;
      break;
    default : console.log("This operator does not exist: ", op);
  }

  return [answerToReturn, num1, num2];

 }

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function() {

  // Set the operator for the question
  var operator = setMathOperator(this.operations);
  
  // Set a and b for the question
  var numbers = setNumbers(operator, this.numberLimit); 
  var a = numbers[0];
  var b = numbers[1];
  
  // Generate the Answer  
  var answerArray = generateMathAnswer(operator, a, b);
  var mathAnswer = answerArray[0];
  a = answerArray[1];
  b = answerArray[2];
  
  // Generate question
  var mathQuestion = a.toString() +" "+ operator +" "+ b.toString();
  
  // Set the game question and answer in an object
  this.gameParameters = {
    question: mathQuestion,
    answer: mathAnswer
  };

  console.log(this.gameParameters.question);
};

TenSecondsMathGame.prototype._checkTimer = function () {
  console.log(this.timer);
  if (this.timer > 0) {
    this.timer -= 1;
    var timeoutId = setTimeout(this._checkTimer, 1000);
  } else {
    console.log("Time is over!"); 
  }
}

// Timer functions
TenSecondsMathGame.prototype._startTimer = function () {
  this.timer = 10;
  var timeoutId = setTimeout(this._checkTimer, 1000);
};

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function (answer) {

  if (answer === this.gameParameters.answer) {
    console.log("Great!");
    return true;
  } else {
    console.log("Wrooong!");
    return false;
  }
}
