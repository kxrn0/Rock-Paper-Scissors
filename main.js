function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    return rnd ? rnd == 1 ? "rock" : "paper" : "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // if (playerSelection == "rock" && computerSelection == "scissors" ||
    //     playerSelection == "paper" && computerSelection == "rock" ||
    //     playerSelection == "scissors" && computerSelection == "paper")
    //     // return {result : 'p', message : `You win! ${playerSelection} beats ${computerSelection}!`};
    //     return 'p';
    // else if (playerSelection == "scissors" && computerSelection == "rock" ||
    //          playerSelection == "rock" && computerSelection == "paper" || 
    //          playerSelection == "paper" && computerSelection == "scissors")
    //     // return {result : 'c', message : `You lose! ${playerSelection} loses to ${computerSelection}!`};
    //     return 'c';
    // else if (playerSelection == computerSelection)
    //     // return {result : 't', message : `It's a tie! both have chosen ${playerSelection}!`};
    //     return 't';
    // return null;
    if (turns < maxTurns) {
        
    }
    else {}
}

// function game(playerSelection) {
//     let computerSelection = computerPlay();
// }

function reset() {
    userScore = 0;
    computerScore = 0;
    turns = 0;
    maxTurns = 0;
}

const choices = document.querySelectorAll(".choice");
let userScore, computerScore, turns, maxTurns;

choices.forEach(choice => choice.addEventListener("click", () => {
    playRound(choice.alt, computerPlay());
}));
reset();

// function game() {
//     const turns = 5;
//     let playerScore, computerScore;
    
//     playerScore = 0;
//     computerScore = 0;
    
//     for (let i = 0; i < turns; i++) {
//         let playerSelection = prompt("Enter an option (rock/paper/scissors)");
//         let computerSelection = computerPlay();
//         let round = playRound(playerSelection, computerSelection);
//         if (round.result == 'p') {
//             playerScore++;
//             console.log(round.message);
//         }
//         else if (round.result == 'c') {
//             computerScore++;
//             console.log(round.message);
//         }
//         else if (round.result == 't')
//             console.log(round.message);
//         else
//             console.log(round.message);
//     }
//     if (playerScore > computerScore)
//         console.log(`Congratulations! you win ${playerScore} to ${computerScore}`);
//     else  if (playerScore < computerScore)
//         console.log(`You lost ${playerScore} to ${computerScore}`);
//     else
//         console.log("It's a tie.");
// }