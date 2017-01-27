// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {

};

function add(n1, n2){
 return n1 + n2;
}
function substract(n1, n2){
 return n1 - n2;
}
function multiply(n1, n2){
 return n1 * n2;
}
function divide(n1, n2){
 return n1 / n2;
}

var numbersN1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersN2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var variousFunction = [ "+", "-", "*", "/"];

window.onload = function () {
var n1 = numbersN1[Math.floor(Math.random() * numbersN1.length)];
document.getElementById('num1').innerHTML = n1;
var randomFunction = variousFunction[Math.floor(Math.random() * variousFunction.length)];
document.getElementById('ranFun').innerHTML = randomFunction;
var n2 = numbersN2[Math.floor(Math.random() * numbersN2.length)];
document.getElementById('num2').innerHTML = n2;
};


// console.log(n1);
// console.log(n2);
// console.log(randomFunction);

// document.getElementById("ACCOUNT").value = n1;


// var randomN1 = Math.floor(Math.random() * limit);
// var randomN2 = Math.floor(Math.random() * limit);
var isTimerOn = false;


function countdown() {
 if (!isTimerOn) {
   var isTimerOn = true;
   var timeleft = 10;
   var timer = setInterval(function(){
     timeleft--;
     document.getElementById("countdownOutput").innerHTML = timeleft + " seconds till you lose";
     if (timeleft <= 0) {
       clearInterval(timer);
       document.getElementById("countdownOutput").innerHTML = "LOOOOOOOSER";
     }
   },1000);
 }
}

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
