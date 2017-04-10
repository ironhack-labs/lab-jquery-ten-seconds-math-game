Use this file to write the logic of your game, the needed attrs and functions

// var TenSecondsMathGame = function(timer) {
//
//
// };

var startGame = false;
var timer = 10;
var maxNumber = 10;
var num1 = 0;
var num2 = 0;
//var guess = prompt("what is" + num1 + "+" + num2 + "?");
//var input = guess;
var result;
var operatorNum = 1;
var operatorArr = [operator.sum, operator.substract, operator.multiply, operator.divide];
var operator:{
  sum: num1 + num2,
  substract: num1 - num2,
  multiply: num1 * num2,
  divide: num1 / num2;
};
var operatorAssigned;

// Randomizing the numbers to operate

function randomize(pickedNum) {
  num1 = Math.floor(Math.random() * pickedNum + 1);
  console.log(num1);
  num2 = Math.floor(Math.random() * pickedNum + 1);
  console.log(num2);
}

randomize(maxNumber);

//Randomizing operator
function randomizeOperator() {

  if()

}

//Calculate the result
function calculateResult() {
  result = num1 + operatorAssigned + num2;
}




//Compare the result with the input solution
function correction() {
  if (input === ())
}
Returns an object with {question, answer}





//----------------------------------------------------------------------------------
// Returns an object with {question, answer}



// Checks a user answer

//--------setTimeout----------------------
// var counter = 1;
// var callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
//
//   counter += 1;
//
//   if (counter > 10) {
//     clearTimeout(timeoutId); // this stops the execution
//   }
// }
//
// var timeoutId = setTimeout(callbackFunction, 1000);
// //still don't know how to stop this
//
//
// //----------------setInterval-------------------------
//
// var i = 1;
// var intervalId = setInterval(function () {
//   console.log(i);
//
//   i++;
//
//   if (i > 10) { // when i > 10 the function stops
//     clearInterval(intervalId);
//   }
// }, 1000); // delay time between executions
//
// // Same exam for a countdown interval
//
// var i = 10;
// var intervalId = setInterval(function() {
//   if (i > 0) {
//     console.log(i);
//   } else {
//     console.log("Pop!");
//     clearInterval(intervalId);
//   }
//
//   i--;
// }, 1000);
