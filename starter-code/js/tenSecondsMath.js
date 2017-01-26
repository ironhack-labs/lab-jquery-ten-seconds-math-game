// Use this file to write the logic of your game, the needed attrs and functions

// We will create the constructor of tenSecondsMathGame. This function will:
//
// Receive the operation selected by the user and the top limit of the operation's numbers.
// Set the operation the user selected to play with.
// Set the top limit number for the operations.
// We also need a function that generates a random number between 1 and the limit number the user indicated. This will be usefull every time we start a new question.
//


var TenSecondsMathGame = function(options, limit) {
this.chosenOp = options;
this.topLimit = limit;

this.changeLimit = function(newLimit){
  this.topLimit = newLimit;
};
this.updateChosenOp = function(newOp){
  this.chosenOp = newOp;
};


// / var operation = new TenSecondsMathGame (add, 10);

// Returns a random integer between [1..numberLimit]
var randomNumGenerator = function randomNum (){
  var numGenerated = Math.floor(Math.random()*10);
  return numGenerated;
};


var Mathquestion = function(options) {
  var n1 = randomNumGenerator();
  var n2 = randomNumGenerator();

  switch (options) {

    case '+':
    return n1 + '+' + n2;

    case '-':
    return n1 + '-' + n2;


    case '*':
    return n1 + '*' + n2;

   case '/':
    return n1 + '/' + n2;

   }

  console.log(options);
};

};

Mathquestion("/");







// Returns an object with {question, answer}


// Checks a user answer
