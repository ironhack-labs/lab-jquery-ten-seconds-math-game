// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function( limit, operation) {
  this.limit = limit;
  this.operation = operation;
  this.randomNumber = function(limit){
    return Math.floor(Math.random()*limit);
  };
  this.solve = function(opr, op1, op2){
    switch (opr) {
      case '+': return op1 + op2;
      case '-': return op1 - op2;
      case '*': return op1 * op2;
      case '/': return op1 / op2;
    }
  },
  this.generateQuestion = function(){
    var newOp1, newOp2, newOperation, result;
    var valid = true;

    do{
      newOp1 = this.randomNumber(this.limit);
      newOp2 = this.randomNumber(this.limit);
      newOperation = (typeof this.operation == 'string')
        ? this.operation
        : this.operation[this.randomNumber(this.operation.length)];
      result = this.solve(newOperation, newOp1, newOp2);

      if( newOp1 === newOp2 ){
        valid = false;
      }else if( newOperation !== '/' && Math.abs(newOp1 - newOp2) < 3 ){
        valid = false;
      }else if(result < 0){
        valid = false;
      }else{
        valid = true;
      }
    }while(!valid);

    return {
      op1: newOp1,
      op2: newOp2,
      operation: newOperation,
      solution: result
    };
  }
};


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
