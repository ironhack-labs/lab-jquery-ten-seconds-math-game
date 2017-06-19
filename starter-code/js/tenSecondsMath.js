var options = {
  operations: ['+', '-'],
  upperLimit: 10
};

// Use this file to write the logic of your game, the needed attrs and functions
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b }, 
    '*': function(a, b) { return a * b }
};

var TenSecondsMathGame = function(options) {
    this.operations = options.operations;
    this.upperLimit = options.upperLimit;
    this.questionObj = {};
    this.timerCounter = 0;
    this.questionTimeOutId;
    // Returns a random integer between [1..numberLimit]
    this.generateRandomNumber = function() {
        return Math.floor(Math.random() * this.upperLimit) + 1;
    };
    this.generateQuestion = function() {
        var operation = this.operations[Math.floor(Math.random()*this.operations.length)];
        //condition1: The result should never be negative
        var condition1 = false;
        //condition2:
        //The difference between the generated operators can't be less than 3 (except for the division)
        //The generated numbers should never be equal (except for the division)
        var condition2 = false;
        
        var operator1;
        var operator2;
        while(!condition1 || !condition2) {
            operator1 = this.generateRandomNumber();
            operator2 = this.generateRandomNumber();
            if ((operation === '-' && operator1 - operator2 > 0) || operation !== '-') {
                condition1 = true;
            } else {
               condition1 = false;
            }
            if (operation !== '/') {
                 if (Math.abs(operator1 - operator2) > 2 && operator1 != operator2) {             
                    condition2 = true;
                } else {
                  condition2 = false;
                  }
            } else {
                condition2 = true;
            }
        }

        // Returns an object with {question, answer}
        var mathQuestion = operator1 + operation + operator2;
        var mathAnswer = operators[operation](operator1, operator2);
        var obj = {};
        obj.question = mathQuestion;
        if (operation === '/') {
            obj.answer = mathAnswer.toFixed(1);
        } else {
            obj.answer = mathAnswer;
        }
        
        this.questionObj = obj;
        
    };
    this.checkAnswer = function(userAnswer) {
        if (userAnswer === this.questionObj.answer) {
            return true;
        }
        return false;
    };
    this._startTimer = function () {
      var self = this;
      var callbackFunction = function () {
        self.questionTimeOutId = setTimeout(callbackFunction, 1000);
        self.timerCounter -= 1;
        document.getElementById('timer').innerText = self.timerCounter;
        if (self.timerCounter === 0) {
            clearTimeout(self.questionTimeOutId);
            updateAnswerBoxWhenError();
        }
      };
      
      self.timeoutId = setTimeout(callbackFunction, 1000);
    };
    this._clearTimer = function () {
        console.log('timer counter ' + this.timerCounter);
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id);
        }
        
    };
};
