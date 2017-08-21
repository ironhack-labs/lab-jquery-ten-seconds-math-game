// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function (options, numberLimit) {
	this.option = options,
	this.numberLimit = numberLimit,
	this.time = 0,
	this.count = 0
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
	this.count ++
	if (this.count == 1) {
		this._startTimer()
	}
	if (this.result == a) {
		console.log('Correct')
		this.time += 10
		return this.newQuestion()
	} else {
		return 'Incorrect'
	}
	this.count()
}


TenSecondsMathGame.prototype._startTimer = function () {
	var o = this
	var timerStatus = setInterval(function () {
		if(o.time > 0) {
			console.log(o.time)
			o.time --
		} else{
			console.log('You lose')
			clearInterval(timerStatus)
		}
	},1000);
}

TenSecondsMathGame.prototype._checkTimer = function (a){
	
}