const boxes = Array.from(document.getElementsByClassName("grid-item"))

const gameBoard = (() =>{
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
    const getName = () => {name}
    const getSymbol = () => {symbol}

    return{getName, getSymbol}
}

boxes.forEach(element => {
    element.addEventListener("click", placeSymbol)
});

function placeSymbol(e){
    
}

displayController.displayBoard()