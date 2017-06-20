var TenSecondsMathGame = function() {
  this.n1 = 0;
  this.n2 = 0;
  this.maxNumber = 30;
  this.solution = 0;
};
TenSecondsMathGame.prototype.final = function() {
  operation = prompt("Enter the operation: add, substraction, multiply, division");
  switch (operation) {
    case "add":
      this.add();
      break;
    case "substraction":
      this.substraction();
      break;
    case "multiply":
      this.multiply();
      break;
    case "division":
      this.division();
      break;
    default:
      console.log("this is not a correct operation");
      return this.final();
  }
};


TenSecondsMathGame.prototype.add = function() {
  this.generateTwoRandomNumbers();
  if (this.comprobation() === true) {
    this.generateTwoRandomNumbers();
    return this.add();

  } else {
    console.log(this.n1 + "+" + this.n2);
    this.solution = parseInt(prompt("Enter the correct answer"));
    if (this.solution == (this.n1 + this.n2)) {
      console.log("Great!");
      this.add();
    } else {
      console.log("Wrooong!");
    }
  }
};

TenSecondsMathGame.prototype.substraction = function() {
  this.generateTwoRandomNumbers();
  if ((this.n1 < this.n2) || (this.comprobation() === true)) {
    this.generateTwoRandomNumbers();
    return this.substraction();
  } else {
    console.log(this.n1 + "-" + this.n2);
    this.solution = parseInt(prompt("Enter the correct answer"));
    if (this.solution == (this.n1 - this.n2)) {
      console.log("Great!");
      this.substraction();
    } else {
      console.log("Wrooong!");
    }
  }
};

TenSecondsMathGame.prototype.multiply = function() {
  this.generateTwoRandomNumbers();
  if (this.comprobation() === true) {
    this.generateTwoRandomNumbers();
    return this.multiply();
  } else {
    console.log(this.n1 + "*" + this.n2);
    this.solution = parseInt(prompt("Enter the correct answer"));
    if (this.solution == (this.n1 * this.n2)) {
      console.log("Great!");
      this.multiply();
    } else {
      console.log("Wrooong!");
    }
  }
};

TenSecondsMathGame.prototype.division = function() {
  this.generateTwoRandomNumbers();
  console.log(this.n1 + "/" + this.n2);
  this.solution = parseInt(prompt("Enter the correct answer"));
  if (this.solution == (this.n1 / this.n2)) {
    console.log("Great!");
    this.division();
  } else {
    console.log("Wrooong!");
  }
};

TenSecondsMathGame.prototype.randomNumber = function() {
  return Math.floor(Math.random() * this.maxNumber);
};

TenSecondsMathGame.prototype.generateTwoRandomNumbers = function() {
  this.n1 = this.randomNumber();
  this.n2 = this.randomNumber();
};

TenSecondsMathGame.prototype.setMaxNumber = function(maxNumber) {
  this.maxNumber = maxNumber;
};

TenSecondsMathGame.prototype.comprobation = function() {
  if ((-4 < (this.n1 - this.n2)) && ((this.n1 - this.n2) < 4)) {
    return true;
  } else {
    return false;
  }
};

  var i = 10;
  var intervalId = setInterval(function() {
    if (i > 0) {
      console.log(i);
    } else {
      console.log("Pop!");
      clearInterval(intervalId);
    }

    i--;
  }, 1000)





// Hilo principal

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
