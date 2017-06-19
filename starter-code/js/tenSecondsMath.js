
var limitPrompt = prompt("Please select limit");
var oper = prompt("Select add, rest, multiply or divide");

var options = {limit: limitPrompt,
              operation: oper
              };
              
function TenSecondsMathGame(options){
  this.limit = Number(options.limit);
  this.operation = options.operation;
}

Game.prototype.random = function(){
  return Math.floor((Math.random() * this.limit) + 1);
}

Game.prototype.calc= function(){
  var num1 = this.random();
  var num2 = this.random();
  var finalResult = {result: 0,user: 0};
  switch(this.operation){
    case "sum" :
       finalResult.user = prompt(num1 + " + " + num2);
       finalResult.result = num1 + num2;
       this.compareResult(Number(finalResult.user), finalResult.result)
       return finalResult;
       break;
    case "substr" :
      if(num1<num2){
       finalResult.user = prompt(num2 + " - " + num1);
       finalResult.result = num2 - num1;
       this.compareResult(Number(finalResult.user), finalResult.result)
       return finalResult;
      }else{
       finalResult.user = prompt(num1 + " - " + num2);
       finalResult.result = num1 - num2;
       this.compareResult(Number(finalResult.user), finalResult.result)
       return finalResult;
      }
      break;
    case "mult" : 
      finalResult.user = prompt(num1 + " * " + num2);
      finalResult.result = num1 * num2;
      this.compareResult(Number(finalResult.user), finalResult.result)
      return finalResult;
      break;
    case "div" : 
      finalResult.user = prompt(num1 + " / " + num2);
      finalResult.result = num1 / num2;
      this.compareResult(Number(finalResult.user), finalResult.result)
      return finalResult;
      break;
  }
}

Game.prototype.compareResult= function(result, user){

  if(result===user){
    this.calc();
  }else{
    alert("wrong");
  }
}

var opt1 = new Game(options);

opt1.calc();




