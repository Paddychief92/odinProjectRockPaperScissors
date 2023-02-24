function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    randNum = Math.floor((Math.random() * 3) +1 );
    return choice[randNum];
};


