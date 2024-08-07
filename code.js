console.log("Hello World")

const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive

}
    
console.log(getComputerChoice(0,2));
