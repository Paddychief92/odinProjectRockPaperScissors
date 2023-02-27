function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    randNum = Math.floor((Math.random() * 3));
    return choice[randNum];
};


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

   function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = [];

    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("pick rock, paper, or scissors");
      const computerSelection = getComputerChoice();
      result[i] = playRound(playerSelection, computerSelection);
      console.log(result[i]);

     if (result[i].includes("win")) {
      playerScore++;
    } else if (result[i].includes("lose")) {
      computerScore++;
    }};

    if (playerScore > computerScore) {
      return "you win the game";
    } else if (playerScore < computerScore) {
      return "computer wins the game";
    } else {
      return "it is a draw";
    } 
   };
console.log(game())
