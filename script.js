// * For now, remove the logic that plays exactly five rounds.
// * Create three buttons, one for each selection. Add an event listener to the buttons that 
//     call your playRound function with the correct playerSelection every time a button is clicked. 
//     (you can keep the console.logs for this step)
// * Add a div for displaying results and change all of your console.logs into DOM methods.
// * Display the running score, and announce a winner of the game once one player reaches 5 points.
// * You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
// * That’s OK! Reworking old code is an important part of a programmer’s life.
function getComputerChoice() {
    var choice = ['rock', 'paper', 'sicors'],
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}
    const div = document.querySelector('#container');
    
    const buttonRock = document.querySelector('#rock');
    const buttonPaper = document.querySelector('#paper');
    const buttonSicors = document.querySelector('#sicors');

    let playerScoreCount = 0;
    let computerScoreCount = 0;

    let playerScore = document.querySelector('#player');
    
    let computerScore = document.querySelector('#computer');
    
    let playerChoice = document.querySelector('#playerchoice');
    let computerchoice = document.querySelector('#computerchoice');
    let playerwin = document.querySelector('#playerwin');
    let computerwin = document.querySelector('#computerwin');
    
    let keepGoing = true;
        
        buttonRock.addEventListener('click', () => {
            singleRound(buttonRock.textContent);
        })
    buttonPaper.addEventListener('click', () => {
        singleRound(buttonPaper.textContent);    
    })
    buttonSicors.addEventListener('click', () => {
        singleRound(buttonSicors.textContent);
    })
    
    function singleRound(humanChoice) {
        let computerChoice = getComputerChoice();
        computerchoice.textContent = computerChoice.toUpperCase();
    playerChoice.textContent = humanChoice.toUpperCase();
    let winner;
    winner = checkWinner(humanChoice, computerChoice);
    return winner;
}
function checkWinner(player, computer) {
    let winner;
    human = player.toLowerCase();
    
    if (human === computer) {
        winner = "It's a tie";
    }
    else if (human == 'rock' && computer == 'sicors' || human == 'sicors' && computer == 'paper' || human == 'paper' && computer == 'rock') {
        winner = 'player';
        playerwin.textContent = 'WINNER';
        computerwin.textContent = ':(';

        playerScoreCount++;
        playerScore.textContent = 'Player: ' + playerScoreCount;
    } else { 
        winner = 'computer';
        computerScoreCount++;
        computerScore.textContent = 'Computer: ' + computerScoreCount;
        playerwin.textContent = ':(';
        computerwin.textContent = 'WINNER';
    }
    if (playerScoreCount === 5 || computerScoreCount === 5) {
    alert('Game ended');
    let champ = '';
    if (playerScoreCount == 5) {
        champ = 'Player'; 
    } else {
        champ = 'Computer';
    }
    let text = champ + " won. \n Would you like to play again?"
    if (confirm(text) == true) {
            playerScoreCount = 0;
            computerScoreCount = 0;
            playerScore.textContent = 'Player: ';
            computerScore.textContent = 'Computer: ';
            console.log(playerScoreCount);
            console.log(computerScoreCount);
        } else {
            alert("Game ended");
        }
    }

    return winner;
}


