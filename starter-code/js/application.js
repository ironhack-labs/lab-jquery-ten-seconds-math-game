var timeLimit;
var opArray = [];

var operations = {
  "+" : function(a,b)  { return a + b; },
  "-" : function(a,b)  { return a - b ;},
  // "/" : function(a,b)  { return a / b ;},
  // "*" : function(a,b)  { return a * b ;}
};


function start() {
  // getNum();
  // getOperator();
  document.getElementById('box2').style.display = 'none';
  document.getElementById('box3').style.display = 'block';
  // var realAnswer = question();
  // var userAnswer = ;
  // checkAnswer(realAnswer, userAnswer) {
  //
  // }
  question();
}





function Question() {
  var theQuestion = document.getElementById("questionText");
  var int1,int2,numLimit;

  function getNum(){
    numLimit = document.getElementById("numLimit").value;
    console.log('numLimi ' + numLimit);
  }
  getNum();

  function getOperator(){
    var add = document.getElementById("adding");
    var substract = document.getElementById("substracting");
    var divide = document.getElementById("dividing");
    var multiply = document.getElementById("multiplying");
    if (add.checked) {
      console.log("it's add");
      opArray.push("+");
    } if (substract.checked) {
      console.log("it's sub");
      opArray.push("-");
    } else if (!substract.checked && !add.checked){
      alert("Select a number!");
      return;
    }
  }
  getOperator();

  // Returns a random integer between [1..numberLimit]
  int1 = Math.floor(Math.random() * (numLimit - 1)) + 1;
  int2 = Math.floor(Math.random() * (numLimit - 1)) + 1;

  // Returns an object with {question, answer}
  var randomOp = Math.floor(Math.random() * (1 + opArray.length - 1));
  var generatedOp = ""+int1 + opArray[randomOp] + int2;
  theQuestion.innerText = ""+generatedOp;



  checkAnswer();

}
// Checks a user answer
function checkAnswer() {
  var userAnswer = document.getElementById("answer").value;
  //console.log("user answer = "+userAnswer);

  var realAnswer = operations["+"](int1,int2);
  //console.log("real result = "+realAnswer);

  if (userAnswer == realAnswer) {
    console.log("well done");
    document.getElementById("answer").value = undefined;
    question();
  }
}
