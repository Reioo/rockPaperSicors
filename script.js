console.log("Hello");
let rockCount = 0;
function getComputerChoice() {
    var choice = ['Rock', 'Paper', 'Sicors'],
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerChoice);
}
getComputerChoice();
