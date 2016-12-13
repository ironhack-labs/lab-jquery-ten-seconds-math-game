![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Ten Second Math Game

## Learning Goals

After this learning unit, you will be able to:

- Build your own Ten Second Math game, using HTML, CSS, JavaScript and jQuery
- Create the logic of the game using JavaScript classes
- Separate the logic of the game from the JavaScript DOM operations
- Original idea: http://www.mental-math-trainer.com/

## Introduction

Ten Seconds Math is a game created by *Michael Jakob* to challenge a person's mathematical skills against the time.

- You've got 10 seconds to start
- You can choose what type/s of math operations you will face: addition, substraction, multiplication or division
- The clock will start running once the first question in correctly answer
- Answer questions to get more time
- Every right answer will give you 10 seconds more
- Don't let the clock run out!

### Requirements

- [Fork this repo](https://github.com/ironhack/lab-jquery-ten-seconds-math-game)
- Clone this repo into your `~/code/labs`
- You have io.sound included. You don't need to download anything to make it work
- All the images are included in the repository

## Planning the game

![](https://i.imgur.com/Hh56ycO.png)

We need to understand how to separate the game logic from the DOM operations in JavaScript. In this project, we created two JavaScript files: `tenSecondsMath.js`, it will have just the logic; `application.js`, it will have the DOM manipulation.

The idea is that we should be able to play the game without an interface, just with the logic and the browser's console. Then, the first code we are going to build is the `tenSecondsMathGame` class.

:::info
We are going to work over a possible solution. Feel free to find a better solution by your own and share it with the rest of the class :)

**// Happy coding**
:::

:::success
The HTML and CSS code are already made, and your JavaScript file correctly linked.
:::

## First iteration: Can I ask you a question?

We need to first set the constructor of `tenSecondsMathGame`. This constructor function will be able to:

- Recieve the operations the user wants to deal with and the limit of the operation's numbers.
- Set the operations the users selected to play with.
- Set the limit number for the operations.

We also need a function that will generate a random number between 1 and the limit number the user indicated. This will be usefull every time we start a new question.

### Building a question generator

We will create a function to generate the questions itself. It will get two random numbers and will operate with them, depending of the kind of operation the user selected before. If the user selected more than one kind of operation, choose one randomly.

The function will be in charge of:

- Generate the Math question.
- Generate the solution for it.
- Print the Math question in the console.

:::danger
:warning: There are some logic rules you must take in count:

- The result will never be negative
- The difference between numbers will never be less than 3 (except in *division*)
- The generated numbers will never be the same number (except in *division*)
:::

Finally, we will create a function that recieves the user's answer and will compare it to the real solution, telling the user if the answer was right or wrong.

You should be able to do something like this in your browser's console:

![](https://i.imgur.com/905ZeXe.png)

### Adding the logic into the DOM

![](https://i.imgur.com/7VzZgKg.png)

Now that we are able to generate questions and answer them, we need to translate all this logic into events. We will write all the code related to the DOM into the `application.js` file to separate both, logic and DOM manipulation.

In `application.js` create a click event for the **start button**.

![](https://i.imgur.com/IZAxAGf.png)

When you click the button, the application should hide the section `game-options` and show the section `game-board`. Also, it will show the new question for the user to answer.

Also, when pressing the **start button** we will generate a new `tenSecondsMathGame`. This new object will recieve the options the user marked and will create a new question.

After the question is created, we have to show the question in the DOM for the user.

![](https://i.imgur.com/e2GDPxu.png)

To answer the question, the user should write in the input. When [the user press a keyboard key](https://developer.mozilla.org/en-US/docs/Web/Events/keyup) and it is a wrong answer, it should color red the border of the input.

### Keep asking me

If the user answers correctly a question, we should automatically replace the actual question with a new game question.

The next question needs to be one of the same kind the user indicated before. So, if the user marked `adding` and `substracting`, you will have to get an adding or substracting operation next.

## Second iteration: Beat the clock

We will add a clock to the game so the user has to keep answering questions until the time is over. We need to add an attribute to the game to set the number of seconds we have at the beginning.

We will start with 10 seconds.

### Controlling the time

We are going to create function `_startTimer` inside the `tenSecondsMathGame` object. This function will call another function to check every second if the time is over.

### Checking the time

We will create a function `_checkTimer` inside the `tenSecondsMathGame` object to check the seconds left in the clock. If the actual number of seconds is over 0 means we can continue and substract a second. If the clock reaches 0, we will stop the execution of the clock.

First, try to print in the console this timer once application starts. It will show in the console the numbers between 10 and 0 every real second. Lastly, it will print "Time is over!" after zero.

![](https://i.imgur.com/m4W8PRi.png)

:::success
The clock will not start running out until the user answers correctly the first question.
:::

### That is correct!

We will create a function to add seconds once the user gets a correct answer. Every time this happens, we will add ten seconds to the actual number of seconds left.

### Add the clock into the DOM

Once we start a new game, we will print the clock in the DOM. This clock will be updated every second so the user can see how many seconds he has to answer the questions.

![](https://i.imgur.com/XJI7lTT.png)

Also, the clock will be updated every time the user answers correctly a question, adding more seconds to the clock.

## Third Iteration: Game Over! and restart

Now we have our game almost complete, but what happens if the clock reaches to zero? What if I want to play again? Let's answer those questions.

### Game over!

When the user does not answer a question in time, we need to indicate that the game have finished and he/she can no longer continue. We will do two things in order to finish the actual game:

- We will disable the posibility to write anything in the input
- We will hide the clock
- We will print an image to indicate the game is over

![](https://i.imgur.com/PJt2LEI.png)


### Restarting the game

We will create a button to restart the game from the beginning. This button will:

- Hide the game-board section, the restart button and the *Game over* image
- Show the game-options section and the clock
- Enable the input to be writtable

## Fourth Iteration: Spycing the game

Since we are pointing the user when there is a failure, why not to congrat them when they have a correct answer?

We are going to create a function that will pop up a coin image, allong with a sound, when the answer is right

### Popping up the coin

:::success
Since you have the coin image already downloaded, we just need to operate with it.
:::

We already have the coin image hided in the HTML inside the `img` tag with id `#btc-reward`.

We will create a function that will show the image in a random position between inside the div `#game-container`. After a second, it will hide the image again.

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
