// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
  var calculator = new Calculator(100,"+");
  calculator.generateBothRandomNumber();
  console.log(calculator.numberOne + calculator.operator + calculator.numberTwo);
  
};
