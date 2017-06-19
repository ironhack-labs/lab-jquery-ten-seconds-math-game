// Arnau Guadall
// I did the exercise without the DOM

// Use this file to write the logic of your game, the needed attrs and functions

function TenSecondsMathGame (operator,numberLimit) {    
    
    this.operator = operator;
    this.numberLimit = numberLimit;        
    this.number1;
    this.number2;
    this.result = 0;
    this.answer = 0;
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber =  function() {
  return Math.round(Math.random() * this.numberLimit);
};

//Addition function
TenSecondsMathGame.prototype.addition = function (number1,number2){
    return number1 + number2;
};

//Substraction function
TenSecondsMathGame.prototype.substraction = function (number1,number2){
    return number1 + number2;
};

//Multiply function
TenSecondsMathGame.prototype.multiply = function (number1,number2){
    return number1 * number2;
};

//Division function
TenSecondsMathGame.prototype.division = function (number1,number2){
    return number1 / number2;
};

TenSecondsMathGame.prototype.makeQuestion = function(){    
    
    this.number1 = this.randomNumber();
    this.number2 = this.randomNumber();
    
    console.log("Operator: " + this.operator);
    console.log("numberLimit: " + this.numberLimit);        

    switch(this.operator){
        case 'addition':
            this.question =this.number1 + " + " + this.number2;
            this.answer = this.addition(this.number1,this.number2);                  
            break;
        case 'substraction':
            this.question = this.number1 + " - " + this.number2;
            this.answer = this.substraction(this.number1,this.number2);                  
            break;
        case 'multiply':
            this.question = this.number1 + " * " + this.number2;
            this.answer = this.multiply(this.number1,this.number2);                  
            break;
        case 'division':
            this.question = this.number1 + " / " + this.number2;
            this.answer = this.division(this.number1,this.number2);                  
            break;
        default: 
            break;
    }

    console.log(this.question);
    console.log(this.answer);
    this.checkUserAnswer();
};



// Checks a user answer
TenSecondsMathGame.prototype.checkUserAnswer = function(){
    var userAnswer = prompt("Answer");    
    console.log("this: " + this.answer);
    console.log("useranswer: " + userAnswer);
    if (this.answer == userAnswer){
        console.log("In");
        i += 10;
        this.makeQuestion();
    }
};

var i = 10;

function coreGame(){
    if (i >= 0){
        console.log(i);        
    } else {
        clearInterval(intervalId);
    }
  i--;  
}

// part of the DOM
var arrayOperators = [];

function getChecked(){
    
    if (document.getElementById("addition").checked)        arrayOperators.push('addition');    
    if (document.getElementById("substraction").checked)    arrayOperators.push('substraction');    
    if (document.getElementById("multiply").checked)        arrayOperators.push('multiply');    
    if (document.getElementById("division").checked)        arrayOperators.push('division');

    console.log(arrayOperators);
}

var limit = prompt("Limit");
var oper = prompt("Operator");

// part of the DOM
//var randomArray = Math.round(Math.random() * arrayOperators.length);

var value = arrayOperators[randomArray];
var game = new TenSecondsMathGame(value,limit);

var intervalId = setInterval(coreGame,1000);
game.makeQuestion();

console.log("antes check");








