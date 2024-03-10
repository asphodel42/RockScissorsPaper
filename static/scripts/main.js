const choices = document.querySelectorAll(".player-button");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const computerButton = document.querySelectorAll(".computer-button");
const resetButton = document.querySelector("reset-button");
const gameTitle = document.querySelector(".game-label");


function resetScore(){
    computerButton.forEach((button) =>{
        if (button.classList.contains("computer-active-button")){
            button.classList.remove("computer-active-button");
        }
    });
    computerPoints.innerHTML = 0;
    playerPoints.innerHTML = 0;
    gameTitle.innerHTML = "Start the game!";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const computerChoices = ['ROCK', 'SCISSORS', 'PAPER'];
        let arrayNum = Math.floor(Math.random() * 3);
        let computerChoice = computerChoices[arrayNum];
        let cPoints = parseInt(computerPoints.innerHTML);
        let pPoints = parseInt(playerPoints.innerHTML);

        computerButton.forEach((button) =>{
            if (button.classList.contains("computer-active-button")){
                button.classList.remove("computer-active-button");
            }
        });

        let activeElement = document.getElementById(arrayNum);
        activeElement.classList.add("computer-active-button");

        if (choice.id === computerChoice){
            gameTitle.innerHTML = "It's a tie";
        } else if ((choice.id ==="ROCK" && computerChoice === "SCISSORS")
        ||         (choice.id === "SCISSORS" && computerChoice === "PAPER")
        ||         (choice.id === "PAPER" && computerChoice === "ROCK")){
            playerPoints.innerHTML = pPoints + 1;
            gameTitle.innerHTML = "You won!";
        } else{
            computerPoints.innerHTML = cPoints + 1;
            gameTitle.innerHTML = "You lost =(";
        }
    });
});
