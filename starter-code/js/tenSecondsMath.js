// Use this file to write the logic of your game, the needed attrs and functions


//var TenSecondsMathGame = function(options) {
var TenSecondsMathGame = function(options) {


  this.inputObject = options;

  this.resultObject = {
    answer: "",
    question: ""
  };

  var operationSelected = "";
  var operationSelectedSign = "";
  var numberLimitSelected = 0;
  var numArray = [];
  var result;

};

TenSecondsMathGame.prototype.decideNumbers = function(num1,num2){

  if(Math.abs(num1-num2)<3)
  {
    if(num1<3 && num1<=num2)
    {
      num2 += 3;
    }
    else if(num1<3 && num1>num2)
    {
      num1 += 3;
    }
    else if(num2<3 && num1>num2)
    {
      num1 += 3;
    }
    else if(num2<3 && num1<=num2)
    {
      num2 += 3;
    }
    else if(num1<=num2)
    {
      if(this.randomNumber(2)===0)
      {
        num2 += 3;
      }
      else {
        num1 -= 3;
      }

    }
    else {

      if(this.randomNumber(2)===0)
      {
        num1 += 3;
      }
      else {

        num2 -= 3;
      }
    }
  }

  var numArray=[num1,num2];

  return numArray;
};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber = function(numberLimit){

  return Math.floor(Math.random()*(numberLimit+1));
};

TenSecondsMathGame.prototype.addFunction = function(num1,num2){
  return num1+num2;
};

TenSecondsMathGame.prototype.substractFunction = function(num1,num2){
  return num1-num2;
};

TenSecondsMathGame.prototype.multiplyFunction = function(num1,num2){
  return num1*num2;
};

TenSecondsMathGame.prototype.divideFunction = function(num1,num2){
  return Math.floor(num1/num2);
};

TenSecondsMathGame.prototype.newQuestion = function(){

  if(this.inputObject.ops.length>1)
  {
    operationSelected = this.inputObject.ops[this.randomNumber(this.inputObject.ops.length-1)];
  }
  else
  {
    operationSelected = this.inputObject.ops[0];
  }

  numberLimitSelected = this.inputObject.numberLimit;

  switch (operationSelected) {
    case 'add':
      num1 = this.randomNumber(numberLimitSelected);
      num2 = this.randomNumber(numberLimitSelected);
      operationSelectedSign = " + ";

      numArray = this.decideNumbers(num1,num2);

      this.resultObject.question = numArray[0].toString() + operationSelectedSign + numArray[1].toString();

      result = this.addFunction(numArray[0],numArray[1]);

      this.resultObject.answer = result;

      break;
    case 'substract':
      num1 = this.randomNumber(numberLimitSelected);
      num2 = this.randomNumber(numberLimitSelected);
      operationSelectedSign = " - ";

      numArray = this.decideNumbers(num1,num2);

      if(numArray[0]<numArray[1])
      {

        this.resultObject.question = numArray[1].toString() + operationSelectedSign + numArray[0].toString();

        result = this.substractFunction(numArray[1],numArray[0]);

        this.resultObject.answer = result;

      }
      else
      {

        this.resultObject.question = numArray[0].toString() + operationSelectedSign + numArray[1].toString();

        result = this.substractFunction(numArray[0],numArray[1]);

        this.resultObject.answer = result;
      }

      break;
    case 'multiply':
      num1 = this.randomNumber(numberLimitSelected);
      num2 = this.randomNumber(numberLimitSelected);
      operationSelectedSign = " * ";

      numArray = this.decideNumbers(num1,num2);

      this.resultObject.question = numArray[0].toString() + operationSelectedSign + numArray[1].toString();

      result = this.multiplyFunction(numArray[0],numArray[1]);

      this.resultObject.answer = result;

      break;
    case 'divide':
      num1 = this.randomNumber(numberLimitSelected);
      num2 = this.randomNumber(numberLimitSelected);
      operationSelectedSign = " / ";

      if(num2===0)
      {
        num2++;
      }

      numArray = [num1,num2];

      this.resultObject.question = numArray[0].toString() + operationSelectedSign + numArray[1].toString();

      result = this.divideFunction(numArray[0],numArray[1]);

      this.resultObject.answer = result;

      break;
    default:

  }

  console.log(this.resultObject.question);
  return this.resultObject;
  // console.log("operationSelected",operationSelected);
  // console.log("numberLimitSelected",numberLimitSelected);
  // console.log("num1 ",num1);
  // console.log("num2 ",num2);
  // console.log("numArray[0] ",numArray[0]);
  // console.log("numArray[1] ",numArray[1]);
  // console.log("result ",result);

};

TenSecondsMathGame.prototype.isCorrectAnswer = function(answer){

    if(answer === this.resultObject.answer)
    {
      return "Great";
    }
    else {
      return "Wrong";
    }
};
