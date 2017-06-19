

var TenSecondsMathGame = function(options) {

};

function add(n1,n2){
  return n1+n2;
}

function substraction(n1,n2){
  return n1-n2;
}

function multiply(n1,n2){
  return n1*n2;
}

function division(n1,n2){
  return n1/n2;
}
function randomNumber(maxNumber){
  return Math.floor(Math.random()*maxNumber);
}

function generateOperation(n1,n2,operator){
  if (operator==="+"){
    console.log("El resultado de la suma " + n1 + " " + operator + " " + n2 + " es " + add(n1,n2));
  }
}
var maxNumber;
function selectMaximum() {
  maxNumber = parseInt(prompt("Select your maximum Number!"));
  return maxNumber;
}
// Hilo principal

var operator = "+";

selectMaximum();

var n1 = randomNumber(maxNumber);
var n2 = randomNumber(maxNumber);

generateOperation(n1,n2,operator);
// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
