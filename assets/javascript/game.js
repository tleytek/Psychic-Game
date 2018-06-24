//Step 1: Game Logic (if/else)
//Step 2: Functionality (Keystroke), guess will look at keypress and record it?

var randomLetter;
var wins;
var losses;
var guess;
var recordedGuess = [];
var guessesLeft = 9;
var alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var letterbet = 'abcdefghijklmnopqrstuvwxyz';
randomLetter = alphabet[Math.floor(Math.random() * 27)];

//record keypresses and assign it to guess
document.onkeyup = function(e) {
  if (e.ctrlKey && e.keyCode == 90) {
    // ctrl+z pressed
  }
};

//Play game until guessesLeft equals 0, if guessesLeft equal 0: add a loss, reset guessesLeft, and generate a new random letter
if (guessesLeft === 0) {
  losses++;
  guessesLeft = 9;
  recordedGuess = [];
  randomLetter = alphabet[Math.floor(Math.random() * 27)];

  //While guessesLeft does not equal 0:
} else {
  //reduce guesses if the GUESS does not equal the randomLetter
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
  console.log(guessesLeft);
}
