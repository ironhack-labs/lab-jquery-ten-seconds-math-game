// Use this file to write the logic of your game, the needed attrs and functions

/*
Generate the Math question.
Generate the solution.
Print the Math question in the console.
*/

var upperLimit


var TenSecondsMathGame = function(options) {

var answer1;


function setUpperLimit(upperLimit) {
		$("#input-number-limit").change(function() {
		upperLimit = this.value;
		$('#number-limit-display').html('&nbsp;' + $("#input-number-limit").val());
		makeQuestion(upperLimit);
	});
   }

var randomNumber = function (upperLimit) {
 	return Math.floor((Math.random()* upperLimit ) + 1)
	};
	
	
function makeQuestion(upperLimit){

		var num1 = randomNumber(upperLimit);
		var num2 = randomNumber(upperLimit);

		if(num1 < num2) {
			upperLimit = $("#input-number-limit").val()
			makeQuestion(upperLimit)

		} else {
			if ($("#add:checkbox:checked").length > 0) {

				$('#question').text(num1 + ' + ' + num2 + ' = ' );
				answer1 = num1 + num2
				checkAnswer()
				return answer1
			} 


			else if ($("#multiply:checkbox:checked").length > 0) {
				$('#question').text(num1 + ' * ' + num2 + ' = ' );

				answer1 = num1 * num2
			    checkAnswer()
			    return answer1
			} 

			else if ($("#substract:checkbox:checked").length > 0) { //gets stuck after first answer
  

					$('#question').text(num1 + ' - ' + num2 + ' = ' );
					answer1 = num1 - num2
					checkAnswer()
			        return answer1
				}

			 

			else {
					$('#question').text(num1 + ' / ' + num2 + ' = ' );
					answer1 = Math.round(num1 / num2)
			        checkAnswer()
			        return answer1
				}
			
	

		}	
	
}

function checkAnswer (answer){
	var answer = $("#answer").change(function(){
		//console.log("right answer", answer1)
		//console.log("answer", this.value)
    var answerValue = parseInt(this.value);
 //console.log("bla",answerValue)

   if (answerValue === answer1) {
   	//console.log("answer checked")
 	 upperLimit = $("#input-number-limit").val()
    	makeQuestion(upperLimit)
    }
    else {
    	$(".answer").css('border-color', 'red');
    }
  });
}
setUpperLimit();

};

TenSecondsMathGame();


/*
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
 	} */