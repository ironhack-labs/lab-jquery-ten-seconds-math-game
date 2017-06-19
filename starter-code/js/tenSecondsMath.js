

var TenSecondsMathGame = function() {
  this.n1 = 3;
  this.n2 = 1;
  this.maxNumber = 20;

};

TenSecondsMathGame.prototype.add = function (){
  if(this.comprobation() === true) {
    this.generateTwoRandomNumbers();
    return this.add();
  }
  else {
    return this.n1+this.n2;
  }
};

TenSecondsMathGame.prototype.substraction = function(){
  if((this.n1<this.n2) || (this.comprobation() === true)) {
    this.generateTwoRandomNumbers();
    return this.substraction();
  }
  else {
    return this.n1-this.n2;
  }
};

TenSecondsMathGame.prototype.multiply = function(){
  if(this.comprobation() === true) {
    this.generateTwoRandomNumbers();
    return this.multiply();
  }
  else {
  return this.n1*this.n2;
  }
};

TenSecondsMathGame.prototype.division = function(){
  return this.n1/this.n2;
};

TenSecondsMathGame.prototype.randomNumber = function(){
  return Math.floor(Math.random()*this.maxNumber);
};

TenSecondsMathGame.prototype.generateTwoRandomNumbers = function(){
  this.n1 = this.randomNumber();
  this.n2 = this.randomNumber();
};

TenSecondsMathGame.prototype.setMaxNumber = function(maxNumber){
  this.maxNumber = maxNumber;
};

TenSecondsMathGame.prototype.comprobation = function () {
  if((-4 < (this.n1-this.n2)) && ((this.n1-this.n2)<4)) {
    return true;
  } else {
    return false;
  }
};





// Hilo principal

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
