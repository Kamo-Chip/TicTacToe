const boxes = Array.from(document.getElementsByClassName("grid-item"))

const gameBoard = (() =>{
    let board = ["", "", "", "", "", "", "", "", ""]
    
    return {board}
})()

const displayController = (() =>{
    
    const displayBoard = () =>{
        for(let i = 0; i < gameBoard.board.length; i++){
            boxes[i].innerText = gameBoard.board[i]
        }
    }
    return {displayBoard}
})()

const Player = (name, symbol) =>{

    const getName = () => {return name}
    const getSymbol = () => {return symbol}
    return{getName, getSymbol}
}

const Game = (() =>{
    // let playerOne
    // let playerTwo
    let playerOne = Player(prompt("Player 1 enter name"), prompt("Choose symbol"))
    let playerTwo = Player(prompt("Player 2 enter name"), prompt("Choose symbol"))
    let count = 1
    // const pcBtn = document.getElementById("pc")
    //     const p2Btn = document.getElementById("p2")
    //     p2Btn.addEventListener("click", playWithPlayer)
    // const init = () =>{
    //     //pcBtn.addEventListener("click", returnId)
        
    // }

    // const playWithPlayer = () =>{
        
    // }
    const start = (e) =>{
        
        // console.log(e)
        // const body = document.getElementsByTagName("body")
        boxes.forEach(element => {
            element.addEventListener("click", placeSymbol)
        })

        // if(returnId == "p2"){
           
        //     const playerDetails = document.createElement("div")
        //     playerDetails.id = "player-details"
    
        //     const label1 = document.createElement("label")
        //     label1.innerText = "Player 1"
        //     const label2 = document.createElement("label")
        //     label2.innerText = "Player 2"
        //     const xBtn = document.createElement("button")
        //     xBtn.innerText = "X"
        //     const oBtn = document.createElement("button")
        //     oBtn.innerText = "O"

        //     playerDetails.append(label1, xBtn, oBtn)
        //     body.append(playerDetails)
        // }

        displayController.displayBoard()

    }

    const placeSymbol= (e) =>{
        if(e.target.innerText == ""){
            if(count % 2 == 0){
                boxes[e.target.id] = playerTwo.getSymbol()
                e.target.innerText = playerTwo.getSymbol()
            }else{
                boxes[e.target.id] = playerOne.getSymbol()
                e.target.innerText = playerOne.getSymbol()
            }
            if(checkWin()){
                if(count % 2 == 0){
                    console.log(`${playerTwo.getName()} won!`)
                }else{
                    console.log(`${playerOne.getName()} won!`)
                }
            }
            if(count == 9 && !checkWin()){
                console.log("No winner!")
            }
            count++
        }
    }

    const checkWin = () =>{
        if(checkHorizontal() || checkVertical() || checkDiagonal()){
            return true
        }
    }
    
    const checkHorizontal = () =>{
        
        if(boxes[0] == boxes[2] && boxes[2] == boxes[1] && boxes[0] != ""){
            return true
        }
        if(boxes[3] == boxes[5] && boxes[5] == boxes[4] && boxes[3] != ""){
            return true
        }
        if(boxes[6] == boxes[8] && boxes[8] == boxes[6] && boxes[6] != ""){
            return true
        }
        return false
    }

    const checkVertical = () =>{
        
        if(boxes[0] == boxes[6] && boxes[6] == boxes[3] && boxes[0] != ""){
            return true
        }
        if(boxes[1] == boxes[7] && boxes[7] == boxes[4] && boxes[1] != ""){
            return true
        }
        if(boxes[2] == boxes[8] && boxes[8] == boxes[5] && boxes[2] != ""){
            return true
        }
        return false
    }

    const checkDiagonal = () =>{
        
        if(boxes[0] == boxes[8] && boxes[8] == boxes[4] && boxes[0] != ""){
            return true
        }
        if(boxes[2] == boxes[6] && boxes[6] == boxes[4] && boxes[2] != ""){
            return true
        }
        return false
    }
    

    return {start}
})()

Game.start()

