const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const round = document.getElementById("round");
const scores = document.getElementById("scores");
const winner = document.getElementById("finalResult");
const buttons = document.getElementById("buttons");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  let rockResult = playRound("rock", getComputerChoice());
  round.innerText = rockResult;
  let rockScore = incScore(rockResult);
  scores.innerText = rockScore;
  let gameWinner = game();
  winner.innerText = gameWinner;
});
paper.addEventListener("click", () => {
  let paperResult = playRound("paper", getComputerChoice());
  round.innerText = paperResult;
  let paperScore = incScore(paperResult);
  scores.innerText = paperScore;
  let gameWinner = game();
  winner.innerText = gameWinner;
});
scissors.addEventListener("click", () => {
  let scissorResult = playRound("scissors", getComputerChoice());
  round.innerText = scissorResult;
  let scissorsScore = incScore(scissorResult);
  scores.innerText = scissorsScore;
  let gameWinner = game();
  winner.innerText = gameWinner;
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
    
      if (playerScore === 5) {
        buttons.remove();
        return "you win the game refresh to play again!";
      } else if (computerScore === 5) {
        buttons.remove();
        return "computer wins the game refresh to play again!";
      } else {
        return "First to 5 wins!"};
      };

        
        