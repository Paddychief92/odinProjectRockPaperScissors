function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    randNum = Math.floor((Math.random() * 3));
    return choice[randNum];
};

const playerSelection = "rock";
  const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let outcome = "invalid choice";
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();

    if (p1 === p2) {
        outcome = "tied";
    } else {
        if ((p1 === "rock" && p2 === "scissors") ||
            (p1 === "paper" && p2 === "rock") ||
            (p1 === "scissors" && p2 === "paper")) {
                outcome = "win"
            } else { outcome = "lose"}}
    
            return `you ${outcome} you picked ${p1} the computer picked ${p2}`;
        }
   
  
  console.log(playRound(playerSelection, computerSelection));
