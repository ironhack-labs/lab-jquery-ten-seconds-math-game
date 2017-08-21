// Use this file to write the logic of your game, the needed attrs and functions

function TenSecondsMathGame(operators, numberLimit) {
  this.operators = operators
  this.numberLimit = numberLimit
}

function QuestionAnswer(question, answer){
  this.question = question
  this.answer = answer
}

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype._getRandomInteger = function(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function() {
  var indexOperator = this._getRandomInteger(0, this.operators.length - 1)
  console.log(indexOperator)
  var randomNum1 = this._getRandomInteger(1, this.numberLimit)
  var randomNum2 = this._getRandomInteger(1, this.numberLimit)

  this.questionAnswer = new QuestionAnswer()

  switch (this.operators[indexOperator]) {
    case 'addition':
      randomNum2 = this._getAppropiateNumber(randomNum1, randomNum2)
      this.questionAnswer.question = randomNum1 + ' + ' + randomNum2
      this.questionAnswer.answer = randomNum1 + randomNum2
      break;
    case 'subtract':
      randomNum2 = this._getAppropiateNumber(randomNum1, randomNum2)
        this.questionAnswer.question = randomNum1 + ' - ' + randomNum2,
        this.questionAnswer.answer = randomNum1 - randomNum2
      break;
    case 'multiplication':
      randomNum2 = this._getAppropiateNumber(randomNum1, randomNum2)
      this.questionAnswer.question = randomNum1 + ' * ' + randomNum2,
      this.questionAnswer.answer = randomNum1 * randomNum2
      break;
    case 'division':
        this.questionAnswer.question = randomNum1 + ' / ' + randomNum2,
        this.questionAnswer.answer = randomNum1 / randomNum2
      break;
    default:
  }

  return this.questionAnswer
}

TenSecondsMathGame.prototype._unAppropiateConditions = function(a, b) {
  return Math.abs(a - b) < 3 || a == b
}

TenSecondsMathGame.prototype._getAppropiateNumber = function(a, b) {
  while (this._unAppropiateConditions(a, b)) {
    b = this._getRandomInteger(1, this.numberLimit)
  }
  return b
}

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function(userAnswer) {
  return this.questionAnswer.answer == userAnswer ? 'Great!!' : 'Wrooong!!'
}
