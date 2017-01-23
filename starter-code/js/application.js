// Use this file to write the interactions between your game and the user


// var numberLimit = document.getElementById('number-range').value;
// console.log(numberLimit);
//
//
//
// document.getElementById("range-value").innerHTML = numberLimit;


var userAdd;
var userAnswer;
var randomNumber1;
var randomNumber2;
var numberLimit;
var whichOperator;





function startGame () {
  var numberLimit = document.getElementById('number-range').value;
  var randomNumber1 = Math.floor((Math.random() * numberLimit) + 1);
  var randomNumber2 = Math.floor((Math.random() * numberLimit) + 1);

  document.getElementById("range-value").innerHTML = numberLimit;
  console.log(numberLimit);

// CHECKING WHETHER CHECKED
   var add = document.getElementById("add").checked;
   var subtract = document.getElementById("subtract").checked;
   var multiply = document.getElementById("multiply").checked;
   var divide = document.getElementById("divide").checked;

   var replace = document.getElementById('hidden');

   replace.classList.remove("hidden");



   if (add === true) {
     whichOperator = "add";
     console.log(whichOperator);

   }

   if (subtract === true) {
     whichOperator = "subtract";
     console.log(whichOperator);
   }

   if (multiply === true) {
     whichOperator = "multiply";
     console.log(whichOperator);
   }

   if (divide === true) {
     whichOperator = "divide";
     console.log(whichOperator);
   }

   if(whichOperator == "add") {



     do {
      //  console.log(numberLimit);
      //  console.log(whichOperator);

      //  console.log(randomNumber1);

      addNumbers();





      console.log(userAdd);

     } while (userAdd === (randomNumber1 + randomNumber2));


   }

   if(whichOperator == "subtract") {
     do {
       randomNumber1 = Math.floor((Math.random() * numberLimit));
       randomNumber2 = Math.floor((Math.random() * numberLimit));
       userAnswer = Number(prompt(randomNumber1 + " - " + randomNumber2));
     }

     while (userAnswer === (randomNumber1 - randomNumber2));
   }

   if(whichOperator == "multiply") {
     do {
       randomNumber1 = Math.floor((Math.random() * numberLimit));
       randomNumber2 = Math.floor((Math.random() * numberLimit));
       userAnswer = Number(prompt(randomNumber1 + " * " + randomNumber2));
     }

     while (userAnswer === (randomNumber1 * randomNumber2));
   }

   if(whichOperator == "divide") {
     do {
       randomNumber1 = Math.floor((Math.random() * numberLimit));
       randomNumber2 = Math.floor((Math.random() * numberLimit));
       userAnswer = Number(prompt(randomNumber1 + " / " + randomNumber2));
     }

     while (userAnswer === (randomNumber1 / randomNumber2));
   }


}

// OPERATION FUNCTIONS

function addNumbers() {
  randomNumber1 = Math.floor((Math.random() * numberLimit));
  console.log(randomNumber1);
  randomNumber2 = Math.floor((Math.random() * numberLimit));
  document.getElementById("random-operation").innerHTML= randomNumber1 + " + " + randomNumber2;
  console.log("WORK!!!!!");
}


function subtractNumbers() {
  userAnswer = Number(prompt(randomNumber1 + " - " + randomNumber2));
  return randomNumber1 - randomNumber2;
}

function multiplyNumbers() {
  userAnswer = Number(prompt(randomNumber1 + " x " + randomNumber2));
  return randomNumber1 * randomNumber2;
}

function divideNumbers() {
  userAnswer = Number(prompt(randomNumber1 + " / " + randomNumber2));
  return randomNumber1 / randomNumber2;
}




// TEN SECONDS FUNCTIONS



// function add() {
//   userAnswer = Number(prompt(randomNumber1 + " + " + randomNumber2));
//   return randomNumber1 + randomNumber2;
// }
//
//
// function subtract() {
//   userAnswer = Number(prompt(randomNumber1 + " - " + randomNumber2));
//   return randomNumber1 - randomNumber2;
// }
//
// function multiply() {
//   userAnswer = Number(prompt(randomNumber1 + " x " + randomNumber2));
//   return randomNumber1 * randomNumber2;
// }
//
// function divide() {
//   userAnswer = Number(prompt(randomNumber1 + " / " + randomNumber2));
//   return randomNumber1 / randomNumber2;
// }
//
//
// var userChooses = function () {
//
//
//     if(whichOperator == "add") {
//
//       do {
//         randomNumber1 = Math.floor((Math.random() * numberLimit));
//         randomNumber2 = Math.floor((Math.random() * numberLimit));
//         add();
//       }
//
//       while (userAnswer === (randomNumber1 + randomNumber2));
//
//
//     }
//
//     if(whichOperator == "subtract") {
//       do {
//         randomNumber1 = Math.floor((Math.random() * numberLimit));
//         randomNumber2 = Math.floor((Math.random() * numberLimit));
//         subtract();
//       }
//
//       while (userAnswer === (randomNumber1 - randomNumber2));
//     }
//
//     if(whichOperator == "multiply") {
//       do {
//         randomNumber1 = Math.floor((Math.random() * numberLimit));
//         randomNumber2 = Math.floor((Math.random() * numberLimit));
//         multiply();
//       }
//
//       while (userAnswer === (randomNumber1 * randomNumber2));
//     }
//
//     if(whichOperator == "divide") {
//       do {
//         randomNumber1 = Math.floor((Math.random() * numberLimit));
//         randomNumber2 = Math.floor((Math.random() * numberLimit));
//         divide();
//       }
//
//       while (userAnswer === (randomNumber1 / randomNumber2));
//     }
//
// };




//Initialize ion library
window.onload = function(){

};
