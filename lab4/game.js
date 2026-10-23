/*
  COSC 219 — Lab 4
  Variables, conditionals and functions.

  Write the eight functions below. Each one is small, and each is tested
  independently — open check.html to see which pass.

  NO ARRAYS AND NO LOOPS. You have not been taught them yet, and you do not
  need them here. Everything can be done with string methods, conditionals
  and arithmetic. (revealWord and hasWon at the bottom are provided for
  exactly that reason — read them, but you are not expected to write them.)
*/

const STARTING_LIVES = 6;


function normalizeGuess(input) {
    const letter = input.trim().toLowerCase();

    if (letter.length === 1 && letter >= "a" && letter <= "z") {
        return letter;
    }

    return "";
}


function isValidGuess(input) {
    return normalizeGuess(input) !== "";
}


function alreadyGuessed(letter, guessedLetters) {
     return guessedLetters.toLowerCase().includes(letter.toLowerCase());
}


function isCorrect(letter, word) {
    const guess = normalizeGuess(letter);

    if (guess === "") {
        return false;
    }

    return word.toLowerCase().includes(guess);
}

function livesAfterGuess(lives, correct) {
    if (correct) {
        return lives;
    }

    return Math.max(0, lives - 1);
}
function scoreFor(word, lives = STARTING_LIVES) {
    return word.length * 10 + lives * 5;
}
function statusMessage(word, guessedLetters, lives) {
    if (lives <= 0) {
        return `Out of lives. The word was "${word}".`;
    }

    if (hasWon(word, guessedLetters)) {
        return `You got it! "${word}" with ${lives} lives left.`;
    }

    const lifeText = lives === 1 ? "life" : "lives";
    const guessed = guessedLetters === "" ? "nothing yet" : guessedLetters;

    return `${lives} ${lifeText} left. Guessed: ${guessed}`;
}

function gradeFor(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";

    return "F";
}

function revealWord(word, guessedLetters) {
  return word
    .toLowerCase()
    .replace(/[a-z]/g, (letter) =>
      guessedLetters.includes(letter) ? letter : "_");
}

function hasWon(word, guessedLetters) {
  return !revealWord(word, guessedLetters).includes("_");
}
