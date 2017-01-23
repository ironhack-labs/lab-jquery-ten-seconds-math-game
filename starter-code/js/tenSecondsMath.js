// Use this file to write the logic of your game, the needed attrs and functions

var numberLimit = prompt("Set your number limit!");
var whichOperator = prompt("What would you like to do: add, subtract, multiply, or divide?");
var randomNumber1 = Math.floor((Math.random() * numberLimit) + 1);
var randomNumber2 = Math.floor((Math.random() * numberLimit) + 1);
var userAnswer;
var randomNumber1;
var randomNumber2;

//
// var randomNumber1 = Math.floor((Math.random() * numberLimit));
// var randomNumber2 = Math.floor((Math.random() * numberLimit));


// console.log(randomNumber1);
// console.log(randomNumber2);

function add() {
  userAnswer = Number(prompt(randomNumber1 + " + " + randomNumber2));
  return randomNumber1 + randomNumber2;
}


function subtract() {
  userAnswer = Number(prompt(randomNumber1 + " - " + randomNumber2));
  return randomNumber1 - randomNumber2;
}

function multiply() {
  userAnswer = Number(prompt(randomNumber1 + " x " + randomNumber2));
  return randomNumber1 * randomNumber2;
}

function divide() {
  userAnswer = Number(prompt(randomNumber1 + " / " + randomNumber2));
  return randomNumber1 / randomNumber2;
}



var TenSecondsMathGame = function(options) {

};



var userChooses = function () {


    if(whichOperator == "add") {

      do {
        randomNumber1 = Math.floor((Math.random() * numberLimit));
        randomNumber2 = Math.floor((Math.random() * numberLimit));
        add();
      }

      while (userAnswer === (randomNumber1 + randomNumber2));


    }

    if(whichOperator == "subtract") {
      do {
        randomNumber1 = Math.floor((Math.random() * numberLimit));
        randomNumber2 = Math.floor((Math.random() * numberLimit));
        subtract();
      }

      while (userAnswer === (randomNumber1 - randomNumber2));
    }

    if(whichOperator == "multiply") {
      do {
        randomNumber1 = Math.floor((Math.random() * numberLimit));
        randomNumber2 = Math.floor((Math.random() * numberLimit));
        multiply();
      }

      while (userAnswer === (randomNumber1 * randomNumber2));
    }

    if(whichOperator == "divide") {
      do {
        randomNumber1 = Math.floor((Math.random() * numberLimit));
        randomNumber2 = Math.floor((Math.random() * numberLimit));
        divide();
      }

      while (userAnswer === (randomNumber1 / randomNumber2));
    }

};

console.log(userChooses());



// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
