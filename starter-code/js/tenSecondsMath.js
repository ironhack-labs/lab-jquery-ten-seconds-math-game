
// Tengo claro lo que quiero hacer, pero no se como. Explicación a continuación


// estas dos variables, sé que no se deberian nombrar así, pero he cambiado tantas
//veces de texto y organización que es la mejor forma de que cuadre
//segundosRestantes es lo que muestra el contador
// copilacionderespuestas, el numero de respuestas dadas, ya que solo en la primera
//queremos que empiece a correr la cuenta atras

var segundosRestantes = 10;
var copilacionderespuestas = 0;

//damos un numero límite

function TenSecondsMathGame(x) {
  this.limit = x;
}

//generamos un numero random

TenSecondsMathGame.prototype.randomNumber = function() {
  return Math.floor(Math.random() * this.limit);
};

//obtenemos la suma de los 2 numeros random

TenSecondsMathGame.prototype.operacion = function() {
  var n1 = this.randomNumber();
  var n2 = this.randomNumber();
  console.log(n1 + " + " + n2);
  return n1 + n2;
};

//cuando coinciden el numero dicho por el y la respuesta, puede pasar dos cosas,
//que sea la primera respuesta y entonces empieza la cuenta atras (correspondiente al else)
// o que queramos formular otra pregunta
//
//EL PROBLEMA ES QUE NO SE COMO LLAMAR AL CONTADOR Y QUE SE GENERE UNA PREGUNTA A LA VEZ
//AL PARECER SOLO SE PUEDE LLAMAR A UNA FUNCION
TenSecondsMathGame.prototype.isCorrectAnswer = function(a) {
  var resultado = this.operacion();
  var respuestaUsuario = prompt("que resultado sera");
  if (resultado == respuestaUsuario) {
    if (copilacionderespuestas > 0){
      segundosRestantes += 10;
      this.isCorrectAnswer();
    }
      else{
    this.contador();
  copilacionderespuestas += 1;
  }
  }
};



//El contador, que tampoco se me para como debiera
TenSecondsMathGame.prototype.contador = function() {

  var cuenta = 0;

  if (segundosRestantes > 0) {
    var callbackFunction = function() {
      console.log(segundosRestantes);
    setTimeout(callbackFunction, 1000);

      segundosRestantes -= 1;
    };
    cuenta = setTimeout(callbackFunction, 1000);



  } else {
    clearTimeout(cuenta);
    console.log("Tu tiempo se ha agotado. Play again?");
  }


};




var juego = new TenSecondsMathGame(10);
juego.isCorrectAnswer();


/*
TenSecondsMathGame.prototype.nextQuestion = function() {
  if (copilacionderespuestas > 0) {
  var resultado = this.operacion();
  var respuestaUsuario = prompt("que resultado sera");
  if (resultado == respuestaUsuario) { this.nextQuestion();
  } else {
    clearTimeout(cuenta);
    console.log("Tu tiempo se ha agotado. Play again?");
  }}
};*/



/*
TenSecondsMathGame.prototype.startgame = function() {
  if (this.result === this.question) {
    this.contador();
    this.segundosRestantes += 1;
    this.operacion();
  }
};
*/







/*
  if (this.resultado === this.isCorrectAnswer) {
    this.segundosRestantes += 1;
    this.operacion();
  }
};

*/

/*
TenSecondsMathGame.prototype.resultado = function() {
  var total = this.result;
  return total;
};*/


// Use this file to write the logic of your game, the needed attrs and functions

/*var maximo = [10, 20];

var n1 = Math.floor(Math.random * this.limit);
var n2 = Math.floor(Math.random * this.limit);

var resultado = n1+n2;

console.log (n1 + " + " + n2);

var respuesta =  [];

var primerNumero = 10;

var contador = function () {
 console.log(primerNumero);
 if (primerNumero > 0) {
   primerNumero-=1;
    timeoutId = setTimeout(contador, 1000);}
 else { clearTimeout(contador);}
};


var TenSecondsMathGame = function(options) {
  if (respuesta[0]=== resultado){ contador();
    primerNumero+=1;}
*/

/// suma


// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
