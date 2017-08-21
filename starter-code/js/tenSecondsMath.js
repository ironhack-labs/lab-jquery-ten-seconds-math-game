// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, limit) {
    this.operation = operation;
    this.limit = limit;
    this.answer = 0;
    this.question = "";
    this.questionCount = 0;
    this.timer = 0;
};

// Returns a random integer between [1..numberLimit]
 function randomNumber(limit) {
  return Math.floor(Math.random() * (limit)) + 1;
}

//function using absolute to make sure the difference bewtween the 2 num is 3 or more
//Using modulus != 0 then its not evenly divisible

TenSecondsMathGame.prototype.newQuestion = function() {
  var num1 = randomNumber(this.limit);
  var num2 = randomNumber(this.limit);

  if (num1 - num2 <= 3) {
    num1 = randomNumber(this.limit);
    num2 = randomNumber(this.limit);
    console.log('less than 3');
  }

  var operationSign = "";

  switch (this.operation) {
    case "add":
      this.answer = num1 + num2;
      operationSign = "+";
      break;
    case "subtract":
      this.answer = num1 - num2;
      operationSign = "-";
      break;
    case "divide":
      this.answer = num1 / num2;
      operationSign = "/";
      break;
    case "multiply":
      this.answer = num1 * num2;
      operationSign = "*";
  }

  this.question = num1 + " " + operationSign + " " + num2;

  this.questionCount += 1;

  console.log(this.question);
};

//this.answer = user.answer + 10s;



// Returns an object with {question, answer}


function threeDifference(num1, num2) {
  if (num1 - num2 > 3) {

  }
}


// Checks a user answer

// Need to get the number limit & operation from the user
//Then generate 2 numbers within that limit and have a minimum of 3 between each other

//Then perform selected operation with continual random numbers within limit
//Have a 10 second timer, and after each correct answer add 10 seconds
