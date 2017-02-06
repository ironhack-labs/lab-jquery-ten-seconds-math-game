

function TenSecondsMathGame(operator,limit){
this.operator = operator;
this.limit = limit;
}



TenSecondsMathGame.prototype.randomProblem = function () {
 var randomNumber1 =  Math.floor((Math.random() * this.limit) + 1);
 var randomNumber2 =  Math.floor((Math.random() * this.limit) + 1);
 if (this.operator === "+") {
   this.randomProb = randomNumber1 + randomNumber2;
   console.log("your problem set is:" + randomNumber1 + "+" +randomNumber2);

 }

 else if (this.operator === "-"){
   this.randomProb = randomNumber1 - randomNumber2;
     console.log("your problem set is:" + randomNumber1 + "-" +randomNumber2);
 }

 else if (this.operator === "/"){
   this.randomProb = randomNumber1 / randomNumber2;
     console.log("your problem set is:" + randomNumber1 + "/" +randomNumber2);
 }

 else if (this.operator === "*") {
   this.randomProb = randomNumber1 * randomNumber2;
     console.log("your problem set is:" + randomNumber1 + "*" +randomNumber2);
 }
 else if (this.operator === "%") {
   this.randomProb = randomNumber1 % randomNumber2;
     console.log("your problem set is:" + randomNumber1 + "%" +randomNumber2);
 }

 else {
   console.log("youre very stupid man...");
 }
};

TenSecondsMathGame.prototype.userAnswer = function (answer) {
 if (answer != this.randomProb) {
     console.log("Incorrect!");
 }

 else {
   console.log("Correct!");
 }
};

var randomGame = new TenSecondsMathGame('*', 2);
randomGame.randomProblem();
randomGame.userAnswer(2);
