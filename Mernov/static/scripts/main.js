const choices = document.querySelectorAll(".player-button");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const computerButton = document.querySelectorAll(".computer-button");
const resetButton = document.querySelector("reset-button");


function resetScore(){
    computerButton.forEach((button) =>{
        if (button.classList.contains("computer-active-button")){
            button.classList.remove("computer-active-button");
        }
    });
    computerPoints.innerHTML = 0;
    playerPoints.innerHTML = 0;
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

        if (choice.id === "ROCK"){
            if(computerChoice === "PAPER")
                computerPoints.innerHTML = cPoints + 1;
            else if(computerChoice === "SCISSORS")
                playerPoints.innerHTML = pPoints + 1;
        } else if (choice.id === "SCISSORS"){
            if(computerChoice === "PAPER")
                playerPoints.innerHTML = pPoints + 1
            else if(computerChoice === "ROCK")
                computerPoints.innerHTML = cPoints + 1
        } else if (choice.id === "PAPER")
            if(computerChoice === "SCISSORS")
                computerPoints.innerHTML = cPoints + 1
            else if(computerChoice === "ROCK"){
                playerPoints.innerHTML = pPoints + 1
        }
    });
});


