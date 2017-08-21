// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
	var startButton = document.getElementById("start");
	var restartButton = document.getElementById("restart");
	var questionArea = document.getElementById("question");

	startButton.addEventListener("click", function() {
		var hideable = document.getElementById("game-options");
		var hideable2 = document.getElementById("game-over-img");
		var addition = document.getElementById("addition");
		var subtraction = document.getElementById("substraction");
		var multiplication = document.getElementById("multiplication");
		var division = document.getElementById("division");
		var operationsArray = [addition, subtraction, multiplication, division];
		var filteredArray = operationsArray.filter(function(i) {
			return i.checked === true;
		})
		console.log(addition)
		if (filteredArray.length === 0) {
			alert("Please Choose One Operator");
			return undefined;
		}
		game = new TenSecondsMathGame(filteredArray, 10)
		questionArea.innerHTML = game.newQuestion();
		hideable.style.display = "none";
		hideable2.style.display = "none";
		})

	restartButton.addEventListener("click", function() {
		var answerInput = document.getElementById("answer");
		var answer = answerInput.value
		if (game.isCorrectAnswer(answer)) {
			answerInput.style.border = "5px solid green";
			answerInput.value = ''
			questionArea.innerHTML = game.newQuestion();
		} else {
			answerInput.style.border = "5px solid red";
		}
	})


	
 };
