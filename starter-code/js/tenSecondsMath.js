var options = {
  ops: ['addition', 'substract', 'multiply','divide'],
  numberLimit: 10
};

var TenSecondsMathGame = function(options) {
  this.operators = options.ops;
  this.numberLimit = options.numberLimit;
  this.simbol;
  this.numberRandom1;
  this.numberRandom2;
};

TenSecondsMathGame.prototype.selectOperator = function(){
  var random = Math.floor(Math.random()* this.operators.length);
  this.simbol = this.operators[random];
  console.log(random);
};

TenSecondsMathGame.prototype.selectNumber = function(){
  var random2 = Math.floor(Math.random()* this.numberLimit);
  this.numberRandom1 = random2;
  var random1 = Math.floor(Math.random()* this.numberLimit);
  this.numberRandom2 = random1;
  console.log(random1, random2);
};

var ten = new TenSecondsMathGame(options);
ten.prototype = Object.create(TenSecondsMathGame.prototype);


console.log('linked');

// var numUserChoice = function(num) {
//   while( num !== 10 && num !== 20 && num !== 30 && num !== 40)
//   if (num === 10) {
//     return num;
//   }
//   else if (num === 20) {
//     return num;
//   }
//   else if (num === 30) {
//     return num;
//   }
//   else if (num === 40) {
//     return num;
//   }
//   else if (num === 50) {
//     return num;
//   }
// };


// var ten = new TenSecondsMathGame(options);




































































/* $('document').ready(function(){

	var totalWin = 0;
	var secondsLeft = 10;
	var addSecond = function() {
		secondsLeft++;
	};
	var minusSecond = function() {
		secondsLeft--;
	};

	var randQuestion = function() {
		var randNumber1 = Math.floor(Math.random()*10);
		var randNumber2 = Math.floor(Math.random()*10);
		return randNumber1 + " + " + randNumber2;
	};

	$('#question').text(randQuestion());

	var checkAnswer = function() {

	 	var correctAnswer = eval($('#question').text());
	 	var inputAnswer = Number($('#answer').val());

	 	if ((totalWin === 0) && (correctAnswer === inputAnswer)) {
	 		$('#answer').val('');
	 		console.log('1st input erased');
	 		$('#question').text(randQuestion());
	 		console.log('1st question changed', randQuestion());
	 		totalWin++;
	 		console.log('1st win', totalWin);

	 		var timer = setInterval(function(){
	 			minusSecond();
	 			$('#countdown').text(secondsLeft);
	 			console.log(secondsLeft);
	 			if (secondsLeft <= 0) {
	 				clearInterval(timer);
	 				$('#answer').replaceWith('<h2>Game over! You got ' + totalWin + ' correct!</h2>');

	 			}
	 			$('#countdown').text(secondsLeft);

	 		}, 1000);

	 	} else if (correctAnswer === inputAnswer) {
	 		console.log('success');
	 		$('#answer').val('');
	 		addSecond();
	 		$('#countdown').text(secondsLeft);
	 		console.log('added 1 second');
	 		$('#question').text(randQuestion());
	 		console.log('question changed');
	 		totalWin++;
	 		console.log('total win', totalWin);
		 	}
	 };


	$(document).on('keyup', '#answer', function(){
		checkAnswer();
	});



}); */
