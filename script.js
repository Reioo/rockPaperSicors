console.log("Hello");
function getComputerChoice() {
    var choice = ['Rock', 'Paper', 'Sicors'],
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    // console.log(computerChoice);
}
function playerSelection() {
    let keepGoing = true;
    while (keepGoing === true) {
        let playerChoice = prompt('Rock / Paper / Sicors: ');
        playerChoice = playerChoice.toLowerCase();
        console.log(playerChoice);
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'sicors') {
            keepGoing = false;
        } else {
            console.log('Please try again');
        }
    }
}
getComputerChoice();
playerSelection();
console.clear;
