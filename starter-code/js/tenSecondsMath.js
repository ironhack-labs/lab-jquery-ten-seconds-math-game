// Use this file to write the logic of your game, the needed attrs and functions

var timeLimit;
var opArray = [];

function getOperator(){

  var add = document.getElementById("adding");
  var substract = document.getElementById("substracting");
  var divide = document.getElementById("dividing");
  var multiply = document.getElementById("multiplying");
  if (add.checked) {
    console.log("it's add");
    opArray.push("+");
  } if (substract.checked) {
    console.log("it's sub");
    opArray.push("-");

  // }if (divide.checked) {
  //   console.log("it's divide");
  //   opArray.push("/");
  // } if (multiply.checked) {
  //   console.log("it's *");
  //   opArray.push("*");
  } else if (!substract.checked && !add.checked){
    alert("Select a number!");
    return;
  }
}

var operations = {
  "+" : function(a,b)  {
    return a + b; },
  "-" : function(a,b)  { return a - b ;},
  // "/" : function(a,b)  { return a / b ;},
  // "*" : function(a,b)  { return a * b ;}
};

function start() {
  getTime();
  getOperator();
  document.getElementById('box2').style.display = 'none';
  document.getElementById('box3').style.display = 'block';
  // var realAnswer = question();
  // var userAnswer = ;
  // checkAnswer(realAnswer, userAnswer) {
  //
  // }
  question();

}

function getTime(){
  numLimit = document.getElementById("numLimit").value;
  console.log('numLimi ' + numLimit);
}
var numLimit;
var int1,int2;
function question() {
  var theQuestion = document.getElementById("questionText");
  // Returns a random integer between [1..numberLimit]
  int1 = Math.floor(Math.random() * (numLimit - 1)) + 1;
  int2 = Math.floor(Math.random() * (numLimit - 1)) + 1;
  // Returns an object with {question, answer}
  var randomOp = Math.floor(Math.random() * (1 + opArray.length - 1));
  var generatedOp = ""+int1 + opArray[randomOp] + int2;
  theQuestion.innerText = ""+generatedOp;

  // Checks a user answer

checkAnswer();

}

function checkAnswer() {
  var userAnswer = document.getElementById("answer").value;
  //console.log("user answer = "+userAnswer);

  var realAnswer = operations["+"](int1,int2);
  //console.log("real result = "+realAnswer);

  if (userAnswer == realAnswer) {
    console.log("well done");
    document.getElementById("answer").value = undefined;
    question();
  }
}
