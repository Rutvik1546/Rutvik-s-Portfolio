let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userWinPara = document.querySelector("#userWin");
let compWinPara = document.querySelector("#compWin");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");

     
        playGame(userChoice);
    });
});

const drawGame = () => {
    // console.log("Game Draw");
    msg.innerText = "Game Draw, Try again";
    msg.style.backgroundColor = "rgb(88, 85, 85)";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userWinPara.innerText = userScore;
        msg.innerText = `You Win!,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    }else{
        compScore++;
        compWinPara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) =>{
    console.log("User Choice = ", userChoice);
    let compChoice  = genCompChoice();
    console.log("Computer Choice = ", compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //rock, paper
            userWin = compWin === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


const genCompChoice = () => {
    let option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}