// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, upperNumber) {
  var n1 = this.random(upperNumber);
  var n2 = this.random(upperNumber);
  console.log(n1, n2);
  var userSay = prompt("What's the result?");
  var result = this.result(operation, n1, n2);
  if(result == userSay){
    console.log("CONGRATS!!!");
  }else{
    console.log("LOOSER!!!");
  }
  console.log(n1, n2, result);

};
TenSecondsMathGame.prototype.random = function(upperNumber) {
  return Math.floor(Math.random() * upperNumber + 1);
};

TenSecondsMathGame.prototype.result = function(operation, n1, n2) {
  var operationResult = 0;
  switch (operation) {
    case 'add':
      operationResult = n1 + n2;
      break;
    case 'subs':
      operationResult = n1 - n2;
      break;
    case 'mult':
      operationResult = n1 * n2;
      break;
    case 'div':
      operationResult = n1 / n2;
      break;
  }
  console.log(operationResult);
  return operationResult;
};


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
