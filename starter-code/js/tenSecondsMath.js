
function Game (option, numberLimit) {
    this.option = option
    this.numberLimit = numberLimit
}

Game.prototype.newQuestion = function () {
    this.numberX = parseInt(Math.random() * 10 + 1)
    this.numberY = parseInt(Math.random() * 10 + 1)
    this.result = this.numberX + this.numberY
    console.log(this.numberX + '+' + this.numberY)
}

Game.prototype.isCorrectAnswer = function (a) {
    var resp =  (this.result == a) ? 'Correct' : 'Incorrect'
    return resp
}

var game = new Game('addition', 10)

// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(options) {

};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
