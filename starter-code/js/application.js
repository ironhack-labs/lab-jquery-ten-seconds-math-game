// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){

    var btn = document.querySelector('.start-game-btn');

    btn.addEventListener('click', function(e) {
        document.querySelector('.game-options').style.display = "none";
        var game = new TenSecondsMathGame({ops: ["addition"], numberLimit:10});
        var frame = document.querySelector('.frame');
        var questionText = document.createElement('h3');
        frame.appendChild(questionText);
        questionText.innerHTML = game.newQuestion();
        var answerInput = document.createElement('input');
        frame.appendChild(answerInput);
        answerInput.setAttribute('placeholder', 'answer');
        answerInput.addEventListener('keydown', function(event){
            // console.log(event.currentTarget.value);
            if(event.key === 'Enter') {
                var isCorrect = game.isCorrectAnswer(parseInt(event.currentTarget.value));
                console.log('isCorrect', isCorrect);

                if (isCorrect) {
                    questionText.innerHTML = game.newQuestion();
                    answerInput.classList.remove('wrong');
                } else {
                    answerInput.classList.add('wrong');
                }
            }
        });
    });

    
};
