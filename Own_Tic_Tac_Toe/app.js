//Winnig Pattern
//0 1 2
//0 5 8
//0 4 6
//1 4 7
//2 5 8
//2 4 6
//3 4 5
//6 7 8

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let winPettern = [[0,1,2], [0,4,8], [0,3,6], [1,4,7],[2,5,8], [2,4,6], [3,4,5], [6,7,8]];
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "white";
            turnO = true;

        }
        box.disabled = true;
        let isWinner = checkWinner();
         count++;
         if(count === 9 && !isWinner)
            {
                isDraw();
            }


    })
});

let isDraw = () => {
    msg.innerText = "Game Draw";
    msgContainer.classList.remove("hide");
    disableBox();

}

const checkWinner = () => {
    for(let pattern of winPettern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(pos1val);
                showWinner(pos1val);
                return true;

            }
        } 

    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulatoins, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

}

let disableBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

let enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBox();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
