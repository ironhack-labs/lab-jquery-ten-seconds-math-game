// Use this file to write the logic of your game, the needed attrs and functions
function TenSecondsMathGame (){
  this.operation='+';
  this.number=10;
}/* first we iniliazed and then we will modify*/
var newGame=new TenSecondsMathGame();

function randomNumber(){
  var selectedNumber=100;
  return Math.floor(Math.random()*(selectedNumber-1)*1);
}

function variables(){
  var number1 =randomNumber();
  var number2= randomNumber();
  var array=[];
  array.push(number1,number2);
  if (array[0]<array[1]){
    /*it will and order to permute the values*/
  }
  /*var initresult=Math.abs(number1-number2);*/

  if (initresult < 3 && number1%number2==0){
    number1 =randomNumber();
    number2= randomNumber();
  }

    return array;

}
function mathOperation(array){
  /*var operator =['+','-','*','/'];
  for (i=0, i=operator.length,i++){
    
  }*/
  switch (newGame.operation) {
    case '+':
    var sum = array[0]+array[1];
    break;
    case '-':
    var substract = array[0]-array[1];
    break;
    case '*':
    var mult = array[0]*array[1];
    break;
    default:
    var div = array[0]/array[1];
  }
}

/*var TenSecondsMathGame = function(options) {

};

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer*/
