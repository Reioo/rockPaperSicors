console.log("Hello");
function getComputerChoice() {
    var choice = ['rock', 'paper', 'sicors'],
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}
function playerSelection() {
    let keepGoing = true;
    let playerChoice;
    while (keepGoing === true) {
        playerChoice = prompt('Rock / Paper / Sicors: ');
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'sicors') {
            keepGoing = false;
        } else {
            console.log('Please try again');
        }
    }
    return playerChoice;
}
function singleRound() {
    let humanChoice = playerSelection();
    let computerChoice = getComputerChoice();
    
    console.log('Player: ' + humanChoice);
    console.log('Computer: ' + computerChoice);
}
singleRound();
console.clear;
