///Write the logic to get the computer choice

function getComputerChoice(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    if (number === 0) {
        word = "Rock";
     } else if (number === 1) {
        word = "Paper";
     }
        else if (number === 2) {
        word = "Scissors";
     }
}
 
///Write the logic to get the human choice
 function getHumanChoice(){
    let answer = prompt("Please enter Rock, Paper or Scissors:");
    return answer;
 }


 ///Declare the players score 
 let humanScore = 0;
 let computerScore = 0;
 
 /// Write the logic to play a single round
 function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        output = "It's a tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
            output = "You won";
            humanScore ++;
    } else {
        output = "You lost";
        computerScore ++;
    } 
    console.log(output);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(0,2);

playRound(humanSelection, computerSelection);