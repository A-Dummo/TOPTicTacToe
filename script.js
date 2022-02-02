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