// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(numberLimit) {
  this.operation = prompt("Enter your operation: ");
  this.numberLimit = numberLimit;
};

TenSecondsMathGame.prototype.questionGenerator = function() {
  var leftOperand = parseInt(Math.random() * this.numberLimit);
  if(leftOperand < 0) {leftOperand *= -1;}
  var rightOperand = parseInt(Math.random() * this.numberLimit);
  if(rightOperand < 0) {rightOperand *= -1;}
  var userAnswer;
  var answer;


  while(rightOperand - leftOperand > 3 || leftOperand - rightOperand > 3 || leftOperand === rightOperand){
    leftOperand = parseInt(Math.random() * this.numberLimit);
    rightOperand = parseInt(Math.random() * this.numberLimit);
  }

if(this.operation == "addition") {

  userAnswer = prompt("Answer this question: " + leftOperand + " + " + rightOperand + " = ?" );
  answer = leftOperand + rightOperand;

  if (userAnswer == answer) {
    console.log("Great!");
  }
  else {console.log("Wrooong!");}
  }

  else if(this.operation === "subtraction") {
     userAnswer = prompt("Answer this question: " + leftOperand + " - " + rightOperand + " = ?" );
     answer = leftOperand - rightOperand;

    if (userAnswer == answer) {
      console.log("Great!");
    }
    else {console.log("Wrooong!");}
    }

  else if(this.operation === "multiplication") {
    userAnswer = prompt("Answer this question: " + leftOperand + " X " + rightOperand + " = ?" );
    answer = leftOperand * rightOperand;

   if (userAnswer == answer) {
     console.log("Great!");
   }
   else {console.log("Wrooong!");}
   }

   else if(this.operation === "division") {
     userAnswer = prompt("Answer this question: " + leftOperand + " / " + rightOperand + " = ?" );
     answer = leftOperand / rightOperand;

    if (userAnswer == answer) {
      console.log("Great!");
    }
    else {console.log("Wrooong!");}
    }
};


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
