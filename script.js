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

function playRound(playerInput, computerInput) {
    /*inputCompare(playerInput, computerInput);*/
}