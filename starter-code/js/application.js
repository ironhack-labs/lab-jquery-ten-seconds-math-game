// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){

    var btn = document.querySelector('.start-game-btn');

    btn.addEventListener('click', function(e) {

        document.querySelector('.game-options').style.display = "none";
        
        var operations = [];

        if (document.getElementById('js-add-check-box').checked) {
            operations.push('addition');
        }

        if (document.getElementById('js-subtract-check-box').checked) {
            operations.push('subtraction');
        }

        if (document.getElementById('js-multiply-check-box').checked) {
            operations.push('multiplication');
        }

        if (document.getElementById('js-divide-check-box').checked) {
            operations.push('division');
        }

        var numberLimit = Math.floor(document.getElementById('js-limit').value / 10);

        var game = new TenSecondsMathGame({ops: operations, numberLimit:numberLimit});
        
        var frame = document.querySelector('.frame');
        
        var questionText = document.createElement('h3');
        
        frame.appendChild(questionText);
        
        questionText.innerHTML = game.newQuestion();
        
        var answerInput = document.createElement('input');
        
        frame.appendChild(answerInput);
        
        answerInput.setAttribute('placeholder', 'answer');
        
        answerInput.addEventListener('keydown', function(event) {

            if(event.key === 'Enter') {

                var isCorrect = game.isCorrectAnswer(Number(event.currentTarget.value));
                
                if (isCorrect) {

                    questionText.innerHTML = game.newQuestion();
                    
                    answerInput.classList.remove('wrong');

                    answerInput.value = '';
                
                } else {

                    answerInput.classList.add('wrong');
                }
            }
        });
    });

    
};