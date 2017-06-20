var counter = 10;


var TenSecondsMathGame = function(options) {
  this.operation = options.operation;
  this.upperlimit = options.upperlimit;
};


function randomNumberGen(upperlimit) {
  var numCheck = true;
  var randNum = Math.floor(Math.random()*upperlimit);
  return randNum;
}

// Returns an object with {question, answer}
function questionGenerator(operator, upperlimit) {
  var computerResult = 0;
  var numbersList = [];
  var responseObject = {
    question: "",
    solution: 0
  };
  var randNum1 = randomNumberGen(upperlimit);
  var randNum2 = randomNumberGen(upperlimit);
  switch (operator) {
    case "+":
      var addDifferenceNums = differenceIsSmallerThan3Check(randNum1, randNum2, upperlimit);
      var sumNums = isEqual(addDifferenceNums[0], addDifferenceNums[1], upperlimit);
      computerResult = sumNums[0] + sumNums[1];
      numbersList.push(sumNums[0], sumNums[1]);
      break;
    case "-":
      var subDifferenceNums = differenceIsSmallerThan3Check(randNum1, randNum2, upperlimit);
      var negCheckNums = isNegativeCheck(subDifferenceNums[0], subDifferenceNums[1], upperlimit);
      var subtractNums = isEqual(negCheckNums[0], negCheckNums[1]);
      computerResult = subtractNums[0] - subtractNums[1];
      numbersList.push(subtractNums[0], subtractNums[1]);
      break;
    case "*":
      var multDifferenceNums = differenceIsSmallerThan3Check(randNum1, randNum2, upperlimit);
      var multNums = isEqual(multDifferenceNums[0], multDifferenceNums[1], upperlimit);
      computerResult = multNums[0] * multNums[1];
      numbersList.push(multNums[0], multNums[1]);
      break;
    case "/":
      var catchInfinityNums = catchInfinity(randNum1, randNum2, upperlimit);
      computerResult = catchInfinityNums[0] / catchInfinityNums[1];
      numbersList.push(catchInfinityNums[0], catchInfinityNums[1]);
      break;
    default:
  }
  var genQuestion = "Question: " + numbersList[0] + " " + operator + " " + numbersList[1];
  responseObject.question = genQuestion;
  responseObject.solution = computerResult;
  return responseObject;
}

function isNegativeCheck(num1, num2, upperlimit) {
  var negative = true;
  var numbers = [num1, num2];
  while (negative) {
    if ((num1 - num2) < 0) {
      num1 = randomNumberGen(upperlimit);
      num2 = randomNumberGen(upperlimit);
    }
    else {
      negative = false;
    }
  }
  return numbers;
}
function differenceIsSmallerThan3Check(num1, num2, upperlimit) {
  var negative = true;
  var numbers = [num1, num2];
  while (negative) {
    if ((num1 - num2) < 3) {
      num1 = randomNumberGen(upperlimit);
      num2 = randomNumberGen(upperlimit);
    }
    else {
      negative = false;
    }
  }
  return numbers;
}
function isEqual(num1, num2, upperlimit) {
  var negative = true;
  var numbers = [num1, num2];
  while (negative) {
    if (num1 === num2) {
      num1 = randomNumberGen(upperlimit);
      num2 = randomNumberGen(upperlimit);
    }
    else {
      negative = false;
    }
  }
  return numbers;
}
function catchInfinity(num1, num2, upperlimit) {
  var negative = true;
  var numbers = [num1, num2];
  while (negative) {
    if (num1/num2 === Infinity) {
      num1 = randomNumberGen(upperlimit);
      num2 = randomNumberGen(upperlimit);
    }
    else {
      negative = false;
    }
  }
  return numbers;
}
// Checks a user answer
function isCorrectAnswer(object, userResult) {
  if (object.solution === parseInt(userResult)) {
    return true;
  }
  else {
    return false;
  }
}

function _startTimer() {

  var intervalId = setInterval(function(){
    var timer = document.querySelector('#timer-second');
    timer.innerHTML = counter;
    counter -= 1;

    if(counter < 0) {
      clearInterval(intervalId);
      document.querySelector('.container').style.backgroundColor = 'red';
      document.querySelector('.answer').disabled = 'true';
      document.querySelector('.timer').classList.add('hide');
      document.querySelector('.gameover').classList.remove('hide');
      document.querySelector('.restart').style.display = 'block';
    }
  }, 1000);
}

function updateTimer() {
  var timer = document.querySelector('#timer-second');
  timer.innerHTML = counter += 10;
}
