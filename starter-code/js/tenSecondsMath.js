function numberLimit () {
    var settingNumber = document.getElementById("slider").value;
    document.getElementsByClassName("counter")[0].innerHTML = settingNumber;
  }


  var answerPc = 0;
// * document.getElementsByClassName("counter")))[0]

  function randomQuestionAdding () {
   var numberOne = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);
   var numberTwo = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);

   if (numberOne < numberTwo) {
     randomQuestionAdding();
   } else if (numberOne - numberTwo < 3) {
     randomQuestionAdding();
   } else if (numberTwo === numberOne ) {
     randomQuestionAdding();
   } else {
     var questionAdd = numberOne + "+" + numberTwo;
     answerPc = numberOne + numberTwo;
     document.getElementsByClassName("question")[0].innerHTML = questionAdd;


   }
   return answerPc;
 }
  console.log(answerPc);

  function randomQuestionSubstracting () {
   var numberOne = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);
   var numberTwo = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);

   if (numberOne < numberTwo) {
     randomQuestionSubstracting();
   } else if (numberOne - numberTwo < 3) {
     randomQuestionSubstracting();
   } else if (numberTwo === numberOne ) {
     rrandomQuestionSubstracting();
   } else {
     var questionSubstract = numberOne + "-" + numberTwo;
     answerPc = numberOne - numberTwo;
     document.getElementsByClassName("question")[0].innerHTML = questionSubstract;
     answerPc = numberOne - numberTwo;


   }
   return answerPc;
  }

  function randomQuestionMultiplying () {
   var numberOne = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);
   var numberTwo = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);

   if (numberOne < numberTwo) {
     randomQuestionMultiplying();
   } else if (numberOne - numberTwo < 3) {
     randomQuestionMultiplying();
   } else if (numberTwo === numberOne ) {
     randomQuestionMultiplying();
   } else {
     var questionMultiply = numberOne + "*" + numberTwo;
     answerPc = numberOne * numberTwo;
     document.getElementsByClassName("question")[0].innerHTML = questionMultiply;
     console.log(numberOne * numberTwo);


   }
   return answerPc;
  }

  function randomQuestionDividing () {
   var numberOne = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);
   var numberTwo = Math.floor((Math.random()*parseInt(document.getElementsByClassName("counter")[0].textContent))+1);

   if (numberOne < numberTwo) {
     randomQuestionDividing();
   } else if (numberOne % numberTwo !== 0) {
     randomQuestionDividing();
  } else {
     var questionDivide = numberOne + "/" + numberTwo;
     answerPc = numberOne / numberTwo;
     document.getElementsByClassName("question")[0].innerHTML = questionDivide;
     console.log(numberOne / numberTwo);

   }
   return answerPc;
  }


var arrayFunctions = [randomQuestionAdding,randomQuestionSubstracting,randomQuestionMultiplying,randomQuestionDividing];

     function TenSecondsMathGame () {
       var newArrrayFunctions = [];
      for (var i = 0; i < document.getElementsByClassName('options').length; i++)
   { if (document.getElementsByClassName('options')[i].checked === true) {
   newArrrayFunctions.push(arrayFunctions[i]);}
   }
      var questionRandom = newArrrayFunctions[Math.floor(Math.random()*newArrrayFunctions.length)];
        questionRandom();
    }


    function checkingAnswer (){
      var userInput = parseInt(document.getElementById("answer").value);
      console.log(userInput);
        if (userInput === answerPc) {
          document.getElementById("answer").style.borderColor="black";
          document.getElementById("answer").value = "";
          timerNew();
          TenSecondsMathGame();}
          else {
       document.getElementById("answer").style.borderColor="red";}}

function timerNew () {
    var i = 10;
    var setTimer = setInterval(function() {
      if (i > 0) {
        console.log(i);
      } else  {
        console.log("Time is over!");
        clearInterval(setTimer);
      }
    	i--;
    }, 1000);}
