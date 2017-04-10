console.log("conectado!")

var TenSecondsMathGame = function(operation,maxime) {
  this.operation = operation;
  this.maxime = maxime;
  this.actualTime = 10;
  this.newQuestion = function(){
      var n1 = Math.floor(Math.random()*maxime+1);
      var n2 = Math.floor(Math.random()*maxime+1);
      if(n1<n2 && operation == "subtract"){
        this.newQuestion();
      } else {
        var sign = getSign(operation);
        console.log((n1 + sign + n2));
        var cant = make_calc(n1,n2,operation);
        this.result = cant;
      }
      this.startClock(this.actualTime);
  };
  this.startClock = function(actualTime){
    //actualTime = 20;
    //var that = this;

    var interval = setInterval(function(){
      console.log(actualTime);
      actualTime--;
      if(actualTime < 0) {
        console.log("Game Over!");
        clearInterval(interval);
      }
    }, 1000);
  }

  this.isCorrectAnswer = function(answer){
    if(this.result == answer){
      this.actualTime += 10;
      console.log("Great!");
      this.newQuestion();
    } else {
      console.log("Game Over. The right answer is " + this.result);
    }
  };
  //var cant=make_calc(n1,n2,operation);
  //return cant;
};



function make_calc(n1,n2,operation){
    if(operation == "add"){
      return n1 + n2;
    }
    if(operation == "subtract"){
      return n1 - n2;
    }
    if(operation == "multiply"){
      return n1* n2;
    }
    if(operation == "divide"){
      return n1/ n2;
    }
}
function getSign(operation){
    if(operation == "add"){
      return "+";
    }
    if(operation == "subtract"){
      return "-";
    }
    if(operation == "multiply"){
      return "*";
    }
    if(operation == "divide"){
      return "/";
    }
}

var result = new TenSecondsMathGame("subtract",10);
