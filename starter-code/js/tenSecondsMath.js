// Use this file to write the logic of your game, the needed attrs and functions

var ops = ["+", "-", "+", "/"];
var operator = ops[i];
var TenSecondsMathGame = function(limit, operator) {
  if (operator.lenght > 1) {
    var random = Math.floor(Math.random() * operator.lenght);
    switch (random) {
      case random = 1:
        operator = "+";
        break;
      case random = 2:
        operator = "-";
        break;
      case random = 2:
        operator = "*";
        break;
      case random = 2:
        operator = "/";
        break;
    }
  }
  var n1 = Math.floor(Math.random() * limit + 1);
  var n2 = Math.floor(Math.random() * limit + 1);
  var mathQuestion = n1 + " " + operator + " " + n2;
};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
