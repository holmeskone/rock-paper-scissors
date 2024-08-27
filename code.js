let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

///Write the logic to get the computer choice
function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    let word;
    if (number === 0) {
        word = "Rock";
    } else if (number === 1) {
        word = "Paper";
    } else if (number === 2) {
        word = "Scissors";
    }
    return word;
}

///Declare the players score and rounds
function playRound(humanChoice) {
    const computerChoice = getComputerChoice(0, 2); // Get the computer's choice
    let output;

    // Determine the winner
    if (humanChoice === computerChoice) {
        output = "It's a tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        output = "You won";
        humanScore++; // Increment the global humanScore
    } else {
        output = "You lost";
        computerScore++; // Increment the global computerScore
    }

    // Output round results
    console.log(output);
    console.log(`Round ${roundNumber + 1}: ${output}`);
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    roundNumber++; // Increment the round number

    // Check if the game should end after 5 rounds
    if (roundNumber === 5) {
        console.log("Game Over");
        console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
        resetGame(); // Reset the game after 5 rounds
    }
}

/// Define the getHumanChoice function
const getHumanChoice = (event) => {
    const choice = event.target.id; // Get the id of the clicked button
    playRound(choice); // Pass the choice to playRound function
};

// Select all the buttons
const buttons = document.querySelectorAll("button");

// Iterate through each button and add an event listener
buttons.forEach((button) => {
    button.addEventListener("click", getHumanChoice); // Use the named getHumanChoice function as the event listener
});

// Function to reset the game after 5 rounds
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    console.log("The game has been reset.");
}