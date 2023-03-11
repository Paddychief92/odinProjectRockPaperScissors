const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const interface = document.getElementsByClassName("interface");
const buttons = document.getElementsByClassName("buttons");
const output = document.getElementsByClassName("output");

rock.addEventListener("click", () => console.log(playRound("rock", getComputerChoice())));
paper.addEventListener("click", () => console.log("you clicked paper"));
scissors.addEventListener("click", () => console.log("you clicked scissors"));



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

   /* function game(playerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    let result = [];

    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);      
    return result;

     /*  if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }}; */

     /*  if (playerScore > computerScore) {
        return "you win the game";
      } else if (playerScore < computerScore) {
        return "computer wins the game";
      } else {
        return "it is a draw"; */