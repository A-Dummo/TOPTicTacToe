function computerPlay() {
    const randomResult = Math.floor(Math.random() * 3) + 1; // 1-3
    switch(randomResult) {
        case 1:
            return "Rock";
        
        case 2:
            return "Paper";
        
        case 3:
            return "Scissors";
        
        default:
            return "None";
    }
}

function playerPlay() {
    let playerInput = "";
    while(playerInput != "rock" && playerInput != "paper" && playerInput != "scissors") {
        playerInput = prompt("Type 'Rock', 'Paper', or 'Scissors'");
        playerInput = playerInput.toLowerCase();
    }
    return playerInput;
}

function selectionToNumber(playerSelection, computerSelection) {
    const playerToNumber = {
        "rock":     0b100000,
        "paper":    0b010000,
        "scissors": 0b001000
    }
    const computerToNumber = {
        "rock":     0b000100,
        "paper":    0b000010,
        "scissors": 0b000001
    }
    return playerToNumber[playerSelection] + computerToNumber[computerSelection];
}

function playRound(playerSelection, computerSelection) {
    const outcome = selectionToNumber(playerSelection, computerSelection.toLowerCase());
    switch(outcome) {
        case 0b100100:
            return "You Tie! Rock ties Rock";

        case 0b100010:
            return "You Lose! Paper beats Rock";
        
        case 0b100001:
            return "You Win! Rock beats Scissors";
        
        case 0b010100:
            return "You Win! Paper beats Rock";
        
        case 0b010010:
            return "You Tie! Paper ties Paper";
        
        case 0b010001:
            return "You Lose! Scissors beats Rock";

        case 0b001100:
            return "You Lose! Rock beats Scissors";

        case 0b001010:
            return "You Win! Scissors beats Paper";

        case 0b001001:
            return "You Tie! Scissors ties Scissors";
    }
}
/*
function game() {
    let playerScore   = 0;
    let computerScore = 0;
    let outcome = "";
    for(let i = 0; i < 5; i++) {
        outcome = playRound(playerPlay(), computerPlay());
        outcomeLetter = outcome.substring(4, 5); // Get first letter of Win, Lose, or Tie
        switch(outcomeLetter) {
            case "W":
                playerScore += 1;
                break;

            case "L":
                computerScore += 1;
                break;
            
            case "T":
                playerScore += 1;
                computerScore += 1;
                break;
        }
        console.log(`playerScore: ${playerScore}\ncomputerScore: ${computerScore}\n${outcome}`)
    }
    if (playerScore > computerScore) {
        console.log("Player wins!")
    } else if (playerScore == computerScore) {
        console.log("Both tie!")
    } else {
        console.log("Computer wins!")
    }
}

game()
*/

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
let pScore = 0;
let cScore = 0;
let completed = false;

function game(playerSelection, playerScore, computerScore) {
    
    if (completed === true) return;

    outcome = playRound(playerSelection, computerPlay());
    outcomeLetter = outcome.substring(4, 5); // Get first letter of Win, Lose, or Tie
    switch(outcomeLetter) {
        case "W":
            playerScore += 1;
            break;
         case "L":
            computerScore += 1;
            break;
        
        case "T":
            //pScore += 0;
            //cScore += 0;
            break;
    }
  
    if (playerScore === 5) {
        results.innerHTML += "Winner: Player";
        completed = true;
        return;
    } else if (computerScore === 5) {
        results.innerHTML += "Winner: Computer";
        completed = true;
        return;
    }
    
    results.innerHTML = `Player Score: ${playerScore}<br>Computer Score: ${computerScore}<br>`

    pScore = playerScore;
    cScore = computerScore;

    console.log(pScore, cScore);
}

rock.addEventListener('click', () => {game('rock', pScore, cScore)});
paper.addEventListener('click', () => {game('rock', pScore, cScore)});
scissors.addEventListener('click', () => {game('rock', pScore, cScore)});

