console.log("Hello, World!");

// Calculating computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;  // Generates 1, 2, or 3
    
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let userInput = prompt("Please enter your choice: rock, paper, or scissors");
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Sorry, you can only enter rock, paper or scissors. Please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
const maxRounds = 5;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

// Counting rounds and scores
for (let round = 1; round <= maxRounds; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // Check if either player has reached 3 wins
    if (humanScore === 3) {
        console.log("Congratulations! You have won the best of 3 rounds!");
        break;  // Exit the loop if the human wins
    } else if (computerScore === 3) {
        console.log("The computer has won the best of 3 rounds. Better luck next time!");
        break;  // Exit the loop if the computer wins
    }
}

// Final scores
console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
