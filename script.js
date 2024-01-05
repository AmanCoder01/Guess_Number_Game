let num = Math.floor(Math.random() * 100 + 1);
const subt = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {

    subt.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number !")
    } else if (guess < 1) {
        alert("Please enter a number greater than 1 !")
    } else if (guess > 100) {
        alert("Please enter a number less than 100 !")
    } else {
        prevGuess.push(guess);
        if (numGuess === 9) {
            displayGuess(guess);
            displayMessage(`Game Over ! <br> Random number was ${num}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === num) {
        displayMessage(`You guessed right !`);
        lowOrHi.classList.add("correct");
        endGame();
    } else if (guess < num) {
        displayMessage(`Number is too low !`);
    } else if (guess > num) {
        displayMessage(`Number is too high !`);
    }
}


function displayGuess(guess) {
    userInput.value = "";
    guesses.innerHTML = `${prevGuess}, `;
    numGuess++;
    lastResult.innerHTML = `${10 - numGuess}`;
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h3>${msg}</h3>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`
    p.style.color = "white";
    p.style.textDecoration = "underline";
    p.style.cursor = "pointer";
    resultParas.appendChild(p);
    playGame = false;

    newGame();

}
function newGame() {
    const start = document.querySelector("#newGame");
    start.addEventListener('click', () => {
        num = Math.floor(Math.random() * 100 + 1);
        lowOrHi.classList.remove("correct");
        lowOrHi.innerHTML = "";
        playGame = true;
        userInput.removeAttribute("disabled");
        guesses.innerHTML = "";
        numGuess = 0;
        prevGuess = []
        lastResult.innerHTML = "10"
    })
}
