// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {

//create 2 random numbers
var max = prompt("Choose a number between 10 and 50");


  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }
var randomNum = getRandomInt(max);
var randomNum2 = getRandomInt(max);

console.log(randomNum);
console.log(randomNum2);


var userAnswer = prompt(randomNum2 + "+" + randomNum);

function checkAnswer () {
if (randomNum + randomNum2 == userAnswer) {
  console.log(randomNum + " + " + randomNum2 + " = " + userAnswer);
  return "YEAH , this is right";
}
else {
  console.log (randomNum + " + " + randomNum2 + " = " + userAnswer);
  return "NO !!! this is false";
}
}
checkAnswer();


};

// Returns a random integer between [1..numberLimit]

function


// Returns an object with {question, answer}


// Checks a user answer
