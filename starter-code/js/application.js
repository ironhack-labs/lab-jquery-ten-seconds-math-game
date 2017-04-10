window.onload = function () {
    var answer = "",
        audio = document.createElement("audio");

    function sound() {
        audio.setAttribute("src", "./audios/cash-register.mp3");
        audio.setAttribute("autoplay", "autoplay");
    }

    $('#range-slider').on("change mousemove", function () {
        $('#number').html(this.value);
    });

    $("input").on("click", function () {
        if ($("#" + this.id).prop("checked")) {
            if (this.id === "add") {
                $('#problem-text').html("+");
                quest();
            }
            if (this.id === "sub") {
                $('#problem-text').html("-");
                quest();
            }
            if (this.id === "multi") {
                $('#problem-text').html("*");
                quest();
            }
            if (this.id === "div") {
                $('#problem-text').html("/");
                quest();
            }
        }
    });

    function result(num1, num2) {
        var answer = eval(num1 + $('#problem-text').html() + num2);
        correctAnswer = answer;
    }

    function quest() {
        var number = $('#number').html(),
            num1 = Math.floor(Math.random() * (number - 1) + 1),
            num2 = Math.floor(Math.random() * (number - 1) + 1);
        $('#number1').html(num1);
        $('#number2').html(num2);
        result(num1, num2);
    }

    //hide the first screen and start the game
    $(".btn").on("click", function () {
        $(".setting-panel").hide();
        $(".game").css("visibility", "visible");
        startgame();
    });

    $("#userAnswer").on("input", function () {
        var answer = $('#userAnswer').val();
        console.log(correctAnswer);
        if (correctAnswer == answer) {
            sound();
            quest();
            $('#userAnswer').val("");
            $('#countdown').html( parseInt($('#countdown').html()) +1 );
        }
    });

    function startgame() {
        var interval = setInterval(function () {
            var counter = parseInt($('#countdown').html());
            $('#countdown').html(counter + " seconds left");
            console.log(counter);
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



