![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Ten Seconds Math Game

## Learning Goals

After this learning unit, you will be able to:

- Build your own Ten Seconds Math game, using HTML, CSS and JavaScript.
- Create the logic of the game using JavaScript classes
- Separate the logic of the game from the JavaScript DOM operations
- Original idea: http://www.mental-math-trainer.com/

## Introduction

Ten Seconds Math is a game created by *Michael Jakob* to challenge a person's mathematical skills against the clock.

- At the beginning, the user has 10 seconds to answer the math problem.
- The user chooses what type/s of math operations they will face: addition, substraction, multiplication or division.
- The clock will start running once the first question is correctly answered.
- The time left when the user answers a question will be added to the next problem.
- Every correct answer will add 10 seconds more to the clock.
- The user loses the game when the time is up! Don't let the clock run out!

### Requirements

- [Fork this repo](https://github.com/ironhack/lab-jquery-ten-seconds-math-game)
- Clone this repo into your `~/code/labs`
- The repository have io.sound included. You don't need to add anything to make it work
- The images are also included in the repository

## Planning the game

![Ten Seconds Math](https://i.imgur.com/Hh56ycO.png)

Remember to separate the game logic from the DOM operations and user interactions in your JavaScript code. In this project, you'll find two JavaScript files: `tenSecondsMath.js`, which holds the game logic and `application.js`, which will contain the DOM manipulation.

The goal is to be able to play the game without the interface, using only the browser's console. So the first code we will build is the `TenSecondsMathGame` class.

*We will provide a possible solution but feel free to find a better one on your own and share it with the class :)*

**// Happy coding**

**Success** The HTML and CSS code are created and the JavaScript file is already linked in the HTML.

## First iteration: Can I ask you a question?

We will create the constructor function for `TenSecondsMathGame`. This function will:

- Receive the operation selected by the user and the upper limit of the numbers to be used in the problems as parameters.
- Set the operation the user selected to play with.
- Set the upper limit of the numbers to be used in the problems.

We also need a function that generates a random number between 1 and the limit number the user indicated. This will be useful every time we start a new question.

### Building a question generator

We will create a function to generate the questions themselves. It will get two random numbers and will operate with them, depending of the kind of operation the user selected before. If the user selected more than one kind of operation, choose one randomly.

The function will be in charge of:

- Generate the Math question.
- Generate the solution.
- Print the Math question in the console.

:warning: **There are some logic rules we must be aware of:**

- The result should never be negative
- The difference between the generated operators can't be less than 3 (except for the *division*)
- The generated numbers should never be equal (except for the *division*)

Finally, we will create a function that receives the user answer and compares it with the solution, returning if the answer was right or not.

Now, you should be able to play with this in your browser's console:

![Console Pic](https://i.imgur.com/905ZeXe.png)

### Adding the logic into the DOM

![Layout pic](https://i.imgur.com/7VzZgKg.png)

Now that we are able to generate questions and answer them, we need to integrate the logic to the DOM. We will write all the code related to the DOM into the `application.js` file to separate logic from DOM manipulation.

In `application.js` create a click event for the **start button**.

![Start Button](https://i.imgur.com/IZAxAGf.png)

When you click the button, the application should hide the section `game-options` and show the section `game-board`. Also, it will show a new question.

On the other hand, when pressing the **start button** we will generate a new `TenSecondsMathGame` object. This new object will receive the options chosen by the user and create a new question.

After the question is created, we have to show the question in the DOM for the user.

![Question](https://i.imgur.com/e2GDPxu.png)

To answer the question, the user should write in the input field. If the answer is wrong, the border of the input should turn red.

### Keep asking me

If the user answers correctly, the question is replaced with a new one keeping the user options as before. So, if the user marked `adding` and `substracting`, the game will keep providing adding or substracting operations.

## Second iteration: Beat the clock

We will add a clock to the game so the user has to keep answering questions until the time is up. We need to add an attribute to the game to set how many seconds the user has to answer the questions.

We will start the game setting 10 seconds.

### Controlling the time

We are going to create the function `_startTimer` inside the `TenSecondsMathGame` object. This function will call another function to check recurrently if the time is over.

### Checking the time

Create a function `_checkTimer` in the `TenSecondsMathGame` object to check the time left in the clock. If it's greater than 0, the game continues and substracts a second. When the clock reaches 0, we will stop the execution of the clock.

First, try to print timer in the console once the application starts. It will be shown in the console every second. Lastly, it will print "Time is over!" when zero is reached.

![Timer pic](https://i.imgur.com/m4W8PRi.png)

**Success** The clock will start when the user answers the first question correctly.

### That is correct!

We will create a function to add 10 seconds when the user gets a correct answer. Every time this happens, we will add ten seconds to the actual number of seconds left.

### Add the clock into the DOM

Once we start a new game, we will print the clock in the DOM. This clock will be updated every second so the user can see how many seconds they have to answer the questions.

![Math pic](https://i.imgur.com/XJI7lTT.png)

The clock will be updated every time the user answers a question correctly with the additional 10 seconds.

## Third Iteration: Game Over! and restart

Now we have our game almost complete, but what happens if the clock reaches to zero? What if I want to play again? Let's answer those questions.

### Game over!

When the clock reaches zero, we need to indicate that the game is over and the user can't play anymore. We need to build three actions in order to finish the game:

- Disable the posibility to write anything in the input field
- Hide the clock
- Show an image to indicate the game is over

![Game Over pic](https://i.imgur.com/PJt2LEI.png)


### Restarting the game

We will implement a button to restart the game from the beginning. This button will:

- Hide the game-board section, the restart button and the *Game over* image
- Show the game-options section and the clock
- Enable the input field to be writtable

## Fourth Iteration: Spicing up the game

The app shows the user when the answer is wrong but what about congratulating them when the answer is right?

We are going to create a function that will show a pop up with a coin image and play a sound when the answer is right.

### Popping up the coin

**Success** Since you have the coin image already downloaded, we just need to use it.

We already have the coin image hidden in the HTML inside the `img` tag with id `#btc-reward`.

We will create a function that will show the image in a random position inside the `#game-container` element. A second later, it will hide the image again.

### Adding the sound

To be able to use sound, we will use a library called [`ion.sound`](http://ionden.com/a/plugins/ion.sound/en.html). This JavaScript library has an impressive amount of sounds we can use as examples if you want to try it later. For now, we will use a sound already downloaded for you in this project.

You need to include this piece of code at the beginning of the JavaScript file:

```javascript
ion.sound({
  sounds: [
    {
      name: "cash-register"
    }
  ],
  volume: 1,
  path: "audios/",
  preload: true
});
```

Once the library and the sounds are loaded, we just need to call a function to make the sound.

```javascript
ion.sound.play("cash-register");
```

## Summary

We learnt how to solve a big problem, like a game, splitting it up into small steps. In this example, we had the HTML and CSS already prepared for you, and we learnt how to separate the Javascript in two different parts:

- The JavaScript logic that belongs to the game. This will manage all the operations and will store the necesary data.
- The JavaScript logic that operates with the DOM. This will manage the data to be shown in the HTML and will interact with the user through events.

## Extra Resources

- [Official Ion.sound Github](https://github.com/IonDen/ion.sound/)
