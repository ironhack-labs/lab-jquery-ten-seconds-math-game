// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operationsArray, numberLimit) {
	this.operationArray = operationsArray
	if (numberLimit > 10) {
		this.upperNumberLimit = numberLimit 
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
	if (this.operation.includes("addition")) { 
		this.calculation = this.firstNumber + this.secondNumber;
	} else if (this.operation.includes("substraction")) {
		this.calculation = this.firstNumber - this.secondNumber;
	} else if (this.operation.includes("multiplication")) {
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


var game = new TenSecondsMathGame(["+", "-", "x", "/"], 7)
// debug(game.newQuestion()["answer"])


