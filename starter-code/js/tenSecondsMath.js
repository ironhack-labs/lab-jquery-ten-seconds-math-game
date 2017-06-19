// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function( operator, numberLimit) {
  this.n1 = 0;
  this.n2 = 0;
  this.operator = operator;
  this.numberLimit = numberLimit;
  this.result = 0;
};
TenSecondsMathGame.prototype.chooseNumber = function() {
  this.n1 = Math.floor(Math.random() * this.numberLimit );
  this.n2 = Math.floor(Math.random() * this.numberLimit );
};
TenSecondsMathGame.prototype.chooseOperator = function() {
  switch (this.operator) {
    case "+":
      this.result = this.n1 + this.n2;

      break;
    case "-":
      this.result = this.n1 - this.n2;
      break;
    case "/":
    this.result = this.n1 / this.n2;
      break;
      case "*":
      this.result = this.n1 * this.n2;

        break;
    default:
    console.log("choose a valid operation!!!please!!!");


  }

TenSecondsMathGame.prototype.checkResult = function(result){
  if(this.result === this.n1 + this.n2){
    prompt(this.n1 + this.n2);

  }


};

};





// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
