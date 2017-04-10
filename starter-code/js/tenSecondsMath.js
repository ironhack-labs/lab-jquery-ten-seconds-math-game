// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {
    this.operations = options.ops;
    this.limit = options.numberLimit;
    this.gameOverCb = options.gameOverCb;
    this.timerTickCb = options.timerTickCb;

    this.timeLeft = timeBonus;
}
// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomInLimit = function() {
    return Math.floor(Math.random()*this.limit) + 1;
}

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateQuestion = function() {
    var num1, num2, operation, incorrectQuestion, operationSymbol, answer;

    operation = this.operations[Math.floor(Math.random()*this.operations.length)];
    
    do {
        incorrectQuestion = false;
 
        num1 = this.randomInLimit();
        num2 = this.randomInLimit();

        switch(operation) {
            case "add": operationSymbol = " + "; answer=num1+num2; break;
            case "substract": operationSymbol = " - "; answer=num1-num2; break;
            case "multiply": operationSymbol = " * "; answer=num1*num2; break;
            case "divide": operationSymbol = " / "; answer=num1/num2; break;
        };
        
        //rule 1
        if(answer<0) incorrectQuestion=true;
        //rule 2
        if(operation!='divide' && Math.abs(num1-num2)<3)  incorrectQuestion=true;
        //rule 3
        if(operation!='divide' && num1===num2)  incorrectQuestion=true;
        //additional rule for division
        if(Math.floor(answer)!=answer) incorrectQuestion=true;

    } while(incorrectQuestion);

    return { message: num1+operationSymbol+num2+" =",
             answer: answer };
}

// Checks a user answer
TenSecondsMathGame.prototype.checkAnswer = function(userAnswer) {
    return parseInt(userAnswer) === this.question.answer;
}


TenSecondsMathGame.prototype.isCorrectAnswer= function(userAnswer) {
    if(this.checkAnswer(userAnswer)) {
        console.log("Great!");
        this.timeLeft+=timeBonus;
        return true;
    } else {
        console.log("Wrooong!");
        return false;
    }
}
TenSecondsMathGame.prototype.newQuestion = function() {
    this.question = this.generateQuestion()
    
    if(!this.timerID) this.timerID = _startTimer();

    console.log(this.question.message);
}

TenSecondsMathGame.prototype.gameOver = function () {
    console.log("Time is out!");
    clearInterval(this.timerID);
    this.gameOverCb();
}

function _startTimer() {

    console.log(game.timeLeft);

    return setInterval(function() {
        if(game.timeLeft===1) {
            game.gameOver();
        } else {
            game.timeLeft--;
            game.timerTickCb();
            console.log(game.timeLeft);
        }
    }, 1000);
}

//var game = new TenSecondsMathGame({ops:["add", "substract", "multiply", "divide"], numberLimit: 10});
//var game = new TenSecondsMathGame({ops:["add", "substract", "multiply", "divide"], numberLimit: 10});


