// Use this file to write the interactions between your game and the user

//Initialize ion library
var game;

var savedHtmlBlock = "";

var slider;

window.onload = function(){
    savedHtmlBlock = document.getElementById("content").innerHTML;
    createSlider();
};

function startGame(){
    var operationsArray = getOperationsArray();
    var numberLimit = getNumberLimit();
    
    createGameDialogContent();
    
    game = new TenSecondsMathGame(operationsArray, numberLimit);
    
    setQuestion(game.question);
    
    game.startTimeCount(function(){
        game.decreaseTime();
        updateTimeText(game.seconds);
        
        if (game.seconds == 0) {
            game.gameOver();
            clearInterval(game.intervalID);
        }
    });
    
    game.onGameOver(onGameOverListener);
}

function restartGame(){
    document.getElementById("content").innerHTML = savedHtmlBlock;
    createSlider();
}

function onGameOverListener() {
    console.log("Time is 0, GAME OVER");
    var button = '<button class="btn btn-primary" onclick="restartGame()">Restart</button>';
    
    var img = document.createElement("img");
    img.setAttribute("src", "images/gameover.jpg");
    img.setAttribute("class", "img-responsive");
    
    var parent = document.getElementById("content");
    parent.innerHTML = "";
    parent.appendChild(img);
    parent.innerHTML += button;
    
}

function updateTimeText(value){
    document.getElementById("seconds").innerHTML = value;
}

function createGameDialogContent(){
    var h1 = document.createElement("h1");
    var div = document.createElement("div");
    var label = document.createElement("label");
    var input = document.createElement("input");
    
    h1.innerHTML = '<span id="seconds">10</span> Seconds';
    div.setAttribute("id","qa-wrapper");
    label.setAttribute("id","question");
    input.setAttribute("id","answer");
    input.setAttribute("type","text");
    input.onkeypress = onEnterKey;
   
    div.appendChild(label);
    div.appendChild(input);
    
    var parent = document.getElementById("content");
    parent.innerHTML = "";
    parent.appendChild(h1);
    parent.appendChild(div);       
}

function setQuestion(question){
    document.getElementById("question").innerHTML = question;
}

function getOperationsArray(){
    var checkboxes = document.getElementsByName("operation");
    var operationsArray = [];
    
    checkboxes.forEach(function(e){
        if (e.checked)
            operationsArray.push(e.getAttribute("value"));
    });
    return operationsArray;
}

function getNumberLimit(){
    var element = document.getElementById("numberLimit");
    return element.getAttribute("value");
}

function onEnterKey(e){
    if (e.keyCode == 13){
        var input = document.getElementById("answer");
        if (game.answerChecker(input.value)){
            input.value = "";
            game.newQuestion();
            setQuestion(game.question);
        }
    }
}

function createSlider(){
    slider = document.getElementById('slider1');

    noUiSlider.create(slider, {
        start: [10],
        step: 10,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 100
        }
    });
    
    slider.style.backgrond = "#0000FF";
    
    slider.noUiSlider.on('slide', function(){
        var numberLimit = document.getElementById("numberLimit");
        numberLimit.setAttribute("value", Math.floor(slider.noUiSlider.get()));
        numberLimit.innerHTML = Math.floor(slider.noUiSlider.get());
    });
}
