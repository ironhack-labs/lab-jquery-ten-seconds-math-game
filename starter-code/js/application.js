// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){
  var juego;
  var cuentaAtras;

  function startGame(numberLimit, operatorsArray) {
    juego = new TenSecondsMathGame(numberLimit, operatorsArray);
  }

  document.getElementById('begin').onclick = function() {
    var operators = document.getElementsByClassName('operator');
    var operatorsArray = [];
    for (var i = 0; i < operators.length; i++) {
      if (operators[i].checked) {
        operatorsArray.push(operators[i].value);
      }
    }
    startGame(document.getElementById('number_limit').value, operatorsArray);
    juego.setNumbers();
    juego.setCurrentOperator();
    juego.setResult();
    document.getElementById('formula').innerHTML = juego.numberOne + ' ' + juego.currentOperator + ' '+ juego.numberTwo;
    cuentaAtras = new Contador();
    cuentaAtras.play();
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'block';
  };

  document.getElementById('result').onkeypress = function(e) {
    if (e.keyCode === 13) {
      if (document.getElementById('result').value == juego.result) {
        cuentaAtras.addTen();
        juego.setNumbers();
        juego.setCurrentOperator();
        juego.setResult();
        document.getElementById('formula').innerHTML = juego.numberOne + ' ' + juego.currentOperator + ' '+ juego.numberTwo;
      }
    }
  };





};
