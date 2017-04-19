window.onload = function () {
    var answer = "",
        interval,
        audio = document.createElement("audio");
    
    //play sound
    function sound() {
        audio.setAttribute("src", "./audios/cash-register.mp3");
        audio.setAttribute("autoplay", "autoplay");
    }

    //change the input number of the option Number Limit 
    $('#range-slider').on("change mousemove", function () {
        $('#number').html(this.value);
    });

    //check for the user operator selection
    $("input").on("click", function () {
        if ($("#" + this.id).prop("checked")) {
            if (this.id === "add") {
                $('#operator').html("+");
                quest();
            }
            else if (this.id === "sub") {
                $('#operator').html("-");
                quest();
            }
            else if (this.id === "multi") {
                $('#operator').html("*");
                quest();
            }
            else if (this.id === "div") {
                $('#operator').html("/");
                quest();
            }
        }
    });

    //set the correct answer to a global variable
    function result(num1, num2) {
        correctAnswer = eval(num1 + $('#operator').html() + num2);
    }

    //random 2 numbers
    function quest() {
        var number = $('#number').html(),
            num1 = Math.floor(Math.random() * (number - 1) + 1),
            num2 = Math.floor(Math.random() * (number - 1) + 1);
        $('#number1').html(num1);
        $('#number2').html(num2);
        result(num1, num2);
    }

    //hide the first screen and start the game
    $(".start").on("click", function () {
        $(".setting-panel").hide();
        $(".game").css("visibility", "visible");
        startgame();
    });

    //restart the game
    $(".restart").on("click", function () {
        clearInterval(interval);
        $('#countdown').html(10);
        $('.gameover').css("visibility", "hidden");
        $('.gameover').css("position", "absolute");
        quest();
        startgame();
    });

    //check if the user answer is correct
    $("#userAnswer").on("input", function () {
        var answer = $('#userAnswer').val();
        if (correctAnswer == answer) {
            sound();
            quest();
            $('#userAnswer').val("");
            $('#countdown').html(parseInt($('#countdown').html()) + 1);
        }
    });

    // set and execute the countdown
    function startgame() {
        interval = setInterval(function () {
            var counter = parseInt($('#countdown').html());
            counter -= 1;
            $('#countdown').html(counter + " seconds left");
            if (counter === 0) {
                $('.gameover').css("visibility", "visible");
                $('.gameover').css("position", "relative");
                clearInterval(interval);
            }
        }, 1000);
    }

};



