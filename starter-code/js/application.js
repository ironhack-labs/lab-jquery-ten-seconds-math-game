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

    var i = 10
    var intervalId = setInterval( function (){
      console.log(i)
      i--

      answer = document.getElementById('answer').value
      //
      // if (i<0) clearInterval(intervalId)
      // game.isCorrectAnswer(answer) == 'Great!!' ? clearInterval(intervalId) : console.log()
      if(game.isCorrectAnswer(answer) == 'Great!!'){
        clearInterval(intervalId)
        // answer.value = ''
        startGame(operationsChecked, numberLimit)
      }
    }, 1000)
  }
}
