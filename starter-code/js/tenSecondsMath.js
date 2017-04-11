//Use this file to write the logic of your game, the needed attrs and functions

// var TenSecondsMathGame = function(timer) {
//
//
// };

var startGame = false;
var timer = 10;
var maxNumber = 10;
var num1 = 0;
var num2 = 0;

var input = guess;
var result;
var operatorNum = 1; //number of operators selected
var points = 0;

//operators
var sum = [ num1 + num2, { state: false } ];
var substract = [ num1 - num2, { state: false } ];
var multiply = [ num1 * num2, { state: false } ];
var divide = [ num1 / num2, { state: false } ];

var operatorNumber;
var pickedOperator = operatorArr[operatorNumber];

//operator array
var operatorArr = [];

// Randomizing the numbers to operate
function randomize(pickedNum) {

  num1 = Math.floor(Math.random() * pickedNum + 1);
  console.log(num1);

  num2 = Math.floor(Math.random() * pickedNum + 1);
  console.log(num2);
}

randomize(maxNumber);

var guess = prompt("what is " + num1 + " + " + num2 + "?"); //asking for an imput

//Modify the array of avaliable operators
function fillOperatorToArr() {
  if(sum[1].state === true) {

    operatorArr.push(sum[0]);

  } else if (substract[1].state === true) {

    operatorArr.push(substract[0]);

  } else if (multiply[1].state === true) {

    operatorArr.push(multiply[0]);

  } else if (divide[1].state === true) {

    operatorArr.push(divide[0]);

  } else if (sum[1].state === false) {

    //operatorArr.filter(num1 + num2)
    //have to solve how to delete from the array operations without affecting the rest of the operations.

  }
}

//Randomizing operator
function randomizeOperator() {

pickedOperator = Math.floor(Math.random() * operatorArr.length);

}


//Calculate the result
function calculateResult() {
  result = pickedOperator;
}

//Compare the result with the input solution
function correction() {
  if (input === result) {
    counter += 5;
    points += 0;
    //clear input field
    // execute again randomizeOperator();
  } else {
    //clear input field
  }
}


Returns an object with {question, answer}





//----------------------------------------------------------------------------------
// Returns an object with {question, answer}



// Checks a user answer



//--------setTimeout----------------------

var counter = 10;
var callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter -= 1;

  if (counter === 0) {
    clearTimeout(timeoutId); // this stops the execution
     //pop up message Game Over
  }
}

var timeoutId = setTimeout(callbackFunction, 1000);
//still don't know how to stop this
*/
