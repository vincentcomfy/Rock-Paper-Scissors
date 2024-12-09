let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
const bestOf = 3;

const roundInfo = document.getElementById("round-info");
const scoreInfo = document.getElementById("score-info");
const messageInfo = document.getElementById("message-info");
const buttons = document.querySelectorAll(".buttons button");
const resetButton = document.getElementById("reset");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  let resultMessage;

  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
  }
  roundsPlayed++;
  roundInfo.textContent = `Round: ${roundsPlayed}`;
  scoreInfo.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  messageInfo.textContent = resultMessage;
  checkGameEnd();
}

function checkGameEnd() {
  if (roundsPlayed >= maxRounds || humanScore === bestOf || computerScore === bestOf) {
    let finalMessage;
    if (humanScore > computerScore) {
      finalMessage = "Congratulations! You win the game!";
    } else if (computerScore > humanScore) {
      finalMessage = "Computer wins the game! Better luck next time.";
    } else {
      finalMessage = "The game is a tie!";
    }
    messageInfo.textContent = finalMessage;
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  roundInfo.textContent = "Round: 0";
  scoreInfo.textContent = "Player: 0 - Computer: 0";
  messageInfo.textContent = "Click a button to start!";

  buttons.forEach((button) => {
    button.disabled = false;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id; 
    const computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice); 
  });
});

resetButton.addEventListener("click", resetGame);

console.log("Game script loaded. Waiting for button clicks...");