// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
	var startButton = document.getElementById("start");
	var restartButton = document.getElementById("restart");
	var questionArea = document.getElementById("question");
	var slider = document.getElementById("number-limit-range");
	var sliderValue = document.getElementById("number-limit-range").value;
	var sliderLabel = document.getElementById("number-limit");

	console.log(sliderValue)

	slider.onchange = function() { 
		sliderValue = document.getElementById("number-limit-range").value;
		sliderLabel.innerHTML = sliderValue }
	
	setTimeout(function () { console.log(sliderValue)}, 5000)

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
		if (filteredArray.length === 0) {
			alert("Please Choose One Operator");
			return undefined;
		}
		var finalOpsArray = []
		filteredArray.forEach(function(i) {
			if (i === addition) {
				finalOpsArray.push("+")
			} else if (i === subtraction) {
				finalOpsArray.push("-")
			} else if (i === multiplication) {
				finalOpsArray.push("x") 
			} else {
				finalOpsArray.push("/")
			}
		})

		var sliderValue = slider.value

		var game = new TenSecondsMathGame(finalOpsArray, sliderValue)
		questionArea.innerHTML = game.newQuestion();
		hideable.style.display = "none";
		hideable2.style.display = "none";

		

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


	})
 };
