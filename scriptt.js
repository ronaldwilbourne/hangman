<!DOCTYPE html>
< lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Hangman</title>
</head>
<body>
    <hi>HANGMAN!</hi>
</body>
<script src="script.js"></script>  
</html>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body {
    background-color: #f4c531;
  }
  



























// Create an array of words
const words = [
    "Arsenal",
    "liverpool",
    "chelsea",
    "manchester united"
    ];
    // Pick a random word
const word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
const answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
var remainingLetters = word.length;
    // The game loop
 while (remainingLetters > 0) {
    // Show the player their progress
        console.log(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
    // Exit the game loop
        break;
        } else if (guess.length !== 1) {
        console.log("Please enter a single letter.");
        } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
     if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        }   
            }
    }
   120
    // The end of the game loop
    }
    // Show the answer and congratulate the player
    console.log(answerArray.join(" "));
    console.log("Good job! The answer was " + word)