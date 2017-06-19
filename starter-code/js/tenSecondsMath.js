// Use this file to write the logic of your game, the needed attrs and functions
var op = [];
var operation;
var max;
/*
function init() {
  operation = prompt("Select one type of operation: +, -, * or /");
  var firstAnswer;
  if (operation != "+" && operation != "-" && operation != "*" && operation != "/" ){
    firstAnswer = false;
  } else { firstAnswer = true;
    op.push(operation);
    return;
  }

    while (firstAnswer === false) {
      prompt("Selection must be + , - , * , /");
      if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" ){
        firstAnswer = false;
      } else { firstAnswer = true;
        op.push(operation);
      }
}}

function setMax(){
  max = prompt ("Tipe the maximun number");
}
*/

var TenSecondsMathGame = function(operationsArray, limit) {
    this.maxNumber= 10;
    this.operationsArray= ["+"] ;
    this.x = 0;
    this.y = 0;
    //this.result = 0;
};


TenSecondsMathGame.prototype.calculator = function (){
  this.operation = this.x + this.operator + this.y;
  if(this.operator == "+"){
    this.result = this.x + this.y;
  } else if (this.operator == "-"){
    this.result = this.x - this.y;
  } else if (this.operator == "*"){
    this.result = this.x * this.y;
  } else {
    this.result = this.x / this.y;
  }
};

TenSecondsMathGame.prototype.randomNumbers = function(){
  this.x = Math.floor(Math.random() * this.maxNumber);
  this.y = Math.floor(Math.random() * this.maxNumber);
};

TenSecondsMathGame.prototype.getRandomOperator = function(){
  var random = Math.floor(Math.random() * this.operationsArray.length);
  this.operator = this.operationsArray[random];
};
