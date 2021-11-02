const choices = document.querySelectorAll(".choice");
const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
const score = document.getElementById("score");
const feedback = document.getElementById("feedback");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const modalContent = document.querySelector(".modal-content");
const results = document.querySelector(".results");
const playAgain = document.getElementById("play-again");

let userScore, computerScore, turns, maxTurns;

function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    return rnd ? rnd == 1 ? "rock" : "paper" : "scissors";
}

function upperFirstChar(word) {
    return word[0].toUpperCase().concat(word.slice(1));
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper")
        return 'p';
    else if (playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors")
        return 'c';
    else if (playerSelection == computerSelection)
        return 't';
    return null;
}

function game(playerSelection) {
    if (!turns) {
        score.style.display = "block";
        feedback.style.display = "block";
    }

    if (turns++ < maxTurns) {
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        let color, message, result;
        if (winner == 'p') {
            color = "green-text";
            message = "beats";
            result = "YOU WIN!";
            userScore++;

            choices.forEach(choice => {
                if (choice.alt == playerSelection)
                    choice.parentElement.style.background = "greenyellow";
                else if (choice.alt == computerSelection)
                    choice.parentElement.style.background = "red";
                
                setTimeout(() => {
                    choice.parentElement.style.background = "rgb(229, 230, 235)";
                }, 250);
            });
        }
        else if (winner == 'c') {
            color = "red-text";
            message = "loses to";
            result = "YOU LOSE!";
            computerScore++;

            choices.forEach(choice => {
                if (choice.alt == playerSelection)
                    choice.parentElement.style.background = "red";
                else if (choice.alt == computerSelection)
                    choice.parentElement.style.background = "greenyellow";
                
                setTimeout(() => {
                    choice.parentElement.style.background = "rgb(229, 230, 235)";
                }, 250);
            });
        }
        else {
            color = "gray-text";
            message = "equals";
            result = "IT'S A TIE!";

            choices.forEach(choice => {
                if (choice.alt == playerSelection)
                    choice.parentElement.style.background = "gray";
                
                setTimeout(() => {
                    choice.parentElement.style.background = "rgb(229, 230, 235)";
                }, 250);
            });
        }
        feedback.innerHTML = `<h3><span>${upperFirstChar(playerSelection)}</span> ${message} <span>${upperFirstChar(computerSelection)}</span></h3><h2 class="${color}">${result}</h2>`;
        playerChoice.innerText = playerSelection;
        computerChoice.innerText = computerSelection;

        player.innerText = userScore;
        computer.innerText = computerScore;
    }
    else {
        console.log("I'm done");
        modalContent.parentElement.style.display = "block";
        if (userScore > computerScore) {
            modalContent.classList.add("modal-content-green");
            results.innerText = `You won ${userScore} to ${computerScore}`;
        }
        else if (userScore < computerScore) {
            modalContent.classList.add("modal-content-red");
            results.innerText = `You lost ${userScore} to ${computerScore}`;
        }
        else {
            modalContent.classList.add("modal-content-gray");
            results.textContent = `It was a tie, ${userScore} to ${computerScore}`
        }
    }
}

function reset() {
    score.style.display = "none";
    feedback.style.display = "none";
    modalContent.parentElement.style.display = "none";
    modalContent.classList.remove("modal-content-red");
    modalContent.classList.remove("modal-content-green");    
    modalContent.classList.remove("modal-content-gray");
    userScore = 0;
    computerScore = 0;
    turns = 0;
    maxTurns = 5;
}

playAgain.addEventListener("click", () => reset());

choices.forEach(choice => choice.addEventListener("click", () => {
    game(choice.alt);
}));

reset();