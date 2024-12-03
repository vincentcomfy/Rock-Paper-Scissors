console.log("Hello World!");

// Global values
const rock = 1;
const paper = 2;
const scissors = 3;

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
