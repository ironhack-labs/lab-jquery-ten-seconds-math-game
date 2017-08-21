// Use this file to write the interactions between your game and the user

//Initialize ion library
var game = new TenSecondsMathGame(['addition', 'multiplication'], 10)

window.onload = function (){
  var starButton = document.getElementById('start')

  starButton.onclick = function (){
    var checkboxs = document.getElementsByClassName('option-box')
    var operationsChecked = []

    for(var i=0; i<checkboxs.length; i++){
      if(checkboxs[i].checked) operationsChecked.push(checkboxs[i].getAttribute('id'))
    }

    var numberLimit = Number(document.getElementById('number-limit').innerHTML)

    var gameOptions = document.getElementById('game-options')
    gameOptions.parentNode.removeChild(gameOptions)

    startGame(operationsChecked, numberLimit)


  }

  function startGame(operationsChecked, numberLimit){
    game = new TenSecondsMathGame(operationsChecked, numberLimit)

    var question = game.newQuestion().question
    var questionBox = document.getElementById('question')
    questionBox.innerHTML = question

    var answer = document.getElementById('answer').value

    var isFirstQuestion = true

    var intervalId1 = setInterval( function (){
      answer = document.getElementById('answer').value
      if(game.isCorrectAnswer(answer) == 'Great!!'){

        if(isFirtsQuestion) game._startTimer()
        clearInterval(intervalId1)
        // answer.value = ''
        startGame(operationsChecked, numberLimit)
      }
    }, 1000)

    if(game.isCorrectAnswer(answer) == 'Great!!' && isFirtsQuestion){
        game._startTimer()
        isFirstQuestion = false
    }

  }
}
