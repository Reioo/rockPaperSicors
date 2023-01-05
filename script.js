
function getComputerChoice() {
    var choice = ['rock', 'paper', 'sicors'],
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}
function playerSelection() {
    let keepGoing = true;
    let playerChoice;
    while (keepGoing === true) {
        playerChoice = prompt('Choose: Rock / Paper / Sicors: ');
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
    let winner;
    console.log('Player: ' + humanChoice);
    console.log('Computer: ' + computerChoice);
    winner = checkWinner(humanChoice, computerChoice);

    return winner;
}
function checkWinner(human, computer) {
    let winner;
    if (human === computer) {
        console.log("It's a tie");
    }
    else if (human == 'rock' && computer == 'sicors' || human == 'sicors' && computer == 'paper' || human == 'paper' && computer == 'rock') {
        console.log('You win!! ' + human + ' beats ' + computer);
        winner = 'player';
    } else { 
        console.log('Computer wins! ' + computer + ' beats ' + human);
        winner = 'computer';
    }
    return winner;

}
function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;
    let roundCount = 1;
    for (let i = 0 ; i < 5 ; i++) {
        let winner = singleRound();
        if (winner == 'player') {
            playerWinCount++;
        } else if (winner == 'computer') {
            computerWinCount++;
        }
        console.log("Player: " + playerWinCount);
        console.log("Computer: " + computerWinCount);
        console.log('_________________ROUND ' +roundCount+ ' ________________');
        roundCount++;
    }
}
game();
console.clear;
