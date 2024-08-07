///Write the logic to get the computer choice

function getComputerChoice(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    let word;
    if (number === 0) {
        word = "Rock";
     } else if (number === 1) {
        word = "Paper";
     }
        else if (number === 2) {
        word = "Scissors";
     }
     return word;
}
 
///Write the logic to get the human choice
 function getHumanChoice(){
    let answer = prompt("Please enter Rock, Paper or Scissors:");
    return answer;
 }

 ///Declare the players score and rounds

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    let output;
    if (humanChoice === computerChoice) {
        output = "It's a tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
            output = "You won";
            humanScore++;
    } else {
        output = "You lost";
        computerScore++;
    } 
    console.log(output);
    return {output, humanScore, computerScore};
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(0,2);
    const result = playRound(humanSelection, computerSelection, humanScore, computerScore);
    humanScore = result.humanScore;
    computerScore = result.computerScore;
    console.log("The round is " + (i+1));
    }
    console.log("Final Scores: Human: " + humanScore + ", Computer: " + computerScore);
}

playGame();