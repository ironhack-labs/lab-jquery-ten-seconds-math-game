function Game(option, numberLimit) {
	this.option = option,
	this.numberLimit = numberLimit,
	this.firstLimit = 0
}

Game.prototype.newQuestion = function () {
	var a = this.getRandomNumber()
	var b = this.getRandomNumber()
	while(Math.abs(a - b) <= 3) {
		b = this.getRandomNumber()
	}
	console.log('Suma de ' + a + '+' + b)
	this.result = a + b
}

Game.prototype.getRandomNumber = function () {
	return parseInt(Math.random() * 10 + 1)
}

Game.prototype.isCorrectAnswer = function (a) {
	if (a > 0) {
		return (this.result == a) ? 'Correct' : 'Incorrect'
	} else {
		return 'The number must be grater than 0'
	}
}

window.onload = function () {
	var game = new Game('addition', 100)
	game.newQuestion()
}

// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function (options) {

};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer