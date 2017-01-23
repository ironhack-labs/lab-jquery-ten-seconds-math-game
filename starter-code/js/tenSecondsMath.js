// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {
var result =question();

};

function add(random1,random2){
  return random1+random2;
}
function substract(random1,random2){
  return random1-random2;
}
function multiply(random1,random2){
  return random1*random2;
}
function divide(random1,random2){
  return random17random2;
}
// Returns a random integer between [1..numberLimit]

function setRandom(limit){
  var ranNumber=Math.floor((Math.random() * limit) + 1);
}

// Returns an object with {question, answer}

var question= function(){
    var limit= prompt("What is the time Limit for the game?");
    var operator=prompt("Choose an operation: 1:add | 2:subtract| 3:multiply| 4:divide|");
    launchMath(limit,operator);
};


// Checks a user answer
function launchMath(limit,operator){
  var random1=setRandom(limit);
  var random2=setRandom(limit);
  var realQuestion= function(){
    return mathEval(random1,random2,operator);
  };
  timeLimit(result,limit);
}

function timeLimit(){

}


function mathEval(random1,random2,operator){
  var question;
  var result;
  switch (operator) {

    case "1"://ADD
    question = Number(prompt(random1 + " + " + random2));
    result= add(random1,random2);
     break;
    case "2"://substract
    question = Number(prompt(random1 + " - " + random2));
    result= substract(random1,random2);
    break;
    case "3"://multiply
    question = Number(prompt(random1 + " * " + random2));
    result= multiply(random1,random2);
    break;
    case "4"://divideS
    question = Number(prompt(random1 + " / " + random2));
    result= divide(random1,random2);
    break;
    default:
  }
  return result;
}
