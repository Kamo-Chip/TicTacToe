const boxes = Array.from(document.getElementsByClassName("grid-item"));
const grid = document.getElementById("grid-container");
const btnPlayer = document.getElementById("player");
const btnPc = document.getElementById("pc");
const choiceContainer = document.getElementById("choice-container");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let isAgainstPc = false;

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]

    return { board }
})()

const displayController = (() => {

    const displayBoard = () => {
        //console.log(boxes)
        grid.style.visibility = "visible";
        for (let i = 0; i < gameBoard.board.length; i++) {
            
            boxes[i].innerText = gameBoard.board[i]
        }
    }
    return { displayBoard }
})()

const Player = (symbol) => {
    const getSymbol = () => { return symbol }
    return { getSymbol }
}


const Game = (() => {
    let count = 1
    let playerOne;
    let playerTwo;

    const placeSymbol = (e) => {
        if (e.target.innerText == "") {
            if (count % 2 == 0) {
                boxes[e.target.id].innerText = playerTwo.getSymbol()
                e.target.innerText = playerTwo.getSymbol()
            } else {
                boxes[e.target.id].innerText = playerOne.getSymbol()
                e.target.innerText = playerOne.getSymbol()
            }
            if (checkWin()) {
                grid.style.visibility = "hidden";
                result.style.height = "10rem";
                result.style.width = "15rem";
                if (count % 2 == 0) {
                    result.innerText = `${playerTwo.getSymbol()} won!` ;
                    result.style.visibility = "visible";
                    result.appendChild(restart)
                    //Game.start();     

                } else {
                    result.innerText = `${playerOne.getSymbol()} won!`;
                    result.style.visibility = "visible";
                    result.appendChild(restart)
                    //Game.start()
                }
            }
            if (count == 9 && !checkWin()) {
                result.innerText = `No winner!` ;
                result.style.visibility = "visible";
                result.appendChild(restart)
            }
            count++
        }
    }

    const setUp = () =>{
        if (!isAgainstPc){
            playerOne = Player(prompt("Enter symbol:"));
            playerTwo = Player(prompt("Enter symbol:"));

            boxes.forEach(element => {
                element.addEventListener("click", placeSymbol)
            })

            restart.addEventListener("click", ()=>{
                result.style.innerText = "";
                result.style.height = "0rem";
                result.style.width = "0rem";
                result.style.visibility = "hidden";
                count = 1;
                displayController.displayBoard()
            })
            Game.start()
        }else{
          //PC code goes here  
        }
    }

    
    const start = () => {
        choiceContainer.style.visibility = "hidden";
     
    
        displayController.displayBoard()
    }

    const checkWin = () => {
        if (checkHorizontal() || checkVertical() || checkDiagonal()) {
            return true
        }
    }

    const checkHorizontal = () => {

        if (boxes[0].innerText == boxes[2].innerText && boxes[2].innerText == boxes[1].innerText && boxes[0].innerText != "") {
            return true
        }
        if (boxes[3].innerText == boxes[5].innerText && boxes[5].innerText == boxes[4].innerText && boxes[3].innerText != "") {
            return true
        }
        if (boxes[6].innerText == boxes[8].innerText && boxes[8].innerText == boxes[6].innerText && boxes[6].innerText != "") {
            return true
        }
        return false
    }

    const checkVertical = () => {

        if (boxes[0].innerText == boxes[6].innerText && boxes[6].innerText == boxes[3].innerText && boxes[0].innerText != "") {
            return true
        }
        if (boxes[1].innerText == boxes[7].innerText && boxes[7].innerText== boxes[4].innerText && boxes[1].innerText != "") {
            return true
        }
        if (boxes[2].innerText == boxes[8].innerText && boxes[8].innerText == boxes[5].innerText && boxes[2].innerText != "") {
            return true
        }
        return false
    }

    const checkDiagonal = () => {

        if (boxes[0].innerText == boxes[8].innerText && boxes[8].innerText == boxes[4].innerText && boxes[0].innerText != "") {
            return true
        }
        if (boxes[2].innerText == boxes[6].innerText && boxes[6].innerText == boxes[4].innerText && boxes[2].innerText != "") {
            return true
        }
        return false
    }
    return { start,setUp }
})()

btnPc.addEventListener("click", () => {
    isAgainstPc = true;
    Game.start();
});
btnPlayer.addEventListener("click", Game.setUp)