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