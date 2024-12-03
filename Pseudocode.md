
## Objectives
Rules should follow rock, paper scissors rules[^1] (rock > scissors, scissors > paper, paper > rock)
- [x] Set up the project structure
	- [x] Create a new git repository
	- [x] Create a blank HTML document with a script tag
	- [x] check if JavaScript is linked correctly (log "Hello World" to the console)
- [x] Write the pseudocode to achieve the following goals:
	- [x] Game will be played against the computer that will generate a random choice of rock, paper or scissors.
	- [x] Game will take the input from the player of rock, paper or scissors. Other answers should be disregarded.
	- [x] Set up a system to keep track of scores and rounds played.

## Pseudocode

### Generating computer "choice"
1. Assign constants to the 3 choice variables
```js
	1. const rock = 1
	2. const paper = 2
	3. const scissors = 3
```
2. Use `Math.random()`[^2] to pull a random number that is checked against the above constants.
3. This gets stored as the computer "choice" for this round.
4. Log this choice. to the console for potential debugging.

### Player Input
1. Use `prompt` to take user input
	1. make prompt lowercase to check against the constants defined above (might need to make these global otherwise they'll need to be defined in this function again) see: [[JavaScript Functions]]
	2. Check the user input against 'rock', 'paper' and 'scissors', if the value isn't the same as any of these, return a message asking the player to try again.

### Game logic
1. Create a function that takes the parameters returned in the computer and player choices and compares them.
2. Write the logic using if/else statements to compare the variables. 
4. Create `variables` for tracking points scored per player. Log the scores to the console.
5. Create a variable that counts rounds (from 5 down) per round played. Compare the score once the counter reaches 0 and announce a winner.

### Links and Reference
[Rock Paper Scissors project - The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

# Footnotes

[^1]: https://www.wikihow.com/Play-Rock,-Paper,-Scissors
[^2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random