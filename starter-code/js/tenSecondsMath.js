// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function (options) {
    this.ops = options.ops;
    this.numberLimit = options.numberLimit;

    this.randomNumber = function () {
        return Math.ceil(Math.random() * this.numberLimit);
    }

    this.newQuestion = function () {
        
        var randomNumber1 = this.randomNumber();
        
        var randomNumber2 = this.randomNumber();
        
        var randArrInd = Math.floor(Math.random() * this.ops.length);
        
        var randomOp = this.ops[randArrInd];
        
        var fixedNumbers = [randomNumber1, randomNumber2]
        
        if (randomOp !== "division") {

            var orderedNumbers = orderNumbers(randomNumber1, randomNumber2);
            
            fixedNumbers = fixCloseNumbers(orderedNumbers[0], orderedNumbers[1])
            
        }

        console.log(this.numberLimit, fixedNumbers[0], fixedNumbers[1], randomOp);

        this.correctAnswer = this.doOp(fixedNumbers[0], fixedNumbers[1], randomOp);

        console.log('correct answer', this.correctAnswer);

        var opSymbols = {
            'addition':'+',
            'subtraction':'-',
            'multiplication':'*',
            'division': '/'
        };

        console.log(randomOp, fixedNumbers[0], fixedNumbers[1], this.correctAnswer);

        return fixedNumbers[0] + ' ' + opSymbols[randomOp] + ' ' + fixedNumbers[1];
    }
    this.doOp = function (num1, num2, op) {
        var result;
        switch (op) {
            case "addition":
                result = num1 + num2;
                break;
            case "subtraction":
                result = num1 - num2;
                break;
            case "multiplication":
                result = num1 * num2;
                break;
            case "division":
                result = num1 / num2;
                break;
        }
        return result;
    }


    // given 2 numbers return array with largest first
    function orderNumbers(num1, num2) {
        
        if (num1 < num2) {
            var temp = num1;
            num1 = num2;
            num2 = temp;
        }
        return [num1, num2];
    }

    function fixCloseNumbers(biggerNum, smallerNum) {
        var safeBig = biggerNum;
        if (biggerNum - smallerNum < 3) {
            var numberToAdd = 3 - (biggerNum - smallerNum);
            safeBig = biggerNum + numberToAdd;
        }
        return [safeBig, smallerNum];
    }
    // guess from the user
    this.isCorrectAnswer = function (num) {
        return (num === this.correctAnswer);
    }
};

// var game = new TenSecondsMathGame({ops:["addition","substraction","multiplication"],numberLimit:9});
// game.newQUestion();