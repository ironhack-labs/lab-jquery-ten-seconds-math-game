// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(arrayOperations, integer) {
	this.operationArray = arrayOperations
	if (integer > 10) {
		this.upperNumberLimit = integer
	} else {
		this.upperNumberLimit = 10
	};

};

TenSecondsMathGame.prototype.newQuestion = function() {
	this.firstNumber = Math.floor(Math.random() * this.upperNumberLimit + 1);
	this.secondNumber = Math.floor(Math.random() * this.upperNumberLimit + 1);
	this.tempNumber = 0
	if (this.secondNumber > this.firstNumber) {
		this.tempNumber = this.firstNumber;
		this.firstNumber = this.secondNumber;
		this.secondNumber = this.tempNumber;
	}
	this.operation = this.operationArray[Math.floor(Math.random() * this.operationArray.length)]
	if (this.operation === "+") { 
		this.calculation = this.firstNumber + this.secondNumber;
	} else if (this.operation === "-") {
		this.calculation = this.firstNumber - this.secondNumber;
	} else if (this.operation === "x") {
		this.calculation = this.firstNumber * this.secondNumber;
	} else {
		this.calculation = this.firstNumber / this.secondNumber;
	}
	this.questionAsked = this.firstNumber + " " + this.operation + " " + this.secondNumber
	return (this.questionAsked)
	// return {"question": this.questionAsked, "answer": this.calculation};
}


TenSecondsMathGame.prototype.isCorrectAnswer = function(userAnswer) {
	if (userAnswer == this.calculation) { 
		return true
} else {
		return false
}
}

// debug(game.newQuestion()["answer"])


