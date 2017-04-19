var possibleOperator = ["add", "substract", "multiply", "divide"];

var TenSecondsMathGame = function(limit, operator) {
  this.limit = limit;
  this.operator = operator;
  this.result = 0;
};

TenSecondsMathGame.prototype.generateQuestion = function(){
  var firstNum = Math.floor(Math.random() * this.limit);
  var secondNum = Math.floor(Math.random() * this.limit);

  if (firstNum <= secondNum) {
    return this.generateQuestion();
  }

  operator = possibleOperator[Math.floor(Math.random() * possibleOperator.length)];
  var result;
  switch (operator) {
    case "add":
      result = (firstNum + secondNum);
    break;
    case "substract":
      result = (firstNum - secondNum);
    break;
    case "multiply":
      result = (firstNum * secondNum);
    break;
    case "divide":
      result = (firstNum / secondNum);
    break;
  }
  this.result = result;
  console.log(firstNum, operator, secondNum);
  console.log(result);
};

TenSecondsMathGame.prototype.isCorrectAnswer = function(answer){
    return this.result == answer;
  };

TenSecondsMathGame.prototype.timer = function(){
  var clock = 10;
  var callbackFunction = function () {
  console.log(clock);
  timeoutId = setTimeout(callbackFunction, 1000);
  this.timerId = timeoutId;
  clock -= 1;

  if (clock <= 0) {
   clearTimeout(timeoutId);
   console.log("Game Over!");
  }
  };
  var timeoutId = setTimeout(callbackFunction, 1000);
};

var nextGame = new TenSecondsMathGame(10, possibleOperator);


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
