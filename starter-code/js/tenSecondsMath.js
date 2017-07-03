// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(operation, limit) {

  this.operation = operation;
  this.limit = limit;
  this.question = "";
  this.solution = 0;
  this.timer = 0;
  this.qCount = 0;

};

// Returns a random integer between [1..numberLimit]
function randomNumber(limit) {
  return _.random(0,limit);
}

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function() {

  var rand1 = randomNumber(this.limit);
  var rand2 = randomNumber(this.limit);

  var operand = '';

  switch (this.operation) {
    case "addition":
      this.solution = rand1 + rand2;
      operand = '+';
      break;
    case "subtraction":
      this.solution = rand1 - rand2;
      operand = '-';
      break;
    case "multiplication":
      this.solution = rand1 * rand2;
      operand = '*';
      break;
    case "division":
      this.solution = rand1 / rand2;
      operand = '*';
      break;
  }


  this.question = rand1 + " " + operand + " " + rand2;

  this.qCount += 1;
  console.log(this.question);
}

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function(answer) {
  console.log(answer === this.solution ? "Great!" : "Wrooooong!");

  if (answer === this.solution) {
    this.newQuestion();
    this.timer += 10000;
    if (this.qCount == 2) { this._startTimer(); }
  }

}


// Timer start
TenSecondsMathGame.prototype._startTimer = function() {

  var self = this;

  var iterateTimer = function () {

    if (self._checkTimer()) {
      console.log(self.timer / 1000);
      timeoutId = setTimeout(iterateTimer, 1000);
    } else {
      clearTimeout(timeoutId);
      console.log('Game over!');
    }
  }

  var timeoutId = setTimeout(iterateTimer,1000);
}


// Timer check
TenSecondsMathGame.prototype._checkTimer = function() {
  if (this.timer > 0) {
    this.timer -= 1000;
    return true;
  }

  return false;
}


// Initiate a game
var game = new TenSecondsMathGame('addition', 10);
game.newQuestion();
