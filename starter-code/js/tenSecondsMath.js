// Use this file to write the logic of your game, the needed attrs and functions

// Receive the operation selected by the user and the top limit of the operation's numbers.
// Set the operation the user selected to play with.
// Set the top limit number for the operations.

var TenSecondsMathGame = function(options) {

};


// var userSelectNumber = times;

// function runTheGame() {
//   for(i=0;i<=10;i++){
//     compare(subtract(numArray), 1);
//   }
// }
//
// runTheGame();

// var submitButton = document.getElementById('submit-button');
// var inputQty = document.getElementById('input1').value;
//
var calculateButton = document.getElementById('submit-button');
var inputQty = 0;

// calculateButton.onclick = function(){
//   var inputQty = document.getElementById('input1').value;
//   console.log(inputQty);
//   return inputQty;
//   runTheGame(add);
// };

// GRABBING THE CHECKBOX NODES & start button

var userAdditionSelect = document.getElementById("checkbox-addition");
var userSubtractSelect = document.getElementById("checkbox-subtract");
var userMultiplySelect = document.getElementById("checkbox-multiply");
var userDivideSelect = document.getElementById("checkbox-divide");
var startButton = document.getElementById("btn-start");

// ASSIGNING THE OPERATOR TO THE userSelect variable.

var operatorSymbol = document.getElementById('operator');

var userSelect = function() {
  if(userAdditionSelect.checked === true) {
    operatorSymbol.innerHTML = '+';
    return add(numArray);
  }
  else if(userSubtractSelect.checked === true) {
    operatorSymbol.innerHTML = '-';
    return subtract(numArray);
  }
  else if(userMultiplySelect.checked === true) {
    operatorSymbol.innerHTML = '*';
    return multiply(numArray);
  }
  else if(userDivideSelect.checked === true) {
    operatorSymbol.innerHTML = '%';
    return divide(numArray);
  }
};

// TIMER COUNTDOWN
var i = 10;

var intervalId = function() { setInterval(function() {
  if (i > 0) {
    console.log(i);
  }
  else if (i === 0) {
    console.log("Game over!");
    clearInterval(intervalId);
  }
	i--;
}, 1000);
};




// START BUTTON

startButton.onclick = function(){
  userSelect();
  intervalId();
};



// CHECKING THE MATH --------------------------------------------------------------------------------

var numberFirst = document.getElementById('number-first');
var numberSecond = document.getElementById('number-second');

// Returns a random integer between [1..numberLimit]
function randomInteger() {
  var random = Math.floor((Math.random()* 10) +1);
  return random;
}

// Returns two random numbers into an array
function twoNumbers() {
  var1 = randomInteger();
  var2 = randomInteger();
  if (var1 === var2) {
    var1++;
  }
  var twoNums = [var1, var2];
  twoNums.sort(function(a,b){return b-a;});
  console.log(twoNums);
  numberFirst.innerHTML = String(var1);
  numberSecond.innerHTML = String(var2);
  return twoNums;
}

var numArray = twoNumbers();


// FUNCTIONS FOR MATH BASED ON OPERATOR

var add = function(numArray) {
  var total = numArray[0] + numArray[1];
  return total;
};

var subtract = function(numArray) {
  numArray.sort(function(a,b){return b-a;});
  var total = numArray[0] - numArray[1];
  return total;
};

var multiply = function(numArray) {
  var total = numArray[0] * numArray[1];
  return total;
};

var divide = function(numArray) {
  var total = numArray[0] / numArray[1];
  return total;
};



// CHECKS A USER'S ANSWER

var compare = function(total, input) {
  if (total === input) {
    console.log("Success!");
    i = i+10;
    return true;
  }
  else {
    console.log("Fail!");
    return false;
  }
};


// RUNS THE GAME

function runTheGame(operator, inputQty) {
  for(j=0;j<10;j++){
    compare(operator, inputQty);
    console.log("is this working?");
  }
}

// Enter Key Submits Answer & Brings Up New Math Problem

document.onkeyup = function(){
  // if(window.event.keyCode=='13') {
    var inputQty = Number(document.getElementById('input1').value);
    var inputNode = document.getElementById('input1');
    console.log(inputQty + "holla");
    compare(userSelect(), inputQty);
    var actualAnswer = userSelect();
    if (actualAnswer == inputQty) {
      numArray = twoNumbers();
      inputNode.value = '';
    }
  // }
};


// calculateButton.onclick = function(){
//   var inputQty = Number(document.getElementById('input1').value);
//   console.log(inputQty);
//   compare(userSelect(), inputQty);
//   numArray = twoNumbers();
// };



// Use this for # of rounds

function runTheGame(operator, inputQty) {
  //should grab the value of the number of rounds selected by user
  for(j=0;j<(10);j++){
    compare(operator, inputQty);
    console.log("is this working?");
  }
}




// console.log(inputQty);

// var test = compare(add(numArray), 10);
// compare(subtract(numArray), 1);





// console.log(subtract(numArray));
// console.log(add(numArray));
// console.log(multiply(numArray));

// function divide(numArray) {
//   var total = numArray[0] / numArray[1];
//   return total;
// }
// Returns an object with {question, answer}


// Checks a user answer
