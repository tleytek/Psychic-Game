//Step 1: Game Logic (if/else)
//Step 2: Functionality (Keystroke), guess will look at keypress and record it?

var randomLetter;
var wins = 0;
var losses = 0;
var guess = "";
var recordedGuess = [];
var guessesLeft = 9;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet.charAt(Math.floor(Math.random() * 26));

//record keypresses and assign it to guess
document.onkeyup = function(event) {
  guess = " " + event.key;

  //Play game until guessesLeft equals 0, if guessesLeft equal 0: add a loss, reset guessesLeft, and generate a new random letter
  if (guessesLeft > 1) {
    if (guess !== randomLetter) {
      guessesLeft--;
      recordedGuess.push(guess);

      //if guess equals randomLetter before guessesLeft equaled 0 then add a win, reset guessesLeft, and generate a new random letter
    } else if (guess === randomLetter) {
      wins++;
      guessesLeft = 9;
      recordedGuess = [];
      randomLetter = alphabet[Math.floor(Math.random() * 27)];
    }

    //last guess for the player. Logic without a final if/else inside of guessesLeft=1 would not
    //count as a win if they guessed correctly.
  } else if (guessesLeft == 1) {
    if (guess === randomLetter) {
      wins++;
      guessesLeft = 9;
      recordedGuess = [];
      randomLetter = alphabet[Math.floor(Math.random() * 27)];
    } else if (guess !== randomLetter) {
      losses++;
      guessesLeft = 9;
      recordedGuess = [];
      randomLetter = alphabet[Math.floor(Math.random() * 27)];
    }
  }
  console.log(guessesLeft);
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("guessesLeft").innerHTML =
    "Guesses Left: " + guessesLeft;
  document.getElementById("guesses").innerHTML = "Guesses: " + recordedGuess;
};
