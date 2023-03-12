const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const round = document.getElementById("round");
const scores = document.getElementById("scores");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  let rockResult = playRound("rock", getComputerChoice());
  round.innerText = rockResult;
  let rockScore = incScore(rockResult);
  scores.innerText = rockScore;

});
paper.addEventListener("click", () => {
  let paperResult = playRound("paper", getComputerChoice());
  round.innerText = paperResult;
});
scissors.addEventListener("click", () => {
  let scissorResult = playRound("scissors", getComputerChoice());
  round.innerText = scissorResult;
});

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
        };

        function incScore(result) {
          
          if (result.includes("win")) {
            playerScore++;
          } else if (result.includes("lose")) {
            computerScore++;
          } else {

          }
          return `Scores: ${playerScore} : ${computerScore}`;
        };


   function game() {
    

     

      if (playerScore > computerScore) {
        return "you win the game";
      } else if (playerScore < computerScore) {
        return "computer wins the game";
      } else {
        return "it is a draw"};
      };

        
        