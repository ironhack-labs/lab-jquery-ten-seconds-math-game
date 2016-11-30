var TenSecondsMathGame = function(options) {
  this.secondsIncrement = 10;
  this.secondsLeft = 10;
  this.operators   = options.ops;
  this.numberLimit = options.numberLimit;
  this.started     = false;
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype._getRandomInt = function() {
  return Math.floor(Math.random() * this.numberLimit) + 1;
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.newQuestion = function(){
  var a = this._getRandomInt();
  var b = this._getRandomInt();
  var randomOp = this.operators[Math.floor(Math.random() * this.operators.length)];

  switch (randomOp){
    case 'addition':
      while (a===b && a-b<3) { b = this._getRandomInt(); }
      this.question = a + ' + ' + b;
      this.solution = a + b;
      break;
    case 'substraction':
      while (a===b && a-b<3) { b = this._getRandomInt(); }
      if (a<b) { temp=a; a=b; b=temp; }
      this.question = a + ' - ' + b;
      this.solution = a - b;
      break;
    case 'multiplication':
      while (a===b && a-b<3) { b = this._getRandomInt(); }
      this.question = a + ' x ' + b;
      this.solution = a * b;
      break;
    case 'division':
      while (b===1) { b = this._getRandomInt(); }
      this.solution = b;
      this.question = (b*a) + ' / ' + a;
      break;
  }
  return this.question;
};

// Checks a user answer
TenSecondsMathGame.prototype.isCorrectAnswer = function(answer){
  if (this.solution !== answer) {
    return false;
  } else {
    if (!this.started) {
      this._startTimer();
      this.started = true;
      this.secondsLeft = this.secondsIncrement;
    } else {
      this.secondsLeft += this.secondsIncrement;
    }
    return true;
  }
};

TenSecondsMathGame.prototype._startTimer = function(){
  var self = this;
  this.timer = setInterval(function() { self._checkTimer(); }, 1000);
};

TenSecondsMathGame.prototype._checkTimer = function(){
  if (this.secondsLeft > 0) {
    this.secondsLeft--;
    // console.log(this.secondsLeft);
  } else {
    clearInterval(this.timer);
    // console.log("You lost!");
  }
};
