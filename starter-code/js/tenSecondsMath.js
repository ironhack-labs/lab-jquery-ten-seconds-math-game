// Use this file to write the logic of your game, the needed attrs and functions


// var selectOperator = function(selected){
//   var arrPossibleSelector = [];
//   arrPossibleSelector.push(selected);
//   return arrPossibleSelector[Math.floor(Math.random() * arrPossibleSelector.length)];
// };
/*function validNumbers(n1,n2,operator){
  if (n1 == n2) {
    return false;
  } else if (operator != "plus" ) {
    if (n1<n2) {
      return false;
    }
  }else {
    return true;
  }
}*/

//funcion constructora para objeto game
function TenSecondsMathGame(ops,numberLimit){

  //startTimer

  //pasamos los operadores
  this.ops = ops;
  //pasamos el límite numerico
  this.numberLimit = numberLimit;
  //seleccionamos numero random en funcion del limite
   this.randomNumber = function(numberLimit){
    numberLimit = this.numberLimit;
    var arrPossibleNumbers = [];
    var i = 0;
    while (i <= numberLimit) {
      arrPossibleNumbers.push(i);
      i++;
    }
    return arrPossibleNumbers[Math.floor(Math.random() * arrPossibleNumbers.length)];
  };
  //generamos nueva pregunta matematica
  this.newQuestion = function(ops,numberLimit) {
    ops = this.ops;
    var question = "";
    var result;
    var n1 = this.randomNumber(numberLimit);
    var n2 = this.randomNumber(numberLimit);
    //if (!validNumbers(n1, n2, operator)){
    //  mathLogic();
    //}
    switch (ops) {
      case "plus":
        question = n1+ " + " +n2;
        result= n1 +n2;
        break;
      case "minus":
        question = n1+ "-"+ n2;
        result= n1+ n2;
        break;
      case "multiply":
        question = n1+ " * " +n2;
        result= n1 * n2;
        break;
      case "division":
        question = n1+ " / " +n2;
        result= n1 / n2;
        break;
    }
    //creamos nueva propiedad, result, que se actualiza
    //con cada nueva pregunta
      console.log(question);
      this.result = result;
      this.checkTimer = 10;

      var that = this;

      var startTimer = setInterval(function(){
        if(that.checkTimer > 0){
          console.log(that.checkTimer);
        }else{
          console.log(that.checkTimer);
          clearInterval(startTimer);
        }
        that.checkTimer--;
      },1000);
  };
  //comprueba que la respuesta sea correcta
  this.checkAnswer = function(answer){
    if( answer == this.result){
        checkTimer + 10;
        this.newQuestion();
    }

  };
}
//creamos el nuevo objeto game
var game = new TenSecondsMathGame("plus", 10);
game.newQuestion();
