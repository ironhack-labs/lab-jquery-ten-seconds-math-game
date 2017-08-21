// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function (options, numberLimit) {
	this.option = options,
	this.numberLimit = numberLimit,
	this.firstLimit = 10
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.getRandomNumber = function (num) {
	return parseInt(Math.random() * num + 1)
}

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function () {
	var a = this.getRandomNumber(this.numberLimit)
	var b = this.getRandomNumber(this.numberLimit)
	while (Math.abs(a - b) <= 3) {
		b = this.getRandomNumber(this.numberLimit)
	}
	console.log('Suma de ' + a + '+' + b)
	this.result = a + b
}

// Checks a user answer

TenSecondsMathGame.prototype.isCorrectAnswer = function (a) {
	if (a > 0) {
		if (this.result == a) {
			console.log('Correct')
			return this.newQuestion()
		} else {
			return 'Incorrect'
		}
	} else {
		return 'The number must be grater than 0'
	}
}

TenSecondsMathGame.prototype._startTimer = function () {
	var i = this.firstLimit
	var timerStatus = setInterval(function () {
		console.log(i)
		if(i >= 1) {
			(i === 1 ) ? i='You Lose' : i -= 1
		} else{
			clearInterval(timerStatus)
		}
	},1000);
}

TenSecondsMathGame.prototype._checkTimer = function (a){
	
}