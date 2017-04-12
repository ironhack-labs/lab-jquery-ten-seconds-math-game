// Use this file to write the logic of your game, the needed attrs and functions

/*
Generate the Math question.
Generate the solution.
Print the Math question in the console.
*/

var TenSecondsMathGame = function(options) {
	$("#input-number-limit").change(function() {
		$('#number-limit-display').html($("#input-number-limit").val());
	});
	var upperLimit = $("#input-number-limit").val(); // this doesn't work

var num1 = Math.floor(Math.random()*90) + 1;
var num2 = Math.floor(Math.random()*80) + 1;

var questionAndAnswer = function() {

	for (i=0; i<this.upperLimit; i++) {
		var answer = $(".answer").val();
	if ($(".add:checkbox:checked").length > 0 && $("#btn-start").data('clicked')) {
	$('.game-board').css('display', 'block');
	$('.question').html(num1 + ' + ' + num2 + ' = ' );
		if (answer != ParseInt(num1+num2)) {
			$(".answer").css('border-color', 'red');
			return false;
		}

		else {
			$(".answer").val('');
			return true;
		}
	} 

	if ($(".substract:checkbox:checked").length > 0 && $("#btn-start").data('clicked')) {
	$('.game-board').css('display', 'block');
	$('.question').html(num1 + ' - ' + num2 + ' = ' );
		if (answer != ParseInt(num1-num2)) {
			$(".answer").css('border-color', 'red');
			return false;
		}
		else {
			$(".answer").val('');
			return true;
		}
 	} 

 	if ($(".multiply:checkbox:checked").length > 0 && $("#btn-start").data('clicked')) {
	$('.game-board').css('display', 'block');
	$('.question').html(num1 + ' * ' + num2 + ' = ' );
		if (answer != ParseInt(num1*num2)) {
			$(".answer").css('border-color', 'red');
			return false;
		}
		else {
			$(".answer").val('');
			return true;
		}
 	} 

 	if ($(".divide:checkbox:checked").length > 0 && $("#btn-start").data('clicked')) {
	$('.game-board').css('display', 'block');
	$('.question').html(num1 + ' / ' + num2 + ' = ' );
		if (answer != ParseInt(num1/num2)) {
			$(".answer").css('border-color', 'red');
			return false;
		}
		else {
			$(".answer").val('');
			return true;
		}
 	} 

   }
}

};

TenSecondsMathGame();

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer