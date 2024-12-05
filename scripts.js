// Global values
const rock = 1;
const paper = 2;
const scissors = 3;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
const bestOf = 3;

// Generate Computer "choice"
function getComputerChoice() {
    let numberGenerated = Math.floor(Math.random() * 3) + 1;
    if (numberGenerated === rock) {
        return "rock";
    } else if (numberGenerated === paper) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Collect player choice
function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Please enter your choice: Rock, Paper, or Scissors.").toLowerCase();
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            console.log("Invalid choice. Try again.");
        }
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

// Compare choices and determine winner of the round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
        return "human";
    } else {
        console.log("Computer wins this round!");
        computerScore++;
        return "computer";
    }
}

// Main game loop
function playGame() {
    while (roundsPlayed < maxRounds && humanScore < bestOf && computerScore < bestOf) {
        console.log(`Round ${roundsPlayed + 1}:`);
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log(`The computer choice is ${computerChoice}`);
        console.log(`The player choice is ${humanChoice}`);

        const roundWinner = playRound(humanChoice, computerChoice);
        roundsPlayed++;

        console.log(`Current Score: Player: ${humanScore} - Computer: ${computerScore}`);
        
        // Check if anyone has won 3 points (best of 3)
        if (humanScore === bestOf || computerScore === bestOf) {
            break;
        }
    }

    // Final result
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
