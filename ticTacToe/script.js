let boxes = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let restart = document.getElementById("btn");
let turnX = true;
let count = 0;
let win = false;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// restart
restart.addEventListener("click",(e)=>{
    // enable all the boxes
    enabling();

    for(let box of boxes){
        box.innerText="";
        msg.classList.remove("show");
    }

})


// basic frontend working
let box = boxes.forEach((x) => {
    x.addEventListener("click", () => {
        if (turnX) {
            x.innerText = "X";
            x.style.color = "blue";
            turnX = false;
        } else {
            x.innerText = "O";
            x.style.color = "red";
            turnX = true;
        }
        x.disabled = true;
        count += 1;
        checker(x)
        if(count===9 && win===false){
            draw();
        }
    })
});

// winner
let winnerOfTheGame = (winner) => {
    msg.innerText=`Winner : ${winner}`;
    msg.classList.add("show")
    disabling();
}

// draw

let draw = () => {
    msg.innerText=`Draw`;
    msg.classList.add("show")
}
// disable all the box
let disabling = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// enable all the box
let enabling = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}

// winnerDeciding
let checker = (x) => {
    let pos1, pos2, pos3;
    for (let pattern of winningPatterns) {

        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                let winner = pos1;
                winnerOfTheGame(winner);
                win = true;
            }
            // console.log(`pattern:${pattern}`)
        }
    }
    if(win===false){
        return false;
    }

}

