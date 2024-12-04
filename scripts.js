console.log("Hello World!");

// Global values
const rock = 1;
const paper = 2;
const scissors = 3;
let humanScore = 0;
let computerScore = 0;

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

console.log(`The computer choice is ${getComputerChoice()}`);


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


console.log(`The player choice is ${getHumanChoice()}`);


// Compare choices
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