function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    return rnd ? rnd == 1 ? "rock" : "paper" : "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    //p : r -> c : s 
    //p : p -> c : r
    //p : s -> c : p

    //c : r -> p : s
    //c : p -> p : r
    //c : s -> p : p

    //I'll fix the case issue with css
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper")
        return {result : 'p', message : `You win! ${playerSelection} beats ${computerSelection}!`};
    else if (playerSelection == "scissors" && computerSelection == "rock" ||
            playerSelection == "rock" && computerSelection == "paper" || 
            playerSelection == "paper" && computerSelection == "scissors")
        return {result : 'c', message : `You lose! ${playerSelection} loses to ${computerSelection}!`};
    else if (playerSelection == computerSelection)
        return {result : 't', message : `It's a tie! both have chosen ${playerSelection}!`};
    return {result : null, message : null};
}

function game() {
    const turns = 5;
    let playerScore, computerScore;
    
    playerScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < turns; i++) {
        let playerSelection = prompt("Enter an option (rock/paper/scissors)");
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round.result == 'p') {
            playerScore++;
            console.log(round.message);
        }
        else if (round.result == 'c') {
            computerScore++;
            console.log(round.message);
        }
        else if (round.result == 't')
            console.log(round.message);
        else
            console.log(round.message);
    }
    if (playerScore > computerScore)
        console.log(`Congratulations! you win ${playerScore} to ${computerScore}`);
    else  if (playerScore < computerScore)
        console.log(`You lost ${playerScore} to ${computerScore}`);
    else
        console.log("It's a tie.");
}

game();

// //test playRound()
// let player, computer;
// player = [];
// computer = [];
// for (let i = 0; i < 100; i++) {
//     player.push(computerPlay());
//     computer.push(computerPlay());
//     console.log(`${playRound(player[i], computer[i])} :: ${player[i]} ; ${computer[i]}`);
// }

// //test computerPlay()
// let rock, paper, scissors;
// rock = 0;
// paper = 0;
// scissors = 0;
// for (let i = 0; i < 1e6; i++)
//     switch (computerPlay()) {
//         case "rock":
//             rock++;
//             break;
//         case "paper":
//             paper++;
//             break;
//         case "scissors":
//             scissors++;
//             break;
//     }
// console.log(`rock : ${rock / 1e4}%, paper : ${paper / 1e4}, scissors : ${scissors / 1e4}`);