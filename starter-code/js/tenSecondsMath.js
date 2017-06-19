// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operations, limit) {
  this.operations = operations;
  this.limit = operations;

  this.operations = prompt("Introduce las operaciones,Suma -> s Resta -> r Multiplicación -> m División ->D").toUpperCase();
  this.limit = prompt("Introduce el limite numerico");
  console.log(operations);



  /*for (var i = 0; i < operations.length; i++) {
    if (true) {

    }
    if (true) {

    }
    if (true) {

    }
    if (true) {

    }
  }
  */
};


function questionGenerator() {


  switch (operations) {
    case 'S':

      addition();

      break;
    case 'R':
      subtraction();

      break;
    case 'M':
      multi();

      break;
    case 'D':
      division();

      break;
    default:


  }

  function addition() {
    var sum1 = 0;
    var sum2 = 0;

    sum1 = Math.floor(Math.random() * (limit.TenSecondsMathGame - min)) + limit.TenSecondsMathGame1;
    sum2 = Math.floor(Math.random() * (limit.TenSecondsMathGame - min)) + limit.TenSecondsMathGame1;
    return console.log(sum1 + " + " + sum2);


  }

  function subtraction() {

  }

}
// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
