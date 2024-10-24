console.log("Hello, World!")

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

// Testing and showing the results of the computer's "guess" for debugging.
console.log(getComputerChoice());

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

console.log(getHumanChoice());