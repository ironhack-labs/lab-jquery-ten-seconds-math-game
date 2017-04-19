// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(optionsArray, limitNumber) {
    this.optionsArray = optionsArray;
    this.limitNumber = limitNumber;
    this.seconds = 0;
    this.numberOne = 0;
    this.numberTwo = 0;
    this.question = "";
    this.answer = 0;
    this.intervalID = null;
    //Game Over event
    this.gameOverEvent = document.createEvent("Event");
    this.gameOverEvent.initEvent("gameOver", true, false);
    
    //Initialize Game
    this.newQuestion();
};

TenSecondsMathGame.prototype.newQuestion = function(){
    this.generateNumbers();
    this.generateQuestion();
    this.addTenSeconds();
};

//Decrease Time by 1
TenSecondsMathGame.prototype.decreaseTime = function() {
    this.seconds--;
};

TenSecondsMathGame.prototype.addTenSeconds = function() {
    this.seconds += 10;  
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber = function(minimun, maximun) {
    return Math.ceil(Math.random() * (maximun - minimun) + minimun);
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateQuestion = function(numberOne, numberTwo) {
    var index = Math.floor(Math.random() * this.optionsArray.length);

    switch (this.optionsArray[index]) {
    case "+":
        this.answer = this.numberOne + this.numberTwo;
        break;
    case "-":
        this.answer = this.numberOne - this.numberTwo;
        break;
    case "*":
        this.answer = this.numberOne * this.numberTwo;
        break;
    case "/":
        this.answer = this.numberOne / this.numberTwo;
        break;
    }
    this.question = this.numberOne + " " + this.optionsArray[index] + " " + this.numberTwo;
};

// Checks a user answer
TenSecondsMathGame.prototype.answerChecker = function(userAnswer) {
    return userAnswer == this.answer;
};

//Generate Numbers()
TenSecondsMathGame.prototype.generateNumbers = function() {
    this.numberTwo = this.randomNumber(1, this.limitNumber);

    if (this.limitNumber - this.numberTwo <= 3)
        this.numberOne = this.randomNumber(1, this.numberTwo - 3);
    else
        this.numberOne = this.randomNumber(this.numberTwo + 3, this.limitNumber);

    if (this.numberOne - this.numberTwo < 0)
        this.swapNumbers();
};

TenSecondsMathGame.prototype.swapNumbers = function() {
    var tempNumber = this.numberOne;
    this.numberOne = this.numberTwo;
    this.numberTwo = tempNumber;
};

TenSecondsMathGame.prototype.startTimeCount = function(fnArg){
    this.intervalID = setInterval(fnArg, 1000);
};

TenSecondsMathGame.prototype.gameOver = function(){
    document.dispatchEvent(this.gameOverEvent);
};

TenSecondsMathGame.prototype.onGameOver = function(fnArg){
    document.addEventListener("gameOver", fnArg);
};

